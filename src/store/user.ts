import { defineStore } from 'pinia'
import { ref } from 'vue'

function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export const useUserStore = defineStore('user', () => {
  const loginUser = ref<Record<string, any>>()

  // action
  const getLoginUser = async () => {
    await wait(3000)
    loginUser.value = {
      userName: 'admin',
      userRole: 'admin'
    }
  }

  return {
    loginUser,
    getLoginUser
  }
})
