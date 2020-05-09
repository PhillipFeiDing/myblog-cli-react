import React, { Component } from 'react'
import {
    GlobalStyle,
    MainWrapper,
    ContentWrapper,
    BlogListWrapper,
    BlogList
} from './style'
import PageHeader from './PageHeader'
import BlogItem from './BlogItem'

class Home extends Component {
    render() {
        return (
            <MainWrapper>
                <GlobalStyle />
                <PageHeader />
                <ContentWrapper>
                    <BlogListWrapper>
                        <BlogList>
                            <BlogItem
                               data={{
                                   id: 2,
                                   time: 1588953420000,
                                   title: 'GBA Game Project: Pacman',
                                   exerpt: 'This is a variation of the classical Pacman game written in C running on a GBA emulator. The original game was written in assembly but I successfully "implanted" this game on GBA (Game Boy Advanced), a video gamer made by Nintendo which takes advantage of the power provided by C programming language instead of writing games in ugly assembly. I only made three levels and all levels are kind of similar because I am lazy. However, I am sure you will love it.',
                                   imageURL: 'https://github.com/PhillipFeiDing/myblog-resource/blob/master/blog-cover-image/pacman-gba.gif?raw=true',
                                   author: 'PhillipDing',
                                   tagList: [
                                       {
                                           id: 1,
                                           name: 'Project'
                                       },{
                                           id: 3,
                                           name: 'Game'
                                       }
                                   ]
                               }}
                            />
                            <BlogItem
                               data={{
                                   id: 3,
                                   time: 1588953420000,
                                   title: 'GBA Game Project: Pacman',
                                   exerpt: 'This is a variation of the classical Pacman game written in C running on a GBA emulator. The original game was written in assembly but I successfully "implanted" this game on GBA (Game Boy Advanced), a video gamer made by Nintendo which takes advantage of the power provided by C programming language instead of writing games in ugly assembly. I only made three levels and all levels are kind of similar because I am lazy. However, I am sure you will love it.',
                                   imageURL: 'https://github.com/PhillipFeiDing/myblog-resource/blob/master/blog-cover-image/statistics.gif?raw=true',
                                   author: 'PhillipDing',
                                   tagList: [
                                       {
                                           id: 1,
                                           name: 'Project'
                                       },{
                                           id: 3,
                                           name: 'Game'
                                       }
                                   ]
                               }}
                            />
                        </BlogList>
                    </BlogListWrapper>
                </ContentWrapper>
            </MainWrapper>
        )
    }
}

export default Home