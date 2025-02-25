import { User, ShoppingCart, ListMagnifyingGlass, MagnifyingGlass } from "@phosphor-icons/react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div className="flex justify-center  w-full p-2 text-white bg-indigo-900">
      <div className="container flex justify-between text-lg">
        <Link to="/">
          <img
            src="https://ik.imagekit.io/3ov0fr7b9/usuarios/image(2).png?updatedAt=1740487774286"
            alt="logo da farmacia"
            className="w-[208px] h-[79.35px]  top-[25px] left-[25px]"
          />
        </Link>
        <div>
          <form>
            <input
              type="text"
              name="pesquisa"
              id="pesquisa"
              className="bg-white w-[380px] rounded-lg mt-6 text-black"
            ></input>
            <button className="m-2 bg-teal-500 p-2 rounded-lg cursor-pointer   ">
              <MagnifyingGlass size={15} color="#ffffff" />
            </button>
          </form>
        </div>
        <div className="flex gap-4 mt-[20px] text-lg">
          Produtos
          <Link to="/categorias" className="hover:underline">
            Categorias
          </Link>
          <Link to="/cadastrarcategoria" className="hover:underline">
            Cadastrar categorias
          </Link>
          <Link to="">
            <User size={30} color="#fafafa" />
          </Link>
          <Link to="">
            <ShoppingCart size={30} color="#fafafa" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar