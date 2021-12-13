/**
 * {农历转换算法}
 * @author yutent<yutent.io@gmail.com>
 * @date 2021/11/30 13:31:34
 */

import fs from 'fs'

import {
  LUNAR_YEARS,
  LUNAR_MONTH,
  LUNAR_DAY,
  HEAVENLY_STEMS,
  EARTHLY_BRANCHES,
  ZODIAC,
  FESTIVALS,
  SOLAR_FESTIVALS,
  SOLAR_TERMS,
  SOLAR_TERMS_YEARS,
  CACHE_FILE
} from './config.js'

let CUSTOM_FESTIVALS = {}

if (fs.existsSync(CACHE_FILE)) {
  try {
    CUSTOM_FESTIVALS = JSON.parse(fs.readFileSync(CACHE_FILE))
  } catch (e) {}
}

/**
 * 公历转农历函数
 * 传入公历{年月日}, 返回农历信息, 范围支持 1901/01/01 ~ 2100/12/31
 */
export function solar2lunar(year = 1901, month = 0, day = 1) {
  var baseDate = Date.UTC(1900, 0, 31) // 公历基准(1900年春节)
  var timestamp = Date.UTC(year, month, day) // 传入日期的时间戳
  var offset = (timestamp - baseDate) / (24 * 60 * 60 * 1000) + 1 // 计算与的相差天数, 有1天的修正
  var months, leap
  var result = { short: '', solarTerms: '', festival: '', lunarFestival: '' }
  var solarTermsYear = SOLAR_TERMS_YEARS[year - 1900]
  var customKey = `${year}.${month + 1}.${day}`

  if (year < 1901 || year > 2100) {
    return result
  }

  // 计算给出的公历对应的农历年份
  for (let y = 1900; y <= 2100; y++) {
    let days = getLunarYearDays(y)
    offset -= days

    // 确定之后, 得出农历天数(距离正月初一)
    if (offset <= 0) {
      result.year = y
      offset += days
      break
    }
  }

  // 获取当年的农历月份天数
  months = getLunarMonthsDays(result.year)
  leap = getLeapMonth(result.year)

  // 计算农历月份
  for (let m = 0; m < months.length; m++) {
    offset -= months[m] // 一个一个月的天数相减,直到小于0
    if (offset <= 0) {
      result.month = m
      result.day = offset + months[m] // 补回天数

      // 有闰月, 且当前月份大于等于闰月, 那得到的月份要减1
      if (leap > 0 && m >= leap) {
        result.leap = m === leap
        result.month -= 1
      }
      break
    }
  }

  // 自定义节假日
  result.custom = CUSTOM_FESTIVALS[customKey] || ''

  // 二十四节气
  if (solarTermsYear) {
    let tmp = solarTermsYear.slice(month * 4, (month + 1) * 4)
    if (+tmp.slice(0, 2) === day) {
      result.solarTerms = SOLAR_TERMS[month * 2]
    } else if (+tmp.slice(2) === day) {
      result.solarTerms = SOLAR_TERMS[month * 2 + 1]
    }
  }

  // 公历节日
  result.festival = SOLAR_FESTIVALS[`${month + 1}.${day}`] || ''

  // 非闰月才有农历节日
  if (!result.leap) {
    // 修正没有年三十的除夕
    if (result.month === 11 && result.day === months.pop()) {
      result.festival = FESTIVALS['12.30']
      result.lunarFestival = FESTIVALS['12.30']
    } else {
      result.festival = FESTIVALS[`${result.month + 1}.${result.day}`] || result.festival
      result.lunarFestival = FESTIVALS[`${result.month + 1}.${result.day}`] || ''
    }
  }

  result.yearCN = getHSEBYear(result.year)
  result.monthCN = (result.leap > 0 ? '闰' : '') + LUNAR_MONTH[result.month] + '月'

  if (result.day < 11) {
    result.dayCN = LUNAR_DAY[0] + LUNAR_DAY[result.day]
  } else if (result.day < 20) {
    result.dayCN = LUNAR_DAY[10] + LUNAR_DAY[result.day - 10]
  } else if (result.day === 20) {
    result.dayCN = LUNAR_DAY[2] + LUNAR_DAY[10]
  } else if (result.day < 30) {
    result.dayCN = LUNAR_DAY[20] + LUNAR_DAY[result.day - 20]
  } else if (result.day === 30) {
    result.dayCN = LUNAR_DAY[3] + LUNAR_DAY[10]
  }
  // console.log(result)

  result.short = result.festival
    ? result.festival
    : result.solarTerms
    ? result.solarTerms
    : result.day === 1
    ? result.monthCN
    : result.dayCN

  return result
}

/**
 * 获取指定年份的农历天数
 * @param year {Number} 1901 ~ 2100
 * @return {Number}
 */
function getLunarYearDays(year) {
  var months = getLunarMonthsDays(year)
  return months.reduce((sum, n) => (sum += n), 0)
}

/**
 * 判断指定年份是否有闰月
 * 16进制最后一位表示闰月的月份 (0-12), 0表示无闰月
 * @param year {Number} 1901 - 2100
 * @return {Number} 0-12
 */
function getLeapMonth(year) {
  var hexYear = LUNAR_YEARS[year - 1900] // 转16进制年份
  return hexYear & 0xf
}

/**
 * 获取闰月的天数
 * 16进制年份的第1位表示闰月是大小月
 * @param year {Number} 1901 - 2100
 * @return {Number}
 */
function getLeapMonthDays(year) {
  var hexYear = LUNAR_YEARS[year - 1900] // 转16进制年份
  var month = getLeapMonth(year)
  if (month > 0) {
    return hexYear & 0xf0000 ? 30 : 29
  }
  return 0
}

/**
 * 获取指定年份的所有月份天数
 * @param year {Number} 1901 - 2100
 * @return {Array}
 */
function getLunarMonthsDays(year) {
  var hexYear = LUNAR_YEARS[year - 1900] // 转16进制年份
  var leap = getLeapMonth(year)
  var leapDays = getLeapMonthDays(year)
  var months = []

  // 16进制年份的2-4位用于表示大小月
  for (let i = 0x8000; i > 0x8; i >>= 1) {
    months.push(hexYear & i ? 30 : 29)
  }

  if (leap > 0) {
    months.splice(leap, 0, leapDays)
  }

  return months
}

/**
 * 获取指定年份的天干地支生肖
 * @param year {Number} 1901 - 2100
 * @return {String}
 */
export function getHSEBYear(year) {
  var hy = (year - 3) % 10
  var eb = (year - 3) % 12

  hy = hy === 0 ? 10 : hy
  eb = eb === 0 ? 12 : eb

  return HEAVENLY_STEMS[hy - 1] + EARTHLY_BRANCHES[eb - 1] + ZODIAC[(year - 4) % 12] + '年'
}
