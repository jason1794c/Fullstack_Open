import axios from 'axios';

const baseUrl = "http://localhost:3001/persons/";

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const addPerson = newPerson => {
    const request = axios.post(baseUrl, newPerson);
    return request.then((response) => response.data);
}

const deletePerson = person => {
    const url = baseUrl + person.id;
    const request = axios.delete(url);
    return request.then(response => response.data);
}

export { getAll, addPerson, deletePerson };