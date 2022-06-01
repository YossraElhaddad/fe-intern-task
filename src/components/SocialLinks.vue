<template>
<div v-for="(link, i) in links" :key="i" class="link-container">
 <div :class="link.name.toLowerCase()">
  <img :src="link.image" :alt="link.name" />
  <a class="text" href="">{{link.name}}</a>   
 </div> 
</div>
</template>

<script>
export default {
    name: 'SocialLinks',
    props: {
        links: Array
    }
}
</script>