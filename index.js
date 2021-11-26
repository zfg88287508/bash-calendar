#!/usr/bin/env node

/**
 * {终端版万年历}
 * @author yutent<yutent.io@gmail.com>
 * @date 2021/11/26 17:20:02
 */

function print(...args) {
  args[0] = args[0].padEnd(20, ' ')
  if (args.length > 1) {
    args.splice(1, 0, '   -   ')
  }
  console.log.apply(null, args)
}

print('Hello calendar!')
