
<template>
  <!-- <div class="container mx-auto px-4 mt-4">
      TEST
      <h1>{{ article.content.name }}</h1>
    <header>
      <h2 class="text-5xl">{{ article.content.name }}</h2>
      <div class="flex items-center mt-6">
        <img
          class="w-20 rounded-full border-4 border-main"
          :src="author.content.avatar.filename"
          :alt="author.content.name"
        />
        <div class="ml-6">
          <p class="text-xl font-bold">{{ author.name }}</p>
          <p class="text-sm mt-1">
            {{ article.content.date.toLocaleDateString() }}
          </p>
        </div>
      </div>
    </header>
    <div class="mt-8">
      {{ article.content.body }}
    </div> 
  </div> -->
  <article class="athelas">
  <div class="vh-100 dt w-100 tc bg-dark-gray white cover" style="background:url(http://mrmrs.github.io/photos/u/009.jpg) no-repeat center;">
    <div class="dtc v-mid">
      <header class="white-70">
        <h2 class="f6 fw1 ttu tracked mb2 lh-title">Issue Six</h2>
        <h3 class="f6 fw1 lh-title">{{ article.content.date.toLocaleDateString() }}</h3>
      </header>
      <h1 class="f1 f-headline-l fw1 i white-60">{{ article.content.name }}</h1>
      <blockquote class="ph0 mh0 measure f4 lh-copy center">
        <p class="fw1 white-70">
          It's the space you put between the notes that make the music.
        </p>
        <cite class="f6 ttu tracked fs-normal">{{ author.content.name}}</cite>
      </blockquote>
    </div>
  </div>
  <div class="center measure-wide f5 pv5 lh-copy ph2">
    <h1 class="f1 lh-title">{{ article.content.intro}}</h1>
    {{ article.content.body }}
  </div>
</article>
</template>
<script>
//import Article from '~/components/Article.vue'

/* export default {
    <template>
  <section>
    <Article :blok="story.content"/>
  </section>
</template>

  data () {
    return {
      story: { content: {} }
    }
  },
  mounted () {
    this.$storybridge.on('input', (event) => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content
      }
    })
    this.$storybridge.on(['published', 'change'], (event) => {
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true,
      })
    })
  },
  asyncData (context) {
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get(`cdn/stories/articles/${context.params.slug}`, {
      version: version
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  }
} */
export default {
  async asyncData({ app, route, error }) {
    // Get the slug from the route
    
    const slug = route.params.slug
    console.log('slug ',slug)

const res = await app.$storyapi.get('cdn/stories', {
      starts_with: 'articles/',
      by_slugs: '*/' + slug,
      resolve_relations: 'author',
      version: 'draft'
    })

    console.log('respo ==> ',res)

    const article = res.data.stories[0]
    if (!article) return error(`Article with slug ${slug} not found`)
    article.content.date = new Date(article.content.date)

    return { article, author: article.content.author }
  },
  layout: 'articles'
}
</script>