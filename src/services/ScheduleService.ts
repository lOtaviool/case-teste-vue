import axios from "axios";
const URL = "http://localhost:3001/data";


async function getData(search: string, page: string){
    try {
        const response = await axios.get(URL, {
        params: {
            search, 
            _page: page, 
            _limit: 3
        }
        });

        const items = response.data;
        const total = parseInt(response.headers['x-total-count']);

        return { items, total };
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        return { items: [], total: 0 };
    }
}

export const api = {
    getData
} 