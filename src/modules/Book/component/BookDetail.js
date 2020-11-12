import React,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,Button

} from '@material-ui/core'
import { useDispatch,useSelector } from 'react-redux'
import * as actions from '../action'
import currencyFormat from 'utils/currencyFormat'

import axios from 'axios'
import * as actionsHostel from 'modules/hostel/action'

const useStyles = makeStyles(() => ({
  product: {
    display: 'flex',
    margin:10,
  },
  productDetails: {
    flex: 1,
  },
  image: {
    width: 150,
  }, cancel: {
    color: "red",
    fontWeight: 500,
    fontSize:12
  }
}))

export default function CartProduct({id}) {
  const classes = useStyles()

  const [data, setData] = React.useState([]);

  const dispatch = useDispatch();

  useEffect(() => {

    const fetchData = async () => {
      const result = await axios.get(
        `/hostel?id=${id}`,
      );
     
      setData(result.data);
    };
 
    fetchData();
  }, [id]);


  const book = useSelector(state => state.book.items);
  const onDelete = () => {
    const action = actionsHostel.removeFromCart(id)
    dispatch(action)
  }
  return (
    <Card className={classes.product}>

      <CardMedia image={data.img} className={classes.image} />
      <CardContent className={classes.productDetails}>
        <Typography variant="h5" component="h2">
          {data.name}
        </Typography>
  
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <div>{currencyFormat(data.price)}</div>
          </Grid>
          <Grid item>
          <Button onClick={onDelete} className={classes.cancel} >
          Cancel reservation
          </Button>
      
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}