import React from 'react'
import './css/Form.css'
import Switch from './Switch'

const Form = ({datos,calcularPorcentaje}) => {
  return (
    <form className='box Form'>
        {datos? datos.map((opcion,index)=>{
            return (
                <div key={index}>
                    <label htmlFor={index}>{opcion.name.toUpperCase()}</label>
                    <Switch id= {index} ClickButton={calcularPorcentaje} dato = {opcion}/>
                </div>
            )
        }):null}
    </form>
  )
}

export default Form