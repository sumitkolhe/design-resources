import { NowRequest, NowResponse } from '@vercel/node'
import axios from 'axios'
import cheerio from 'cheerio'
import showdown from 'showdown'
import xray from 'x-ray'
const converter = new showdown.Converter()
converter.setFlavor('github')
const x = xray()

module.exports = (req: NowRequest, res: NowResponse) => {
  axios
    .get(
      'https://raw.githubusercontent.com/bradtraversy/design-resources-for-developers/master/readme.md'
    )
    .then((response) => {
      const converted_html = converter.makeHtml(response.data)
      const $ = cheerio.load(converted_html)

      let category_name: string
      let resources: Array<object> = []
      let websites: Array<object> = []
      let categories: Array<string> = []

      for (let iter = 0; iter < 29; iter++) {
        $('body')
          .children('h2')
          .eq(iter + 1)
          .each((i, elem) => {
            category_name = $(elem).text()
          })

        $('body')
          .children('h2')
          .eq(iter + 1)
          .each((i, elem) => {
            categories.push($(elem).text())
          })

        $('body')
          .children('table')
          .eq(iter)
          .children('tbody')
          .children('tr')
          .each((i, elem) => {
            resources[i] = {
              title: $(elem).children('td:first-child').text(),
              description: $(elem).children('td:nth-child(2)').text(),
              link: $(elem)
                .children('td:first-child')
                .children('a')
                .attr('href'),
              category: category_name,
            }
          })

        websites[iter] = resources
        resources = []
      }

      res.json({ categories, websites })
    })
    .catch(() => {
      res.json({ message: 'Something went wrong' })
    })
}
