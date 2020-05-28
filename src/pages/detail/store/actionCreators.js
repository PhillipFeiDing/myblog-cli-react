import axios from 'axios'
import * as apis from '../../../constants'
import * as constants from './constants'

export const setBlogId = (currBlogId) => ({
    type: constants.SET_BLOG_ID,
    currBlogId
})

export const fillBlogContentById = (id, blog) => ({
    type: constants.FILL_BLOG_CONTENT_BY_ID,
    id,
    blog
})

export const getBlogById = (id) => {
    return async (dispatch) => {
        try {
            const blog = (await axios.get(apis.BLOG_DETAIL(id))).data.data
            dispatch(fillBlogContentById(id, blog))
        } catch (error) {
            window.alert(`Request getBlogById(${id}) failed. ` + error)
        }
    }
}