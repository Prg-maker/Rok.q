import {BrowserRouter, Route, Switch} from 'react-router-dom'


import {Home} from './pages/Home'
import {CreateRoom} from './pages/CreateRoom'
import {Room} from './pages/Room'
import {AdminRoom} from './pages/AdminRoom' 

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/rooms/create_room"  component={CreateRoom}/>
        <Route path="/rooms/:codigo"  component={Room}/>
        <Route path="/admin/rooms/:codigo" component={AdminRoom}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
