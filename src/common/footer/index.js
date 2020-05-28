import React, { Component } from 'react'
import {
    FooterWrapper,
    IconGroupWrapper,
    FooterNoteWrapper,
    FooterLink
} from './style'
import Icon from './Icon'
import HoverableIcon from './HoverableIcon'
import { AUTHOR, FOOTER_LIST } from '../../constants'

class Footer extends Component {

    render() {
        const initialTemplate = (letter) => (
            <span style={{color: '#ff0', fontWeight: 'bolder'}}>{letter}</span>
        )
        return (
            <FooterWrapper>
                <IconGroupWrapper>
                    {
                        FOOTER_LIST.map((item) => (
                            item.hoverable ? (
                                <HoverableIcon key={item.name + '-icon'} imgURL={item.imgURL} barCodeURL={item.barCodeURL}/>
                            ):(
                                <Icon key={item.name + '-icon'} to={item.to} imgURL={item.imgURL} />
                            )
                        ))
                    }
                </IconGroupWrapper>
                <FooterNoteWrapper>
                    Built with&nbsp;
                    <FooterLink href='https://www.mongodb.com/'>{initialTemplate('M')}ongoDB</FooterLink>
                    &nbsp;|&nbsp;
                    <FooterLink href='https://expressjs.com/'>{initialTemplate('E')}xpress</FooterLink>
                    &nbsp;|&nbsp;
                    <FooterLink href='https://reactjs.org/'>{initialTemplate('R')}eact</FooterLink>
                    &nbsp;|&nbsp;
                    <FooterLink href='https://nodejs.org/en/'>{initialTemplate('N')}ode</FooterLink>
                    .<br /> <br />
                    Created by {AUTHOR} © {new Date().getFullYear()}
                </FooterNoteWrapper>
            </FooterWrapper>
        )
    }
}

export default Footer