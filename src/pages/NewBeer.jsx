import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function NewBeer() {

  const navigate = useNavigate()
  
  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("") 
  const [description, setDescription] = useState("")
  const [firstBrewed, setFirstBrewed] = useState("")
  const [brewersTips, setBrewersTips] = useState("")
  const [attenuationLevel, setAttenuationLevel] = useState(0)
  const [contributedBy, setContributedBy] = useState("")


  const handleNameChange = (event)=>{
    setName(event.target.value)
  }

  const handleTaglineChange = (event)=>{
    setTagline(event.target.value)
  }

  const handleDescriptionChange = (event)=>{
    setDescription(event.target.value)
  }

  const handleFirstBrewed = (event)=>{
    setFirstBrewed(event.target.value)
  }

  const handleBrewerTipsChange = (event)=>{
    setBrewersTips(event.target.value)
  }

  const handleAttenuationLevelChange = (event)=>{
    setAttenuationLevel(event.target.value)
  }

  const handleContributedBy = (event)=>{
    setContributedBy(event.target.value)
  }

  const handlOnSubmitForm = async (event)=>{
    event.preventDefault()
    const newBeer = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    }

    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      navigate("/beers")
    } catch (error) {
      console.log(error);
      navigate("/error")
    }
  }


  return (
    <div>

       <form>

        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={handleNameChange}/>
        <br />
        <label htmlFor="tagline">Tagline</label>
        <input type="text" name="tagline" onChange={handleTaglineChange}/>
        <br />
        <label htmlFor="description">Descriptions</label>
        <input type="text" name="description" onChange={handleDescriptionChange}/>
        <br />
        <label htmlFor="firstBrewed">First Brewed</label>
        <input type="text" name="firstBrewed" onChange={handleFirstBrewed}/>
        <br />
        <label htmlFor="brewersTips">Brewers Tips</label>
        <input type="text" name="brewersTips" onChange={handleBrewerTipsChange}/>
        <br />
        <label htmlFor="attenuationLevel">Attenuation Level</label>
        <input type="number" name="attenuationLevel" onChange={handleAttenuationLevelChange}/>
        <br />
        <label htmlFor="contributedBy">Contributed By</label>
        <input type="text" name="contributedBy" onChange={handleContributedBy}/>
        <br />
        <button onClick={handlOnSubmitForm}>Add a beer</button>

      </form>
    
    </div>
  )
}

export default NewBeer