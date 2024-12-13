const Filter = ({ filterInput, handleFilterChange }) => {

    return (
        <form>
            <div>
                filter shown with: <input value={filterInput} onChange={handleFilterChange} />
            </div>
        </form>
    )
}

export default Filter;