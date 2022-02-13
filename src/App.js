import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom"
import HomeScreen from './Screesns/HomeScreen';
import ContactScreen from './Screesns/ContactScreen';

function App() {
  return (
    <div className="App">
     

    
      <Switch>
        {/* <Route exact path = "/"  component={Login}/> */}
        <Route exact path ="/" component={HomeScreen}/>
        <Route exact path ="/contact" component={ContactScreen} />
        {/* <Route exact path = "/contact" component={ContactScreen}/>
        <Route exact path ="/carrier" component={CarrierScreen} />
        <Route exact path = "/other" component={OtherScreen} />
        <Route exact path = "*"  component={PageNotFound}/> */}
         
        
      </Switch>

    </div>
  );
}

export default App;
