import {
  defaultIcon,
  defaultEF,
  defaultBoxConfig,
} from './config/defaultConfig'

class XBox {
  static popContent = null
  static promptContent = null

  /********************************************************************************
   * @brief: 提示文本
   * @param {*} mes 消息文本
   * @param {*} config 消息配置
   * @return {*}
   ********************************************************************************/
  static promptMes(mes = '', config) {
    let boxConfig = Object.assign({}, defaultBoxConfig, config)
    // 创建容器
    const promptContentID = 'prompt-content'
    this.promptContent = document.querySelector('#' + promptContentID)
    if (!this.promptContent) {
      this.promptContent = document.createElement('div')
      this.promptContent.id = promptContentID
      document.querySelector('#app').appendChild(this.promptContent)
    }
    // 创建盒子
    const promptBox = document.createElement('div')
    promptBox.className = 'prompt-box'
    promptBox.innerHTML = `${defaultIcon[0].mes}<div class="message-box">${mes}</div>`

    this.animatationHandle(promptBox, this.promptContent, () => {
      promptBox.style.display = 'none'
      promptBox.remove()
      this.promptContent.remove()
    })
  }

  /********************************************************************************
   * @brief: 弹出消息
   * @param {*} mes 消息文本
   * @param {*} config 消息配置
   * @return {*}
   ********************************************************************************/
  static popMes(mes = '', config) {
    const boxConfig = Object.assign({}, defaultBoxConfig, config)
    // 创建容器
    const popContentID = 'pop-content'
    this.popContent = document.querySelector('#' + popContentID)
    if (!this.popContent) {
      this.popContent = document.createElement('div')
      this.popContent.id = popContentID
      document.querySelector('#app').appendChild(this.popContent)
    }

    const popBox = document.createElement('div')
    popBox.className = `pop-box ${boxConfig.style[0] == 1 ? 'pop-box-s-1' : ''}`
    popBox.innerHTML = `
    <div class="font-box ${
      boxConfig.style[1] == 1
        ? `font-box-s-1-${boxConfig.type}`
        : `font-box-s-2-${boxConfig.type}`
    } ">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="${defaultIcon[0][boxConfig.type]}"></use>
          </svg>
    </div>
    <div class="message-box">${mes}</div>
    `
    popBox.style.width = boxConfig.width
    this.animatationHandle(boxConfig, popBox, this.popContent, () => {
      popBox.style.display = 'none'
      popBox.remove()
      if (boxConfig.callback) {
        boxConfig.callback()
      }
    })
  }

  /********************************************************************************
   * @brief: 动画处理
   * @param {*} boxContent 动画 dom 元素
   * @param {*} boxParent 动画主体的父元素
   * @param {*} endCallback 移出动画完成回调
   * @param {*} beginCallback 进入动画完成回调
   * @return {*}
   ********************************************************************************/
  static animatationHandle = (
    boxConfig,
    boxContent,
    boxParent,
    endCallback = null,
    beginCallback = null
  ) => {
    // 添加开始动画
    const beginAE = new KeyframeEffect(boxContent, defaultEF[0].in, {
      duration: 300,
      easing: 'ease-out',
    })
    // 在首位添加
    boxParent.insertBefore(boxContent, boxParent.firstChild)
    const beginA = new Animation(beginAE, document.timeline)
    beginA.play()
    beginA.onfinish = beginCallback
    setTimeout(() => {
      // 结束动画
      const backAnimationEffect = new KeyframeEffect(
        boxContent, // element to animate
        defaultEF[0].out,
        {
          duration: 300,
          easing: 'ease-in',
        }
      )
      const backAnimation = new Animation(
        backAnimationEffect,
        document.timeline
      )
      backAnimation.play()
      backAnimation.onfinish = endCallback
    }, boxConfig.dur)
  }
}

export { XBox }
