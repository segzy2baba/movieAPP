# movieAPP
a simple movie app

Movie Catalog App
This is a simple movie catalog app that allows users to view a list of movies, search for movies by title or genre, view more details about a movie, and add a new movie to the catalog.

Tech Stack
Next.js
TypeScript
Nest.js
PostgreSQL
Prisma

Getting Started
Prerequisites
Node.js
PostgreSQL
Installation


Clone the repository
 https://github.com/segzy2baba/movieAPP.git
 

  the APP AS two file
  movie-api - for nest.js backend
  movie-client - for next forndend

  cd to  movie-api and run

 Install dependencies
   1. npm install

    Step 2: Setting up the database
   i.To set up the database, you'll need to create a new database in PostgreSQL
   ii. Once you have created the database, you can initialize Prisma by running the following command:
       "prisma init"

   iii. Create a .env file in the root directory and add the following environment variables:
   DATABASE_URL=postgres://username:password@localhost:5432/movies
    Replace username and password with your PostgreSQL username and password.

    3. Nest.js, let's generate the Prisma client by running the following command:
        "prisma generate"
     Start the server
       npm run start:dev


       Fontend Next.js

        cd to  movie-client and run

      1.  Install dependencies
        i. npm install

      ii  Start the server
       npm run dev

     


       


Features
View List of Movies
Users can view a list of movies on the home page. Movies are paginated on the client-side.

Search for Movies
Users can search for movies by title or genre using the search bar at the top of the page. Searches are performed on the server-side.

View Movie Details
Users can hover(move around the image ) oand click on cherov icon(arrow down icon) to view more details about it, including the movie's title, description, and genres.


Add a New Movie
Users can add a new movie to the catalog by filling out the form on the add movie page. Input validation is performed on the server-side.

1. to add movies navicate Add movie locate on the nav bar 
2. i crate text and image to crate with can locate in the movie-api fold and a file movies.json

API Endpoints

GET http://localhost:8000/movies
Returns a list of movies.

Query Parameters:

page (optional) - The page number of the results to return (default is 2).
search (optional) - The search query. Searches for movies with titles or genres that contain the search query.
GET http://localhost:8000/movies/id
Returns a movie by ID.

POST http://localhost:8000/movies/
Adds a new movie to the catalog.

Request Body:

title (required) - The title of the movie.
genres (required) - A comma-separated list of genres for the movie.
description  - A description of the movie.
thumbnailUrl  - image of a movie.









  


