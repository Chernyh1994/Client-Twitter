import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import { logoutUser } from '../../store/currentAuthUser/actions';
import { CustomAppBar, HeaderTitle } from '../UI/StyledComponent/Templates';

const NavBar = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.currentAuthUser.auth.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <CustomAppBar>
      <Toolbar>
        <HeaderTitle>
          Twitter Test Project
        </HeaderTitle>
        <div>
          {isAuthorized ?
            <Button onClick={handleLogout} style={{ color: 'white' }} component={Link} to='/login'>Logout</Button> :
            <div>
              <Button style={{ color: 'white' }} component={Link} to='/login'>Log in</Button>
              <Button style={{ color: 'white' }} component={Link} to='/register'>Sing up</Button>
            </div>}
        </div>
      </Toolbar>
    </CustomAppBar>
  );
};

export default NavBar;
