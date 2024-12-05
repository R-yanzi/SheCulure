<template>
    <div class="header-box">
        <img src="../img/logo.png" class="logo" />
        <!--标题-->
        <h1>畲韵数智平台后台管理系统</h1>
        <h3>你好! {{ $store.state.user.username }}</h3>
        <!--头像-->
        <img :src="$store.getters.avatar_src" class="avatar" ref="avatar" @mouseenter="avatar_hover" @mouseleave="avatar_leave">
        <div class="hidde" @mouseenter="avatar_hover" @mouseleave="avatar_leave"></div>
        <div class="select-box" ref="select-box" v-show="select_box_state" @mouseenter="avatar_hover"
            @mouseleave="avatar_leave">
            <div class="select" style="border-bottom: 1px solid #b0b9c4;" @mouseenter="setting_hover"
                @mouseleave="setting_leave">
                <img :src="setting_img">
                <span ref="setting">账号设置</span>
            </div>
            <div class="select" @mouseenter="exit_hover" @mouseleave="exit_leave" @click="exit">
                <img :src="exit_img">
                <span ref="exit">退出登录</span>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            avatar: '/customize.png',
            select_box_state: false,
            setting_img: '/setup_fill.png',
            exit_img: '/undo.png'
        };
    },
    methods: {
        avatar_hover() {
            this.select_box_state = true
            this.$refs.avatar.style.width = "50px"
            this.$refs.avatar.style.height = "50px"
        },
        avatar_leave() {
            this.select_box_state = false
            this.$refs.avatar.style.width = "40px"
            this.$refs.avatar.style.height = "40px"
        },
        setting_hover() {
            this.setting_img = '/setup_fill (1).png'
            this.$refs.setting.style.color = "#1296db"
        },
        setting_leave() {
            this.setting_img = '/setup_fill.png'
            this.$refs.setting.style.color = "#919ead"
        },
        exit_hover() {
            this.exit_img = '/undo (1).png'
            this.$refs.exit.style.color = "#d81e06"
        },
        exit_leave() {
            this.exit_img = '/undo.png'
            this.$refs.exit.style.color = "#919ead"
        },
        // 退出登录
        exit() {
            // 清空session缓存
            window.sessionStorage.clear();
            // 头像变回默认头像
            this.$store.state.user.avatar = '/img/avatar/customize_boy.png'
            // 跳转到登录页面
            this.$router.push({
                name: 'login',
            }, () => { }, () => { })
        }
    }
}
</script>

<style scoped>
.select{
    font-size: small;
    height: 25px;
    color: #919ead;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.select img{
    width: 20px;
    height: 20px;
}
.select-box{
    background-color: #fff;
    width: 80px;
    height: 50px;
    position: absolute;
    bottom: -5px;
    right: 0px;
    transform: translate(0, 100%);
    border-radius: 10px;
    border: 1px solid #919ead;
}
.hidde{
    width: 50px;
    position: absolute;
    height: 20px;
    background-color: #fff;
    right: 11px;
    bottom: -5px;
    opacity: 0;
}
.avatar{
    position: absolute;
    right: 10px;
    width: 40px;
    height: 40px;
    top: 50%;
    transform: translateY(-50%);
    border: 2px solid #000;
    box-shadow: 0 0 10px #402424;
    border-radius: 100%;
    transition: width .5s, height .5s;
    cursor: pointer;
}
h3{
    display: inline-block;
    margin: 0px;
    position: absolute;
    left: 80px;
    top: 50%;
    transform: translateY(-25%);
    color: #000;
}
h1{
    display: inline-block;
    margin: 0px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%, -50%);
    color: #402424;
}
.header-box{
    border-top: 2px solid #402424;
    border-bottom: 5px solid #402424a7;
    background-image: url("../img/background.png");
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}
.logo{
    width: 60px;
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
}
</style>