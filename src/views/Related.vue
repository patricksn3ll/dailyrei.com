<template>

  <div class="post-related penci-posts-related-grid">
      <div class="post-title-box">
          <h4 class="post-box-title">You may also like</h4>
      </div>
      <div class="penci-related-carousel penci-related-grid-display">
          <div class="item-related" v-for="item in results" :key="item">
            <a class="related-thumb penci-image-holder penci-lazy" :data-bgset="formatImage(item)" :href="formatHref(item)" :title="formatTitle(item)"> </a>
            <h3> <a :href="formatHref(item)">{{  formatTitle(item) }}</a> </h3> <span class="date"><time class="entry-date published" :datetime="formatPublishDate(item)">{{  formatTimeSince(item) }}</time></span>
          </div>
      </div>
  </div>

</template>

<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

  export default {
    name: 'Related',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    data() {
      return {
        results: [],
      };
    },
    setup() {

    },
    methods: {
      fecthContent: function() {
        const url = `${import.meta.env.VITE_API_BASE_URL}/api/GetFeedItemsBy?By?flagged=1&domain=${import.meta.env.VITE_DOMAIN}&offset=0&limit=6&score=0.1`
        fetch(url)
            .then(response => response.json())
            .then(json => {
              this.results = json
            })
      },
      formatHref: function(item: any) {
        return `/article/${item?.slug.replaceAll('"', '')}`
      },
      formatCategoryHref: function(category: any) {
        return `/category/${category.replaceAll('"', '')}`
      },
      formatImage: function(item: any) {
        if (item?.image?.replaceAll('"', '') == "") {
          return '/src/assets/images/place-holder.png'
        }
        return item?.image?.replaceAll('"', '')
      },
      formatBgImage: function(item: any) {
        if (item?.image.replaceAll('"', '') == "") {
          return `background-image: url('/src/assets/images/place-holder.png');`
        }
        return `background-image: url('${item?.image.replaceAll('"', '')}');`
      },
      formatAuthorHref: function(item: any) {
        return `/author/${item?.author.replaceAll('"', '')}`
      },
      formatTitle: function(item: any) {
        return item?.metadata_title.replaceAll('"', '')
      },
      formatPublishDate: function(item: any) {
      const date = item?.publishDate?.replaceAll('"', '')
      return new Date(date).toLocaleDateString()
    },
    formatTimeSince: function (item: any) {
      let date = new Date(item?.publishDate.replaceAll('"', ''))
      let now = new Date()
      let seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
      let interval = seconds / 31536000;
      let s = (Math.floor(interval) == 1) ? "" : "s";

      if (interval > 1) {
        return this.formatPublishDate(item);
      }

      interval = seconds / 2592000;
      if (interval > 1) {
        return this.formatPublishDate(item);
      }

      interval = seconds / 86400;
      if (interval > 1) {
        return this.formatPublishDate(item);
      }

      interval = seconds / 3600;
      if (interval > 1) {
        s = (Math.floor(interval) == 1) ? "" : "s";
        return Math.floor(interval) + " hour" + s;
      }

      interval = seconds / 60;
      if (interval > 1) {
        s = (Math.floor(interval) == 1) ? "" : "s";
        return Math.floor(interval) + " min" + s;
      }

      return Math.floor(seconds) + " second" + s;
    }
    },
    beforeMount() {
      this.fecthContent()
    },
  };
</script>
