import HostelDetail from 'modules/hostel/component/HostelDetail'
import Signup from 'modules/signup/component/Signup'
import Hostel from 'modules/hostel/component/Hostel'
import Login from 'modules/login/component/Login'
import Book from 'modules/Book/component/BookList'
import { Route, Switch } from 'react-router-dom'
export default function componentName() {
  return (
    <>
      <Switch>
      <Route exact path="/book">
          <Book />
        </Route>
      <Route exact path="/signup">
          <Signup />
        </Route>
      <Route exact path="/hostel">
          <HostelDetail />
        </Route>
      
        <Route exact path="/login">
          <Login />
        </Route>
      
        <Route  exact path="/">
          <Hostel/>
        </Route>
      </Switch>
    </>
  )
}