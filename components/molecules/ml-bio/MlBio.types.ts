import type { Document } from '@contentful/rich-text-types'
import type { AtImageProps } from '~/components/atoms/at-image/AtImage.types'
import type { AtLinkProps } from '~/components/atoms/at-link/AtLink.types'

export interface MlBioProps {
    biography: Document
    title: string
    actionLink?: AtLinkProps
    image: AtImageProps
}
