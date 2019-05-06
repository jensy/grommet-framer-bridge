import * as React from 'react';
import { Select as _Select, Box } from 'grommet';
import { addPropertyControls, ControlType } from 'framer';

export function Select(props) {
  const [value, setValue] = React.useState('');
  const optionsArray = props.options.split(',');

  return (
    <Box fill background="white">
      <_Select
        placeholder={props.placeholder}
        options={optionsArray}
        value={value}
        multiple
        onChange={({ option }) => setValue(option)}
        closeOnChange
      />
    </Box>
  );
}

Select.defaultProps = {
  placeholder: 'Select option',
  options: 'Apple, Banana, Orange',
  search: false,
  width: 144,
  height: 36,
};

addPropertyControls(Select, {
  placeholder: { type: ControlType.String, title: 'Placeholder' },
  options: { type: ControlType.String, title: 'Options' },
  search: { type: ControlType.Boolean, title: 'Search' },
});
