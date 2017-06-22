import * as React from 'react'
import { Test } from "./test"

export class App extends React.Component <{}, {}> {
    render() {
        return  <div>
                    <h2>HI</h2>
                    <Test />
                </div>
    }
}
