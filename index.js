// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";
// 2. Create an express app and set the port number.
  const app=express();
  const port=8000;
// 3. Use the public folder for static files.
   app.use(express.static("public"));
// 4. When the user goes to the home page it should render the index.ejs file.
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
 app.get("/",async(req,res)=>{
  const genre=req.body;
    try{
     const result=await axios.get(`https://v2.jokeapi.dev/joke/Any?format=txt&type=single&amount=1`);
     res.render("index.ejs",{
       joke:result.data,
    
});

    }catch(error){
        console.log("error",error.response.data);
    res.status(500).send("Error fetching the secret");
    }
 });
 app.get("/",async(req,res)=>{
  const genre=req.body;
    try{
     const result=await axios.get(`https://v2.jokeapi.dev/joke/${genre}?format=txt&type=single&amount=1`);
     res.render("index.ejs",{
       joke:result.data,
    
});

    }catch(error){
        console.log("error",error.response.data);
    res.status(500).send("Error fetching the secret");
    }
 });
// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });