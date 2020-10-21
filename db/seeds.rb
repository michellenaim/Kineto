# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

case Rails.env
  when "development"
      Movie.destroy_all
      User.destroy_all
      Genre.destroy_all
      MovieGenre.destroy_all

      Movie.connection.execute('ALTER SEQUENCE movies_id_seq RESTART WITH 1')
      Genre.connection.execute('ALTER SEQUENCE genres_id_seq RESTART WITH 1')
      User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')


#--------------- DEMO USER ---------------------------------------

      demouser= User.create!(email: "test@test.com", password: "password")

#--------------- MOVIES  ------------------------------------------

      silence_of_the_lambs = Movie.create!(
        title: "The Silence Of The Lambs",
              description: "FBI trainee Clarice Starling ventures into a maximum-security asylum to pick the diseased brain of Hannibal Lecter, a psychiatrist turned cannibal.",
              year: 1991, 
              rating: "R", 
              runtime: "1h58",  
            )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/1/movie.mp4')
      silence_of_the_lambs.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/1/thumbail.jpg')
      silence_of_the_lambs.photo.attach(io: file, filename: 'thumbnail.jpg')


      enola_holmes = Movie.create!(
        title: "Enola Holmes",
        description: "While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.",
        year: 2020, 
        rating: "PG 13", 
        runtime: "2h03", 
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/2/movie.mp4')
      enola_holmes.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/2/thumbail.jpg')
      enola_holmes.photo.attach(io: file, filename: 'thumbnail.jpg')
      
      the_irishman = Movie.create!(
        title: "The Irishman",
        description: "Hit man Frank Sheeran looks back at the secrets he kept as a loyal member of the Bufalino crime family in this acclaimed film from Martin Scorsese.",
        year: 2019, 
        rating: "R", 
        runtime: "3h29",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/3/movie.mp4')
      the_irishman.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/3/thumbail.jpg')
      the_irishman.photo.attach(io: file, filename: 'thumbnail.jpg')
      

      i_am_mother = Movie.create!(
        title: "I Am Mother",
        description: "Following humanity's mass extinction, a teen raised alone by a maternal droid finds her entire world shaken when she encounters another human.",
        year: 2019, 
        rating: "TV-PG", 
        runtime: "1h53",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/4/movie.mp4')
      i_am_mother.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/4/thumbail.jpg')
      i_am_mother.photo.attach(io: file, filename: 'thumbnail.jpg')

      sleepless_in_seattle = Movie.create!(
        title: "Sleepless In Seattle",
        description: "Fate and a tenacious 8-year-old boy conspire to unite a lovelorn widower and an unhappily engaged journalist.",
        year: 1993, 
        rating: "PG", 
        runtime: "1h45",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/5/movie.mp4')
      sleepless_in_seattle.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/5/thumbail.jpg')
      sleepless_in_seattle.photo.attach(io: file, filename: 'thumbnail.jpg')

      murder_mystery = Movie.create!(
        title: "Murder Mystery",
        description: "On a long-awaited trip to Europe, a New York City cop and his hairdresser wife scramble to solve a baffling murder aboard a billionaire's yacht.",
        year: 2019, 
        rating: "PG-13", 
        runtime: "1h37",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/6/movie.mp4')
      murder_mystery.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/6/thumbail.jpg')
      murder_mystery.photo.attach(io: file, filename: 'thumbnail.jpg')

      the_ugly_truth = Movie.create!(
        title: "The Ugly Truth",
        description: "A chauvinistic morning-show commentator tries to prove the relationship theories he espouses on a segment called The Ugly Truth.",
        year: 2009, 
        rating: "R", 
        runtime: "1h36",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/7/movie.mp4')
      the_ugly_truth.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/7/thumbail.jpg')
      the_ugly_truth.photo.attach(io: file, filename: 'thumbnail.jpg')

#--------------- GENRES  ------------------------------------------

    thriller = Genre.create({ name: "Thriller"})
    mystery = Genre.create({ name: "Mysery"})
    drama = Genre.create({ name: "Drama"})
    romance = Genre.create({ name: "Romance"})


#--------------- MOVIE_GENRES LINK  --------------------------------

    MovieGenre.create(movie_id: silence_of_the_lambs.id, genre_id: thriller.id)
    MovieGenre.create(movie_id: enola_holmes.id, genre_id: mystery.id)
    MovieGenre.create(movie_id: enola_holmes.id, genre_id: drama.id)
    MovieGenre.create(movie_id: the_irishman.id, genre_id: drama.id)
    MovieGenre.create(movie_id: i_am_mother.id, genre_id: thriller.id)
    MovieGenre.create(movie_id: sleepless_in_seattle.id, genre_id: romance.id)
    MovieGenre.create(movie_id: sleepless_in_seattle.id, genre_id: drama.id)
    MovieGenre.create(movie_id: murder_mystery.id, genre_id: mystery.id)
    MovieGenre.create(movie_id: the_ugly_truth.id, genre_id: romance.id)




#--------------- LIST  ---------------------------------------------

      list1 = List.create(user_id: 1, movie_id: 2)
      


  when "production"
    Movie.destroy_all
      User.destroy_all
      Genre.destroy_all
      MovieGenre.destroy_all

      Movie.connection.execute('ALTER SEQUENCE movies_id_seq RESTART WITH 1')
      Genre.connection.execute('ALTER SEQUENCE genres_id_seq RESTART WITH 1')
      User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')


#--------------- DEMO USER ---------------------------------------

      demouser= User.create!(email: "test@test.com", password: "password")

#--------------- MOVIES  ------------------------------------------

      silence_of_the_lambs = Movie.create!(
        title: "The Silence Of The Lambs",
              description: "FBI trainee Clarice Starling ventures into a maximum-security asylum to pick the diseased brain of Hannibal Lecter, a psychiatrist turned cannibal.",
              year: 1991, 
              rating: "R", 
              runtime: "1h58",  
            )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/1/movie.mp4')
      silence_of_the_lambs.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/1/thumbail.jpg')
      silence_of_the_lambs.photo.attach(io: file, filename: 'thumbnail.jpg')


      enola_holmes = Movie.create!(
        title: "Enola Holmes",
        description: "While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.",
        year: 2020, 
        rating: "PG 13", 
        runtime: "2h03", 
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/2/movie.mp4')
      enola_holmes.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/2/thumbail.jpg')
      enola_holmes.photo.attach(io: file, filename: 'thumbnail.jpg')
      
      the_irishman = Movie.create!(
        title: "The Irishman",
        description: "Hit man Frank Sheeran looks back at the secrets he kept as a loyal member of the Bufalino crime family in this acclaimed film from Martin Scorsese.",
        year: 2019, 
        rating: "R", 
        runtime: "3h29",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/3/movie.mp4')
      the_irishman.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/3/thumbail.jpg')
      the_irishman.photo.attach(io: file, filename: 'thumbnail.jpg')
      

      i_am_mother = Movie.create!(
        title: "I Am Mother",
        description: "Following humanity's mass extinction, a teen raised alone by a maternal droid finds her entire world shaken when she encounters another human.",
        year: 2019, 
        rating: "TV-PG", 
        runtime: "1h53",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/4/movie.mp4')
      i_am_mother.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/4/thumbail.jpg')
      i_am_mother.photo.attach(io: file, filename: 'thumbnail.jpg')

      sleepless_in_seattle = Movie.create!(
        title: "Sleepless In Seattle",
        description: "Fate and a tenacious 8-year-old boy conspire to unite a lovelorn widower and an unhappily engaged journalist.",
        year: 1993, 
        rating: "PG", 
        runtime: "1h45",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/5/movie.mp4')
      sleepless_in_seattle.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/5/thumbail.jpg')
      sleepless_in_seattle.photo.attach(io: file, filename: 'thumbnail.jpg')

      murder_mystery = Movie.create!(
        title: "Murder Mystery",
        description: "On a long-awaited trip to Europe, a New York City cop and his hairdresser wife scramble to solve a baffling murder aboard a billionaire's yacht.",
        year: 2019, 
        rating: "PG-13", 
        runtime: "1h37",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/6/movie.mp4')
      murder_mystery.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/6/thumbail.jpg')
      murder_mystery.photo.attach(io: file, filename: 'thumbnail.jpg')

      the_ugly_truth = Movie.create!(
        title: "The Ugly Truth",
        description: "A chauvinistic morning-show commentator tries to prove the relationship theories he espouses on a segment called The Ugly Truth.",
        year: 2009, 
        rating: "R", 
        runtime: "1h36",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/7/movie.mp4')
      the_ugly_truth.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/7/thumbail.jpg')
      the_ugly_truth.photo.attach(io: file, filename: 'thumbnail.jpg')

#--------------- GENRES  ------------------------------------------

    thriller = Genre.create({ name: "Thriller"})
    mystery = Genre.create({ name: "Mysery"})
    drama = Genre.create({ name: "Drama"})
    romance = Genre.create({ name: "Romance"})


#--------------- MOVIE_GENRES LINK  --------------------------------

    MovieGenre.create(movie_id: silence_of_the_lambs.id, genre_id: thriller.id)
    MovieGenre.create(movie_id: enola_holmes.id, genre_id: mystery.id)
    MovieGenre.create(movie_id: enola_holmes.id, genre_id: drama.id)
    MovieGenre.create(movie_id: the_irishman.id, genre_id: drama.id)
    MovieGenre.create(movie_id: i_am_mother.id, genre_id: thriller.id)
    MovieGenre.create(movie_id: sleepless_in_seattle.id, genre_id: romance.id)
    MovieGenre.create(movie_id: sleepless_in_seattle.id, genre_id: drama.id)
    MovieGenre.create(movie_id: murder_mystery.id, genre_id: mystery.id)
    MovieGenre.create(movie_id: the_ugly_truth.id, genre_id: romance.id)




#--------------- LIST  ---------------------------------------------

      list1 = List.create(user_id: 1, movie_id: 2)
      
end