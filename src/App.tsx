import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExecutiveProfile from './pages/ExecutiveProfile';
import Projects from './pages/Projects';
import Leadership from './pages/Leadership';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContainer className="App">
          <Navigation />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/executive-profile" element={<ExecutiveProfile />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/ai-innovation" element={<Projects />} />
              <Route path="/sci-fi-form-builder" element={<Projects />} />
              <Route path="/ai-art-evolution" element={<Projects />} />
              <Route path="/forge-form-builder" element={<Projects />} />
              <Route path="/technical-leadership" element={<Projects />} />
              <Route path="/agentic-ai" element={<Projects />} />
              <Route path="/bee-fun-learning" element={<Projects />} />
              <Route path="/safe-ai-art" element={<Projects />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
