<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <x-input title="用户名" v-model="username"></x-input>
      <x-input title="密码" v-model="password"></x-input>
    </group>
    <group>
      <x-button type="primary">登录</x-button>
    </group>
  </div>
</template>

<script>
import { Group, XButton, XInput } from 'vux'

export default {
  components: {
    Group,
    XButton,
    XInput
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      username: '',
      password: ''
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
