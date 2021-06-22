import './App.css';
import Header from "./components/header";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

import Container from './components/container';

function App() {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <Container></Container>
      <Footer />
    </div>
  );
}

export default App;
