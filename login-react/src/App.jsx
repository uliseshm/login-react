import { useState } from 'react'
import './App.css'
import { validateFormData } from './js/formValidation'
import { MessageForm } from './components/MessageForm'

function App() {

  //se crea un estado para tomar los datos del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  let [isSucces, setIsSucces] = useState(false)

  //funcion para manejar el cambio en los inputs del form
  //y guardarlos
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({
      ...data,
      [name]: value
    }));
  }

  //agregar la logica aqui para validar los datos
  //obtenidos del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    validateFormData(formData)
      ? console.log("Redireccion a Home")
      : setIsSucces(true)
  }

  return (
    <>
      <div className='form-container'>
        <form onSubmit={handleSubmit} className='form'>
          <h1>Inicio de Sesión</h1>
          <label htmlFor="email">Correo electronico:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Ejem. carlos@empresa.com"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Contraseña:
          </label>
          <input
            type="password"
            name="password"
            placeholder="Min. 8 caracteres"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
      {isSucces && <MessageForm />}
      </div>
      
    </>
  )
}

export default App
