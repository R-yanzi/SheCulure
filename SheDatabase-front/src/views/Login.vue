<template>
    <div class="container">
        <div class="login-box">
            <!--logo-->
            <img src="./Login/img/logo.png" class="logo">
            <!--登录表单-->
            <div class="login">
                <!--用户登录选项-->
                <div class="login-select">用户登录</div>
                <!--注册账号选项-->
                <div class="register-select">注册账号</div>
                <!--路由组件-->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

export default {
}
</script>

<style>
.register-select,
.login-select{
    width: 40.5%;
    height: 8.5%;
    border-radius: 8px;
    /* background-color: #a2d4cb; */
    background-color: #f9fffe;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;     /* 垂直居中 */
    font-weight: 600;
    font-family: "Microsoft YaHei", sans-serif;
    font-size: 18px;
    position: absolute;
    left: 50%;
    top: 12%;
    box-sizing: border-box;
    cursor: pointer;
}
.login-select {
    transform: translate(-100%, 0);
}
.register-select:hover{
    background-color: #a2d4cb;
}
.container{
    background-color: #7a8e8b;
    width: 100%;
    height: 100%;
}
.login-box{
    width: 76%;
    height: 75%;
    border-radius: 30px;
    background-color: #fff;
    background-image: url('./Login/img/background.png');
        background-size: cover;
    background-position: center;  /* 图像在背景区域中的位置 */
    background-repeat: no-repeat; /* 不重复背景图像 */
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.2);
}
.login{
    width: 38%;
    height: 100%;
    background: linear-gradient(to bottom, #fff, #dcfff9);
    box-shadow: -5px 1px 5px rgba(0, 0, 0, 0.2);
    position: relative;
    right: -62%;
    border-radius: 30px;
}
.logo{
    width: 45%;
    left: 5%;
    top: 18%;
    position: absolute;
}
</style>