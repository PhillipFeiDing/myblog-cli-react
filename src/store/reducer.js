import { combineReducers } from 'redux-immutable'
import { reducer as appReducer } from './appReducer'
import { reducer as sidePanelReducer } from '../common/sidePanel/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'
import { reducer as adminReducer } from '../pages/admin/store'

const reducer = combineReducers({
    app: appReducer,
    sidePanel: sidePanelReducer,
    home: homeReducer,
    detail: detailReducer,
    admin: adminReducer
})

export default reducer