import React, {useState,useEffect} from 'react'
import StarRatingComponent from 'react-star-rating-component';


const Filter = ({getSearchData}) => {
    const [searchInput, setSearchInput] = useState({searchInput:''})
    const [searchRate, setSearchRate] = useState(0)
    const handleSearach = (e) => {
        setSearchInput({...searchInput,[e.target.name]:e.target.value})
        getSearchData({...searchInput,searchRate})
    }
    useEffect(() => {
        getSearchData({...searchInput,searchRate});
    },[searchInput,searchRate]);
    return (
        <div>
            <form >
            <input type='text' name='searchInput' onChange={handleSearach}></input>
            <br />
            <StarRatingComponent className='stars'
                name="serchRate" 
                starCount={5}
                value={searchRate}
                onStarClick={(value)=>setSearchRate(value)}
                />
            </form>
        </div>
    )
}

export default Filter
