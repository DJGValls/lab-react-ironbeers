import { Link } from "react-router-dom"
function NotFound() {
  return (
    <div>
    
        <h3>no beer here?</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMFWo9V4wa5cFYG6C8ZI70mjNT2KNnC8m9I9qKHWb&s" alt="water" />
        <br />

    <Link to="/"> go go go, the beer is here</Link>
    
    </div>
  )
}

export default NotFound