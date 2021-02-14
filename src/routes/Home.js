import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.scss';

class Home extends React.Component {

  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => { // async(비동기) > axios.get()을 실행하려면 시간이 필요함
    const {
      data: {
        data : { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); // await > getMovies() 함수 내부의 axios.get()의 실행 완료를 기다렸다가 끝나면 계속 진행
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading 
          ? (
            <div className="loader">Loading...</div>
          )
          : (
            <div className="movie">
              {movies.map((movie) => {
              return <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />; 
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;