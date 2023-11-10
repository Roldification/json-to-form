<template>
    <UFormGroup v-if="props.type.toLowerCase()=='textfield'" :label="props.label" name="email">
        <UInput  :placeholder="props.placeholder" v-model="fieldVal" />
    </UFormGroup>

    <UFormGroup v-else-if="props.type.toLowerCase()=='textarea'" :label="props.label" name="email1">
        <UTextarea :rows="props.row" :placeholder="props.placeholder" v-model="fieldVal" />
    </UFormGroup>

    <UFormGroup v-else-if="props.type.toLowerCase()=='select'" :label="props.label" name="email2">
        <USelect v-model="fieldVal" :options="props.options" />
    </UFormGroup>

    <div v-else-if="props.type.toLowerCase()=='radio'" >
        <span>{{ props.label }}</span>
        <URadio v-for="method of props.buttons" :key="method.name" v-model="fieldVal" v-bind="method" />
    </div>


    <div class="p-2" v-if="(typeof props.isShownWhen !== 'undefined') && props.isShownWhen.value == fieldVal">
        <template v-for="input in props.isShownWhen.elements">
            <Jsonfield :type="input.type" :label="input.label" :placeholder="input.placeholder" :row="input?.row"
                v-model="input.value" :buttons="input.buttons" :is-shown-when="input?.isShownWhen" :options="input?.options"
            ></Jsonfield>
        </template>
    </div>
</template>

<script setup lang="ts">


const props = defineProps<{
    label: string,
    type: string,
    placeholder?: string,
    row?: number,
    options?: Array<{
        name: string,
        value: string | number,
        disabled?: boolean
    }>,
    buttons?: Array<{
        name: string,
        value: string | number,
        label: string
    }>,
    modelValue: any,
    isShownWhen?: {
        value: string | number,
        elements: Array<any>
    }
}>()

const fieldVal = ref<any | null>(props.modelValue)

watch(fieldVal, (val: any) => {
    emit('update:modelValue', val)
})


const emit = defineEmits<{
    (event: 'update:modelValue', value: any): void
}>()


</script>~/types/fields