const PersonForm = ({ value, onChange, onSubmit }) => {
    return (
        <form>
            <div>
                Name: <input value={value.name} onChange={onChange.name} />
            </div>
            <div>
                Number: <input value={value.number} onChange={onChange.number} />
            </div>
            <div>
                <button type="submit" onClick={onSubmit}>
                    add
                </button>
            </div>
        </form>
    );
}

export default PersonForm;