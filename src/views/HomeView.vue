<template>
  <div class="container-single-page container-default-page">
    <div class="penci-main-single-page-default">
      <div data-elementor-type="wp-page" data-elementor-id="9" class="elementor elementor-9">
        <Hero />

        <section class="penci-section penci-disSticky penci-structure-10 elementor-section elementor-top-section elementor-element elementor-element-158523a elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="158523a" data-element_type="section">
          <div class="elementor-container elementor-column-gap-no">
            <div class="penci-ercol-100 penci-ercol-order-1 penci-sticky-ct elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-400e4ce" data-id="400e4ce" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-acf1d99 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="acf1d99" data-element_type="widget" data-widget_type="divider.default">
                  <div class="elementor-widget-container">
                    <div class="elementor-divider">
                      <span class="elementor-divider-separator"> </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Video />

        <CategoryRight selectedCategory="News" />

        <CategoryLeft selectedCategory="Investing" />

        <CategorySmall selectedCategory="Education" />

        <CategoryDark selectedCategory="Market" />

        <CategoryRight selectedCategory="Finance" />

        <CategoryLeft  selectedCategory="Trends" />

        <CategorySmall selectedCategory="Legal" />

        <div class="clear-footer"></div>

        <WidgetArea />

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Hero from "./Hero.vue"
import CategoryRight from "./CategoryRight.vue"
import CategoryLeft from "./CategoryLeft.vue"
import CategorySmall from "./CategorySmall.vue"
import CategoryDark from "./CategoryDark.vue"
import WidgetArea from "./WidgetArea.vue"

import Video from "./Video.vue"

export default {
  name: 'HomeView',
  components: {
    CategoryRight,
    CategoryLeft,
    CategorySmall,
    CategoryDark,
    Hero,
    WidgetArea,
    Video
  },
  setup() {

  },
  data() {
    return {
      showHome: true,
    };
  },
  methods: {
    fecthContent: function() {
      this.showHome = this.$route.name == 'home'
    },
  },
  beforeMount() {
    this.fecthContent()
  },
};
</script>
