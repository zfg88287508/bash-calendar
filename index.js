#!/usr/bin/env node

/**
 * {终端版万年历}
 * @author yutent<yutent.io@gmail.com>
 * @date 2021/11/26 17:20:02
 */

import chalk from 'chalk'
import figlet from 'figlet'
import { getThisYearMonth, getCalendarTable } from './calendar.js'

const CAL_HEAD = ['日', '一', '二', '三', '四', '五', '六'].map((s, i) => {
  if (i === 0 || i === 6) {
    s = chalk.red.bold(s)
  } else {
    s = chalk.bold(s)
  }
  return ' '.repeat(4) + s + ' '.repeat(4) + chalk.grey('|')
})
const VLINE = chalk.grey('|')
const DASHED_LINE = chalk.grey('|' + (' '.repeat(10) + '|').repeat(7))

var [year, month] = getThisYearMonth()
var table = getCalendarTable(year, month)
var line = 0
var dateStr = figlet.textSync(`${year} . ${month + 1}`)

function drawDashedLine(start = '', pipe = ' ') {
  return chalk.grey(start + (pipe.repeat(10) + '|').repeat(7))
}

dateStr = dateStr
  .split('\n')
  .map(s => chalk.grey('| ') + chalk.cyan(s) + ' '.repeat(77 - s.length - 2) + chalk.grey('|'))
  .slice(0, -1)
  .join('\n')

console.log(chalk.grey(' ' + '_'.repeat(76)))
console.log(dateStr)
console.log(chalk.grey('|' + '_'.repeat(76) + '|'))
console.log(drawDashedLine('|'))
console.log(chalk.grey('|') + CAL_HEAD.join(''))
console.log(drawDashedLine('|', '_'))

// 渲染日历表格
for (let i = 0; i < 3 * 5 + 1; i++) {
  let tr = ''
  for (let j = 0; j < 7; j++) {
    let tmp = table[line + j]

    if (!tmp) {
      break
    }

    if (j === 0) {
      tr += VLINE
    }
    switch (i % 3) {
      case 0:
        if (i === 0) {
          tr += chalk.grey(' '.repeat(10) + '|')
        } else {
          tr += chalk.grey('-'.repeat(j === 6 ? 10 : 11) + (j === 6 ? '|' : ''))
          if (j === 6) {
            line += 7
          }
        }
        break

      case 1:
        if (tmp.picked) {
          tr += chalk.bgRed.whiteBright.bold(' '.repeat(4) + tmp.day + ' '.repeat(4)) + VLINE
        } else {
          if (tmp.weekend) {
            tmp.day = chalk.redBright(tmp.day)
          } else {
            tmp.day = chalk.whiteBright(tmp.day)
          }
          tr += ' '.repeat(4) + tmp.day + ' '.repeat(4) + VLINE
        }
        break

      case 2:
        if (tmp.picked) {
          tr += chalk.bgRed(' '.repeat(10)) + VLINE
        } else {
          tr += ' '.repeat(10) + VLINE
        }
        break
    }
  }

  console.log(tr)
}
