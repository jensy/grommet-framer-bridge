import * as React from "react"
import { TextArea as _TextArea } from "grommet"
import { addPropertyControls, ControlType } from "framer"

export function TextArea(props) {
    const [value, setValue] = React.useState("")

    return (
        <_TextArea
            placeholder="Type here"
            value={value}
            fill
            onChange={event => setValue(event.target.value)}
        />
    )
}

TextArea.defaultProps = {
    width: 144,
    height: 36,
}

addPropertyControls(TextArea, {})
