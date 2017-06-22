import * as React from 'react'

export class Test extends React.Component <{}, {}> {
    render() {
        return <h4>Today is { new Date().toLocaleString() }</h4>;
    }
}
