import React, { Component } from 'react'
import Typed from 'typed.js'

class Typing extends Component {

    componentDidMount() {
        this.typed = new Typed(this.el, this.props.params)
    }

    componentWillUnmount() {
        this.typed.destroy()
    }

    render() {
        return (
            <span ref={(el) => {this.el = el}} />
        )
    }
}

export default Typing