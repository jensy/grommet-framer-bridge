import * as React from "react"
import { Size, PropertyControls, ControlType, Animatable } from "framer"

interface Props extends Size {
    parentSize: any
    radius: number
    row: number
    col: number
    padding: number
    color: string
    border: string
    index: boolean
}

interface State {
    radius: number
    row: number
    col: number
    padding: number
    color: string
    border: string
    index: boolean
}

export class Grid extends React.Component<Partial<Props>, State> {
    static defaultProps = {
        radius: 5,
        row: 3,
        col: 3,
        padding: 15,
        width: 300,
        height: 300,
        color: "rgba(136, 85, 255, 0.2)",
        border: "#85F",
        index: true,
    }

    static propertyControls: PropertyControls<Props> = {
        row: { type: ControlType.Number, min: 1, max: 25, title: "Rows" },
        col: { type: ControlType.Number, min: 1, max: 25, title: "Columns" },
        padding: {
            type: ControlType.Number,
            min: 0,
            max: 100,
            title: "Padding",
        },
        radius: { type: ControlType.Number, min: 0, max: 500, title: "Radius" },
        color: { type: ControlType.Color, title: "Fill" },
        border: { type: ControlType.Color, title: "Border" },
        index: {
            type: ControlType.Boolean,
            enabled: "Show",
            disabled: "Hide",
            title: "Index",
        },
    }

    state = {
        radius: Grid.defaultProps.radius,
        row: Grid.defaultProps.row,
        col: Grid.defaultProps.col,
        padding: Grid.defaultProps.padding,
        color: Grid.defaultProps.color,
        border: Grid.defaultProps.border,
        index: Grid.defaultProps.index,
    }

    componentDidMount() {
        const { radius, row, col, padding, color, border } = this.props
        this.setState({ radius, row, col, padding, color, border })
    }

    render() {
        const { radius, padding, row, col, color, border } = this.props

        var array = []

        const size = {
            width: this.props.width,
            height: this.props.height,
        }

        // Dynamic width and height
        var width = size.width / col
        var width = width - (padding * (col - 1)) / col
        var height = size.height / row
        var height = height - (padding * (row - 1)) / row

        // Cell method
        let Cell = (props: {
            x: number
            y: number
            index: string
            radius?: number
        }) => {
            return (
                <div
                    style={{
                        ...style,
                        backgroundColor: color,
                        boxShadow: `inset 0 0 0 1px ${border}`,
                        borderRadius: radius,
                        width: width,
                        height: height,
                        left: props.x,
                        top: props.y,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: width,
                            height: height,
                            color: border,
                            fontFamily: "system-ui",
                            fontSize: 13,
                            fontWeight: 600,
                        }}
                    >
                        {this.props.index ? props.index : ``}
                    </div>
                </div>
            )
        }

        // If it has a child layer connected
        if (React.Children.count(this.props.children) > 0) {
            // Update the Cell with cloned child elements, resetting the width and height
            Cell = (props: {
                x: number
                y: number
                index: string
                radius?: number
            }) => {
                return React.cloneElement(this.props.children[0], {
                    top: props.y,
                    left: props.x,
                    width: width,
                    height: height,
                    index: props.index,
                    radius: radius,
                })
            }
        }

        // Create grid with nested for loops
        for (var rowAmount = 0; rowAmount < row; rowAmount++) {
            for (var colAmount = 0; colAmount < col; colAmount++) {
                var x = colAmount * (width + padding)
                var y = rowAmount * (height + padding)
                array.push(
                    <Cell
                        x={x}
                        y={y}
                        index={`${colAmount}:${rowAmount}`}
                        key={`${colAmount}:${rowAmount}`}
                    />
                )
            }
        }

        // Return array
        return <div>{array}</div>
    }
}

// Default styles
const style: React.CSSProperties = {
    position: "absolute",
}