import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    SearchBarWrapper,
    SearchInput,
    SearchIcon
} from './style'
import {actionCreators} from '../../pages/home/store'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showInput: false
        }
        this.outInputClickHandler = this.outInputClickHandler.bind(this)
        this.handleKeyPressed = this.handleKeyPressed.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    outInputClickHandler(e) {
        if (
            this.inputDOMNode && e.target !== this.inputDOMNode && !this.inputDOMNode.contains(e.target)
            && this.iconDOMNode && e.target !== this.iconDOMNode && !this.iconDOMNode.contains(e.target)
        ) {
            this.setState(() => ({showInput: false}))
            document.removeEventListener('click', this.outInputClickHandler)
            document.removeEventListener('keypress', this.handleKeyPressed)
        }
    }

    handleKeyPressed(e) {
        const keyCode = e.code
        if (keyCode === 'Enter') {
            this.handleSearch()
        }
    }

    handleSearch() {
        const searchInput = this.inputDOMNode.value
        this.inputDOMNode.value = ''
        const {searchTitle} = this.props
        searchTitle(searchInput)
    }
    
    render() {
        const { showInput } = this.state
        return (
            <SearchBarWrapper>
                <SearchInput
                    className={showInput ? 'display' : 'hidden'}
                    ref={(el) => {this.inputDOMNode = el}}
                />
                <SearchIcon
                    onClick={() => {
                        this.setState(() => ({showInput: true}))
                        document.addEventListener('click', this.outInputClickHandler)
                        this.inputDOMNode.focus()
                        document.addEventListener('keypress', this.handleKeyPressed)
                    }}
                    ref={(el) => {this.iconDOMNode = el}}
                />
            </SearchBarWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchTitle(title) {
        dispatch(actionCreators.searchTitle(title))
    }
})

export default connect(null, mapDispatchToProps)(SearchBar)