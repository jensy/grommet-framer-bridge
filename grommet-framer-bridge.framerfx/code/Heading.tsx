import * as React from "react"
import { Heading as _Heading } from "grommet"
import { PropertyControls, ControlType } from "framer"

type Props = {
    color: string
    text: string
    width: string
    height: string
    level: any
}

export class Heading extends React.Component<Props> {
    render() {
        return (
            <_Heading
                margin="none"
                textAlign="start"
                level={this.props.level}
                color={this.props.color}
            >
                {this.props.text}
            </_Heading>
        )
    }

    static defaultProps: Props = {
        color: "",
        text: "Hello World!",
        width: "100%",
        height: "100%",
        level: "3",
    }

    static propertyControls: PropertyControls<Props> = {
        color: { type: ControlType.Color, title: "Color" },
        text: { type: ControlType.String, title: "Heading" },
        level: {
            type: ControlType.SegmentedEnum,
            options: ["1", "2", "3", "4", "5"],
            title: "Level",
        },
    }
}
