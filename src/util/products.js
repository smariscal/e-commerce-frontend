import SERVER from '../util/server';

export const getProducts = async () => {
  let data;
  try {
    data = await fetch(`${SERVER.api_base_url}${SERVER.api_port}/api/products/`);
    return data.json();
  } catch (error) {
      
  }
}

export const getProduct = async (id) => {
  let data;
  try {
    data = await fetch(`${SERVER.api_base_url}${SERVER.api_port}/api/products/${id}`);
    return data.json();
  } catch (error) {
      
  }
}

export const addProduct = async (prod) => {
  let data;
  try {
    data = await fetch(`${SERVER.api_base_url}${SERVER.api_port}/api/products/`, {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(prod)
    });
  return data.json();      
  } catch (error) {
      
  }
}

export const updateProduct = async (prod) => {
  let data;
  try {
    data = await fetch(`${SERVER.api_base_url}${SERVER.api_port}/api/products/${prod.id}`, {
      method: "PUT",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(prod)
    });    
    return data.json();
  } catch (error) {
      
  }
}

export const deleteProduct = async (prod) => {
  try {
    await fetch(`${SERVER.api_base_url}${SERVER.api_port}/api/products/${prod.id}`, {
      method: "DELETE"
  });
  } catch (error) {
      
  }
}