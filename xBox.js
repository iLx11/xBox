import { defaultIcon, defaultAE } from './config/defaultConfig'

class XBox {
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
    promptBox.innerHTML = `${defaultIcon[0]}<div class="message-box">${mes}</div>`
    
    this.animatationHandle(promptBox,  this.promptContent, () => {
      promptBox.style.display = 'none'
      promptBox.remove()
      this.promptContent.remove()
    })
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
    popBox.innerHTML = `${defaultIcon[0]}<div class="message-box">${mes}</div>`

    this.animatationHandle(popBox, this.popContent, () => {
      popBox.style.display = 'none'
      popBox.remove()
    })
  }

  // 动画处理
  static animatationHandle = (boxContent, boxParent, callback) => {
    // 添加开始动画
    const beginAE = new KeyframeEffect(boxContent, defaultAE[0].in, {
      duration: 300,
      easing: 'ease-out',
    })
    // 在首位添加
    boxParent.insertBefore(boxContent, boxParent.firstChild)
    const beginA = new Animation(beginAE, document.timeline)
    beginA.play()
    setTimeout(() => {
      // 结束动画
      const backAnimationEffect = new KeyframeEffect(
        boxContent, // element to animate
        defaultAE[0].out,
        {
          duration: 300,
          easing: 'ease-in',
        }
      )
      const backAnimation = new Animation(backAnimationEffect, document.timeline)
      backAnimation.play()
      backAnimation.onfinish = callback
    }, 2000)
  }
}

export { XBox }