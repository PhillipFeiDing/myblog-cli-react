import { createGlobalStyle } from 'styled-components'

export const GlobalStylePlaceholder = createGlobalStyle`
  body {
    background: #2c3e50;
    overflow-x: hidden;
    .link-style:hover {
      text-decoration: underline;
    }
  }
`

export const GlobalFont = createGlobalStyle`
  body {
    font-family: Georgia;
  }
`

export const DarkMode = createGlobalStyle`
  body {
    #content-wrapper {
      background: #000;
    }
    #page-header-display-wrapper {
      background: #130f0e;
    }
    #author-introduction {
      color: #fff;
    }
    #topic-display {
      color: #fff;
    }
    .main-content {
      background-image: linear-gradient(
        to right,
        rgba(0,0,0,0.4),
        rgba(0,0,0,0.6),
        rgba(0,0,0,0.7),
        rgba(0,0,0,0.75),
        rgba(0,0,0,0.8),
        rgba(0,0,0,0.8),
        rgba(0,0,0,0.8),
        rgba(0,0,0,0.8),
        rgba(0,0,0,0.8),
        rgba(0,0,0,0.8),
        rgba(0,0,0,0.8),
        rgba(0,0,0,0.8),
        rgba(0,0,0,0.8),
        rgba(0,0,0,0.8),
        rgba(0,0,0,0.8),
        rgba(0,0,0,0.8),
        rgba(0,0,0,0.8),
        rgba(0,0,0,0.8),
        rgba(0,0,0,0.8),
        rgba(0,0,0,0.8),
        rgba(0,0,0,0.75),
        rgba(0,0,0,0.7),
        rgba(0,0,0,0.6),
        rgba(0,0,0,0.4)
      )
    }
    .blog-date-display {
      color: #fff;
    }
    .blog-title-display, .blog-meta-list-item-authorName {
      color: #9facad !important;
    }
    .blog-exerpt-text {
      color: #ffe8dd;
    }
    .blog-meta-list-item {
      color: #d3c1af !important;
    }
    .blog-item-wrapper {
      &.hovering {
        background: #231f1e;
      }
    }
    .dashboard-item-wrapper {
      background: #231f1e;
      .dashboard-title-span {
        color: #fff;
      }
      hr {
        background-color: #ccd0d1;
      }
      p,span {
        color: #d3c1af;
      }
    }
    #container-wrapper {
      background-color: #000;
    }
    #header-wrapper {
      color: #dedad6;
      background: #130f0e
    }
    #detail-content {
      color: #ddd;
    }
  }
`