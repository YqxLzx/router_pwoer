<template>
    <div id="authorityMain">
        <div class="left-box">
            <h2>管理列表</h2>
            <div class="pwoer-list-box">
                <p v-for="(item,index) in text2" :key="item.id"
                   @click="goChildRouter(index)"
                   :class="{actvieItem:index === activeItemIndex}">
                    {{item.title}}
                </p> 
            </div>
        </div>
        <div class="right-box">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:'authorityMain',
    data(){
        return {
            //模拟后端数据
            /*text:[
                {id:0,name:'管理权限',path:'/admin'},
                {id:1,name:'用户权限',path:'/user'},
                {id:2,name:'公共权限',path:'/publicPwoer'}
            ],*/
            activeItemIndex:0,
            text2:''
        }
    },
    created(){

    },
    mounted(){
        this.$EventBus.$on('showList',res => {
            this.text2 = res
            console.log(this.text2)
        })
        //this.goChildRouter(0)
    },
    methods:{
        goChildRouter(index){
            this.activeItemIndex = index
            //console.log(this.text2)          
            this.$router.replace({path:this.text2[index].path})              
        },
    },
    watch:{

    }

}
</script>

<style>
.actvieItem{
    color: rgb(231, 126, 217);
}
#authorityMain{
    display: flex;
    background-color: white;
}
.left-box{
    width:15%;
    height: 100vh;
    background-color: rgb(56, 197, 233);
}
.right-box{
    width:85%;
    height: 100vh;
    background-color: rgb(233, 217, 197);
}
.left-box h2{
    text-align: center;
    padding:40px 0;
    cursor: pointer;
}
.pwoer-list-box p{
    font-size: 31px;
    font-family: "Times New Roman";
    padding: 10px;
    text-align: center;
    cursor: pointer;
}
</style>