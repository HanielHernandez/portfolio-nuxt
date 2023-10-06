import { AtImageProps } from '~/components/atoms/at-image/AtImage.types'

export interface MlProjectCardProps {
    name: string
    description: string
    image: AtImageProps
    madeWith: string[]
    url: string
}
