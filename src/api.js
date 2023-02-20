import { v4 as uuidv4 } from "/node_modules/uuid/dist/esm-browser/index.js";


export function getUuid() {
    return uuidv4()
}

export function getDate() {
    var now = new Date();
    console.log('teste')
    var dateString = moment(now).format('YYYY-MM-DD')
    return dateString
}

