const express = require("express")

const app = express()

const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.status(200).json({message: "Le VBA est trop bon c'est lui le maitre du code"});
})

app.listen(PORT, ()=>{
    console.log("Lancement du serveur port : ",PORT);
})