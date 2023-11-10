<template>
    <UAccordion :items="items" />
</template>

<script setup lang="ts">
const items = [{
  label: 'TextField',
  icon: 'i-heroicons-sparkles-20-solid',
  defaultOpen: false,
  content: `{
            "type": "textfield",
            "label": "Firstname",
            "placeholder": "Enter your firstname"
            }`
}, {
  label: 'TextArea',
  icon: 'i-heroicons-sparkles-20-solid',
  disabled: false,
  content: `{
            "type": "textarea",
            "label": "Address",
            "placeholder": "Enter your Address",
            "row": 4
            }`
}, {
  label: 'Radio Buttons',
  icon: 'i-heroicons-sparkles-20-solid',
  content: `{
            "type": "radio",
            "label": "Gender",
            "buttons": [
                            {"name": "male", "value": "male",
                            "label": "Male"},
                            {"name": "female", "value": "female",
                            "label": "Female"}
                        ]
            }`
}, {
  label: 'Select',
  icon: 'i-heroicons-sparkles-20-solid',
  content: `{ "type": "select", "label": "Salary",
            "options": [
                            {"label": "2K usd", "value": "2000"},
                            {"label": "3K usd", "value": "3000", "disabled": true}
                        ]
            }`
},]
</script>