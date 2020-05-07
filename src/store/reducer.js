import { combineReducers } from 'redux-immutable'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as contentReducer } from '../pages/content/store'

const reducer = combineReducers({
    home: homeReducer,
    content: contentReducer
})

export default reducer