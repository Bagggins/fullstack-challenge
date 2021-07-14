import './App.css';
import Details from './Pages/Details/details';
import NewBook from './Pages/NewBook/newBook';


import Home from './Pages/Home/home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/newBook" component={NewBook}/>
          
          <Route path="/:id" exact component={Details}/>
        </Switch>
      </div>
    </Router>
  )
}




export default App;
