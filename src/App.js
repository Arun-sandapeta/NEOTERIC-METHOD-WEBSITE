import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Batches from './Pages/Batches/Batches';
import AddBatch from './Pages/Batches/AddBatch';
import DeleteBatch from './Pages/Batches/DeleteBatch';
import UpdateBatch from './Pages/Batches/UpdateBatch';
import Nav from './utilities/CommonComponents/NavBar/Nav';
import Footer from './utilities/CommonComponents/Footer/Footer';
import Services from './Components/Services/Services';

function App() {
  return (
    <>
      <Nav/>
      <div className='main-content'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/batches/add" element={<AddBatch />} />
            <Route path="/batches/remove/:id" element={<DeleteBatch />} />
            <Route path="/batches/update/:id" element={<UpdateBatch />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;