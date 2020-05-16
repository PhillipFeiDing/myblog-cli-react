import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators as appActionCreators } from '../../store'
import { actionCreators } from './store'
import {
    MainWrapper,
    ContentWrapper,
    Content,
    BlogListWrapper,
    BlogList,
    DashBoardWrapper,
} from './style'
import PageHeader from './PageHeader'
import BlogItem from './BlogItem'
import ParticlesContainer from '../../common/particles'
import Paging from './Paging'
import DashBoard from './DashBoard'

class Home extends Component {

    constructor(props) {
        super(props)
        this.scrollHandler = this.scrollHandler.bind(this)
    }

    componentDidMount() {
        const { authorName, getAuthorName, getTagList, tagList, getBlogList, blogList } = this.props
        authorName || getAuthorName()
        tagList || getTagList()
        blogList || getBlogList()
        window.addEventListener('scroll', this.scrollHandler)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler)
    }

    scrollHandler() {
        this.props.updateYScroll(window.scrollY)
    }

    render() {
        const tagList = this.props.tagList === null ? [] : this.props.tagList.toJS()
        const currBlogList = this.props.currBlogList === null ? [] : this.props.currBlogList.toJS()
        const { currPage, isMobile, showBackground, blogsPerPage } = this.props
        return (
            <MainWrapper>
                <PageHeader />
                <ContentWrapper id='content-wrapper'>
                    <ParticlesContainer show={showBackground}/>
                    <Content className='main-content' ref={(el) => {this.contentDOMNode = el}}>
                        <BlogListWrapper className={isMobile ? 'mobile' : 'desktop'}>
                            <BlogList>
                                {
                                    currBlogList.splice(currPage * blogsPerPage, blogsPerPage).map((item) => {
                                        return (
                                            <BlogItem
                                                key={'blog-' + item.id}
                                                data={{
                                                    id: item.id,
                                                    time: item.time,
                                                    title: item.title,
                                                    exerpt: item.exerpt,
                                                    imageURL: item.imageURL,
                                                    tagList: tagList.length === 0 ? [] : item.tagList.map((tagId) => {
                                                        return {
                                                            id: tagId,
                                                            name: tagList.filter((tagItem) => {
                                                                return tagItem.id === tagId
                                                            })[0].tagName
                                                        }
                                                    })
                                                }}
                                            />
                                        )
                                    })
                                }
                                <Paging contentDOMNode={this.contentDOMNode}/>
                            </BlogList>
                        </BlogListWrapper>
                        <DashBoardWrapper className={isMobile ? 'mobile' : 'desktop'}>
                            <DashBoard />
                        </DashBoardWrapper>
                    </Content>
                </ContentWrapper>
            </MainWrapper>
        )
    }

    componentDidUpdate(prevProps) {
        const { showAboutMeBoard } = this.props
        if (showAboutMeBoard || prevProps.blogsPerPage !== this.props.blogsPerPage) {
            this.contentDOMNode.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }
}

const mapStateToProps = (state) => ({
    authorName: state.getIn(['app', 'authorName']),
    tagList: state.getIn(['home', 'tagList']),
    blogList: state.getIn(['home', 'blogList']),
    currBlogList: state.getIn(['home', 'currBlogList']),
    currPage: state.getIn(['home', 'currPage']),
    isMobile: state.getIn(['app', 'isMobile']),
    showAboutMeBoard: state.getIn(['app', 'mobile', 'showAboutMe']),
    showBackground: state.getIn(['app', 'showBackground']),
    blogsPerPage: state.getIn(['home', 'blogsPerPage'])
})

const mapDispatchToProps = (dispatch) => ({
    getAuthorName() {
        dispatch(appActionCreators.getAuthorName())
    },
    getTagList() {
        dispatch(actionCreators.getTagList())
    },
    getBlogList() {
        dispatch(actionCreators.getBlogList())
    },
    updateYScroll(yScroll) {
        dispatch(actionCreators.updateYScroll(yScroll))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)