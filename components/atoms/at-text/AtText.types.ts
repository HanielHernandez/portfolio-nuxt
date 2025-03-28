export type AtTextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' | 'a' | 'span' | 'div'
export type AtTextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph' | 'label' | 'list-title' | 'link'

export const textSizes: Record<AtTextVariant, string> = {
    h1: 'text-5xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    h4: 'text-xl',
    h5: 'text-lg',
    h6: 'text-base',
    paragraph: 'text-base',
    label: 'text-base',
    link: 'text-base',
    ['list-title']: 'text-base'
}

export const fontWeights: Record<AtTextVariant, string> = {
    h1: 'font-extrabold',
    h2: 'font-bold',
    h3: 'font-medium',
    h4: 'font-semibold',
    h5: 'font-medium',
    h6: 'font-medium',
    paragraph: '',
    label: 'font-medium',
    link: 'font-medium',
    ['list-title']: 'font-bold'
}

export const leadingClasses: Record<AtTextVariant, string> = {
    h1: 'leading-tight',
    h2: 'leading-tight',
    h3: 'leading-snug',
    h4: 'leading-snug',
    h5: 'leading-normal',
    h6: 'leading-normal',
    paragraph: 'leading-relaxed',
    label: '',
    link: '',
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
    As?: AtTextTag
    variant?: AtTextVariant
    className?: string
    href?: string
}
