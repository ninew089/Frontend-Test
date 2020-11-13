import React,{useEffect} from 'react';
import { Box, Container,Grid,Button } from '@material-ui/core';
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import currencyFormat from 'utils/currencyFormat'
import * as actions from '../action'
import { useHistory } from 'react-router-dom'

import Map from './Mapping'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  box: {
    height: '100vh', width: '100%'
  }, img: {
    borderRadius:10
  }
}))
export default function Card() {
  const  {search}  = useLocation()
  const classes =useStyles()
 
  const [data, setData] = React.useState([]);
 
  

  const history = useHistory()
  const dispatch = useDispatch()
  const id=data.id

  const addCart = () => { 
      const action = actions.addToCart(id)
      dispatch(action)
  }

  useEffect(() => {
    
    const fetchData = async () => {
      const result = await axios.get(
        `/hostel${search}`,
      );
     
      setData(result.data);
    };
 
    fetchData();
  }, [search]);
  



  const bookNow = () => {
    addCart()
    history.push('/book')
  }
 

  return (
    <>
      
            <Container fixed>
              <Box fontSize={24} fontWeight={700} marginTop={ 8}>
                  Detail
          </Box>
              <Grid container justify='flex-start' alignItems='center' >
                  <Grid items xs={12} sm={ 4}>
            <img src={data.img} alt="hostel" width='100%' className={ classes.img}/> 
                  </Grid> 
                  <Grid items xs={12} sm={8} >
                  <Box marginLeft={ 8}>
                  <Box fontSize={24} fontWeight={700} >
                  {data.name}
          </Box>
          <Box fontSize={18} fontWeight={700} >
          {data.desc}
          </Box>
          <Box fontSize={18} fontWeight={700}  >
          {currencyFormat (data.price)}
          </Box>            
              <Button onClick={bookNow} color="primary" variant="contained">
                
                <Box fontSize={18} fontWeight={700} >Book
              </Box></Button>
          </Box>
                      
          </Grid>
      
        </Grid>
        <div className={classes.box}>
        <Box fontSize={24} fontWeight={700} marginTop={ 8}>
      <Map/>
          </Box>
          </div>
       
          </Container>
    </>
  );
}
