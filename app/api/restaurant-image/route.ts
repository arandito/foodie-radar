import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const photoReference = searchParams.get('photoReference')
  const maxHeightPx = searchParams.get('maxHeightPx')
  const maxWidthPx = searchParams.get('maxWidthPx')

  if (!photoReference || !maxHeightPx || !maxWidthPx) {
    return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 })
  }

  const url = `https://places.googleapis.com/v1/${photoReference}/media?maxHeightPx=${maxHeightPx}&maxWidthPx=${maxWidthPx}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`

  try {
    const response = await fetch(url)
    const contentType = response.headers.get('content-type')

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Error response from Google Places API:', errorText)
      return NextResponse.json({ error: 'Failed to fetch image from Google Places API', details: errorText }, { status: response.status })
    }

    if (!contentType?.startsWith('image/')) {
      const errorText = await response.text()
      console.error('Unexpected content type from Google Places API:', contentType, 'Response:', errorText)
      return NextResponse.json({ error: 'Received non-image response from Google Places API', contentType, details: errorText }, { status: 500 })
    }

    const buffer = await response.arrayBuffer()
    
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800'
      }
    })
  } catch (error) {
    console.error('Error fetching image:', error)
    return NextResponse.json({ error: 'Failed to fetch image'}, { status: 500 })
  }
}