import './app2.css'
import $ from 'jquery'

const $tabBar=$('.tab-bar')
const $tabContent=$('.tab-content')

$tabBar.on('click','li',(e)=>{
    // 点击li里面的span：
    // e.target:返回触发事件e的具体标签，即span
    // e.currentTarget:返回监听事件e的对象，这里监听的是‘li'，故哪怕是span触发，也返回li
    const $li=$(e.currentTarget)
    const index=$li.index()
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})

$tabBar.on('click','li',(e)=>{
    const $li=$(e.currentTarget)
    const index=$li.index()
    $tabBar.children()
        .eq(index).addClass('bgc')
        .siblings().removeClass('bgc')
})
// 默认点击了导航栏1，展示页面1
$tabBar.children().eq(0).addClass('bgc')
$tabContent.children().eq(0).addClass('active')