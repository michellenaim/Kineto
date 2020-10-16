# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.destroy_all
Movie.connection.execute('ALTER SEQUENCE movies_id_seq RESTART WITH 1')

# user= User.create!()

movie1 = Movie.create!(
        title: "The Silence Of The Lambs",
        description: "FBI trainee Clarice Starling ventures into a maximum-security asylum to pick the diseased brain of Hannibal Lecter, a psychiatrist turned cannibal.",
        year: 1991, 
        rating: "R", 
        runtime: "1h58",  
      )

movie2 = Movie.create!(
        title: "Enola Holmes",
        description: "While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.",
        year: 2020, 
        rating: "PG 13", 
        runtime: "2h03", 
      )

movie3= Movie.create!(
        title: "The Irishman",
        description: "Hit man Frank Sheeran looks back at the secrets he kept as a loyal member of the Bufalino crime family in this acclaimed film from Martin Scorsese.",
        year: 2019, 
        rating: "R", 
        runtime: "3h29",
      )

