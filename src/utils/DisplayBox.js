import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

export const DisplayBox = styled(Paper)(({ theme }) => ({
  // ...theme.typography.body2,
  // keep an eye on padding below. might need to switch back to (2)
  padding: theme.spacing(1),
  // changed margin spacing from (4) to (2) - watch to see if you need to switch it back
  margin: theme.spacing(4),
  // textAlign: 'left',
  // color: theme.palette.text.secondary,
  backgroundColor: '#fbdecc',
  // opacity: '0.8',
  // height: '80%'
}));