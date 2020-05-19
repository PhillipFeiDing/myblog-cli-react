import React, { Component } from 'react'
import {
    IconWrapper,
    IconLink,
    IconImage,
    BarCodeImage
} from './style'

class HoverableIcon extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showBarCode: false
        }
    }

    render() {
        const { imgURL, barCodeURL } = this.props
        const { showBarCode } = this.state
        return (
            <IconWrapper>
                <IconLink>
                    <IconImage
                        src={imgURL} alt=''
                        onMouseEnter={() => {this.setState(() => ({showBarCode: true}))}}
                        onMouseLeave={() => {this.setState(() => ({showBarCode: false}))}}
                    />
                </IconLink>
                <BarCodeImage
                    src={barCodeURL}
                    className={showBarCode ? 'display' : 'hidden'}
                />
            </IconWrapper>
        )
    }
}

export default HoverableIcon