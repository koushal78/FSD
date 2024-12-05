import './MoviesList.css'
import movies from './movies'

const MoviesList = () => {
    console.log(movies)
  return (
    <div>
        <div className='container'>


       
        {
            
            movies.map((e)=>(
                
                <div key={e.id} className='movies_card' >
                    <img src={e.images} alt="movies image" />
                    <h1 style={{color:'black'}}>{e.title}</h1>
                    <p>{e.cost}</p>
                </div>
            ))
        }
         </div>
    </div>
  )
}

export default MoviesList