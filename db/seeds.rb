# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

      Movie.destroy_all
      User.destroy_all
      Genre.destroy_all
      MovieGenre.destroy_all

      Movie.connection.execute('ALTER SEQUENCE movies_id_seq RESTART WITH 1')
      Genre.connection.execute('ALTER SEQUENCE genres_id_seq RESTART WITH 1')
      User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
      MovieGenre.connection.execute('ALTER SEQUENCE movies_id_seq RESTART WITH 1')


#--------------- DEMO USER ---------------------------------------

      demouser= User.create!(email: "demo@demouser.com", password: "password")

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

      the_roommate = Movie.create!(
        title: "The Roommate",
        description: "While acclimating to campus life, college freshman Sara begins to realize that her new roommate, Rebecca, is becoming obsessed with her.",
        year: 2011, 
        rating: "PG-13", 
        runtime: "1h31",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/8/movie.mp4')
      the_roommate.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/8/thumbail.jpg')
      the_roommate.photo.attach(io: file, filename: 'thumbnail.jpg')

      rebecca = Movie.create!(
        title: "Rebecca",
        description: "Her magical Monte Carlo romance leads to a secretive husband, a menacing housekeeper and an ominous mansion.",
        year: 2020, 
        rating: "PG-13", 
        runtime: "2h03",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/9/movie.mp4')
      rebecca.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/9/thumbail.jpg')
      rebecca.photo.attach(io: file, filename: 'thumbnail.jpg')

        the_platform = Movie.create!(
        title: "The Platform",
        description: "A slab of food descends floor by floor in a prison. The inmates above eat heartily, leaving those below starving and desperate. A rebellion is imminent.",
        year: 2019, 
        rating: "TV-MA", 
        runtime: "1h34",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/10/movie.mp4')
      the_platform.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/10/thumbail.jpg')
      the_platform.photo.attach(io: file, filename: 'thumbnail.jpg')

      secret_obsession = Movie.create!(
        title: "Secret Obsession",
        description: "When Jennifer wakes up with amnesia after a traumatic attack, her doting husband cares for her. But she soon realizes the danger is far from over.",
        year: 2019, 
        rating: "TV-14", 
        runtime: "1h37",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/11/movie.mp4')
      secret_obsession.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/11/thumbail.jpg')
      secret_obsession.photo.attach(io: file, filename: 'thumbnail.jpg')

      house_at_the_end_of_the_street = Movie.create!(
        title: "House At The End Of The Street",
        description: "Moving to a new town proves even more stressful for a teenager when she learns that the house next door was the site of a double murder.",
        year: 2012, 
        rating: "PG-13", 
        runtime: "1h40",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/12/movie.mp4')
      house_at_the_end_of_the_street.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/12/thumbail.jpg')
      house_at_the_end_of_the_street.photo.attach(io: file, filename: 'thumbnail.jpg')

      one_br = Movie.create!(
        title: "1BR",
        description: "Seeking her independence, a young woman moves to Los Angeles and settles into a cozy apartment complex with a disturbing sense of community.",
        year: 2019, 
        rating: "TV-MA", 
        runtime: "1h30",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/13/movie.mp4')
      one_br.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/13/thumbail.jpg')
      one_br.photo.attach(io: file, filename: 'thumbnail.jpg')

      angels_and_demons = Movie.create!(
        title: "Angels & Demons",
        description: "A Harvard symbologist races to uncover clues that will help stop an attack on the Vatican by a secret society looking to retaliate for old persecutions.",
        year: 2009, 
        rating: "PG-13", 
        runtime: "2h18",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/14/movie.mp4')
      angels_and_demons.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/14/thumbail.jpg')
      angels_and_demons.photo.attach(io: file, filename: 'thumbnail.jpg')

      the_da_vinci_code = Movie.create!(
        title: "The Da Vinci Code",
        description: "When the curator of the Louvre is killed, a Harvard professor and a cryptographer must untangle a web of deceit involving works of Leonardo da Vinci.",
        year: 2006, 
        rating: "PG-13", 
        runtime: "2h28",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/15/movie.mp4')
      the_da_vinci_code.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/15/thumbail.jpg')
      the_da_vinci_code.photo.attach(io: file, filename: 'thumbnail.jpg')

      adrift = Movie.create!(
        title: "Adrift",
        description: "A young couple’s sailing adventure becomes a fight to survive when their yacht faces a catastrophic hurricane in this story based on true events.",
        year: 2018, 
        rating: "PG-13", 
        runtime: "1h36",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/16/movie.mp4')
      adrift.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/16/thumbail.jpg')
      adrift.photo.attach(io: file, filename: 'thumbnail.jpg')

      crazy_stupid_love = Movie.create!(
        title: "Crazy Stupid Love",
        description: "Blindsided by the end of his marriage and hopeless at dating, Cal receives a helping hand from a smooth-talking player who's about to meet his match.",
        year: 2011, 
        rating: "PG-13", 
        runtime: "1h58",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/17/movie.mp4')
      crazy_stupid_love.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/17/thumbail.jpg')
      crazy_stupid_love.photo.attach(io: file, filename: 'thumbnail.jpg')

      pieces_of_a_woman = Movie.create!(
        title: "Pieces of a Woman",
        description: "A heartbreaking home birth leaves a woman grappling with the profound emotional fallout, isolated from her partner and family by a chasm of grief.",
        year: 2020, 
        rating: "R", 
        runtime: "2h06",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/18/movie.mp4')
      pieces_of_a_woman.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/18/thumbail.jpg')
      pieces_of_a_woman.photo.attach(io: file, filename: 'thumbnail.jpg')

      the_trial_of_the_chicago_7 = Movie.create!(
        title: "The Trial Of The Chicago 7",
        description: "What was supposed to be a peaceful protest turned into a violent clash with the police. What followed was one of the most notorious trials in history.",
        year: 2020, 
        rating: "R", 
        runtime: "2h10",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/19/movie.mp4')
      the_trial_of_the_chicago_7.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/19/thumbail.jpg')
      the_trial_of_the_chicago_7.photo.attach(io: file, filename: 'thumbnail.jpg')

      fifty_first_dates = Movie.create!(
        title: "50 First Dates",
        description: "After falling for a pretty art teacher who has no short-term memory, a marine veterinarian has to win her over again every single day.",
        year: 2004, 
        rating: "PG-13", 
        runtime: "1h39",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/20/movie.mp4')
      fifty_first_dates.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/20/thumbail.jpg')
      fifty_first_dates.photo.attach(io: file, filename: 'thumbnail.jpg')

      killers = Movie.create!(
        title: "Killers",
        description: "After a whirlwind romance, Jen and Spencer settle into married life — until Spencer's secret past as a hit man shakes up their suburban bliss.",
        year: 2010, 
        rating: "PG-13", 
        runtime: "1h40",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/21/movie.mp4')
      killers.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/21/thumbail.jpg')
      killers.photo.attach(io: file, filename: 'thumbnail.jpg')

      to_all_the_boys = Movie.create!(
        title: "To All The Boys: Always and Forever",
        description: "Whirlwind trips. College decisions. Sweeping romance. It’s all happening for Lara Jean. But what comes next?",
        year: 2021, 
        rating: "TV-14", 
        runtime: "1h55",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/22/movie.mp4')
      to_all_the_boys.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/22/thumbail.jpg')
      to_all_the_boys.photo.attach(io: file, filename: 'thumbnail.jpg')

      always_be_my_maybe = Movie.create!(
        title: "Always Be My Maybe",
        description: "Reunited after 15 years, famous chef Sasha and hometown musician Marcus feel the old sparks of attraction but struggle to adapt to each other's worlds.",
        year: 2019, 
        rating: "PG-13", 
        runtime: "1h42",
      )

      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/23/movie.mp4')
      always_be_my_maybe.url.attach(io: file, filename: 'movie.mp4')
      
      file = open('https://kineto-seeds.s3-us-west-1.amazonaws.com/media/23/thumbail.jpg')
      always_be_my_maybe.photo.attach(io: file, filename: 'thumbnail.jpg')

#--------------- GENRES  ------------------------------------------

    thriller = Genre.create({ name: "Thriller"})
    mystery = Genre.create({ name: "Mystery"})
    drama = Genre.create({ name: "Drama"})
    romance = Genre.create({ name: "Romance"})


#--------------- MOVIE_GENRES LINK  --------------------------------

    MovieGenre.create(movie_id: silence_of_the_lambs.id, genre_id: thriller.id)
    MovieGenre.create(movie_id: the_roommate.id, genre_id: thriller.id)
    MovieGenre.create(movie_id: the_platform.id, genre_id: thriller.id)
    MovieGenre.create(movie_id: house_at_the_end_of_the_street.id, genre_id: thriller.id)
    MovieGenre.create(movie_id: one_br.id, genre_id: thriller.id)
    MovieGenre.create(movie_id: angels_and_demons.id, genre_id: thriller.id)
    MovieGenre.create(movie_id: rebecca.id, genre_id: thriller.id)
    MovieGenre.create(movie_id: secret_obsession.id, genre_id: thriller.id)

    MovieGenre.create(movie_id: the_roommate.id, genre_id: mystery.id)
    MovieGenre.create(movie_id: murder_mystery.id, genre_id: mystery.id)
    MovieGenre.create(movie_id: enola_holmes.id, genre_id: mystery.id)
    MovieGenre.create(movie_id: the_da_vinci_code.id, genre_id: mystery.id)
    MovieGenre.create(movie_id: secret_obsession.id, genre_id: mystery.id)
    MovieGenre.create(movie_id: house_at_the_end_of_the_street.id, genre_id: mystery.id)
    MovieGenre.create(movie_id: one_br.id, genre_id: mystery.id)
    MovieGenre.create(movie_id: angels_and_demons.id, genre_id: mystery.id)
    
    MovieGenre.create(movie_id: crazy_stupid_love.id, genre_id: drama.id)
    MovieGenre.create(movie_id: killers.id, genre_id: drama.id)
    MovieGenre.create(movie_id: adrift.id, genre_id: drama.id)
    MovieGenre.create(movie_id: the_irishman.id, genre_id: drama.id)
    MovieGenre.create(movie_id: sleepless_in_seattle.id, genre_id: drama.id)
    MovieGenre.create(movie_id: the_trial_of_the_chicago_7.id, genre_id: drama.id)
    MovieGenre.create(movie_id: enola_holmes.id, genre_id: drama.id)
    MovieGenre.create(movie_id: the_roommate.id, genre_id: drama.id)
    MovieGenre.create(movie_id: pieces_of_a_woman.id, genre_id: drama.id)
    
    MovieGenre.create(movie_id: the_ugly_truth.id, genre_id: romance.id)
    MovieGenre.create(movie_id: always_be_my_maybe.id, genre_id: romance.id)
    MovieGenre.create(movie_id: fifty_first_dates.id, genre_id: romance.id)
    MovieGenre.create(movie_id: sleepless_in_seattle.id, genre_id: romance.id)
    MovieGenre.create(movie_id: rebecca.id, genre_id: romance.id)
    MovieGenre.create(movie_id: to_all_the_boys.id, genre_id: romance.id)
    MovieGenre.create(movie_id: crazy_stupid_love.id, genre_id: romance.id)
    MovieGenre.create(movie_id: killers.id, genre_id: romance.id)
    



#--------------- LIST  ---------------------------------------------

      list1 = List.create(user_id: 1, movie_id: 2)
      list2 = List.create(user_id: 1, movie_id: 4)
      list3 = List.create(user_id: 1, movie_id: 3)