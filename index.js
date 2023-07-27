"use strict";

const express = require("express");
const app = express();
const PORT = 3000;

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.static("public"));

let htmlTop = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex">
        <title>Form Response</title>
        <link rel="stylesheet" href="main.css">
        <link rel="icon" type="image/x-icon" href="./favicons/favicon.ico">
    </head>
    <body>
        <nav><a href="./index.html">Home</a><br><a href="./contact.html">Contact</a><br><a href="./gallery.html">Gallery</a>
        </nav>
        <main>
`;

let htmlBottom = `
        </main>
        <footer>
            <p>&#169; 2023 Alex Clark</p>
        </footer>
    </body>
</html>`;

app.post("/response", (req, res) => {
	let htmlMiddle = `
    <h1>Form Response</h1>
    <p>Thank you for your submission, ${req.body.name}!</p>
    <p>Your email address is ${req.body.email}.</p>
    <p>Your message was: ${req.body.message}</p>
    <p>You liked this image the most:</p>
    <img src="./images-uncompressed/${req.body.picturechoice}.jpg" alt="Your favorite image" style="width:20%;">
    <p>You rated my website a ${req.body.rating}/5, and you found the sections ${req.body.helpful} the most helpful.</p>
    <p><a href="./contact.html">Back to form</a></p>
    `;
	res.send(htmlTop + htmlMiddle + htmlBottom);
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
