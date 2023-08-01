<template>

  <section class="penci-section penci-disSticky penci-structure-10 elementor-section elementor-top-section elementor-element elementor-element-4b23145 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4b23145" data-element_type="section">
    <div class="elementor-container elementor-column-gap-no">
      <div class="penci-ercol-100 penci-ercol-order-1 penci-sticky-ct elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e3d42a4" data-id="e3d42a4" data-element_type="column">
          <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-196cb73 elementor-widget elementor-widget-penci-fancy_heading" data-id="196cb73" data-element_type="widget" data-widget_type="penci-fancy_heading.default">
                <div class="elementor-widget-container">
                  <div class="penci-fancy-heading penci-heading-text-center">
                      <div class="penci-fancy-heading-inner">
                        <h2 class="penci-heading-title"><span class="inner-tit">Latest Videos</span></h2>
                      </div>
                  </div>
                </div>
            </div>
            <div class="elementor-element elementor-element-6c0d689 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="6c0d689" data-element_type="widget" data-widget_type="divider.default">
                <div class="elementor-widget-container">
                  <div class="elementor-divider"> <span class="elementor-divider-separator"> </span> </div>
                </div>
            </div>
            <div class="elementor-element elementor-element-c683f6f elementor-widget elementor-widget-penci-big-grid" data-id="c683f6f" data-element_type="widget" data-widget_type="penci-big-grid.default">
                <div class="elementor-widget-container">
                  <div class="penci-clearfix penci-biggrid-wrapper penci-grid-col-4 penci-grid-tcol-2 penci-grid-mcol-1 penci-bgrid-based-post penci-bgrid-style-1 pcbg-ficonpo-top-right pcbg-reiconpo-top-left penci-bgrid-content-on pencibg-imageh-none pencibg-texth-none pencibg-textani-movetop textop">
                      <div class="penci-clearfix penci-biggrid penci-bgstyle-1 penci-bgel">
                        <div class="penci-biggrid-inner default">
                            <div class="penci-clearfix penci-biggrid-data penci-dflex">
                              <div class="penci-bgitem" v-for="item in results.slice(0, 4)" :key="item">
                                  <div class="penci-bgitin">
                                    <div class="penci-bgmain">
                                        <div class="pcbg-thumb">
                                          <a href="" class="icon-post-format" aria-label="Icon"><i class="penci-faicon fa fa-play"></i></a>
                                          <div class="pcbg-thumbin">
                                              <a class="pcbg-bgoverlay" :href="formatHref(item)" :title="formatTitle(item)"></a>
                                              <div class="penci-image-holder penci-lazy lazyloaded pcloaded" :data-bgset="formatImage(item)" :data_bg_hidpi="formatImage(item)" data-sizes="(max-width: 767px) 585px, 585px" data-ll-status="loaded" :style="formatBgImage(item)"> </div>
                                          </div>
                                        </div>
                                        <div class="pcbg-content">
                                          <div class="pcbg-content-flex">
                                              <a class="pcbg-bgoverlay active-overlay" :href="formatHref(item)" :title="formatTitle(item)"></a>
                                              <div class="pcbg-content-inner bgcontent-block">
                                                <a :href="formatHref(item)" :title="formatTitle(item)" class="pcbg-bgoverlaytext item-hover"></a>
                                                <div class="pcbg-above item-hover"> <span class="cat pcbg-sub-title"> <a class="penci-cat-name penci-cat-9" :href="formatCategoryHref(item)" rel="category tag"><span>{{ formatCategory(item) }}</span></a> </span> </div>
                                                <div class="pcbg-heading item-hover">
                                                    <h3 class="pcbg-title"> <a :href="formatHref(item)" > {{ formatTitle(item) }}</a> </h3>
                                                </div>
                                              </div>
                                          </div>
                                        </div>
                                    </div>
                                  </div>
                              </div>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {formatHref, formatTitle, formatCategoryHref, formatAuthor, formatAuthorHref, formatPublishDate, formatTimeSince, formatImage, formatBgImage, formatCategory} from '../assets/js/utilities.js'

export default {
  name: 'Video',
  components: {

  },

  data() {
    return {
      results: [] as any,
    };
  },
  setup() {
    return {
    };
  },
  methods: {
    fecthContent: function() {
      //let url = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCVTQunGrE3p7Oq8Owao5y_Q'
      let url = `${import.meta.env.VITE_WWW_BASE_URL}/api/videos`
      fetch(url)
          .then(response => response.json())
          .then(json => {
            this.results = json
            console.log(this.results)
          })
    },
    formatHref: function(item:any) {
      return item["media:content"]["url"]
    },
    formatTitle: function(item:any, length?:number) {
      length = length || 88
      return item["media:title"].substring(0, length)
    },
    formatImage: function(item:any) {
      return item["media:thumbnail"]["url"]
    },
    formatAuthor: function(item:any) {
      return formatAuthor(item)
    },
    formatBgImage: function(item:any) {
      return  `background-image: url('${ item["media:thumbnail"]["url"]}');`
    },
    formatCategory: function(item:any) {
      return formatCategory(item)
    },
    formatCategoryHref: function(item:any) {
      return formatCategoryHref(item)
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
