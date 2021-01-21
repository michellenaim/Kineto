<p align="center">
  <img src="https://github.com/michellenaim/Kineto/blob/master/app/assets/images/Kineto_logo.png" />
</p>

###### [Live Site](https://kineto-app.herokuapp.com/#/)

## Table of Contents

  * [Background](#background)
  * [Technologies](#technologies)
  * [Features](#features)
    * [User Auth](#user-auth)
    * [Movie Trailers' Index](#movie-trailers-index)
    * [Genre Show](#genre-show)
    * [Upcoming Features](#upcoming-features)

## Background

Kineto is a full stack web application inspired by Netflix. It is a streaming service that allows people to watch movie trailers on-demand. Users can sign up by creating an account, sign in if they already have one or use a demo user to browse the videos on the web application. On the movie trailers index page (/browse), users can view one main movie trailer as well as movie trailers separated by genre. Users can also go to each genre's show page to view movie trailers per genre.

In the backend, Kineto was built using a Ruby on Rails framework. In terms of database, PostgreSQL was used to store data along with Amazon AWS S3 and Active Storage to store the movie trailer thumbnails and videos. In the frontend, React and Redux were used to create a single-page web application to enable smooth navigation for users.

The future directions for Kineto are to enable users to view the movie trailers filtered by genre in a carousel, add movie trailers to their list as well as search for a specific movie trailer or genre. 

## Technologies

* Ruby on Rails
* PostgreSQL
* React.js
* Redux.js
* Webpack
* Amazon AWS S3

## Features

### User Auth 

![alt tag](https://github.com/michellenaim/Kineto/blob/master/readme_gifs/user_auth.gif)

* Users can sign up by creating an account on Kineto. They can also sign in to view the movie trailers' homepage.
* Users may also skip the signing up process by clicking on the demo user - this will take them directly to the movie trailers' homepage.
* Once logged in, the user is redirected to the browse page where they can view the movie trailers and the nav bar changes.

---

### Movie Trailers Index

![index](https://github.com/michellenaim/Kineto/blob/master/readme_gifs/movie_trailers_index.gif)

* A main movie trailer is rendered when clicking on "Home" on the nav bar. Under it, the genres are listed with movie trailers filtered for each genre.
* Users can mute or unmute the main movie trailer.
* Users can hover over the movie trailers thumbnail under each genre to reveal the movie trailer, its title and the runtime of the movie.
```javascript
  const preview = (
    <div className="movie-item">
      <Link to={`/movies/${movie.id}`}>
        <video
          className="movie-video"
          autoPlay
          height="100%"
          key={movie.movieURL}
        >
          <source src={movie.movieURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="movie-info">
          <div className="movie-info-left">
            <p className="movie-title">{movie.title}</p>
            <p className="movie-runtime">{movie.runtime}</p>
          </div>
          <div>
            <div className="list-button">
              <i className="fas fa-plus-circle"></i>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
  const image = (
      <img width="250" src={movie.photoURL} />
  );

  return (
      <div className="genre-item" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
        {selected ? preview : image}
    </div>
  )
```
---

### Genre Show

![genre_show](https://github.com/michellenaim/Kineto/blob/master/readme_gifs/genre_show.gif)

* Users can select a genre in the nav bar genre dropdown list. This takes them to the genre show page.
* Similar to the movie trailers' index page, users can hover on the movie trailers' thumbnail to view the trailer, title and movie runtime.
* A selector is used to filter the movies by genre.

```javascript
const selectMoviesByGenre = (state, genreId) => {
  const moviesgenres =  Object.values(state.entities.moviesgenres).filter((moviesgenre) => {
      return moviesgenre.genre_id === Number(genreId)
  })

  let newArray = [] 
  Object.values(state.entities.movies).forEach((movie) => {
    moviesgenres.forEach((moviesgenre) => {
      if (moviesgenre.movie_id === movie.id) {
        newArray.push(movie)
      }
    })
  })
  return newArray

};

export default selectMoviesByGenre
```
---

### Upcoming Features:

* Users will be able to search for a specific movie or genre using the search bar in the nav bar.
* Users will be able to click on a movie trailer to view the movie trailer in full-screen.
* Users will be able to add and remove movie trailers to their personal list.
