import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as constants from './store/constants'

class TopicDisplay extends Component {

    render() {
        const { topicDisplayType, tagName, titleName, titleBlogCount } = this.props

        const tagDisplayTempate = (
            <h2 id='topic-display'>{tagName}</h2>
        )
        const titleDisplayTemplate = (
            <h4 id='topic-display'>
                {generateBlogCountTemplate(titleBlogCount)}
                &nbsp;titled with "<span style={{color: '#7f8c8d'}}>{titleName}</span>".
            </h4>
        )

        switch (topicDisplayType) {
            case constants.TAG_DISPLAY:
                return tagDisplayTempate
            case constants.TITLE_DISPLAY:
                return titleDisplayTemplate
            default:
                return null
        }
    }
}

const generateBlogCountTemplate = (blogCount) => {
    return (
        <Fragment>
            { blogCount === 0 && <Fragment>Found no blog</Fragment> }
            { blogCount === 1 && <Fragment>Found 1 blog</Fragment> }
            { blogCount > 1 && <Fragment>Found {blogCount} blogs</Fragment> }
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    topicDisplayType: state.getIn(['home', 'topicDisplayType']),
    tagName: state.getIn(['home', 'tagName']),
    titleName: state.getIn(['home', 'titleName']),
    titleBlogCount: state.getIn(['home', 'titleBlogCount'])
})

export default connect(mapStateToProps, null)(TopicDisplay)