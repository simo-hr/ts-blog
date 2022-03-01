<template>
  <div id="wrapper" class="flex flex-row">
    <div id="nav" class="bg-base-color text-white p-3">
      <li>
        <nuxt-link class="text-xl" to="/admin/signin">
          signin
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="text-xl" to="/posts/new">
          new post
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="text-xl" to="/posts">
          post
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="text-xl" to="/categories">
          category
        </nuxt-link>
      </li>
    </div>
    <div id="main" class="flex-1 overflow-hidden">
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  head: {
    meta: [
      { charset: 'utf-8', },
      {
        name: 'google-site-verification',
        content: 'Hz0_GXF7s0edl3K5osw-tHzHJDhOdtHvhe-gnfAT8dQ',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no',
      },
      process.env.NODE_ENV === 'production'
        ? {
            hid: 'description',
            name: 'description',
            content: 'blog',
          }
        : {
            hid: 'robots',
            name: 'robots',
            content: 'noindex,nofollow',
          }
    ],
  },
}
</script>

<style scoped>
#wrapper {
  min-height: 100vh;
}
</style>
