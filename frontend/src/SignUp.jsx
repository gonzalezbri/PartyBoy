import { Container, TextField, Button, Typography } from '@mui/material';

const SignUp = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h1">Sign Up</Typography>
      <TextField id="name" label="Name" type="text" fullWidth margin="normal" />
      <TextField id="email" label="Email" type="email" fullWidth margin="normal" />
      <TextField id="password" label="Password" type="password" fullWidth margin="normal" />
      <Button variant="contained" color="primary" type="submit">
        Sign Up
      </Button>
    </Container>
  );
};

export default SignUp;