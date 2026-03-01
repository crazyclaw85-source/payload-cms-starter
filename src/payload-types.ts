// this file helps TypeScript know about the Payload types
// generate types with: npm run generate:types

declare module 'payload' {
  export interface GeneratedTypes {
    collections: {
      users: User
      pages: Page
      posts: Post
      media: Media
      categories: Category
    }
  }
}

export interface User {
  id: number
  email: string
  name?: string
  role: 'admin' | 'editor' | 'user'
  createdAt: string
  updatedAt: string
}

export interface Page {
  id: number
  title: string
  slug: string
  content: any
  meta?: {
    title?: string
    description?: string
  }
  status: 'draft' | 'published'
  createdAt: string
  updatedAt: string
}

export interface Post {
  id: number
  title: string
  slug: string
  excerpt?: string
  content: any
  author: number | User
  category?: (number | Category)[]
  featuredImage?: number | Media
  publishedDate?: string
  status: 'draft' | 'published'
  tags?: { tag: string }[]
  createdAt: string
  updatedAt: string
}

export interface Media {
  id: number
  alt: string
  caption?: string
  filename: string
  mimeType: string
  filesize: number
  width: number
  height: number
  sizes: {
    thumbnail?: MediaSize
    card?: MediaSize
    tablet?: MediaSize
  }
  createdAt: string
  updatedAt: string
}

interface MediaSize {
  url: string
  width: number
  height: number
  mimeType: string
  filesize: number
  filename: string
}

export interface Category {
  id: number
  name: string
  slug: string
  description?: string
  createdAt: string
  updatedAt: string
}