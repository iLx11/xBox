import '../font/iconfont.js'
/********************************************************************************
 * @brief: 默认图标
 ********************************************************************************/
export const defaultIcon = [
  {
    mes: `#icon-message`,
    info: `#icon-info-o`,
    warn: `#icon-error-circle`,
    success: `#icon-icon_success`,
    err: `#icon-error`
  },
]

/********************************************************************************
 * @brief: 默认进入与退出效果
 ********************************************************************************/
export const defaultEF = [
  {
    in: [
      {
        opacity: '0%',
        transform: 'translateY(0%) scale(0.6)',
      },
      {
        transform: 'translateY(8px) scale(1.1)',
      },
      {
        transform: 'translateY(0%) scale(1) ',
        opacity: '100%',
      },
    ],
    out: [
      {
        opacity: '100%',
        transform: 'translateY(0%) scale(1)',
      },
      {
        opacity: '70%',
        transform: 'translateY(12px) scale(1.1)',
      },
      {
        opacity: '0%',
        transform: 'translateY(-8px)scale(0.8)',
      },
    ],
  },
]

/********************************************************************************
 * @brief: 默认弹出盒子配置
 ********************************************************************************/
export const defaultBoxConfig = {
  // 宽度
  width: '400px',
  // 弹出类型
  type: 'info',
  // 持续时间
  dur: 2000,
  // 结束回调函数
  callback: null,
  // 样式，数组元素置为 1 为不同样式
  style: [0, 0],
}
