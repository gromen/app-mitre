import { Checkbox, FormGroup } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import FilterListIcon from '@mui/icons-material/FilterList';
import CustomizedFormControlLabel from '../ui/CustomizedFormControlLabel';

export default function Checkboxes() {
  return (
    <>
      <FormGroup aria-label="position" row>
        <CustomizedFormControlLabel
          value="top"
          control={<Checkbox />}
          label={
            <>
              <DragIndicatorIcon />
              Pre-ATT&CK
            </>
          }
          labelPlacement="start"
        />
        <CustomizedFormControlLabel
          value="start"
          control={<Checkbox />}
          label={
            <>
              <DragIndicatorIcon />
              Enterprise
              <FilterListIcon />
            </>
          }
          labelPlacement="start"
        />
        <CustomizedFormControlLabel
          value="bottom"
          control={<Checkbox />}
          label={
            <>
              <DragIndicatorIcon />
              Mobile
              <FilterListIcon />
            </>
          }
          labelPlacement="start"
        />
        <CustomizedFormControlLabel
          value="end"
          control={<Checkbox />}
          label={
            <>
              <DragIndicatorIcon />
              ICS
            </>
          }
          labelPlacement="start"
        />
      </FormGroup>
    </>
  );
}
