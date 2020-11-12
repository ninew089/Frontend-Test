import { combineReducers } from 'redux'
import ui from 'modules/ui/reducer'
import book from 'modules/Book/reducer'
import login from 'modules/login/reducer'
import hostel from 'modules/hostel/reducer'
export default combineReducers({
  ui,
  book,
  login,
  hostel
})
