import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
