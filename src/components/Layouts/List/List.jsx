// import axios from 'axios'
// https://backend-edw.herokuapp.com/usuarios
import React, { useEffect, useState } from 'react'

export const List = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          // PONER ESTA API EN EL FETCH
          // https://backend-edw.herokuapp.com/usuarios
          const res = await fetch('')
          const data = await res.json()
          console.log(data)
          setUser(data)
        }
        fetchData()
    }, [])
    
  return (
    // container_tables
    // customers
    <div className='contList'>
      <h1>USUARIOS REGISTRADOS</h1>
      <div className='subContlist'>
        <table className='table'>
          <tfoot>
            {/* <tr><td>ID</td></tr>
            <tr><td>Email</td></tr>
            <tr><td>User Name</td></tr>
            <tr><td>Password</td></tr> */}
          </tfoot>
            {user.map(dat => {
              return(
                <tr>
                  <td>{dat[0]}</td>
                  <td>{dat[1]}</td>
                  <td>{dat[2]}</td>
                  <td>{dat[3]}</td>
                </tr>
              )
            })}
        </table>
      </div>
    </div>
  )
}
