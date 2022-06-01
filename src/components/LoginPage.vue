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



    data() {
        return {
         personalData: [
    { email: 'mohamed@instabug.com', password: 'A12345678' },
    { email: 'mohamed1@instabug.com', password: 'A12345678' },
    { email: 'mohamed2@instabug.com', password: 'A12345678' },
    { email: 'mohamed3@instabug.com', password: 'A12345678' },
    { email: 'mohamed4@instabug.com', password: 'A12345678' },
    { email: 'mohamed5@instabug.com', password: 'A12345678' },
    { email: 'mohamed6@instabug.com', password: 'A12345678' },
    { email: 'mohamed7@instabug.com', password: 'A12345678' },
    ],
        }
    },


}
</script>

<style lang="scss">

</style>