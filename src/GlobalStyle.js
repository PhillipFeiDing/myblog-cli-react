import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
    GlobalStylePlaceholder,
    GlobalFont,
    DarkMode
} from './style'

class GlobalStyle extends Component {

    render() {
        return (
            <Fragment>
                <GlobalStylePlaceholder/>
                {
                    this.props.fontFamily === 'Georgia' ? <GlobalFont /> : null
                }
                {
                    this.props.display === 'Dark' ? <DarkMode /> : null
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    fontFamily: state.getIn(['app', 'fontFamily']),
    display: state.getIn(['app', 'display'])
})

export default connect(mapStateToProps)(GlobalStyle)