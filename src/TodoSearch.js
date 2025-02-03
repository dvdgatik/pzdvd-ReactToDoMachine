import './TodoSearch.css'
function TodoSearch() {
    return (
        <input 
            className='TodoSearch'
            placeholder="Cortar Cebolla"
            onChange={e=>{console.log(e.target.value)}}
        />
    );
}

export { TodoSearch };