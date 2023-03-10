import logo from './logo.svg';
import './styles/App.scss';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal container'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
        <Testimonio
        nombre="Shawn Wang"
        pais="Singapore"
        cargo="Software Engineer"
        empresa="Amazon"
        testimonio="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        img="1"
        />
        <Testimonio
        nombre="Sarah Chima"
        pais="Nigeria"
        cargo="Software Engineer"
        empresa="ChatDesk"
        testimonio="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
        img="2"
        />
        <Testimonio
        nombre="Emma Bostian"
        pais="Sweden"
        cargo="Software Engineer"
        empresa="Spotify"
        testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        img="3"
        />
      </div>
    </div>
  );
}

export default App;
