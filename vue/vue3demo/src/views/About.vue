<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div @click="alertUserName">{{username}}</div>
    <div>{{nextAge}}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'

interface User{
    username:string|undefined,
    age:number,
    alertUserName():void
}

export default defineComponent({
  setup(){
    let state =reactive<User>({
      username:"张三",
      age:15,
      alertUserName(){
        alert(state.username)
      }
    })
    const nextAge = computed(()=>{
      return +state.age+1
    })
    // const getUserAge = computed(()=>{})
    return {
      ...toRefs(state),
      nextAge
    }
  }
})
</script>