const express = require('express');

const data = require('./data.json');

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Запущено на порту: [${port}]`));

app.get('/edit', (req, res) => {
    res.json(data)
})

// app.get('/edit/showconfig', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

app.post('/edit/showconfig', (req, res) => {


    console.log(req.body)
    // let data = req.file;
    // console.log(data)
    // console.log('gg')
    res.send({
        mes: "ok",
        data: data.name
    })
})





// const arr = [
//     {
//         number: 1,
//         description: "SW",
//         ipAddress: "172.16.0.1"
//     },
//     {
//         number: 10,
//         description: "VLAN10",
//         ipAddress: "172.16.0.10"
//     },
//     {
//         number: 12,
//         description: "VLAN11",
//         ipAddress: "172.16.0.11"
//     },
//     {
//         number: 13,
//         description: "VLAN13",
//         ipAddress: "172.16.0.13"
//     }
// ]