import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
    consoleTitleStyle,
    consoleContentWrapperStyle,
    moduleStyle,
    majorModuleStyle,
    subTitleStyle,
    bottomButtonWrapperStyle
} from './style'


class EditBlog extends Component {

    constructor(props) {
        super(props)
        this.goBackToConsole = this.goBackToConsole.bind(this)
    }

    goBackToConsole() {
        this.props.clearEditBlogId()
        const interval = window.setInterval(() => {
            const blogListDOMNode = document.querySelector('#admin-blog-table-wrapper')
            if (blogListDOMNode) {
                blogListDOMNode.scrollIntoView()
                window.clearInterval(interval)
            }
        }, 50)
    }

    render() {
        const {editBlogId} = this.props
        return (
            <Fragment>
                <h2 style={consoleTitleStyle}>Admin Blog Edit</h2>
                <div style={consoleContentWrapperStyle}>
                    <div>
                        <div style={{...moduleStyle, ...majorModuleStyle}}>
                            <p style={subTitleStyle}>Blog ID: <span style={{fontWeight: 'bolder'}}>{editBlogId}</span></p>
                        </div>
                    </div>
                    <div style={bottomButtonWrapperStyle}>
                        <div style={{float: 'left'}} className="btn btn-primary" onClick={() => {this.goBackToConsole()}}>
                            Cancel
                        </div>
                        <div style={{float: 'right'}} className="btn btn-primary" onClick={() => {this.goBackToConsole()}}>
                            Submit
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    editBlogId: state.getIn(['admin', 'editBlogId'])
})

const mapDispatchToProps = (dispatch) => ({
    clearEditBlogId() {
        dispatch(actionCreators.setEditBlogId(null))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditBlog)