import React, { Component } from "react";
import Switch from "react-switch"
 
class SwitchWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = { checked: false }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
      this.setState(() => ({
          checked: this.props.status
      }))
  }
 
  handleChange(checked) {
    this.setState(() => ({ checked }))
    this.props.statusOnChange(checked)
  }
 
  render() {
    return (
        <Switch onChange={this.handleChange} checked={this.state.checked} />
    )
  }
}

export default SwitchWrapper