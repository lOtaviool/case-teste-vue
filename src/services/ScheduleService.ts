import axios from "axios";
const URL = "http://localhost:3001";


async function getData(){
    const response = axios.get(`${URL}/data?_sort=dataCriacao&_order=desc`);
    return (await response);
}

export const api = {
    getData
} 