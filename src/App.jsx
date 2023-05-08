import { useState } from 'react'
import './App.css'
import { OPTIONS_FORM, TOTAL_POINTS } from './assets/js/constants'
import Form from './components/Form';
import Header from './components/Header'; 
import Description from './components/Description';
import Progress from './components/Progress';
import ViedeoView from './components/ViedeoView';
import Contact from './components/Contact';

function App() {
  const [datoSeleccionado, setDatoSeleccionado] = useState({ description: 'Selecciona un elemento del formulario para ver su descripcion aqui' });
  const [contador, setContador] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);


  const calcularPorcentaje = (dato, suma) => {
    setDatoSeleccionado(dato);
    setContador(contador + suma);
    setContador(contador + suma);
    setPorcentaje((contador * 100) / TOTAL_POINTS);
    setPorcentaje((contador * 100) / TOTAL_POINTS);
  }




  return (
    <div className="App ">
      <Header />
      <section className='responsive-container'>

        <Form
          datos={OPTIONS_FORM}
          calcularPorcentaje={calcularPorcentaje}
        />
        <section className="description-area">
          <Description value={datoSeleccionado.description} />
          <Progress value={porcentaje} />
          <ViedeoView video={"https://www.youtube.com/embed/r4pvzM77CMs"} />
          <Contact />
        </section>
      </section>
    </div>
  )
}

export default App
