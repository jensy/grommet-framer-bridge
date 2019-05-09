import * as React from "react"
import * as Grommet from "grommet"
import { PropertyControls, ControlType } from "framer"

export class App extends React.Component {
    render() {
        return (
            <Grommet.Box
                direction="column"
                border={{ color: "brand", size: "medium" }}
                pad="medium"
                gap="medium"
                alignContent="center"
                align="center"
                justify="center"
                fill
            >
                <Grommet.Button label="test" primary />
                <Grommet.Button label="test" primary />
                <Grommet.Button label="test" primary />
            </Grommet.Box>
        )
    }
}
