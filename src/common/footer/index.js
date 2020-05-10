import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
    FooterWrapper,
    IconGroupWrapper,
    FooterNoteWrapper,
    FooterLink
} from './style'
import Icon from './Icon'
import HoverableIcon from './HoverableIcon'

class Footer extends Component {

    componentDidMount() {
        const { getFooterIconList } = this.props
        getFooterIconList()
    }

    render() {
        const { authorName } = this.props
        const footerIconList = this.props.footerIconList.toJS()
        return (
            <FooterWrapper>
                <IconGroupWrapper>
                    {
                        footerIconList.map((item) => (
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
                    Created by {authorName} © {new Date().getFullYear()}
                </FooterNoteWrapper>
            </FooterWrapper>
        )
    }
}

export const mapStateToProps = (state) => ({
    authorName: state.getIn(['app', 'authorName']),
    footerIconList: state.getIn(['footer', 'footerIconList'])
})

export const mapDispatchToState = (dispatch) => ({
    getFooterIconList() {
        dispatch(actionCreators.getFooterIconList())
    }
})

export default connect(mapStateToProps, mapDispatchToState)(Footer)