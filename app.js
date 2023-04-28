const ModbusRTU = require("modbus-serial");
const client = new ModbusRTU();
var cron = require('node-cron');
const eastrons = require('./model');

const modbus = client.connectRTUBuffered("COM3", { baudRate: 9600 })
    .then(setClient)
    .then(function () {
        console.log("Connected");
    })
    .catch(function (e) {
        console.log(e.message);
    });
function setClient() {
    client.setID(1);
    client.setTimeout(10000);
    // cron.schedule('*/5 * * * * *', () => {
    //     console.log('running a task every minute');
    //     storeData();
    // });
    storeData();
}

function storeData() {
    client.readInputRegisters(0, 100)
        .then(function (d) {
            const float30001 = d.buffer.readFloatBE(0);
            const float30007 = d.buffer.readFloatBE(12);
            const float30013 = d.buffer.readFloatBE(24);
            const float30019 = d.buffer.readFloatBE(36);
            const float30025 = d.buffer.readFloatBE(48);
            const float30031 = d.buffer.readFloatBE(60);
            const float30037 = d.buffer.readFloatBE(72);
            const float30071 = d.buffer.readFloatBE(140);
            const float30073 = d.buffer.readFloatBE(144);
            const float30075 = d.buffer.readFloatBE(148);
            const float30077 = d.buffer.readFloatBE(152);
            const float30079 = d.buffer.readFloatBE(156);
            eastrons.insertMany([
                { regNo: 30001, description: 'Line to neutral volts:', value: float30001 },
                { regNo: 30007, description: 'Current:', value: float30007 },
                { regNo: 30013, description: 'Active power:', value: float30013 },
                { regNo: 30019, description: 'Apparent power:', value: float30019 },
                { regNo: 30025, description: 'Reactive power:', value: float30025 },
                { regNo: 30031, description: 'Power factor:', value: float30031 },
                { regNo: 30037, description: 'Phase angle:', value: float30037 },
                { regNo: 30071, description: 'Frequency:', value: float30071 },
                { regNo: 30073, description: 'Import active energy:', value: float30073 },
                { regNo: 30075, description: 'Export active energy:', value: float30075 },
                { regNo: 30077, description: 'Import reactive energy:', value: float30077 },
                { regNo: 30079, description: 'Export reactive energy:', value: float30079 },
            ]).then(function () {
                console.log("Data inserted")
            }).catch(function (error) {
                console.log(error)
            });
        })
        .catch(function (e) {
            console.log(e.message);
        });
}