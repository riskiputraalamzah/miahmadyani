<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="6">
          <Breadcrumbs :items="items" />
          <section class="py-10">
            <div
              class="text-md-h3 mb-10 text-sm-h4 text-h5 font-weight-bold text-center"
            >
              <span class="font-poppins rule-headline">
                Kontak Kami
              </span>
            </div>

            <v-card :loading="loading" elevation="0" ref="form">
              <template slot="progress">
                <v-progress-linear
                  color="green darken-4"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
              <v-card-text>
                <v-text-field
                  outlined
                  ref="name"
                  v-model="name"
                  :rules="[() => !!name || 'This field is required']"
                  :error-messages="errorMessages"
                  label="Nama"
                  placeholder="John Doe"
                  required
                ></v-text-field>
                <v-text-field
                  outlined
                  ref="address"
                  v-model="email"
                  :rules="[rules.required, rules.email]"
                  label="Email"
                  placeholder="johndoe@gmail.com"
                  required
                ></v-text-field>

                <v-textarea
                  ref="pesan"
                  v-model="pesan"
                  :rules="[rules.required]"
                  outlined
                  label="Pesan"
                  auto-grow
                  required
                ></v-textarea>
              </v-card-text>
              <v-divider class="mt-12"></v-divider>
              <v-card-actions>
                <v-btn text>
                  Cancel
                </v-btn>
                <v-spacer></v-spacer>
                <v-slide-x-reverse-transition>
                  <v-tooltip v-if="formHasErrors" left>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        class="my-0"
                        v-bind="attrs"
                        @click="resetForm"
                        v-on="on"
                      >
                        <v-icon>mdi-refresh</v-icon>
                      </v-btn>
                    </template>
                    <span>Refresh form</span>
                  </v-tooltip>
                </v-slide-x-reverse-transition>
                <v-btn color="primary" text @click="submit">
                  Submit
                </v-btn>
              </v-card-actions>
            </v-card>
          </section>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs.vue";
export default {
  data: () => ({
    loading: false,
    rules: {
      required: (value) => !!value || "This field is required.",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
    items: [
      {
        text: "Home",
        disabled: false,
        to: "/",
      },
      {
        text: "Kontak",
        disabled: true,
        to: "/kontak",
      },
    ],
    pesan: "",
    email: "",

    errorMessages: "",
    name: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    country: null,
    formHasErrors: false,
  }),

  computed: {
    form() {
      return {
        name: this.name,
        address: this.address,
        pesan: this.pesan,
      };
    },
  },

  watch: {
    name() {
      this.errorMessages = "";
    },
  },

  methods: {
    addressCheck() {
      this.errorMessages =
        this.address && !this.name ? `Hey! I'm required` : "";

      return true;
    },
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
    submit() {
      this.formHasErrors = false;
      let cek = [];
      Object.keys(this.form).forEach((f) => {
        cek.push(this.$refs[f].validate(true));
      });

      if (cek) {
        this.loading = true;

        setTimeout(() => {
          this.loading = false;
          this.resetForm();
        }, 2000);
      }
    },
  },
  components: {
    Breadcrumbs,
  },
};
</script>
