import { useState } from 'react'
import Container from './container'

const inputs = [
  { type: 'text', name: 'name', placeholder: 'Nombre', required: true },
  { type: 'email', name: 'email', placeholder: 'Email', required: true },
  { type: 'text', name: 'country', placeholder: 'País', required: true },
  { type: 'text', name: 'message', placeholder: 'Mensaje', required: true }
]

export const Form = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [values, setValues] = useState({
    name: '',
    email: '',
    country: '',
    message: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setValues((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const url = '/api/submit'

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      await response.json()
      setIsSuccess(true)
      console.log(isSuccess)
    } catch (error) {
      console.error('API error:', error)
    }
  }

  return (
    <Container className='p-0'>
      {isSuccess
        ? (
          <p className='w-full max-w-2xl p-2 mx-auto text-lg text-center text-blue-600'>
            Mensaje enviado exitósamente
          </p>
          )
        : (
          <form onSubmit={handleSubmit} className='w-full max-w-2xl p-2 mx-auto'>
            {inputs.map(input => (
              <input
                key={input.name}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                value={values[input.name]}
                onChange={handleInputChange}
                required={input.required}
                className='border border-gray-300 dark:border-trueGray-800 dark:bg-trueGray-800 w-full rounded-xl p-4 text-lg mb-5'
              />
            ))}

            <input type='submit' value='Enviar' className='p-4 rounded-lg bg-blue-600 hover:bg-blue-700 cursor-pointer w-full text-white' />
          </form>
          )}
    </Container>
  )
}
