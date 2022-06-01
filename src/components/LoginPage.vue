<template>
    <div class="login">
        <LeftPart />
        <RightPart />
    </div>

</template>

<script>
import LeftPart from './LeftPart.vue';
import RightPart from './RightPart.vue';

export default {
    name: 'LoginPage',
    components: {
        LeftPart,
        RightPart
    },
    mounted() {
        if(window.localStorage.getItem('logged-in'))
        this.$router.push(window.localStorage.getItem('logged-in'));
    }

}
</script>

<style lang="scss">
</style>