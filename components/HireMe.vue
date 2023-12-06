<template>
  <div>
    <div>
      <h1
        class="text-3xl text-center font-bold text-slate-700 dark:text-slate-300 mt-10"
      >
        Hire Me
      </h1>
      <p
        class="w-3/4 lg:w-1/2 mx-auto my-8 text-slate-600 dark:text-slate-400 text-center"
      >
        As an experienced developer, I will answer all your questions about the
        project, infrastructure, code quality, technical decisions and more in a
        live 1 on 1 session.
      </p>
    </div>
    <div class="lg:flex p-4 gap-1 mt-8">
      <div
        class="w-5/6 mx-auto lg:w-2/3 border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-t-lg lg:rounded-l-lg p-4 md:p-8 mt-1"
      >
        <h1 class="text-slate-700 dark:text-slate-300 font-bold text-lg">
          Services provided
        </h1>
        <ul class="text-slate-600 dark:text-slate-400 font-normal mt-4">
          <li
            v-for="service in services"
            :key="service.title"
            class="font-medium text-slate-600 dark:text-slate-400"
          >
            <span class="grid grid-cols-12 py-3">
              <Icon
                :name="`${service.icon}`"
                size="20"
                class="col-span-1 justify-self-center"
              />
              <span
                class="col-span-10 text-slate-700 dark:text-slate-300 text-sm lg:text-base pl-4 md:pl-0"
              >
                {{ service.title }}
              </span>
            </span>
          </li>
        </ul>
      </div>
      <div
        class="w-11/12 mx-auto lg:w-1/3 border-2 border-slate-200 dark:border-slate-700 rounded-b-lg lg:rounded-r-lg p-8 mt-1"
      >
        <h1 class="text-slate-700 dark:text-slate-300 font-bold text-lg">
          Workflow
        </h1>
        <div v-for="flow in flows" :key="flow.title" class="mt-4">
          <h1 class="font-bold text-slate-700 dark:text-slate-300 pb-1">
            {{ flow.title }}
          </h1>
          <p class="font-medium text-sm text-slate-600 dark:text-slate-400">
            {{ flow.description }}
          </p>
        </div>
        <address class="text-teal-500 pt-4 underline">
          <a href="mailto:sudoer.zero@outlook.com">Send a request here</a>
        </address>
      </div>
    </div>
  </div>
</template>
<script setup>
const services = [
  {
    title: "Advice on issues with your current project",
    icon: "octicon:issue-tracks-16",
  },
  { title: "Thorough code review", icon: "fa6-regular:file-code" },
  {
    title: "Help choosing, establishing and expanding project tech stack",
    icon: "mdi:cube-outline",
  },
  {
    title: "Answers to your ongoing questions",
    icon: "material-symbols:help-outline",
  },
  { title: "Mobile or Front End app improvements", icon: "entypo:mobile" },
  {
    title:
      "Identifying and resolving issues in both front-end and back-end components.",
    icon: "mdi:bug-outline",
  },
  {
    title: "Performance Optimization and Scaling Strategies",
    icon: "ph:sparkle-bold",
  },
];

const flows = [
  {
    title: "1. You leave a request",
    description:
      "You send a request with a detailed description of your issue or a topic of conversation. Please include as more relevant information as possible.",
  },
  {
    title: "2. Set the date and time",
    description:
      "We agree on date and time of the consultation, according to your needs and my availability.",
  },
  {
    title: "3. We have a 1-on-1 session",
    description:
      "At the agreed time, you will receive a link which allows you to begin the consultation.",
  },
];
</script>
