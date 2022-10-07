import React, { useEffect, useState } from 'react'
export const Login = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const [valapiname, setValapiname] = useState([])
    const [valiapipassword, setValiapipassword] = useState([])

    /*    M E N S A J E S     d e    e  r r o r e s */
    const [error, setError] = useState('')
    const [errorpassword, setErrorpassword] = useState('')


   useEffect(() => {
    const loginapi = async () => {
        //poner esta api en el fetch
        // https://backend-edw.herokuapp.com/usuarios
        const res = await fetch('')
        const data = await res.json()
        setValapiname(data)
        setValiapipassword(data)
        // console.log(data[0])
    }
    loginapi()
   },[])

   function validatenameLogin(event) {
        setName(event.target.value)
        // console.log(name);
   }

   function validatepassword(event) {
        setPassword(event.target.value)
        // console.log(password);
   }

   const validacion = () => {
        if (name == valapiname[0][1] && password == valiapipassword[0][3]) {
            setError('Usuario Existente')
            setErrorpassword('')
        }else{
            setErrorpassword('el usuario o contraseña no son correctos')
            setError('')
        }
   }

  return (
    <div className='contBigL'>
        <div className='fromularyL' action="">
            <div>
                <h2>Login</h2>
            </div>
            <input onChange={validatenameLogin} type="text" placeholder='Username'/>

            <input onChange={validatepassword} type="password" placeholder='password'/>
            <div>
                <p>{error}</p>
            </div>
            <div>
                <p>{errorpassword}</p>
            </div>

            <div className='contBtnL'>
                <button onClick={validacion} className='btnL'>Entrar</button>
            </div>
        </div>
        
    </div>
  )
}

// {/* <div>
//     <p>{valapi[0]}</p>
// </div> */}