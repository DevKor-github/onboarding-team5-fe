import ListPage from 'pages/ListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
