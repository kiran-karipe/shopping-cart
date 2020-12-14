import { makeStyles } from '@material-ui/core/styles';
import './Product.css';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import image from '../images/breakfast-1.jpg';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
      icon: {
        color: 'white',
      },
      gridListTile: {
          width: '20%',
          margin: '3% 0 5% 10%',
      },
  }));
  
function Product(props){
    const classes = useStyles();
    return (
        <GridListTile className={classes.gridListTile}>
            <img className="logo" src={image} alt='breakfast' />
            <GridListTileBar className={classes.bar}
                title={props.item.desc}
                subtitle={<span>Price: {props.item.price}</span>}
                actionIcon={
                <IconButton className={classes.icon} onClick={props.addToCard}>
                    <AddShoppingCartIcon />
                </IconButton>
                }
            />
        </GridListTile>
    );
}

export default Product; 