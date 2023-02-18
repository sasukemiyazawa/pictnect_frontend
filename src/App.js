import { useMediaQuery } from 'react-responsive';
import './App.css';
import BottomNav from './components/sumaho/BottomNav';
import Favorite from './components/sumaho/Favorite/Favorite';
import Search from './components/sumaho/Search/Search';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import Results from './components/sumaho/Search/Results';
import Show from './components/sumaho/Search/Show';
import Header from './components/sumaho/Event/Header';
import Now from './components/sumaho/Event/Now';
import List from './components/sumaho/Event/List';
import ListShow from './components/sumaho/Event/ListShow';
import Post from './components/sumaho/Search/Post';
import Signage from './components/Signage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ManagePage from './components/ManagePage'
import LoginPage from './components/LoginPage'

function App() {
  const baseURL = "http://localhost:3001/api/v1/"

  // スマホ用・レスポンシブにする
  // FIXME: クロムでしか効かない
  const isDesktop = useMediaQuery({ query: '(min-width: 768px' })
  //（とりあえず）スマホ用・themeを決める
  const theme = createTheme({
    palette: {
      primary: {
        main: '#F3549F'
      },
      secondary: {
        main: "#D76B6B"
      },
      info: {
        main: '#333333'
      },
      subtitle1: {
        main: '#515151'
      }
    },
    typography: {
      fontFamily: [
        '"Noto Sans JP"',
        '"Zen Kaku Gothic New"'
      ].join(',')
    }
  })
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {isDesktop && <>大きいです…♡</>}
        {!isDesktop &&
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<>ルート</>} />
              <Route path='/sumaho' element={<BottomNav />} >
                <Route path='' element={<Favorite baseURL={baseURL} />} />
                <Route path='search' element={<Search baseURL={baseURL} />} />
                <Route path='post' element={<Post baseURL={baseURL} />} />
                <Route path='results/:tag_id' element={<Results baseURL={baseURL} />} />
                <Route path='show/:id' element={<Show baseURL={baseURL} />} />
                <Route path='event' element={<Header baseURL={baseURL} />} />
                {/* <Route path='' element={<Now baseURL={baseURL} />} /> */}
                {/* <Route path='list' element={<List baseURL={baseURL} />} /> */}
                <Route path='event/:id' element={<ListShow baseURL={baseURL} />} />
                {/* </Route> */}
              </Route>
              <Route path={'/signage'} element={<Signage baseURL={baseURL} />} />
              <Route path={'/manager'} element={<ManagePage baseURL={baseURL} />} />
              <Route path={'/manager/login'} element={<LoginPage />} />
            </Routes>
          </BrowserRouter>
        }
      </ThemeProvider>
    </div>
  );
}

export default App;
