import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import { AiOutlineUser } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import {
  Container,
  InputAdornment,
  Button,
  CssBaseline,
  TextField,
  Typography,
} from '@material-ui/core'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import * as actions from '../action'

import * as yup from 'yup'


const useStyles = makeStyles((theme) => ({
  input: {
    color: '#0f1626',
    fontWeight: 700,
    '& .MuiInputBase-root.MuiOutlineInput-root': {
      color: '#45A29E',
      borderColor: '#757575',
      fontWeight: 700,
    },
  },
  textfield: {
    marginTop: 10,

    '& .MuiFormHelperText-root.Mui-error ': {
      color: 'ff533d',
      fontWeight: 700,
      borderWidth: '3px',
    },
    '& .MuiInput-underline.Mui-error:after': {
      borderColor: 'ff533d',
      borderWidth: '3px',
    },
    '& label.MuiFormLabel-root': {
      fontWeight: 700,
      '&:after .Mui-error': {
        borderColor: '#ff533d',
        borderWidth: '3px',
      },
    },
    '& label.Mui-focused': {
      color: '#132740',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ffae0c',
    },
    '& .MuiOutlinedInput-root': {
      borderWidth: '3px',
      '& fieldset': {
        borderColor: '#ffae0c',
        borderWidth: '2px',
      },
      '&:hover fieldset': {
        borderColor: '#a8c6ff',
        borderWidth: '3px',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#a8c6ff',
        borderWidth: '3px',
      },
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ff533d',
        borderWidth: '3px',
      },
    },
  },
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(7),
    height: theme.spacing(7),

    backgroundColor: theme.palette.secondary.main,
  },

  submit: {
    marginTop: '10px',
    background: '#ff533dcf',
    borderRadius: 20,
    padding: 8,
    color: '#fdfdfd',
    '&:hover': {
      background: '#ff533d',
    },
  },

  container: {
    display: 'flex',
    alignItems: 'center',
  },

  border: {
    borderBottom: '1px solid darkgray',
    width: '100%',
  },

  content: {
    padding: ' 0 10px 0 10px',
  },
  divider: {
    marginTop: '20px',
  },
  textdivider: {
    color: 'royalblue',
  },
  nav: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  form: {

    height: '100%',
    marginTop: '20px',
  },
  font: {
    fontWeight: 700,
    color: '#0f1726',
  },
  image: {
    margin: 10,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
  },
}))

export default function SignIn() {
  const classes = useStyles()
  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
    validationSchema: yup.object().shape({
      email: yup.string().email().required()
        ,
      password: yup.string().required(),
    }),
   
  })
  const history = useHistory()
  const dispatch = useDispatch()

  const login = useSelector((state) => state.login.Login)
  useEffect(() => { 
    if (login) {
      history.push('/')
    }
  }, [login,history]);
 

  const onLogin =  (loginInfo) => { 
    const action =  actions.loadLogin(loginInfo)
    dispatch(action)
    


  }

  return (
    <Container component="main" maxWidth="xs">
      <form autoComplete="off" className={classes.form}>
        <CssBaseline />
        <div className={classes.paper}>    
          <Typography component="h1" variant="h5" className={classes.font}>
            Hostel Login
          </Typography>
          <Typography variant="h7" >
                      email: admin@gmail.com |
                      password:1234
          </Typography>
                  {console.log(errors)}
          <form className={classes.form} noValidate>
            <TextField
              label="email"
              name="email"
              inputRef={register}
              variant="outlined"
              className={classes.textfield}
              InputProps={{
                className: classes.input,
                startAdornment: (
                  <InputAdornment position="start">
                    <AiOutlineUser size={24} />
                  </InputAdornment>
                ),
              }}
              fullWidth
              helperText={errors.email ? errors.email.message : ''}
              error={!!errors.email}
            />
            <TextField
              className={classes.textfield}
              label="password"
              type="password"
              name="password"
              inputRef={register}
              fullWidth
              variant="outlined"
              helperText={errors.password ? errors.password.message: ''}
              error={!!errors.password}
              InputProps={{
                className: classes.input,
                startAdornment: (
                  <InputAdornment position="start">
                    <RiLockPasswordLine size={24} />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
                          fullWidth
                          
              className={classes.submit}
              onClick={handleSubmit(onLogin)}
            >
                          LOGIN
            </Button>
                      <NavLink to="/signup" className={classes.nav}>
                              <Button
          
              fullWidth
              className={classes.submit}
            
            >
              SIGNUP
            </Button>
              
                </NavLink>
          </form>
        </div>
      </form>
    </Container>
  )
}
