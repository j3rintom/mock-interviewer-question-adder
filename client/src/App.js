import './App.css';
import InterviewForm from "./components/InterviewForm/InterviewForm"
import Navbar from './components/Navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path='/' element={<InterviewForm />} />
      </Routes>
    </div>
  );
}

export default App;
