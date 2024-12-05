<template>
    <!--首页-->
    <div class="box">
        <!--轮播图容器-->
        <div class="carousel">
            <img v-for="(image, index) in images" :key="index" :src="$store.state.url + '/' + image.imgPath">
        </div>
        <!--渐变层-->
        <div class="graded-box"></div>
        <!--指示器-->
        <div class="indicator">
            <span v-for="image in images" :key="image.id" @mouseenter="indicator_hover(image.id, $event)"></span>
        </div>
        <!--输入框-->
        <div class="input-box">
            <input type="text" class="search" placeholder="搜索关键词进入资料库">
            <div class="search-btn">
                <img src="./IndexView/img/search.png">
            </div>
        </div>
        <!--标题字-->
        <div class="title-text">畲汉服饰艺术对比资料库</div>
        <!--提示字-->
        <div class="hint">鼠标点击当前页面任意处进入首页</div>
        <!--登录按钮-->
        <div class="login-btn"></div>
        <div class="login-text">登录</div>
        <!--注册按钮-->
        <div class="register-btn"></div>
        <div class="register-text">注册</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            images: {}
        };
    },
    mounted() {
        // 使用Ajax向后端拿取数据
        this.$store.dispatch('Ajax', {
            method: "get",
            data: {},
            url: "/index/carouse"
        }).then(response => {
            this.images = response.data
        })
    },
    methods: {
        indicator_hover(id, $event) {
            $event.target.style.opacity = 1
        }
    }
}
</script>

<style scoped>
.register-btn,
.login-btn{
    width: 7.8%;
    height: 5%;
    position: absolute;
    top: 2.3%;
    left: 78.7%;
    background-color: #fff;
    opacity: 0.5;
    border-radius: 10px;
    cursor: pointer;
}

.login-text,
.register-text{
    width: 7.8%;
    height: 5%;
    position: absolute;
    top: 2.3%;
    left: 78.7%;
    border-radius: 10px;
    font-family: '等线', sans-serif;
    text-align: center;
    align-content: center;
    font-weight: bolder;
    color: #1a8f7a;
    box-sizing: border-box;
    cursor: pointer;
    opacity: 0.7;
}

.register-text,
.register-btn {
    left: 87.8%;
}

.register-text:hover,
.login-text:hover {
    border: 3px solid #1a8f7a;
    opacity: 1;
}

.hint{
    position: absolute;
    top: 84.9%;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 12px;
    color: #000;
    opacity: 0.5;
    font-weight: bold;
    font-family: '等线', sans-serif;
}
.title-text{
    position: absolute;
    top: 65.4%;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 35px;
    color: #fff;
    font-family: '等线', sans-serif;
    font-weight: bold;
}
.search{
    height: 100%;
    width: 88.3%;
    box-sizing: border-box;
    border: none;
    outline: none;
    background: transparent;
    padding-left: 13px;
}
::placeholder {
    color: #000;
    opacity: 0.5;
    font-weight: bold;
    font-family: '等线', sans-serif;
}
.search-btn img{
    width: 50%;
}
.search-btn{
    width: 11.7%;
    height: 100%;
    background-color: #a5d4cc;
    position: absolute;
    right: 0px;
    top: 0px;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;     /* 垂直居中 */
}
.input-box{
    width: 41.6%;
    height: 6.9%;
    position: absolute;
    left: 28.3%;
    top: 75.5%;
    background-color: #fff;
    opacity: 0.7;
    border-radius: 15px;
    overflow: hidden;
}
.graded-box{
    position: absolute;
    left: 0px;
    bottom: 0px;
    background: linear-gradient(to bottom, #ffffff00, #dcfff9b3);
    width: 100%;
    height: 50%;
}
.box {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
.carousel {
    display: flex;
    transition: margin-left 0.5s ease-in-out;
    width: 100%;
}

.carousel img {
    min-width: 100vw;
    height: auto;
    object-fit: cover;
    position: relative;
}

.indicator{
    position: absolute;
    width: auto;
    height: auto;
    top: 91%;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
}

.indicator span {
    width: 13px;
    height: 13px;
    background-color: #a3d4cb;
    border-radius: 100%;
    margin-left: 5px;
    margin-right:5px;
    opacity: 0.5;
}
</style>