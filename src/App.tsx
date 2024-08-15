import Layout from 'components/Layout';
import ChatPage from 'pages/ChatPage';
import ListPage from 'pages/ListPage';
import ProfilePage from 'pages/ProfilePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<ListPage />} />
            <Route path=':movieId' element={<ChatPage />} />
          </Route>
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
