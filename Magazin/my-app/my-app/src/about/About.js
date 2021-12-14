import './About.scss'
import React from 'react';
import Menu from '../frontend/menu';

const About = () =>{

    return(
        <>

        <Menu />
       
        <div className="about-div">
            <div className="container about-container">
              <div className="wrapper-about">
                <h2 className="aboutH2">Biz Haqimizda</h2>
                <ul className="aboutUl">
                  <li><a href="/">Home</a></li>
                  <li><span> | About</span></li>
                </ul>
              </div>
            
            </div>
        </div>


        {/* ///////////// */}


        <div className="about2">
        <div className="container about2-container">
        <div className="row">
          <div className="col-5 about2-img">
            <div className="container about-col5-container">
              <div className="about2-img">
               <h2 className="about2-h2">25+</h2>
               <span className="about2-span">YILLIK TAJRIBA</span>
              </div>
            </div>
          </div>
          <div className="col-7 about2-col7">
            <div className="container about-col7-container">
              <span className="subText">BIZ HAQIMIZDA</span>
              <h2 className="col7-h2">Ko'pgina kompaniyalar ko'rsatadigan xizmatlar</h2>
               <strong className="strong-about">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                Lorem ipsum dolor sit amet.
                </strong>
                <p className="p-text-about">
                  TECHNOBECK -ning barcha yirik ishlab chiqarish kompaniyalari vakili huquqni topadi
                  xizmat ko'rsatish va o'z mijozlari uchun eng yaxshi narxlar. Ularning yangi professional ishlab chiqarish auditi
                  xizmat yordam beradi.
                </p>
                      <button className="about-btn textUppercase " tabindex="0" type="button">
                       <span className="about2-Button-label">Ko'proq bilish</span>
                      </button>
            </div>
          </div>
        </div>
        </div>
        </div>



        {/* What We Do Area start */}

        <div className="whatWeDoArea">
          <div className="container whatWeDoArea-container">
            <div className="sectionTitle-about">
              <span className="about-service">Xizmatlar</span>
              <h3 className="whatWeDo-abouth3">Biz Nima Qilamz?</h3>
              {/* <h2 className="about-servicesH2">Xizmatlar</h2> */}
            </div>
            <div className="container rowContainerWrap">
              <div className="row whatWeDo-row">
                <div className="col-sm-4 col-whatWeDo">
                  <div className="whatWeDoWrap">
                    <img className="whatWeDo-img" src="./img/about/about-card1.png" alt="" />
                    <h3 className="weCanDo-h3">Ishlab Chiqarish</h3>
                    <p className="weCanDo-p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo eum ad vero omnis tempora quas 
                      velit corporis sed reiciendis?
                    </p>
                 
                  </div>
                </div>
                <div className="col-sm-4 col-whatWeDo">
                  <div className="whatWeDoWrap">
                  <img  className="whatWeDo-img" src="./img/about/about-card2.png" alt="" />
                    <h3 className="weCanDo-h3">Yetkazib Berish</h3>
                    <p className="weCanDo-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo eum ad vero omnis tempora quas 
                    velit corporis sed reiciendis?
                    </p>
              
                  </div>
                </div>
                <div className=" col-sm-4 col-whatWeDo">
                  <div className="whatWeDoWrap">
                  <img  className="whatWeDo-img" src="./img/about/about-card2.png" alt="" />
                    <h3 className="weCanDo-h3">Qulay Narxlar</h3>
                    <p className="weCanDo-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo eum ad vero omnis tempora quas 
                    velit corporis sed reiciendis?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do Area start end */}



        {/* counter start */}


<div className="counter-area">
<div className="container counterArea-container">

  <section id="counter" className="sec-padding">
		<div className="container row-container-counter">
			<div className="row">
				<div className="col-md-3 torovi">
					<div className="count"> <span className="fa fa-smile-o"></span>
						<p className="number-counter">126</p>
						<h4>Happy Clients</h4> </div>
				</div>
				<div className="col-md-3 torovi">
					<div className="count"> <span className="fa fa-smile-o"></span>
						<p className="number-counter">535</p>
						<h4>Awards</h4> </div>
				</div>
				<div className="col-md-3 torovi">
					<div className="count"> <span className="fa fa-smile-o"></span>
						<p className="number-counter">896</p>
						<h4>Total Hours</h4> </div>
				</div>
				<div className="col-md-3 torovi">
					<div className="count"> <span className="fa fa-smile-o"></span>
						<p className="number-counter">277</p>
						<h4>Projects </h4> </div>
				</div>
			</div>
		</div>
	</section>
  </div>
</div>

{/* /////////// */}


{/* Question page start */}

<div className="questionArea-about">
  <div className="container questionArea-container">
  <div className="startupWrap">
  <div className="container question-container">
        <div className="row row-questionArea">
          <div className="col-6 faqContent"> 
          <span className="faq-about">faq</span>
          <h2 className="faqContent-h2">Bazi Savollarga Javob</h2>
                 
          </div>
          <div className="col-6 about2-img">
            <div className="container">
              <div className="about2-img">
                
              </div>
            </div>
          </div>
        </div>
        </div>
  </div>
  </div>
</div>


{/* //////// */}


<div className="container callToAction-about">

<div className="row clerefix mt-5">
<div className="row row-inputs-about">
    <div className=" callToAction-col quik">
    <span className="callToAction-span">call to action</span>
                <h2 className="callToAction-h2">Representing All Of The Major Telecom Companies</h2>
    </div>
    <div className="col-sm-3 callToAction-col3">
    <button className="callToAction-btn textUppercase " tabindex="0" type="button">Learn more
    </button>
    </div>
</div>
</div>

</div>

<br /><br />

        {/* Contact start */}

    <h1 className="contact-h1">Sizga qanday yordam bera olamiz?</h1>
        <div className="head-title"> 
        <div className="hl-1"></div>
        <div className="hl-2"></div>
        <div className="hl-3"></div>
        </div>
        <br />


  <div className="container container-inputs">

    <div className="row clerefix mt-5">
    <div className="form-col col-lg-12 col-md-12 col-sm-12">
      <div className="contact-form-bg">
      <div className="contact-form">
    <div className="row row-inputs-contact">
        <div className="col-sm-6">
            <label className="form-group has-float-label has-error">
                <input className="form-control error" type="text" id="f-name" name="fname" placeholder="Enter First Name" data-validation="required" />
                <span className="form-field-neme">First Name</span>
            </label>
        </div>
        <div className="col-sm-6">
            <label className="form-group has-float-label">
                <input className="form-control" type="text" id="l-name" name="lname" placeholder="Enter Last Name"/>
                <span className="form-field-neme">Last Name</span>
            </label>
        </div>
        <div className="col-sm-6">
            <label className="form-group has-float-label">
                <input className="form-control" type="email" id="email" name="email" placeholder="Enter Email" data-validation="required"/>
                <span className="form-field-neme">Email</span>
            </label>
        </div>
        <div className="col-sm-6">
            <label className="form-group has-float-label">
                <input className="form-control" type="text" id="phone" name="phone" placeholder="Enter Phone" data-validation="required"/>
                <span className="form-field-neme">Phone</span>
            </label>
        </div>
        <div className="col-12">
            <label className="form-group has-float-label">
                <textarea id="message" name="message" className="form-control" rows="3" placeholder="Message"></textarea>
                <span className="form-field-neme">Message</span>
            </label>
        </div>
        <div className="text-center col-12">
            <div className="btn-contact-about">
			        <span className="btn-style-new"><button type="submit" className="btn btn-link"><span className="btn-style"></span>Submit</button></span>
            </div>
        </div>
    </div>
    </div>
      </div>
    </div>
    </div>

  </div>


        
        </>
    )
}

export default About;