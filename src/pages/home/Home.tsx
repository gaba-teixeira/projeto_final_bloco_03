function Home() {
  return (
    <>
      <div className="flex justify-center bg-cyan-300">
        <div className="container grid grid-cols-2 text-black">
          <div className="flex flex-col items-center justify-center gap-4 py-4">
            <h2 className="text-5xl font-bold">Seja bem vinde!</h2>
            <p className="text-xl">
              Aqui você encontra Medicamentos e Cosméticos!
            </p>

            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4">
                <div
                  className="
							rounded
							border-indigo-800
							border-solid
							border-2
							py-2
							px-4
							text-white
                            bg-indigo-800
                            cursor-pointer
						"
                >
                  Cadastrar Produto
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/3ov0fr7b9/usuarios/image.png?updatedAt=1740487774658"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
