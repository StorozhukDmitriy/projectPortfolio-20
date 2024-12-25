import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/section/main/Main";
import { Skills } from "./layout/section/skills/Skills";
import { Projects } from "./layout/section/projects/Projects";
import { Footer } from "./layout/footer/Footer";
import { Particle } from "./components/particle/Particle";

function App() {
  return (
    <div className="App">
      <Particle/>
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
