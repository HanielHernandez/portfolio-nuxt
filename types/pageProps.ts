import { ComponentType } from '~~/components/components'
import { MlNavbarProps } from '~~/components/molecules/ml-navbar/MlNavbar.types'

export interface PageProps {
  blocks: Array<{ CONTENT_TYPE: ComponentType }>
  name: any
  slug: string
  header: MlNavbarProps
}
