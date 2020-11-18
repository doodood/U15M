<template>
  <!--       <section>
    <h2 class="py-10 text-center font-bold text-4xl">Articles Overview</h2>
    <ArticleCard
            v-for="article in articles"
            :key="article.content.title"
            :title="article.content.title"
            :description="article.content.description"
            :author="article.content.author"
            :date="article.content.date.toLocaleDateString()"
            :slug="`/articles/${article.slug}`"
          />
  </section> -->
  <section class="mw7 center">
    <h2 class="athelas ph3 ph0-l">News</h2>
    <article class="pv4 bt bb b--black-10 ph3 ph0-l" v-for="article in articles" :key="article.content.title">
      <div class="flex flex-column flex-row-ns">
        <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
          <h1 class="f3 athelas mt0 lh-title">
            {{article.content.name}}
          </h1>
          <p class="f5 f4-l lh-copy athelas">
            {{article.content.body}}
          </p>
        </div>
        <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
          <img
            src="http://mrmrs.github.io/photos/cpu.jpg"
            class="db"
            alt="Photo of a dimly lit room with a computer interface terminal."
          />
        </div>
      </div>
      <p class="f6 lh-copy gray mv0">
        By <span class="ttu">{{article.content.author.content.name}}</span>
      </p>
      <time class="f6 db gray">{{article.content.date.toLocaleDateString()}}</time>
    </article>
  </section>
</template>

<script>
export default {
  /*   data () {
    return {
      stories: []
    }
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories', {
      starts_with: 'articles/',
      resolve_relations: 'author',
      version: 'draft'
    }).then((res) => {
        console.log(res.data)
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
  }, */
  async asyncData({ app }) {
    const res = await app.$storyapi.get('cdn/stories', {
      starts_with: 'articles/',
      resolve_relations: 'author',
      version: 'draft',
    })

    // Let's convert content.date from a String to a Date
    const articles = res.data.stories.map((story) => {
      story.content.date = new Date(story.content.date)
      return story
    })
    console.log(articles)
    return { articles }
  },
  layout: 'articles',
}
</script>

<style>
.bt {
    border-top-style: solid;
    border-top-width: 1px;
}

.bb {
    border-bottom-style: solid;
    border-bottom-width: 1px;
}

.b--black-10 {
    border-color: rgba(0, 0, 0, .1);
}

.db {
    display: block;
    width: 100%;
}

.flex {
    display: flex;
}

.flex-column {
    flex-direction: column;
}

.order-1 {
    order: 1;
}

.order-2 {
    order: 2;
}

.athelas {
    font-family: athelas, georgia, serif;
    font-size: 5rem;
}

.lh-title {
    line-height: 1.25;
}

.lh-copy {
    line-height: 1.5;
}

.mw7 {
    max-width: 48rem;
}

.w-100 {
    width: 100%;
}

.gray {
    color: #777;
}

.pv4 {
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.ph3 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.mb4 {
    margin-bottom: 2rem;
}

.mt0 {
    margin-top: 0;
}

.mv0 {
    margin-top: 0;
    margin-bottom: 0;
}

.ttu {
    text-transform: uppercase;
}

.f3 {
    font-size: 3.5rem;
}

.f5 {
    font-size: 2rem;
}

.f6 {
    font-size: 1.875rem;
}

.center {
    margin-right: auto;
    margin-left: auto;
}

@media screen and (min-width: 30em) {
    .flex-row-ns {
        flex-direction: row;
    }

    .order-1-ns {
        order: 1;
    }

    .order-2-ns {
        order: 2;
    }

    .w-40-ns {
        width: 40%;
    }

    .w-60-ns {
        width: 60%;
    }

    .pl3-ns {
        padding-left: 1rem;
    }

    .pr3-ns {
        padding-right: 1rem;
    }

    .mb0-ns {
        margin-bottom: 0;
    }
}

@media screen and (min-width: 60em) {
    .ph0-l {
        padding-left: 0;
        padding-right: 0;
    }

    .f4-l {
        font-size: 2.25rem;
    }
}

</style>