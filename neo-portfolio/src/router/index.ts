import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/_index.vue'
import ProjectsView from '@/views/projects/_index.vue'
import ExperiencesView from '@/views/experiences/_index.vue'
import CurriculumView from '@/views/curriculum/_index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active-link',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projetos',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/experiencias',
      name: 'experiences',
      component: ExperiencesView
    },
    {
      path: '/curriculo',
      name: 'curriculum',
      component: CurriculumView
    }
  ]
})

export default router
