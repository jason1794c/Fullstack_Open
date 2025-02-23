import { useState, useEffect } from "react";
import { getAll, addPerson } from "./services/persons";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Filter from "./Filter";

function App() {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filteredPersons, setFilteredPersons] = useState([...persons]);
    const [filterInput, setFilterInput] = useState("");

    useEffect(() => {
        getAll().then((data) => {
            setPersons(data);
            setFilteredPersons(data);
        });
    }, []);

    const addInfo = (event) => {
        event.preventDefault();

        for (let person of persons) {
            if (person.name === newName) {
                return alert(`${newName} is already added to phonebook`);
            }
        }

        if (newNumber.length === 0 || newName.length === 0) {
            return alert("Please enter a name or phone number");
        }

        // Adding the new person to db
        const newPerson = { name: newName, number: newNumber, id: persons.length + 1 };
        addPerson(newPerson);

        const tempInfo = [...persons, newPerson];
        setPersons(tempInfo);
        setFilteredPersons(tempInfo);
        setNewName("");
        setNewNumber("");
    };

    const handleName = (event) => {
        const tempName = event.target.value;
        setNewName(tempName);
    };

    const handleNumber = (event) => {
        const tempNumber = event.target.value;
        setNewNumber(tempNumber);
    };

    const onChangeFunctions = {
        name: handleName,
        number: handleNumber,
    }

    const handleFilterChange = (event) => {
        const tempFilter = event.target.value;
        const tempPersons = persons.filter((person) => person.name.toLowerCase().includes(tempFilter.toLowerCase()));

        setFilterInput(tempFilter);
        setFilteredPersons(tempPersons);
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filterInput={filterInput} handleFilterChange={handleFilterChange} />
            <h2>Add a New</h2>
            <PersonForm value={{ name: newName, number: newNumber }} onChange={onChangeFunctions} onSubmit={addInfo} />
            <h2>Numbers</h2>
            <Persons persons={filteredPersons} />
        </div>
    );
}

export default App;
