import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ExecutiveProfile from './pages/ExecutiveProfile';
import Projects from './pages/Projects';
import Leadership from './pages/Leadership';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Navigation />
          <main>
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
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
