import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Drawer,Badge} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@material-ui/core'
import {  NavLink } from 'react-router-dom'

import {useSelector,useDispatch} from 'react-redux'
import {Book,ChevronLeft,ChevronRight,Menu,AccountCircle} from '@material-ui/icons';
import Route from './Route'
import 'App.css'
import * as action from 'modules/login/action'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: '#120f18',
    color:'#ffffff',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }, name: {
    flexGrow: 1,
    color: 'inherit', textDecoration: 'inherit'
  }, nav: {
    color: 'inherit', textDecoration: 'inherit'
  },title:{
    marginLeft: 14 ,overflow:'hidden'
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()
  const login = useSelector((state) => state.login.Login)
  const productIds = useSelector((state) => state.hostel.productIds)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const logOut = () => {
    const actions = action.setLogin(false)
    dispatch(actions)
  }
  
  return (
    <div className={classes.root}>

      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>  <NavLink
            to={`/`}
      
            className={classes.name}
          >
          <Box fontSize={24} fontWeight={ 700} > 
              Hostel
          </Box>
            </NavLink>
          <NavLink
            to={`/book`}
            className={classes.nav}
          >
          <IconButton color="inherit" >
          <Badge badgeContent={productIds.length} color="secondary">
            <Book/>
    </Badge>
            </IconButton>
            </NavLink>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {login ?
          
     
          <ListItem button onClick={logOut}>
            <ListItemIcon> <AccountCircle/></ListItemIcon>
            <ListItemText primary={'Logout'} />
        </ListItem>

          :
               <NavLink
               to={`/login`}
               className={classes.nav}
    
             >
               <ListItem button  >
                 <ListItemIcon> <AccountCircle/></ListItemIcon>
                 <ListItemText primary={'Login'} />
             </ListItem>
             </NavLink>
          }
     
 
        </List>
       
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
     

    
 
              <div class="container">

 
              <div className="bg" />
        <div class="content">
        <div className={classes.title} >
          <Box fontSize={24} fontWeight={700} paddingTop={ 16}> 
            Wellcome Hostel
          </Box>
          <Box fontSize={14} fontWeight={700} width={ '60%'} > 
            Choose From a Wide Range of Properties Which hostel.com Offers. 
          </Box>
          </div>
        </div>
  </div>

  
    <Route/>
        </main>
      
    </div>
  );
}
