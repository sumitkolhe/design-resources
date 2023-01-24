import { load } from 'cheerio'
import showdown from 'showdown'

interface Resource {
  name: string
  description: string
  websites: {
    title: string
    description: string
    link: string
    icon: string
  }[]
}

const converter = new showdown.Converter()
converter.setFlavor('github')

export default defineEventHandler(async () => {
  const response = await $fetch<string>(
    'https://raw.githubusercontent.com/bradtraversy/design-resources-for-developers/master/readme.md'
  )

  const convertedHtml = converter.makeHtml(response)

  const $ = load(convertedHtml)

  const resources: Resource[] = []

  $('body')
    .children('table')
    .children('tbody')
    .children('tr')
    .each((_, elem) => {
      const name = $(elem)?.parent()?.parent()?.prev()?.prev()?.text()
      const summary = $(elem)?.parent()?.parent()?.prev()?.text()?.replaceAll('\n', '')?.trim()
      const title = $(elem).children('td:first-child').text()
      const description = $(elem).children('td:nth-child(2)').text()
      const link = $(elem).children('td:first-child').children('a').attr('href') || ''
      const logo = `https://logo.clearbit.com/${$(elem).children('td:first-child').children('a').attr('href')}`

      const elementIndex = resources.map((r) => r.name).indexOf(name)

      // if resource doesnt already exist
      if (elementIndex === -1) {
        resources.push({
          name,
          description: summary,
          websites: [
            {
              title,
              description,
              link,
              icon: logo,
            },
          ],
        })
      } else {
        resources[elementIndex].websites.push({
          title,
          description,
          link,
          icon: logo,
        })
      }
    })

  return resources
})
