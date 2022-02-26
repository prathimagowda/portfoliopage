
import React, { useEffect } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import './App.css';

function App() {

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
  })

  function updateWidth()
  {
      document.getElementById("responsiveNav").style.width = "auto";
      var test = document.getElementById("responsiveNav");
      if(test.className === "responsive_nav")
      {
          test.className = "topnav";
      } 
  }

  return (
     <React.Fragment>
        {buildHeader()}
     </React.Fragment>
  );

  function buildHeader()
  {
    return <header>
              <nav id="responsiveNav" className="topnav">
                  <ul>
                      <li id="about"><a href="#About">About</a></li>
                      <li id="exprience"><a href="#Exprience">Exprience</a></li>
                      <li id="education"><a href="#Education">Education</a></li>
                      <li id="contact"><a href="#Contact">Contact</a></li>
                      <li id="social_icon">
                          <a href="https://github.com/prathimagowda" 
                              target="_blank" rel="noreferrer">
                              github
                          </a>
                      </li>
                      <li id="social_icon">
                          <a href="https://www.linkedin.com/in/prathima-gowda-651320145" 
                              target="_blank" rel="noreferrer">
                              LinkedIn
                          </a>
                      </li>
                      <li id="social_icon">
                          <a href="https://www.facebook.com/prathima.prathima.1253/" 
                              target="_blank" rel="noreferrer">
                              FaceBook
                          </a>
                      </li>
                      <li id="social_icon">
                          <a href="https://www.instagram.com/prathima__gowda/" 
                              target="_blank" rel="noreferrer">
                              instagram
                          </a>
                      </li>
                      {/* <button onClick={()=>getResume()}>Resume</button> */}
                  </ul> 
                    {/* <ul>
                        <li>
                        <a href="#exprience1">exprience</a>
                            </li>
                  
                    
                    </ul> */}
              </nav>
              <span className="hamburger_icon" onClick={()=>buildNavElement()}><GiHamburgerMenu/></span>
          </header>
  }

  function buildNavElement()
  {
      var test = document.getElementById("responsiveNav");
      if(test.className === "topnav")
      {
          test.className = "responsive_nav";
          document.getElementById("responsiveNav").style.width = "150px";
      } 
      else if(test.className === "responsive_nav")
      {
          document.getElementById("responsiveNav").style.width = "auto";
          test.className = "topnav";
      }     
  }
}

export default App;
