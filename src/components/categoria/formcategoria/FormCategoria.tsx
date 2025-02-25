import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";


function FormCategoria() {

     const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)
  

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
        
             alert('Erro')
            }
        }

        useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

     function retornar() {
        navigate("/categorias")
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria)
                alert('A categoria foi atualizado com sucesso!')
            } catch (error: any) { 
                    alert('Erro ao atualizar a categoria.')
                }

            
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, 
                )
                alert('A Categoria foi cadastrado com sucesso!')
            } catch (error: any) {
                    alert('Erro ao cadastrar o tema.')
                }

            }
              setIsLoading(false)
        retornar()
        }

      
    
  return (
    <div className="flex flex-col gap-4 justify-center items-center m-8">
      <h1 className=" font-poppins text-4xl m-4 ">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>
      <form className="flex flex-col w-1/2 gap-2" onSubmit={gerarNovaCategoria}>
        <label>Categoria</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Categoria"
          value={categoria.nome}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          className="border-2 rounded-1xl border-purple-400 focus:border-purple-800 focus:outline  w-160 p-2"
        ></input>
        <button
          className="rounded-2xl font-code text-slate-100 bg-purple-500
                               hover:bg-purple-900 w-2/5 py-2 mx-auto flex justify-center mt-2 cursor-pointer"
          type="submit"
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
            <span> {id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}


export default FormCategoria