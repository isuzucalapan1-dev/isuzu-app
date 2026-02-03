<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="bg-white w-full max-w-sm p-8 rounded-2xl shadow-xl border border-gray-200">
      <!-- Logo / Title -->
      <div class="text-center mb-6">
        <h1 class="text-3xl font-bold text-gray-800">Welcome Back</h1>
        <p class="text-gray-500 text-sm mt-1">Login to your account</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="login" class="space-y-5">
        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="admin@email.com"
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="••••••"
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
          />
        </div>

        <!-- Error -->
        <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>

        <!-- Button -->
        <button
          type="submit"
          class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
        >
          Login
        </button>
      </form>

      <!-- Register Link -->
      <p class="text-center text-sm text-gray-500 mt-6">
        Don't have an account?
        <router-link class="text-blue-600 font-medium hover:underline" to="/register">
          Register
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')

const login = async () => {
  if (!email.value || !password.value) {
    error.value = 'All fields are required'
    return
  }

  try {
    const res = await axios.post('http://localhost/isuzu-backend/api/login.php', {
      email: email.value,
      password: password.value
    })

    if (res.data.success) {
      error.value = ''
      router.push('/dashboard')
    } else {
      error.value = res.data.message
    }
  } catch (err) {
    error.value = 'Server error. Try again later.'
    console.error(err)
  }
}
</script>
