import React,{useState} from "react";
import{fontAwesomeIcon} from"@fontawesome/react-fontawesome";
import{faSearch} from "@fontawesome/free-solid-svg-icons";

const [search,setSearch] = useState("")
function handleChange(){
    setSearch(e.target.value)
   onSearching(search) 
}
 const searchForm = ({onSearching}) => {
    return ( 
        <form onChange = {handleChange} id="search-form">
            <input value = {search}type={"text"} placeholder="Search recent transactions.."/>
            <button><fontAwesomeIcon icon={faSearch}/></button>
        </form>
     );
 }
  
 export default searchForm;