// import { useState } from 'react'

import './style/App.css';
import Login from './pages/Login';
import ProfileSet from 'pages/ProfileSet';
import SignUp from 'pages/SignUp';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Test from 'pages/TestPage';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/profile' element={<ProfileSet />}></Route>
          <Route path='/sign_up' element={<SignUp />}></Route>{' '}
          <Route path='/test' element={<Test />}></Route>

        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
