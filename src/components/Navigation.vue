<template>
    <div class="bg-green text-white fixed top-0 left-0 w-full">
        <nav class="container mx-auto p-6 flex gap-4 uppercase font-bold offset">
            <RouterLink to="/" :active-class="activeClass">Home</RouterLink>
            <RouterLink to="/admin" :active-class="activeClass">Admin</RouterLink>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const activeClass = "underline underline-offset-4 decoration-2"
</script>