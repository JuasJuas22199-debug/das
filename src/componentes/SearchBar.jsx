function SearchBar({search, setSearch}){

    return(

        <div className="search">
            <i className="bi bi-search"></i>
            <input
                type="text"
                placeholder="Buscar Tarea..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />

        </div>

    )

}

export default SearchBar;