import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import ClockLoader from "react-spinners/ClockLoader";


function BeerDetails() {

    const params = useParams()
    const navigate = useNavigate()
    // console.log(params.beerId.substr(0, params.beerId.length - 1));
    const fixParams = params.beerId.substr(0, params.beerId.length - 1)
    const [beerDetails, setBeerDetails] = useState(null)
    const [isFeftching, setIsFetching] = useState(true)
    useEffect(()=>{
        getData();
    }, [])

    const getData = async () =>{
        try {
          const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${fixParams}`)
          console.log(response);
        setBeerDetails(response)
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
        <img src={beerDetails.data.image_url} alt={beerDetails.data.name} height={"200px"}/>
        <h1>{beerDetails.data.name}</h1>
        <h3>{beerDetails.data.tagline}</h3>
        <p>{beerDetails.data.first_brewed}</p>
        <p>{beerDetails.data.attenuation_level}</p>
        <p>{beerDetails.data.description}</p>
        <p>{beerDetails.data.contributed_by}</p>
    
    
    
    </div>
  )
}

export default BeerDetails