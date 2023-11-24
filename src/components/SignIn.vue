<script>
import axios from "axios";
import {useRouter} from "vue-router";
import {ref} from "vue";
import {useCookies} from "vue3-cookies";

export default {
  setup() {
    const router = useRouter()
    const email = ref()
    const password = ref()
    const cookie = useCookies()
    const onRegisterClick = () => {
      router.push('/sign-up')
    }

    const login = () => {
      axios.post("http://localhost:3000/api/auth/sign-in", {
        "email" : email.value,
        "password" : password.value
      }).then((res) => {
        console.log(res.data.access_token)
        cookie.cookies.set("access_token", res.data.access_token)
      }).catch((err) => {
        console.log(err)
      })
    }


    return {
      email,
      password,
      login,
      onRegisterClick
    }
  }


}
</script>

<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="headline">로그인</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="사용자 이메일" required v-model="email"></v-text-field>
              <v-text-field label="비밀번호" type="password" required v-model="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login">로그인</v-btn>
          </v-card-actions>
          <v-card-actions class="justify-center">
            <v-btn text @click="onRegisterClick">계정이 없으신가요?</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
