## 下载

```cmd
pnpm add ilx1-x-box --save

#or

npm i ilx1-x-box --save
```



## 默认配置

```js
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
```

## 使用

```js
import { XBox } from 'ilx1-x-box'
import 'ilx1-x-box/style/xBox.css'

XBox.popMes('弹出盒子', {
   type: 'mes',
})
```

