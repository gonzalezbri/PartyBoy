import { Container, TextField, Button, Typography } from '@mui/material';

const SignIn = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h1">Sign In</Typography>
      <TextField id="email" label="Email" type="email" fullWidth margin="normal" />
      <TextField id="password" label="Password" type="password" fullWidth margin="normal" />
      <Button variant="contained" color="primary" type="submit">
        Sign In
      </Button>
    </Container>
  );
};

export default SignIn;