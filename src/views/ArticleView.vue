
  <template>

    <div class="container penci-breadcrumb" style="margin-top:25px;text-transform: capitalize;">
        <span><a class="crumb" href="/">Home</a></span>
        <i class="penci-faicon fa fa-angle-right"></i>
        <span><a class="crumb" :href="formatCategoryHref(item)">{{ formatCategory(item) }}</a></span>
        <i class="penci-faicon fa fa-angle-right"></i>
        <span>{{formatTitle(item)}}</span>
      </div>

    <div class="container container-single penci_sidebar penci-enable-lightbox" style="transform: none;">
        <div id="main" class="penci-main-sticky-sidebar" style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">
            <div class="theiaStickySidebar" style="padding-top: 0px; padding-bottom: 1px; position: static;">
                <article id="post-241" class="post type-post status-publish">
                    <div class="header-standard header-classic single-header">
                        <div class="penci-standard-cat"><span class="cat"><a class="penci-cat-name penci-cat-8" :href="formatCategoryHref(item)" rel="category tag"><span>{{ formatCategory(item) }}</span></a></span></div>
                        <h1 class="post-title single-post-title entry-title">{{ formatTitle(item) }}</h1>
                        <div class="penci-hide-tagupdated"> <span class="author-italic author vcard">by <a class="author-url url fn n" :href="formatAuthorHref(item)">{{ formatAuthor(item) }}</a> </span> <time class="entry-date published" :datetime="formatPublishDate(item)">{{  formatTimeSince(item) }}</time> </div>
                        <div class="post-box-meta-single"> <span class="author-post byline"><span class="author vcard">written by <a class="author-url url fn n" :href="formatAuthorHref(item)">{{ formatAuthor(item) }}</a> </span></span> <span><time class="entry-date published" :datetime="formatPublishDate(item)">{{  formatTimeSince(item) }}</time></span></div>
                    </div>
                    <div class="post-image"> <a :href="formatHref(item)" data-rel="penci-gallery-image-content"> <img class="attachment-penci-full-thumb size-penci-full-thumb penci-lazy wp-post-image pc-singlep-img lazyloaded pcloaded" width="1170" height="780" src="" :alt="formatTitle(item)" :title="formatTitle(item)" data-sizes="(max-width: 767px) 585px, 1170px" :data-srcset="formatImage(item)" :data-src="formatImage(item)" data-ll-status="loaded" sizes="(max-width: 767px) 585px, 1170px" :srcset="formatImage(item)"> </a> </div>
                    <div class="sstyle-style-1 tags-share-box tags-share-box-top single-post-share tags-share-box-s2 tags-share-box-2_3 social-align-center disable-btnplus post-share" style="opacity: 1;"> <span class="penci-social-share-text"><i class="penciicon-sharing"></i>Share</span> <span class="post-share-item post-share-plike"><span class="count-number-like">0</span><a href="#" aria-label="Like this post" class="penci-post-like single-like-button" data-post_id="241" title="Like" data-like="Like" data-unlike="Unlike"><i class="penci-faicon fa fa-heart-o"></i></a></span><a class="new-ver-share post-share-item post-share-facebook" aria-label="Share on Facebook" target="_blank" rel="noreferrer" href="https://www.facebook.com/sharer/sharer.php?u="><i class="penci-faicon fa fa-facebook"></i><span class="dt-share">Facebook</span></a><a class="new-ver-share post-share-item post-share-twitter" aria-label="Share on Twitter" target="_blank" rel="noreferrer" href="https://twitter.com/intent/tweet?text=Check%20out%20this%20article:%20Global%20economy%20sinks%20deeper%20into%20turmoil%20as%20Fed%20prepares%20to%20raise%20rates%20-%20https://soledaddemo.pencidesign.net/soledad-world-wide-news/global-economy-sinks-deeper-into-turmoil-as-fed-prepares-to-raise-rates/"><i class="penci-faicon fa fa-twitter"></i><span class="dt-share">Twitter</span></a><a class="new-ver-share post-share-item post-share-pinterest" aria-label="Pin to Pinterest" data-pin-do="none" rel="noreferrer" target="_blank" href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fsoledaddemo.pencidesign.net%2Fsoledad-world-wide-news%2Fglobal-economy-sinks-deeper-into-turmoil-as-fed-prepares-to-raise-rates%2F&amp;media=https%3A%2F%2Fsoledaddemo.pencidesign.net%2Fsoledad-world-wide-news%2Fwp-content%2Fuploads%2Fsites%2F25%2F2022%2F03%2Fp17-1.jpg&amp;description=Global+economy+sinks+deeper+into+turmoil+as+Fed+prepares+to+raise+rates"><i class="penci-faicon fa fa-pinterest"></i><span class="dt-share">Pinterest</span></a><a class="new-ver-share post-share-item post-share-email" target="_blank" aria-label="Share via Email" rel="noreferrer" href="mailto:?subject=Global%20economy%20sinks%20deeper%20into%20turmoil%20as%20Fed%20prepares%20to%20raise%20rates&amp;BODY=https://soledaddemo.pencidesign.net/soledad-world-wide-news/global-economy-sinks-deeper-into-turmoil-as-fed-prepares-to-raise-rates/"><i class="penci-faicon fa fa-envelope"></i><span class="dt-share">Email</span></a><a class="post-share-item post-share-expand" href="#" aria-label="Share Expand"><i class="penci-faicon penciicon-add"></i></a> </div>
                    <div class="post-entry blockquote-style-1">
                        <div class="inner-post-entry entry-content" id="penci-post-entry-inner"> <i class="penci-post-countview-number-check" style="display:none">320</i>
                            <p>{{ formatDescription(item) }}</p>
                            <div class="penci-single-link-pages"> </div>
                            <div class="post-tags">
                              <a v-for="tag in item.categories" :key="tag" :href="formatTagHref(tag)" rel="tag">{{ tag }}</a>
                            </div>
                        </div>
                    </div>

                    <div class="tags-share-box single-post-share tags-share-box-s2 tags-share-box-2_3 social-align-center disable-btnplus post-share" style="opacity: 1;"> <span class="penci-social-share-text"><i class="penciicon-sharing"></i>Share</span> <span class="post-share-item post-share-plike"> <span class="count-number-like">0</span><a href="#" aria-label="Like this post" class="penci-post-like single-like-button" data-post_id="241" title="Like" data-like="Like" data-unlike="Unlike"><i class="penci-faicon fa fa-heart-o"></i></a> </span> <a class="new-ver-share post-share-item post-share-facebook" aria-label="Share on Facebook" target="_blank" rel="noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https://soledaddemo.pencidesign.net/soledad-world-wide-news/global-economy-sinks-deeper-into-turmoil-as-fed-prepares-to-raise-rates/"><i class="penci-faicon fa fa-facebook"></i><span class="dt-share">Facebook</span></a><a class="new-ver-share post-share-item post-share-twitter" aria-label="Share on Twitter" target="_blank" rel="noreferrer" href="https://twitter.com/intent/tweet?text=Check%20out%20this%20article:%20Global%20economy%20sinks%20deeper%20into%20turmoil%20as%20Fed%20prepares%20to%20raise%20rates%20-%20https://soledaddemo.pencidesign.net/soledad-world-wide-news/global-economy-sinks-deeper-into-turmoil-as-fed-prepares-to-raise-rates/"><i class="penci-faicon fa fa-twitter"></i><span class="dt-share">Twitter</span></a><a class="new-ver-share post-share-item post-share-pinterest" aria-label="Pin to Pinterest" data-pin-do="none" rel="noreferrer" target="_blank" href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fsoledaddemo.pencidesign.net%2Fsoledad-world-wide-news%2Fglobal-economy-sinks-deeper-into-turmoil-as-fed-prepares-to-raise-rates%2F&amp;media=https%3A%2F%2Fsoledaddemo.pencidesign.net%2Fsoledad-world-wide-news%2Fwp-content%2Fuploads%2Fsites%2F25%2F2022%2F03%2Fp17-1.jpg&amp;description=Global+economy+sinks+deeper+into+turmoil+as+Fed+prepares+to+raise+rates"><i class="penci-faicon fa fa-pinterest"></i><span class="dt-share">Pinterest</span></a><a class="new-ver-share post-share-item post-share-email" target="_blank" aria-label="Share via Email" rel="noreferrer" href="mailto:?subject=Global%20economy%20sinks%20deeper%20into%20turmoil%20as%20Fed%20prepares%20to%20raise%20rates&amp;BODY=https://soledaddemo.pencidesign.net/soledad-world-wide-news/global-economy-sinks-deeper-into-turmoil-as-fed-prepares-to-raise-rates/"><i class="penci-faicon fa fa-envelope"></i><span class="dt-share">Email</span></a><a class="post-share-item post-share-expand" href="#" aria-label="Share Expand"><i class="penci-faicon penciicon-add"></i></a> </div>

                    <Related />

                </article>
            </div>
        </div>

        <Sidebar />
    </div>

    <WidgetArea />
  </template>

  <script lang="ts">
  import Sidebar from "./Sidebar.vue"
  import Footer from "./Footer.vue"
  import WidgetArea from "./WidgetArea.vue"
  import CategorySection from "./CategorySection.vue"
  import Share from "./Share.vue"
  import Pagination from "./Pagination.vue"
  import Related from "./Related.vue"
  import { useHead } from '@vueuse/head'
  import {computed, reactive } from 'vue'

  export default {
    name: 'Category',
    components: {
      Sidebar,
      Footer,
      WidgetArea,
      CategorySection,
      Share,
      Pagination,
      Related
    },
    setup() {

    },
    data() {
      return {
        slug: this.$route.params.slug,
        guid: this.$route.params.guid,
        item: {} as any
      }
    },
    methods: {
      fecthContent: function() {
        const url = (this.guid) ? `${import.meta.env.VITE_API_BASE_URL}/api/GetFeedItemByGuid?guid=${this.guid}&domain=${import.meta.env.VITE_DOMAIN}` : `${import.meta.env.VITE_API_BASE_URL}/api/GetFeedItemsBySlug?slug=${this.slug}&domain=${import.meta.env.VITE_DOMAIN}`
        fetch(url)
            .then(response => response.json())
            .then(json => {
              this.item = json.pop()
            })
      },
      formatTagHref: function(item: any) {
        return `/tag/${encodeURI(item.replaceAll('"', ''))}`
      },
      formatHref: function(item: any) {
        return `/article/${item?.slug?.replaceAll('"', '')}`
      },
      formatImage: function(item: any) {
      if (item?.image?.replaceAll('"', '') == "") {
        return '/assets/images/place-holder.png'
      }
      return item?.image?.replaceAll('"', '')
      },
      formatBgImage: function(item: any) {
        if (item?.image?.replaceAll('"', '') == "") {
          return `background-image: url('/assets/images/place-holder.png');`
        }
        return `background-image: url('${item?.image?.replaceAll('"', '')}');`
      },
      formatDescription: function(item: any) {
        //.documents[0].summaries[0].text
        if (item?.abstract_summary && item?.abstract_summary.documents?.length > 0) {
          return item?.abstract_summary.documents[0].summaries[0].text.replaceAll('"', '')
        }
        return item?.metadata_description?.replaceAll('"', '')
      },
      formatAuthorHref: function(item: any) {
        return `/author/${encodeURI(item?.author?.replaceAll('"', ''))}`
      },
      formatAuthor: function(item: any) {
        return item?.author?.replaceAll('"', '')
      },
      formatCategoryHref: function(item: any) {
        if (item?.categories_generated) {
          return `/category/${encodeURI(item?.categories_generated[0]?.type.replaceAll('"', ''))}`
        }
        return ''
      },
      formatCategory: function(item: any) {
        if (item?.categories_generated) {
          return item?.categories_generated[0]?.type.replaceAll('"', '')
        }
        return ''
      },
      formatTitle: function(item: any) {
        return item?.metadata_title?.replaceAll('"', '')
      },
      formatPublishDate: function(item: any) {
        const date = item?.publishDate?.replaceAll('"', '')
        return new Date(date).toLocaleDateString()
      },
      formatTimeSince: function (item: any) {
        let date = new Date(item?.publishDate?.replaceAll('"', ''))
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
          s = (Math.floor(interval) == 1) ? "" : "s ago";
          return Math.floor(interval) + " hour" + s;
        }

        interval = seconds / 60;
        if (interval > 1) {
          s = (Math.floor(interval) == 1) ? "" : "s ago";
          return Math.floor(interval) + " min" + s;
        }

        if (isNaN(seconds)) {
          return ""
        }

        return Math.floor(seconds) + " second" + s + " ago";
      }
    },
    beforeMount() {
      this.fecthContent()
    },
  };
  </script>
