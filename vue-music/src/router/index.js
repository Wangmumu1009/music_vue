import Vue from 'vue'
import Router from 'vue-router'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Recommend from 'components/recommend/recommend'
import Search from 'components/search/search'
import Tab from 'components/tab/tab'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend'//根元素，进来的时候就跳到这里
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/tab',
      component: Tab
    }
  ]
})
