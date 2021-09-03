// 点击左侧对应分类，自动滚动到相应内容
const toNAV = function(id) {
    const content = document.getElementById('content')
    const el = document.getElementById(`${id}`)
    let start = content.scrollTop
    let end = el.offsetTop - 80
    let each = start > end ? -1*Math.abs(start - end) / 20 : Math.abs(start - end) / 20
    let count = 0
    let scroll = () => {
        if(count < 20) {
            content.scrollTop += each
            count++
            window.requestAnimationFrame(scroll) //在浏览器下一次重绘之前执行
        }
    }
    scroll()
}

export default toNAV