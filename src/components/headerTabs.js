import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Box, Checkbox, FormGroup, Tabs } from '@mui/material';
import { useEffect, useState } from 'react';
import CustomizedFormControlLabel from './ui/CustomizedFormControlLabel';
import FilterListIcon from '@mui/icons-material/FilterList';
import CustomizedTab from './ui/CustomizedTab';

function HeaderTabs() {
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState(0);

  const getCategories = () => {
    fetch('./api/mitre.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then(({ categories }) => {
        setCategories(categories);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCategories();
  }, [categories]);

  const onChangeTab = (event, newIndex) => {
    setValue(newIndex);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={onChangeTab}
          aria-label="basic tabs example"
        >
          {categories.map((category) => (
            <CustomizedTab
              id={category.id}
              key={category.name}
              label={
                <FormGroup aria-label="position" row>
                  <CustomizedFormControlLabel
                    control={<Checkbox />}
                    label={
                      <>
                        <DragIndicatorIcon />
                        {category.name}
                        {category.id === 2 || category.id === 3 ? (
                          <FilterListIcon />
                        ) : null}
                      </>
                    }
                    labelPlacement="start"
                  />
                </FormGroup>
              }
            />
          ))}
        </Tabs>
      </Box>
    </>
  );
}

export default HeaderTabs;
