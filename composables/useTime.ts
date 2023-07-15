import { formatTimeAgo, UseTimeAgoMessages, UseTimeAgoUnit } from '@vueuse/core'

// 自定义时间单位和对应的中文描述
const units: UseTimeAgoUnit[] = [
  { max: 60, value: 1, name: 'second' },
  { max: 60, value: 60, name: 'minute' },
  { max: 24, value: 60 * 60, name: 'hour' },
  { max: 7, value: 24 * 60 * 60, name: 'day' },
  { max: 4.35, value: 7 * 24 * 60 * 60, name: 'week' },
  { max: 12, value: 30.44 * 24 * 60 * 60, name: 'month' },
  { max: Infinity, value: 365.25 * 24 * 60 * 60, name: 'year' }
]

// 定义自定义时间单位
const messages: UseTimeAgoMessages = {
  justNow: '刚刚',
  past: (value: string) => {
    const unitName = value.slice(0, -1) // 移除单位的 "s"
    const unitMap: Record<string, string> = {
      second: '秒',
      minute: '分钟',
      hour: '小时',
      day: '天',
      week: '周',
      month: '个月',
      year: '年'
    }
    return `${value}前`.replace(unitName, unitMap[unitName])
  },
  future: (value: string) => {
    const unitName = value.slice(0, -1) // 移除单位的 "s"
    const unitMap: Record<string, string> = {
      second: '秒',
      minute: '分钟',
      hour: '小时',
      day: '天',
      week: '周',
      month: '个月',
      year: '年'
    }
    return `${value}后`.replace(unitName, unitMap[unitName])
  },
  invalid: '无效'
}

export const TimeAgo = function (from: Date) {
  return formatTimeAgo(new Date(), { units, messages })
}