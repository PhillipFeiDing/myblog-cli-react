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
    BlogList
} from './style'
import PageHeader from './PageHeader'
import BlogItem from './BlogItem'
import ParticlesContainer from '../../common/particles'

class Home extends Component {

    componentDidMount() {
        const { getAuthorName, getTagList, getBlogList } = this.props
        getAuthorName()
        getTagList()
        getBlogList()
    }

    render() {
        const tagList = this.props.tagList.toJS()
        const blogList = this.props.blogList.toJS()
        return (
            <MainWrapper>
                <GlobalStyle />
                <PageHeader />
                <ContentWrapper>
                    <ParticlesContainer />
                    <Content>
                        <BlogListWrapper>
                            <BlogList>
                                {
                                    blogList.map((item) => {
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
                            </BlogList>
                        </BlogListWrapper>
                    </Content>
                </ContentWrapper>
            </MainWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    authorName: state.getIn(['app', 'authorName']),
    tagList: state.getIn(['home', 'tagList']),
    blogList: state.getIn(['home', 'blogList'])
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