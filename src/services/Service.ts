import axios from "axios";

//Conectar a api ao axios criando uma const
const api = axios.create({
  baseURL: "https://farmacia-nest-t0o5.onrender.com/",
});

//Metodo de buscar - get - recebera a url e setDados

export const buscar = async (url: string, setDados: Function) => {
  const resposta = await api.get(url);
  setDados(resposta.data);
};

//Metodo de cadstrar - post - recebera a url, dados(body -informação a ser persestida no BD) - setDados função para mudar o estado dos dados

export const cadastrar = async (
  url: string,
  dados: Object,
  setDados: Function
) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

//Metodo de atualizar - put - recebera a url(endpoint da api), dados(body -informação a ser persestida no BD) - setDados função para mudar o estado dos dados

export const atualizar = async (
  url: string,
  dados: Object,
  setDados: Function
) => {
  const resposta = await api.put(url, dados);
  setDados(resposta.data);
};

//Metodo de deletar - delte - recebera a url(endpoint da api)

export const deletar = async (url: string) => {
  await api.delete(url);
};
