<script>
import {ref} from "vue";
import axios from "axios";
import {useRoute, useRouter} from "vue-router";
export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const name = ref('')
    const router = useRouter()
    const signUp = () => {
      axios.post('http://localhost:3000/api/auth/sign-up', {
        "email" : email.value,
        "password" : password.value,
        "name" : name.value
      }).then(() => {
        router.push('/')
      }).catch((err) => {
        console.log(err)
        alert('입력값을 확인해주세요')
      })
    }
    return {
      email,
      password,
      name,
      signUp
    }
  }


}
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title>계정 생성</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="이메일" type="email" required v-model="email"></v-text-field>
              <v-text-field label="비밀번호" type="password" required v-model="password"></v-text-field>
              <v-text-field label="이름" required v-model="name"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" v-on:click="signUp">계정 생성</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
