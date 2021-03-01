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
      var websites: any = []
      var output = []
      var category = ''
      var categoryList: any = []
      var iter = 0
      const $ = cheerio.load(converted_html)

      for (iter = 0; iter < 28; iter++) {
        $('body')
          .children('h2')
          .eq(iter + 1)
          .each((i, elem) => {
            category = $(elem).text()
          })

        $('body')
          .children('h2')
          .eq(iter + 1)
          .each((i, elem) => {
            categoryList.push($(elem).text())
          })

        $('body')
          .children('table')
          .eq(iter)
          .children('tbody')
          .children('tr')
          .each((i, elem) => {
            websites[i] = {
              title: $(elem).children('td:first-child').text(),
              description: $(elem).children('td:nth-child(2)').text(),
              link: $(elem)
                .children('td:first-child')
                .children('a')
                .attr('href'),
              category: category,
            }
          })
        category = category.split(' ').join('_').toLowerCase()
        output[iter] = websites // { [category]: websites };   for with category name per array
        websites = []
      }
      output.splice(4, 1)
      output.splice(18, 1)
      categoryList.splice(4, 1)
      categoryList.splice(18, 1)

      res.json({ categoryList, output })
    })
    .catch(() => {
      res.json({ message: 'Some error occurred' })
    })
}
