import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { Button, Email, Wrapper } from './UserMenu.styled';

function UserMenu() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  };

  const user = useSelector(selectUser);
  return (
    <Wrapper>
      <Email>{user.email}</Email>
      <Button type="button" onClick={handleClick}>
        Logout
      </Button>
    </Wrapper>
  );
}

export default UserMenu;
