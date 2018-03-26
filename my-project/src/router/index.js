import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '@/components/ArticleList'
import ArticleAdd from '@/components/ArticleAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/add',
      name: 'ArticleAdd',
      component: ArticleAdd
    }
  ]
})
