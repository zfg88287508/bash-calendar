/**
 * {日历}
 * @author yutent<yutent.io@gmail.com>
 * @date 2021/11/29 09:59:26
 */

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
  var nums = getTotalDays(year, month)
  var numsFixed = 1 - getFirstDay(year, month)
  var today = getToday()
  var list = []

  for (let i = numsFixed; i <= nums; i++) {
    let day = {
      day: i < 1 ? '  ' : (i + '').padStart(2, '0')
    }
    if (i > 0) {
      let week = getFirstDay(year, month, i)
      day.weekend = week === 0 || week === 6
      day.picked = !!isPicked({ year, month, day: i }, today)
    }
    list.push(day)
  }
  while (list.length % 6 !== 0) {
    list.push({ day: '  ' })
  }
  return list
}
