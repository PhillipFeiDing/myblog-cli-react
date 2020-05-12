import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    SidePanelWrapper,
    ToolsWrapper,
    MenuButton,
    ToTopButton,
    Menu,
    MenuTitle,
    MenuItem,
    TagButton,
    AboutMeButton
} from './style'
import SearchBar from './SearchBar'
import { actionCreators } from './store'
import { actionCreators as appActionCreators } from '../../store'


class SidePanel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showScroll: false,
            showMenu: false
        }
        this.bindEvents = this.bindEvents.bind(this)
        this.changeScrollTopShow = this.changeScrollTopShow.bind(this)
        this.outMenuClickHandler = this.outMenuClickHandler.bind(this)
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

    render() {
        const { showMenu } = this.state
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
                    {
                      this.state.showScroll ?
                      <ToTopButton onClick={handleScrollTop}></ToTopButton>:
                      null
                    }
                    {
                        isMobile ? (
                            <Fragment>
                                <TagButton onClick={showTag} />
                                <br />
                                <AboutMeButton onClick={showAboutMe} />
                            </Fragment>
                        ) : null
                    }
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
                                <a href={item.get('link')} key={'friendList-' + item.get('id')}>
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