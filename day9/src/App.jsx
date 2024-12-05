import MoviesList from "./MoviesList"


const App = () => {
  return (
    <div>
      <h1 style={{
        backgroundColor: 'black',
        color: 'white',
        fontSize: "30px",
        textAlign: "center"
      }}> Netflix Clone App</h1>
      
      <MoviesList/>
    </div>
  )
}

export default App