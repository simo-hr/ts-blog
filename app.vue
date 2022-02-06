<template>
  <div>
    <NuxtPage />
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
        content:
          'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no',
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
