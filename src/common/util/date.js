import moment from 'moment'

export const stampToDate = (stamp) => {
    moment.locale('en')
    return moment(stamp).format('LLLL')
}

export const stampToDateShort = (stamp) => {
    moment.locale('en')
    return moment(stamp).format('YYYY-MM-DD HH:mm')
}

export const stampToDateFormat = (stamp, format) => {
    moment.locale('en')
    return moment(stamp).format(format)
}