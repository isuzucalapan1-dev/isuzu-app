<template>
  <div class="flex min-h-screen bg-gray-100">

    <!-- Sidebar -->
    <aside class="w-64 bg-blue-700 text-white flex flex-col">
      <div class="p-6 text-xl font-bold border-b border-blue-600">
        ISUZU Admin
      </div>

      <nav class="flex-1 p-4 space-y-2">
        <div class="px-4 py-2 rounded bg-blue-600">Dashboard</div>
        <div class="px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">Inventory</div>
        <div class="px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">Reports</div>
      </nav>

      <button
        @click="logout"
        class="m-4 py-2 rounded bg-red-500 hover:bg-red-600 transition"
      >
        Logout
      </button>
    </aside>

    <!-- Main -->
    <main class="flex-1 p-6">
      <h1 class="text-2xl font-bold mb-6">Dashboard</h1>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="bg-white p-6 rounded-xl shadow">
          <p class="text-gray-500">Total Products</p>
          <h2 class="text-3xl font-bold">125</h2>
        </div>

        <div class="bg-white p-6 rounded-xl shadow">
          <p class="text-gray-500">Low Stock</p>
          <h2 class="text-3xl font-bold text-red-500">8</h2>
        </div>

        <div class="bg-white p-6 rounded-xl shadow">
          <p class="text-gray-500">Categories</p>
          <h2 class="text-3xl font-bold">6</h2>
        </div>
      </div>

      <!-- Inventory Table -->
      <div class="bg-white rounded-xl shadow overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-200 text-left">
            <tr>
              <th class="p-3">ID</th>
              <th class="p-3">Product</th>
              <th class="p-3">Stock</th>
              <th class="p-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in inventory"
              :key="item.id"
              class="border-t hover:bg-gray-50"
            >
              <td class="p-3">{{ item.id }}</td>
              <td class="p-3">{{ item.name }}</td>
              <td class="p-3">{{ item.stock }}</td>
              <td class="p-3">₱{{ item.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const inventory = ref([
  { id: 1, name: 'Brake Pads', stock: 50, price: 1200 },
  { id: 2, name: 'Oil Filter', stock: 120, price: 450 },
  { id: 3, name: 'Battery', stock: 30, price: 3200 },
])

const logout = () => {
  router.push('/')
}
</script>
