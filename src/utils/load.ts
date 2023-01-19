import path from 'path'
import fs from 'fs'

// 读取指定目录下文件
export function load(dir, cb) {
  const url = path.resolve(dir)
  const files = fs.readdirSync(url)

  files.forEach(async (filename) => {
    filename = filename.replace('.ts', '')
    const file = await import(url + '/' + filename)
    cb(filename, file)
  })
}
