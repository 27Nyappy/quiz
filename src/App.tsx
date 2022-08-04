import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LandingPage from './LandingPage';
import Results from './Results';
import QuizPage from './QuizPage';
import useStyles from './App.styles';

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  palette: {
    primary: {
      main: '#93CCE8',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    secondary: {
      main: '#FEC9C9',
    },
    error: {
      main: '#CB4C4E',
    },
    warning: {
      main: '#ffb347',
    },
    info: {
      main: '#C3B1E1',
    },
    success: {
      main: '#C1E1C1',
    },
    background: {
      default: '#000000',
      paper: '#01121a',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: 'rgba(255,255,255,0.54)',
      disabled: 'rgba(255,255,255,0.38)',
    },
    divider: 'rgba(0,0,0,0.12)',
  },
});

export const QuizContext = createContext<{
  userAnswers: { [key: string]: string };
  setUserAnswers: React.Dispatch<
    React.SetStateAction<{
      [key: string]: string;
    }>
  >;
}>({
  userAnswers: {
    1: '',
    2: '',
    3: '',
  },
  setUserAnswers: () => undefined,
});

const App = () => {
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({
    1: '',
    2: '',
    3: '',
  });
  const { classes } = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.imageContainer} />
      <div className={classes.contentContainer}>
        <BrowserRouter>
          <QuizContext.Provider value={{ userAnswers, setUserAnswers }}>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/quiz' element={<QuizPage />} />
              <Route path='/results' element={<Results />} />
            </Routes>
          </QuizContext.Provider>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
