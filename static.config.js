import axios from 'axios'
 import posts from './posts/index.js';

export default {
  siteRoot: 'https://illulli.github.io',
  basePath: 'staticSite1',
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    //const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
   // let posts = file;
    return [
      {
        path: '/',
        component: 'staticSite1/src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `staticSite1//post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: 'staticSite1/about',
        component: 'src/containers/About',
      },
      {
        is404: true,
        component: 'staticSite1/src/containers/404',
      },
    ]
  },
}
