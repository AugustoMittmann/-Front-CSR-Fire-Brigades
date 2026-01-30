# Artigos e Notícias Page

This page displays articles and news from fire brigades across Brazil.

## Location
`/artigosPage` - http://localhost:3000/artigosPage

## Features

1. **Article Cards** - Display news articles with:
   - Category badge (Campanha, Boas Práticas, Artigo, Notícia)
   - Featured image
   - Article title overlaid on image
   - Brief description
   - Arrow button to read full article

2. **Filter Button** - Top right filter icon to filter articles by category

3. **Call-to-Action Section** - Bottom section with:
   - "Juntos somos mais fortes" banner image
   - Descriptive text about brigade collaboration
   - Instagram link
   - FAQ link

4. **Copyright Footer** - RNBV copyright notice

## Components

- **Main Page**: `/src/app/artigosPage/page.js`
- **Article Card**: `/src/app/artigosPage/components/articleCard.js`
- **Styles**:
  - `/src/app/artigosPage/artigosPage.module.css`
  - `/src/app/artigosPage/components/articleCard.module.css`

## Images

- `/public/placeholder-brigade.svg` - Placeholder image for articles
- `/public/juntos-somos-fortes.svg` - CTA banner image

## Design Colors

- **Campanha**: #1E88E5 (Blue)
- **Boas Práticas**: #7CB342 (Green)
- **Artigo**: #F9A825 (Yellow/Gold)
- **Notícia**: #D32F2F (Red)

## Customization

To add real articles, update the `articles` array in `/src/app/artigosPage/page.js` with actual data. You can fetch this from an API or CMS.
