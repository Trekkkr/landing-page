import { useState } from 'react'
import axios from 'axios'
import Container from './container'

import { selects } from '../constants/countries'

const inputs = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'John Doe',
    required: true
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'johndoe@email.com',
    required: true
  }
]

export const Form = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    userType: '',
    paymentPlan: '',
    message: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSelectChange = (event) => {
    const { value, name } = event.target
    console.log(value)
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formData)
    const url = '/api/submit'

    try {
      const response = await axios.post(url, formData)
      console.log(response)
      setIsSuccess(true)
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
          <form onSubmit={handleSubmit} className='w-full max-w-2xl p-2 mx-auto space-y-5'>
            <div>
              {inputs.map(input => (
                <label key={input.name} className='capitalize'>
                  {input.name}
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    name={input.name}
                    value={formData[input.name]}
                    onChange={handleInputChange}
                    required={input.required}
                    className='border border-gray-300 dark:border-trueGray-800 dark:bg-trueGray-800 w-full rounded-xl p-4 text-lg mb-5'
                  />
                </label>
              ))}
            </div>

            <div className='space-y-3'>
              {selects.map(({ label, defaultValue, name, options, required }) => (
                <div key={name}>
                  <label>
                    {label}
                    <select
                      name={name}
                      value={formData[name]}
                      onChange={handleSelectChange}
                      required={required}
                      className='border border-gray-300 dark:border-trueGray-800 dark:bg-trueGray-800 w-full rounded-xl p-4 text-lg mb-5 appearance-none'
                    >
                      <option value='' disabled>{defaultValue}</option>
                      {options.map((item) => (
                        <option
                          key={item.code}
                          value={item.value}
                          disabled={item.disabled}
                        >
                          {item.value}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              ))}
            </div>

            <textarea
              cols='30'
              rows='5'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              className='border border-gray-300 dark:border-trueGray-800 dark:bg-trueGray-800 w-full rounded-xl p-4 text-lg mb-5'
              placeholder='Agrega una pregunta o comentario (opcional)'
            />

            <input type='submit' value='Enviar' className='p-4 rounded-lg bg-blue-600 hover:bg-blue-700 cursor-pointer w-full text-white' />
          </form>
          )}
    </Container>
  )
}
