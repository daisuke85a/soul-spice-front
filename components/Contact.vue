<template>
  <div>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <fade-in-up-in-screen>
          <h2 class="display-2 font-weight-black">[ CONTACT ]</h2>
        </fade-in-up-in-screen>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="text-center" cols="12">
        <fade-in-up-in-screen>
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
              required
              value=""
              @input="$v.text.$touch()"
              @blur="$v.text.$touch()"
            ></v-textarea>
            <v-btn class="mr-4" color="primary" @click="submit">送信</v-btn>
            <v-btn color="secondary" @click="clear">clear</v-btn>
          </form>
        </fade-in-up-in-screen>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
const axios = require('axios')

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
    text: ''
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
      // TODO: #11 送信中のインタラクションをさせたい
      const response = await axios.post(
        process.env.CONTACT_BASE_URL + '/api/contacts',
        {
          name: this.name,
          email: this.email,
          content: this.text
        }
      )
      console.log(response)
      // TODO： #12 送信成功/失敗がわかるようにダイアログを出したい
      this.$v.$touch()
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.text = ''
    }
  }
}
</script>
