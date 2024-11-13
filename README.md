**Joke Generator**
This is a simple Node.js web application that uses the JokeAPI to fetch and display random jokes based on user preferences. The app is built using Express and Axios, with EJS as the templating engine for rendering data.

**Features**
Fetches a random joke from the JokeAPI
Uses EJS to dynamically display jokes on the homepage
Simple setup with Express, Axios, and static assets for styling


**Installation**

**Clone the repository:**

git clone https://github.com/akshitabanwal/joke-generator.git
cd joke-generator

**Install dependencies:**

bash

npm install

**Start the server:**

bash
node app.js


**Access the app:**
Open your browser and go to http://localhost:8000 to view the homepage.


**Usage**
__When you visit the homepage, the app:_

Makes an API request to the JokeAPI to fetch a random joke.
Displays the joke in a simple, user-friendly format.
Allows users to select different joke categories (genre), which will dynamically fetch and display a joke from that genre.


**Code Overview**
The primary components of the app include:

_Express_: Manages the server, routing, and static assets.
_Axios_: Sends HTTP requests to the JokeAPI.
_EJS_: Serves as the templating engine for rendering jokes on the homepage.
