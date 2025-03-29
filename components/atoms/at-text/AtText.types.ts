export type AtTextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' | 'a' | 'span' | 'div'
export type AtTextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph' | 'label' | 'list-title' | 'link'

export const textSizes: Record<AtTextVariant, string> = {
    h1: 'text-5xl',
    h2: 'text-3xl md:text-4xl',
    h3: 'text-2xl',
    h4: 'text-xl',
    h5: 'text-lg',
    h6: 'text-base',
    paragraph: 'text-base',
    label: 'text-base',
    link: 'text-base cursor-pointer',
    ['list-title']: 'text-base'
}

export const fontWeights: Record<AtTextVariant, string> = {
    h1: 'font-black',
    h2: 'font-black',
    h3: 'font-black',
    h4: 'font-black',
    h5: 'font-bold',
    h6: 'font-bold',
    paragraph: 'font-base',
    label: 'font-bold',
    link: 'font-bold',
    ['list-title']: 'font-bold'
}

export const leadingClasses: Record<AtTextVariant, string> = {
    h1: 'leading-tight',
    h2: 'leading-tight',
    h3: 'leading-tight',
    h4: 'leading-tight',
    h5: 'leading-normal',
    h6: 'leading-normal',
    paragraph: 'leading-normal',
    label: '',
    link: '',
    ['list-title']: 'leading-6'
}

export const colorClasses: Record<AtTextVariant, string> = {
    h1: 'text-neutral-800 dark:text-neutral-200',
    h2: 'text-neutral-800 dark:text-neutral-200',
    h3: 'text-neutral-800 dark:text-neutral-200',
    h4: 'text-neutral-800 dark:text-neutral-200',
    h5: 'text-neutral-800 dark:text-neutral-200',
    h6: 'text-neutral-800 dark:text-neutral-200',
    paragraph: 'text-gray-600 dark:text-gray-400',
    label: 'text-neutral-800 dark:text-neutral-200',
    link: 'text-blue-600 ',
    ['list-title']: 'leading-6'
}

export const atTextTagMap: Record<AtTextVariant, AtTextTag> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    paragraph: 'p',
    label: 'label',
    link: 'a',
    ['list-title']: 'span'
}

export interface AtTextProps {
    as?: AtTextTag
    variant?: AtTextVariant
    class?: string
    href?: string
}
