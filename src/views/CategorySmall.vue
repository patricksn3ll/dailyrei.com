
<template>

  <section class="penci-section penci-disSticky penci-structure-10 elementor-section elementor-top-section elementor-element elementor-element-6dc53e6 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="6dc53e6" data-element_type="section">
    <div class="elementor-container elementor-column-gap-no">
      <div class="penci-ercol-100 penci-ercol-order-1 penci-sticky-ct elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e951dad" data-id="e951dad" data-element_type="column">
          <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-360a0da elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="360a0da" data-element_type="widget" data-widget_type="divider.default">
                <div class="elementor-widget-container">
                  <div class="elementor-divider"> <span class="elementor-divider-separator"> </span> </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  </section>
  <section class="penci-section penci-disSticky penci-structure-10 elementor-section elementor-top-section elementor-element elementor-element-4c17448 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4c17448" data-element_type="section">
    <div class="elementor-container elementor-column-gap-no">
      <div class="penci-ercol-100 penci-ercol-order-1 penci-sticky-ct elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8a2b5e3" data-id="8a2b5e3" data-element_type="column">
          <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-37a7b7a elementor-widget elementor-widget-penci-fancy_heading" data-id="37a7b7a" data-element_type="widget" data-widget_type="penci-fancy_heading.default">
                <div class="elementor-widget-container">
                  <div class="penci-fancy-heading penci-heading-text-center">
                      <div class="penci-fancy-heading-inner">
                        <h2 class="penci-heading-title"><span class="inner-tit">{{ selectedCategory }}</span></h2>
                      </div>
                  </div>
                </div>
            </div>
            <div class="elementor-element elementor-element-e8cd8e7 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="e8cd8e7" data-element_type="widget" data-widget_type="divider.default">
                <div class="elementor-widget-container">
                  <div class="elementor-divider"> <span class="elementor-divider-separator"> </span> </div>
                </div>
            </div>
            <section class="penci-section penci-disSticky penci-structure-20 elementor-section elementor-inner-section elementor-element elementor-element-103ed70 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="103ed70" data-element_type="section">
                <div class="elementor-container elementor-column-gap-no">
                  <div class="penci-ercol-50 penci-ercol-order-1 penci-sticky-ct elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-545f7b2" data-id="545f7b2" data-element_type="column">
                      <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-ee1529e elementor-widget elementor-widget-penci-big-grid" data-id="ee1529e" data-element_type="widget" data-widget_type="penci-big-grid.default">
                            <div class="elementor-widget-container">
                              <div class="penci-clearfix penci-biggrid-wrapper penci-grid-col-2 penci-grid-mcol-1 penci-bgrid-based-post penci-bgrid-style-1 pcbg-ficonpo-top-right pcbg-reiconpo-top-left penci-bgrid-content-below pencibg-imageh-none pencibg-texth-none pencibg-textani-movetop textop">
                                  <div class="penci-clearfix penci-biggrid penci-bgstyle-1 penci-bgel">
                                    <div class="penci-biggrid-inner default">
                                        <div class="penci-clearfix penci-biggrid-data penci-dflex">
                                          <div class="penci-bgitem" v-for="item in results.slice(0, 2)" :key="item">
                                              <div class="penci-bgitin">
                                                <div class="penci-bgmain">
                                                    <div class="pcbg-thumb">
                                                      <div class="pcbg-thumbin">
                                                          <a class="pcbg-bgoverlay" :href="formatHref(item)" :title="formatTitle(item)"></a>
                                                          <div class="penci-image-holder penci-lazy lazyloaded pcloaded" :data-bgset="formatImage(item)" :data_bg_hidpi="formatImage(item)" data-sizes="(max-width: 767px) 585px, 585px" data-ll-status="loaded" :style="formatBgImage(item)"> </div>
                                                      </div>
                                                    </div>
                                                    <div class="pcbg-content">
                                                      <div class="pcbg-content-flex">
                                                          <a class="pcbg-bgoverlay" :href="formatHref(item)" :title="formatTitle(item)"></a>
                                                          <div class="pcbg-content-inner bgcontent-block">
                                                            <a href="" title="" class="pcbg-bgoverlaytext item-hover"></a>
                                                            <div class="pcbg-heading item-hover">
                                                                <h3 class="pcbg-title"> <a :href="formatHref(item)"> {{ formatTitle(item) }} </a> </h3>
                                                            </div>
                                                            <div class="grid-post-box-meta pcbg-meta item-hover">
                                                                <div class="pcbg-meta-desc"> <span class="bg-date"><time class="entry-date published" :datetime="formatPublishDate(item)">{{  formatTimeSince(item) }}</time></span> </div>
                                                                <div class="pcbg-pexcerpt">
                                                                  <p>{{  formatDescription(item) }}</p>
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
                  <div class="penci-ercol-50 penci-ercol-order-2 penci-sticky-ct elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e63030a" data-id="e63030a" data-element_type="column">
                      <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-f43e6bb elementor-widget elementor-widget-penci-small-list" data-id="f43e6bb" data-element_type="widget" data-widget_type="penci-small-list.default">
                            <div class="elementor-widget-container">
                              <div class="penci-wrapper-smalllist">
                                  <div class="penci-smalllist-wrapper">
                                    <div class="penci-smalllist pcsl-wrapper pwsl-id-default">
                                        <div class="pcsl-inner penci-clearfix pcsl-grid pcsl-imgpos-left pcsl-col-1 pcsl-tabcol-2 pcsl-mobcol-1">
                                          <div class="pcsl-item" v-for="item in results.slice(2, 6)" :key="item">
                                              <div class="pcsl-itemin">
                                                <div class="pcsl-iteminer">
                                                    <div class="pcsl-thumb"> <a :href="formatHref(item)" :title="formatTitle(item)" class="penci-image-holder penci-lazy lazyloaded pcloaded" :data-bgset="formatImage(item)" data-ll-status="loaded" :style="formatBgImage(item)"> </a> </div>
                                                    <div class="pcsl-content">
                                                      <div class="pcsl-title"> <a :href="formatHref(item)">{{  formatTitle(item) }}</a> </div>
                                                      <div class="grid-post-box-meta pcsl-meta"> <span class="sl-date"><time class="entry-date published" :datetime="formatPublishDate(item)">{{  formatTimeSince(item) }}</time></span> </div>
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
          </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import {formatHref, formatTitle, formatCategoryHref, formatDescription, formatAuthor, formatAuthorHref, formatPublishDate, formatTimeSince, formatImage, formatBgImage} from '../assets/js/utilities.js'

  export default {
    name: 'CategorySmall',
    components: {

    },
    setup() {

    },
    props: {
      selectedCategory : {
        type: String,
        default: 'Finance'
      },
    },
    data() {
      return {
        results: [] as any,
        pageCounter: 0,
        pageSize: 6,
      }
    },
    methods: {
      fecthContent: function() {
        let url = `${import.meta.env.VITE_API_BASE_URL}/api/GetFeedItemsByCategory?category=${this.selectedCategory.toLocaleLowerCase()}&domain=${import.meta.env.VITE_DOMAIN}&offset=${this.pageSize * this.pageCounter}&limit=${this.pageSize}&score=.1`
        fetch(url)
          .then(response => response.json())
          .then(json => {
            this.results = this.results.concat(json)
            this.pageCounter++
          })
      },
      formatHref: function(item:any) {
        return formatHref(item)
      },
      formatTitle: function(item:any) {
        return formatTitle(item)
      },
      formatDescription: function(item:any) {
        return formatDescription(item)
      },
      formatImage: function(item:any) {
        return formatImage(item)
      },
      formatAuthor: function(item:any) {
        return formatAuthor(item)
      },
      formatBgImage: function(item:any) {
        return formatBgImage(item)
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
