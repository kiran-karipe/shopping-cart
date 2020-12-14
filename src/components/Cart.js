
import './Cart.css';
import image from '../images/breakfast-1.jpg';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Cart = (props) => {
    const optionElements = [];
    for (let i = 1; i <= props.cartProduct.maxQty; i++) {
        optionElements.push(<option value={i}>{i}</option>);
    }
    return(
        <div className="cartItem">
            <div className="cartItems">
                <img className="cartLogo paddingRight" src={image} alt='breakfast' />
                <div>
                    <FormControl className="paddingRight">
                        <label className="labelPosition">Qty</label>
                        <Select defaultValue="1" value={props.cartProduct.qty} onChange={(e) => props.updateQuantity(e)}>
                            {optionElements}
                        </Select>
                    </FormControl>
                    <span className="paddingRight">
                        <label className="labelPosition">Price</label>
                        <span className="pricePadding">{(props.cartProduct.price * props.cartProduct.qty).toFixed(2)}</span>
                    </span>
                    <IconButton aria-label="delete" className="paddingRight" onClick={props.deleteCartItem}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </div>
            </div>
            <div>{props.cartProduct.desc}</div>
        </div>
    );
};

export default Cart;