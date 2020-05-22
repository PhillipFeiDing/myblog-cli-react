import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Console from './Console'
import EditBlog from './EditBlog'
import {
    AdminWrapper
} from './style'

class Admin extends Component {
    
    render() {
        const { loginStatus, editBlogId } = this.props
        return (
            <AdminWrapper>
                {
                    loginStatus ? (
                        editBlogId !== null ? (
                            <EditBlog />
                        ) : (
                            <Console />
                        )
                    ) : (
                        <Login />
                    )
                }
            </AdminWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['admin', 'loginStatus']),
    editBlogId: state.getIn(['admin', 'editBlogId'])
})

export default connect(mapStateToProps, null)(Admin)