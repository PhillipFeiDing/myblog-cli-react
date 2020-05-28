import React, { Component, Fragment } from 'react'
import RcWangEditor from 'rc-wang-editor'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { actionCreators as homeActionCreators} from '../home/store'
import { actionCreators as detailActionCreators} from '../detail/store'
import {
    consoleTitleStyle,
    consoleContentWrapperStyle,
    moduleStyle,
    majorModuleStyle,
    subTitleStyle,
    bottomButtonWrapperStyle,
    tagSelectStyle
} from './style'
import { stampToDateFormat } from '../../common/util/date'


class EditBlog extends Component {

    constructor(props) {
        super(props)
        this.goBackToConsole = this.goBackToConsole.bind(this)
        this.handleCancelClick = this.handleCancelClick.bind(this)
        this.handleSubmitClick = this.handleSubmitClick.bind(this)
    }

    componentDidMount() {
        const { editBlogId, getBlogById, tagList, getTagList } = this.props
        tagList || getTagList()
        getBlogById(editBlogId)
    }

    handleCancelClick() {
        if (window.confirm('Are you sure to go back without saving changes?')) {
            this.goBackToConsole()
        }
    }

    handleSubmitClick() {
        const submit = {
            id: this.props.editBlogId,
            title: this.titleInputDOMRef.value,
            time: (new Date(this.timeInputDOMRef.value)).getTime(),
            imageURL: this.imageURLInputDOMRef.value,
            tagList: Array.from(document.querySelectorAll('.tag-input')).filter((item) => (item.checked)).map((item) => (parseInt(item.value))),
            exerpt: this.exerptInputDOMRef.value,
            content: this.richTextEditorDOMRef.state.html,
            channel: (document.querySelector('input[name="channel-select"]:checked') || {}).value || 'en'
        }
        this.props.updateBlog(submit, this.goBackToConsole)
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
        const { editBlogId } = this.props
        const tagList = this.props.tagList === null ? [] : this.props.tagList.toJS()
        const blogContents = this.props.blogContents.toJS()
        const blogContent = blogContents[editBlogId]
        if (!blogContent) {
            return null
        }

        const defaultDateTime = stampToDateFormat(blogContent.time, 'YYYY-MM-DDTHH:mm')
        return (
            <Fragment>
                <h2 style={consoleTitleStyle}>Admin Blog Edit</h2>
                <div style={consoleContentWrapperStyle}>
                    <div>
                        <div style={{...moduleStyle, ...majorModuleStyle}}>
                            <p style={subTitleStyle}>ID: <span style={{fontWeight: 'bolder'}}>{editBlogId}</span></p>
                        </div>
                    </div>
                    <div>
                        <div style={{...moduleStyle, ...majorModuleStyle}}>
                            <p style={subTitleStyle}>Basics</p>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '60px'}}>Title</span>
                                </div>
                                <input type="text" className="form-control" defaultValue={blogContent.title} ref={(el) => {this.titleInputDOMRef = el}}/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '60px'}}>Date</span>
                                </div>
                                <input type="datetime-local" className="form-control" defaultValue={defaultDateTime} ref={(el) => {this.timeInputDOMRef = el}}/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Image URL</span>
                                </div>
                                <input placeholder='Leave empty if not used.' type="text" className="form-control" defaultValue={blogContent.imageURL} ref={(el) => {this.imageURLInputDOMRef = el}}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{...moduleStyle, ...majorModuleStyle}}>
                            <p style={subTitleStyle}>Channel</p>
                            <div>
                                <div className="form-check form-check-inline" style={{display: 'block'}}>
                                    {
                                        [{display: 'English', value: 'en'}, {display: '中文', value: 'cn'}].map((item) => (
                                            <span style={{whiteSpace: 'nowrap'}} key={'channel-key-' + item.value}>
                                                <input
                                                    style={tagSelectStyle} className="form-check-input channel-input" type="radio"
                                                    id={'channel-' + item.value} value={item.value}
                                                    name='channel-select'
                                                />
                                                <label 
                                                    style={{marginRight: '20px'}}
                                                    className="form-check-label"
                                                    htmlFor={'channel-' + item.value}
                                                >
                                                    {item.display}
                                                </label>
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                            <hr />
                            <p style={subTitleStyle}>Tags</p>
                            <div>
                                <div className="form-check form-check-inline" style={{display: 'block'}}>
                                    {
                                        tagList.map((item) => (
                                            <span style={{whiteSpace: 'nowrap'}} key={'tag-' + item.id}>
                                                <input
                                                    style={tagSelectStyle} className="form-check-input tag-input" type="checkbox"
                                                    id={'tag-' + item.id} value={item.id}
                                                />
                                                <label 
                                                    style={{marginRight: '20px'}}
                                                    className="form-check-label"
                                                    htmlFor={'tag-' + item.id}
                                                >
                                                    {item.tagName}
                                                </label>
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{...moduleStyle, ...majorModuleStyle}}>
                            <p style={subTitleStyle}>Exerpt</p>
                            <div className="form-group">
                                <textarea className="form-control" rows="5" defaultValue={blogContent.exerpt} ref={(el) => {this.exerptInputDOMRef = el}}></textarea>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{...moduleStyle, ...majorModuleStyle, ...{overflowX: 'auto', minHeight: '400px'}}}>
                            <p style={subTitleStyle}>Content</p>
                            <div style={{background: '#fff', minWidth: '750px'}}>
                                <RcWangEditor 
                                    defaultValue={blogContent.content}
                                    ref={(el => {this.richTextEditorDOMRef = el})}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={bottomButtonWrapperStyle}>
                        <div style={{float: 'left'}} className="btn btn-primary" onClick={this.handleCancelClick}>
                            Cancel
                        </div>
                        <div style={{float: 'right'}} className="btn btn-primary" onClick={this.handleSubmitClick}>
                            Submit
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    componentDidUpdate() {
        const { editBlogId } = this.props
        const blogContents = this.props.blogContents.toJS()
        const blogContent = blogContents[editBlogId]
        if (!blogContent) {
            return
        }
        const tagList = blogContent.tagList
        document.querySelectorAll('.tag-input').forEach((item) => {
            if (tagList.indexOf(parseInt(item.value)) !== -1) {
                item.checked = true
            } 
        })
        document.querySelectorAll('.channel-input').forEach((item) => {
            if (blogContent.channel === item.value) {
                item.checked = true
            }
        })
        document.querySelector('.w-e-text-container').style.height = '70vh'
    }
}

const mapStateToProps = (state) => ({
    editBlogId: state.getIn(['admin', 'editBlogId']),
    tagList: state.getIn(['home', 'tagList']),
    blogContents: state.getIn(['detail', 'blogContents'])
})

const mapDispatchToProps = (dispatch) => ({
    clearEditBlogId() {
        dispatch(actionCreators.setEditBlogId(null))
    },
    getTagList() {
        dispatch(homeActionCreators.getTagList())
    },
    getBlogById(id) {
        dispatch(detailActionCreators.getBlogById(id))
    },
    updateBlog(submit, callback) {
        dispatch(actionCreators.updateBlog(submit, callback))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditBlog)