<template>
    <!--外盒子-->
    <div class="user-login-box">
        <!--账号-->
        <div class="user-text">账号</div>
        <!--账号输入框-->
        <img src="/homepage_fill.png" class="user-icon">
        <input type="text" class="user-input">
        <!--密码-->
        <div class="password-text">密码</div>
        <!--登录按钮-->
        <div class="login-button">登录</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.user-icon{
    width: 20px;
}
.password-text,
.user-text{
    position: absolute;
    width: 50%;
    height: 5.3%;
    font-size: 17px;
    color:#696f6e;
    top: 16%;
    left: 12.5%;
    font-family: 'SimSun', '宋体', sans-serif;
    font-weight: bold;
}
.password-text {
    top: 41.2%;
}
.login-button{
    background-color: #a2d4cb;
    height: 10.9%;
    width: 74.8%;
    position: absolute;
    left: 50%;
    top: 73.5%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;     /* 垂直居中 */
    border-radius: 8px;
    font-weight: 400;
    font-family: "Microsoft YaHei", sans-serif;
    font-size: 18px;
}
.user-login-box{
    width: 100%;
    height: 79.4%;
    position: absolute;
    top: 20.6%;
    background-color: #0f0;
}
</style>