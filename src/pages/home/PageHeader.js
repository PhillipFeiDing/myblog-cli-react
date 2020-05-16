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

const typingStrings = [
    "I'm Fei (Phillip). Glad to meet you here",
    "I study at Georgia Tech and major in CS",
    "I enjoy doing web dev, big data, and ML",
    "I love cycling, badminton, and movies"
]

const typingParams = {
    strings: typingStrings,
    typeSpeed: 30,
    backSpeed: 20,
    startDelay: 25,
    showCursor: true,
    shuffle: false,
    loop:true
}

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
        return (
            <Fragment>
                <PageHeaderImage imgURL='/home/page_background.jpg'/>
                <PageHeaderImageTitle>
                    <TitleLine paddingLeft='30vw' className='italic'>Welcome to Phillip Ding's</TitleLine>
                    <TitleLine paddingLeft='35vw' className='italic'>Personal Website &amp; Blog!</TitleLine>
                    <TitleLine paddingLeft='40vw' className='italic cursive'>-- Stay hungry, stay foolish</TitleLine>
                </PageHeaderImageTitle>
                <PageHeaderDisplayWrapper id='page-header-display-wrapper' ref={(el) => {this.pageHeaderDisplayWrapperDOMRef = el}}>
                    <PageHeaderDisplay className={this.state.pageLoaded ? 'animation-after' : 'animation-before'}>
                        <AuthorAvatarImage>
                            <img src='/home/avatar.jpg' alt='' />
                        </AuthorAvatarImage>
                        <AuthorIntroduction id='author-introduction'>
                            Hi,
                                <Typing
                                    params={typingParams}
                                />
                            !
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
    showTagBoard: state.getIn(['app', 'mobile', 'showTag'])
}) 

export default connect(mapStateToProps, null)(PageHeader)