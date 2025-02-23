const Persons = ({ persons, handleDelete }) => {
    return (
        <div>
            {persons.map((person) => (
                <div key={person.id}>
                    <p style={{ margin: 0 }}>
                        {person.name + " " + person.number}
                    </p>
                    <button type="button" onClick={() => handleDelete(person)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Persons;