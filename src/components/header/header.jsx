import './header.css'
import Logo from '../../pictures/logo.png'

import PeopleImg from '../../pictures/picture-people.png'

export default function Header() {
    return(<>
       
    <header>
        <div>
            <img src={Logo} className='logo' alt="" />
        </div>

        <div className='list'>
         <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Solutions</a></li>
          <li><a href="">Cases</a></li>
          <li><a href="">About us</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contacts</a></li>
                   
         </ul>
        </div>
        <button className="Touch1">Get In Touch</button> 
    </header>
    

<div>
    <div className="textThefirm">
      <img src={PeopleImg} className='PeopleImg' alt="" />
      <h1>Get Bussiness Solutions with TheFirm.</h1>
     <p>Lorem Ipsum is simply dummy text of the printing
and typesetting industry. Lorem Ipsum has been
the industry's standard dummy.
     </p>
      <button className="Touch2">Get In Touch</button>
    </div>
</div>
    
    
  
        </>
        
    )
    
}