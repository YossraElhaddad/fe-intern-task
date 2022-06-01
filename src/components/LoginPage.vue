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
    }

}
</script>

<style lang="scss">

</style>