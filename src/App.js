import './App.css';
import Product from './components/Product';
import Cart from './components/Cart';
import ProductsMock from './mock/ProductsMock';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  productContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: 450,
  }
}));

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const classes = useStyles();
  const products = ProductsMock();

  function handleAddToCard(product) {
    const products = [...cartProducts];
    products.push(product);
    setCartProducts(products);
  }

  return (
    <div>
      <h3>Shopping Cart</h3>
      <div className="App">
        <div className="productContainer product-container">
            <GridList cellHeight={180} className={classes.gridList}> 
                {products.map((product,id) => {
                  return <Product key={id} item={product} addToCard={handleAddToCard.bind(null, product)}></Product>
                })}
            </GridList>
        </div>
        <div className="cart-container">
              <Cart></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;