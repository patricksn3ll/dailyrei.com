<template>
  <section class="penci-section penci-disSticky penci-structure-10 elementor-section elementor-top-section elementor-element elementor-element-b00e89e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b00e89e" data-element_type="section">
    <div class="elementor-container elementor-column-gap-no">
      <div class="penci-ercol-100 penci-ercol-order-1 penci-sticky-ct elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c05a500" data-id="c05a500" data-element_type="column">
          <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-36bf43f elementor-widget elementor-widget-penci-big-grid" data-id="36bf43f" data-element_type="widget" data-widget_type="penci-big-grid.default">
                <div class="elementor-widget-container">
                  <div class="penci-clearfix penci-biggrid-wrapper penci-grid-col-2 penci-grid-mcol-1 penci-bgrid-based-post penci-bgrid-style-1 pcbg-ficonpo-top-right pcbg-reiconpo-top-left penci-bgrid-content-below pencibg-imageh-none pencibg-texth-none pencibg-textani-movetop textop">
                      <div class="penci-clearfix penci-biggrid penci-bgstyle-1 penci-bgel">
                        <div class="penci-biggrid-inner default">
                            <div class="penci-clearfix penci-biggrid-data penci-dflex">

                              <div class="penci-bgitem" v-for="(item) in results.slice(0, 2)" :key="item">
                                  <div class="penci-bgitin">
                                    <div class="penci-bgmain">
                                        <div class="pcbg-thumb">
                                          <div class="pcbg-thumbin">

                                              <a class="pcbg-bgoverlay" :href="formatHref(item)" :title="formatTitle(item)"></a>
                                              <div class="penci-image-holder penci-lazy lazyloaded pcloaded" :data-bgset="formatImage(item)" :data_bg_hidpi="formatImage(item)" data-sizes="(max-width: 767px) 585px, 1170px" data-ll-status="loaded" :style="formatBgImage(item)"> </div>

                                          </div>
                                        </div>
                                        <div class="pcbg-content">
                                          <div class="pcbg-content-flex">
                                              <a class="pcbg-bgoverlay" :href="formatHref(item)" :title="formatTitle(item)"></a>
                                              <div class="pcbg-content-inner bgcontent-block">
                                                <a :href="formatCategoryHref(item)" :title="formatTitle(item)" class="pcbg-bgoverlaytext item-hover"></a>
                                                <div class="pcbg-above item-hover"> <span class="cat pcbg-sub-title"> <a class="penci-cat-name penci-cat-8" :href="formatCategoryHref(item)" rel="category tag"><span>{{ item.categroy }}</span></a> </span> </div>
                                                <div class="pcbg-heading item-hover">
                                                    <h3 class="pcbg-title"> <a :href="formatHref(item)">{{ formatTitle(item) }}</a> </h3>
                                                </div>
                                                <div class="grid-post-box-meta pcbg-meta item-hover">
                                                    <div class="pcbg-meta-desc"> <span class="bg-date-author author-italic author vcard"> by <a class="author-url url fn n" :href="formatAuthorHref(item)">{{ formatAuthor(item) }}</a> </span> <span class="bg-date"><time class="entry-date published" :datetime="formatPublishDate(item)">{{ formatTimeSince(item) }}</time></span> </div>
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

            <div class="elementor-element elementor-element-4224144 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="4224144" data-element_type="widget" data-widget_type="divider.default">
                <div class="elementor-widget-container">
                  <div class="elementor-divider"> <span class="elementor-divider-separator"> </span> </div>
                </div>
            </div>

            <div class="elementor-element elementor-element-4ada476 elementor-widget elementor-widget-penci-small-list" data-id="4ada476" data-element_type="widget" data-widget_type="penci-small-list.default">
                <div class="elementor-widget-container">
                  <div class="penci-wrapper-smalllist">
                      <div class="penci-smalllist-wrapper">
                        <div class="penci-smalllist pcsl-wrapper pwsl-id-default">
                            <div class="pcsl-inner penci-clearfix pcsl-grid pcsl-imgpos-left pcsl-col-4 pcsl-tabcol-2 pcsl-mobcol-1">
                              <div class="pcsl-item" v-for="item in results.slice(3, 8)" :key="item">
                                  <div class="pcsl-itemin">
                                    <div class="pcsl-iteminer">
                                        <div class="pcsl-thumb"> <a :href="formatHref(item)" :title="formatTitle(item)" class="penci-image-holder penci-lazy lazyloaded pcloaded" :data-bgset="formatImage(item)" data-ll-status="loaded" :style="formatBgImage(item)"> </a> </div>
                                        <div class="pcsl-content">
                                          <div class="pcsl-title"> <a :href="formatHref(item)">{{ formatTitle(item) }}</a> </div>
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
import {formatHref, formatTitle, formatCategoryHref, formatAuthor, formatAuthorHref, formatPublishDate, formatTimeSince, formatImage, formatBgImage} from '../assets/js/utilities.js'

export default {
  name: 'Hero',
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
      let url = `${import.meta.env.VITE_API_BASE_URL}/api/GetFeedItems?domain=${import.meta.env.VITE_DOMAIN}&offset=0&limit=7&score=.8`
      fetch(url)
          .then(response => response.json())
          .then(json => {
            this.results = json
          })
    },
    formatHref: function(item:any) {
      return formatHref(item)
    },
    formatTitle: function(item:any) {
      return formatTitle(item)
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

<style>
/*! elementor - v3.10.0 - 09-01-2023 */
.elementor-widget-divider {
    --divider-border-style: none;
    --divider-border-width: 1px;
    --divider-color: #2c2c2c;
    --divider-icon-size: 20px;
    --divider-element-spacing: 10px;
    --divider-pattern-height: 24px;
    --divider-pattern-size: 20px;
    --divider-pattern-url: none;
    --divider-pattern-repeat: repeat-x
}

.elementor-widget-divider .elementor-divider {
    display: flex
}

.elementor-widget-divider .elementor-divider__text {
    font-size: 15px;
    line-height: 1;
    max-width: 95%
}

.elementor-widget-divider .elementor-divider__element {
    margin: 0 var(--divider-element-spacing);
    flex-shrink: 0
}

.elementor-widget-divider .elementor-icon {
    font-size: var(--divider-icon-size)
}

.elementor-widget-divider .elementor-divider-separator {
    display: flex;
    margin: 0;
    direction: ltr
}

.elementor-widget-divider--view-line_icon .elementor-divider-separator,.elementor-widget-divider--view-line_text .elementor-divider-separator {
    align-items: center
}

.elementor-widget-divider--view-line_icon .elementor-divider-separator:after,.elementor-widget-divider--view-line_icon .elementor-divider-separator:before,.elementor-widget-divider--view-line_text .elementor-divider-separator:after,.elementor-widget-divider--view-line_text .elementor-divider-separator:before {
    display: block;
    content: "";
    border-bottom: 0;
    flex-grow: 1;
    border-top: var(--divider-border-width) var(--divider-border-style) var(--divider-color)
}

.elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type {
    flex-grow: 0;
    flex-shrink: 100
}

.elementor-widget-divider--element-align-left .elementor-divider-separator:before {
    content: none
}

.elementor-widget-divider--element-align-left .elementor-divider__element {
    margin-left: 0
}

.elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type {
    flex-grow: 0;
    flex-shrink: 100
}

.elementor-widget-divider--element-align-right .elementor-divider-separator:after {
    content: none
}

.elementor-widget-divider--element-align-right .elementor-divider__element {
    margin-right: 0
}

.elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator {
    border-top: var(--divider-border-width) var(--divider-border-style) var(--divider-color)
}

.elementor-widget-divider--separator-type-pattern {
    --divider-border-style: none
}

.elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,.elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator {
    width: 100%;
    min-height: var(--divider-pattern-height);
    -webkit-mask-size: var(--divider-pattern-size) 100%;
    mask-size: var(--divider-pattern-size) 100%;
    -webkit-mask-repeat: var(--divider-pattern-repeat);
    mask-repeat: var(--divider-pattern-repeat);
    background-color: var(--divider-color);
    -webkit-mask-image: var(--divider-pattern-url);
    mask-image: var(--divider-pattern-url)
}

.elementor-widget-divider--no-spacing {
    --divider-pattern-size: auto
}

.elementor-widget-divider--bg-round {
    --divider-pattern-repeat: round
}

.rtl .elementor-widget-divider .elementor-divider__text {
    direction: rtl
}

.e-con-inner>.elementor-widget-divider,.e-con>.elementor-widget-divider {
    width: var(--container-widget-width);
    --flex-grow: var(--container-widget-flex-grow)
}
</style>
