//loads environment variables 
require('dotenv').config();
//imports express library 
const express = require("express");
//allows frontend call backend 
const cors = require("cors");
//imports nodemailer to send confirmation email
const nodemailer = require("nodemailer");
//imporst supabase client library 
const { createClient } = require("@supabase/supabase-js");
//creates express application
const app = express();

//tells server to allow requests from other domains 
app.use(cors());
//parsing json data 
app.use(express.json());

//connects supabase project
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

//creates transporter to send confirmation email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

//Triggered when we call /signup from frontend, defines post route 
app.post("/subscribe", async (req, res) => {
    //contains submitted email
    const { email } = req.body;

    try {
        //inserts email in supabase 
        const { data, error } = await supabase
            .from("newsletter")
            .insert([{ email }])
            .select();

        //duplicate signup error
        if (error) {
        if (error.code === '23505') { // duplicate key
            return res.status(400).json({ message: "Email already signed up." });
        }
        throw error;
        }
        //confirmation email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Skin For Skin Newsletter",
            text: "You've successfully signed up for the Skin For Skin newsletter! :)"
        });

        res.json({message: "Signup successful!"});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Server error"});
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

