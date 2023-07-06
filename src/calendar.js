/**
 * {日历}
 * @author yutent<yutent.io@gmail.com>
 * @date 2021/11/29 09:59:26
 */

import chalk from 'chalk'
import { solar2lunar, getHSEBYear } from './lunar/index.js'

const CAL_HEAD = ['日', '一', '二', '三', '四', '五', '六'].map((s, i) => {
  s = '星期' + s
  if (i === 0 || i === 6) {
    s = chalk.red(s)
  }
  return '  ' + s + '  ' + chalk.grey('│')
})
const VLINE = chalk.grey('│')
const VLINE2 = chalk.grey('├')
const VLINE3 = chalk.grey('└')
const DASHED_LINE = chalk.grey('│' + (' '.repeat(10) + '│').repeat(7))

// 画间隔线
function drawDashedLine(start = '', pipe = ' ') {
  return chalk.grey(start + (pipe.repeat(10) + '│').repeat(7))
}

//获取今年的年份/月份，返回的是数组
export function getThisYearMonth() {
  var d = new Date()
  return [d.getFullYear(), d.getMonth()]
}

//根据年份获取指定月份天数
function getTotalDays(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

//判断指定年月第一天是星期几
function getFirstDay(year, month, day) {
  return new Date(year, month, day || 1).getDay()
}

//判断指定天数是否被选中
function isPicked({ year, month, day }, item) {
  return item.year === year && item.month === month && item.day === day
}

function getToday() {
  var d = new Date()
  return { year: d.getFullYear(), month: d.getMonth(), day: d.getDate() }
}

//计算日历数组
export function getCalendarTable(year, month) {
  var lnums = getTotalDays(year, month - 1) //上个月天数
  var nums = getTotalDays(year, month) // 本月天数
  var ld = 1 - getFirstDay(year, month) //第一周需要补多少天
  var nd = 0 // 最后一周需要补多少天, 具体看下方的计算
  var today = getToday()
  var list = []
  var lyear, lmonth, nyear, nmonth

  // 修正年月日的数值, 以匹配节假日
  if (ld < 1) {
    lyear = year
    lmonth = month - 1
    if (lmonth < 0) {
      lmonth = 11
      lyear--
    }
  }

  for (let i = ld; i <= nums; i++) {
    let tmp = {
      day: i < 1 ? lnums - -i : (i + '').padStart(2, '0')
    }
    let lunar

    if (i > 0) {
      let week = getFirstDay(year, month, i)
      lunar = solar2lunar(year, month, i)
      tmp.weekend = week === 0 || week === 6
      tmp.picked = !!isPicked({ year, month, day: i }, today)
      tmp.highlight = !!lunar.festival || !!lunar.solarTerms
    } else {
      // 从上个月中补齐第1周
      lunar = solar2lunar(lyear, lmonth, lnums + i)
      tmp.grey = 1
    }
    tmp.lunar = lunar.short
    tmp.custom = lunar.custom
    list.push(tmp)
  }

  nd = list.length % 7
  nd = nd > 0 ? 7 - nd : 0

  // 修正年月日的数值, 以匹配节假日
  if (nd > 0) {
    nyear = year
    nmonth = month + 1
    if (nmonth > 11) {
      nmonth = 0
      nyear++
    }
  }

  // 最后一行不够1周时, 从下个月的日期中补齐
  for (let day = 1; day <= nd; day++) {
    let lunar = solar2lunar(nyear, nmonth, day)
    list.push({
      day: (day + '').padStart(2, '0'),
      lunar: lunar.short,
      custom: lunar.custom,
      grey: 1
    })
  }
  return list
}

// 画表头
function drawThead(year, month) {
  var dateStr = `${year}年${month + 1}月${' '.repeat(10)}${getHSEBYear(year, month)}`

  dateStr =
    chalk.grey('│ ') + chalk.cyan(dateStr) + ' '.repeat(71 - dateStr.length - 2) + chalk.grey('│')

  console.log(chalk.grey('┌─' + '─'.repeat(75) + '┐'))
  console.log(chalk.grey('│' + ' '.repeat(76) + '│'))
  console.log(dateStr)
  console.log(chalk.grey('│' + ' '.repeat(76) + '│'))
  console.log(chalk.grey('├' + '──────────┬'.repeat(7).slice(0, -1) + '┤'))
  // 以下是星期的表头
  console.log(chalk.grey('│') + CAL_HEAD.join(''))
  console.log(chalk.grey('├' + '──────────┼'.repeat(7).slice(0, -1) + '┤'))
  // ┘└ ┬ ┴ ├ ┤ ┼
}

// 画日期
function drawTbody(year, month) {
  var table = getCalendarTable(year, month)
  var line = 0
  var maxi = 3 * Math.ceil(table.length / 7)

  // i 是 纵坐标,  j是横坐标格子
  for (let i = 0; i < maxi + 1; i++) {
    let tr = ''
    for (let j = 0; j < 7; j++) {
      let tmp = table[line + j]

      if (!tmp) {
        break
      }

      if (i === 0 && j === 0) {
        continue
      }

      if (j === 0) {
        tr += i % 3 === 0 ? (i === maxi ? VLINE3 : VLINE2) : VLINE
      }
      switch (i % 3) {
        case 0:
          if (i === 0) {
            break
          } else {
            tr += chalk.grey(
              '──────────' + (j === 6 ? (i === maxi ? '┘' : '┤') : i === maxi ? '┴' : '┼')
            )
            if (j === 6) {
              line += 7
            }
          }
          break

        case 1:
          let right = '  '
          if (tmp.custom) {
            if (tmp.custom === '班') {
              right = chalk.red(tmp.custom)
            } else {
              right = chalk.green(tmp.custom)
            }
          }
          if (tmp.picked) {
            tr += '  ' + chalk.bgBlue.whiteBright('  ' + tmp.day + '  ') + right + VLINE
          } else {
            // 有grey字段的, 优先置灰, 这种为 非本月份的日期
            if (tmp.grey) {
              tmp.day = chalk.grey(tmp.day)
            } else {
              if (tmp.weekend) {
                tmp.day = chalk.red(tmp.day)
              } else {
                tmp.day = chalk.whiteBright(tmp.day)
              }
            }
            tr += ' '.repeat(4) + tmp.day + '  ' + right + VLINE
          }
          break

        case 2:
          let pad = 5
          let space = ''
          let padSpace = '  '
          if (tmp.lunar) {
            pad = (10 - tmp.lunar.length * 2) / 2 - 2
          }
          if (pad >= 0) {
            space = ' '.repeat(pad)
          } else {
            padSpace = padSpace.slice(0, pad)
          }
          if (tmp.picked) {
            tr += padSpace + chalk.bgBlue.white(space + tmp.lunar + space) + padSpace + VLINE
          } else {
            if (tmp.lunar) {
              tmp.lunar = tmp.highlight
                ? chalk.cyan(tmp.lunar)
                : tmp.weekend
                ? chalk.redBright(tmp.lunar)
                : chalk.grey(tmp.lunar)
            }
            tr += ' '.repeat(pad + 2) + tmp.lunar + ' '.repeat(pad + 2) + VLINE
          }
          break
      }
    }

    if (tr) {
      console.log(tr)
    }
  }
}

// 渲染日历
export function drawCalendar(year, month) {
  drawThead(year, month)
  drawTbody(year, month)
}
