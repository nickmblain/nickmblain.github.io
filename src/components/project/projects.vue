<template>
    <!-- Start -->
    <section class="relative md:py-24 py-16" id="project">
        <div class="container">
            <div class="grid grid-cols-1 pb-8 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                <h3 class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">My Work & Projects
                </h3>

            </div><!--end grid-->

            <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                <div v-for="item in projects" :key="item"
                    class="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800 wow animate__animated animate__fadeInUp"
                    data-wow-delay=".3s">
                    <img :src="item.image" alt="">
                    <div
                        class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500">
                    </div>
                    <div class="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <a href=""
                            class="text-white hover:text-amber-500 font-semibold transition-all duration-500">{{ item.name }}</a>
                        <span class="block text-sm text-slate-400">{{ item.position }}</span>
                    </div>

                    <div
                        class="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                        <a @click="showMultiple"
                            class="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><i
                                class="uil uil-camera"></i></a>
                    </div>
                </div><!--end content-->
                <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef"
                    @hide="onHide"></vue-easy-lightbox>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox';
import { ref } from 'vue'

export default {
    name: 'projectComp',
    data() {
        return {
            projects: [
                {
                    image: require('../../assets/images/works/1.jpg'),
                    name: 'Fronter Theme',
                    languag: 'UI / UX Design'
                },
                {
                    image: require('../../assets/images/works/2.jpg'),
                    name: 'Landrick Theme',
                    languag: 'Technology'
                },

                {
                    image: require('../../assets/images/works/3.jpg'),
                    name: 'Valexy Theme',
                    languag: 'Landing'
                },

                {
                    image: require('../../assets/images/works/4.jpg'),
                    name: 'Superex Theme',
                    languag: 'Digital'
                },

                {
                    image: require('../../assets/images/works/5.jpg'),
                    name: 'Motos Theme',
                    languag: 'Landing'
                },

                {
                    image: require('../../assets/images/works/6.jpg'),
                    name: 'Giglink Theme',
                    languag: 'Digital'
                },

                {
                    image: require('../../assets/images/works/7.jpg'),
                    name: 'Upwind Theme',
                    languag: 'Landing'
                },

                {
                    image: require('../../assets/images/works/8.jpg'),
                    name: 'Techwind Theme',
                    languag: 'Multipurpose'
                },


            ]

        }
    },
    components: {
        VueEasyLightbox,
    },
    setup() {
        const visibleRef = ref(false)
        const indexRef = ref(0)
        const imgsRef = ref([])


        const onShow = () => {
            visibleRef.value = true
        }
        const showMultiple = () => {
            imgsRef.value = [
                require('../../assets/images/works/1.jpg'),
                require('../../assets/images/works/2.jpg'),
                require('../../assets/images/works/3.jpg'),
                require('../../assets/images/works/4.jpg'),
                require('../../assets/images/works/5.jpg'),
                require('../../assets/images/works/6.jpg'),
                require('../../assets/images/works/7.jpg'),
                require('../../assets/images/works/8.jpg'),

            ]
            console.log(showMultiple.value, 'rrr');

            indexRef.value = 0
            onShow()
        }
        const onHide = () => (visibleRef.value = false)

        return {
            visibleRef,
            indexRef,
            imgsRef,
            showMultiple,
            onHide
        }
    }

}
</script>

<style lang="scss" scoped></style>
