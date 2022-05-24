export interface TweetOembed {
  author_name: string
  author_url: string
  cache_age: string
  height: number | null
  html: string
  provider_name: string
  provider_url: string
  type: string
  url: string
  version: string
  width: number | null
}

export interface TweetOptions {
  layout?: string
  css?: string
  show_original_link?: boolean
  enable_twemoji?: boolean
}

export interface ExportOptions {
  css: string
}
