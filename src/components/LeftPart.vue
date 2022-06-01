<template>
    <div class="left-part">   
                <img :src="currentSlide.image" :alt="currentSlide.text" />
                <p class="image-text">{{ currentSlide.text }}</p>
        
        <div class="dots">
            <button v-for="i in carouselImages.length" :key="i"
                :style="count == i - 1 ? 'background-color:white;' : 'background-color:none;'"></button>
        </div>

    </div>
</template>

<script>

export default {
    name: 'LeftPart',
    data() {
        return {
            carouselImages: [
                { image: "https://svgshare.com/i/hrA.svg", text: "Accelerate Your Entire Mobile Team Workflow" },
                { image: "https://svgshare.com/i/hrB.svg", text: "The Most Comperhensive Bug Reporting Tool for Mobile Apps" },
                { image: "https://svgshare.com/i/hrV.svg", text: "Secure Crash Reporting With Real-Time Alerts" }
            ],
            count: 0,
            timer: null
        }
    },

    mounted() {
        this.animateSlides();
    },

    methods: {
        animateSlides() {
            this.timer = setInterval(() => {
                this.count += 1;
                this.count = this.count % this.carouselImages.length;
            }, 2500);

        }
    },

    computed: {
        currentSlide() {
            return this.carouselImages[this.count];
        },
    },


}
</script>

<style lang="scss">
$blue: #002276;
$white: #FFFFFF;

.left-part {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $blue;
    height: 100vh;
    width: 50vw;
     
     img {
         width: 450px;
         margin: 2.5rem;
     }

    .image-text {
        color: white;
        font-size: 1.2rem;
        font-weight: 400;
        margin: 10px;
    }

    .dots>button {
        border-radius: 50%;
        border: 1px solid white;
        background: none;
        width: 10px;
        height: 10px;
        margin: 3px;
    }
}
</style>