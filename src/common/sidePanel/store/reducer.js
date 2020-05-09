import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [],
    friendList: []
})

export default (state=defaultState, action) => {
    switch (action.type) {
        case constants.FILL_TOPIC_LIST:
            return state.set('topicList', fromJS(action.topicList))
        case constants.FILL_FRIEND_LIST:
            return state.set('friendList', fromJS(action.friendList))
        default:
            return state
    }
}