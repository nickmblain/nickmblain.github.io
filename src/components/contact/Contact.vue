<template>
  <v-row align="start" class="row--35">
    <v-col lg="6" md="6" sm="12" cols="12" order="2" order-md="1">
      <div class="text-left section-title mb--50">
        <span class="subtitle">Let's Say Hi</span>
        <h2 class="heading-title">Contact With Us.</h2>
        <div class="im_address">
          <span>Call us directly:</span
          ><a class="link im-hover" href="tel:+111 (0)55 5869 8976"
            >+111 (0)55 5869 8976</a
          >
        </div>
        <div class="im_address mt--5">
          <span>Contact Email:</span
          ><a class="link im-hover" href="mailto:example@gmail.com"
            >example@gmail.com</a
          >
        </div>
      </div>
      <div class="form-wrapper">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider
              name="name"
              rules="required"
              v-slot="{ errors }"
            >
              <label>
                <input
                  type="text"
                  v-model="formData.name"
                  placeholder="Your Name *"
                />
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <ValidationProvider
              name="email"
              rules="required|email"
              v-slot="{ errors }"
            >
              <label>
                <input
                  type="text"
                  rules="required|email"
                  v-model="formData.email"
                  placeholder="Your email *"
                />
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <ValidationProvider
              name="subject"
              rules="required"
              v-slot="{ errors }"
            >
              <label>
                <input
                  type="text"
                  v-model="formData.subject"
                  placeholder="Write a Subject"
                />
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <ValidationProvider
              name="message"
              rules="required"
              v-slot="{ errors }"
            >
              <label>
                <textarea
                  v-model="formData.message"
                  placeholder="Your Message"
                ></textarea>
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <button class="btn-default" type="submit" value="submit">
              Submit Now
            </button>
          </form>
        </ValidationObserver>
      </div>
    </v-col>
    <v-col lg="6" md="6" sm="12" cols="12" order="1" order-md="2">
      <div class="thumbnail mb_md--40 mb_sm--40">
        <slot name="contact-img"></slot>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  import { ValidationObserver } from "vee-validate";
  import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
  export default {
    components: {
      ValidationObserver,
      ValidationProvider,
    },
    data() {
      return {
        formData: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
      };
    },
    methods: {
      onSubmit() {
        console.log(this.formData);
      },
    },
  };
</script>

<style lang="scss">
  .form-wrapper label input,
  .form-wrapper label textarea {
    margin-bottom: 0;
  }
  .form-wrapper label {
    margin-bottom: 20px;
  }
</style>
