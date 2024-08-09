import Layout from 'components/Layout';
import ListPage from 'pages/ListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
