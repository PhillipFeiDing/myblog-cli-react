import React, { Component, Fragment } from 'react'
import { actionCreators } from './store'
import { connect } from 'react-redux'
import {
    TitleSpan,
    TagGroup,
    TagSpan,
    ProfileImageWrapper,
    ProfileTextWrapper
} from './style'

class DashBoard extends Component {

    constructor(props) {
        super(props)
        this.handleTagClick = this.handleTagClick.bind(this)
    }

    handleTagClick(tagId) {
        const { setTagName } = this.props
        if (tagId === null) {
            setTagName(null, null)
            return
        }
        const tagList = this.props.tagList.toJS()
        const tagName = tagList.filter((item) => (item.id === tagId))[0].tagName
        setTagName(tagName, tagId)
    }

    render() {
        const tagList = this.props.tagList.toJS()
        const { currTagName } = this.props
        return (
            <Fragment>
                <TagGroup>
                    <TagSpan
                        className={currTagName === null ? 'current bold' : 'bold'}
                        onClick={() => {this.handleTagClick(null)}}
                    >
                        ALL BLOGS
                    </TagSpan>
                </TagGroup>
                <hr />
                <TitleSpan>FEATURED TAGS</TitleSpan>
                <TagGroup>
                    {
                        tagList.map((item) => (
                            <TagSpan
                                key={'tag-' + item.id}
                                onClick={() => {this.handleTagClick(item.id)}}
                                className={currTagName === item.tagName ? 'current' : ''}
                            >{item.tagName}</TagSpan>
                        ))
                    }
                </TagGroup>
                <hr />
                <TitleSpan>ABOUT ME</TitleSpan>
                <ProfileImageWrapper>
                    <img src='/home/profile.png' alt='' />
                </ProfileImageWrapper>
                <ProfileTextWrapper>
                    <p>Hi, I am Fei Ding (Phillip), a second-year computer science student studying at Georgia Tech with concentrations in information internetwork and intelligence. I am looking for a summer internship (2021) as a software engineer or data analyst.</p>
                    <p>I gained full stack experience in developing web and mobile applications by working on my personal and group projects where I would like to explore and teach myself new technologies in development. I am also interested in various fields in machine learning and their applications to real-world situations.</p>
                    <p>I am currently involved in undergraduate research programs. My interest lies in machine learning and their applications. I've worked closely with graduate students in developing sophisticated NLP models, and I am currently collaborating in a robotics vision lab to evaluate the effectiveness of different CV algorithms in terms of their performances in robotics tasks.</p>
                    <p>I code in Java, Python, and JavaScript most of the time. I have experiences using frameworks such as TensorFlow, and I am also teaching myself some PyTorch. I primarily use ExpressJS and Python Flask for back-end web development. I am also experienced in using jQuery or ReactJS for crafting web UIs. I regularly maintain my portfolio on a blog system developed and deployed by myself (http://www.phillipding.com), which is what you are viewing now!</p>
                </ProfileTextWrapper>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    tagList: state.getIn(['home', 'tagList']),
    currTagName: state.getIn(['home', 'tagName'])
})

const mapDispatchToProps = (dispatch) => ({
    setTagName(tagName, tagId) {
        dispatch(actionCreators.setTagName(tagName, tagId))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)