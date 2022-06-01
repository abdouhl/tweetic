import { TweetOptions } from "~~/interface"
import { constructHtmlv2, getTweetContent } from "../../_lib/parserv2"

export default defineEventHandler(async (event) => {
  const { url, layout, css, enable_twemoji } = useQuery(event)
  const id = url.toString().split("/")[5]

  const options: TweetOptions = {
    layout: layout?.toString(),
    css: css?.toString(),
    enable_twemoji: enable_twemoji ? JSON.parse(enable_twemoji.toString()) : false,
  }

  const data = await $fetch<{ [key: string]: string }>(`https://syndication.twitter.com/tweets.json?ids=${id}`)

  const tweetContent = getTweetContent(data, options)
  const html = constructHtmlv2(tweetContent, options)
  return { html, meta: tweetContent.meta, data }
})
