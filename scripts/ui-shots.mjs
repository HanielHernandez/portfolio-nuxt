import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const OUT = 'scripts/.shots'
mkdirSync(OUT, { recursive: true })

const pages = [
    { name: 'home', url: 'http://localhost:3000/en' },
    { name: 'about', url: 'http://localhost:3000/en/about-me' },
    { name: 'work', url: 'http://localhost:3000/en/my-work' }
]

const browser = await chromium.launch()

async function shoot(viewport, tag) {
    const ctx = await browser.newContext({ viewport })
    const page = await ctx.newPage()
    for (const p of pages) {
        for (const theme of ['light', 'dark']) {
            await page.goto(p.url, { waitUntil: 'networkidle' }).catch(() => {})
            await page.evaluate((t) => {
                const el = document.documentElement
                el.classList.remove('dark', 'light')
                el.classList.add(t)
            }, theme)
            await page.waitForTimeout(1200)
            await page.screenshot({ path: `${OUT}/${p.name}-${tag}-${theme}.png`, fullPage: true })
            console.log(`shot ${p.name}-${tag}-${theme}`)
        }
    }
    await ctx.close()
}

await shoot({ width: 1440, height: 900 }, 'desktop')
await shoot({ width: 390, height: 844 }, 'mobile')

await browser.close()
console.log('done')
