<template lang="pug">
main
  //article.login-img
  article.login-box
    
    .login-logo
      a(href="")
        img(src="@img/login/dragon/loginLogo.png" alt="")
    el-form(
      :model="formData"
      ref="loginForm"
      :rules="formRules"
      hide-required-asterisk
    )
      el-form-item(
        label="Account"
        prop="username"
      )
        el-input(
          v-model="formData.username"
          type="text"
          @keyup.native.enter="checkValidate"
          placeholder="請填入帳號"
        )
      el-form-item(
        label="Password"
        prop="password"
      )
        el-input(
          v-model="formData.password"
          type="password"
          @keyup.native.enter="checkValidate"
          placeholder="請填入密碼"
        )
      el-button( 
        type="success" 
        @click="checkValidate"
      ) 
        span LOGIN

</template>

<script>
import { onMounted, reactive, ref, computed, nextTick } from 'vue'
import { useStore } from 'vuex'
import { getRules } from '@mixins/panelsMixin'
import authApi from '@api/auth'
import router from '@router'
import { registerRouter } from '@router'
import { updateLocalStorgeToken } from '@/utils'
export default {
  name: 'DragonLogin',
  setup() {
    const store = useStore()
    const defaultpage = computed(() => store.state.user.defaultpage)
    const loginForm = ref(null)
    const formData = reactive({
      // region: '',
      username: '',
      password: '',
      auth_type: 'local',
    })
    const formRules = getRules(formData)
    const loginTypes = [
      {
        id: 1,
        title: 'local',
      },
    ]
    const checkValidate = () => {
      loginForm.value.validate((valid) => {
        if (valid) {
          submit()
        }
      })
    }
    const submit = async () => {
      try {
        const response = await authApi.login(formData)
        if (response.access_token) {
          updateLocalStorgeToken(response)
          await registerRouter()
          await nextTick()
          const nextPage = defaultpage.value ? '/BackStage' : '/dashboard'
          router.push({ path: nextPage })
        } else {
          alert('無回傳access_token')
        }
      } catch {
        //path
      }
    }
    onMounted(() => {
      store.dispatch('dashboard/resetFramework')
    })
    return {
      formData,
      loginTypes,
      checkValidate,
      loginForm,
      formRules,
    }
  },
}
</script>

<style lang="sass" scoped>
main
  background-image: url(~@img/login/dragon/loginbg2.png)
  background-color: #B1DAEC
  // background-image: linear-gradient(160deg, #1783c3 0%, #80D0C7 50%, #4399e6 100%)
  min-height: 100vh
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  // box-shadow: inset 157px 1px 20px 124px rgb(0 0 0 / 35%)
  +flex-center
  // flex-direction: column //影響float
    background-size: cot
  .login-img
    // float: right
    width: 320px
    height: 370px
    margin-left: 6rem
    background-image: url(~@img/login/dragon/left.gif)
    background-size: contain
    background-repeat: no-repeat
    // margin-right: 15rem
    background-image: rgba(255, 255, 255 ,0.1)
    // filter: saturate(350%)
    border-radius:0 10px 10px 0
    // box-shadow: 150px 0px 20px 150px rgb(0 0 0 / 25%)
    span
      size: 50px
      font-size: 50px

  .login-box
    // float: left
    width: 450px
    height: 450px
    margin-left: 7rem
    //background-image: url(~@img/login/iron4.jpg)
    background: rgba(255 255 255 / .0)
    // box-shadow: -170px 0px 20px 150px rgb(0 0 0 / 25%)
    // border:5px #FFAC55 solid
    border-radius:10px
    display: flex
    flex-direction: column //影響float
    .login-logo
      margin-bottom: 3.5rem
      width: 350px
      height: 100px
      align-self: center
      margin-top: 25px
      margin-left: 0rem
      img
        // margin-top: 1rem
        // margin-left: 3rem
        width: 100%
    .el-form
      margin: 0px
  :deep(.el-form-item)
    display: flex
    flex-direction: row
    align-items: center
    background-color: rgba(250 250 250 / 1)
    height: 70px
    width: 350px
    border-bottom: 2.5px solid #fcff21
    border-radius: 1.5rem
    margin-left: 50px

    .el-form-item__label
      padding: 0.375rem 0.75rem
      font-size: 1rem
      color: #143062
      font-weight: 700
      width: 90px
      letter-spacing: 0
      text-align: center
    .el-form-item__content
      flex: 1
    .el-form-item__error
      padding: 4px 15px 0
    .el-select
      width: 100%
      border-left: 1px solid #d8dbe0
    .el-input__inner
      background-color: transparent
      border: none
      color: #000
      font-weight: 900
      font-size: initial
  .el-form-item:hover
    border-bottom: 6.5px solid #fcff21
    color: #000

  .el-button
    +size(40%,35px)
    width: 150px
    height: 40px
    margin-left: 120px
    outline: none
    border: none
    cursor: pointer
    color: #fff
    position: relative
    padding: 0.5em 1em
    font-size: 1.2rem
    background-color: #96a9ea
    z-index: 1
    overflow: hidden
    box-shadow: 3px 2px 2px 1px #888888
    span
      font-size: initial
      font-weight: 500
  .el-button::before
    z-index: -1
    content: ""
    position: absolute
    top: 50%
    left: 50%
    width: 1em
    height: 1em
    border-radius: 50%
    background-color: #213073
    transform-origin: center
    transform: translate3d(-50%, -50%, 0) scale(0, 0)
    transition: transform 0.45s ease-in-out
  .el-button:hover::before
    transform: translate3d(-50%, -50%, 0) scale(15, 15)
  .el-button:active
    box-shadow: 0px -2px 2px 3.5px #1f1f1f inset

  //   box-shadow: 0px 0px 5px 20px rgb(51 51 51 / 51%) inset
</style>
