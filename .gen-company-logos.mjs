import sharp from 'sharp'
import { readFile } from 'node:fs/promises'

const names = [
  'katalis',
  'platon',
  'linkpos',
  'oxy',
  'tekenaja',
  'cikajogja',
  'kadang-koding',
]

for (const name of names) {
  const svg = await readFile(`public/company/${name}.svg`)
  await sharp(svg)
    .resize(512, 512)
    .png({ compressionLevel: 9 })
    .toFile(`public/company/${name}.png`)
  await sharp(svg)
    .resize(512, 512)
    .webp({ quality: 90 })
    .toFile(`public/company/${name}.webp`)
  console.log(`generated ${name}.png + ${name}.webp`)
}
