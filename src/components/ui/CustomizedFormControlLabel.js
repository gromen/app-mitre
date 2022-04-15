import { FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomizedSlider = styled(FormControlLabel)`
  margin-right: 20px;

  .MuiFormControlLabel-label {
    display: flex;

    svg {
      padding-right: 10px;

      &:nth-of-type(2) {
        padding-left: 10px;
      }
    }
  }
`;

export default CustomizedSlider;
