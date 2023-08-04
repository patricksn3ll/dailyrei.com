<template>
   <section class="penci-section penci-dmcheck penci-elbg-activate penci-disSticky penci-structure-10 elementor-section elementor-top-section elementor-element elementor-element-cfd7cf5 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="cfd7cf5" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      <div class="elementor-container elementor-column-gap-no">
         <div class="penci-ercol-100 penci-ercol-order-1 penci-sticky-ct elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7c863e8" data-id="7c863e8" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
               <div class="elementor-element elementor-element-3ec2eb1 elementor-widget elementor-widget-penci-fancy_heading" data-id="3ec2eb1" data-element_type="widget" data-widget_type="penci-fancy_heading.default">
                  <div class="elementor-widget-container">
                     <div class="penci-fancy-heading penci-heading-text-center">
                        <div class="penci-fancy-heading-inner">
                           <h2 class="penci-heading-title"><span class="inner-tit">{{ selectedCategory }}</span></h2>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="elementor-element elementor-element-7a23a27 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="7a23a27" data-element_type="widget" data-widget_type="divider.default">
                  <div class="elementor-widget-container">
                     <div class="elementor-divider"> <span class="elementor-divider-separator"> </span> </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section class="penci-section penci-dmcheck penci-elbg-activate penci-disSticky penci-structure-20 elementor-section elementor-top-section elementor-element elementor-element-c0c9e46 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c0c9e46" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      <div class="elementor-container elementor-column-gap-no">
         <div class="penci-ercol-50 penci-ercol-order-1 penci-sticky-ct elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-83c4004" data-id="83c4004" data-element_type="column">
            <div class="elementor-widget-container">
               <div class="penci-wrapper-smalllist">
                     <div class="penci-smalllist-wrapper">
                     <div class="penci-smalllist pcsl-wrapper pwsl-id-default">
                           <div class="pcsl-inner penci-clearfix pcsl-grid pcsl-imgpos-left pcsl-col-1 pcsl-tabcol-2 pcsl-mobcol-1">
                           <div class="pcsl-item pcsl-nothumb" v-for="item in results.slice(5, 9)" :key="item">
                                 <div class="pcsl-itemin">
                                 <div class="pcsl-iteminer">
                                       <div class="pcsl-content">
                                       <div class="cat pcsl-cat"> <a class="penci-cat-name penci-cat-8" :href="formatCategoryHref(item)" rel="category tag"><span>{{ selectedCategory }}</span></a> </div>
                                       <div class="pcbg-title"> <a style="color:#ffffff" :href="formatHref(item)">{{  formatTitle(item) }}</a> </div>
                                       <div class="grid-post-box-meta pcsl-meta"> <span class="sl-date"><time class="entry-date published" :datetime="formatPublishDate(item)">{{ formatTimeSince(item) }}</time></span> </div>
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
         <div class="penci-ercol-50 penci-ercol-order-2 penci-sticky-ct elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-866851c" data-id="866851c" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
               <div class="elementor-element elementor-element-20cbc04 elementor-widget elementor-widget-penci-big-grid" data-id="20cbc04" data-element_type="widget" data-widget_type="penci-big-grid.default">
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
                                                   <a :href="formatHref(item)" :title="formatTitle(item)" class="pcbg-bgoverlaytext item-hover"></a>
                                                   <div class="pcbg-heading item-hover">
                                                      <h3 class="pcbg-title"> <a :href="formatHref(item)"> {{ formatTitle(item) }}</a> </h3>
                                                   </div>
                                                   <div class="grid-post-box-meta pcbg-meta item-hover">
                                                      <div class="pcbg-meta-desc"> <span class="bg-date"><time class="entry-date published" :datetime="formatPublishDate(item)">{{  formatTimeSince(item) }}</time></span> </div>
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
               <div class="elementor-element elementor-element-50b6d31 elementor-widget elementor-widget-penci-big-grid" data-id="50b6d31" data-element_type="widget" data-widget_type="penci-big-grid.default">
                  <div class="elementor-widget-container">
                     <div class="penci-clearfix penci-biggrid-wrapper penci-grid-col-3 penci-grid-mcol-1 penci-bgrid-based-post penci-bgrid-style-1 pcbg-ficonpo-top-right pcbg-reiconpo-top-left penci-bgrid-content-below pencibg-imageh-none pencibg-texth-none pencibg-textani-movetop textop">
                        <div class="penci-clearfix penci-biggrid penci-bgstyle-1 penci-bgel">
                           <div class="penci-biggrid-inner default">
                              <div class="penci-clearfix penci-biggrid-data penci-dflex">
                                 <div class="penci-bgitem" v-for="item in results.slice(2, 5)" :key="item">
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
  import {
   formatHref,
   formatTitle,
   formatCategoryHref,
   formatAuthor,
   formatAuthorHref,
   formatPublishDate,
   formatTimeSince,
   formatImage,
   formatBgImage,
   titleLength
} from '../assets/js/utilities.js'

  export default {
    name: 'CategoryDark',
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
        pageSize: 10,
      }
    },
    methods: {
      fecthContent: function() {
        let url = `${import.meta.env.VITE_API_BASE_URL}/api/GetFeedItemsBy?filter=category&category=${this.selectedCategory.toLocaleLowerCase()}&domain=${import.meta.env.VITE_DOMAIN}&offset=${this.pageSize * this.pageCounter}&limit=${this.pageSize}&score=.1`
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
      formatTitle: function(item:any, length?:number) {
      length = length || 82
        return `${formatTitle(item, length)}`
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

<style scoped>
.pcsl-itemin {
   border-bottom: solid 1px #515151;
   padding-bottom: 20px;
   }
</style>
