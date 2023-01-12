import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import { selectUserEmail } from 'redux/auth/authSelectors';
import { Button, Email, Wrapper } from './UserMenu.styled';

function UserMenu() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  };

  const userEmail = useSelector(selectUserEmail);
  return (
    <Wrapper>
      <Email>{userEmail}</Email>
      <Button type="button" onClick={handleClick}>
        Logout
      </Button>
    </Wrapper>
  );
}

export default UserMenu;
