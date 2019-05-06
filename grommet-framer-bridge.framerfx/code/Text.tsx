import * as React from 'react';
import { Text as _Text } from 'grommet';
import { PropertyControls, ControlType } from 'framer';

type Props = {
  color: string;
  text: string;
  width: string;
  height: string;
  size: string;
  weight: string;
};

export class Text extends React.Component<Props> {
  render() {
    return (
      <_Text
        margin="none"
        textAlign="start"
        size={this.props.size}
        color={this.props.color}
        weight={this.props.weight}
      >
        {this.props.text}
      </_Text>
    );
  }

  static defaultProps: Props = {
    color: '',
    text: 'Hello World!',
    width: '100%',
    height: '100%',
    size: 'small',
    weight: 'normal',
  };

  static propertyControls: PropertyControls<Props> = {
    color: { type: ControlType.Color, title: 'Color' },
    text: { type: ControlType.String, title: 'Heading' },
    size: {
      type: ControlType.SegmentedEnum,
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'],
      optionTitles: ['1', '2', '3', '4', '5', '6'],
      title: 'Level',
    },
    weight: {
      type: ControlType.SegmentedEnum,
      options: ['normal', 'bold'],
      optionTitles: ['Normal', 'Bold'],
      title: 'Weight',
    },
  };
}
