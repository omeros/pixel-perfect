<template>
  <div class="home">
        <hero/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import hero from "@/cmps/heroes.vue"
export default {
  name: 'home',
  components: {
    hero
  }
}
</script>
