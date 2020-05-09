import * as constants from './constants'
import axios from 'axios'
import * as apis from '../../../constants'

const fillTopicList = (topicList) => ({
    type: constants.FILL_TOPIC_LIST,
    topicList
})

const fillFriendList = (friendList) => ({
    type: constants.FILL_FRIEND_LIST,
    friendList
})

export const getTopicList = () => {
    return async (dispatch) => {
        try {
            const data = (await axios.get(apis.TOPIC_LIST)).data.data
            dispatch(fillTopicList(data))
        } catch {
            window.alert('Request getMenuList() failed.')
        }
    }
}

export const getFriendList = () => {
    return async (dispatch) => {
        try {
            const data = (await axios.get(apis.FRIEND_LIST)).data.data
            dispatch(fillFriendList(data))
        } catch {
            window.alert('Request getFriendList() failed.')
        }
    }
}