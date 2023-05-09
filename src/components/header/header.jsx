import './header.css'
import Logo from '../../pictures/logo.png'
 

export default function Header() {
    return(<>
        <header>
           
           <img src={Logo} className="logo" alt=""/>
        </header>
        

        <div>
            <img src={Logo} className="logo" alt=""/>
        </div>

        <div>
            <img src={Logo} className="logo" alt=""/>
        </div>
        <div>
            <img src={Logo} className="logo" alt=""/>
        </div>
        <div>
            <img src={Logo} className="logo" alt=""/>
        </div>
        </>
        
    )
    
}