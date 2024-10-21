const { app } = require(".");
const connectToDB = require("./config/db");


const PORT=5454;
app.listen(PORT,async ()=>{
    await connectToDB()
    console.log("Forksy running on port ",PORT)
})

