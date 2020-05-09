import React, { Component } from 'react'
import {
    FooterWrapper,
    IconGroupWrapper,
    FooterNoteWrapper,
    FooterLink
} from './style'
import Icon from './Icon'
import HoverableIcon from './HoverableIcon'

const footerIcons = [
    {
        "name": "github",
        "to": "http://www.github.com/PhillipFeiDing",
        "imgURL": "common/footer/github.svg",
        "hoverable": false
    },{
        "name": "linkedin",
        "to": "https://www.linkedin.com/in/fei-phillip-ding-9a5410173/",
        "imgURL": "common/footer/linkedin.svg",
        "hoverable": false
    },{
        "name": "facebook",
        "to": "https://www.facebook.com/people/Fei-Ding/100011045418439",
        "imgURL": "common/footer/facebook.svg",
        "hoverable": false
    },{
        "name": "wechat",
        "barCodeURL": "common/footer/wechat-qr.jpg",
        "imgURL": "common/footer/wechat.svg",
        "hoverable": true
    },{
        "name": "qq",
        "barCodeURL": "common/footer/qq-qr.png",
        "imgURL": "common/footer/qq.svg",
        "hoverable": true
    }
]

class Footer extends Component {

    render() {
        return (
            <FooterWrapper>
                <IconGroupWrapper>
                    {
                        footerIcons.map((item) => (
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
                    <FooterLink href='https://reactjs.org/'>React</FooterLink>
                    &nbsp;|&nbsp;
                    <FooterLink href='https://expressjs.com/'>Express</FooterLink>
                    &nbsp;|&nbsp;
                    <FooterLink href='https://www.mongodb.com/'>MongoDB</FooterLink>
                    .<br /><br/>
                    Made by Phillip Ding © {new Date().getFullYear()}
                </FooterNoteWrapper>
            </FooterWrapper>
        )
    }
}

export default Footer