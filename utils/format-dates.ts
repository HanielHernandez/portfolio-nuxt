import dayjs from 'dayjs'
import 'dayjs/locale/es'
import 'dayjs/locale/en'

export const formatFromTo = (from: string, to: string, locale: 'es') => {
    day().locale(locale)

    from = dayjs(from).format('MMMM. YYYY')
    to = dayjs(to).format('MMMM. YYYY')

    return `from ${from} to ${to}`
}
