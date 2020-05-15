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
import { connect } from 'react-redux'

const innerHTML = `
<p style=\"height: 550px;\"><iframe id=\"gba-frame\" src=\"https://phillipfeiding.github.io/gbajs/\" style=\"height: 550px; width: 100%; border: 0;\" scrolling=\"no\"></iframe></p><p><span style=\"font-style: italic; font-weight: bold;\">* <span style=\"color: rgb(194, 79, 74);\">Note: in case of failure to load the game, simply reload the page.</span></span></p><p><span style=\"font-style: italic; font-weight: bold;\">**&nbsp;tribute to and powered by&nbsp;<a href=\"https://github.com/endrift/gbajs/\" target=\"_blank\">GBA.js</a></span><br></p><p><br></p><h1>Background</h1><p><span style=\"font-size: large;\">This is a simplified implementation of the classical game PACMAN! In the case if you are not familiar with Pacman, the game basically makes the player control the Pacman to navigate through a maze filled with food dots. The goal is to eat through all food dots without being caught by a ghost. The ghosts moves as fast as your Pacman and are really smart to figure out where you are, so keep far away from them, and most importantly, don't get stuck in the corner. : ) If you are caught by a ghost, you lose the game and must restart a new game of the current level to play. If you eat all dots, you win and can play next level! (You will restart if you finish all levels) If you eat a big food dot, the ghosts become scared so that you can go ahead and eat them to avoid future disturbance. Don't rely too much on this power and be as quick as possible since such condition only lasts for a short period.</span></p><p><span style=\"font-size: large;\">In possible future implementations, I am considering adding more levels to the game to make it more fun and challenging!</span></p><p><span style=\"font-size: large;\"><br></span></p><h1>Instructions</h1><p><span style=\"font-size: x-large; font-weight: bold;\">i. Start Screen</span><br><span style=\"font-size: large;\">Press <span style=\"color: rgb(194, 79, 74); font-weight: bold;\">Start</span> button (ENTER on your keyboard for emulators), and you will enter the main game.</span></p><p><br><span style=\"font-size: x-large; font-weight: bold;\">ii. Main Game</span><br><span style=\"font-size: large;\">Here on the left you should see a maze layout filled with food dots, your Pacman, and some ghosts. You can control your Pacman using the <span style=\"font-weight: bold; color: rgb(194, 79, 74);\">arrow keys</span> on your keyboard to navigate through the maze. If you hit the wall, the Pacman will try to go in that direction but gets stuck there eventually.</span></p><p><span style=\"font-size: large;\">You can exit the game at any time, just hit the <span style=\"font-weight: bold; color: rgb(194, 79, 74);\">Select</span> button and this should reset the game state and redirect you to the Start Screen. If you get caught by a ghost, you lose and will be redirected to the Lose Screen.</span></p><p><span style=\"font-size: large;\">You can enable cheat mode by hitting <span style=\"color: rgb(194, 79, 74); font-weight: bold;\">A</span> (Z) button, which will allow you to pass through a ghost peacefully without being eaten. This only means to make the game easier and explore its full functionality.</span></p><p><span style=\"font-size: large;\">If you win the game by eating all dots. Congratulations, you are redirected to the Win Screen.</span></p><p><br><span style=\"font-size: x-large; font-weight: bold;\">iii. Lose Screen</span><br><span style=\"font-size: large;\">Hit <span style=\"color: rgb(194, 79, 74); font-weight: bold;\">Start</span> to resume</span></p><p><span style=\"font-size: large;\">Hit <span style=\"color: rgb(194, 79, 74); font-weight: bold;\">Select</span> to go back to Start Screen</span></p><p><br><span style=\"font-size: x-large; font-weight: bold;\">iv. Win Screen</span><br><span style=\"font-size: large;\">Hit <span style=\"font-weight: bold; color: rgb(194, 79, 74);\">Start</span> to go to next level</span></p><p><span style=\"font-size: large;\">Hit <span style=\"color: rgb(194, 79, 74); font-weight: bold;\">Select</span> to go back to Start Screen</span></p><p><br></p><h1>How I Made This</h1><p><span style=\"font-size: large;\">I know C is mostly a procedural programming language, but somehow, I figured out to use function pointers to create methods associated with structs, and thus simulating early form of objects, which gives the code an object-oriented taste. However, I just used the simplest features of OO like encapsulation, and never managed to do fancy things like inheritance or polymorphism, which also aren't particularly useful for this small program. However, in this style I could separate my control, model, and view logic into different modules, and hopefully make the project easier to maintain and debug.</span></p><p><span style=\"font-size: large;\">Particularly about the rendering logic, the maze is dynamically painted to the screen by padding tiny pictures (8 x 8 pixels). There are hundreds of images including all tiles, Pacmans, ghosts, and string characters as resources in the image folder, and a particular module takes care of putting the right ones on the canvas. As the game proceeds while ghosts and Pacman changes location, the canvas object takes advantage of partial rendering instead of drawing out the full screen, and thus letting the game flow smoothly.</span><br></p><p style=\"text-align: center;\"><span style=\"font-size: x-large; font-weight: bold;\">State Machine Transition Diagram</span></p><p style=\"text-align: center;\"><img src=\"https://github.com/PhillipFeiDing/myblog-resource/blob/master/gba-pacman/state-machine.png?raw=true\" style=\"max-width:100%;\"><span style=\"font-size: x-large; font-weight: bold;\"><br></span></p><p><span style=\"font-size: large;\"><br></span></p><h1>Repository Link</h1><p style=\"text-align: center;\"><a href=\"https://github.com/PhillipFeiDing/pacman-game-gba\" target=\"_blank\" style=\"font-size: large;\">Link to GitHub</a>&nbsp;<br></p><script>\n    fetch('https://cors-anywhere.herokuapp.com/https://github.com/PhillipFeiDing/pacman-game-gba/blob/master/Game.gba?raw=true')\n  .then(res => res.blob()) // Gets the response and returns it as a blob\n  .then(blob => {\n    document.getElementById(\"gba-frame\").contentWindow.run(blob)\n});\n</script>\n
`

class Detail extends Component {
    
    render() {
        const { showBackground } = this.props
        return (
            <MainWrapper>
                <HeaderWrapper id='header-wrapper'>
                    <TitleDisplay>RM ICRA Robot Base Detection</TitleDisplay>
                    <br />
                    <TimeDisplay>Friday, May 8, 2020 11:57 AM</TimeDisplay>
                </HeaderWrapper>
                <ContainerWrapper id='container-wrapper'>
                    <ParticlesContainer show={showBackground}/>
                    <Container className='main-content'>
                        <Content id='detail-content' dangerouslySetInnerHTML={{__html: innerHTML}}></Content>
                    </Container>
                </ContainerWrapper>
            </MainWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    showBackground: state.getIn(['app', 'showBackground'])
})

export default connect(mapStateToProps, null)(Detail)