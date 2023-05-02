<template lang="pug">
#Home
  Header
  main.main
    .alert
      ul
        li(v-for="item in alertList")
          .row
            figure
              img(src="~@img/home/alert.png")
            p.title {{item.title}}
            a(:herf="item.url") more
          p.time {{getTime(item.time)}}
    .link
      a(
        v-for="item in linkList"
        :herf="item.url"
      )
        figure
          img(:src="item.img")
        p {{item.title}}
  footer.footer
    .left
      h2 
        b 112年關鍵績效指標
        span
      p 重大資安事件 0 件
        br
        | ISO 27001第二期專案
        br
        | 強化資安防護
        br 
        | 隨身碟使用申請線上化
        br
        | 製程電腦設備資安檢查表功能強化
    .center
      h2 資安防護人人有責
      p 密碼換新、程式更新、下載要當心
        br
        | 受駭超容易、異常要留意
      figure
        img(src="@img/home/footercenter2.png", alt="alt")
    .right
      h2 
        b 重要資安宣導
        span
      p 趨勢科技提醒有惡意人士冒用中央健康保險署網址，大量寄發謊稱「健保費扣費明細」，實則夾帶惡意程式附件的惡意郵件，若執行附件會下載後門程式，進一步感染使用者的電腦。提醒使用者應提高警覺，勿隨是開啟任何可疑的郵件與其中的附件。
</template>
<script>
import Header from '@/layout/header'
const alertList = [
  {
    title:
      '2月份Windows更新及防毒軟體更新已派送，敬請配合系統提示重啟電腦之類的話',
    url: 'javascript:void(0)',
    time: '',
  },
]

const linkList = [
  {
    img: require('@img/home/center.png'),
    title: '戰情中心',
    url: 'javascript:void(0)',
  },
  {
    img: require('@img/home/news.png'),
    title: '資安新聞',
    url: 'javascript:void(0)',
  },
  {
    img: require('@img/home/info.png'),
    title: '申請資訊',
    url: 'javascript:void(0)',
  },
  {
    img: require('@img/home/policy.png'),
    title: '資安政策',
    url: 'javascript:void(0)',
  },
  {
    img: require('@img/home/announce.png'),
    title: '資安宣導',
    url: 'javascript:void(0)',
  },
  {
    img: require('@img/home/note.png'),
    title: '大事記要',
    url: 'javascript:void(0)',
  },
  {
    img: require('@img/home/paper.png'),
    title: '技術文件',
    url: 'javascript:void(0)',
  },
  {
    img: require('@img/home/record.png'),
    title: '會議記錄',
    url: 'javascript:void(0)',
  },
]
export default {
  name: 'HomePage',
  components: {
    Header,
  },
  setup() {
    const getTime = (val) => {
      const date = val ? new Date(val) : new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const hour = date.getHours()
      const minute = date.getMinutes()
      return `${year}/${getZero(month)}/${getZero(day)} ${getZero(
        hour
      )}:${getZero(minute)}`
    }

    const getZero = (val) => {
      return val > 10 ? val : `0${val}`
    }

    return {
      alertList,
      getTime,
      linkList,
    }
  },
}
</script>
<style lang="sass" scoped>
#Home
  display: flex
  flex-direction: column
  justify-content: space-between
  min-height: 100%
  // padding: 120px 0 300px
#Home .main
  flex: 1
  .alert
    width: 1110px
    margin: 25px auto
    background: linear-gradient(89.66deg, #F4A09C -1.11%, #FF676B 100.62%)
    box-shadow: 0px 10px 40px rgba(111, 24, 24, 0.2)
    border-radius: 8px
    padding: 8px 24px
    ul
      width: 100%
      li
        +size(100%,55px)
        display: flex
        align-items: center
        justify-content: space-between
        font-family: 微軟正黑體
        font-weight: 700
        font-size: 18px
        line-height: 21px
        letter-spacing: 0
        color: #fff
        .row
          align-items: center
        figure
          width: 26px
          margin-right: 26px
        .title
          +size(630px,27px)
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-box-orient: vertical
          -webkit-line-clamp: 1
        p
          font-weight: 700
        a
          margin-left: 24px
          position: relative
          cursor: pointer
          &:before
            +fakeLine(0%,2px,#fff)
            position: absolute
            bottom: -2px
            left: 50%
            transform: translateX(-50%)
            transition: all .4s ease
          &:hover
            &:before
              width: 100%
  .link
    display: flex
    flex-wrap: wrap
    width: 1120px
    margin: auto
    a
      cursor: pointer
      +flex-center
      flex-direction: column
      +size(260px,260px)
      margin: 0 10px 20px
      background: radial-gradient(92.92% 91.29% at 0% 0%, rgba(241, 247, 255, 0.7) 0%, rgba(255, 255, 255, 0.343) 44.6%, rgba(255, 255, 255, 0.546) 65.69%, rgba(187, 214, 248, 0.294) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, linear-gradient(146.92deg, rgba(186, 216, 255, 0.7) 0%, rgba(255, 255, 255, 0.154) 57.19%, rgba(211, 224, 242, 0.154) 92.05%)
      box-shadow: -4px -4px 14px #FFFFFF, 12px 12px 20px rgba(35, 86, 163, 0.25)
      backdrop-filter: blur(6px)
      border-radius: 72px
      position: relative
      transition: all .4s ease
      &:hover
        box-shadow: -4px -4px 14px #FFFFFF, 12px 12px 40px rgba(35, 86, 163, 0.8)
      &:before
        +fakeLine(150px,150px,rgba(23, 86, 181, 0.2))
        position: absolute
        left: 76px
        top: 107px
        filter: blur(50px)
        z-index: 0
      figure,p
        position: relative
        z-index: 1
      figure
        height: 175px
        +flex-center
      p
        font-style: normal
        font-weight: 600
        font-size: 28px
        line-height: 33px

#Home .footer
  max-width: 1720px
  width: 100%
  // position: absolute
  // bottom: 30px
  // left: 50%
  // transform: translateX(-50%)
  padding: 0 0 30px
  margin: auto
  display: flex
  align-items: flex-end
  text-align: center
  @media (max-width:1920px)
    width: 89.5vw
  .left
    width: 475px
    min-height: 235px
    background: linear-gradient(110.55deg, rgba(255, 255, 255, 0.553) 0.6%, rgba(244, 247, 255, 0.14) 66.64%, rgba(244, 247, 255, 0) 95.7%)
    box-shadow: inset 4px 4px 4px rgba(255, 255, 255, 0.5),0px 4px 50px rgba(37, 101, 183, 0.22)
    border-radius: 24px
    padding: 25px 30px 15px 15px
    @media (max-width:1920px)
      width: 24.7vw
    h2
      font-weight: 900
      font-size: 32px
      line-height: 1
      color: #0C5AEE
      padding: 0 0 25px
      position: relative
      width: 100%
      b
        position: relative
        z-index: 1
      span
        position: absolute
        bottom: 0
        left: 50%
        transform: translateX(-50%)
        +size(80%,45px)
        +flex-center
        z-index: 0
        &:before
          +fakeLine(100%,100%,rgba(255, 255, 255, 0.3))
          filter: blur(15px)
          border-radius: 50%
          top: 0
          left: 0
        &:after
          +fakeLine(100%,2px,rgba(255, 255, 255, 0.3))
          background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 53.68%, rgba(255, 255, 255, 0) 100%)
          position: absolute
          top: calc(50% + 7.5px)
          left: 50%
          transform: translate(-50%,-50%)
    p
      font-weight: 500
      font-size: 20px
      line-height: 1.3
      color: #003394
  .center
    flex: 1
    min-height: 245px
    margin: 0 -40px
    background-image: url(~@img/home/footercenter.png)
    background-size: 100% 100%
    border-radius: 24px
    color: #FFFFFF
    position: relative
    z-index: 1
    padding: 40px 330px 40px 0
    overflow: hidden
    @media (max-width:1920px)
      padding: 2vw 17.18vw 2vw 0
      margin: 0 -2vw
    h2
      font-weight: 700
      font-size: 50px
      line-height: 1.2
      position: relative
      margin-bottom: 30px
      @media (max-width:1920px)
        font-size: 2.6vw
        margin-bottom: 1.5vw
    p
      font-weight: 400
      font-size: 24px
      line-height: 1.5
      letter-spacing: 0.03em
    figure
      position: absolute
      top: 0
      left: 60%
      width: 330px
      @media (max-width:1920px)
        width: 17.18vw
  .right
    width: 475px
    min-height: 235px
    background: linear-gradient(110.55deg, rgba(255, 255, 255, 0.553) 0.6%, rgba(244, 247, 255, 0.14) 66.64%, rgba(244, 247, 255, 0) 95.7%)
    box-shadow: inset 4px 4px 4px rgba(255, 255, 255, 0.5),0px 4px 50px rgba(37, 101, 183, 0.22)
    border-radius: 24px
    padding: 25px 60px 25px
    @media (max-width:1920px)
      width: 24.7vw
      padding: 25px 3.125vw 25px
    h2
      font-weight: 700
      font-size: 32px
      line-height: 1
      color: #0C5AEE
      padding: 0 0 30px
      position: relative
      b
        position: relative
        z-index: 1
      span
        position: absolute
        bottom: 0
        left: 50%
        transform: translateX(-50%)
        +size(80%,45px)
        +flex-center
        z-index: 0
        &:before
          +fakeLine(100%,100%,rgba(255, 255, 255, 0.3))
          background: rgba(134, 185, 252, 0.3)
          filter: blur(15px)
          border-radius: 50%
          top: 0
          left: 0
        &:after
          +fakeLine(100%,2px,rgba(255, 255, 255, 0.3))
          background: linear-gradient(270deg, rgba(134, 185, 252, 0) 0%, #86B9FC 53.68%, rgba(134, 185, 252, 0) 100%)
          position: absolute
          top: calc(50% + 7.5px)
          left: 50%
          transform: translate(-50%,-50%)
    p
      font-weight: 500
      font-size: 16px
      line-height: 1.2
      color: #003394
</style>
