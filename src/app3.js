import './app3.css'
import $ from 'jquery'

const $square=$('.square')

$square.on('click',(e)=>{
    // toggleClass:jquery内置的方法，如果有这个类就删掉，如果没有就加上这个类
    $square.toggleClass('moveX')
})