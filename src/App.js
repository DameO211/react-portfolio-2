import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';




function App() {

  return (
    <>
        <Navbar />
        <Header />
        <AboutMe />
        <Skills />
    </>
  );
}

export default App;
