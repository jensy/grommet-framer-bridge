import * as React from "react"
import { Select as _Select } from "grommet"
import { addPropertyControls, ControlType } from "framer"

export function Select(props) {
    const [value, setValue] = React.useState("")
    const optionsArray = props.options.split(",")

    return (
        <_Select
            placeholder="Select option"
            options={optionsArray}
            value={value}
            multiple={true}
            onChange={({ option }) => setValue(option)}
            onSearch={query => {
                this.setState({ searching: true }, () => {})
            }}
        />
    )
}

Select.defaultProps = {
    options: "Apple, Banana, Orange",
    search: false,
    width: 144,
    height: 36,
}

addPropertyControls(Select, {
    options: { type: ControlType.String, title: "Options" },
    search: { type: ControlType.Boolean, title: "Search" },
})
