
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from './components/navBarComponent/navBar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AllHomeComp from './components/allHomeComp';
import GetTickets from './components/getTickets/getTickets';


function App() {
  return (

      <BrowserRouter>
      <NavBar/>
      
      <Routes>

        <Route path="/" element={<AllHomeComp/>}/>
        <Route path="/getTickets/:id" element={<GetTickets/>}/>
       
      </Routes>
      </BrowserRouter>

  );
}

export default App;
