import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      alert("Erro");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/categorias");
  }

  async function deletarCategoria() {
    setIsLoading(true);
    try {
      await deletar(`categorias/${id}`);
      alert("Categoria deletado com sucesso");
    } catch (error: any) {
      alert("Erro ao excluir categoria!");
    }
    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container w-1/3 mx-auto mt-8">
      <div className="">
        <h1 className="text-4xl text-center font-poppins my-4">Deletar Categoria</h1>
        <p className="text-center font-semibold mb-4">
          Você tem certeza de que deseja apagar a categoria a seguir?
        </p>
      </div>
      <div className="border font-poppins flex flex-col rounded-2xl overflow-hidden justify-between w-md mt-8 m-2">
        <header className="py-2 px-6 bg-indigo-900 text-white font-bold text-xl">
          Categoria
        </header>
        <p className="p-6 text-2xl h-full">{categoria.nome}</p>
        <div className="flex">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full 
                    flex items-center justify-center font-code cursor-pointer"
            onClick={retornar}
          >
            Não
          </button>

          <button
            className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-900
                        flex items-center justify-center py-2 cursor-pointer font-code"
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  ); 
}

export default DeletarCategoria;
