import express from "express";
import cors from "cors"
import Bounty from "./db/db.js";

const app = express();
app.use(cors());
app.use(express.json());


app.get("/getAllBounties", async (req,res) => {
    try {
        const bounties = await Bounty.find();
        console.log(bounties);
        res.status(200).json({message:bounties});
    } catch (error) {
        res.status(400).json({message:error.message});
    }
})


app.post("/create", async (req,res) => {
    const details = req.body;
    console.log(details)
    try {

        await Bounty.create({
            id:details.id,
            creator:details.creator,
            title:details.title,
            description:details.description,
            links:details.links,
            amount:"1",
            applicants:[],
            isAvailed:false,
            availer:" ",
        })
 
        res.status(200).json({message:"Bounty created"});
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message:error.message});
    }
});

app.post("/apply", async (req,res) => {
    const details = req.body;

    try {
        await Bounty.findOneAndUpdate(
            { id: details.id },
            {
                $push: { 
                    applicants: { 
                        address: details.address, 
                        links: details.links 
                    }
                }
            }
        );

        res.status(200).json({message:"Successfuly Applied for the Bounty"});
    } catch (error) {
        res.status(400).json({message:error.message});
    }
    

});

app.post("/assign", async (req,res) => {
    const details = req.body;

    try {
        await Bounty.findOneAndUpdate(
            { id: details.id },
            {
                isAvailed:true,
                availer:details.applicantWalletAddress
            }
        );
        res.statusCode(200).json({message:"Assigned Successfully"});

    } catch (error) {
        res.status(400).json({message:error.message});
    }
})



app.listen(9000,() => {
    console.log("server running");
})