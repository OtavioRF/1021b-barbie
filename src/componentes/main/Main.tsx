import { useState } from "react"
import Filme from "../filme/filme.tsx"
import './Main.css'
type FilmesType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}
export default function Main(){
       
const [texto,setTexto] = useState("Cavalo do casco de guerra")
const filmes:FilmesType[] = [
    {
    id:1,
    titulo:"Barbie",
    sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
    imagem:"/barbie.png"
    },
    
    {
    id:2,
    titulo:"Oppenheimer",
    sinopse:"O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando aodesenvolvimento da bomba atômica.",
    imagem:"/opp.jpg"
    }
]


function muda_txt(e:React.ChangeEvent<HTMLInputElement>){
    
    setTexto(e.target.value)

}    

return(
<>
<div className="pesquisa">
            <p>Buscar Filme</p>
            <input className='barrapesquisa' type='text'onChange={muda_txt}></input>
            <div>
            <p className='txt_digitado'>pesquisa: {texto}</p>
             </div>
 </div>

<main className="content_main">
             
            <Filme titulo="Barbie" sinopse="Depois de ser expulsa da Barbieland por ser 
            uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano 
            em busca da verdadeira felicidade." imagem="/barbie.png"/>
        
            <Filme titulo="Oppenheimer" sinopse="O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao
             desenvolvimento da bomba atômica." imagem="/opp.jpg"/>

            <Filme titulo="Barbie sereia" sinopse="Uma sereia estilista tem o poder de mudar a cor de pérolas preciosas." imagem="/bsereia.jpg"/>
        </main>
        </>
    )
}