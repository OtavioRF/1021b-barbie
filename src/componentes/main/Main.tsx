import React, { useState } from "react";
import Filme from "../filme/filme.tsx";
import './Main.css';

type FilmesType = {
  id: number;
  titulo: string;
  sinopse: string;
  imagem: string;
};

export default function Main() {
  const [texto, setTexto] = useState("");
  const filmes: FilmesType[] = [
    {
      id: 1,
      titulo: "Barbie",
      sinopse:
        "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
      imagem: "/barbie.png",
    },
    {
      id: 2,
      titulo: "Oppenheimer",
      sinopse:
        "O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica.",
      imagem: "/opp.jpg",
    },
    {
      id: 3,
      titulo: "Bullet-Train",
      sinopse:
        "Em um trem-bala indo rapidamente de Tóquio a Morioka, cinco assassinos profissionais descobrem que possuem o mesmo objetivo.",
      imagem: "/bulet train.jpg",
    },
    {
      id: 4,
      titulo: "Barbie sereia",
      sinopse: "Uma sereia estilista tem o poder de mudar a cor de pérolas preciosas.",
      imagem: "/bsereia.jpg",
    },
  ];

  function muda_txt(e: React.ChangeEvent<HTMLInputElement>) {
    setTexto(e.target.value);
  }

  return (
    <>
      <div className="pesquisa">
        <p>Buscar Filme</p>
        <input className="barrapesquisa" type="text" onChange={muda_txt}></input>
        <div>
          <p className="txt_digitado">pesquisa: {texto}</p>
        </div>
      </div>

      <main className="content_main">
        {filmes
          .filter((filme) =>
            filme.titulo.toLowerCase().includes(texto.toLowerCase())
          )
          .map((filme) => (
            <Filme
              key={filme.id}
              sinopse={filme.sinopse}
              titulo={filme.titulo}
              imagem={filme.imagem}
            />
          ))}
      </main>
    </>
  );
}