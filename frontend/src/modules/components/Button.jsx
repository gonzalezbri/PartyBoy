import { Button, styled } from '@mui/material';

const MUIButton = styled(Button)(({ theme }) => ({
    borderRadius: 0,
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.fontFamilySecondary,
    padding: theme.spacing(2, 4),
    fontSize: theme.typography.pxToRem(14),
    boxShadow: 'none',
    '&:active, &:focus': {
    boxShadow: 'none',
    },
}));

export default MUIButton;
