import React, { Component } from 'react'
import {
    MainWrapper,
    HeaderWrapper,
    TitleDisplay,
    TimeDisplay,
    ContainerWrapper,
    Container,
    Content,
    TagList,
    // Like,
    // LikeImage,
    Tag,
    BlogLinks,
    BlogLinkWrapper,
    BlogLinkText
} from './style'
import './gitment.0.0.3.min.css'
import ParticlesContainer from '../../common/particles'
import { actionCreators } from './store'
import { actionCreators as homeActionCreators } from '../home/store'
import { connect } from 'react-redux'
import { stampToDate } from '../../common/util/date'
import { Link } from 'react-router-dom'
import Loading from '../../common/loading'

// const LIKED = '/detail/heartFilled.svg'
// const NOT_LIKED = '/detail/heartEmpty.svg'

class Detail extends Component {

    componentDidMount() {
        const { setBlogId } = this.props
        const currBlogId = this.props.match.params.id || this.props.currBlogId
        if (currBlogId === null) {
            return
        }
        setBlogId(parseInt(currBlogId))
        this.props.tagList || this.props.getTagList()
        this.props.blogList || this.props.getBlogList()
    }
    
    render() {
        const { showBackground, currBlogId, getBlogById, getTagList, setBlogId } = this.props

        // const likeBlog = false
        // const numLikes = 10

        if (currBlogId === null) {
            return null
        }
        let blog = this.props.blogContents.toJS()[currBlogId]
        let tagList = []
        let loading = false
        if (!blog || this.props.tagList === null) {
            if (!blog) {
                getBlogById(currBlogId)
            }
            if (this.props.tagList == null) {
                getTagList()
            }
            blog = {}
            loading = true
        } else {
            tagList = blog.tagList.map((tagId) => (this.props.tagList.toJS().filter((item) => (item.id === tagId))[0]))
        }
        const currBlogList = this.props.currBlogList ? this.props.currBlogList.toJS() : []
        let currBlogIdx = currBlogList.map((item) => (item.id)).indexOf(currBlogId)
        currBlogIdx = currBlogIdx === -1 ? -2 : currBlogIdx

        return (
            <MainWrapper>
                <HeaderWrapper id='header-wrapper'>
                    <TitleDisplay>{blog.title}</TitleDisplay>
                    <br />
                    <TimeDisplay>{stampToDate(blog.time)}</TimeDisplay>
                </HeaderWrapper>
                <ContainerWrapper id='container-wrapper'>
                    <ParticlesContainer show={showBackground} offset={56}/>
                    <Container className='main-content'>
                        <BlogLinks>
                            <BlogLinkWrapper style={{textAlign: 'left'}}>
                                <BlogLinkText>
                                    {
                                        currBlogIdx - 1 >= 0 && currBlogIdx - 1 < currBlogList.length ?
                                        <Link 
                                            to={`/detail/${currBlogList[currBlogIdx - 1].id}`}
                                            onClick={() => {setBlogId(currBlogList[currBlogIdx - 1].id)}}
                                        >
                                            <b>Prev</b>: {currBlogList[currBlogIdx - 1].title}
                                        </Link>
                                        : (null)
                                    }
                                </BlogLinkText>
                            </BlogLinkWrapper>
                            <BlogLinkWrapper style={{textAlign: 'right'}}>
                                <BlogLinkText>
                                    {
                                        currBlogIdx + 1 >= 0 && currBlogIdx + 1 < currBlogList.length ?
                                        <Link
                                            to={`/detail/${currBlogList[currBlogIdx + 1].id}`}
                                            onClick={() => {setBlogId(currBlogList[currBlogIdx + 1].id)}}
                                        >
                                            <b>Next</b>: {currBlogList[currBlogIdx + 1].title}
                                        </Link>
                                        : (null)
                                    }
                                </BlogLinkText>
                            </BlogLinkWrapper>
                        </BlogLinks>
                        {
                            loading ? (
                                <Content id='detail-content'>
                                    <Loading />
                                </Content>
                            ) : (
                                <Content id='detail-content' dangerouslySetInnerHTML={{__html: blog.content}}></Content>
                            )
                        }
                        <TagList id='detail-tag-list'>
                            {
                                tagList.filter((item) => (item)).map((item) => (
                                    <Link 
                                        to='/'
                                        key={'detail-tag-' + item.id}
                                        onClick={() => {
                                            const interval = window.setInterval(() => {
                                                const tagButton = document.querySelector(`#home-tag-${item.id}`)
                                                if (tagButton) {
                                                    tagButton.click()
                                                    clearInterval(interval)
                                                }
                                            }, 50)
                                        }}
                                    >
                                        <Tag>
                                            # {item.tagName}
                                        </Tag>
                                    </Link>
                                ))
                            }
                            {/*
                            <Like>
                                <LikeImage src={likeBlog ? LIKED : NOT_LIKED}/>
                                {numLikes}
                            </Like>
                            */}
                        </TagList>
                        <hr />
                    </Container>
                </ContainerWrapper>
            </MainWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    showBackground: state.getIn(['app', 'showBackground']),
    blogContents: state.getIn(['detail', 'blogContents']),
    currBlogId: state.getIn(['detail', 'currBlogId']),
    tagList: state.getIn(['home', 'tagList']),
    blogList: state.getIn(['home', 'blogList']),
    currBlogList: state.getIn(['home', 'currBlogList'])
})

const mapDispatchToProps = (dispatch) => ({
    getBlogById(blogId) {
        dispatch(actionCreators.getBlogById(blogId))
    },
    setBlogId(blogId) {
        dispatch(actionCreators.setBlogId(blogId))
    },
    getTagList() {
        dispatch(homeActionCreators.getTagList())
    },
    getBlogList() {
        dispatch(homeActionCreators.getBlogList())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)