import type { APIRoute } from 'astro';

export const prerender = false; // This must be server-rendered

export const GET: APIRoute = async () => {
  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
  const placeId = import.meta.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return new Response(JSON.stringify({
      error: 'Missing API configuration. Please set GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in .env'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    // Use the new Places API (New) instead of legacy API
    const url = `https://places.googleapis.com/v1/places/${placeId}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'displayName,rating,userRatingCount,reviews'
      }
    });
    
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Google Places API error: ${data.error?.message || response.statusText}`);
    }

    // Format the reviews for frontend consumption
    const reviews = data.reviews?.map((review: any) => ({
      author: review.authorAttribution?.displayName || 'Anonymous',
      rating: review.rating,
      text: review.text?.text || review.originalText?.text || '',
      time: new Date(review.publishTime).getTime() / 1000,
      relativeTime: review.relativePublishTimeDescription || '',
      profilePhoto: review.authorAttribution?.photoUri || '',
    })) || [];

    return new Response(JSON.stringify({
      businessName: data.displayName?.text || 'Blue Logic Water',
      averageRating: data.rating || 0,
      totalReviews: data.userRatingCount || 0,
      reviews,
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return new Response(JSON.stringify({
      error: 'Failed to fetch reviews',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
