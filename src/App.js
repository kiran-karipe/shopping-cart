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
  const classes = useStyles();
  const products = ProductsMock();
  const [cartProducts, setCartProducts] = useState([]);
  const [carTotal, setCartTotal] = useState(0);

  const handleAddToCard = (product) => {
    const products = [...cartProducts];
    let found = false;
    let total = carTotal;
    for (let i = 0; i < products.length; i++) {
      if (products[i].productid === product.productid) {
        found = true;
        if (products[i].qty <= products[i].maxQty) {
          products[i].qty++;
          total += product.price;
        }
        break;
      }
    }
    if (!found) {
      total += product.price;
      product['qty'] = 1;
      products.push(product);
    }
    setCartProducts(products);
    setCartTotal(total);
  }

  function handleDeleteCartItem(product) {
    const products = [...cartProducts];
    for (let i = 0; i < products.length; i++) {
      if (products[i].productid === product.productid) {
        products.splice(i, 1);
        break;
      }
    }
    setCartProducts(products);
  }

  function handleUpdateQuantity(e, product) {
    const products = [...cartProducts];
    for (let i = 0; i < products.length; i++) {
      if (products[i].productid === product.productid) {
        product['qty'] = e.target.value;
        break;
      }
    }
    setCartProducts(products);
  }

  return (
    <div className="app">
      <h3>Shopping Cart</h3>
      <div className="appSection">
        <div className="productContainer product-container">
            <GridList cellHeight={180} className={classes.gridList}> 
                {products.map((product,id) => {
                  return <Product key={id} item={product} addToCard={() => handleAddToCard.bind(null, product)}></Product>
                })}
            </GridList>
        </div>
        <div className="cartContainer">
            {cartProducts.map((product, id) => {
              return <Cart key={id} cartProduct={product} 
                deleteCartItem={handleDeleteCartItem.bind(null, product)}
                updateQuantity={(e) => handleUpdateQuantity(e, product)}>
              </Cart>
            })}
            <div className="cartTotal">
              <span>Total</span>
              &nbsp;
              &nbsp;
              {(carTotal).toFixed(2)}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;