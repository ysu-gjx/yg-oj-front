import { RouteRecordRaw } from 'vue-router'
// import HomeView from "@/views/ExampleView.vue";
// import UserLayout from "@/layouts/UserLayout.vue";
// import UserLoginView from "@/views/user/UserLoginView.vue";
// import UserRegisterView from "@/views/user/UserRegisterView.vue";
// import AdminView from "@/views/AdminView.vue";
// import NoAuthView from "@/views/NoAuthView.vue";
// import ACCESS_ENUM from "@/access/accessEnum";
// import AddQuestionView from "@/views/question/AddQuestionView.vue";
// import ManageQuestionView from "@/views/question/ManageQuestionView.vue";
// import QuestionsView from "@/views/question/QuestionsView.vue";
// import QuestionSubmitView from "@/views/question/QuestionSubmitView.vue";
// import ViewQuestionView from "@/views/question/ViewQuestionView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'shouye',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      access: 'canAdmin'
    }
  },
  {
    path: '/about',
    name: 'ceshi',
    component: () => import('@/components/Test.vue')
  },
  {
    path: '/noAuth',
    name: '没有权限',
    component: () => import('@/views/NoAuthView.vue')
  }
]
