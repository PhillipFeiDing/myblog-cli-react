import axios from 'axios'
import * as apis from '../../../constants'
import * as constants from './constants'
import { actionCreators as homeActionCreators } from '../../home/store'

const setAdminLogin = (adminLogin) => ({
    type: constants.SET_ADMIN_LOGIN,
    adminLogin
})

export const adminLogin = (credentials) => {
    return async (dispatch) => {
        try {
            const loginSuccess = (await axios.post(apis.ADMIN_LOGIN, credentials)).data.data.loginSuccess
            if (!loginSuccess) {
                window.alert('Incorrect email address and/or email.')
            } else {
                dispatch(setAdminLogin(true))
            }
        } catch {
            window.alert('Request adminLogin(***) failed.')
        }
    }
}

export const addTag = (tagName) => {
    return async (dispatch) => {
        try {
            const success = (await axios.post(apis.TAG_LIST_ADD, {tagName, success: true})).data.data.success
            if (success) {
                dispatch(homeActionCreators.getTagList())
            } else {
                window.alert('addTag() unsuccessful.')
            }
        } catch {
            window.alert(`Request addTag(${tagName}) failed.`)
        }
    }
}

export const deleteTag = (tagId) => {
    return async (dispatch) => {
        try {
            const success = (await axios.post(apis.TAG_LIST_DELETE, {tagId, success: true})).data.data.success
            if (success) {
                dispatch(homeActionCreators.getTagList())
            } else {
                window.alert('deleteTag() unsuccessful.')
            }
        } catch {
            window.alert(`Request deleteTag(${tagId}) failed.`)
        }
    }
}

export const updateTag = (tagId, newTagName) => {
    return async (dispatch) => {
        try {
            const success = (await axios.post(apis.TAG_LIST_UPDATE, {tagId, newTagName, success: true})).data.data.success
            if (success) {
                dispatch(homeActionCreators.getTagList())
            } else {
                window.alert('updateTag() unsuccessful.')
            }
        } catch {
            window.alert(`Request updateTag(${tagId}, ${newTagName}) failed.`)
        }
    }
}