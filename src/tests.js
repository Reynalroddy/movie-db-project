import React, { useState, useEffect,useContext } from 'react'
import {AppContext} from "./context"
import useFetch from "./useFetch"
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
const idd ="tt0372784";
const SingleMovie = () => {

const {fetchData,data,setQuery,query} = useContext(AppContext);
const {id} = useParams();
const {isLoading,error,data:test} = useFetch(`&i=${idd}`)

const {Title:t,Poster:p,Year:y} = test;
console.log(t,p,y)
 useEffect(() => {
   setQuery(`&i=${id}`)
    fetchData()
  }, [id,setQuery,query,fetchData])
const {Title,Poster,Year} = data;

  return  <section>
<div className="container">
<div className="row">
  <div className="col-md-6">
<img src={Poster} className="img-fluid" alt=""/>
  </div>
<div className="col-md-6">
  <h4>{Title}</h4>
  <p className="w-75">{Poster}</p>
  <p>{Year}</p>
</div>

</div>

</div>
  </section>
}


export default SingleMovie;
