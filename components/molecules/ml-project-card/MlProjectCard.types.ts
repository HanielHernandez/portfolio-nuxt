import { Document } from '@contentful/rich-text-types'
import { AtImageProps } from '~/components/atoms/at-image/AtImage.types'

export interface MlProjectCardProps {
    name: string
    description: Document
    image: AtImageProps
    madeWith: string[]
    url: string
}
