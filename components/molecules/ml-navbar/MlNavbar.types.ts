import type AtLinkProps from '~/components/atoms/at-link/AtLink.types'

export default interface MlNavbarProps {
    links: Array<AtLinkProps>
    actionLink?: AtLinkProps
}
