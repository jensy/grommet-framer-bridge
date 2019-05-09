import * as React from 'react';
import * as Grommet from 'grommet';
import { PropertyControls, ControlType, Stack } from 'framer';

export class App2 extends React.Component {
  render() {
    return (
      <Grommet.Box
        direction="column"
        border={{ color: 'brand', size: 'medium' }}
        pad="medium"
        gap="medium"
        alignContent="center"
        align="center"
        justify="center"
        fill
      >
        {this.props.children}
      </Grommet.Box>
    );
  }
}
