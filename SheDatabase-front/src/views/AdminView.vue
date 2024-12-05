<template>
    <div class="container-box">
        <!--头部-->
        <Header style="height: 10%; position: relative;"></Header>
        <!--下半部分-->
        <div style="height: 90%;">
            <!--左侧栏-->
            <Aside></Aside>
            <!--主体部分-->
            <Main></Main>
        </div>
    </div>
</template>

<script>
import Aside from "./AdminView/components/Aside.vue"
import Header from "./AdminView/components/Header.vue"
import Main from "./AdminView/components/Main.vue"

export default {
    name: 'admin',
    components: {Aside, Header, Main}
}
</script>
<style scoped>
.container-box {
    height: 100%;
    width: 100%;
    background-color: #eaedf1;
}
</style>