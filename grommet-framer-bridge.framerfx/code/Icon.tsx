import * as React from 'react';
import * as Icons from 'grommet-icons';
import styled from 'styled-components';
import { PropertyControls, ControlType } from 'framer';

const Icon = ({ name, ...rest }) => {
  const NamedIcon = Icons[name];
  if (NamedIcon === undefined) {
    return null;
  }
  return <NamedIcon {...rest} />;
};

const StyledIcon = styled(Icon)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

interface Props {
  icon: string;
  color: string;
}

export class GrommetIcon extends React.Component<Partial<Props>> {
  static defaultProps = {
    icon: 'Gremlin',
    color: 'rgb(134, 92, 214)',
    width: 24,
    height: 24,
  };

  static propertyControls: PropertyControls<Props> = {
    icon: { type: ControlType.String, title: 'Icon' },
    color: { type: ControlType.Color, title: 'Color' },
  };

  render() {
    const { icon, color } = this.props;

    return <StyledIcon name={icon} color={color} />;
  }
}
