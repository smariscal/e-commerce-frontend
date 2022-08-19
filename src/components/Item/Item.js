import { Card, Button, Stack } from 'react-bootstrap';
import { addProduct } from '../../util/carts';
import { deleteProduct } from '../../util/products';
import { Link } from 'react-router-dom';

export function Item({ prod, updateList, setUpdateList }) {
  const handleClick = async (prod_id) => {
    await deleteProduct(prod);
    setUpdateList(!updateList);
  };

  return (
    <Card className='col-9 col-sm-3 m-3'>
      <Card.Img variant="top" src={prod.thumbnail} />
      <Card.Body className='d-flex flex-column justify-content-center'>
        <Card.Title className='text-center'>{prod.name}</Card.Title>
        <Card.Subtitle className='mb-2 text-center'>$ {prod.price}</Card.Subtitle>
        <Card.Text className='text-center'>Stock: {prod.stock}</Card.Text>
        <Stack direction="vertical" gap={3}>
          <Button variant="dark" onClick={async() => await addProduct(prod, 1)}>Agregar al carrito</Button>
          <Stack className='d-flex flex-row justify-content-between' direction="horizontal">
            <Button as={Link} to={`/Product/${prod.id}`} variant="primary">Modificar</Button>
            <Button variant="danger" onClick={() => handleClick(prod)}>Eliminar</Button>
          </Stack>
        </Stack>
      </Card.Body>
    </Card>
  );
}