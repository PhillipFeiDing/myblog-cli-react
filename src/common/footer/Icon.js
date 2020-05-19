import React, { Component } from 'react'
import {
    IconWrapper,
    IconLink,
    IconImage,
} from './style'

class Icon extends Component {

    render() {
        const { to, imgURL } = this.props
        return (
            <IconWrapper>
                <IconLink href={to}>
                    <IconImage src={imgURL} alt='' />
                </IconLink>
            </IconWrapper>
        )
    }
}

export default Icon