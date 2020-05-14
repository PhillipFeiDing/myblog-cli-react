import React, { Component } from 'react'
import {
    ButtonGroup,
    ButtonGroupButton
} from './style'

class ButtonGroupWrapper extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: this.props.defaultValue
        }
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleButtonClick(value) {
        this.setState(() => ({value}))
        this.props.statusOnChange(value)
    }

    render() {
        const { options } = this.props
        return (
            <ButtonGroup>
                {
                    options.map((item, index) => (
                        <ButtonGroupButton
                            key={'button-group-' + item + '-' + index}
                            className={item === this.state.value ? 'btn btn-secondary active' : 'btn btn-secondary inactive'}
                            onClick={() => {this.handleButtonClick(item)}}
                        >
                            {item}
                        </ButtonGroupButton>
                    ))
                }
            </ButtonGroup>
        )
    }
}

export default ButtonGroupWrapper