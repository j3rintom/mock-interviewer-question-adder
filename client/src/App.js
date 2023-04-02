
import './App.css';
import MyForm from './components/Form/Form';
import InterviewForm from "./components/InterviewForm/InterviewForm"
import Navbar from './components/Navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path='/addInterview' element={<InterviewForm />} />
        <Route path='/' element={<MyForm />} />
      </Routes>
    </div>
  );
}

export default App;
