import { useSelector } from 'react-redux';
import { selectIsAuth, selectUser } from 'redux/auth/authSelectors';
import { Container, StyledLink, Text } from './HomePage.styled';

function HomePage() {
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);

  return isAuth ? (
    <Container>
      <Text>Hello, {user.name}!</Text>
      <Text>
        To start using App go to{' '}
        <StyledLink to="/contacts">contacts</StyledLink>.
      </Text>
      <Text>Thank you for choosing our service.</Text>
    </Container>
  ) : (
    <Container>
      <Text>Wellcome to our App!</Text>
      <Text>
        Please <StyledLink to="/login">login</StyledLink> or{' '}
        <StyledLink to="/register">register</StyledLink>
      </Text>
    </Container>
  );
}

export default HomePage;
