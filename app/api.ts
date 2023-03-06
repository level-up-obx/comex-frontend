import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export function getUuid():String {
    return uuidv4()
}

export function getDate(): String {
    var now = new Date();
    console.log('teste')
    var dateString = moment(now).format('YYYY-MM-DD')
    return dateString
}

