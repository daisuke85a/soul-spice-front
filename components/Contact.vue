<template>
  <div>
    <div class="text-center py-5">
      <h2 class="display-1 font-weight-black pt-10">CONTACT</h2>
      <p class="subtitle-1">- お問い合わせ -</p>
      <p class="text-left">
        サークル参加についての詳細やイベントブッキングについてなど、お気軽にお問い合わせください！
      </p>
    </div>
    <v-row justify="center">
      <v-col class="text-center" cols="12">
        <form>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="30"
            label="お名前"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="メールアドレス"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-textarea
            v-model="text"
            :error-messages="textErrors"
            clearable
            clear-icon="mdi-close-circle"
            label="お問い合わせ内容"
            placeholder="例：サークル参加についての詳細や、イベントブッキングについてなど"
            required
            value=""
            @input="$v.text.$touch()"
            @blur="$v.text.$touch()"
          ></v-textarea>
          <v-btn
            class="mr-4"
            color="orange font-weight-bold"
            dark
            :loading="loading"
            :disabled="loading"
            x-large
            @click="submit"
            ><v-icon>mdi-email</v-icon>お問い合わせ</v-btn
          >
          <v-dialog v-model="dialog">
            <v-card>
              <v-card-title class="headline">{{
                dialogText.title
              }}</v-card-title>
              <v-card-text> {{ dialogText.content }} </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialogOk">
                  OK
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </form>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
const axios = require('axios')
const dialogText = {
  success: {
    title: 'お問い合わせありがとうございます',
    content:
      '3日以内にご記入いただいたアドレスにメールをお送りいたします。大変恐縮ですがしばらくお待ち下さい。'
  },
  failed: {
    title: 'お問い合わせに失敗しました',
    content:
      'お手数ですが、OKボタンを押して表示されるフォームよりお問い合わせをお願いいたします。'
  }
}

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(30) },
    email: { required, email },
    text: { required }
  },

  data: () => ({
    name: '',
    email: '',
    text: '',
    loading: false,
    dialog: false,
    dialogText: dialogText.success,
    success: null
  }),

  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('お名前は30文字以内でお願いします')
      !this.$v.name.required && errors.push('お名前を入力してください')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email &&
        errors.push('正しいメールアドレスを入力してください')
      !this.$v.email.required && errors.push('メールアドレスを入力してください')
      return errors
    },
    textErrors() {
      const errors = []
      if (!this.$v.text.$dirty) return errors
      !this.$v.text.required &&
        errors.push('お問い合わせ内容を入力してください')
      return errors
    }
  },

  methods: {
    async submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.loading = true
      try {
        const response = await axios.post(
          process.env.CONTACT_BASE_URL + '/api/contacts',
          {
            name: this.name,
            email: this.email,
            content: this.text
          }
        )
        console.log(response)
        this.success = true
        this.dialogText = dialogText.success
        this.name = ''
        this.email = ''
        this.text = ''
        this.$v.$reset()
      } catch (e) {
        this.success = false
        this.dialogText = dialogText.failed
      }
      this.loading = false
      this.dialog = true
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.text = ''
    },
    dialogOk() {
      if (this.success === false) {
        this.dialog = false
        location.href =
          'https://docs.google.com/forms/d/e/1FAIpQLSdx7mGD1hTxUGymFx7Mvl6lx0hnw8BM-WcHURINxqXEtdZWCQ/viewform'
      } else {
        this.dialog = false
      }
    }
  }
}
</script>
<style scoped>
.display-1 {
  letter-spacing: 0.2em !important;
}
</style>
