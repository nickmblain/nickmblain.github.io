<template>
    <navbar :socialLight=false />
    <!-- Start Hero -->
    <section
        class="md:pt-52 pt-36 h-auto relative flex items-center background-effect overflow-hidden 
            before:content-[''] before:absolute before:-z-1 sm:before:-bottom-80 before:-bottom-40 before:right-0 before:left-0 before:mx-auto before:rounded-full before:bg-amber-500 sm:before:w-[40rem] before:w-[20rem] sm:before:h-[40rem] before:h-[20rem]"
        id="home">
        <div class="container relative z-1">
            <div class="grid grid-cols-1 text-center mt-5 relative">
                <h4 class="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal mb-4">Dennis Scott
                </h4>
                <h4 class="font-semibold leading-normal text-[22px] mb-5">I'm
                    <vue-typewriter-effect class="typewrite text-amber-500" data-period="2000"
                        :strings='["Freelancer", "Website Designer", "Web Developer", "UI/UX Designer"]' /> <span
                        class="wrap"></span>
                </h4>
                <p class="text-slate-400 max-w-xl mx-auto">Obviously I'm a Web Designer. Web Developer with over 7
                    years of experience. Experienced with all stages of the development.</p>

                <div class="mt-6">
                    <a href=""
                        class="btn rounded-md bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"
                        type="submit">Hire me</a>
                </div>

                <img src="../assets/images/framework/React-05.png"
                    class="animate-[spin_20s_linear_infinite] absolute h-11 w-11 -top-16 left-0 right-0 mx-auto" alt="">
            </div>

            <div class="flex justify-center text-center relative">
                <div class="relative">
                    <img src="../assets/images/hero/1.png" class="max-w-lg" alt="">

                    <div
                        class="absolute top-56 ltr:md:-left-5 ltr:left-24 rtl:md:-right-5 rtl:right-24 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                        <h6 class="font-semibold">Web Desinger</h6>
                        <h6 class="text-sm text-slate-400 mt-1">(2016 - 2020)</h6>
                    </div>

                    <div
                        class="absolute bottom-20 ltr:md:-right-5 ltr:right-24 rtl:md:-left-5 rtl:left-24 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                        <h6 class="font-semibold">Freelancer</h6>
                        <h6 class="text-sm text-slate-400 mt-1">(2020 to Present..)</h6>
                    </div>

                    <img src="../assets/images/framework/Vue-JS-01.png"
                        class="animate-[spin_20s_linear_infinite] absolute h-11 w-11 top-16 ltr:md:-left-5 ltr:left-32 rtl:md:-right-5 rtl:right-32"
                        alt="">
                    <img src="../assets/images/framework/Angular-04.png"
                        class="animate-[spin_20s_linear_infinite] absolute h-11 w-11 -top-20 ltr:md:-right-5 ltr:right-32 rtl:md:-left-5 rtl:left-32"
                        alt="">
                </div>

                <div class="relative animate-[spin_30s_linear_infinite] -z-1">
                    <span
                        class="after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-amber-500/20 relative after:z-10"></span>
                    <span
                        class="after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-amber-500/20 relative after:z-10"></span>
                </div>
            </div>
            <!--end grid-->
        </div>
        <!--end container-->
        <div
            class="absolute inset-0 bg-gradient-to-b lg:from-amber-500/5 lg:to-amber-500/30 from-amber-500/5 to-amber-500/50 lg:-z-2">
        </div>
    </section><!--end section-->
    <div class="relative">
        <div class="absolute block w-full h-auto bottom-[25px] z-1 left-0">
            <a href="#about"><i
                    class="mdi mdi-arrow-down absolute top-0 left-0 right-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i></a>
        </div>
    </div>
    <!--end section-->
    <about />
    <services />
    <experience />
    <projects />
    <clients />
    <blog />
    <getintouch />
</template>

<script>
import navbar from '@/components/navbar/navbar.vue'
import VueTypewriterEffect from "vue-typewriter-effect";
import about from '@/components/about/about.vue';
import services from '@/components/services/services.vue';
import experience from '@/components/experience/experience.vue';
import projects from '@/components/project/projects.vue';
import clients from '@/components/client/clients.vue';
import blog from '@/components/blog/blog.vue';
import getintouch from '@/components/getInTouch/getInTouch.vue';

export default {
    name: 'indexTwo',
    data() {
        
    },
    components: {
        navbar,
        VueTypewriterEffect,
        about,
        services,
        experience,
        projects,
        clients,
        blog,
        getintouch,
    }
}
</script>

<style lang="scss" scoped></style>