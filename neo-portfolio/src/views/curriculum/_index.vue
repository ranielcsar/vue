<script setup lang="ts">
type SkillProps = {
  title: string
  text: string
}

const skills: SkillProps[] = [
  {
    title: 'React, NextJS e VueJS',
    text: 'Experiência em desenvolvimento de aplicações web com React, NextJS e VueJS 3 incluindo criação de componentes reutilizáveis, gerenciamento de estado com Context API, Zustand e Redux. Roteamento de páginas com React Router e Pages/App folder do NextJS.'
  },
  {
    title: 'UX e Clean Code',
    text: 'Conhecimentos em UX/UI para criação de interfaces amigáveis e legíveis. Boas práticas de desenvolvimento de código limpo e legível.'
  },
  {
    title: 'TypeScript',
    text: `Experiência sólida em desenvolvimento com TypeScript.`
  },

  {
    title: 'Metodologias ágeis',
    text: 'Experiência em trabalhar em equipe ágil seguindo as metodologias do Scrum. Incluindo sprints, dailies, reviews, etc.'
  },
  {
    title: 'ChakraUI, TailwindCSS e StyledComponents',
    text: 'Experiência em desenvolvimento de interfaces responsivas com ChakraUI, Tailwind CSS e StyledComponents.'
  },
  {
    title: 'Inglês intermediário',
    text: 'Compreensão e comunicação em inglês intermediário.'
  },
  {
    title: 'TDD',
    text: `Testes unitários e de integração usando Jest, React Testing Library e Mock Service Worker (MSW)`
  }
]

const backendSkills: SkillProps[] = [
  {
    title: 'NodeJS e Express',
    text: 'Experiência no desenvolvimento de aplicativos utilizando o ambiente de execução do Nodejs e Express.'
  },
  {
    title: 'NestJS',
    text: 'Familiaridade com o framework NestJS para construção de aplicativos server-side.'
  },
  {
    title: 'Prisma',
    text: 'Experiência no uso do Prisma como ORM (Object-Relational Mapping) para interagir com bancos de dados.'
  }
]
</script>

<template>
  <div class="flex flex-col gap-10">
    <section class="grid grid-rows-[auto] gap-10 lg:grid-cols-2">
      <article v-for="skill in skills" :key="skill.title" class="h-max text-[1.75ch]">
        <h2
          class="lg:text-xl md:max-w-[70%] rounded-sm font-bold p-2 mb-2 border-2 border-black shadow-neo-sm tracking-widest text-black bg-pale-blue"
        >
          <span>✦ {{ skill.title }}</span>
        </h2>
        <p class="leading-relaxed tracking-wide lg:text-xl">
          {{ skill.text }}
        </p>
      </article>
    </section>

    <section class="flex flex-col gap-6">
      <h2 class="text-3xl">Conhecimentos em Backend</h2>

      <article v-for="skill in backendSkills" :key="skill.title" class="h-max text-[1.75ch]">
        <h2
          class="md:w-1/3 lg:text-xl rounded-sm font-bold p-2 mb-2 border-2 border-black shadow-neo-sm tracking-widest text-black bg-pale-blue"
        >
          <span>✦ {{ skill.title }}</span>
        </h2>
        <p class="leading-relaxed tracking-wide lg:text-xl">
          {{ skill.text }}
        </p>
      </article>
    </section>
  </div>
</template>

<style scoped></style>
