<template>
    <div id="home">
        <login-main :titleAndText="text" ></login-main>
    </div>
</template>

<script>
import loginMain from '../components/login/loginMain'
export default {
    name:'home',
    data(){
        return {
          text:{
              title:'WelCome to here',
              name:'账号',
              password:'密码'
          }  
        }
    },
    components:{
        loginMain
    }
}
</script>

<style>
#home{
    height: 100%;
    background-color: black;
    position: relative;
}
#home #login-main{
    left:50%;
    transform:translate(-50%,50%);
}

</style>