import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import { selectUserEmail } from 'redux/auth/authSelectors';

function UserMenu() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  };

  const userEmail = useSelector(selectUserEmail);
  return (
    <div>
      <p>{userEmail}</p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
