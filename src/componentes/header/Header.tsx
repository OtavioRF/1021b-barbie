import './Header.css'
import teste from "../../assets/barbie-logo.png"
export default function Header(){
  return(
     <header>
       
  <nav className="navbar">
  <img src={teste} alt="logo" />
   <ul className="botoes">
     
      <li><a href="#">Home</a></li>
      <li><a href="#">Noticia</a></li>
      <li><a href="#">Sobre</a></li>
      <li><a href="#">Contato</a></li>
            
  </ul>
      </nav>
    </header>
  )
};
