<template>
    <div class="aside-box">
        <ul>
            <li v-for="item, idx in list" :key="item.id">
                <div @mouseenter="list_hover(idx, $event)" @mouseleave="list_leave(idx, $event)">
                    <img :src="item.icon" :class="item.src">
                    <span>{{ item.name }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: {}
        }
    },  
    // 组件创建时发送AJAX获取列表数据
    created () {
        this.$store.dispatch('Ajax', {
            method: 'get',
            data: '',
            url: '/admin/list'
        }).then(response => {
            this.list = response.data
        })
    },
    methods: {
        // 悬停改变样式
        list_hover(idx, $event) {
            // 改变图片和文字颜色
            $event.target.getElementsByTagName('img')[0].src = this.list[idx].iconChange;
            $event.target.getElementsByTagName('span')[0].style.color = "#fff"
        },
        // 离开改变样式
        list_leave(idx, $event){
            // 改变图片和文字颜色
            $event.target.getElementsByTagName('img')[0].src = this.list[idx].icon;
            $event.target.getElementsByTagName('span')[0].style.color = "#bfbfbf"
        }
    }
}
</script>

<style>
ul {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    position: relative;
    list-style: none;
}
li {
    margin-top: 8px;
    margin-bottom: 8px;
    height: 5%;
    position: relative;
    cursor: pointer;
    align-items: center;
}
li:hover {
    background-color: #473c39;
}
li >div{
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;     /* 垂直居中 */
}

li img{
    width: 20px;
    height: 20px;
    display: inline-block;
}
li span {
    display: inline-block;
    color: #bfbfbf;
    font-size: 15px;
}
.aside-box{
    position: relative;
    display: inline-block;
    height: 100%;
    width: 10%;
    background-color: #645551;
    margin: 0px;
    border-right: 2px solid #000;
    box-sizing: border-box;
}
</style>