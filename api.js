const express = require("express");
const app = express();
const router = express.Router();
const eastrons = require('./model');
const client = require('./mqtt');

const port = 5000;

app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});
const filter = { flag: null };
const update = { flag: 1 };
app.use("/api", router.get("/get", async (req, res) => {
    const get = await eastrons.find().where(filter).limit(5);
    Object.entries(get)
        .forEach(() =>
            eastrons.findOneAndUpdate(filter, {
                $set: update
            }, {
                new: true
            }, (err, doc) => {
                if (err) {
                    console.log("Something wrong when updating data!");
                }
                // console.log(doc);
            }
            )
        );
    res.send(get);
    client.publish('nodejs', JSON.stringify(get));
}));