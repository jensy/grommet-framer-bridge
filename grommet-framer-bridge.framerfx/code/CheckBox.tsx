import * as React from "react"
import { CheckBox as _CheckBox } from "grommet"
import { addPropertyControls, ControlType } from "framer"

export function CheckBox(props) {
    const [checked, setChecked] = React.useState(true)

    return (
        <_CheckBox
            checked={checked}
            label={props.label}
            toggle={props.toggle2}
            reverse={props.reverse}
            onChange={event => setChecked(event.target.checked)}
        />
    )
}

CheckBox.defaultProps = {
    label: "Hello World!",
    toggle2: false,
    revese: false,
    width: 144,
    height: 24,
}

addPropertyControls(CheckBox, {
    label: { type: ControlType.String, title: "Label" },
    toggle2: { type: ControlType.Boolean, title: "Toggle" },
    reverse: { type: ControlType.Boolean, title: "Reverse" },
})
