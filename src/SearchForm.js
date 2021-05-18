import React,{useContext} from 'react'
import {AppContext} from "./context"
const SearchForm = () => {
  const {data,query,setQuery} = useContext(AppContext)
  // console.log(error)

  return  <div className="col-10 mx-auto text-center">
<form onSubmit={(e)=>e.preventDefault()}>
<div>
  <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
</div>
<button type="submit">search</button>
  </form>
    </div>

  

}

export default SearchForm
