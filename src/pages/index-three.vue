<template>
    <navbar :socialLight=false :menuLight="'nav-light sidebar-nav'" :navLight=true />
    <!-- Start Hero -->
    <section class="relative table w-full lg:py-60 bg-[url('../../assets/images/bg/bg3.jpg')] py-36 bg-no-repeat bg-center bg-cover" id="home">
       
        <div class="absolute inset-0 bg-slate-900/40"></div>
        <div class="container">
            <div class="grid grid-cols-1 text-center mt-5 relative">
                <img src="../assets/images/hero/4.jpg"
                    class="rounded-full h-28 w-28 mx-auto wow animate__animated animate__fadeInUp" data-wow-delay=".1s"
                    alt="">
                <h4 class="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal text-white my-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay=".3s">Dennis Scott</h4>
                <p class="text-white/50 max-w-xl mx-auto wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                    Obviously I'm a Web Designer. Web Developer with over 7 years of
                    experience. Experienced with all stages of the development.</p>

                <div class="mt-6 wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                    <a href=""
                        class="btn rounded-md bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"
                        type="submit">Hire me</a>
                </div>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- End Hero -->
    <about />
    <services />
    <experience />
    <projects />
    <client />
    <blog />
    <getintouch />
</template>

<script>
import navbar from '@/components/navbar/navbar.vue'
import about from '@/components/about/about-animation.vue';
import services from '@/components/services/services-animation.vue';
import experience from '@/components/experience/experience-animation.vue';
import projects from '@/components/project/projects-animation.vue';
import client from '@/components/client/clients-animation.vue';
import blog from '@/components/blog/blog-animation.vue';
import getintouch from '@/components/getInTouch/getInTouch-animation.vue';
export default {
    name: 'indexThree',
    data() {
        return {

        }
    },
    components: {
        navbar,
        about,
        services,
        experience,
        projects,
        client,
        blog,
        getintouch,
    },
    
}
</script>

<style lang="scss" scoped></style>