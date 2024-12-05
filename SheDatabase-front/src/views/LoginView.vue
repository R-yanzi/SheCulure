<template>
    <div class="login_container">
        <div class="login_box">
            <!--头像-->
            <div class="avatar_box">
                <img :src="$store.getters.avatar_src">
            </div>
            <!--登录表单-->
            <el-form label-width="0px" class="login-info">
                <!--用户名-->
                <el-form-item style="margin-bottom: 2px;">
                    <el-input placeholder="请输入用户名" clearable v-model="form.username" ref="username_input"
                        @blur="userAjax" @focus="user_tip = false, this.tip = '用户名或账号密码错误', this.password_tip = false">
                        <template #prefix>
                            <img src="./LoginView/img/people_fill.png" class="icon">
                        </template>
                    </el-input>
                </el-form-item>
                <div class="user_tip">
                    <div ref="user_tip" v-show="user_tip">用户名不能为空</div>
                </div>
                <!--密码-->
                <el-form-item style="margin-bottom: 2px;">
                    <el-input placeholder="请输入密码" clearable v-model="form.password" show-password
                        @focus="this.tip = '用户名或账号密码错误', this.password_tip = false">
                        <template #prefix>
                            <img src="./LoginView/img/lock_fill.png" class="icon">
                        </template>
                    </el-input>
                </el-form-item>
                <div class="user_tip">
                    <div ref="user_tip" v-text="tip" v-show="password_tip"></div>
                </div>
                <!--按钮区-->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="success">注册</el-button>
                    <el-button type="info" @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            user_tip: false,
            password_tip: false,
            tip: '用户名或账号密码错误',
            url: 'http://localhost:8080',
        }
    },
    methods: {
        // 用户名框失去焦点时，发送AJAX请求访问后端查找用户密码
        userAjax(){
            const username = this.form.username.trim()
            // 用户名为空
            if (username.trim() === '') {
                // 显示tip
                this.user_tip = true
                // 修改头像为默认头像
                this.$store.commit('CHANGE_AVATAR', '/img/avatar/customize.png')
            } else {
                // 用户名不为空, 向后端发送Ajax请求
                this.$store.dispatch('Ajax', {
                    method: "get",
                    data: {
                        username: username,
                    },
                    url: "/login"
                }).then(response => {
                    if (response.data === "") {
                        // 查不到用户
                        // 把头像改成默认头像, 清空密码, 提示语改成用户不存在
                        this.$store.state.user.avatar = '/img/avatar/customize_boy.png'
                        this.$store.state.user.password = ''
                        this.tip = '用户不存在'
                    } else {
                        // 查到了用户, 进行赋值
                        this.$store.commit('CHANGE_USER', response.data)
                    }
                })
            }
        },

        // 登录验证
        login($event) {
            // 没有输入密码
            if (this.form.password == "") {
                this.tip = "密码不能为空"
                this.password_tip = true;
                // 没有输入用户名
                if (this.form.username == "") {
                    this.user_tip = true;
                }
                return
            }

            // 没有输入用户名
            if (this.form.username == "")
            {
                this.user_tip = true;
                return
            }

            // 密码校验
            if (this.$store.state.user.password == this.form.password) {
                // 弹出登录成功提示
                this.$message({
                    message: "登录成功~欢迎你~" + this.$store.state.user.username,
                    type: 'success'
                });
                // 登录成功, 登录状态变成已登录, 放入用户类型到session
                window.sessionStorage.setItem("token", true)
                window.sessionStorage.setItem("type", 1)
                // 跳转到登录成功页面
                this.$router.push({
                    name: 'admin',
                }, () => {}, () => {})
            } else {
                // 登录失败
                // 弹出登录失败提示
                this.$message({
                    message: "登录失败 v _ v ",
                    type: 'error'
                });
                // 显示错误信息
                this.password_tip = true
            }
        },

        // 注册
        register() {
            
        },

        // 重置
        reset() {
            // 清空表单账号密码, 消息提示
            this.form.username = ""
            this.form.password = ""
            this.user_tip = this.password_tip = false
        }
    }
}
</script>

<style scoped>
.user_tip {
    height: 30px;
    font-size: 13px;
    color: #f67979;
}

.avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
}

.avatar_box img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
}

.login_container {
    background-color: #2b4b6b;
    height: 100%;
}

.login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    box-shadow: 0 0 20px #162b40;
    transform: translate(-50%, -50%);
}

.login-info {
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}

.btns {
    position: absolute;
    left: 50%;
    bottom: -60%;
    transform: translateX(-50%);
}

.icon {
    width: 1em;
    height: 1em;
    margin-right: 8px;
}
</style>