import React from "react";
import './App.css';
import AddModal from "./components/AddModal";
import ListMovies from "./components/ListMovies";
import {useState} from 'react'
import Filter from './components/Filter'
import Movies from "./components/Movies";

const App = ()=>{

    const [movies,setMovies]=useState(Movies)
    const [searchInput, setSearchInput] = useState({searchInput:'',searchRate:0})
    const getData = (data) => {
      console.log(data) 
        setMovies([...movies,data]);
    }
    const getSearchData = (searchData) => {
      setSearchInput(searchData);
    };
    

    return (
      <div className="App">
        <header className="App-header">
          <h1>Movie List</h1>
          <Filter getSearchData={getSearchData}   />
          <ListMovies searchInput={searchInput} movies={movies}   />

          <AddModal getData={getData}  />
        </header>
      </div>
    );

  }  


export default App;
