import { defaultIcon, defaultAE } from './config/defaultConfig'

class XBox {
  static index = 0
  static popContent = null
  static promptContent = null

  // 提示文本
  static promptMes(mes = '', {type = 'info', dur = 2000} = {}) {
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
    promptBox.innerHTML = `${defaultIcon[0]}<div class="message-box">${mes}${this.index++}</div>`

    // 添加开始动画
    const beginAE = new KeyframeEffect(promptBox, defaultAE[0].in, {
      duration: 300,
      easing: 'ease-out',
    })
    // 在首位添加
    this.promptContent.insertBefore(promptBox, this.promptContent.firstChild)
    const beginA = new Animation(beginAE, document.timeline)
    beginA.play()
    setTimeout(() => {
      // 结束动画
      const backAnimationEffect = new KeyframeEffect(
        promptBox, // element to animate
        defaultAE[0].out,
        {
          duration: 300,
          easing: 'ease-in',
        }
      )
      const backAnimation = new Animation(backAnimationEffect, document.timeline)
      backAnimation.play()
      backAnimation.onfinish = () => {
        promptBox.style.display = 'none'
        promptBox.remove()
        // this.promptContent.remove()
      }
    }, dur)
  }

  // 弹出消息
  static popMes(mes = '', { type = 'info', dur = 2000 } = {}) {
    // 创建容器
    const popContentID = 'pop-content'
    this.popContent = document.querySelector('#' + popContentID)
    if (!this.popContent) {
      this.popContent = document.createElement('div')
      this.popContent.id = popContentID
      document.querySelector('#app').appendChild(this.popContent)
    }

    const popBox = document.createElement('div')
    popBox.className = 'pop-box'
    popBox.innerHTML = `${defaultIcon[0]}<div class="message-box">${mes}${this.index++}</div>`

    // 添加开始动画
    const beginAE = new KeyframeEffect(popBox, defaultAE[0].in, {
      duration: 300,
      easing: 'ease-out',
    })
    // 在首位添加
    this.popContent.insertBefore(popBox, this.popContent.firstChild)
    const beginA = new Animation(beginAE, document.timeline)
    beginA.play()
    setTimeout(() => {
      // 结束动画
      const backAnimationEffect = new KeyframeEffect(
        popBox, // element to animate
        defaultAE[0].out,
        {
          duration: 300,
          easing: 'ease-in',
        }
      )
      const backAnimation = new Animation(backAnimationEffect, document.timeline)
      backAnimation.play()
      backAnimation.onfinish = () => {
        popBox.style.display = 'none'
        popBox.remove()
      }
    }, dur)
  }
}

export { XBox }