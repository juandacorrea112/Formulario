import React from 'react'
import { Form } from '../Layouts/Form/Form.jsx'
import { Navigator } from '../Layouts/Header/Nav/Navigator'

export const Inicio = () => {
  return (
    <div className='contPadre'>
      <Navigator/>
      <Form/>
    </div>
  )
}
