<template>

<section class="home-featured-cat" v-bind:class="featuredClassName">
  <div class="penci-border-arrow penci-homepage-title penci-magazine-title style-7 pcalign-left pciconp-right pcicon-right">
    <h3 class="inner-arrow"><a :href="formatCategoryHref(category)">{{ category }}</a></h3>
  </div>

    <carousel v-bind="options">
      <Slide v-for="index in indicies" :key="index">
        <div style="width: 616.826px;">
          <div class="item-related">
            <a class="related-thumb penci-image-holder penci-lazy lazyloaded pcloaded" v-bind:href="formatHref(results[index])" v-bind:title="formatTitle(results[index])" v-bind:data-bgset="formatImage(results[index])" v-bind:data-src="formatImage(results[index])" data-ll-status="loaded" v-bind:style="formatBgImage(results[index])"></a>
            <h3 class="entry-title"><a v-bind:title="formatTitle(results[index])" v-bind:href="formatHref(results[index])">{{ formatTitle(results[index]) }}</a></h3>
          </div>
        </div>
      </Slide>

      <template #addons>
        <!--<navigation />-->
        <pagination />
      </template>
    </carousel>

</section>

</template>


<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'CategorySlidewhow',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    className : {
      type: String,
      default: 'style-7'
    },
    category : {
      type: String,
      default: 'Trends'
    }
  },
  data() {
    return {
      fullClassName: 'mag-cat-' + this.className,
      categoryPath: '/category/' + this.category.toLowerCase(),
      featuredClassName: 'mag-cat-style-4-' + this.className,
      results: [],
      indicies: [0,1,2,3,4,5],
      options: {
        lazyLoad: true,
      }
    };
  },
  setup() {
    return {
    };
  },
  methods: {
    fecthContent: function() {
      const url = `${import.meta.env.VITE_API_BASE_URL}/api/GetFeedItemsByCategory?category=${this.category.toLocaleLowerCase()}&domain=${import.meta.env.VITE_DOMAIN}&offset=0&limit=6&score=0.1`
      fetch(url)
          .then(response => response.json())
          .then(json => {
            this.results = this.shuffle(json)
          })
    },
    formatHref: function(item: any) {
      return `/article/${item?.slug.replaceAll('"', '')}`
    },
    formatCategoryHref: function(category: any) {
      return `/category/${category.replaceAll('"', '')}`
    },
    formatImage: function(item: any) {
      if (item?.image.replaceAll('"', '') == "") {
        return '/src/assets/images/place-holder.png'
      }
      return item?.image.replaceAll('"', '')
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
    shuffle: function(array: []) {
      let currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    }
  },
  beforeMount() {
    this.fecthContent()
  },
};
</script>
