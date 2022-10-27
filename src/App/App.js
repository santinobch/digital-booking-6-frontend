import './App.scss';
import Home from "./pages/home/home";

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Select from './components/inputs/select/select';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
      <Select></Select>
    </div>
  );
}

export default App;
