import * as constants from './constants'
import axios from 'axios'
import * as apis from '../../../constants'

const fillFooterIconList = (footerIconList) => ({
    type: constants.FILL_FOOTER_ICON_LIST,
    footerIconList
})

export const getFooterIconList = () => {
    return async (dispatch) => {
        try {
            const data = (await axios.get(apis.FOOTER_ICON_LIST)).data.data
            dispatch(fillFooterIconList(data))
        } catch {
            window.alert('Request getFooterIconList() failed.')
        }
    }
}