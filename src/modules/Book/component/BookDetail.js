import React,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,

} from '@material-ui/core'
import img from 'assets/image/hostel.jpg'
import currencyFormat from 'utils/currencyFormat'

import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  product: {
    display: 'flex',
    margin:10,
  },
  productDetails: {
    flex: 1,
  },
  image: {
    width: 150,
  },
}))

export default function CartProduct({id}) {
  const classes = useStyles()

  const [data, setData] = React.useState([]);


  useEffect(() => {
    
    const fetchData = async () => {
      const result = await axios.get(
        `https://8a2fc1a9-0d10-4a86-8098-56ddb92a968a.mock.pstmn.io/hostel?id=${id}`,
      );
     
      setData(result.data);
    };
 
    fetchData();
  }, []);
  

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

          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}