<template>
<div class="container penci_sidebar right-sidebar" style="transform: none;">
  <div id="main" class="penci-main-sticky-sidebar" style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">
    <div class="theiaStickySidebar" style="padding-top: 0px; padding-bottom: 1px; position: static; top: 80px; left: 77.4025px;">

      <article id="post-74" class="post-74 page type-page status-publish hentry penci-portfolio-meta-wrapper">
        <div class="penci-page-header">
            <h1 class="entry-title">Contact</h1>
        </div>
        <div class="post-entry blockquote-style-2">
            <div class="inner-post-entry entry-content">
              <div class="wpcf7 js" id="wpcf7-f1159-p74-o1" lang="en-US" dir="ltr">
                  <div class="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                    <ul></ul>
                  </div>
                  <form v-on:submit.prevent="sendEmail"  class="wpcf7-form init" aria-label="Contact form" >
                    <div style="display: none;">
                        <input type="hidden" name="_wpcf7" value="x">
                    </div>
                    <p class="name"><span class="wpcf7-form-control-wrap" data-name="your-name"><input size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Name*" type="text" name="your-name" v-model="name"></span></p>
                    <p class="email"><span class="wpcf7-form-control-wrap" data-name="your-email"><input size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email*" v-model="email" type="email" name="your-email"></span></p>
                    <p class="subject"><span class="wpcf7-form-control-wrap" data-name="your-subject"><input size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Subject" v-model="subject" type="text" name="your-subject"></span></p>
                    <p class="message"><span class="wpcf7-form-control-wrap" data-name="your-message"><textarea cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your Message" v-model="message" name="your-message"></textarea></span></p>
                    <p class="submit"><input class="wpcf7-form-control has-spinner wpcf7-submit pcalign-right" type="submit" value="Submit"><span class="wpcf7-spinner"></span></p>
                    <div class="wpcf7-response-output" aria-hidden="true"></div>
                  </form>
              </div>
              <p>&nbsp;</p>
            </div>
        </div>

      </article>

    </div>
  </div>

  <Sidebar />

  <div class="clear-footer"></div>

  <WidgetArea />

</div>

<Footer />

</template>

<script lang="ts">
import Sidebar from "./Sidebar.vue"
import Footer from "./Footer.vue"
import WidgetArea from "./WidgetArea.vue"

export default {
  name: 'ContactView',
  components: {
    Sidebar,
    Footer,
    WidgetArea
  },
  setup() {

  },
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e: any) {
      console.log(`sendEmail : ${this.name} ${this.subject} ${this.email} ${this.message}`)

      let url = `${import.meta.env.VITE_WWW_BASE_URL}/api/mail?name=${this.name}&subject=${this.subject}&email=${this.email}&message=${this.message}`
      fetch(url)
          .then(response => response.json())
          .then(json => {
            this.name = '';
            this.email = '';
            this.subject = '';
            this.message = '';
            alert('Your message has been sent. Thank you!')
          }).catch(err => {
            //console.log(err)
          })
      e.preventDefault();
    }
  }
};
</script>
