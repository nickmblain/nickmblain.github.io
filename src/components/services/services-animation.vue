<template>
    <!-- Start -->
    <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="service">
            <div class="container">
                <div class="grid grid-cols-1 pb-8 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                    <h3 class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">What do i offer?</h3>

                    <p class="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
                </div><!--end grid-->

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <!-- Content -->
                    <div v-for="item in services" :key="item" class="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                        <i :data-feather="item.icon" class="h-10 w-10 stroke-1 text-amber-500"></i>

                        <div class="content mt-7">
                            <a href="" class="title h5 text-[17px] font-medium hover:text-amber-500">{{ item.name }}</a>
                            <p class="text-slate-400 mt-3 text-[15px]">{{ item.desc }}</p>
                            
                            <div class="mt-5">
                                <a href="" class="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Read More <i class="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- Content -->
                </div>
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
        <!-- Start -->
    <section class="py-20 w-full table relative bg-[url('../../assets/images/bg/bg1.jpg')] bg-no-repeat bg-center bg-cover" id="service">
            <div class="absolute inset-0 bg-slate-900/70"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                    <h3 class="mb-4 md:text-2xl text-xl text-white font-semibold">I Am Available For Freelancer Projects.</h3>

                    <p class="text-white/80 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
                
                    <div class="relative mt-8">
                        <a href="" class="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md">Hire Me</a>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
</template>

<script>
    export default {
        data() {
            return {
                services: [
                    {
                        icon: 'airplay',
                        name: 'UX / UI Design',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    {
                        icon: 'aperture',
                        name: 'Ios App Designer',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    {
                        icon: 'camera',
                        name: 'Photography',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    {
                        icon: 'compass',
                        name: 'Graphic Designer',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    {
                        icon: 'settings',
                        name: 'Web Security',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    {
                        icon: 'watch',
                        name: '24 / 7',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    
                ]
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>