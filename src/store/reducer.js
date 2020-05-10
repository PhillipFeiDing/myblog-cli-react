import { combineReducers } from 'redux-immutable'
import { reducer as appReducer } from './appReducer'
import { reducer as sidePanelReducer } from '../common/sidePanel/store'
import { reducer as footerReducer } from '../common/footer/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'

const reducer = combineReducers({
    app: appReducer,
    sidePanel: sidePanelReducer,
    footer: footerReducer,
    home: homeReducer,
    detail: detailReducer
})

export default reducer