import React from 'react';
import  { useEffect, useState } from 'react'
import axios from 'axios';

export const Form = () => {


  const specialsCharactersEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const [email, setEmail] = useState('');
  const [validateemail, setValidateemail] = useState('');

  const valEmail = (event) => {
    setEmail(event.target.value);
  }

  useEffect(() => {

    if(specialsCharactersEmail.test(email)){      
        setValidateemail('');
    }else if (email == ""){
      setValidateemail('Error: no dejes este campo sin llenar')
    }else{
      setValidateemail('Error: no olvides escribir @gmail.com')
    }
  },[email]);

  /*   C A R A C T E R E S     E S P E C I A L E S     */

  /*   F U N C I O N A L I D A D   I N P U T   N A M E  */

  const SpecialCharacterUs = /^[a-zA-Z0-9]{3,20}$/;
//-------------------------------------------------------

  const [name, setName] = useState('');
  const [namevalidate, setNamevalidate] = useState('');

  const valName = (event) => {
    setName(event.target.value);
  }

  useEffect(() =>{
    if (SpecialCharacterUs.test(name)){
      setNamevalidate('')
    }else if (name === ""){
      setNamevalidate('Error: no dejes este campo sin llenar')
    }
    else{
      setNamevalidate('Error: tu nombre de usuario no debe tener caracteres especiales y no debe tener menos de 3 carcateres ni espacios')
    }
  },[SpecialCharacterUs]);



    /*          C A R A C T E R E S       E S P E C I A L E S          */
    const limiteCharacters = /^[a-zA-Z0-9_?-@_*_+&#¿}]{8,20}$/;
    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    
    /*    C O N S T A N T E S     P A R A     L O S     P A S S W O R D      */
      const [passwordVacio, setPasswordVacio] = useState('');
      const [confirmpassword, setConfirmpassword] = useState('');
      
    
    /*  M E N S A J E S    DE    V A L I D A C I O N E S    D E L    P A S S W O R D   */
      const [validatepassword, setValidatepassword] = useState('');
      const [validationconfirmpassword, setValidationconfirmpassword] = useState('');
    
      const valPassword = (event) => {
        setPasswordVacio(event.target.value);
        // console.log(event.target.value);
      }
    
      const valConfirmPassword = (event) => {
        setConfirmpassword(event.target.value);
        // console.log(event.target.value);
    
      }
    
      useEffect(() => {
        if(limiteCharacters.test(passwordVacio)){
          setValidatepassword('')
        }else if(passwordVacio ==""){
          setValidatepassword('Error: debes escribir una contraseña')
        }
        else if(limiteCharacters.test(passwordVacio)){
          setValidatepassword('');
        }
        else{
          setValidatepassword('tu contraseña no debe ser menor a 8 carcateres');
        }
    
        if (passwordVacio === confirmpassword){
          setValidationconfirmpassword('');
        }else {
          setValidationconfirmpassword('Error: la contraseña es diferentre a la que haz puesto');
        }
        
      },[passwordVacio, confirmpassword]);

    const [confirmregister, setConfirmregister] = useState('');
    
    
    const axiosFunction =()=> {
      // poner esta API en el post
      // https://backend-edw.herokuapp.com/usuario
      axios.post('', {
        'username': name,
        'name': email,
        'password': passwordVacio,
      })
      .then(function (response){
        console.log(response.data);
        setConfirmregister(response.data)
      })
      .catch(value => {
        console.log("error");
        console.log(value);
        console.log(value.data);

      });
    }

  return (
    <div className='contBig'>
      <div className='fromulary'>
        <h1>RESGISTER</h1>
        <div>
          <input type="email" onChange={valEmail}placeholder='email' required/>
          <p className='errorEmail'>{validateemail}</p>
        </div>
        <div>
          <input className='name' type="text" onChange={valName} placeholder='nombre' />
          <p className='errorName'>{namevalidate}</p>
        </div>
        
        <div>
          <div>
              <input className='password' onChange={valPassword} type="password" placeholder='contraseña' required/>
              <p className='errorPassword'>{validatepassword}</p>
          </div>
          <div>
            <input type="password" onChange={valConfirmPassword} required placeholder='confirmar contraseña'/>
            <p className='errorConfirmP'>{validationconfirmpassword}</p>
          </div>
        </div>

        <div className='contmessageConfirm'>
          <p>{confirmregister.Message}</p>
        </div>

        <div>
          <button onClick={axiosFunction} className='btn'>Register</button>
        </div>
      </div>
    </div>
  )
}