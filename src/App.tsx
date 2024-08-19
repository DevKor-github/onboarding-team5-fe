import Layout from 'components/Layout';
import ChatPage from 'pages/ChatPage';
import ListPage from 'pages/ListPage';
import Login from 'pages/Login';
import ProfilePage from 'pages/ProfilePage';
import ProfileSet from 'pages/ProfileSet';
import SignUp from 'pages/SignUp';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/'>
          <Route index element={<ListPage />} />
          <Route path=':userId' element={<ChatPage />} />
        </Route>
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile_set' element={<ProfileSet />} />
        <Route path='/sign_up' element={<SignUp />} />
      </Routes>
    </Layout>
  );
};

export default App;
