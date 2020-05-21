import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreators as homeActionCreators } from '../home/store'
import { actionCreators } from './store'
import {
    consoleTitleStyle,
    consoleContentWrapperStyle,
    moduleStyle,
    minorModuleStyle,
    subTitleStyle,
    minorModuleInputButtonStyle,
    minorModuleListStyle,
    minorModuleListItemSpanStyle
} from './style'
import { Link } from 'react-router-dom'

class Console extends Component {

    constructor(props) {
        super(props)
        this.handleTagListAddButtonClick = this.handleTagListAddButtonClick.bind(this)
        this.handleTagDeleteButtonClick = this.handleTagDeleteButtonClick.bind(this)
    }

    componentDidMount() {
        const { tagList, getTagList } = this.props
        tagList || getTagList()
    }

    handleTagListAddButtonClick() {
        if (this.tagInputDOMRef) {
            const tagName = this.tagInputDOMRef.value
            if (tagName !== '') {
                this.props.addTag(tagName)
                this.tagInputDOMRef.value = ''
            }
        }
    }

    handleTagDeleteButtonClick(tagId) {
        if (tagId) {
            this.props.deleteTag(tagId)
        }
    }

    handleTagUpdateClick(tagId, tagName) {
        if (tagId && tagName) {
            const newTagName = window.prompt(`Enter new tag name for (${tagId}, ${tagName})`)
            console.log(newTagName)
            if (newTagName) {
                this.props.updateTag(tagId, newTagName)
            }
        }
    }

    render() {

        const tagList = this.props.tagList === null ? [] : this.props.tagList.toJS()

        return (
            <Fragment>
                <h2 style={consoleTitleStyle}>Admin Console</h2>
                <div style={consoleContentWrapperStyle}>
                    <div style={{...moduleStyle, ...minorModuleStyle}}>
                        <p style={subTitleStyle}>Tags</p>
                        <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">New</span>
                            </div>
                            <input type="text" className="form-control" ref={(el) => {this.tagInputDOMRef = el}}/>
                            <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                style={minorModuleInputButtonStyle}
                                onClick={this.handleTagListAddButtonClick}
                            >Add</button>
                        </div>
                        <div style={minorModuleListStyle}>
                            <ul className="list-group">
                                {
                                    tagList.map((item) => (
                                        <li key={'tag-' + item.id} className="list-group-item d-flex justify-content-between align-items-center py-1">
                                            <span
                                                onClick={() => {this.handleTagUpdateClick(item.id, item.tagName)}}
                                            >
                                                {item.tagName}
                                            </span>
                                            <span
                                                className="badge badge-danger badge-pill" 
                                                style={minorModuleListItemSpanStyle}
                                                onClick={() => {this.handleTagDeleteButtonClick(item.id)}}
                                            >
                                                <img src='/admin/delete.svg' alt='' style={{width: '100%'}}/>
                                            </span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div style={{...moduleStyle, ...minorModuleStyle}}>
                        <p style={subTitleStyle}>Friends</p>
                    </div>
                </div>
                <div style={{textAlign: 'center'}}>
                    <Link style={{margin: '0 auto'}} to='/'>
                        <div className="btn btn-primary">
                            Preview
                        </div>
                    </Link>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    tagList: state.getIn(['home', 'tagList'])
})

const mapDispatchToProps = (dispatch) => ({
    getTagList() {
        dispatch(homeActionCreators.getTagList())
    },
    addTag(tagName) {
        dispatch(actionCreators.addTag(tagName))
    },
    deleteTag(tagId) {
        dispatch(actionCreators.deleteTag(tagId))
    },
    updateTag(tagId, newTagName) {
        dispatch(actionCreators.updateTag(tagId, newTagName))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Console)