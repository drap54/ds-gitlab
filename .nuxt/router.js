import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b8322264 = () => interopDefault(import('../pages/marketing/index.vue' /* webpackChunkName: "pages/marketing/index" */))
const _5174afcc = () => interopDefault(import('../pages/marketing/about/index.vue' /* webpackChunkName: "pages/marketing/about/index" */))
const _54f2c590 = () => interopDefault(import('../pages/marketing/vjlp1/index.vue' /* webpackChunkName: "pages/marketing/vjlp1/index" */))
const _015ffa8c = () => interopDefault(import('../pages/marketing/vjlp3/index.vue' /* webpackChunkName: "pages/marketing/vjlp3/index" */))
const _3768631a = () => interopDefault(import('../pages/marketing/vjlp1/_slug/index.vue' /* webpackChunkName: "pages/marketing/vjlp1/_slug/index" */))
const _f4c0eb16 = () => interopDefault(import('../pages/marketing/vjlp3/_slug/index.vue' /* webpackChunkName: "pages/marketing/vjlp3/_slug/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/marketing",
    component: _b8322264,
    name: "marketing"
  }, {
    path: "/marketing/about",
    component: _5174afcc,
    name: "marketing-about"
  }, {
    path: "/marketing/vjlp1",
    component: _54f2c590,
    name: "marketing-vjlp1"
  }, {
    path: "/marketing/vjlp3",
    component: _015ffa8c,
    name: "marketing-vjlp3"
  }, {
    path: "/marketing/vjlp1/:slug",
    component: _3768631a,
    name: "marketing-vjlp1-slug"
  }, {
    path: "/marketing/vjlp3/:slug",
    component: _f4c0eb16,
    name: "marketing-vjlp3-slug"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
