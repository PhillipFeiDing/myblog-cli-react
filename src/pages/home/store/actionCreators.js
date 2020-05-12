import axios from 'axios'
import * as apis from '../../../constants'
import * as constants from './constants'
import * as appConstants from '../../../store/constants'

const fillTagList = (tagList) => ({
    type: constants.FILL_TAG_LIST,
    tagList
})

const fillBlogList = (blogList) => ({
    type: constants.FILL_BLOG_LIST,
    blogList
})

export const changePageNum = (pageNum) => ({
    type: constants.CHANGE_PAGE_NUM,
    pageNum
})

export const setTagName = (tagName, tagId) => ({
    type: constants.SET_TAG_NAME,
    tagName,
    tagId
})

export const searchTitle = (title) => ({
    type: constants.SEARCH_TITLE,
    title
})

export const updateLayout = (viewportWidth) => ({
    type: appConstants.UPDATE_LAYOUT,
    viewportWidth
})

export const getTagList = () => {
    return async (dispatch) => {
        try {
            const tagList = (await axios.get(apis.TAG_LIST)).data.data
            dispatch(fillTagList(tagList))
        } catch {
            window.alert('Request getTagList() failed.')
        }
    }
}

export const getBlogList = () => {
    return async (dispatch) => {
        try {
            const blogList = (await axios.get(apis.BLOG_LIST)).data.data
            dispatch(fillBlogList(blogList))
        } catch {
            window.alert('Request getBlogList() failed.')
        }
    }
}