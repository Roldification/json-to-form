<template>
    <div>
        <nav>
            <div class="flex flex-col justify-center h-10 border p-5">
                <span class="font-bold">JSON-to-Form v.1</span>
            </div>
        </nav>
        <div class="p-10 flex flex-col items-center">
            <div class="w-4/5">
                <slot></slot>
            </div>
        </div>
    </div>
</template>