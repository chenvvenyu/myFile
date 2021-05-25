import { Game } from '@eva/eva.js'
import { RendererSystem } from '@eva/plugin-renderer'

// 创建渲染系统
const renderSystem = new RendererSystem({
  canvas: document.querySelector('#canvas'), // 可选，自动生成 canvas 挂在 game.canvas 上
  width: 750,
  height: 1000,
  transparent: false,
  resolution: window.devicePixelRatio / 2, // 可选, 如果是2倍图设计 可以除以2
  enableScroll: true, // 允许页面滚动
  renderType: 0 // 0:自动判断，1: WebGL，2:Canvas
})

// 创建游戏对象
const game = new Game({
  frameRate: 60, // 可选，游戏帧率，默认60
  autoStart: true, // 可选，自动开始
  systems: [renderSystem]
})