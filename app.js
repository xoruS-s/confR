// const fs = require('fs');
// const dialog = require('node-file-dialog');
// const readline = require('node:readline');
// const { stdin: input, stdout: output } = require('node:process');
//
// const rl = readline.createInterface({ input, output });
//
// let vlanInfo = [];
//
//
// const config = { type:'open-file' }
// dialog(config)
//     .then(dir => {
//         execVlan(dir)
//     })
//     .catch(err => console.log(err))
//
// const execVlan = (dir) => {
//     fs.readFile(`${dir}`, 'utf-8', (err, data) => {
//         // const match = data.match(/interface Vlan\d+.*?!(.*)/);
//         // const match = data.match(/interface Vlan\d+/)
//         // if (match) {
//         //     console.log(match[1]);
//         // } else {
//         //     console.log('No match found.');
//         // }
//         //
//         // const match = /interface Vlan\w+ ?!/
//         // console.log(data.match(match))
//
//         // const parts = data.split('!');
//         //
//         // let resultArray = [];
//         // const pattern = /interface Vlan\d+/;
//         //
//         // for (const line of parts) {
//         //     if (pattern.test(line)) {
//         //         resultArray.push(line);
//         //     }
//         // }
//         //
//         // const vlanP = /interface Vlan(\d+)/
//         // const descP = /description (\w+)/
//         // const ipP = /ip address (\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/
//         //
//         // for (const rAk of resultArray) {
//         //     const vlanInfoLet = {
//         //         number: Number,
//         //         description: String,
//         //         ipAddress: String
//         //     }
//         //
//         //     vlanInfoLet.number = (rAk.match(vlanP))[1]
//         //
//         //     if (rAk.match(descP) !== null) {
//         //         vlanInfoLet.description = (rAk.match(descP))[1]
//         //     } else {
//         //         vlanInfoLet.description = ""
//         //     }
//         //
//         //     if (rAk.match(ipP) !== null) {
//         //         vlanInfoLet.ipAddress = (rAk.match(ipP))[1]
//         //     } else {
//         //         vlanInfoLet.ipAddress = ""
//         //     }
//         //
//         //     vlanInfo.push(vlanInfoLet)
//         // }
//         // console.log(vlanInfo)
//     })
// }
//
// export default vlanInfo;