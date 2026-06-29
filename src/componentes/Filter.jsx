function Filter({filter, setFilter }) {

    return(

    <div className="filter">

    <select 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
    >

        <option value="all">Todas</option>
        <option value="completed">Completadas</option>
        <option value="pending">Pendientes</option>

    </select>
    </div>
    )
}

export default Filter;