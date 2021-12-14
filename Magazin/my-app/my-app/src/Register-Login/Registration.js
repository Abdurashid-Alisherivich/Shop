import './Registration.css'
import React, { useState} from "react"
import  axios from "axios"
import Menu_for_login from '../frontend_for_login/menu_for_login'


function Registration (){
    const [register, setRegister] = useState({
       name: '',
       shopName: '',
       phoneNumber:'',
       address: '', 
       login: '',
       password:''
    })

    const changeHandler = (e) =>{
        setRegister({...register,[e.target.name]:e.target.value})
    }
     async function SendForm(e){
         await axios.post('http://localhost:5000/client',register)

         .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err);
        })
        e.preventDefault()
    
     }
     

    return(
        <>
        <Menu_for_login />
        <div className="reg-body"  style={{
             backgroundImage: `url("./image/img4.jpg")` }}>

            <div className="reg-inner">
            <form onSubmit={SendForm}>
            
                <div className="mb-3">
                    <label for="reg-form" className="form-label reg-form for-color">F.I.O</label>
                    <input type="text" 
                    className="form-control reg-inputs"  
                    id="reg-form"
                     aria-describedby="emailHelp" 
                         value={register.name}
                         name="name"
                         onChange={changeHandler}
                     />
                </div>
               
                <div className="mb-3">
                    <label for="reg-input-form" className="form-label for-color">Savdo markazining nomi</label>
                    <input
                    value={register.shopName}
                         name="shopName"
                         onChange={changeHandler}
                     type="text" className="form-control  reg-inputs"  id="reg-input-form" />
                </div>
                <div className="mb-3">
                    <label for="reg-input-form" className="form-label for-color">Telefon raqam</label>
                    <input 
                    value={register.phoneNumber}
                         name="phoneNumber"
                         onChange={changeHandler}
                    type="number" className="form-control  reg-inputs" id="reg-input-form" />
                </div>
                <div className="mb-3">
                    <label for="reg-input-form" className="form-label for-color">Manzil</label>
                    <input
                     value={register.address}
                         name="address"
                         onChange={changeHandler}
                     type="text" className="form-control  reg-inputs" id="reg-input-form" />
                </div>

                <div className="mb-3">
                    <label for="reg-form" className="form-label for-color">Login</label>
                    <input type="text"
                    value={register.login}
                         name="login"
                         onChange={changeHandler}
                     className="form-control" id="reg-form" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="reg-input-form" className="form-label for-color">Parol</label>
                    <input type="text"
                    value={register.password}
                         name="password"
                         onChange={changeHandler}
                     className="form-control" id="reg-input-form" />
                </div>
                <input type="submit" className="btn btn-primary reg-button" value="Tasdiqlash" />
                            
        </form>
            </div>


        </div>
        </>
    )
}
export default Registration