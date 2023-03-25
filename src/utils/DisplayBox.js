import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

export const DisplayBox = styled(Paper)(({ theme }) => ({
  // ...theme.typography.body2,
  padding: theme.spacing(2),
  margin: theme.spacing(4),
  // textAlign: 'left',
  // color: theme.palette.text.secondary,
  backgroundColor: '#fbdecc',
  // opacity: '0.8',
  // height: '80%'
}));