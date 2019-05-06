import * as React from 'react';
import { TextInput as _TextInput, Box } from 'grommet';
import { addPropertyControls, ControlType } from 'framer';

export function TextInput(props) {
  const [value, setValue] = React.useState('');

  return (
    <Box background="white">
      <_TextInput
        placeholder={props.placeholder}
        value={value}
        type={props.type}
        onChange={event => setValue(event.target.value)}
      />
    </Box>
  );
}

TextInput.defaultProps = {
  width: 144,
  height: 36,
  placeholder: 'Type in here',
  value: '',
  type: 'default',
};

addPropertyControls(TextInput, {
  placeholder: { type: ControlType.String, title: 'Placeholder' },
  value: { type: ControlType.String, title: 'Value' },
  type: {
    type: ControlType.Enum,
    options: ['default', 'number', 'email', 'password'],
    optionTitles: ['Default', 'Number', 'Email', 'Password'],
    title: 'Type',
  },
});
