import React, { Component } from "react"
import {
    DropdownButtonGroupWrapper,
    DropdownButton,
    DropdownMenu,
    DropdownItem
} from './style'
 
class DropdownWrapper extends Component {
  constructor() {
    super()
    this.state = {
        show: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.outMenuClickHandler = this.outMenuClickHandler.bind(this)
  }

  componentDidMount() {
    this.setState({value: this.props.defaultValue})
  }
 
  handleChange(value) {
    this.setState({value: value})
    this.props.statusOnChange(value)
  }

  closeMenu() {
      this.setState(() => ({show: false}))
      document.removeEventListener('click', this.outMenuClickHandler)
  }

  outMenuClickHandler(e) {
    if (
        this.menuDOMRef && e.target !== this.menuDOMRef && !this.menuDOMRef.contains(e.target)
    ) {
        this.closeMenu()
    }
  }
 
  render() {
    return (
        <DropdownButtonGroupWrapper>
            <DropdownButton
                onClick={() => {
                    if (!this.state.show) {
                        this.setState(() => ({show: true}))
                        document.addEventListener('click', this.outMenuClickHandler)
                    }
                }}
            >
                {this.state.value}
            </DropdownButton>
            <DropdownMenu
                className = {this.state.show ? 'showMenu' : ''}
            >
                {
                    this.props.options.map((item) => (
                        <DropdownItem
                            key={'dropdown-option-' + item}
                            onClick={() => {
                                this.handleChange(item)
                                this.closeMenu()
                            }}
                            ref={(el) => {this.menuDOMRef = el}}
                        >
                            {item}
                        </DropdownItem>
                    ))
                }
            </DropdownMenu>
        </DropdownButtonGroupWrapper>
    )
  }
}

export default DropdownWrapper