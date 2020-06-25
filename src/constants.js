/**
 * Server Configuration.
 * Set to true if you want to run it on a server.
 * Set to false if you want to turn it into a static project.
 */

const server = false

/**
 * Static Data.
 * Change to your own!
 */
// The title of your site will be displayed on the tab.
document.title = 'I\'m Phillip Ding'

// Your name for display on the site
export const AUTHOR = 'Phillip Ding'

// URL to your CV/resume page. It is recommended to share a Google document here.
export const CV_URL = 'https://drive.google.com/file/d/1ot1pOLz1Eokr7z7C841Z5AAgnfoI9luq/view?usp=sharing'

// Your motto. Set to empty string If you don't want it.
export const MOTTO = '-- Stay hungry, stay foolish'

// Typing special effect.
// If you don't want it: Set TYPING_LEFT and TYPING_RIGHT to empty strings, set TYPING_STRINGS to empty array, and set showCursor in TYPING_PARAMS to false
export const TYPING_LEFT = 'Hi,'
const TYPING_STRINGS = [
    "I'm Fei (Phillip). Glad to meet you here",
    "I study at Georgia Tech and major in CS",
    "I enjoy doing web dev, big data, and ML",
    "I love cycling, badminton, and movies"
]
export const TYPING_RIGHT = '!'
export const TYPING_PARAMS = {
    strings: TYPING_STRINGS,
    typeSpeed: 30,
    backSpeed: 20,
    startDelay: 25,
    showCursor: true,
    shuffle: false,
    loop:true
}

// Footer icon list.
// There are two types of icons. The first one is essentially a link. The other one displays a bar code if hovered.
// For link icons, you must provide name, to, imgURL, and set hoverable to false.
// For bar code icons, you must procide name, barCodeURL, imgURL, and set hoverable to true.
export const FOOTER_LIST = 
[
    {
        "name": "github",
        "to": "http://www.github.com/PhillipFeiDing",
        "imgURL": "/common/footer/github.svg",
        "hoverable": false
    },{
        "name": "linkedin",
        "to": "https://www.linkedin.com/in/fei-phillip-ding-9a5410173/",
        "imgURL": "/common/footer/linkedin.svg",
        "hoverable": false
    },{
        "name": "facebook",
        "to": "https://www.facebook.com/people/Fei-Ding/100011045418439",
        "imgURL": "/common/footer/facebook.svg",
        "hoverable": false
    },{
        "name": "wechat",
        "barCodeURL": "/common/footer/wechat-qr.jpg",
        "imgURL": "/common/footer/wechat.svg",
        "hoverable": true
    },{
        "name": "qq",
        "barCodeURL": "/common/footer/qq-qr.jpg",
        "imgURL": "/common/footer/qq.svg",
        "hoverable": true
    }
]

// Author introduction. You need to provide html here.
export const INTRODUCTION = `
  <p>
    Hi, I am Fei Ding (Phillip), a computer science student studying at Georgia Tech with threads in 
    information internetwork and intelligence. I am looking for a summer 2021 SWE internship.
  </p>
  <p>
    I am experienced in developing web and mobile applications. By working on my personal and 
    group projects I'd like to explore and teach myself new technologies on the way. I am also 
    interested in various fields in AI/ML and their applications in the real world.
  </p>
  <p>
    I am also an undergraduate researcher. I've worked closely with graduate students in developing 
    sophisticated NLP models, and I am currently collaborating in a robotics vision lab to evaluate 
    different CV algorithms in terms of their performances in various robotics tasks.
  </p>
  <p>
    I code in Java, Python, JavaScript, and C. As an experienced web developer, I primarily use 
    ExpressJS &amp; MongoDB or Python Flask &amp; MySQL for server side development and can 
    proficiently craft responsive web UIs using jQuery or ReactJS. I regularly maintain my portfolio 
    on a <a href='/'>website&amp;blog</a> designed, built, and deployed by myself, which is what you 
    are seeing now!
  </p>
`


/**
 * This section defines APIs for this application to get and manipulate on its data.
 * Don't change anything here if you have no idea what you are doing.
 */
const useLocal = false // turn it on if debugging against backend.
const domain = useLocal ? 'http://localhost:8000' : '' // This is for debugging purpose only
// Data Retrieval: supports server or serverless.
export const TOPIC_LIST = !server ? '/api/topic/list.json' : domain + '/api/menu/topic/list'
export const FRIEND_LIST = !server ? '/api/friend/list.json' : domain + '/api/menu/friend/list'
export const FOOTER_ICON_LIST = '/api/footer/icon/list.json'
export const TAG_LIST = !server ? '/api/tag/list.json' : domain + '/api/tag/list'
export const BLOG_LIST = !server ? '/api/blog/list.json' : domain + '/api/blog/list'
export const BLOG_DETAIL = !server ? (id) => (`/api/blog/detail/${id}.json`) : (id) => (domain + `/api/blog/detail?id=${id}`)
// Data Manipulation: must have a surver!
export const ADMIN_LOGIN = !server ? '' : domain + '/api/user/login'
export const TAG_LIST_ADD = !server ? '' : domain + '/api/tag/new'
export const TAG_LIST_DELETE = !server ? '' : domain + '/api/tag/delete'
export const TAG_LIST_UPDATE = !server ? '' : domain + '/api/tag/update'
export const FRIEND_LIST_ADD = !server ? ''  : domain + '/api/menu/friend/new'
export const FRIEND_LIST_DELETE = !server ? '' : domain + '/api/menu/friend/delete'
export const FRIEND_LIST_UPDATE = !server ? '' : domain + '/api/menu/friend/update'
export const PINNED_LIST_ADD = !server ? '' : domain + '/api/menu/topic/new'
export const PINNED_LIST_DELETE = !server ? '' : domain + '/api/menu/topic/delete'
export const PINNED_LIST_UPDATE = !server ? '' : domain + '/api/menu/topic/update'
export const BLOG_DELETE = !server ? '' : domain + '/api/blog/delete'
export const BLOG_CREATE = !server ? '' : domain + '/api/blog/new'
export const BLOG_UPDATE = !server ? '' : domain + '/api/blog/update'