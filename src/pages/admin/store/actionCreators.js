import axios from 'axios'
import * as apis from '../../../constants'
import * as constants from './constants'

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