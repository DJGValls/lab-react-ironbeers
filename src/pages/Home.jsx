import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
    
        <section>
            <Link to={"/beers"}>
                <img src="../assets/beers.png" alt="beers" />
                <h3>All Beers</h3>
                <p>A list of a lot of beers</p>
            </Link>
        </section>


        <section>
        <Link to={"/beers/random"}>
                <img src="../assets/random-beer.png" alt="random-beers" />
                <h3>Random Beer</h3>
                <p>Find a random beer here!</p>
            </Link>
        </section>


        <section>
        <Link to={"/beers/newBeer"}>
                <img src="../assets/new-beer.png" alt="new-beers" />
                <h3>New Beer</h3>
                <p>Add a random beer</p>
            </Link>
        </section>

    
    
    </div>
  )
}

export default Home