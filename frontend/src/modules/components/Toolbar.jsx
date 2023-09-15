import { Box, styled } from '@mui/material';

const Toolbar = styled(Box)(({ theme }) => ({
  height: 64,
  [theme.breakpoints.up('sm')]: {
    height: 70,
  },
}));

export default Toolbar;
