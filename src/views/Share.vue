<template>

<div class="tags-share-box page-share hide-tags tags-share-box-s1  center-box  social-align-default post-share" style="opacity: 1;">
  <span class="penci-social-share-text"><i class="penciicon-sharing"></i>Share</span>
  <a class="new-ver-share post-share-item post-share-facebook show" aria-label="Share on Facebook" target="_blank" rel="noreferrer" :href="formatFacebookText()"><i class="penci-faicon fa fa-facebook"></i><span class="dt-share">Facebook</span></a>
  <a class="new-ver-share post-share-item post-share-twitter show" aria-label="Share on Twitter" target="_blank" rel="noreferrer" :href="formatTweetText()"><i class="penci-faicon fa fa-twitter"></i><span class="dt-share">Twitter</span></a>
</div>

</template>

<script lang="ts">

  export default {
    name: 'Tag',
    components: {

    },
    props: {
      article : {
        type: String,
      },
      category : {
        type: String,
      },
      tag: {
        type: String,
      },
      item:{
        type: Object
      }
    },
    setup() {

    },
    methods: {
      formatTweetText: function() {
        if (this.category)
          return `https://twitter.com/intent/tweet?text=` + encodeURI(`Latest in ${this.category}`) + ' ' + import.meta.env.VITE_WWW_BASE_URL + '/category/' + this.category
          if (this.tag)
          return `https://twitter.com/intent/tweet?text=` + encodeURI(`Latest tagged ${this.tag}`) + ' ' + import.meta.env.VITE_WWW_BASE_URL + '/tag/' + this.tag
        return `https://twitter.com/intent/tweet?text=` + encodeURI(this.item?.metadata_title?.replaceAll('"', '')) + ' '  + import.meta.env.VITE_WWW_BASE_URL +  '/article/' + this.item?.slug
      },
      formatFacebookText: function() {
        if (this.category)
          return `https://www.facebook.com/sharer/sharer.php?u=` + encodeURI(`Latest in ${this.category}`)+ ' '  + import.meta.env.VITE_WWW_BASE_URL + '/category/' + this.category
        if (this.tag)
          return `https://www.facebook.com/sharer/sharer.php?u=` + encodeURI(`Latest tagged ${this.tag}`) + ' '  + import.meta.env.VITE_WWW_BASE_URL +  '/tag/' + this.tag
        return `https://www.facebook.com/sharer/sharer.php?u=` + encodeURI(this.item?.metadata_title?.replaceAll('"', '')) + ' ' + import.meta.env.VITE_WWW_BASE_URL + '/article/' + this.item?.slug
      },
    },
  };
  </script>
