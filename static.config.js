import axios from 'axios'
 import posts from './posts/index.js';

export default {
  siteRoot: 'https://illulli.github.io',
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    //const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
   // let posts = file;
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
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
}
