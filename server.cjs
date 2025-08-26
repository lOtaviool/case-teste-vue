// server.cjs
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Middleware customizado
server.use((req, res, next) => {
  const db = router.db;
  let data = db.get("data").value();

  if (req.query.search) {
    const search = req.query.search.toLowerCase();
    data = data.filter(
      item =>
        item.medico.nome.toLowerCase().includes(search) ||
        item.paciente.nome.toLowerCase().includes(search)
    );
  }

  data = data.sort((a, b) => new Date(b.dataCriacao) - new Date(a.dataCriacao));
  
  const page = parseInt(req.query._page) || 1;
  const limit = parseInt(req.query._limit) || data.length;
  const start = (page - 1) * limit;
  const end = page * limit;

  res.setHeader("Access-Control-Expose-Headers", "X-Total-Count");
  res.setHeader("X-Total-Count", data.length.toString());
  res.jsonp(data.slice(start, end));
});

server.use(router);

server.listen(3001, () => {
  console.log("Mock API rodando em http://localhost:3001");
});
