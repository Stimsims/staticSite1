import axios from 'axios'
 import posts from './posts/index.js';
import workbox from 'workbox-webpack-plugin';
import React from 'react';

/*
  siteRoot: 'https://illulli.github.io/',
  basePath:'staticSite1',

  siteRoot: 'https://illulli-1e5a.com/',

   siteRoot: 'http://localhost:3000',
*/

export default {
  siteRoot: 'https://illulli-1e5a.com/',
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    //const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
   // let posts = file;
  //  console.log("posts = ");
  //  console.log(posts);
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        }))
      },
      {
        path: 'about',
        component: 'src/containers/About',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  Document: class CustomHtml extends React.Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props
      const script1 = "document.createElement('picture')"
      const workboxScript = `// Check that service workers are registered
      if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js');
        });
      }`;
      return (
        <Html lang="de">
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>My Title</title>
            {renderMeta.styleTags}
            
          </Head>
          <Body>{children}
          <script type="text/javascript" dangerouslySetInnerHTML={{ __html: workboxScript }} />
          </Body>
        </Html>
      )
    }
  },
  // webpack:[
  //   (prev, 
  //     {
  //     stage, defaultLoaders
  //     }
  //   ) => {
  //       console.log("webpack mod called")
  //       console.log(prev);
  //       prev.plugins = [
  //         ...prev.plugins,
  //         new workbox.GenerateSW()
  //       ]
  //       return {
  //         ...prev
  //       };
  //   }
  // ]
}
