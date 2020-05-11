import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators as appActionCreators } from '../../store'
import { actionCreators } from './store'
import {
    GlobalStyle,
    MainWrapper,
    ContentWrapper,
    Content,
    BlogListWrapper,
    BlogList,
    DashBoardWrapper
} from './style'
import PageHeader from './PageHeader'
import BlogItem from './BlogItem'
import ParticlesContainer from '../../common/particles'
import Paging from './Paging'
import DashBoard from './DashBoard'
import { BLOGS_PER_PAGE } from './store/constants'

class Home extends Component {

    componentDidMount() {
        const { getAuthorName, getTagList, getBlogList } = this.props
        getAuthorName()
        getTagList()
        getBlogList()
    }

    render() {
        const tagList = this.props.tagList.toJS()
        const currBlogList = this.props.currBlogList.toJS()
        const currPage = this.props.currPage
        return (
            <MainWrapper>
                <GlobalStyle />
                <PageHeader />
                <ContentWrapper>
                    <ParticlesContainer />
                    <Content ref={(el) => {this.contentDOMNode = el}}>
                        <BlogListWrapper>
                            <BlogList>
                                {
                                    currBlogList.splice(currPage * BLOGS_PER_PAGE, BLOGS_PER_PAGE).map((item) => {
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
                        <DashBoardWrapper>
                            <DashBoard />
                        </DashBoardWrapper>
                    </Content>
                </ContentWrapper>
            </MainWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    authorName: state.getIn(['app', 'authorName']),
    tagList: state.getIn(['home', 'tagList']),
    currBlogList: state.getIn(['home', 'currBlogList']),
    currPage: state.getIn(['home', 'currPage'])
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)