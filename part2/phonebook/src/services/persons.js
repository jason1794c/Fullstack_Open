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

const updateNumber = (person, newNumber) => {
    const url = baseUrl + person.id;
    const request = axios.put(url, {
        ...person,
        number: newNumber,
    });
    const response = request.then(response => response.data)
    return response;
}

export { getAll, addPerson, deletePerson, updateNumber };