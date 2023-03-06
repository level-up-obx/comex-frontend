import uuid  from 'uuidv4';
import moment from 'moment';

export function getUuid():String {
    return uuid.uuid()
}

export function getDate(): String {
    var now = new Date();
    console.log('teste')
    var dateString = moment(now).format('YYYY-MM-DD')
    return dateString
}

