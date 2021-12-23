import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './pages/Home/Home'
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <BrowserRouter>
    <NavigationBar/>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/404" element={<NotFound/>} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
