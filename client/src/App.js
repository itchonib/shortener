import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home'
import NavigationBar from './components/NavigationBar/NavigationBar';


function App() {
  return (
    <BrowserRouter>
    <NavigationBar/>
    <Routes>
      <Route exact path="/" element={<Home />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
