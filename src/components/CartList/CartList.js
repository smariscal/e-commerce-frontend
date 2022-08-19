import { useEffect, useState } from 'react';
import { getCartProducts } from '../../util/carts';
import { Accordion } from 'react-bootstrap';
import { CartItem } from '../CartItem/CartItem';

export function CartList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(1);
  const [updateCart, setUpdateCart] = useState(false);
  
  useEffect(() => {
    getCartProducts(cart)
      .then((response) => {
        setProducts(response);
      })
      .catch((err) => {
        /* console.log("Error: ", err) */
      });
  }, [cart, updateCart]);

  return (
    <>
      <h1 className='text-center'>Carrito</h1>
      <Accordion className='container'>
          <Accordion.Item>
            <Accordion.Header>Carrito {cart}</Accordion.Header>
            <Accordion.Body className='row'>
              {
                Object.keys(products).length > 0 
                ?
                  products.map((prod) => {
                    return (
                      <CartItem 
                        key={prod.id}
                        id_cart={cart}
                        prod={prod}
                        setUpdateCart={setUpdateCart}
                        updateCart = {updateCart}
                      />
                    );
                  })
                :
                  <h4 style={{ textAlign: 'center' }}>Carrito vacio.</h4>
              }
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
