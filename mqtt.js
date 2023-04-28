const mqtt = require('mqtt');

options = {
    clientId: "mqtt-explorer-0001",
    username: "root",
    password: "12345678",
    clean: true,
    port: 17931
};

const client = mqtt.connect("mqtt://sftpkiot.com", options);

client.on('connect', function () {
    client.subscribe('nodejs', function (err) {
        if (!err) {
        }
    })
})

client.on('message', function (topic, message) {
    // console.log(message.toString());
    client.end();
})

module.exports = client;