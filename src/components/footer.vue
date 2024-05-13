<template>
    <!-- Footer Start -->
    <footer class="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
            <div class="py-[30px] px-0 border-t border-slate-800">
                <div class="container text-center">
                    <div class="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                        <div class="lg:col-span-3 md:text-start text-center">
                            <a href="#" class="text-[22px] focus:outline-none">
                                <img src="../assets/images/logo-light.png" class="mx-auto md:me-auto md:ms-0" alt="">
                            </a>
                        </div>

                        <div class="lg:col-span-5 text-center mt-6 md:mt-0">
                            <p class="mb-0">© {{ date }} Nick. Designed & developed with <i class="mdi mdi-heart text-red-600"></i> in Utah.</p>
                        </div>

                        <ul class="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0">
                            <li class="inline"><a href="https://www.linkedin.com/in/nicholas-blain-09110b41/" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><i class="uil uil-linkedin" title="Linkedin"></i></a></li>
                            <li class="inline"><a href="https://github.com/nickmblain/nickmblain.github.io" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><i class="uil uil-github" title="Linkedin"></i></a></li>
                        </ul><!--end icon-->
                    </div><!--end grid-->
                </div><!--end container-->
            </div>
        </footer><!--end footer-->
        <!-- Footer End -->
</template>

<script>
    export default {
        name: 'footerComp',
        data() {
            return {
                date: new Date().getFullYear(),
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
