import Filme from "../filme/filme.tsx"
import './Main.css'

export default function Main(){
    return(
        <main className="content_main">
            <Filme titulo="Barbie" sinopse="Depois de ser expulsa da Barbieland por ser 
            uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano 
            em busca da verdadeira felicidade." imagem="/barbie.png"/>
            <Filme titulo="Oppenheimer" sinopse="Depois de ser expulsa da Barbieland por 
            ser uma boneca de aparência menos do que 
            perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade." imagem="/opp.jpg"/>
        </main>
    )
}