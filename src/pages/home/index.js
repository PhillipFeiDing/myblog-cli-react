import React, { Component } from 'react'
import {
    GlobalStyle,
    MainWrapper
} from './style'
import PageHeader from './PageHeader'

class Home extends Component {
    render() {
        return (
            <MainWrapper>
                <GlobalStyle />
                <PageHeader />
                <div style={{height: '800px'}}>

                </div>
            </MainWrapper>
        )
    }
}

export default Home