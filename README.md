# Payload CMS 3.x Starter Template

A headless CMS starter with Payload 3.x, PostgreSQL, and Docker support.

## Stack

- Payload CMS 3.x (Headless mode)
- PostgreSQL database
- Next.js 15 App Router (for Payload)
- TypeScript
- REST + GraphQL APIs
- Docker Compose for local development
- GitHub Actions CI/CD
- Vercel/Docker deployment ready

## Quick Start

```bash
# Create from template
gh repo create my-cms --template=owner/payload-starter

# Local development with Docker
cd my-cms
cp .env.example .env
docker-compose up -d

# Or local dev without Docker
npm install
npm run dev
```

## Environment Variables

```bash
# Database
DATABASE_URI=postgresql://user:password@localhost:5432/payload

# Payload
PAYLOAD_SECRET=your-secret-key-min-32-chars-long

# Storage (optional - for S3)
S3_BUCKET=
S3_ACCESS_KEY_ID=
S3_SECRET_ACCESS_KEY=
S3_REGION=
```

## Collections

- **Pages** - Static pages with rich text
- **Posts** - Blog posts with categories
- **Media** - Image uploads with resizing
- **Users** - Admin users with roles
- **Categories** - Post categories

## API Endpoints

- **REST API**: `/api/:collection`
- **GraphQL**: `/api/graphql`
- **Admin Panel**: `/admin`

### Example REST Queries

```bash
# Get all posts
curl http://localhost:3000/api/posts

# Get specific post
curl http://localhost:3000/api/posts/1

# Create post (with auth)
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"Hello","content":"World"}'
```

## Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run generate:importmap` - Generate Payload import map
- `npm run generate:types` - Generate TypeScript types
- `npm run payload` - Payload CLI

## Docker

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down

# Reset database
docker-compose down -v && docker-compose up -d
```

## Deployment

### Vercel

1. Connect GitHub repo to Vercel
2. Set environment variables
3. Deploy

### Docker

```bash
docker build -t payload-app .
docker run -p 3000:3000 --env-file .env payload-app
```

## Features

- [x] Payload CMS 3.x with headless mode
- [x] PostgreSQL adapter
- [x] Admin panel at `/admin`
- [x] REST API endpoints
- [x] GraphQL API
- [x] Example collections (Pages, Posts, Media, Users, Categories)
- [x] Authentication with access control
- [x] Docker Compose for local dev
- [x] GitHub Actions CI/CD
- [x] Vercel deployment config
- [x] TypeScript strict mode

## License

MIT
