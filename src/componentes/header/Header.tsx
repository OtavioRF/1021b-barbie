import './Header.css'
import teste from "../../assets/barbie-logo.png"
const texto="piriquito alma despenada sombria"
function muda_txt(){
    let texto = "piriquito alma despenada sombria";

}

export default function Header(){
  return(
    <>
     <header>
       
  <nav className="navbar">
  <img src={teste} alt="logo" />
  
   <ul className="botoes">
   <li><input className='barrapesquisa' type='text'></input></li>
      <li><a href="#">Home</a></li>
      <li><a href="#">Noticia</a></li>
      <li><a href="#">Sobre</a></li>
      <li><a href="#">Contato</a></li>
            
  </ul>
      </nav>
    </header>
    <div>
   
   <p className='txt_digitado'>pesquisa: {texto}</p>
    </div>
    </>
  )
};
