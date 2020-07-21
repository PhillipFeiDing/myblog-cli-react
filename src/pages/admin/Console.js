import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreators as homeActionCreators } from '../home/store'
import { actionCreators as sidePanelActionCreators } from '../../common/sidePanel/store'
import { actionCreators } from './store'
import {
    consoleTitleStyle,
    consoleContentWrapperStyle,
    moduleStyle,
    minorModuleStyle,
    majorModuleStyle,
    subTitleStyle,
    minorModuleInputButtonStyle,
    minorModuleListStyle,
    minorModuleListItemContentSpanStyle,
    minorModuleListItemIconSpanStyle,
    bottomButtonWrapperStyle,
    tableHeaderStyle
} from './style'
import { stampToDateShort } from '../../common/util/date'
import { Link } from 'react-router-dom'

class Console extends Component {

    constructor(props) {
        super(props)
        this.handleTagListAddButtonClick = this.handleTagListAddButtonClick.bind(this)
        this.handleTagDeleteButtonClick = this.handleTagDeleteButtonClick.bind(this)
        this.handleTagUpdateClick = this.handleTagUpdateClick.bind(this)
        this.handleFriendListAddButtonClick = this.handleFriendListAddButtonClick.bind(this)
        this.handleFriendDeleteButtonClick = this.handleFriendDeleteButtonClick.bind(this)
        this.handlePinnedBlogAddButtonClick = this.handlePinnedBlogAddButtonClick.bind(this)
        this.handlePinnedDeleteButtonClick = this.handlePinnedDeleteButtonClick.bind(this)
        this.handlePinnedTopicNameUpdateClick = this.handlePinnedTopicNameUpdateClick.bind(this)
        this.handlePinnedBlogIdUpdateClick = this.handlePinnedBlogIdUpdateClick.bind(this)
        this.isValidBlogId = this.isValidBlogId.bind(this)
        this.handleBlogDeleteClick = this.handleBlogDeleteClick.bind(this)
        this.handleBlogEditClick = this.handleBlogEditClick.bind(this)
        this.goBackToHome = this.goBackToHome.bind(this)
    }

    componentDidMount() {
        const { tagList, getTagList, friendList, getFriendList, getBlogList, pinnedList, getPinnedList } = this.props
        tagList || getTagList()
        friendList || getFriendList()
        // getBlogList() must be executed no matter what because user may come from EditBlog
        getBlogList()
        pinnedList || getPinnedList()
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

    handleTagDeleteButtonClick(tagId, tagName) {
        if (window.confirm(`Are you sure to delete tag (${tagId}, ${tagName})?`)) {
            this.props.deleteTag(tagId)
        }
    }

    handleTagUpdateClick(tagId, tagName) {
        const newTagName = window.prompt(`Enter new tag name for (${tagId}, ${tagName})`)
        if (newTagName) {
            this.props.updateTag(tagId, newTagName)
        }
    }

    handleFriendListAddButtonClick() {
        if (this.friendNameInputDOMRef && this.friendURLInputDOMRef) {
            const friendName = this.friendNameInputDOMRef.value
            const link = this.friendURLInputDOMRef.value
            if (friendName !== '' && link !== '') {
                this.props.addFriend(friendName, link)
                this.friendNameInputDOMRef.value = ''
                this.friendURLInputDOMRef.value = ''
            }
        }
    }

    handleFriendDeleteButtonClick(friendId, friendName, link) {
        if (window.confirm(`Are you sure to delete friend (${friendId}, ${friendName}, ${link})?`)) {
            this.props.deleteFriend(friendId)
        }
    }

    handleFriendNameUpdateClick(friendId, friendName, link) {
        const newFriendName = window.prompt(`Enter new name for (${friendId}, ${friendName}, ${link})`)
        if (newFriendName) {
            this.props.updateFriend(friendId, newFriendName, link)
        }
    }

    handleFriendURLUpdateClick(friendId, friendName, link) {
        const newLink = window.prompt(`Enter new URL for (${friendId}, ${friendName}, ${link})`)
        if (newLink) {
            this.props.updateFriend(friendId, friendName, newLink)
        }
    }

    handlePinnedBlogAddButtonClick() {
        if (this.pinnedBlogIdInputDOMRef && this.pinnedBlogTopicInputDOMRef) {
            const blogId = this.pinnedBlogIdInputDOMRef.value
            const blogTopic = this.pinnedBlogTopicInputDOMRef.value
            if (blogId !== '' && blogTopic !== '' && this.isValidBlogId(blogId)) {
                this.props.addPinned(parseInt(blogId), blogTopic)
                this.pinnedBlogIdInputDOMRef.value = ''
                this.pinnedBlogTopicInputDOMRef.value = ''
            } else {
                window.alert(`"${blogId}" is not a valid blog ID, or blog topic is empty.`)
            }
        }
    }

    handlePinnedDeleteButtonClick(pinnedId, blogId, topicName) {
        if (window.confirm(`Are you sure to delete pinned (${pinnedId}, ${blogId}, ${topicName})?`)) {
            this.props.deletePinned(pinnedId)
        }
    }

    handlePinnedBlogIdUpdateClick(pinnedId, blogId, topicName) {
        const newBlogId = window.prompt(`Enter new Blog ID for (${pinnedId}, ${blogId}, ${topicName})`)
        if (newBlogId && this.isValidBlogId(newBlogId)) {
            this.props.updatePinned(pinnedId, parseInt(newBlogId), topicName)
        } else {
            window.alert(`"${newBlogId}" is not a valid blog ID.`)
        }
    }

    handlePinnedTopicNameUpdateClick(pinnedId, blogId, topicName) {
        const newTopicName = window.prompt(`Enter new Topic Name for (${pinnedId}, ${blogId}, ${topicName})`)
        if (newTopicName) {
            this.props.updatePinned(pinnedId, blogId, newTopicName)
        }
    }

    isValidBlogId(blogIdStr) {
        const blogId = parseInt(blogIdStr)
        if (isNaN(blogId)) {
            return false
        }
        const blogList = this.props.blogList ? this.props.blogList.toJS() : []
        return (blogList.filter((blogItem) => (blogItem.id === blogId)).length > 0)
    }

    handleBlogDeleteClick(blogId, blogTitle) {
        if (window.confirm(`Are you sure to delete blog (${blogId}, ${blogTitle})?`)) {
            this.props.deleteBlog(blogId)
        }
    }

    handleBlogEditClick(blogId) {
        this.props.setEditBlogId(blogId)
    }

    goBackToHome() {
        const homeYScroll = this.props.homeYScroll || 0
        window.setTimeout(() => {window.scrollTo(0, homeYScroll)}, 0)
        const { getTagList, getBlogList, getFriendList, getPinnedList, refreshHome } = this.props
        getTagList()
        getBlogList()
        getFriendList()
        getPinnedList()
        refreshHome()
    }

    render() {

        const tagList = this.props.tagList ? this.props.tagList.toJS() : []
        const friendList = this.props.friendList ? this.props.friendList.toJS() : []
        const pinnedList = this.props.pinnedList ? this.props.pinnedList.toJS() : []
        const blogList = this.props.blogList ? this.props.blogList.toJS() : []

        return (
            <Fragment>
                <h2 style={consoleTitleStyle}>Admin Console</h2>
                <div style={consoleContentWrapperStyle}>
                    <div>
                        <div style={{...moduleStyle, ...majorModuleStyle, ...{height: '400px'}}}>
                            <p style={subTitleStyle}>Friends</p>
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">New</span>
                                </div>
                                <input style={{maxWidth: '200px'}}type="text" className="form-control" placeholder='Name' ref={(el) => {this.friendNameInputDOMRef = el}}/>
                                <input type="text" className="form-control" placeholder='URL' ref={(el) => {this.friendURLInputDOMRef = el}}/>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    style={minorModuleInputButtonStyle}
                                    onClick={this.handleFriendListAddButtonClick}
                                >
                                    Add
                                </button>
                            </div>
                            <div style={minorModuleListStyle}>
                                <ul className="list-group">
                                    {
                                        friendList.map((item) => (
                                            <li
                                                key={'tag-' + item.id}
                                                className="list-group-item d-flex justify-content-between align-items-center py-1"
                                                style={{overflow: 'hidden'}}
                                            >
                                                <span
                                                    onClick={() => {this.handleFriendNameUpdateClick(item.id, item.friendName, item.link)}}
                                                    style={{...{width: '20%'}, ...minorModuleListItemContentSpanStyle}}
                                                >
                                                    {item.friendName}
                                                </span>
                                                <span style={{color: '#ced4da'}}>|</span>
                                                <span
                                                    onClick={() => {this.handleFriendURLUpdateClick(item.id, item.friendName, item.link)}}
                                                    style={{...{width: '70%'}, ...minorModuleListItemContentSpanStyle}}
                                                >
                                                    {item.link}
                                                </span>
                                                <span
                                                    className="badge badge-danger badge-pill" 
                                                    style={minorModuleListItemIconSpanStyle}
                                                    onClick={() => {this.handleFriendDeleteButtonClick(item.id, item.friendName, item.link)}}
                                                >
                                                    <img src='/admin/delete.svg' alt='' style={{width: '100%'}}/>
                                                </span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{...moduleStyle, ...minorModuleStyle}}>
                            <p style={subTitleStyle}>Tags</p>
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">New</span>
                                </div>
                                <input type="text" placeholder='Tag Name' className="form-control" ref={(el) => {this.tagInputDOMRef = el}}/>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    style={minorModuleInputButtonStyle}
                                    onClick={this.handleTagListAddButtonClick}
                                >
                                    Add
                                </button>
                            </div>
                            <div style={minorModuleListStyle}>
                                <ul className="list-group">
                                    {
                                        tagList.map((item) => (
                                            <li key={'tag-' + item.id} className="list-group-item d-flex justify-content-between align-items-center py-1">
                                                <span
                                                    onClick={() => {this.handleTagUpdateClick(item.id, item.tagName)}}
                                                    style={minorModuleListItemContentSpanStyle}
                                                >
                                                    {item.tagName}
                                                </span>
                                                <span
                                                    className="badge badge-danger badge-pill" 
                                                    style={minorModuleListItemIconSpanStyle}
                                                    onClick={() => {this.handleTagDeleteButtonClick(item.id, item.tagName)}}
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
                            <p style={subTitleStyle}>Pinned</p>
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">New</span>
                                </div>
                                <input style={{maxWidth: '80px'}}type="text" className="form-control" placeholder='Blog ID' ref={(el) => {this.pinnedBlogIdInputDOMRef = el}}/>
                                <input type="text" className="form-control" placeholder='Blog Topic' ref={(el) => {this.pinnedBlogTopicInputDOMRef = el}}/>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    style={minorModuleInputButtonStyle}
                                    onClick={this.handlePinnedBlogAddButtonClick}
                                >
                                    Add
                                </button>
                            </div>
                            <div style={minorModuleListStyle}>
                                <ul className="list-group">
                                    {
                                        pinnedList.map((item) => (
                                            <li
                                                key={'pinned-' + item.id}
                                                className="list-group-item d-flex justify-content-between align-items-center py-1"
                                                style={{overflow: 'hidden'}}
                                            >
                                                <span
                                                    onClick={() => {this.handlePinnedBlogIdUpdateClick(item.id, item.blogId, item.topicName)}}
                                                    style={{...{width: '8%'}, ...minorModuleListItemContentSpanStyle}}
                                                >
                                                    {item.blogId}
                                                </span>
                                                <span style={{color: '#ced4da'}}>|</span>
                                                <span
                                                    onClick={() => {this.handlePinnedTopicNameUpdateClick(item.id, item.blogId, item.topicName)}}
                                                    style={{...{width: '24%'}, ...minorModuleListItemContentSpanStyle}}
                                                >
                                                    {item.topicName}
                                                </span>
                                                <span style={{color: '#ced4da'}}>|</span>
                                                <span
                                                    style={{...minorModuleListItemContentSpanStyle, ...{width: '58%', cursor: 'text'}}}
                                                >
                                                    {
                                                        blogList.length === 0 ? null :
                                                        (blogList.filter((blogItem) => (blogItem.id === item.blogId))[0] || {} ).title
                                                    }
                                                </span>
                                                <span
                                                    className="badge badge-danger badge-pill" 
                                                    style={minorModuleListItemIconSpanStyle}
                                                    onClick={() => {this.handlePinnedDeleteButtonClick(item.id, item.blogId, item.topicName)}}
                                                >
                                                    <img src='/admin/delete.svg' alt='' style={{width: '100%'}}/>
                                                </span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div style={{...moduleStyle, ...majorModuleStyle, ...{height: '600px'}}} id='admin-blog-table-wrapper'>
                        <p style={subTitleStyle}>
                            Blogs
                            <img
                                src='/admin/plus.svg' alt=''
                                style={{width: '14px', cursor: 'pointer', marginLeft: '24px', transform: 'scale(2, 2)'}} 
                                onClick={() => {
                                    this.props.createBlog()
                                }}
                            />
                        </p>
                        <div style={{height: '93%', overflow: 'auto'}}>
                            <table className="table table-sm" style={{position: 'relative', whiteSpace: 'nowrap', color: '#2c3e50'}}>
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col" style={tableHeaderStyle}>ID</th>
                                        <th scope="col" style={tableHeaderStyle}>Title</th>
                                        <th scope="col" style={tableHeaderStyle}>Time</th>
                                        <th scope="col" style={tableHeaderStyle}>Channel</th>
                                        <th scope="col" style={tableHeaderStyle}>Tags</th>
                                        <th scope="col" style={tableHeaderStyle}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        blogList.map((blogItem) => (
                                            <tr key={'blog-' + blogItem.id}>
                                                <th className='align-middle' scope="row">{blogItem.id}</th>
                                                <td className='align-middle'>{blogItem.title}</td>
                                                <td className='align-middle'>{stampToDateShort(blogItem.time)}</td>
                                                <td className='align-middle'>{blogItem.channel === 'en' ? 'En' : (blogItem.channel === 'cn' ? '中' : '?')}</td>
                                                <td className='align-middle'>
                                                    {
                                                        blogItem.tagList.filter((item) => (
                                                            tagList.map((tagItem) => (tagItem.id)).indexOf(item) !== -1
                                                        )).map(item => (
                                                            tagList.length === 0 ? null :
                                                            <span key={'blog-' + blogItem.id + '-tag-' + item}>
                                                                {tagList.filter((tagItem) => (tagItem.id === item))[0].tagName}
                                                                <br />
                                                            </span>
                                                        ))
                                                    }
                                                </td>
                                                <td className='align-middle' style={{overflow: 'hidden'}}>
                                                    <img
                                                        src='/admin/delete.svg' alt='' 
                                                        style={{width: '14px', cursor: 'pointer'}} 
                                                        onClick={() => {this.handleBlogDeleteClick(blogItem.id, blogItem.title)}}
                                                    />
                                                    <img
                                                        src='/admin/edit.svg' alt='' 
                                                        style={{width: '14px', cursor: 'pointer', marginLeft: '20px'}}
                                                        onClick={() => {
                                                            this.handleBlogEditClick(blogItem.id)
                                                            window.scrollTo(0, 0)
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div style={bottomButtonWrapperStyle}>
                        <div style={{float:'left'}} className="btn btn-primary" onClick={() => {this.props.logout()}}>
                            Log Out
                        </div>
                        <Link style={{margin: '0 auto', float: 'right'}} to='/' onClick={this.goBackToHome}>
                            <div className="btn btn-primary">
                                Preview
                            </div>
                        </Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    tagList: state.getIn(['home', 'tagList']),
    friendList: state.getIn(['sidePanel', 'friendList']),
    pinnedList: state.getIn(['sidePanel', 'topicList']),
    blogList: state.getIn(['home', 'blogList']),
    homeYScroll: state.getIn(['home', 'yScroll'])
})

const mapDispatchToProps = (dispatch) => ({
    logout() {
        dispatch(actionCreators.setAdminLogin(false))
    },
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
    },
    getFriendList() {
        dispatch(sidePanelActionCreators.getFriendList())
    },
    addFriend(friendName, link) {
        dispatch(actionCreators.addFriend(friendName, link))
    },
    deleteFriend(friendId) {
        dispatch(actionCreators.deleteFriend(friendId))
    },
    updateFriend(friendId, newFriendName, newLink) {
        dispatch(actionCreators.updateFriend(friendId, newFriendName, newLink))
    },
    getBlogList() {
        dispatch(homeActionCreators.getBlogList())
    },
    getPinnedList() {
        dispatch(sidePanelActionCreators.getTopicList())
    },
    addPinned(blogId, blogTopic) {
        dispatch(actionCreators.addPinned(blogId, blogTopic))
    },
    deletePinned(pinnedId) {
        dispatch(actionCreators.deletePinned(pinnedId))
    },
    updatePinned(pinnedId, blogId, topicName) {
        dispatch(actionCreators.updatePinned(pinnedId, blogId, topicName))
    },
    createBlog() {
        dispatch(actionCreators.createBlog())
    },
    deleteBlog(blogId) {
        dispatch(actionCreators.deleteBlog(blogId))
    },
    setEditBlogId(blogId) {
        dispatch(actionCreators.setEditBlogId(blogId))
    },
    refreshHome() {
        dispatch(homeActionCreators.setTagName(null, null))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Console)