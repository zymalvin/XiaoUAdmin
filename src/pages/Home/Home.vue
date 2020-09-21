<template>
    <div id="box">
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <router-link to="/home/index" tag="span">首页</router-link>
            <router-link to="/home/cart" tag="span">购物车</router-link>
            <router-link to="/home/my" tag="span">我的</router-link>
        </footer>
    </div>
</template>

<script> 
    export default {
        
    }
</script>

<style scoped>
html,
body,
#box {
    width: 100%;
    height: 100%;
}
#box {
    display: flex;
    flex-direction: column;
}
#box main {
    flex:1;
}
#box  footer {
    height:50px;
    background-color: antiquewhite;
    display: flex;
}
footer span {
    flex: 1;
    text-align: center;
    line-height: 50px;
}
footer span.router-link-active {
    color: red;
}
</style>