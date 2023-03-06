import uuid from 'uuidv4';
import moment from 'moment';
export function getUuid() {
    return uuid.uuid();
}
export function getDate() {
    var now = new Date();
    console.log('teste');
    var dateString = moment(now).format('YYYY-MM-DD');
    return dateString;
}
