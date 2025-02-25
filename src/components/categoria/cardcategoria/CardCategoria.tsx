import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria";
import { Pencil, Trash } from "@phosphor-icons/react";

interface CardCategoriaProps {
  categoria: Categoria;
}
function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-indigo-900 text-white font-bold text-2xl">
        Categoria
      </header>

      {/* 
            Passando o que desejamos recebar da props -
            */}
      <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.nome}</p>

      <div className="flex">
        {/* 
                    Envolvemos os Botões Editar e Deletar com o Componente Link e adicionamos 
                    as rotas para os respectivos componentes. 
                   
                */}
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-slate-100 bg-indigo-900 hover:bg-slate-500 
                        flex items-center justify-center py-2"
        >
          <button>
            <Pencil size={20} color="#ffffff" />
          </button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="text-slate-100 bg-indigo-900 hover:bg-red-700 w-full 
                    flex items-center justify-center"
        >
          <button>
            <Trash size={20} color="#ffffff" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria