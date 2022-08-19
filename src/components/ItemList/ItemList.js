import { useEffect, useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import { getProducts } from '../../util/products';
import { Item } from '../Item/Item';

export function ItemList() {
  const [products, setProducts] = useState([]);
  const [updateList, setUpdateList] = useState(false);
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(prevProducts => response);
      })
      .catch((err) => {
        /* console.log("Error: ", err) */
      });
  }, [updateList]);

  return (
    <Container>
      <Row className='d-flex justify-content-center'>
        <h1 className='text-center'>Productos</h1>
        {Object.keys(products).length > 0 ?
          products.map((prod) => {
            return (
              <Item
                key={prod.id}
                prod={prod}
                updateList = {updateList}
                setUpdateList = {setUpdateList}
                />
            );
          })
          :
          <h4 style={{ textAlign: 'center' }}>No existen productos.</h4>}
      </Row>
    </Container>
  );
}
