/*
 * @Author: JL Guan
 * @Date: 2022-07-25 16:21:39
 * @description: file description
 * @LastEditTime: 2022-07-26 16:42:21
 * @FilePath: \commonTools\src\index.js
 */
// 是否空对象
export const isEmptyObj = obj =>
  Reflect.ownKeys(obj).length === 0 && obj.constructor === Object
  
// 相隔天数
export const daysBetween = (date1, date2) =>
  Math.ceil(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24))

// 节点后插入html
export const insertHTMLAfter = (html, el) =>
  el.insertAdjacentHTML("afterend", html)

// 获取选中文字
export const getSelectedText = () => window.getSelection().toString()

// 创建对应长度数组
export const createArrayData = (num, cb = k => k) =>
  new Array(num).fill(null).map((v, i) => cb(i))

// 数组去重
export const unique = (...args) => [...new Set(args.flat())]

// 数组最大值
export const arrayMax = numArray => Math.max.apply(Math, numArray)

// 数组最小值
export const arrayMin = numArray => Math.min.apply(Math, numArray)
