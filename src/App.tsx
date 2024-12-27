import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/section/main/Main";
import { Skills } from "./layout/section/skills/Skills";
import { Projects } from "./layout/section/projects/Projects";
import { Footer } from "./layout/footer/Footer";
import { Particle } from "./components/particle/Particle";
import { Testimonials } from "./layout/section/testimonies/Testimonials";

function App() {
  return (
    <div className="App">
      <Particle />
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Testimonials/>
      <Footer />
    </div>
  );
}

export default App;
