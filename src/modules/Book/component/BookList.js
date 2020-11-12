import React from 'react';
import BookDetail from './BookDetail'
import { Container, Box } from '@material-ui/core'
import {  useSelector } from 'react-redux'

export default function BookList() {
  const productIds = useSelector((state) => state.hostel.productIds)


  

 
  return (
    <Container fixed> 
      {console.log(productIds)}
      <div style={{ marginTop: 20 }}> 
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
