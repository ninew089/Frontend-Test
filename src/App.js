
import Layout from 'modules/ui/component/Layout'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'store/configstore'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import 'assets/css/font.css'
function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Ubuntu', 'sans-serif'].join(','),
    },
    overrides: {
      MuiTab: {
        root: {
          minWidth: 100,
          '@media (min-width: 0px)': {
            minWidth: 80,
          },
        },
      },
    
    }
  }
  )

  const store = configureStore()
  return (
    <div >
      <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Router>
      <Layout/>
        </Router>
</ThemeProvider>
        </Provider>

    </div>
  );
}

export default App;
