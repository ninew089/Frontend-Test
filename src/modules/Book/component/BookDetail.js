import React,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,Button

} from '@material-ui/core'

import currencyFormat from 'utils/currencyFormat'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import * as actions from 'modules/hostel/action'

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
        `https://8a2fc1a9-0d10-4a86-8098-56ddb92a968a.mock.pstmn.io/hostel?id=${id}`,
      );
     
      setData(result.data);
    };
 
    fetchData();
  }, [id]);
  
  const onDelete = () => {
    const action = actions.removeFromCart(id)
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