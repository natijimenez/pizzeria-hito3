/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const CardPizza = ({ pizzas }) => {
  return (
    <div className='container-items'>
      {pizzas.map(pizza => (
        <Card style={{ width: '18rem' }} className='item' key={pizza.id}>
          <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
          <ListGroup className="list-group-flush pizzaCard">
            <ListGroup.Item className='card-name'>Pizza {pizza.name}</ListGroup.Item>
            <ListGroup.Item className="card-title-ingredients">
              Ingredientes:<br />
              <ul className='card-container-ingredients'>
                <span>🍕</span>
                <li className="card-ingredients">
                  {pizza.ingredients.map((ingredient, index) => (
                    <span key={index} className="card-ingredients">
                      {ingredient}
                      {index < pizza.ingredients.length - 1 && ', '}
                    </span>
                  ))}
                </li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item className="card-price">Precio: <span className="card-price">${pizza.price}</span></ListGroup.Item>
          </ListGroup>
          <Card.Body className='card-btns-container'>
            <Card.Link href="#" className="card-link card-btn-more">Ver más 👀</Card.Link>
            <Card.Link href="#" className="card-link card-btn-add">Añadir 🛒</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardPizza;