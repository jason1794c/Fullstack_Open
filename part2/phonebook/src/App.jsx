import { useState, useEffect } from "react";
import {
    getAll,
    addPerson,
    deletePerson,
    updateNumber,
} from "./services/persons";
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
        let tempInfo = [];

        if (newNumber.length === 0 || newName.length === 0) {
            return alert("Please enter a name or phone number");
        }

        if (persons.some((person) => person.name === newName)) {
            if (
                window.confirm(
                    `${newName} is already added to phonebook, replace the old number with a new one?`
                )
            ) {
                persons.forEach((person) => {
                    if (person.name === newName) {
                        updateNumber(person, newNumber);
                    }
                });
                tempInfo = [...persons];
            }
        } else {
            // Adding the new person to db
            let id;

            do {
                id = Math.floor(Math.random() * 10000 + 1);
            } while (persons.some((person) => person.id === id));

            const newPerson = {
                name: newName,
                number: newNumber,
                id: id.toString(),
            };
            addPerson(newPerson);
            tempInfo = [...persons, newPerson];
        }

        const tempFilteredPersons = persons.filter((person) =>
            person.name.toLowerCase().includes(filterInput.toLowerCase())
        );
        setFilteredPersons(tempFilteredPersons);

        setPersons(tempInfo);
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
    };

    const handleFilterChange = (event) => {
        const tempFilter = event.target.value;
        const tempPersons = persons.filter((person) =>
            person.name.toLowerCase().includes(tempFilter.toLowerCase())
        );

        setFilterInput(tempFilter);
        setFilteredPersons(tempPersons);
    };

    const handleDelete = (event, person) => {
        event.preventDefault();
        if (window.confirm("Delete " + person.name + "?")) {
            deletePerson(person);
            setPersons([...persons])
        }
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter
                filterInput={filterInput}
                handleFilterChange={handleFilterChange}
            />
            <h2>Add a New</h2>
            <PersonForm
                value={{ name: newName, number: newNumber }}
                onChange={onChangeFunctions}
                onSubmit={addInfo}
            />
            <h2>Numbers</h2>
            <Persons persons={filteredPersons} handleDelete={handleDelete} />
        </div>
    );
}

export default App;
