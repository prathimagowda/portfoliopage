
import React from 'react';
import './App.css';
import Contact from './Contact';
import Education from './Education';
import Exprience from './Exprience';
import Home from './Home';
import Menu from './Menu';
import SocialMediaIconLayout from './SocialMediaIconLayout';


function App() {
  return (
     <React.Fragment>
         <Menu/>
         <div className="main_layout">
              <div style={{width:"100%", height:"100%"}}>
                <section>
                  <SocialMediaIconLayout/>
                    <article> 
                        <Home/>
                        <Exprience/>
                        <Education/>
                        <Contact/>
                      <footer>Designed & Built by Prathima Gowda</footer>
                    </article>
                </section> 
              </div>
          </div>
     </React.Fragment>
  );



 
}

export default App;
