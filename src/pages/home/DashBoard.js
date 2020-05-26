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
import Loading from '../../common/loading'
import { INTRODUCTION } from '../../constants'

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
        document.querySelector('#page-header-display-wrapper').scrollIntoView({behavior: 'smooth'})
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
        const showTagLoading = this.props.tagList === null
        const tagList = this.props.tagList === null ? [] : this.props.tagList.toJS()
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
                                showTagLoading ? (
                                    <Loading />
                                ) : (
                                    tagList.map((item) => (
                                        <TagSpan
                                            key={'tag-' + item.id}
                                            onClick={() => {this.handleTagClick(item.id)}}
                                            className={currTagName === item.tagName ? 'current' : ''}
                                            id={`home-tag-${item.id}`}
                                        >{item.tagName}</TagSpan>
                                    ))
                                )
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
                        <ProfileTextWrapper dangerouslySetInnerHTML={{__html: INTRODUCTION}}>
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