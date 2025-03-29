import type { Document } from '@contentful/rich-text-types'
import type AtImageProps from '~/components/atoms/at-image/AtImage.types'

export default interface Experience {
    endDate: string
    startDate: string
    to: string
    name: string
    location: string
    description: Document
    tags: string[]
    companyName: string
    image: AtImageProps
}

export interface MlWorkExperienceCardProps {
    expanded: boolean
    experience: Experience
}

export interface MlWorkExperienceCardEmits {
    (e: 'onExpand', expanded: boolean): void
}
