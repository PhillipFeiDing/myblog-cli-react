import React, { Component } from 'react'
import {
    SidePanelWrapper,
    ToolsWrapper,
    MenuButton,
    ToTopButton,
    Menu
} from './style'
import SearchBar from './SearchBar'

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
    }

    componentWillUnmount() {
        this.bindEvents(false)
    }

    bindEvents(mount) {
        if (mount) {
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
                </ToolsWrapper>
                <Menu
                    ref={(el) => {this.menuDOMNode = el}}
                    onBlur={() => {this.setState(() => ({showMenu: false}))}}
                    className={ showMenu? '' : 'hidden'}
                >
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

export default SidePanel