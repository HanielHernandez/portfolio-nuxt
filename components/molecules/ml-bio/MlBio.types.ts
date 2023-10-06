import { Document } from '@contentful/rich-text-types'
import { AtImageProps } from '~/components/atoms/at-image/AtImage.types'
import { AtLinkProps } from '~/components/atoms/at-link/AtLink.types'

export interface MlBioProps {
  biography: Document
  title: string
  actionLink?: AtLinkProps
  image: AtImageProps
}
