<template>
    <section class="relative py-16 bg-slate-50 dark:bg-slate-800" id="projects">
        <div class="container">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h3 class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">My Projects</h3>
                <p class="text-slate-400 max-w-xl mx-auto">Showcasing some of the projects I've worked on throughout my career.</p>
            </div>

            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-6">
                <!-- Inflight App Project -->
                <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                    <div class="relative overflow-hidden">
                        <img src="../../assets/images/screenshots/inflight-home.png" alt="Inflight App" class="group-hover:scale-110 transition-all duration-500">
                        <div class="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <a href="https://apps.apple.com/us/app/inflight/id1501386990" target="_blank" class="btn btn-icon rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white">
                                <i class="uil uil-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div class="p-4">
                        <a href="https://apps.apple.com/us/app/inflight/id1501386990" target="_blank" class="text-lg font-medium hover:text-amber-500 transition-all duration-500">Inflight iOS App</a>
                        <p class="text-slate-400 mt-2">Designed and implemented the complete UI for this iOS application from Figma designs. InFlight provides a mobile solution for Children's Miracle Network Hospitals to track partner stewardship activities, increase visit efficiency, positively impact fundraising, and support relationship building.</p>
                        <div class="flex flex-wrap gap-2 mt-3">
                            <span class="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded-md">iOS</span>
                            <span class="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded-md">UI Design</span>
                            <span class="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded-md">Figma</span>
                        </div>
                    </div>
                </div>

                <!-- Placeholder for future projects -->
                <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-slate-100 dark:bg-slate-700 flex items-center justify-center min-h-[320px]">
                    <div class="text-center p-6">
                        <div class="size-16 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus">
                                <path d="M5 12h14" />
                                <path d="M12 5v14" />
                            </svg>
                        </div>
                        <h4 class="font-medium">More Projects Coming Soon</h4>
                        <p class="text-slate-400 mt-2">Additional projects will be showcased here.</p>
                    </div>
                </div>

                <!-- Placeholder for future projects -->
                <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-slate-100 dark:bg-slate-700 flex items-center justify-center min-h-[320px]">
                    <div class="text-center p-6">
                        <div class="size-16 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus">
                                <path d="M5 12h14" />
                                <path d="M12 5v14" />
                            </svg>
                        </div>
                        <h4 class="font-medium">More Projects Coming Soon</h4>
                        <p class="text-slate-400 mt-2">Additional projects will be showcased here.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'projects'
    }
</script>
