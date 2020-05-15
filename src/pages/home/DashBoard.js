import React, { Component, Fragment } from 'react'
import { actionCreators } from './store'
import { actionCreators as appActionCreators } from '../../store'
import { connect } from 'react-redux'
import {
    TitleSpan,
    TagGroup,
    TagSpan,
    ProfileImageWrapper,
    ProfileTextWrapper,
    DashBoardItemWrapper,
    DashBoardContentWrapper,
    MobileDashBoardNavBar,
    CloseTabIcon
} from './style'
import { constants as sidePanelConstants } from '../../common/sidePanel/store'

class DashBoard extends Component {

    constructor(props) {
        super(props)
        this.handleTagClick = this.handleTagClick.bind(this)
        this.outDashBoardClickHandler = this.outDashBoardClickHandler.bind(this)
    }

    componentDidMount() {
        const { updateLayout } = this.props
        updateLayout()
        window.addEventListener('resize', updateLayout)
        document.addEventListener('click', this.outDashBoardClickHandler)
    }

    componentWillUnmount() {
        const { updateLayout } = this.props
        window.removeEventListener('resize', updateLayout)
        document.removeEventListener('click', this.outDashBoardClickHandler)
    }

    handleTagClick(tagId) {
        const { setTagName, closeTagBoard } = this.props
        closeTagBoard()
        if (tagId === null) {
            setTagName(null, null)
            return
        }
        const tagList = this.props.tagList.toJS()
        const tagName = tagList.filter((item) => (item.id === tagId))[0].tagName
        setTagName(tagName, tagId)
    }

    outDashBoardClickHandler(e) {
        if (e.target.id !== sidePanelConstants.TAG_BUTTON && this.tagBoardWrapper && e.target !== this.tagBoardWrapper
            && !this.tagBoardWrapper.contains(e.target)) {
            const { closeTagBoard } = this.props
            closeTagBoard()
        }
        if (e.target.id !== sidePanelConstants.ABOUT_ME_BUTTON && this.aboutMeBoardWrapper && e.target !== this.aboutMeBoardWrapper
            && !this.aboutMeBoardWrapper.contains(e.target)) {
            const { closeAboutMeBoard } = this.props
            closeAboutMeBoard()
        }
    }

    render() {
        const tagList = this.props.tagList.toJS()
        const { currTagName, currTitleName, isMobile, showTag, showAboutMe,closeTagBoard, closeAboutMeBoard } = this.props
        return (
            <Fragment>
                <DashBoardItemWrapper
                    className={(isMobile ? 'mobile ' : 'desktop dashboard-item-wrapper ') + (showTag ? 'display' : 'hidden')}
                    ref={(el) => {this.tagBoardWrapper = el}}
                >
                    {
                        isMobile ? (
                            <MobileDashBoardNavBar>
                                <CloseTabIcon
                                    onClick={closeTagBoard}
                                />
                            </MobileDashBoardNavBar>
                        ) : null
                    }
                    <DashBoardContentWrapper className={isMobile ? 'mobile ' : 'desktop '}>
                        <TagGroup>
                            <TagSpan
                                className={currTagName === null && currTitleName === null ? 'current bold' : 'bold'}
                                onClick={() => {this.handleTagClick(null)}}
                            >
                                ALL BLOGS
                            </TagSpan>
                        </TagGroup>
                        <hr />
                        <TitleSpan className='dashboard-title-span'>FEATURED TAGS</TitleSpan>
                        <TagGroup>
                            {
                                tagList.map((item) => (
                                    <TagSpan
                                        key={'tag-' + item.id}
                                        onClick={() => {this.handleTagClick(item.id)}}
                                        className={currTagName === item.tagName ? 'current' : ''}
                                    >{item.tagName}</TagSpan>
                                ))
                            }
                        </TagGroup>
                    </DashBoardContentWrapper>
                </DashBoardItemWrapper>
                <DashBoardItemWrapper
                    className={(isMobile ? 'mobile ' : 'desktop dashboard-item-wrapper ') + (showAboutMe ? 'display' : 'hidden')}
                    ref={(el) => {this.aboutMeBoardWrapper = el}}
                >
                    {
                        isMobile ? (
                            <MobileDashBoardNavBar>
                                <CloseTabIcon
                                    onClick={closeAboutMeBoard}
                                />
                            </MobileDashBoardNavBar>
                        ) : null
                    }
                    <DashBoardContentWrapper className={isMobile ? 'mobile ' : 'desktop '}>
                        <TitleSpan className='dashboard-title-span'>ABOUT ME</TitleSpan>
                        <ProfileImageWrapper>
                            <img src='/home/profile.jpg' alt='' />
                        </ProfileImageWrapper>
                        <ProfileTextWrapper>
                            <p>Hi, I am Fei Ding (Phillip), a second-year computer science student studying at Georgia Tech with concentrations in information internetwork and intelligence. I am looking for a summer internship (2021) as a software engineer or data analyst.</p>
                            <p>I gained full stack experience in developing web and mobile applications by working on my personal and group projects where I would like to explore and teach myself new technologies in development. I am also interested in various fields in machine learning and their applications to real-world situations.</p>
                            <p>I am currently involved in undergraduate research programs. My interest lies in machine learning and their applications. I've worked closely with graduate students in developing sophisticated NLP models, and I am currently collaborating in a robotics vision lab to evaluate the effectiveness of different CV algorithms in terms of their performances in robotics tasks.</p>
                            <p>I code in Java, Python, and JavaScript most of the time. I have experiences using frameworks such as TensorFlow, and I am also teaching myself some PyTorch. I primarily use ExpressJS &amp; MongoDB or Python Flask &amp; MySQL for backend web development. I am also experienced in using jQuery or ReactJS for crafting web UIs. I regularly maintain my portfolio on a <a href='/'>blog system</a> developed and deployed by myself, which is what you are viewing now!</p>
                        </ProfileTextWrapper>
                    </DashBoardContentWrapper>
                </DashBoardItemWrapper>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    tagList: state.getIn(['home', 'tagList']),
    currTagName: state.getIn(['home', 'tagName']),
    currTitleName: state.getIn(['home', 'titleName']),
    isMobile: state.getIn(['app', 'isMobile']),
    showTag: state.getIn(['app', 'mobile', 'showTag']),
    showAboutMe: state.getIn(['app', 'mobile', 'showAboutMe']),
})

const mapDispatchToProps = (dispatch) => ({
    setTagName(tagName, tagId) {
        dispatch(actionCreators.setTagName(tagName, tagId))
    },
    updateLayout() {
        const viewportWidth = window.innerWidth
        dispatch(actionCreators.updateLayout(viewportWidth))
    },
    closeTagBoard() {
        dispatch(appActionCreators.showTagBoard(false))
    },
    closeAboutMeBoard() {
        dispatch(appActionCreators.showAboutMeBoard(false))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)