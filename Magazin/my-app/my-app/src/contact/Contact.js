import React , {useState , useEffect} from "react";
import axios from 'axios'
import './Contact.scss'
import Maps from "../Map/Map";
import Menu from "../frontend/menu";

const Contact = () =>{



    // start Hooks page

const  [contact, setContact] = useState({
    name: '',
    surname: '',
    number: '',
    mag_name: '',
    message: '',
    vaqti: new Date().toDateString()
  })

  const changeHandle = (e) => {
    setContact({...contact , [e.target.name]:e.target.value})
  }
  async function SendForm(e){
    await axios.post('http://localhost:5000/contact', contact)
    .then((res)=>{  
      console.log(res)
    }) .catch((err)=>{
      console.log(err)
    })
    e.preventDefult()
  }


    return(
        <>

        <Menu />

     
       <div className="images"></div>

              
        <div className="container">
          <h1 className="contact_basic_text" >
              Biz bilan bog'lanish
          </h1>
            <div className="row">
              <div className="col-12 col-md-5">
                  <h4 className="contact_basic_text1">
                      Assalomu Alaykum Aziz Obunachilar!
                  </h4>
                      <p className="contact_p"> Bu sahifa orqali siz admin bilan bog'lanishingiz va o'zingizni 
                      savollaringizni va yana qo'shimcha qulaylik yaratish uchun takliflar berishiz mumkin.</p>
                  
                          <h4 className="contact_basic_text1" > Biz bilan bog'lanish uchun </h4>
                              <p className="contact_p">Tel: +998(99) 002 88 35 </p> 
                              <p className="contact_p"> Email manzil: TechnobackTeam @gamil.com </p>
                          <h4 className="contact_basic_text1">Manzil:</h4>
                              <p className="contact_p"> Farg'ona viloyati, Fargo'na shahri, Farg 'ona soliq boshqarmasi 
                              to'g'risidagi "Verona mebel" binosi 3 qavat.</p>
              </div>
              <div className="col-12 col-md-7">
                {/* <div className="container"> */}
                <form onSubmit={SendForm}>

                  <div className="row">

                    <div className="col-sm-12 col-md-6 contact-input-action">
                            <input type="text"  className="form-control"
                              name="name"
                              onChange={changeHandle}
                              value={contact.name}
                              placeholder="Ismingizni kiriting"
                            />

                  </div>

                  <div className="col-sm-12 col-md-6 contact-input-action">
                          <input type="text"  className="form-control"
                            name="surname"
                            onChange={changeHandle}
                            value={contact.surname}
                            placeholder="Familyangizni kiriting"
                          />
                  </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12 col-md-6 contact-input-action">
                        <input type="text"  className="form-control"
                          name="number"
                          onChange={changeHandle}
                          value={contact.number}
                          placeholder="Telefon raqamingizni kiriting"
                  />
                    </div>
                    <div className="col-sm-12 col-md-6 contact-input-action">
                         <input type="text"  className="form-control"
                           name="mag_name"
                           onChange={changeHandle}
                           value={contact.mag_name}
                           placeholder="Magazin nomi"
                  />
                  </div>
                  </div>
                            <textarea 
                            name="message"
                            onChange={changeHandle}
                            value={contact.message}
                            class="form-control contact-input-action contact_text_area_width" 
                            placeholder="Xabar Yuboring..." 
                           >
                            </textarea>
                            
                           <input type="submit"  className="btn btn-primary for_btn_style77"
                             
                             value="Send"
                            
                           />
                </form>
                {/* </div> */}
              </div>
            </div>

                      <div class="row">
                        <div class="col-sm-12 col-md-12">
                          <Maps />
                        </div>
                        <div class="col-sm-12 col-md-12">
                          
                        </div>
                      </div>
                    </div>
                  






                   

        </>
    )
}

export default Contact