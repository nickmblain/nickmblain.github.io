<template>
     <!-- Start -->
     <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="project">
            <div class="container">
                <div class="grid grid-cols-1 pb-8 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                    <h3 class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Recommendations</h3>

                </div><!--end grid-->

                <div class="grid relative grid-cols-1 mt-6">
                    <div class="tiny-three-item wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                        <div  v-for="item in clients" :key="item" class="tiny-slide">
                            <!-- Content -->
                            <div class="customer-testi">
                                <div class="content relative rounded shadow shadow-gray-200 dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                                    <i class="mdi mdi-format-quote-open mdi-48px text-amber-500"></i>
                                    <p class="text-slate-400 text-[15px]">{{ item.desc }}</p>
                                    <hr style="margin: 20px 0;">
                                    <a :href="item.url" target="_blank" class="text-amber-500 text-sm font-semibold hover:text-amber-400 duration-500 ease-in-out"><i class="uil uil-linkedin align-middle"></i> View On LinkedIn</a>
                                </div>
                                
                                <div class="text-center mt-5">
                                    <img :src="item.image" class="h-14 w-14 rounded-full shadow-md mx-auto mb-1" alt="">
                                    <a href="" class="text-base font-medium h5 hover:text-amber-500 duration-500 ease-in-out">{{item.name}}</a>
                                    <span class="text-slate-400 text-sm block">{{item.position}}</span>
                                </div>
                            </div>
                            <!-- Content -->
                        </div>                       
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
</template>

<script>
    import { onMounted, } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
    export default {
        name: 'clientComp',
        data() {
            return {
                clients:[
                    {
                       image: "https://media.licdn.com/dms/image/v2/D5603AQHhsDPH2XZtiA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1696633052786?e=1729728000&v=beta&t=r5kZ9Yj5zw8KM_3OuaZAsC_H6IFxSIHofpyyUj6sU8k",
                       desc: "I had the pleasure of working alongside Nick Blain for 9 years at Children's Miracle Network Hospitals, where he progressed from a Junior Developer to a Level 3 Frontend Developer. These promotions were well-earned. Nick's deep expertise in Content Management Systems, PHP, Laravel, WordPress, and front-end technologies like Vue and Angular has been instrumental in elevating our web initiatives." ,
                       name: 'Jared Wall',
                       position: 'Vice President of Project Management',
                       url: 'https://www.linkedin.com/in/jaredwall/',
                    },
                    {
                       image: "https://media.licdn.com/dms/image/v2/D5603AQF5Abl6lri7Xw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1684257676451?e=1729728000&v=beta&t=OUDkh3NQ5PVopg_1tQK4xQlmebKs80CkhiIBbM0fw8A",
                       desc: "I have had the pleasure of collaborating with Nick on several key projects, and I am consistently impressed by his exceptional skills and professionalism as a Frontend Developer with Children’s Miracle Network. Nick is not only talented in designing intuitive and visually appealing interfaces, but he also brings a level of dedication and innovation that sets him apart." ,
                       position: 'Director of Product Management',
                       name: 'Justin Jacobs',
                       url: 'https://www.linkedin.com/in/justin-b-jacobs/',
                    },
                    {
                       image: "https://media.licdn.com/dms/image/v2/D4E03AQHTOXaZDRSYeg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723256446616?e=1729728000&v=beta&t=Y3OwZEEl5kc8K1G3T00NB8jANcM5XOQf7GiBHEVQyfM",
                       desc: "Nick has been working as Wordpress, PHP and Frontend developer at CMNH for over 11 years now. Having worked with him on many projects, I must admit He is a development guru. His work is always outstanding and He always goes the extra mile to ensure company standards, requirements and team needs are met. He is a go-to person when you are talking about Wordpress and in front end. He is a well-versed developer, I've been working with him for around 4 years and He has demonstrated being highly-skilled, experienced, and helpful professional with a positive attitude. Working with Nick has been my pleasure and a great experience as I learned many things from him." ,
                       position: 'Account & Senior Engineering Manager',
                       name: 'Christian Torres',
                       url: 'https://www.linkedin.com/in/chrux/',
                    },
                ]
            }
        },
        setup() {
        onMounted(() => {
            tns({
                container: '.tiny-three-item',
                controls: false,
                mouseDrag: true,
                loop: true,
                rewind: true,
                autoplay: true,
                autoplayButtonOutput: false,
                autoplayTimeout: 3000,
                navPosition: "bottom",
                speed: 400,
                gutter: 12,
                responsive: {
                    992: {
                        items: 3
                    },

                    768: {
                        items: 2
                    },

                    320: {
                        items: 1
                    },
                },
            });
        });
    },
    }
</script>

<style lang="scss" scoped>

</style>
