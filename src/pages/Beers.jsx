import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

import ClockLoader from "react-spinners/ClockLoader";



function Beers() {

    const navigate = useNavigate()
    const [allBeers, setAllBeers]=useState(null)
    const [isFeftching, setIsFetching] = useState(true)

    useEffect(()=>{
        getData()
    },[])

    const getData = async ()=>{
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            // console.log(response);
            setAllBeers(response.data)
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

  return (
    <div>

        
        {allBeers.map((eachBeer)=>{
            return(
                <Link key={eachBeer._id} to={`/beers/${eachBeer._id}}`}>
                    <div>
                        <img src={eachBeer.image_url} alt={eachBeer.name} height={"200px"}/>
                        <h3>{eachBeer.name}</h3>
                        <br />
                        <h5>{eachBeer.tagline}</h5>
                        <br />
                        <p>{eachBeer.contributed_by}</p>

                    </div>
                </Link>
            )
        })}
    
    
    </div>
  )
}

export default Beers