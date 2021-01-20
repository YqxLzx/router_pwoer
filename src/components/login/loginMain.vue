<template>
    <div id="login-main">
        <h1>{{titleAndText.title}}</h1>
        <div class="input-box">
            <div class="input-text">
                <span>{{titleAndText.name}}:</span>
                <input v-focus v-model="name" type="text" placeholder="请输入账号"/>
            </div>
            <div class="input-text">
                <span>{{titleAndText.password}}:</span>
                <input  v-model="password" type="password" placeholder="请输入密码"/>
            </div>
        </div>
        <div class="config-btn">            
            <div>
                <a href="#" @click="clickConfigBtn" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    登陆
                </a>
            </div>
            <div>
                <a href="#" class="reset">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    重置
                </a>
            </div>            
        </div>
    </div>
</template>

<script>
//import Vue from 'vue'
export default {
    name:'login-main',
    data(){
        return {
            name:'',
            password:'',
        }
    },
    computed:{
        
    },
    props:{
        titleAndText:{
            type:Object
        }
    },
    directives: {
        focus: {
            inserted: function (el) {
                el.focus()
            }
        }
    },
    methods:{
        async clickConfigBtn(e){
            e.preventDefault()
            this.$router.push({path:'authority'})
            let {data:user} = await this.$http.post('/login',{
                name:this.name,
                password:this.password
            }) 
            localStorage.setItem("key", user);
            this.$EventBus.$emit('showList',user.showList)
        }
    }
}
</script>

<style>
@import "../../../css/loginBtn.css";
#login-main{
    background-color: white;
    width: 470px;
    height: 320px;
    border-radius:32px;
    border: 2px solid;
    position: absolute;
}
#login-main h1{
    text-align: center;
    padding-top:25px;
    padding-bottom: 25px;

}
.input-box{
    display: flex;
    flex-wrap:wrap;
    font-size:26px;
    justify-content:center;
}
#login-main input{
    font-size: 20px;
    width:75%;
}
.input-text{
    padding: 10px 10px;
}
.input-text span{
    padding-right:10px;
}
.config-btn{
    display: flex;
    justify-content: flex-end;
    margin-top:20px;
    margin-right:50px;
}
.reset{
    margin-left:15px;
}
</style>