export type JsonFields = {
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
    isShowWhen?: {
        value: string | number,
        elements: Array<JsonFields>
    }
}