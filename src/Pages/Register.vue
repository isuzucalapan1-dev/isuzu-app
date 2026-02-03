<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">
      <h1 class="text-2xl font-bold text-center mb-6">Register</h1>

      <form @submit.prevent="register" class="space-y-4">
        <!-- Full Name -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            v-model="fullName"
            type="text"
            placeholder="John Doe"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="john@email.com"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="••••••"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <!-- Role Selection -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Role</label>
          <select v-model="roleId" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
            <option value="">Select Role</option>
            <option v-for="role in roles" :key="role.id" :value="role.id">
              {{ role.role_name }}
            </option>
          </select>
        </div>

        <!-- Error -->
        <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>

        <!-- Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
        >
          Register
        </button>
      </form>

      <p class="text-center text-sm mt-4">
        Already have an account?
        <router-link class="text-blue-600 hover:underline" to="/">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const fullName = ref('')
const email = ref('')
const password = ref('')
const roleId = ref('')
const error = ref('')
const roles = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost/isuzu-backend/api/roles.php')
    roles.value = res.data
  } catch (err) {
    console.error(err)
  }
})

const register = async () => {
  if (!fullName.value || !email.value || !password.value || !roleId.value) {
    error.value = 'All fields are required'
    return
  }

  try {
    const res = await axios.post('http://localhost/isuzu-backend/api/register.php', {
      full_name: fullName.value,
      email: email.value,
      password: password.value,
      role_id: roleId.value
    })

    if (res.data.success) {
      error.value = ''
      router.push('/')
    } else {
      error.value = res.data.message
    }
  } catch (err) {
    error.value = 'Server error. Try again later.'
    console.error(err)
  }
}
</script>
