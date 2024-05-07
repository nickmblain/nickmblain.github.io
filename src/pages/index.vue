<template>
    <navbar :socialLight=false :menuLight="'nav-light sidebar-nav'" :navLight=true />
    <!-- Start Hero -->
    <section class="relative table w-full lg:py-60 bg-[url('../../assets/images/bg/bg3.jpg')] py-36 bg-no-repeat bg-center bg-cover" id="home">
       
        <div class="absolute inset-0 bg-slate-900/40"></div>
        <div class="container">
            <div class="grid grid-cols-1 text-center mt-5 relative">
                <img src="../assets/images/hero/profile-pic.png"
                    class="rounded-full h-28 w-28 mx-auto wow animate__animated animate__fadeInUp" data-wow-delay=".1s"
                    alt="">
                <h4 class="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal text-white my-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay=".3s">Nick Blain</h4>
                <p class="text-white/50 max-w-xl mx-auto wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                    I'm a Front End Web Developer with over 12 years of
                    experience. Experienced with all stages of development.</p>

                <div class="mt-6 wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                    <a target="_blank" href="https://www.dropbox.com/scl/fi/jylwzfdvlf74hm0dxz2o0/NicholasBlainResume.pdf?rlkey=a8whx7lf7j2a7j4y282pep6ir&st=0mla5id1&dl=0"
                        class="btn rounded-md bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"
                        type="submit">Download Resume</a>
                </div>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- End Hero -->
    <about />
    <services />
    <experience />
    <!-- <projects /> -->
    <client />
</template>

<script>
import navbar from '@/components/navbar/navbar.vue'
import about from '@/components/about/about.vue';
import experience from '@/components/experience/experience.vue';
// import projects from '@/components/project/projects.vue';
import client from '@/components/client/clients.vue';
export default {
    name: 'index',
    data() {
        return {

        }
    },
    components: {
        navbar,
        about,
        experience,
        // projects,
        client,
    },
    
}
</script>

<style lang="scss" scoped></style>
