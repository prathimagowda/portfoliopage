import { MdLocalPhone } from 'react-icons/md';

const Contact =()=>
{
    return <div className="contact" id="Contact">
           <h1 className="contact_header">Get In Touch</h1>
           <div style={{marginTop:"2%"}}>
                <a className="contact_tel"
                    href="tel:+918197380564">
                    <MdLocalPhone className='tel'/>
                    <span>*******564</span>
                </a>
           </div>
           <div style={{marginTop:"2%"}}>
           <a className="contact_a" 
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=prathima.gowda64@gmail.com" 
                target="_blank" 
                rel="noreferrer">Prathima.gowda64@gmail.com</a>
           </div>
 

    </div>

   
}
export default Contact;