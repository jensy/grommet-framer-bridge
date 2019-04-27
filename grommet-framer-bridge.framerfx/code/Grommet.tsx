import * as React from "react"
import { Grommet as _Grommet } from "grommet"
import { hpe } from "./Theme"
import { Frame, PropertyControls, ControlType } from "framer"

export class Grommet extends React.Component {
    render() {
        return <_Grommet theme={hpe}>{this.props.children}</_Grommet>
    }
}
