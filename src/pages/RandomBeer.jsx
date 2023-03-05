import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import ClockLoader from "react-spinners/ClockLoader";

function RandomBeer() {

  const navigate = useNavigate()
    const [allBeers, setAllBeers]=useState(null)
    const [isFeftching, setIsFetching] = useState(true)

    useEffect(()=>{
        getData()
    },[])

    const getData = async ()=>{
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            // console.log(response);
            setAllBeers(response)
            setIsFetching(false)
        } catch (error) {
            console.log(error);
            
            navigate("/error")
        }
    }

    if (isFeftching === true) {
        return (
            <div style={{display: "flex", justifyContent:"center", padding: "20px"}}>
                <ClockLoader color="red" size={200}/>
            </div>       
        )
    }

    
console.log(allBeers);

  return (
    <div>

    random
        <img src={allBeers.data.image_url} alt={allBeers.data.name} height={"200px"}/>
        <h1>{allBeers.data.name}</h1>
        <h3>{allBeers.data.tagline}</h3>
        <p>{allBeers.data.first_brewed}</p>
        <p>{allBeers.data.attenuation_level}</p>
        <p>{allBeers.data.description}</p>
        <p>{allBeers.data.contributed_by}</p>
    
    
    
    </div>
  )
}

export default RandomBeer