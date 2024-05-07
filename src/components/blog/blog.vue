<template>
    <!-- Start -->
    <section class="relative md:py-24 py-16" id="blog">
            <div class="container">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Blogs or News</h3>

                    <p class="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
                </div><!--end grid-->

                <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] mt-8">
                    <div v-for="item in blogs" :key="item" class="blog relative rounded-lg shadow shadow-slate-200 dark:shadow-gray-800 overflow-hidden">
                        <img :src="item.image" alt="">

                        <div class="content p-6">
                            <a href="" class="text-[17px] hover:text-amber-500 dark:text-white dark:hover:text-amber-500 transition duration-500 ease-in-out font-medium h5">{{ item.title }}</a>
                            <p class="text-slate-400 mt-3 text-[15px]">{{ item.desc }}</p>
                            
                            <div class="mt-5">
                                <a href="" class="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Read More <i class="uil uil-arrow-right"></i></a>
                            </div>
                        </div>
                    </div> 
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
</template>

<script>
    export default {
        name: 'blogComp',
        data() {
            return {
                blogs:[
                    {
                        image: require('../../assets/images/blog/01_giglink.jpg'),
                        title: 'Giglink: Tailwind CSS NFT Marketplace Template',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    {
                        image: require('../../assets/images/blog/01_techwind.jpg'),
                        title: 'Techwind: Tailwind CSS Multipurpose Template',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    },
                    {
                        image: require('../../assets/images/blog/01_upwind.jpg'),
                        title: 'Upwind: Tailwind CSS Landing Page Template',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>