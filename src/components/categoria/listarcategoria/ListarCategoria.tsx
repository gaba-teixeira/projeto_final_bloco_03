import CardCategoria from "../cardcategoria/CardCategoria";
import { DNA } from "react-loader-spinner";
import { buscar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import { useEffect, useState } from "react";

function ListarCategoria() {
  //Declarando o estado de categorias e definindo ele como vazio
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  //Função de buscar categoria que vai chamar o metodo buscar da Service - try/catch para buscar algum erro
  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      alert("Nao foi possivel achar categorias");
    }
  }

  //useEffect - função que vai chamar a função buscarCategoria toda vez que o estado que definimos como vazio mudar - toda vez que clicamos em exibir as categorias
  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <>
      {/* Função para aparecer animação de loading */}
      {categorias.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-2">
          <div
            className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8"
          >
            {/* 
                  categorias.sort - organiza os cards por ordem usando o id, do menor para o maior. categorias.map - renderiza cada card na tela percorrendo o array Categoria - a key é a chave unica de cada card - necessario na função
                        */}
            {categorias
              .sort((a, b) => a.id - b.id)
              .map((categoria: Categoria) => (
                <CardCategoria key={categoria.id} categoria={categoria} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListarCategoria;
