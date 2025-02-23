const Persons = ({ persons, handleDelete }) => {
    return (
        <div>
            {persons.map((person) => (
                <div key={person.id}>
                    <p style={{ margin: 0, display: "inline" }}>
                        {person.name + " " + person.number}
                    </p>
                    <button type="button" onClick={(event) => handleDelete(event, person)} style={{display: "inline", margin: "10px" }}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Persons;