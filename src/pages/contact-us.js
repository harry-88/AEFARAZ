import React, { useState } from "react";

import emailjs from "emailjs-com";
export default function contactUs() {

  const [message, setMessage] = useState({
    name:"",
    email:"",
    style:'',
    pkg:'',
    message:""
  })

  const update = (e)=>{
    setMessage({...message,[e.target.name]:e.target.value})
  }
  const submit = (e)=>{
    e.preventDefault()
    try {
      
    emailjs
    .send(
      "service_96ak7e2",
      "template_5a07vqb",
      {
        to_name: message.name,  
        message: message.message,
        to_email:message.email,
        style:message.style,
        pkg:message.pkg,
      },'p3xpHHQapYmeh5Dzo'
    )
    .then((response) => {
      alert('Email sent successfully');
      setMessage({
        name:"",
        email:"",
        style:'',
        pkg:'',
        message:""
      })
    })
    .catch((error) => {
      console.log("Error sending email:", error);
      // alert('Failed to sen/d email');
    });

  } catch (e) {
      console.log("error is ",e)
  }
  }

  const cancelClicked = (e)=>{
    e.preventDefault()
    setMessage({
      name:"",
      email:"",
      style:'',
      pkg:'',
      message:""
    })
  }
  return (
    <div className="mainContact">
      <div className="container pt-5">
        <div className="row pt-5">
          <div className="container ">
            <form method="get" className="row">
              <div class="mb-3 col-lg-6">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name='name'
                  value={message.name}
                  onChange={update}
                />
              </div>
              <div class="mb-3 col-lg-6">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  name='email'
                  value={message.email}
                  onChange={update}
                />
              </div>
              <div class="mb-3 col-lg-6">
                <label for="exampleInputEmail1" class="form-label">
                Package
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  name='pkg'
                  value={message.pkg}
                  onChange={update}
                />
              </div>
              <div class="mb-3 col-lg-6">
                <label for="exampleInputEmail1" class="form-label">
                Interior Style
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  name='style'
                  value={message.style}
                  onChange={update}
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">
                Tell us about your home *
                </label>
                <textarea
                  rows={5}
                  type="text"
                  class="form-control"
                  id="description"
                  name='message'
                  value={message.message}
                  onChange={update}
                  placeholder="Your room details, how you like it to be..."
                />
              </div>
              <div className="d-flex justify-content-center my-4">
              <button onClick={cancelClicked} className="canclebtn mx-3">Cancel</button>
                <button className="submitBtn" onClick={submit}>Submit</button>
              </div>
            </form>
          </div>
          {/* className="submitBtn"  */}
        </div>
      </div>
      {/* <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 verticle-center">

            <div className="">
                <p className="contact-name-heading">M Fraz - Architect & Interior Designer</p>
                <p>Bringing 5+ years of expertise to residential, corporate, restaurant, and apartment projects. Proficient in AutoCAD, SketchUp, V-Ray, and more. Let's turn your vision into reality. Explore portfolio.</p>
                <p>
                    
                <i class="fa-solid fa-envelope"></i> farazjamil12@gmail.com
                </p>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="container ">
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">
                  Description
                </label>
                <textarea
                rows={4}
                  type="text"
                  class="form-control"
                  id="description"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
}
