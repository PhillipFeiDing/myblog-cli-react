import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
    PagingWrapper,
    PageList,
    PageItem
} from './style'
import { PAGING_ITEM_WIDTH } from './style'

class Paging extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstUpdate: true
        }
        this.handleChangePageNum = this.handleChangePageNum.bind(this)
        this.handlePageResize = this.handlePageResize.bind(this)
    }

    handleChangePageNum(pageNum) {
        const { currPage, numPages, changePageNum, contentDOMNode } = this.props
        if (pageNum >= 0 && pageNum < numPages && pageNum !== currPage) {
            changePageNum(pageNum)
            if (contentDOMNode) {
                contentDOMNode.scrollIntoView({
                    behavior: 'smooth'
                })
            }
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handlePageResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handlePageResize)
    }

    handlePageResize() {
        if (this.pageListContainer && this.pageListContainer.clientWidth !== this.state.containerWidth) {
            this.setState({containerWidth: this.pageListContainer.clientWidth})
            const width = this.pageListContainer.clientWidth
            const maxPageCount = Math.max(1, Math.floor(width / PAGING_ITEM_WIDTH) - 2)
            this.setState(() => ({maxPageCount}))
        }
    }
    
    render() {
        const { numPages, currPage} = this.props
        if (numPages < 2) {
            return null
        }
        const maxPageCount = this.state.maxPageCount || 20
        const allPages = Array(numPages).fill().map((_, index) => (index))
        let renderedPages = []
        addPage(renderedPages, 0, numPages)
        addPage(renderedPages, numPages - 1, numPages)
        addPage(renderedPages, currPage, numPages)
        let signPlus = false
        let shift = 1
        while (renderedPages.length < maxPageCount && renderedPages.length < allPages.length) {
            if (signPlus) {
                addPage(renderedPages, currPage + shift, numPages)
            } else {
                addPage(renderedPages, currPage - shift, numPages)
            }
            signPlus = !signPlus
            if (!signPlus) {
                shift++
            }
        }
        renderedPages = renderedPages.sort((a,b) => (a - b))
        let finalPages = []
        finalPages.push(renderedPages[0])
        for (let idx = 1; idx < renderedPages.length - 1; idx++) {
            if (renderedPages[idx] + 1 !== renderedPages[idx + 1] || (idx === 1 && renderedPages[0] + 1 !== renderedPages[idx])) {
                finalPages.push(null)
            } else {
                finalPages.push(renderedPages[idx])
            }
        }
        addPage(finalPages, renderedPages[renderedPages.length - 1], numPages)
        return (
            <PagingWrapper ref={(el) => {this.pageListContainer = el}}>
                <PageList>
                    <PageItem
                        className={currPage === 0? 'start' : 'start active'}
                        onClick={() => {this.handleChangePageNum(currPage - 1)}}
                    >
                        «
                    </PageItem>
                    {
                        finalPages.map((item, index) => (
                            item !== null ? (
                                <PageItem
                                    key={item !== null ? ('page-' + item) : 'page-null-' + index}
                                    className={item === currPage ? 'current middle' : 'active middle'}
                                    onClick={() => {this.handleChangePageNum(item)}}
                                >
                                    {item + 1}
                                </PageItem>
                            ) : (
                                <PageItem className='middle'>...</PageItem>
                            )
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

    componentDidUpdate() {
        if (this.state.firstUpdate && this.pageListContainer && this.pageListContainer.clientWidth) {
            this.setState({
                firstUpdate: false,
                containerWidth: this.pageListContainer.clientWidth
            })
            this.handlePageResize()
        }
    }
}

const addPage = (pageList, pageNum, numPages) => {
    if (pageNum >= 0 && pageNum < numPages && pageList.indexOf(pageNum) === -1) {
        pageList.push(pageNum)
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