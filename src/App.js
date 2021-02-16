import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./Movie.css";

class App extends React.Component {
    state = {
        isLoading:true,
        movies: []
    };
    
    //api를 받아오는데 시간이 걸린다는 것을 알리는 async await "너는 이걸 기다려야해라는 말"을 하는 것과 같다.
    //axios가 끝날때 까지 기다렸다가 계속한다.
    getMovies = async () => {
        //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        //console.log(movies.data.data.movies);
        const {
            data: {
                data: {movies}
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        //this.setState({movies : movies});
        this.setState({ movies, isLoading:false });
    }
    componentDidMount(){
        this.getMovies();
    }
    render(){
        const {isLoading, movies} = this.state;
        return (
         <section className="container">
            {isLoading ?(
                <div className="loader">
                    <span className="loader__text">Loading...</span>
                </div>
             ):(
                <div className="movies">
                {movies.map(movie => (
                 //map에는 무조건 return이 필요하다.
                 <Movie 
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                />
                ))}
                </div>
            )}
         </section>

        )
    }
}

export default App;