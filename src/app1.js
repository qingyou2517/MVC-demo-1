import './app1.css'
import $ from 'jquery'

const $button1=$('.add')
const $button2=$('.decrease')
const $button3=$('.multiple')
const $button4=$('.divide')
const $number=$('.app1 .number')
// 从localStorage取出空间’n‘的内容存入n，n为运算结果
// 注意：‘n’可以随意取名，但是要防止和localStorage已有的空间名冲突，比如之前前端导航站点就在localStorage里用了'x'
const n=localStorage.getItem('n')
// 初始化n并从n取运算结果:每次刷新页面会重新执行这一句,从而保证了从localStorage取值
$number.text(n || 100)

$button1.on('click',()=>{
    let num=parseInt($number.text())
    num++
    // 存入localStorage，防止刷新后结果消失
    localStorage.setItem('n',num)
    $number.text(num)
})

$button2.on('click',()=>{
    let num=parseInt($number.text())
    num-- 
    localStorage.setItem('n',num)
    $number.text(num)
})

$button3.on('click',()=>{
    let num=parseInt($number.text())
    num*=2
    localStorage.setItem('n',num)
    $number.text(num)
})

$button4.on('click',()=>{
    let num=parseInt($number.text())
    num/=2
    localStorage.setItem('n',num)
    $number.text(num)
})