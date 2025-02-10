import express from "express";
import axios from "axios";

const app = express();
const port = 8000;

app.set("view engine", "ejs"); // Set view engine
app.use(express.static("public"));

app.get("/", async (req, res) => {
    const genre = req.query.genre || "Any"; // Get genre from query params
    try {
        const result = await axios.get(`https://v2.jokeapi.dev/joke/${genre}?type=single`);
        res.render("index", {
            joke: result.data.joke, // Extract joke text properly
        });
    } catch (error) {
        console.log("Error:", error.response?.data || error.message);
        res.status(500).send("Error fetching the joke");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
