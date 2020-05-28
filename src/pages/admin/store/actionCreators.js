import axios from 'axios'
import * as apis from '../../../constants'
import * as constants from './constants'
import { actionCreators as homeActionCreators } from '../../home/store'
import { actionCreators as detailActionCreators } from '../../detail/store'
import { actionCreators as sidePanelActionCreators } from '../../../common/sidePanel/store'

export const setAdminLogin = (adminLogin) => ({
    type: constants.SET_ADMIN_LOGIN,
    adminLogin
})

export const setEditBlogId = (blogId) => ({
    type: constants.SET_EDIT_BLOG_ID,
    blogId
})

export const adminLogin = (credentials) => {
    return async (dispatch) => {
        try {
            const loginSuccess = (await axios.post(apis.ADMIN_LOGIN, credentials)).data.success
            if (!loginSuccess) {
                window.alert('Incorrect email address and/or email.')
                dispatch(setAdminLogin(false))
            } else {
                dispatch(setAdminLogin(true))
            }
        } catch (error) {
            window.alert('Request adminLogin(***) failed. ' + error)
        }
    }
}

export const addTag = (tagName) => {
    return async (dispatch) => {
        try {
            const success = (await axios.post(apis.TAG_LIST_ADD, {tagName, success: true})).data.success
            if (success) {
                dispatch(homeActionCreators.getTagList())
            } else {
                window.alert('addTag() unsuccessful.')
            }
        } catch (error) {
            window.alert(`Request addTag(${tagName}) failed. ` + error)
        }
    }
}

export const deleteTag = (tagId) => {
    return async (dispatch) => {
        try {
            const success = (await axios.post(apis.TAG_LIST_DELETE, {tagId, success: true})).data.success
            if (success) {
                dispatch(homeActionCreators.getTagList())
            } else {
                window.alert('deleteTag() unsuccessful.')
            }
        } catch (error) {
            window.alert(`Request deleteTag(${tagId}) failed. ` + error)
        }
    }
}

export const updateTag = (tagId, newTagName) => {
    return async (dispatch) => {
        try {
            const success = (await axios.post(apis.TAG_LIST_UPDATE, {tagId, newTagName, success: true})).data.success
            if (success) {
                dispatch(homeActionCreators.getTagList())
            } else {
                window.alert('updateTag() unsuccessful.')
            }
        } catch (error) {
            window.alert(`Request updateTag(${tagId}, ${newTagName}) failed. ` + error)
        }
    }
}

export const addFriend = (friendName, link) => {
    return async (dispatch) => {
        try {
            const success = (await axios.post(apis.FRIEND_LIST_ADD, {friendName, link, success: true})).data.success
            if (success) {
                dispatch(sidePanelActionCreators.getFriendList())
            } else {
                window.alert('addFriend() unsuccessful.')
            }
        } catch (error) {
            window.alert(`Request addFriend(${friendName}, ${link}) failed. ` + error)
        }
    }
}

export const deleteFriend = (friendId) => {
    return async (dispatch) => {
        try {
            const success = (await axios.post(apis.FRIEND_LIST_DELETE, {friendId, success: true})).data.success
            if (success) {
                dispatch(sidePanelActionCreators.getFriendList())
            } else {
                window.alert('deleteFriend() unsuccessful.')
            }
        } catch (error) {
            window.alert(`Request deleteFriend(${friendId}) failed. ` + error)
        }
    }
}

export const updateFriend = (friendId, newFriendName, newLink) => {
    return async (dispatch) => {
        try {
            const success = (await axios.post(apis.FRIEND_LIST_UPDATE, {friendId, newFriendName, newLink, success: true})).data.success
            if (success) {
                dispatch(sidePanelActionCreators.getFriendList())
            } else {
                window.alert('updateFriend() unsuccessful.')
            }
        } catch (error) {
            window.alert(`Request updateFriend(${friendId}, ${newFriendName}, ${newLink}) failed. ` + error)
        }
    }
}

export const addPinned = (blogId, blogTopic) => {
    return async (dispatch) => {
        try {
            const success = (await axios.post(apis.PINNED_LIST_ADD, {blogId, blogTopic, success: true})).data.success
            if (success) {
                dispatch(sidePanelActionCreators.getTopicList())
            } else {
                window.alert('addPinned() unsuccessful.')
            }
        } catch (error) {
            window.alert(`Request addPinned(${blogId}, ${blogTopic}) failed. ` + error)
        }
    }
}

export const deletePinned = (pinnedId) => {
    return async (dispatch) => {
        try {
            const success = (await axios.post(apis.PINNED_LIST_DELETE, {pinnedId, success: true})).data.success
            if (success) {
                dispatch(sidePanelActionCreators.getTopicList())
            } else {
                window.alert('deletePinned() unsuccessful.')
            }
        } catch (error) {
            window.alert(`Request deletePinned(${pinnedId}) failed. ` + error)
        }
    }
}

export const updatePinned = (pinnedId, blogId, topicName) => {
    return async (dispatch) => {
        try {
            const success = (await axios.post(apis.PINNED_LIST_UPDATE, {pinnedId, blogId, topicName, success: true})).data.success
            if (success) {
                dispatch(sidePanelActionCreators.getTopicList())
            } else {
                window.alert('updatePinned() unsuccessful.')
            }
        } catch (error) {
            window.alert(`Request updatePinned(${pinnedId}, ${blogId}, ${topicName}) failed. ` + error)
        }
    }
}

export const createBlog = () => {
    return async (dispatch) => {
        try {
            const success = (await axios.post(apis.BLOG_CREATE, {success: true})).data.success
            if (success) {
                dispatch(homeActionCreators.getBlogList())
            } else {
                window.alert('createBlog() unsuccessful.')
            }
        } catch (error) {
            window.alert(`Request createBlog() failed. ` + error)
        }
    }
}

export const deleteBlog = (blogId) => {
    return async (dispatch) => {
        try {
            const success = (await axios.post(apis.BLOG_DELETE, {blogId, success: true})).data.success
            if (success) {
                dispatch(homeActionCreators.getBlogList())
            } else {
                window.alert('deleteBlog() unsuccessful.')
            }
        } catch (error) {
            window.alert(`Request deleteBlog(${blogId}) failed. ` + error)
        }
    }
}

export const updateBlog = (submit, callback) => {
    return async (dispatch) => {
        try {
            const success = (await axios.post(apis.BLOG_UPDATE, {submit, success: true})).data.success
            if (success) {
                dispatch(detailActionCreators.getBlogById(submit.id))
                callback()
            } else {
                window.alert('updateBlog() unsuccessful.')
            }
        } catch (error) {
            window.alert(`Request updateBlog({id: ${submit.id}, ...}) failed. ` + error)
        }
    }
}