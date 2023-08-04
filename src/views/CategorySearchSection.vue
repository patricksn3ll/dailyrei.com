<template>
  <ul class="penci-wrapper-data penci-grid" >
    <li v-bind:key="item" v-for="item in results" class="list-post pclist-layout">
      <article class="item hentry">
        <div class="thumbnail">
            <a class="penci-image-holder penci-lazy lazyloaded pcloaded" :data-bgset="formatImage(item)" :href="formatHref(item)" :title="formatTitle(item)" data-ll-status="loaded" :style="formatBgImage(item)"> </a>
        </div>
        <div class="content-list-right content-list-center">
            <div class="header-list-style">
                <span class="cat"><a class="penci-cat-name penci-cat-8" :href="formatCategoryHref(item)" rel="category tag"><span>{{ formatCategory(item) }}</span></a></span>
                <h2 class="penci-entry-title entry-title grid-title"><a :href="formatHref(item)">{{ formatTitle(item) }}</a></h2>
                <div class="penci-hide-tagupdated"> <span class="author-italic author vcard">by <a class="author-url url fn n" :href="formatAuthorHref(item)">{{ formatAuthor(item) }}</a> </span> <time class="entry-date published" :datetime="formatPublishDate(item)">{{ formatTimeSince(item) }}</time> </div>
                <div class="grid-post-box-meta"> <span class="otherl-date-author author-italic author vcard">by <a class="author-url url fn n" :href="formatAuthorHref(item)">{{ formatAuthor(item) }}</a> </span> <span class="otherl-date"><time class="entry-date published" :datetime="formatPublishDate(item)">{{ formatTimeSince(item) }}</time></span> </div>
            </div>
        </div>
    </article>
    </li>
    <div v-if="showLoadMore" class="penci-pagination penci-ajax-more penci-ajax-home penci-ajax-more-scroll">
      <a class="penci-ajax-more-button" aria-label="More Posts" data-mes="Sorry, No more posts" v-on:click="fecthContent" style="hand:cursor">
      <span class="ajax-more-text">Load More Posts</span><!--<span class="ajaxdot"></span><i class="penci-faicon fa fa-refresh"></i>--></a>
    </div>
  </ul>

</template>


<script lang="ts">
import {formatHref, formatTitle, formatCategory , formatCategoryHref, formatAuthor, formatAuthorHref, formatPublishDate, formatTimeSince, formatImage, formatBgImage, formatDescription, titleLength} from '../assets/js/utilities.js'

export default {
  name: 'CategorySearchSection',
  components: {

  },
  props: {
    category : {
      type: String,
      default: ''
    },
    showLoadMore : {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      results: [] as any[],
      pageCounter: 0,
      pageSize: 10,
      item: {} as any,
      query: this.$route.query.query as string
    };
  },
  setup() {
    return {
    };
  },
  methods: {
    fecthContent: function() {
      let url = `${import.meta.env.VITE_API_BASE_URL}/api/GetFeedItemsBy?filter=search&query=${this.query}&page=${this.pageCounter}&pageSize=${this.pageSize}&count=100`
     fetch(url)
          .then(response => response.json())
          .then(json => {
            this.results = this.results.concat(json)
            this.pageCounter++
          })
    },
    formatHref: function(item: any) {
      return formatHref(item);
    },
    formatImage: function(item: any) {
        return formatImage(item);
    },
    formatBgImage: function(item: any) {
        return formatBgImage(item);
    },
    formatTitle: function(item: any) {
      length = length || 82
      return formatTitle(item, length );
    },
    formatAuthor: function(item:any) {
      return formatAuthor(item)
    },
    formatCategory: function(item:any) {
      return formatCategory(this.category)
    },
    formatCategoryHref: function(item:any) {
      return formatCategoryHref(this.category)
    },
    formatAuthorHref: function(item:any) {
      return formatAuthorHref(item)
    },
    formatPublishDate: function(item:any) {
      return formatPublishDate(item)
    },
    formatTimeSince: function(item:any) {
      return formatTimeSince(item)
    },
  },
  beforeMount() {
    this.fecthContent()
  },
};
</script>
