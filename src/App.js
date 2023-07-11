import { Route, Routes } from 'react-router-dom';
import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  );
}

export default App;
