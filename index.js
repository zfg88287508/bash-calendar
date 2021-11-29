#!/usr/bin/env node

/**
 * {终端版万年历}
 * @author yutent<yutent.io@gmail.com>
 * @date 2021/11/26 17:20:02
 */

import fs from 'iofs'
import { getThisYearMonth, drawCalendar } from './calendar.js'

var { version } = JSON.parse(fs.cat('./package.json'))
var argvs = process.argv.slice(2)
var action = argvs.shift()
var [year, month] = getThisYearMonth()

function drawOneYear(y) {
  for (let i = 0; i < 12; i++) {
    drawCalendar(y, i)
  }
}

function print(...args) {
  args[0] = args[0].padEnd(20, ' ')
  if (args.length > 1) {
    args.splice(1, 0, '   -   ')
  }
  console.log.apply(null, args)
}

function print_help() {
  print('='.repeat(64))
  print(`终端版万年历                    v${version},    作者: 宇天`)
  print('='.repeat(64))
  print('用法: cal [command] args...')
  print('Commands:')
  print('  -y {year}', '打印指定年份的日历')
  print('  -m', '打印指定月份的日历')
  print('  -h', '查看帮助文档')
  print('  -v', '查看程序的版本')
  process.exit()
}

switch (action) {
  case '-y':
    switch (argvs.length) {
      // 再无其他参数, 由打印当前年份所有的日历
      case 0:
        drawOneYear(year)
        break

      // 有1~2个参数,  cal -y 2020 2,   cal -y 2020 5
      case 1:
      case 2:
        year = +argvs.shift()
        month = +argvs.shift()

        if (year === year) {
          if (month < 13 && month > 0) {
            drawCalendar(year, month - 1)
          } else {
            drawOneYear(year)
          }
        } else {
          console.log('-y 参数异常')
        }
        break

      // 3个参数  cal -y 2020 -m 1
      case 3:
        action = argvs.shift()
        month = +argvs.shift()
        if (action === '-m' && month < 13 && month > 0) {
          drawCalendar(year, month - 1)
        } else {
          console.log('-m 参数异常')
        }
        break
      default:
        console.log('-y 参数异常')
        break
    }

    break

  case '-m':
    month = +argvs.shift()
    if (month < 13 && month > 0) {
      drawCalendar(year, month - 1)
    } else {
      console.log('-m 参数异常')
    }
    break

  case '-v':
    print(version)
    process.exit()
    break

  default:
    if (action) {
      year = +action
      month = +argvs.shift()
      if (year === year) {
        if (month < 13 && month > 0) {
          drawCalendar(year, month - 1)
        } else {
          drawOneYear(year)
        }
      } else {
        console.log('参数异常')
      }
    } else {
      drawCalendar(year, month)
    }

    break
}