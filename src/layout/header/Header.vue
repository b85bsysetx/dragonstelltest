<template lang="pug">
header#Header
  .title {{title}}
  .info
    .email.row
      figure
        img(src="~@img/layout/header/profile.png")
      p {{email}}
    .time.row
      figure
        img(src="~@img/layout/header/calendar.png")
      p {{dayFormat}} 
      p {{timeFormat}}
</template>
<script>
import router from '@/router'
import { computed, onMounted, ref } from 'vue'
export default {
  name: 'HeaderItem',
  setup() {
    const title = computed(() => router.currentRoute.value.meta.title)
    const email = 'asdfg@gmail.com'
    const dayFormat = ref('')
    const timeFormat = ref('')
    const getTime = () => {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const hour = date.getHours()
      const minute = date.getMinutes()
      dayFormat.value = `${year}/${getZero(month)}/${getZero(day)}`
      timeFormat.value = `${getZero(hour)}:${getZero(minute)}`
    }

    const getZero = (val) => {
      return val > 10 ? val : `0${val}`
    }

    onMounted(() => {
      setInterval(getTime, 1000)
    })
    return { title, email, dayFormat, timeFormat }
  },
}
</script>
<style lang="sass" scoped>
#Header
  display: flex
  align-items: center
  justify-content: space-between
  // position: absolute
  // top: 20px
  // left: 0
  padding: 20px 0 0
  position: relative
  width: 100%
  z-index: 1
  .title
    width: 1310px
    height: 100px
    background-image: url(~@img/layout/header/titleBg.png)
    background-size: 100% 100%
    padding: 0 0 0 180px
    display: flex
    align-items: center
    color: #fff
    font-family: Futura
    font-size: 46px
    font-weight: 700
    line-height: 61px
    letter-spacing: 0em
    @media (max-width: 1920px)
      width: 68.22vw
      +size(68.22vw,5.2vw)
      font-size: 2.3vw
      line-height: 3.1vw
      padding: 0 0 0 9.375vw
  .info
    display: flex
    align-items: center
    padding: 10px
    background: rgba(255, 255, 255, 0.58)
    border-radius: 10px
    position: absolute
    top: calc(50% + 10px)
    right: 85px
    transform: translateY(-50%)
    @media (max-width: 1920px)
      right: 4.4vw
    .row
      align-items: center
      &:not(:last-child)
        margin-right: 40px
    figure
      width: 32px
      margin-right: 12px
      img
        width: 100%
    p
      font-family: 微軟正黑體
      font-style: normal
      font-weight: 400
      font-size: 20px
      line-height: 24px
      color: #397CE0
      letter-spacing: 0
      &:not(:last-of-type)
        margin-right: 15px
</style>
