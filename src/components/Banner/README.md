# Banner

banner组件

## 属性 - properties

| 属性名 | 是否必需 | 类型名 | 类型声明文件| 描述 |
| ---- | ---- | ---- | ---- | ---- |
| dotBottom | false | string | 无 | 指示器下边距 |
| dotColor | false | string | 无 | 指示器背景颜色，十六进制或rgba |
| height | true | string | 无 | banner组件的高度 |
| componentData | true | IBannersVO | [点击查看](./__interface__/vo.d.ts) | banner数据 |

## 事件 - event

组件触发的事件，小程序组件是通过 triggerEvent 方法触发事件

| 事件名 | 事件返回值类型名 | 类型声明文件 | 描述|
| ---- | ---- | ---- | ---- |
| onFallback | IOnFallbackDetail | [点击查看](./__interface__/event.d.ts) | 用户点击后触发 |
