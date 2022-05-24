const express = require("express");
const https = require("https");

const app = express();
const port = 80;

app.use(express.static("public"));

app.get("/twitch", (request, response) => {

    const options = {
        hostname: "api.twitch.tv",
        port: 443,
        path: "helix/streams?user_login=delirya",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.TwitchAuthToken}`,
            "Client-Id": `${process.env.TwitchClientId}`
        }
    };

    const httpsResponse = https.request(options, httpsResponse => {
        httpsResponse.on("data", d => {
            const twitchApiResponse = JSON.parse(d);
            const data = twitchApiResponse.data;
            if(data[0]){
                response.send("true");
                return;
            }
            response.send("false");
        });

        httpsResponse.on("error", error => {
            response.send("false");
        });
    });

    httpsResponse.end();
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});