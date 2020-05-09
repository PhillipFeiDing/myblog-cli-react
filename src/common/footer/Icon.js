import React, { Component } from 'react'
import {
    IconWrapper,
    IconLink,
    IconImage,
} from './style'

class Icon extends Component {

    render() {
        const { to, name, imgURL } = this.props
        return (
            <IconWrapper>
                <IconLink href={to} key={name + '-icon'}>
                    <IconImage src={imgURL} alt='' />
                </IconLink>
            </IconWrapper>
        )
    }
}

export default Icon