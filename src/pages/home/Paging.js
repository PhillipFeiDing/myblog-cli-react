import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
    PagingWrapper,
    PageList,
    PageItem
} from './style'

class Paging extends Component {

    constructor(props) {
        super(props)
        this.handleChangePageNum = this.handleChangePageNum.bind(this)
    }

    handleChangePageNum(pageNum) {
        const { currPage, numPages, changePageNum, contentDOMNode } = this.props
        if (pageNum >= 0 && pageNum < numPages && pageNum !== currPage) {
            changePageNum(pageNum)
            if (contentDOMNode) {
                contentDOMNode.scrollIntoView()
            }
        }
    }
    
    render() {
        const { numPages, currPage} = this.props
        if (numPages < 2) {
            return null
        }
        return (
            <PagingWrapper>
                <PageList>
                    <PageItem
                        className={currPage === 0? 'start' : 'start active'}
                        onClick={() => {this.handleChangePageNum(currPage - 1)}}
                    >
                        «
                    </PageItem>
                    {
                        Array(numPages).fill().map((_, index) => (index)).map((item) => (
                            <PageItem
                                key={'page-' + item}
                                className={item === currPage ? 'current middle' : 'active middle'}
                                onClick={() => {this.handleChangePageNum(item)}}
                            >
                                {item + 1}
                            </PageItem>
                        ))
                    }
                    <PageItem
                        className={currPage === numPages - 1? 'end' : 'end active'}
                        onClick={() => {this.handleChangePageNum(currPage + 1)}}
                    >
                        »
                    </PageItem>
                </PageList>
            </PagingWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    numPages: state.getIn(['home', 'numPages']),
    currPage: state.getIn(['home', 'currPage'])
})

const mapDispatchToProps = (dispatch) => ({
    changePageNum(pageNum) {
        dispatch(actionCreators.changePageNum(pageNum))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Paging)