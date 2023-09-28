import './Header.css'
import { Link } from 'react-router-dom'
import teste from "../../assets/barbie-logo.png"

export default function Header(){
  return(
  
     <header>
       
  <nav className="navbar">
  <Link to="/"><img src={teste} alt="logo" /></Link>
  
  
   <ul className="botoes">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/noticia">Noticia</Link></li>
      <li><Link to="/sobre">Sobre</Link></li>
      <li><Link to="/contato">Contato</Link></li>
            
  </ul>
      </nav>
    </header>
    
  )
};
