import type { Document } from '@contentful/rich-text-types'
import type { AtImageProps } from '~/components/atoms/at-image/AtImage.types'

export interface Experience {
    endDate: string
    startDate: string
    to: string
    name: string
    location: string
    description: Document
    tags: string[]
    image: AtImageProps
}

export interface MlWorkExperienceCardProps {
    expanded: Boolean
    experience: Experience
}

export interface MlWorkExperienceCardEmits {
    (e: 'onExpand', expanded: boolean): void
}
