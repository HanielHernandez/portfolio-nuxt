import type { Document } from '@contentful/rich-text-types'
import type { AtImageProps } from '~/components/atoms/at-image/AtImage.types'

export default interface MlProjectCardProps {
    name: string
    description: Document
    image: AtImageProps
    madeWith: string[]
    url: string
    id: string
}
