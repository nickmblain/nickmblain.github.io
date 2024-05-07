<template>
   <!-- Start -->
   <section class="relative md:py-24 py-16 overflow-hidden" id="about">
            <div class="container">
                <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div class="lg:col-span-5 lg:px-8 wow animate__animated animate__bounceInLeft" data-wow-delay=".3s">
                        <div class="relative">
                            <div class="absolute inset-0 border dark:border-gray-800 rounded-full -mt-[10px] -ms-3 h-[100%] w-[100%] -z-1"></div>
                            <img src="../../assets/images/ab1.png" class="rounded-full shadow-md shadow-gray-200 dark:shadow-gray-800" alt="">

                            <div class="absolute lg:bottom-20 md:bottom-10 bottom-6 ltr:lg:-right-16 rtl:lg:-left-16 ltr:md:-right-8 rtl:md:-left-8 ltr:right-0 rtl:left-0 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                                <h6 class="font-semibold">Web Developer</h6>
                                <span class="text-2xl font-medium text-amber-500 mb-0 flex justify-center">
                                <count-up class="counter-value font-bold" :start-val="1"
                                    :end-val="12"></count-up>+<span class="text-sm text-slate-400 mt-3 ml-1"> Years</span></span>
                                <span class="text-sm text-slate-400"> Experience</span>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="lg:col-span-7">
                        <div class="lg:ms-5 wow animate__animated animate__bounceInRight" data-wow-delay=".7s">
                            <h3 class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">I'm a Passionate Web Designer</h3>

                            <p class="text-slate-400 max-w-xl text-[15px]">I'm a Web Designer and Web Developer with over 12 years of experience. Experienced with all stages of the development cycle.
                            </p>
                        
                            <div class="mt-6">
                                <a href="#project" class="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md me-2 mt-2">See Work</a>
                            </div>
                        </div>
                    </div><!--end grid-->
                </div><!--end grid-->
            </div><!--end container-->

            <div class="container md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                    <h3 class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Hobbies & Expertise</h3>

                </div><!--end grid-->

                <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="item in hobbies" :key="item" class="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                        <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                            <i :data-feather="item.icon" class="h-5 w-5 rotate-45"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="mb-0 text-[17px] font-medium">{{item.name}}</h4>
                        </div>
                    </div><!--end content-->
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
</template>

<script>
import CountUp from 'vue-countup-v3';
import feather from 'feather-icons'
    export default {
        name: 'aboutAnimation',
        data() {
            return {
                hobbies: [
                {
                    name: 'Developing',
                    icon: 'monitor'
                },
                {
                    name: 'Mac OS',
                    icon: 'stop-circle'
                },
                {
                    name: 'Cinema',
                    icon: 'video'
                },
                {
                    name: 'Coffee',
                    icon: 'coffee'
                },
                {
                    name: 'Music',
                    icon: 'music'
                },
                {
                    name: 'Games',
                    icon: 'watch'
                },
                {
                    name: 'Designing',
                    icon: 'box'
                },
                {
                    name: 'Sports',
                    icon: 'target'
                },
                {
                    name: 'Painting',
                    icon: 'pen-tool'
                },
                {
                    name: 'Reading',
                    icon: 'book'
                },
                {
                    name: 'Android',
                    icon: 'smartphone'
                },
                {
                    name: 'Other Activity',
                    icon: 'activity'
                },
            ]
            }
        },
        mounted() {
        feather.replace()
        
    },
    components: {
        CountUp,
    }
    }
</script>

<style lang="scss" scoped>

</style>
