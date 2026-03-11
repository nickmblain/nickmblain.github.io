<template>
    <section class="relative py-16 bg-slate-50 dark:bg-slate-800" id="projects">
        <div class="container">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h3 class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">My Projects</h3>
                <p class="text-slate-400 max-w-xl mx-auto">Showcasing some of the projects I've worked on throughout my career.</p>
            </div>

            <!-- Current Initiative Banner -->
                <div class="mt-8 rounded-md shadow dark:shadow-gray-700 bg-gradient-to-r from-violet-500/10 to-indigo-500/5 dark:from-violet-500/15 dark:to-indigo-500/5 border border-violet-500/30 p-6 flex flex-col md:flex-row md:items-start gap-6">
                    <div class="flex-shrink-0 flex items-center justify-center size-14 bg-violet-500/15 text-violet-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-wrap items-center gap-3 mb-1">
                            <span class="text-xs font-semibold uppercase tracking-wider text-violet-500">Current Initiative</span>
                            <span class="text-xs text-slate-400">Started March 2026</span>
                        </div>
                        <h4 class="text-lg font-semibold mb-1">Shared AI Standards Across CMN</h4>
                        <p class="text-slate-400 text-[15px]">Rolling out a unified <code class="text-violet-500 text-xs bg-violet-500/10 px-1 py-0.5 rounded">agents.md</code> file across every CMN repository that automatically syncs to <code class="text-violet-500 text-xs bg-violet-500/10 px-1 py-0.5 rounded">CLAUDE.md</code>, <code class="text-violet-500 text-xs bg-violet-500/10 px-1 py-0.5 rounded">.cursorrules</code>, and Copilot config on precommit — so every developer gets AI tooling built on shared engineering standards out of the box. Also includes a set of custom slash commands for everyday workflows:</p>
                        <div class="flex flex-wrap gap-2 mt-3 mb-3">
                            <code class="text-violet-500 text-xs bg-violet-500/10 px-2 py-1 rounded">/commit</code>
                            <code class="text-violet-500 text-xs bg-violet-500/10 px-2 py-1 rounded">/pr</code>
                            <code class="text-violet-500 text-xs bg-violet-500/10 px-2 py-1 rounded">/pr-review</code>
                            <code class="text-violet-500 text-xs bg-violet-500/10 px-2 py-1 rounded">/qa-audit</code>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded-md">AI Tooling</span>
                            <span class="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded-md">Developer Experience</span>
                            <span class="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded-md">Git Hooks</span>
                            <span class="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded-md">Standards</span>
                        </div>
                    </div>
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

                <!-- The Commit with Nick -->
                <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                    <div class="relative overflow-hidden">
                        <img src="../../assets/images/screenshots/the-commit.png" alt="The Commit with Nick" class="group-hover:scale-110 transition-all duration-500">
                        <div class="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <a href="https://the-commit.netlify.app/" target="_blank" rel="noopener noreferrer" class="btn btn-icon rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white">
                                <i class="uil uil-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div class="p-4">
                        <a href="https://the-commit.netlify.app/" target="_blank" rel="noopener noreferrer" class="text-lg font-medium hover:text-amber-500 transition-all duration-500">The Commit with Nick</a>
                        <p class="text-slate-400 mt-2">A newsletter and blog for developers covering software engineering, career growth, and lessons learned in the industry.</p>
                        <div class="flex flex-wrap gap-2 mt-3">
                            <span class="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded-md">Newsletter</span>
                            <span class="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded-md">Blog</span>
                            <span class="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded-md">Writing</span>
                        </div>
                    </div>
                </div>

                <!-- CMN.org -->
                <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                    <div class="relative overflow-hidden">
                        <img src="../../assets/images/screenshots/cmn.png" alt="Children's Miracle Network" class="group-hover:scale-110 transition-all duration-500">
                        <div class="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <a href="https://cmn.org/" target="_blank" rel="noopener noreferrer" class="btn btn-icon rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white">
                                <i class="uil uil-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                    <div class="p-4">
                        <a href="https://cmn.org/" target="_blank" rel="noopener noreferrer" class="text-lg font-medium hover:text-amber-500 transition-all duration-500">Children's Miracle Network</a>
                        <p class="text-slate-400 mt-2">Contributed to a company-wide branding refresh and the creation of a design system to standardize the visual language across CMN's digital properties.</p>
                        <div class="flex flex-wrap gap-2 mt-3">
                            <span class="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded-md">Design System</span>
                            <span class="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded-md">Branding</span>
                            <span class="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded-md">Web</span>
                        </div>
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
