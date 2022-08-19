import SERVER from '../util/server';

export const getCartProducts = async (id) => {
  let data;
  try {
    data = await fetch(`${SERVER.api_base_url}${SERVER.api_port}/api/cart/${id}/productos`);
    return data.json();
  } catch (error) {
      
  }
}

export const addProduct = async (prod, id) => {
  try {
    await fetch(`${SERVER.api_base_url}${SERVER.api_port}/api/cart/${id}/productos`, {
      method: "POST",
      headers: {
          'Content-type': "application/json"
      },
      body: JSON.stringify(prod)
    });
  } catch (error) {
    console.log(error)
  }
};

export const deleteProductCart = async (id, id_prod) => {
  try{
    await fetch(`${SERVER.api_base_url}${SERVER.api_port}/api/cart/${id}/productos/${id_prod}`, { method: "DELETE" });
  } catch (error) {
    console.log(error)
  }
}