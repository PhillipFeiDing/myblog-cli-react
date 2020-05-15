import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    SidePanelWrapper,
    ToolsWrapper,
    MenuButton,
    HomeButton,
    ToTopButton,
    Menu,
    MenuTitle,
    MenuItem,
    TagButton,
    CVButton,
    AboutMeButton,
    SettingsBox,
    SettingsButton
} from './style'
import SearchBar from './SearchBar'
import Settings from './Settings'
import { actionCreators } from './store'
import { actionCreators as appActionCreators } from '../../store'
import { CV_URL } from '../../constants'


class SidePanel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showScroll: false,
            showMenu: false,
            showSettings: false
        }
        this.bindEvents = this.bindEvents.bind(this)
        this.changeScrollTopShow = this.changeScrollTopShow.bind(this)
        this.outMenuClickHandler = this.outMenuClickHandler.bind(this)
        this.outPanelClickHandler = this.outPanelClickHandler.bind(this)
        this.testURL = this.testURL.bind(this)
    }

    componentDidMount() {
        this.bindEvents(true)
        this.props.getTopicList()
        this.props.getFriendList()
    }

    componentWillUnmount() {
        this.bindEvents(false)
    }

    bindEvents(isMounting) {
        if (isMounting) {
            window.addEventListener('scroll', this.changeScrollTopShow)
        } else {
            window.removeEventListener('scroll', this.changeScrollTopShow)
        }
    }

    changeScrollTopShow() {
        const showScrollTrigger = 300
        let newShowScroll = false
        if (document.documentElement.scrollTop > showScrollTrigger) {
            newShowScroll = true
        }
        this.setState(() => ({
            showScroll: newShowScroll
        }))
    }

    outMenuClickHandler(e) {
        if (this.menuDOMNode && e.target !== this.menuDOMNode && !this.menuDOMNode.contains(e.target)) {
            this.setState(() => ({showMenu: false}))
            document.removeEventListener('click', this.outMenuClickHandler)
        }
    }

    outPanelClickHandler(e) {
        if (this.settingsButtonDOMRef && e.target !== this.settingsButtonDOMRef && !this.settingsButtonDOMRef.contains(e.target)
        && this.settingsPanelDOMRef && e.target !== this.settingsPanelDOMRef && !this.settingsPanelDOMRef.contains(e.target)) {
            this.setState(() => ({showSettings: false}))
            document.removeEventListener('click', this.outPanelClickHandler)
        }
    }

    testURL(url) {
        return url === '/' || url.indexOf('home') !== -1 || url.indexOf('index') !== -1
    }

    render() {
        const { showMenu, showSettings } = this.state
        const { topicList, friendList, isMobile, showTag, showAboutMe } = this.props
        return (
            <SidePanelWrapper>
                <ToolsWrapper>
                    <MenuButton
                        onClick={() => {
                            this.setState(() => ({showMenu: true}));
                            document.addEventListener('click', this.outMenuClickHandler)
                        }}
                    >
                        MENU
                    </MenuButton>
                    <br />
                    <SearchBar />
                    <Link to='/'>
                        <HomeButton />
                    </Link>
                    <br />
                    {
                      this.state.showScroll ?
                      <ToTopButton onClick={handleScrollTop}></ToTopButton>:
                      null
                    }
                    {
                        isMobile && this.testURL(window.location.pathname) ? (
                            <Fragment>
                                <TagButton onClick={showTag} />
                                <br />
                                <AboutMeButton onClick={showAboutMe} />
                                <br />
                            </Fragment>
                        ) : null
                    }
                    <a href={CV_URL} rel='noopener noreferrer' target='_blank'>
                        <CVButton />
                    </a>
                    <br />
                    <SettingsBox>
                        <SettingsButton
                            onClick={() => {
                                this.setState(() => ({showSettings: true}))
                                document.addEventListener('click', this.outPanelClickHandler)
                            }}
                            ref={(el) => {this.settingsButtonDOMRef = el}}
                        />
                        { showSettings ? <Settings childRef={(el) => {this.settingsPanelDOMRef = el}} /> : null }
                    </SettingsBox>
                </ToolsWrapper>
                <Menu
                    ref={(el) => {this.menuDOMNode = el}}
                    onClick={() => {this.setState(() => ({showMenu: true}))}}
                    className={ showMenu? '' : 'hidden'}
                >
                    <MenuTitle>Topics</MenuTitle>
                    {
                        topicList.map((item) => {
                            return (
                                <Link to={item.get('link')} key={'topicList-' + item.get('id')}>
                                    <MenuItem>{item.get('itemname')}</MenuItem>
                                </Link>
                            )
                        })
                    }
                    <hr />
                    <MenuTitle>Friends</MenuTitle>
                    {
                        friendList.map((item) => {
                            return (
                                <a href={item.get('link')} key={'friendList-' + item.get('id')} rel='noopener noreferrer' target='_blank'>
                                    <MenuItem>{item.get('itemname')}</MenuItem>
                                </a>
                            )
                        })
                    }
                </Menu>
            </SidePanelWrapper>
        )
    }
}

const handleScrollTop = () => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
}

const mapStateToProps = (state) => ({
    topicList: state.getIn(['sidePanel', 'topicList']),
    friendList: state.getIn(['sidePanel', 'friendList']),
    isMobile: state.getIn(['app', 'isMobile'])
})

const mapDispatchToProps = (dispatch) => ({
    getTopicList() {
        dispatch(actionCreators.getTopicList())
    },
    getFriendList() {
        dispatch(actionCreators.getFriendList())
    },
    showTag() {
        dispatch(appActionCreators.showTagBoard(true))
    },
    showAboutMe() {
        dispatch(appActionCreators.showAboutMeBoard(true))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel)