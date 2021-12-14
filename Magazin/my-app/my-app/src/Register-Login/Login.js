import './Login.css'
import React , {useState,useEffect} from 'react'
import axios from 'axios'
import Menu_for_login from '../frontend_for_login/menu_for_login'
import {useHistory} from 'react-router-dom'
function Login (){
    const history = useHistory()
    
    const [log , setLog] = useState({
        login : '',
        password: ''
       })

       const changeHandler = (e) =>{
        setLog({...log,[e.target.name]:e.target.value})
    }

    const [admin , setAdmin] = useState()
    useEffect(async ()=>{
    const res = await axios.get('http://localhost:5000/client') 
        setAdmin(res.data)
       
    },[])

    const check = () => {
       const result = admin.find((elem)=>{
            if(elem.login == log.login && elem.password == log.password) {
                return true
            }
            
        })
        if(!result){
            alert('login parol hato')
        } else {
            localStorage.setItem('user', JSON.stringify(result))
            history.push('/product')
        }
        console.log(result)
    }

 return (
     <>

     <Menu_for_login />

          <div className="login-body">

                <div className="login-inner">
            <form >

                <div className="mb-3">
                    <label for="login-form" className="form-label for-color">Login</label>
                    <input
                        onChange={changeHandler}
                        value={log.login}
                    name="login"
                     type="text" className="form-control login-inputs" id="login-form" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="login-input-form" className="form-label for-color">Parol</label>
                    <input
                    onChange={changeHandler}
                    value={log.password}
                    name="password"
                     type="text" className="form-control login-inputs" id="login-input-form" />
                </div>
               
                <button type="button" onClick={check} className="btn btn-primary login-button">Tasdiqlash</button>
                
       </form>
    </div>
 </div>
     </>
 )
}
export default Login