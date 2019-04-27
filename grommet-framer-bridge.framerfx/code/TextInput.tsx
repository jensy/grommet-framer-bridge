import * as React from "react"
import { TextInput as _TextInput } from "grommet"
import { addPropertyControls, ControlType } from "framer"

export function TextInput(props) {
    const [value, setValue] = React.useState("")

    return (
        <_TextInput
            placeholder="Type here"
            value={value}
            onChange={event => setValue(event.target.value)}
        />
    )
}

TextInput.defaultProps = {
    width: 144,
    height: 36,
}

addPropertyControls(TextInput, {})
