import express from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT || 8000; // Use the assigned port for Render

// Set up EJS as the view engine
app.set("view engine", "ejs");

// Use the public folder for static files
app.use(express.static("public"));

// Home route to fetch and display a joke
app.get("/", async (req, res) => {
    const genre = req.query.genre || "Any"; // Get genre from query params (default: Any)

    try {
        const result = await axios.get(`https://v2.jokeapi.dev/joke/${genre}?type=single`);
        
        res.render("index", { 
            joke: result.data.joke || "No joke available!" // Handle empty response
        });

    } catch (error) {
        console.error("Error fetching joke:", error.message);
        res.status(500).send("Error fetching the joke");
    }
});

// Start the server
app.listen(port, () => {
    console.log(`✅ Server is running on port ${port}`);
});
