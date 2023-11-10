<template>
    <div>
        <nav class="border p-2 flex flex-row justify-between">
            <div class="flex flex-col justify-center h-10">
                <span class="font-bold">JSON-to-Form v.1</span>
            </div>
            <div class="flex flex-col justify-center h-10">
                <NuxtLink to="https://github.com/Roldification/json-to-form" target="_blank"> Github Repo </NuxtLink>
            </div>
        </nav>
        <div class="p-10 flex flex-col items-center">
            <div class="w-4/5">
                <slot></slot>
            </div>
        </div>
    </div>
</template>