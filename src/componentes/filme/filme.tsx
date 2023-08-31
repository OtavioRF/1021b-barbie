import './filme.css'
type  FilmeProps={
    titulo:string,
    sinopse:string,
    imagem:string

}
export default function Filme(props:FilmeProps){
    return(
        <div className="filme_container">
            <img src={props.imagem} alt=""/>
            <div className="texto_foto">
                <h1>{props.titulo}</h1>
                <p className="sinopse">{props.sinopse}</p>
            </div>
         </div>
    )
}