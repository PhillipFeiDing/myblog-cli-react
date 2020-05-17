import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Switch from './Switch'
import Dropdown from './Dropdown'
import ButtonGroup from './ButtonGroup'
import { PAGING_OPTIONS } from '../../pages/home/store/constants'
import {
    SettingsPanel,
    SettingsPanelTip,
    SettingsItem,
    SettingsComponentWrapper,
    AdminIcon
} from './style'
import { actionCreators as homeActionCreators } from '../../pages/home/store'
import { actionCreators as appActionCreators } from '../../store'

class Settings extends Component {

    constructor(props) {
        super(props)
        this.handleBackgroundShowChange = this.handleBackgroundShowChange.bind(this)
        this.handleBlogsPerPageChange = this.handleBlogsPerPageChange.bind(this)
        this.handleFontFamilyChange = this.handleFontFamilyChange.bind(this)
        this.handleDisplayChange = this.handleDisplayChange.bind(this)
    }

    componentDidMount() {
        const { childRef } = this.props
        childRef(this.selfRef)
    }

    componentWillUnmount() {
        const { childRef } = this.props
        childRef(null)
    }

    handleBackgroundShowChange(show) {
        this.props.setShowBackground(show)
    }

    handleBlogsPerPageChange(blogsPerPage) {
        this.props.setBlogsPerPage(blogsPerPage)
    }

    handleFontFamilyChange(font) {
        this.props.setFontFamily(font)
    }

    handleDisplayChange(display) {
        this.props.setDisplay(display)
    }

    render() {
        const { showBackground, blogsPerPage, fontFamily, display } = this.props
        return (
            <SettingsPanel ref={(el) => {this.selfRef = el}}>
                <SettingsPanelTip />
                <SettingsItem>
                    Background
                    <SettingsComponentWrapper offset={'-3px'}>
                        <Switch
                            status={showBackground}
                            statusOnChange={this.handleBackgroundShowChange}
                        />
                    </SettingsComponentWrapper>
                </SettingsItem>
                <SettingsItem>
                    Display
                    <SettingsComponentWrapper offset={'-5px'}>
                    <ButtonGroup
                        defaultValue={display}
                        options={['Dark', 'Light']}
                        statusOnChange={this.handleDisplayChange}
                    />
                    </SettingsComponentWrapper>
                </SettingsItem>
                <SettingsItem>
                    Font Family
                    <SettingsComponentWrapper offset={'-5px'}>
                        <Dropdown
                            defaultValue={fontFamily}
                            options={['Arial', 'Georgia']}
                            statusOnChange={this.handleFontFamilyChange}
                        />
                    </SettingsComponentWrapper>
                </SettingsItem>
                <SettingsItem>
                    Blogs Per Page
                    <SettingsComponentWrapper offset={'-5px'}>
                        <Dropdown
                            defaultValue={blogsPerPage}
                            options={PAGING_OPTIONS}
                            statusOnChange={this.handleBlogsPerPageChange}
                        />
                    </SettingsComponentWrapper>
                </SettingsItem>
                <SettingsItem>
                    <SettingsComponentWrapper offset={'-5px'} style={{float: 'left'}}>
                        <Link to='/admin'>
                            <AdminIcon />
                        </Link>
                    </SettingsComponentWrapper>
                    <SettingsComponentWrapper>
                        « Admin Entry
                    </SettingsComponentWrapper>
                </SettingsItem>
            </SettingsPanel>
        )
    }
}

const mapStateToProps = (state) => ({
    showBackground: state.getIn(['app', 'showBackground']),
    blogsPerPage: state.getIn(['home', 'blogsPerPage']),
    fontFamily: state.getIn(['app', 'fontFamily']),
    display: state.getIn(['app', 'display'])
})

const mapDispatchToProps = (dispatch) => ({
    setShowBackground(show) {
        dispatch(appActionCreators.showBackground(show))
    },
    setBlogsPerPage(blogsPerPage) {
        dispatch(homeActionCreators.setBlogsPerPage(blogsPerPage))
    },
    setFontFamily(font) {
        dispatch(appActionCreators.setFontFamily(font))
    },
    setDisplay(display) {
        dispatch(appActionCreators.setDisplay(display))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)