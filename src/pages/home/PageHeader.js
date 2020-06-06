import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
    PageHeaderImage,
    PageHeaderDisplayWrapper,
    PageHeaderDisplay,
    PageHeaderImageTitle,
    TitleLine,
    AuthorAvatarImage,
    AuthorIntroduction,
} from './style'
import Typing from './Typing'
import TopicDisplay from './TopicDisplay.js'
import { AUTHOR, MOTTO, TYPING_LEFT, TYPING_RIGHT, TYPING_PARAMS } from '../../constants'

class PageHeader extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pageLoaded: false
        }
    }

    componentDidMount() {
        /** 
         * Create one-time animation that will execute after the component is mounted.
         * Must be asynchronous even though animation delay is 0; otherwise, the animation has no effect!
         */
        const animationDelay = 0
        setTimeout(
            () => {
                this.setState(() => ({
                    pageLoaded: true
                }))
            }, animationDelay
        )
    }

    render() {
        const { display } = this.props
        return (
            <Fragment>
                <PageHeaderImage imgURL={'/home/page_background_' + (display === 'Light' ? 'light' : 'dark') + '.jpg'}/>
                <PageHeaderImageTitle>
                    <TitleLine paddingLeft='30vw' className='italic'>Welcome to {AUTHOR}'s</TitleLine>
                    <TitleLine paddingLeft='35vw' className='italic'>Personal Website &amp; Blog!</TitleLine>
                    <TitleLine paddingLeft='40vw' className='italic cursive'>{MOTTO}</TitleLine>
                </PageHeaderImageTitle>
                <PageHeaderDisplayWrapper id='page-header-display-wrapper' ref={(el) => {this.pageHeaderDisplayWrapperDOMRef = el}}>
                    <PageHeaderDisplay className={this.state.pageLoaded ? 'animation-after' : 'animation-before'}>
                        <AuthorAvatarImage>
                            <img src='/home/avatar.jpg' alt='' />
                        </AuthorAvatarImage>
                        <AuthorIntroduction id='author-introduction'>
                            {TYPING_LEFT}
                                <Typing
                                    params={TYPING_PARAMS}
                                />
                            {TYPING_RIGHT}
                        </AuthorIntroduction>
                        <TopicDisplay />
                    </PageHeaderDisplay>
                </PageHeaderDisplayWrapper>
            </Fragment>
        )
    }
    
    componentDidUpdate(prevProps) {
        const { showTagBoard } = this.props
        if (showTagBoard) {
            this.pageHeaderDisplayWrapperDOMRef.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }
}

const mapStateToProps = (state) => ({
    tagName: state.getIn(['home', 'tagName']),
    titleName: state.getIn(['home', 'titleName']),
    showTagBoard: state.getIn(['app', 'mobile', 'showTag']),
    display: state.getIn(['app', 'display'])
}) 

export default connect(mapStateToProps, null)(PageHeader)