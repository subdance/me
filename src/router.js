import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/TeaRoom.vue'
import Projects from './views/Projects.vue'
import SinglePost from './views/SinglePost.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
      component: Home,
      children: [
        {
          name: "post",
          path: '/post/:name',
          component: SinglePost,
        },
      ],
		},
		{
			path: '/projects',
			name: 'projects',
			component: Projects
		}
    ],
})
