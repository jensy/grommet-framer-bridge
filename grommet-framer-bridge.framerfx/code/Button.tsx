import * as React from "react";
import { Button as _Button } from "grommet";
import { PropertyControls, ControlType } from "framer";

type Props = {
  label: string;
  width: number;
  height: number;
  color: string;
  primary: boolean;
  plain: boolean;
  link: string;
};

export class Button extends React.Component<Props> {
  render() {
    return (
      <_Button
        label={this.props.label}
        color={this.props.color}
        fill
        primary={this.props.primary}
        plain={this.props.plain}
        href={this.props.link}
      />
    );
  }

  static defaultProps: Props = {
    label: "Hello World!",
    color: "",
    width: 180,
    height: 36,
    primary: true,
    plain: false,
    link: ""
  };

  static propertyControls: PropertyControls<Props> = {
    label: { type: ControlType.String, title: "Label" },
    color: { type: ControlType.Color, title: "Color" },
    primary: { type: ControlType.Boolean, title: "Primary" },
    plain: { type: ControlType.Boolean, title: "Plain" },
    link: { type: ControlType.String, title: "Link" }
  };
}
