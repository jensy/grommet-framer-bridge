import * as React from "react"
import * as Grommet from "grommet"
import { Override, PropertyControls, ControlType } from "framer"

type Props = {
    label: string
    width: number
    height: number
    color: string
    primary: boolean
    plain: boolean
    link: string
}

export class Button2 extends React.Component<Props> {
    render() {
        return (
            <Grommet.Button
                label={this.props.label}
                color={this.props.color}
                fill
                primary={this.props.primary}
                plain={this.props.plain}
                href={this.props.link}
            />
        )
    }

    static defaultProps: Props = {
        label: "Hello World!",
        color: "",
        width: 180,
        height: 36,
        primary: true,
        plain: false,
        link: "",
    }

    static propertyControls: PropertyControls<Props> = {
        label: { type: ControlType.String, title: "Label" },
        color: { type: ControlType.Color, title: "Color" },
        primary: { type: ControlType.Boolean, title: "Primary" },
        plain: { type: ControlType.Boolean, title: "Plain" },
        link: { type: ControlType.String, title: "Link" },
    }
}
