import moment from 'moment'

export const stampToDate = (stamp) => {
    moment.locale('en')
    return moment(stamp).format('LLLL')
}