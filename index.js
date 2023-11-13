const express = require('express');
const body_parser = require('body-parser');

const data = require('./data.json');

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Запущено на порту: [${port}]`));

app.use(body_parser.json());

app.post('/updateconfig', (req, res) => {
    let content = req.body.content

    const upload_data = {
        data_vlan: search_vlan(content),
        data_interface: search_interface(content)
    }

    res.status(200).send({
        res: upload_data
    });
});

const search_vlan = (data) => {
    let vlanInfo = [];

    const parts = data.split('!');

    let resultArray = [];
    const pattern = /interface Vlan\d+/;

    for (const line of parts) {
        if (pattern.test(line)) {
            resultArray.push(line);
        }
    }

    const vlanP = /interface Vlan(\d+)/
    // const descP = /description (\w+)/
    const descP = /description (\S+)/
    const ipP = /ip address (\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/

    for (const rAk of resultArray) {
        const vlanInfoLet = {
            id: Number,
            number: Number,
            description: String,
            ipAddress: String
        }

        vlanInfoLet.id = (rAk.match(vlanP))[1]
        vlanInfoLet.number = (rAk.match(vlanP))[1]

        if (rAk.match(descP) !== null) {
            vlanInfoLet.description = (rAk.match(descP))[1]
        } else {
            vlanInfoLet.description = ""
        }

        if (rAk.match(ipP) !== null) {
            vlanInfoLet.ipAddress = (rAk.match(ipP))[1]
        } else {
            vlanInfoLet.ipAddress = ""
        }

        vlanInfo.push(vlanInfoLet)
    }

    return vlanInfo;
}
const search_interface = (data) => {
    const interface_info = [];
    const parts_arr = [];

    const parts = data.split('!');

    const pattern = /interface GigabitEthernet(\d+)/

    for (const part of parts) {
        if (pattern.test(part)) {
            parts_arr.push(part)
        }
    }

    const interface_p = /interface GigabitEthernet(\d\/\d\/\d{1,2})/
    const switchport_access_p = /switchport access vlan (\d{1,4})/
    const switchport_mode_p = /switchport mode (\w+)/
    const switchport_voice_vlan_p = /switchport voice vlan (\d{1,4})/
    const spanning_tree_p = /spanning-tree (\w+)/

    for (const key of parts_arr) {
        const interface_info_temp = {
            number: Number,
            access_vlan: Number,
            mode: String,
            voice_vlan: Number,
            spanning_tree: String
        }

        interface_info_temp.number = (key.match(interface_p))[1];

        if (key.match(switchport_access_p) !== null) {
            interface_info_temp.access_vlan = (key.match(switchport_access_p))[1]
        } else interface_info_temp.access_vlan = "";

        if (key.match(switchport_mode_p) !== null) {
            interface_info_temp.mode = (key.match(switchport_mode_p))[1]
        } else interface_info_temp.mode = "";

        if (key.match(switchport_voice_vlan_p) !== null) {
            interface_info_temp.voice_vlan = (key.match(switchport_voice_vlan_p))[1]
        } else interface_info_temp.voice_vlan = "";

        if (key.match(spanning_tree_p) !== null) {
            interface_info_temp.spanning_tree = (key.match(spanning_tree_p))[1]
        } else interface_info_temp.spanning_tree = "";

        interface_info.push(interface_info_temp);
    }

    return interface_info;
    // for (const part of parts_arr) {
    //     // console.log(part)
    //     // console.log((part.match(interface_p))[1])
    //     // if ((part.match(switchport_access_p)) !== null) console.log((part.match(switchport_access_p))[1])
    //     // if (part.match(spanning_tree_p) !== null) console.log((part.match(spanning_tree_p))[1])
    // }
}

