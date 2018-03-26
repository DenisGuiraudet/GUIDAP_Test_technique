import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '@/components/ArticleList'
import ArticleAdd from '@/components/ArticleAdd'
import ArticleChange from '@/components/ArticleChange'

Vue.use(Router)

function dynamicProp (route) {
  return {
    id: route.params.id
  }
}

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
    },
    {
      path: '/change/:id',
      name: 'ArticleChange',
      component: ArticleChange,
      props: dynamicProp
    }
  ]
})
