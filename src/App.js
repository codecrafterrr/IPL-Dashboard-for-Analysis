import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';
import { HomePage } from './pages/HomePage';
import { MatchPage } from './pages/MatchPage';
import { Header } from './components/Header';
import Contact from './pages/Contact';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <Router>
                <Routes>
                    <Route path="/teams/:teamName" element={<TeamPage />} />
                    <Route path="/teams/:teamName/matches/:year" element={<MatchPage/>} />
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
