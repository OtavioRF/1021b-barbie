import './Footer.css'
import teste from "../../assets/barbie-logo2.png"
import rede from "../../assets/facebook.png"
import rede2 from "../../assets/instagram.png"
import rede3 from "../../assets/youtube.png"
import score2 from "../../assets/Score2.png"
import score1 from "../../assets/Score1.png"

export default function Footer() {
  return (
    <footer>
      <div className='container'>

        <ul className='logo'>

          <h3><img src={teste} alt="logo" /></h3>

          <p>  Depois de ser expulsa da Barbieland por ser uma boneca
            de aparência menos do que perfeita, Barbie parte para
            o mundo humano em busca da verdadeira felicidade.</p>

          <div className='Redes'>

            <a href="#"> <img src={rede} alt="logo" /></a>
            <a href="#"> <img src={rede2} alt="logo" /></a>
            <a href="#"> <img src={rede3} alt="logo" /></a>

          </div>

          <div className='score'>
            <a href="#"><img src={score1} /> </a>
            <a href="#"><img src={score2} /> </a>
          </div>

        </ul>
        <ul>
          <h3>Links</h3>
          <li>
            <a href="#">Tecnologias</a>
          </li>
          <li>
            <a href="#">Preços</a>
          </li>
          <li>
            <a href="#">Termos de uso</a>
          </li>
          <li>
            <a href="#">Loja</a>
          </li>
        </ul>

        <ul>
          <h3>Suporte</h3>
          <li>
            <a href="#">Fale conosco</a>
          </li>
          <li>
            <a href="#">Como funciona?</a>
          </li>
          <li>
            <a href="#">Nossa empresa</a>
          </li>
            <li>
            <a href="#">Metodos de pagamento</a>
          </li>
        </ul>

        <ul>
          <li>
            <h3>Email</h3>
            <a href="#">empresa@gmail.com</a>
          </li>
        </ul>
        <ul>

          <h3>Comunidade</h3>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Youtube</a>
          </li>
        </ul>
        <ul>
          <h3>Companhia</h3>
          <li>
            <a href="#">Nossa carreira</a>
          </li>
          <li>
            <a href="#">Parceiros</a>
          </li>
          <li>
            <a href="#">Nossos programas</a>
          </li>

          <li>
            <a href="#">Serviços feitos</a>
          </li>

        </ul>


      </div>

      <div className='copyright'>
        &#169; 2023 all rights reserved
      </div>

    </footer>

  )
}
