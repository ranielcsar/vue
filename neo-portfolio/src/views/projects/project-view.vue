<script setup lang="ts">
import type { ProjectProps } from './project-type'

defineProps<{ project: ProjectProps; active: boolean }>()
</script>

<template>
  <div
    :class="`mx-2 flex h-full w-full flex-1 flex-col gap-5 text-black ${
      active ? 'opacity-100' : 'opacity-60'
    }`"
  >
    <section className="relative flex flex-col gap-2 xl:p-0 flex-1 xl:max-h-[70vh]">
      <header className="text-2xl font-bold xl:text-4xl">
        {{ project.title }}
      </header>

      <p className="text-[1.85ch]">{{ project.description }}</p>

      <img
        class="max-h-1/2 aspect-video rounded-sm bg-white/60 object-fill object-center text-black"
        src="project.image"
        :alt="`${project.title} print`"
        rel="preload"
        loading="lazy"
      />
    </section>

    <footer className="flex flex-[2] w-full items-center justify-end gap-4">
      <button
        target="_blank"
        rel="noreferrer"
        href="project.links.sandbox"
        disabled="true"
        title="CodeSandbox"
        className="disabled:bg-white/50 disabled:select-none disabled:hover:text-black flex items-center rounded-sm bg-white w-max gap-1 p-2 text-black transition-colors hover:text-primary"
      >
        <span className="text-xl">Demo</span>
      </button>

      <a
        target="_blank"
        rel="noreferrer"
        :href="project.links.github"
        title="Github"
        className="flex items-center rounded-sm bg-white w-max gap-1 p-2 text-black transition-colors hover:text-primary"
      >
        <span className="text-xl">Code</span>
      </a>
    </footer>
  </div>
</template>

<style scoped></style>
./project-type
