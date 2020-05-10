import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    BlogItemWrapper,
    BlogDateDisplay,
    BlogTitleDisplay,
    BlogExerptWrapper,
    BlogExerptText,
    BlogExerptImageWrapper,
    BlogExerptImage,
    BlogMetaList,
    BlogMetaListItem,
    linkStyle
} from './style'
import { stampToDate } from '../../common/util/date'

class BlogItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hovering: false,
            hasImage: this.props.data.imageURL !== '',
        }
        this.handleTagClick = this.handleTagClick.bind(this)
    }

    handleTagClick(index) {
        const { tagList } = this.props.data
        window.alert('clicked: ' + tagList[index].name)
    }

    render() {
        const { id, time, title, exerpt, imageURL, tagList } = this.props.data
        const { authorName } = this.props
        const { hovering, hasImage } = this.state
        return (
            <BlogItemWrapper
                className={hovering ? 'hovering' : ''}
                onMouseEnter={() => {this.setState(() => ({hovering: true}))}}
                onMouseLeave={() => {this.setState(() => ({hovering: false}))}}
            >
                <BlogDateDisplay>{stampToDate(time)}</BlogDateDisplay>
                <BlogTitleDisplay>
                    <Link to={'/detail?id=' + id} style={linkStyle}>
                        {title}
                    </Link>
                </BlogTitleDisplay>
                <BlogExerptWrapper
                    className={hovering && hasImage ? 'mouseIn' : 'mouseOut'}
                    ref={(el) => {this.blogWrapper = el}}
                >
                    <BlogExerptText>
                        {exerpt}
                    </BlogExerptText>
                    <BlogExerptImageWrapper>
                        <BlogExerptImage
                            src={imageURL}
                            alt=''
                        />
                    </BlogExerptImageWrapper>
                </BlogExerptWrapper>
                <BlogMetaList>
                    <BlogMetaListItem>{authorName}</BlogMetaListItem>
                    {
                        tagList.map((item, index) => (
                            <BlogMetaListItem
                                key={'blog-' + id + '-tag-' + item.id}
                                style={linkStyle}
                                onClick={() => {this.handleTagClick(index)}}
                            >
                                {item.name}
                            </BlogMetaListItem>
                        ))
                    }
                </BlogMetaList>
            </BlogItemWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    authorName: state.getIn(['app', 'authorName'])
})

export default connect(mapStateToProps, null)(BlogItem)