import type { ComponentType } from '~~/components/components'
import type MlNavbarProps from '~~/components/molecules/ml-navbar/MlNavbar.types'

export default interface PageProps {
    blocks: Array<{ CONTENT_TYPE: ComponentType }>
    name: any
    slug: string
    header: MlNavbarProps
}
