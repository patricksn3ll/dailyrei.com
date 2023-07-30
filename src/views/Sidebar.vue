<template>

<div id="sidebar" class="penci-sidebar-right penci-sidebar-content style-3 pcalign-left pcsb-boxed-whole pciconp-right pcicon-right penci-sticky-sidebar" style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">
    <div class="theiaStickySidebar" style="padding-top: 0px; padding-bottom: 1px; position: static;">
        <aside id="penci_social_widget-2" class="widget penci_social_widget">
            <h3 class="widget-title penci-border-arrow"><span class="inner-arrow">Follow Us</span></h3>
            <div class="widget-social pc_alignleft show-text penci-social-colored">
              <a href="https://www.facebook.com/profile.php?id=100095033030506" aria-label="Facebook" rel="noreferrer" target="_blank"><i class="penci-faicon fa fa-facebook" style="font-size: 14px"></i> <span style="font-size: 13px">Facebook</span></a>
              <a href="https://www.twitter.com/dailyrei_com" aria-label="Twitter" rel="noreferrer" target="_blank"><i class="penci-faicon fa fa-twitter" style="font-size: 14px"></i> <span style="font-size: 13px">Twitter</span></a>
              <a href="https://www.instagram.com/dailyreidotcom" aria-label="Instagram" rel="noreferrer" target="_blank"><i class="penci-faicon fa fa-instagram" style="font-size: 14px"></i> <span style="font-size: 13px">Instagram</span></a>
              <a href="https://www.pinterest.com/dailyreicom" aria-label="Pinterest" rel="noreferrer" target="_blank"><i class="penci-faicon fa fa-pinterest" style="font-size: 14px"></i> <span style="font-size: 13px">Pinterest</span></a>
              <a href="https://www.linkedin.com/in/dailyrei" aria-label="Linkedin" rel="noreferrer" target="_blank"><i class="penci-faicon fa fa-linkedin" style="font-size: 14px"></i> <span style="font-size: 13px">Linkedin</span></a>
              <a href="#" aria-label="Youtube" rel="noreferrer" target="_blank"><i class="penci-faicon fa fa-youtube-play" style="font-size: 14px"></i> <span style="font-size: 13px">Youtube</span></a>
            </div>
        </aside>
        <aside id="penci_latest_news_widget-2" class="widget penci_latest_news_widget">
            <h3 class="widget-title penci-border-arrow"><span class="inner-arrow">Recent Posts</span></h3>
            <ul id="penci-latestwg-1042" class="side-newsfeed">
                <li class="penci-feed" v-for="item in results" :key="item">
                    <div class="side-item">
                        <div class="side-image"> <a class="penci-image-holder penci-lazy small-fix-size lazyloaded pcloaded" rel="bookmark" :data-bgset="formatImage(item)" :href="formatHref(item)" :title="formatTitle(item)" data-ll-status="loaded" :style="formatBgImage(item)"></a> </div>
                        <div class="side-item-text">
                            <h4 class="side-title-post"> <a :href="formatHref(item)" rel="bookmark" :title="formatTitle(item)"> {{ formatTitle(item) }} </a> </h4>
                            <div class="grid-post-box-meta penci-side-item-meta pcsnmt-below"> <span class="side-item-meta side-wdate"><time class="entry-date published" :datetime="formatPublishDate(item)">{{  formatTimeSince(item) }}</time></span> </div>
                        </div>
                    </div>
                </li>
            </ul>

        </aside>
        <aside id="mc4wp_form_widget-2" class="widget widget_mc4wp_form_widget">
            <h3 class="widget-title penci-border-arrow"><span class="inner-arrow">Newsletter</span></h3>
            <!-- <script>
                (function() {
                    window.mc4wp = window.mc4wp || {
                        listeners: [],
                        forms: {
                            on: function(evt, cb) {
                                window.mc4wp.listeners.push({
                                    event: evt,
                                    callback: cb
                                });
                            }
                        }
                    }
                })();
            </script> -->
            <form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-790" method="post" data-id="790" data-name="Form">
                <div class="mc4wp-form-fields">
                    <p class="mdes">Subscribe our newsletter for latest news around the world. Let's stay updated!</p>
                    <p class="mname"><input type="text" name="NAME" placeholder="Name..."></p>
                    <p class="memail"><input type="email" id="mc4wp_email" name="EMAIL" placeholder="Email..."></p>
                    <p class="msubmit"><input type="submit" value="Subscribe"></p>
                </div><label style="display: none !important;">Leave this field empty if you're human: <input type="text" name="_mc4wp_honeypot" tabindex="-1" autocomplete="off"></label><input type="hidden" name="_mc4wp_timestamp" value="1690725841"><input type="hidden" name="_mc4wp_form_id" value="790"><input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1">
                <div class="mc4wp-response"></div>
            </form>
        </aside>
        <aside id="categories-2" class="widget widget_categories">
            <h3 class="widget-title penci-border-arrow"><span class="inner-arrow">Categories</span></h3>
            <ul>
                <li class="cat-item cat-item-10"><a href="/category/education/">Education <!-- span class="category-item-count">(8)</span --></a></li>
                <li class="cat-item cat-item-10"><a href="/category/finance/">Finance <!-- span class="category-item-count">(8)</span --></a></li>
                <li class="cat-item cat-item-10"><a href="/category/investing/">Investing <!-- span class="category-item-count">(8)</span --></a></li>
                <li class="cat-item cat-item-10"><a href="/category/legal/">Legal <!-- span class="category-item-count">(8)</span --></a></li>
                <li class="cat-item cat-item-10"><a href="/category/news/">News <!-- span class="category-item-count">(8)</span --></a></li>
                <li class="cat-item cat-item-10"><a href="/category/market/">Market <!-- span class="category-item-count">(8)</span --></a></li>
                <li class="cat-item cat-item-10"><a href="/category/trends/">Trends <!-- span class="category-item-count">(8)</span --></a></li>
            </ul>
        </aside>
    </div>
</div>

</template>


<script lang="ts">
import {formatHref, formatTitle, formatCategory , formatCategoryHref, formatAuthor, formatAuthorHref, formatPublishDate, formatTimeSince, formatImage, formatBgImage, formatDescription} from '../assets/js/utilities.js'

export default {
  name: 'Sidebar',
  data() {
    return {
      results: [] as any[]
    };
  },
  setup() {
    return {
    };
  },
  methods: {
    fecthContent: function() {
      let url = `${import.meta.env.VITE_API_BASE_URL}/api/GetFeedItemsFlagged?category=galleries&domain=${import.meta.env.VITE_DOMAIN}&offset=0&limit=5`
      fetch(url)
          .then(response => response.json())
          .then(json => {
            this.results = json
          })
    },
    formatHref: function(item:any) {
      return formatHref(item)
    },
    formatTitle: function(item:any, length?:number) {
      length = length || 88
      return formatTitle(item, length)
    },
    formatDescription: function(item:any, length?:number) {
      length = length || 300
      return formatDescription(item, length)
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
    formatCategory: function(item:any) {
      return formatCategory(item)
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

<style type="text/css">
.widget ul#penci-latestwg-1042 li:not(.featured-news) .side-item .side-item-text h4 a {
    font-size: 15px;
}

.widget ul#penci-latestwg-1042 li .side-item .side-item-text .side-item-meta {
    font-size: 12px;
}
</style>
