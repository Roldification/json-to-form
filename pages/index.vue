<template>
    <UCard>
    <template #header>
        <span class="text-sm font-bold">Create Form</span>
    </template>
    <div>
        <UTabs  :items="items" class="w-full">
            <template #item="{ item }">
                <div v-if="item.key === 'setup'" class="space-x-3 flex flex-row">
                    <client-only>
                        <code-editor class="w-full" :wrap="true" :languages="[['json', 'JSON']]" v-model="jsonToConvert" ></code-editor>
                    </client-only>
                    <div class="text-sm w-1/4">
                        Helper Functions: Just copy and paste the sample JSON code in the editor, inside an array of JSON objects.
                        <Helperfunctions></Helperfunctions>

                        <div class="mt-5">
                            For conditional rendering, just add this JSON object as an <span class="italic font-semibold">"isShownWhen"</span> property in the JSON object field.
                        </div>
                        <div class="text-align-left">
                            <pre class="text-align-left">
{
 "value": "harold",
 "elements": [] <span class="text-green-500">// this will be the array of JSON
    objects that will be shown when the value is
    equal to the value property</span>
}
                            </pre>
                        </div>
                    </div>
                    
                </div>
                <div v-if="item.key === 'preview'" class="space-y-3">
                    <UButton @click="onChange()" icon="i-heroicons-arrow-path-solid" size="sm" color="primary" square variant="solid" />
                    <div v-if="!isLoading">
                        <div v-if="json.length>0" class="space-y-5">
                            <template v-for="input in json">
                                <Jsonfield :type="input.type" :label="input.label" :placeholder="input.placeholder" :row="input?.row"
                                    v-model="input.value" :buttons="input.buttons" :is-shown-when="input?.isShownWhen" :options="input?.options"
                                ></Jsonfield>

                            </template>
                        </div>
                    </div>
                    <div v-else>
                        Please wait while we generate Preview...
                    </div>
                </div>
            </template>
        </UTabs>
    </div>
    <template #footer />
  </UCard>
</template>

<script setup>
import hljs from 'highlight.js';
import CodeEditor from "simple-code-editor";

const items = [
    {
        key: 'setup',
        label: 'Setup'
    },
    {
        key: 'preview',
        label: 'Preview'
    },
]

const isLoading = ref(false)

const jsonToConvert = ref('')

const json = ref([])

function setJson() {
    try {
        console.log('eh')
        let js = JSON.parse(jsonToConvert.value)
        
        // for (const [key, value] of Object.entries(object1)) {
        //     console.log(`${key}: ${value}`);
        // }


        json.value = js
    } catch (error) {
        console.log(error)
        json.value = []
    }
}

function onChange() {

    const pr = new Promise((resolve, reject) =>{
        setTimeout(()=> {
            setJson()
            resolve('succesful!')
        }, 1000)
    })

    isLoading.value = true
    pr.then((res)=>{

    }).finally(()=>{
        isLoading.value = false
    })
        
}


// const json = computed(()=>{
//     try {
//         let js = JSON.parse(jsonToConvert.value)
        
//         return js
//     } catch (error) {
//         return null
//     }
// })


</script>