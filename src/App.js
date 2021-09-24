import "./App.scss";
import Navbar from "./pages/navbar/Navbar";
import HomePage from "./pages/homepage/Home";
import About from "./pages/about-us/About";
import References from "./pages/references/References";
import Services from "./pages/services/Services";
import Team from "./pages/team/Team";
import Footer from "./pages/footer/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <About></About>
      <References></References>
      <Services></Services>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
}

export default App;
