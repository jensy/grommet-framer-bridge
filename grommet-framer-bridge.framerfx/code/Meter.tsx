import * as React from 'react';
import { Meter as _Meter, Box } from 'grommet';
import { addPropertyControls, ControlType } from 'framer';

export function Meter(props) {
  return (
    <Box background="white" fill>
      <_Meter
        type={props.type}
        background="#F8F8F8"
        round
        thickness="small"
        values={[
          {
            value: 40,
            color: 'brand',
            label: 'individuals',
          },
        ]}
      />
    </Box>
  );
}

Meter.defaultProps = {
  width: 144,
  height: 36,
  type: 'bar',
};

addPropertyControls(Meter, {
  type: {
    type: ControlType.SegmentedEnum,
    options: ['bar', 'circle'],
    optionTitles: ['Bar', 'Circle'],
    title: 'Type',
  },
});
