import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Console from './Console'
import {
    AdminWrapper
} from './style'

class Admin extends Component {
    
    render() {
        const { loginStatus } = this.props
        return (
            <AdminWrapper>
                {
                    loginStatus ? (
                        <Console />
                    ) : (
                        <Login />
                    )
                }
            </AdminWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['admin', 'loginStatus'])
})

export default connect(mapStateToProps, null)(Admin)