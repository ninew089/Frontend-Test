import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link as RouterLink, useHistory, NavLink } from 'react-router-dom'
import currencyFormat from 'utils/currencyFormat'
import {
  Typography,
  Grid,
  Avatar,
  Box,
  Divider,
  Button,
} from '@material-ui/core'
const useStyles = makeStyles(() => ({
  card: {
    width: '100%',
    background: '#fdfdfd',
    height: '100%',
    boxShadow: '4px 4px 4px 4px rgb(0 0 0 / 8%)',
    borderRadius: '0.5rem',
    transition: '0.4s',
    '&:hover': {
      transform: 'translateY(-4px)',
    },
  },
  main: {
    overflow: 'hidden',
    borderTopLeftRadius: '0.5rem',
    borderTopRightRadius: '0.5rem',
    zIndex: 1,
  },

  avatar: {
    width: 48,
    height: 48,
  },
  tag: {
    display: 'inline-block',
    fontFamily: "'Sen', sans-serif",
    backgroundColor: '#ff5dac',
    borderRadius: '0.5rem',
    padding: '2px 0.5rem',
    color: '#fff',
    marginBottom: '0.5rem',
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#132740',
    paddingLeft: 8,
    marginRight: 8,
    marginBottom: 10,
  },
  author: {
    overflow: 'hidden',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    fontSize: '14px',
    fontWeight: 700,
    color: '#132740',
    padding: 8,
  },
  box: {
    padding: 8,
  },
  view: {
    marginRight: 10,
  },
  dot: {
    height: '10px',
    width: '10px',
    backgroundColor: '#cfcde6',
    borderRadius: '50%',
    display: 'inline-block',
    marginLeft: 10,
    marginRight: 4,
  },
  rating: {
    paddingLeft: 8,
  },
  logo: {
    margin: 8,
  },
  caption: {
    overflow: 'hidden',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    fontSize: '12px',
    color: '#434a54',
    paddingLeft: 14,
    paddingRight: 14,
  },
  detail: {
    marginBottom: 30,
  },
  submit: {
    padding: 0,
    float: 'right',
    margin: 4,
  },
}))

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { name, price, desc, img,id } = props
  const history = useHistory()
  const navigatorToDeatail = () => {
    history.push(`/hostel?id=${id}`)
  }
  return (
    <div className={classes.card}>
    <Grid container direction="row" justify="flex-start" alignItems="center">
      <div className={classes.main} onClick={navigatorToDeatail} >
        <img alt="" src={img} width="100%" height="100%" />
      </div>

      <Typography variant={'h2'} className={classes.title}>
      {name} 
      </Typography>

      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={classes.detail}
      >
        <div className={classes.dot} />
        <Box fontWeight={500}>สังคมศาสตร์</Box>

        <div>
          <Box fontWeight={400} className={classes.caption}>
            &nbsp;&nbsp;&nbsp;{desc}
          </Box>
        </div>
      </Grid>

   
    <Divider />
    <Grid container direction="row" justify="flex-end" alignItems="center">
    
        {      currencyFormat(price)}

    </Grid>

</Grid>
  </div>
    
  );
}