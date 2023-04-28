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
            const float30003 = d.buffer.readFloatBE(4);
            const float30005 = d.buffer.readFloatBE(8);
            const float30007 = d.buffer.readFloatBE(12);
            const float30009 = d.buffer.readFloatBE(16);
            const float30011 = d.buffer.readFloatBE(20);
            const float30013 = d.buffer.readFloatBE(24);
            const float30015 = d.buffer.readFloatBE(28);
            const float30017 = d.buffer.readFloatBE(32);
            const float30019 = d.buffer.readFloatBE(36);
            const float30021 = d.buffer.readFloatBE(40);
            const float30023 = d.buffer.readFloatBE(44);
            const float30025 = d.buffer.readFloatBE(48);
            const float30027 = d.buffer.readFloatBE(52);
            const float30029 = d.buffer.readFloatBE(56);
            const float30031 = d.buffer.readFloatBE(60);
            const float30033 = d.buffer.readFloatBE(64);
            const float30035 = d.buffer.readFloatBE(68);
            const float30037 = d.buffer.readFloatBE(72);
            const float30039 = d.buffer.readFloatBE(76);
            const float30041 = d.buffer.readFloatBE(80);
            const float30043 = d.buffer.readFloatBE(84);
            //4 
            const float30047 = d.buffer.readFloatBE(88);
            const float30049 = d.buffer.readFloatBE(92);
            //4
            const float30053 = d.buffer.readFloatBE(96);
            //4
            const float30057 = d.buffer.readFloatBE(100);
            //4
            const float30061 = d.buffer.readFloatBE(104);
            const float30063 = d.buffer.readFloatBE(108);
            //4
            const float30067 = d.buffer.readFloatBE(112);
            //4
            const float30071 = d.buffer.readFloatBE(116);
            const float30073 = d.buffer.readFloatBE(120);
            const float30075 = d.buffer.readFloatBE(124);
            const float30077 = d.buffer.readFloatBE(128);
            const float30079 = d.buffer.readFloatBE(132);
            const float30081 = d.buffer.readFloatBE(136);
            const float30083 = d.buffer.readFloatBE(140);
            const float30085 = d.buffer.readFloatBE(144);
            const float30087 = d.buffer.readFloatBE(148);
            //14
            const float30101 = d.buffer.readFloatBE(152);
            const float30103 = d.buffer.readFloatBE(156);
            const float30105 = d.buffer.readFloatBE(160);
            const float30107 = d.buffer.readFloatBE(164);
            //94
            const float30201 = d.buffer.readFloatBE(168);
            const float30203 = d.buffer.readFloatBE(172);
            const float30205 = d.buffer.readFloatBE(176);
            const float30207 = d.buffer.readFloatBE(180);
            //18
            const float30225 = d.buffer.readFloatBE(184);
            //10
            const float30235 = d.buffer.readFloatBE(188);
            const float30237 = d.buffer.readFloatBE(192);
            const float30239 = d.buffer.readFloatBE(196);

            eastrons.insertMany([
                { regNo: 30001, description: 'Phase 1 line to neutral volts:', value: float30001 },
                { regNo: 30003, description: 'Phase 2 line to neutral volts:', value: float30003 },
                { regNo: 30005, description: 'Phase 3 line to neutral volts:', value: float30005 },
                { regNo: 30007, description: 'Phase 1 current:', value: float30007 },
                { regNo: 30009, description: 'Phase 2 current:', value: float30009 },
                { regNo: 30011, description: 'Phase 3 current:', value: float30011 },
                { regNo: 30013, description: 'Phase 1 power:', value: float30013 },
                { regNo: 30015, description: 'Phase 2 power:', value: float30015 },
                { regNo: 30017, description: 'Phase 3 power:', value: float30017 },
                { regNo: 30019, description: 'Phase 1 volt amps:', value: float30019 },
                { regNo: 30021, description: 'Phase 2 volt amps:', value: float30021 },
                { regNo: 30023, description: 'Phase 3 volt amps:', value: float30023 },
                { regNo: 30025, description: 'Phase 1 volt amps reactive:', value: float30025 },
                { regNo: 30027, description: 'Phase 2 volt amps reactive:', value: float30027 },
                { regNo: 30029, description: 'Phase 3 volt amps reactive:', value: float30029 },
                { regNo: 30031, description: 'Phase 1 power factor:', value: float30031 },
                { regNo: 30033, description: 'Phase 2 power factor:', value: float30033 },
                { regNo: 30035, description: 'Phase 3 power factor:', value: float30035 },
                { regNo: 30037, description: 'Phase 1 phase angle:', value: float30037 },
                { regNo: 30039, description: 'Phase 2 phase angle:', value: float30039 },
                { regNo: 30041, description: 'Phase 3 phase angle:', value: float30041 },
                { regNo: 30043, description: 'Average line to neutral volts:', value: float30043 },
                { regNo: 30047, description: 'Average line current:', value: float30047 },
                { regNo: 30049, description: 'Sum of line currents:', value: float30049 },
                { regNo: 30053, description: 'Total system power:', value: float30053 },
                { regNo: 30057, description: 'Total system volt amps:', value: float30057 },
                { regNo: 30061, description: 'Total system VAr:', value: float30061 },
                { regNo: 30063, description: 'Total system power factor (1):', value: float30063 },
                { regNo: 30067, description: 'Total system phase angle:', value: float30067 },
                { regNo: 30071, description: 'TFrequency of supply voltages:', value: float30071 },
                { regNo: 30073, description: 'Import Wh since last reset (2):', value: float30073 },
                { regNo: 30075, description: 'Export Wh since last reset (2):', value: float30075 },
                { regNo: 30077, description: 'Import VArh since last reset (2):', value: float30077 },
                { regNo: 30079, description: 'Export VArh since last reset (2):', value: float30079 },
                { regNo: 30081, description: 'VAh since last reset (2):', value: float30081 },
                { regNo: 30083, description: 'Ah since last reset(3):', value: float30083 },
                { regNo: 30085, description: 'Total system power demand (4):', value: float30085 },
                { regNo: 30087, description: 'Maximum total system power demand (4):', value: float30087 },
                { regNo: 30101, description: 'Maximum total system power demand (4):', value: float30101 },
                { regNo: 30103, description: 'Total system VA demand:', value: float30103 },
                { regNo: 30105, description: 'Neutral current demand:', value: float30105 },
                { regNo: 30107, description: 'Maximum Neutral current demand:', value: float30107 },
                { regNo: 30201, description: 'Line 1 to Line 2 volts:', value: float30201 },
                { regNo: 30203, description: 'Line 2 to Line 3 volts:', value: float30203 },
                { regNo: 30205, description: 'Line 3 to Line 1 volts:', value: float30205 },
                { regNo: 30207, description: 'Average line to line volts:', value: float30207 },
                { regNo: 30225, description: 'Neutral current:', value: float30225 },
                { regNo: 30235, description: 'Phase 1 L/N volts THD:', value: float30235 },
                { regNo: 30237, description: 'Phase 2 L/N volts THD:', value: float30237 },
                { regNo: 30239, description: 'Phase 3 L/N volts THD:', value: float30239 },
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