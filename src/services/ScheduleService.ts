import axios from "axios";
const URL = "http://localhost:3001";


async function getData(search: string){
    const response = axios.get(`${URL}/data?paciente.nome=${search}&_sort=dataCriacao&_order=desc&_page=2&_limit=4`);
    return (await response);
}

export const api = {
    getData
} 