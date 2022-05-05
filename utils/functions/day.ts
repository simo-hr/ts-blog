import dayjs from 'dayjs'

export const unixtimeToFormatDatetime = (unixtime: number) => dayjs(new Date(unixtime)).format('YYYY-MM-DD')
