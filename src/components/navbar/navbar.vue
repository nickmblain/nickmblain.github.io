<template>
    <!-- Navbar Start -->
    <nav class="navbar" id="navbar" @scroll="handleScroll">
            <div class="container flex flex-wrap items-center justify-between">
                <router-link to="/" v-if="navLight" class="navbar-brand md:me-8" >
                    <span class="inline-block dark:hidden">
                        <img src="../../assets/images/logo-dark.png" class="l-dark" alt="">
                        <img src="../../assets/images/logo-light.png" class="l-light" alt="">
                    </span>
                    <img src="../../assets/images/logo-light.png" class="hidden dark:inline-block" alt="">
                </router-link>

                <router-link to="/" v-else  class="navbar-brand md:me-8" >
                    <img src="../../assets/images/logo-dark.png" class="inline-block dark:hidden" alt="">
                    <img src="../../assets/images/logo-light.png" class="hidden dark:inline-block" alt="">
                </router-link>
                
                <div class="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
                    <!-- Navbar Button -->
                    <ul class="list-none menu-social mb-0 ml-2" :class="socialLight === true ? '' : 'hidden'">
                        <li class="inline">
                            <a href="">
                                <span class="login-btn-primary"><span class="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"><i class="uil uil-dribbble align-middle"></i></span></span>
                                <span class="login-btn-light m-0"><span class="btn btn-icon btn-sm rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i class="uil uil-dribbble align-middle"></i></span></span>
                            </a>
                            <a href="" class="mx-1">
                                <span class="login-btn-primary"><span class="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"><i class="uil uil-behance align-middle"></i></span></span>
                                <span class="login-btn-light"><span class="btn btn-icon btn-sm rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i class="uil uil-behance align-middle"></i></span></span>
                            </a>
                            <a href="">
                                <span class="login-btn-primary"><span class="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"><i class="uil uil-instagram align-middle"></i></span></span>
                                <span class="login-btn-light"><span class="btn btn-icon btn-sm rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i class="uil uil-instagram align-middle"></i></span></span>
                            </a>
                        </li>
                    </ul>
                    <ul class="list-none menu-social mb-0" :class="socialLight === false ? '' : 'hidden'">
                        <li class="inline">
                            <a href="https://www.linkedin.com/in/nicholas-blain-09110b41/" class="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"><i class="uil uil-linkedin align-middle"></i></a>
                        </li>
                    </ul>
                    <!-- Navbar Collapse Manu Button -->
                    <button data-collapse="menu-collapse" type="button" class="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden" aria-controls="menu-collapse" aria-expanded="false" @click="handler">
                        <span class="sr-only">Navigation Menu</span>
                        <i class="mdi mdi-menu text-[24px]"></i>
                    </button>
                </div>

                <!-- Navbar Manu -->
                <div class="navigation lg_992:order-1 lg_992:flex  ms-auto" id="menu-collapse" :class="{hidden : !toggle}">
                    <ul class="navbar-nav" id="navbar-navlist" :class="menuLight">
                        <li class="nav-item active home">
                            <a class="nav-link " href="#home">Home</a>
                        </li>
                        <li class="nav-item ms-0 about">
                            <a class="nav-link" href="#about">About Me</a>
                        </li>
                        <li class="nav-item ms-0 experience">
                            <a class="nav-link" href="#experience">Experience</a>
                        </li>
                        <li class="nav-item ms-0 recommendations">
                            <a class="nav-link" href="#project">Recommendations</a>
                        </li> 
                        <!-- <li class="nav-item ms-0 project">
                            <a class="nav-link" href="#project">Projects</a>
                        </li> -->
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Navbar End -->
</template>

<script>
import feather from 'feather-icons'
   export default {
    props:{
        socialLight: {
            type: Boolean, 
            required: true,
        },
        menuLight: {
            type: String, 
            required: true,
        },
        navLight:{
            type: Boolean, 
            required: true,
        }

        
    },
    name: 'navBar',
    data() {
        return { 
            toggle:false,
            scroll:true,
            sections:document.querySelectorAll("section"),
            navLi:document.querySelectorAll("nav .container .navigation ul li"),
            current : "",
            sectionTop:null,
           
         }
    },
   mounted (){
        feather.replace();
   },
    created () {
        window.addEventListener('scroll', this.handleScroll);
         window.addEventListener('scroll', this.onscroll);
    },

    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('scroll', this.onscroll);
    },

    methods: {
    handler: function() {
      this.toggle = !this?.toggle;   
    },
    handleScroll () {
        const navbar = document.getElementById("navbar");
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("is-sticky");
        } else {
            navbar.classList.remove("is-sticky");
        }
    },
    onscroll () {
        document.querySelectorAll("section").forEach((section) => {
            this.sectionTop = section.offsetTop;
            if (pageYOffset >= this.sectionTop - 150) {
            this.current = section.getAttribute("id"); 
            }
        });
        document.querySelectorAll("nav .container .navigation ul li").forEach((li) => {
            if (li.classList.contains(this.current)) {
                li.classList.add("active");
            }else{
                li.classList.remove("active");
            }
        });
    }
  },
  

}
</script>

<style lang="scss" scoped>

</style>
