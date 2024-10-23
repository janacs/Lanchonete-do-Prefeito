import { useState } from "react";

export default function Main() {
  const [info, setInfo] = useState([
    {
      nome: "Batata",
      preco: "R$:20,00",
      imagem:
        "https://cdn.nsite.com.br/uploads/4104/product/photo_6388cdcdbcfd8.webp",
    },
    {
      nome: "Coxinha",
      preco: "R$:45,00",
      imagem:
        "https://vejasp.abril.com.br/wp-content/uploads/2016/12/attimo_mauro-holanda.jpg?quality=70&strip=all",
    },
    {
      nome: "Coca",
      preco: "R$:18,99",
      imagem:
        "https://andinacocacola.vtexassets.com/arquivos/ids/158221/CCSA-Oreo--110666_COCA-.jpg?v=638593248316370000",
    },
  ]);
  return (
    <main>
      <h1>Lanchonete do Prefeito</h1>
      <section>
        {info.map((item) => (
          <div>
            <img src={item.imagem} alt={item.nome} />
            <h3>{item.nome}</h3>
            <p>{item.preco}</p>
            <button>Compre aqui</button>
          </div>
        ))}
      </section>
    </main>
  );
}
