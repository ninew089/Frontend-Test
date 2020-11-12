import React from 'react';
import {Box,Container,Grid} from '@material-ui/core';
import HostelCard from './HostelCard'
import axios from 'axios'
export default function DisableElevation() {

  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://8a2fc1a9-0d10-4a86-8098-56ddb92a968a.mock.pstmn.io/hostel",
      );
      setData(result.data);
    };
 
    fetchData();
  }, []);

  const listItems = data.map((hostel,index) =>
    <Grid item xs={12} sm={6} md={4} lg={3}>

      <HostelCard name={hostel.name} price={hostel.price} desc={hostel.desc} img={hostel.img} id={index}/>
    </Grid>

);


  return (
    <Container fixed>
    
      <Box fontSize={24} fontWeight={700} paddingTop={8} paddingBottom={ 4}>
      Recommended for you
      </Box>
      <Grid container justify='center' alignItems='center' spacing={2}>
      {listItems}
      </Grid>

      </Container>
  );
}