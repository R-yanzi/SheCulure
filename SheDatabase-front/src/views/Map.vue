<template>
    <div id="baiduMap" class="map-container"></div>
</template>

<script>
export default {
    name: 'BaiduMap',
    mounted() {
        // 确保百度地图的API已经加载
        if (window.BMapGL) {
            const map = new window.BMapGL.Map('baiduMap',{
                restrictCenter: false
            }); // 创建地图实例
            const point = new window.BMapGL.Point(116.404, 39.915); // 创建点坐标
            map.centerAndZoom(point, 5); // 初始化地图，设置中心点坐标和地图级别
            map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
            // 使用自定义地图样式
            map.setMapStyleV2({
                styleId: 'f5f923f1d0053170bd448d49e31c93f1'
            });
            // 可以添加更多功能，如标记、信息窗口等

            
        } else {
            // 没有加载地图
            console.error('Baidu Map API is not loaded');
        }
    },
    methods: {

    }
}

</script>

<style>
.map-container {
    width: 100%;
    height: 100%;
}
</style>