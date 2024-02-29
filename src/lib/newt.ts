import { createClient, type Media } from 'newt-client-js'

export interface Tag {
  slug: string
  name: string
}

export interface Article {
  title: string
  slug: string
  body: string
  coverImage: Media
  tags?: Tag[]
}

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn'
})
