import React from 'react';
import BookDetail from './BookDetail'
import { Container, Box } from '@material-ui/core'
import {  useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  box: {
    marginTop: 20
  },
}))
export default function BookList() {
  const productIds = useSelector((state) => state.hostel.productIds)


  const classes = useStyles()
  

 
  return (
    <Container fixed> 

      <div className={classes.box}> 
        <Box fontSize={24} fontWeight={700}>
          Booking List
        </Box>
        {productIds.map((product) => (
          <BookDetail key={product} id={product}></BookDetail>
        ))}

        </div>
    </Container>
  );
}
