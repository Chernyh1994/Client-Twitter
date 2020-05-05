import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import HomePage from '../pages/main/homePage';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import Error404 from '../pages/error';
import Header from '../pages/layouts';
import PostsPage from '../pages/main/postsPage';
import PostPage from '../pages/main/postPage';
import ProfilePage from '../pages/main/profilePage';
import UserPosts from '../components/profile/UserPosts';

const Routes = () => {
  const user = useSelector((state) => state.authReducer.user);
  const isAuthorized = !!user;
  const routes = [
    {
      component: Header,
      routes: [
        {
          path: '/register',
          exact: true,
          render: () => (isAuthorized ? <Redirect to="/"/> : <Register/>)
        },
        {
          path: '/login',
          exact: true,
          render: () => (isAuthorized ? <Redirect to="/"/> : <Login/>)
        },
        {
          path: '/',
          exact: true,
          component: HomePage
        },
        {
          path: '/profile/:id',
          component: ProfilePage,
          routes: [
            {
              path: '/profile/:id/posts',
              component: UserPosts
            }
          ]
        },
        {
          path: '/posts',
          exact: true,
          render: () => (isAuthorized ? <PostsPage/> : <Redirect to="/login"/>)
        },
        {
          path: '/post/:id',
          component: PostPage
        },
        {
          component: Error404
        }
      ]
    }
  ];
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  );
};

export default Routes;