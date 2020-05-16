import React, { Component } from 'react'
import {
    MainWrapper,
    HeaderWrapper,
    TitleDisplay,
    TimeDisplay,
    ContainerWrapper,
    Container,
    Content
} from './style'
import './gitment.0.0.3.min.css'
import ParticlesContainer from '../../common/particles'
import { actionCreators } from './store'
import { connect } from 'react-redux'

class Detail extends Component {

    componentDidMount() {
        const { currBlogId, getBlogById } = this.props
        if (currBlogId === null) {
            return
        }
        const blogContents = this.props.blogContents.toJS()
        blogContents[currBlogId] || getBlogById(currBlogId)
    }
    
    render() {
        const { showBackground, currBlogId } = this.props
        if (currBlogId === null) {
            return null
        }
        const blog = this.props.blogContents.toJS()[currBlogId]
        if (!blog) {
            return null
        }
        return (
            <MainWrapper>
                <HeaderWrapper id='header-wrapper'>
                    <TitleDisplay>{blog.title}</TitleDisplay>
                    <br />
                    <TimeDisplay>Friday, May 8, 2020 11:57 AM</TimeDisplay>
                </HeaderWrapper>
                <ContainerWrapper id='container-wrapper'>
                    <ParticlesContainer show={showBackground}/>
                    <Container className='main-content'>
                        <Content id='detail-content' dangerouslySetInnerHTML={{__html: blog.content}}></Content>
                    </Container>
                </ContainerWrapper>
            </MainWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    showBackground: state.getIn(['app', 'showBackground']),
    blogContents: state.getIn(['detail', 'blogContents']),
    currBlogId: state.getIn(['detail', 'currBlogId'])
})

const mapDispatchToProps = (dispatch) => ({
    getBlogById(blogId) {
        dispatch(actionCreators.getBlogById(blogId))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)