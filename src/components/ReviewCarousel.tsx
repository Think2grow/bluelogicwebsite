import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  author: string;
  rating: number;
  text: string;
  time: number;
  relativeTime: string;
  profilePhoto?: string;
}

interface ReviewData {
  businessName: string;
  averageRating: number;
  totalReviews: number;
  reviews: Review[];
}

export default function ReviewCarousel() {
  const [reviewData, setReviewData] = useState<ReviewData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews/');
      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setReviewData(data);
      }
    } catch (err) {
      setError('Failed to load reviews');
      console.error('Error fetching reviews:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const nextReview = () => {
    if (!reviewData) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviewData.reviews.length);
  };

  const prevReview = () => {
    if (!reviewData) return;
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? reviewData.reviews.length - 1 : prev - 1
    );
  };

  const goToReview = (index: number) => {
    if (!reviewData) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-advance every 8 seconds
  useEffect(() => {
    if (!reviewData || reviewData.reviews.length <= 1) return;

    const timer = setInterval(() => {
      nextReview();
    }, 8000);

    return () => clearInterval(timer);
  }, [currentIndex, reviewData]);

  // Render stars
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-4 justify-center md:justify-start">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="mt-4 text-muted-foreground">Loading reviews...</p>
      </div>
    );
  }

  if (error || !reviewData) {
    return (
      <div className="text-center py-12">
        <p className="text-error">{error || 'Unable to load reviews'}</p>
      </div>
    );
  }

  const currentReview = reviewData.reviews[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header with business stats */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-4xl font-bold text-foreground">
            {reviewData.averageRating.toFixed(1)}
          </span>
          <div>
            {renderStars(Math.round(reviewData.averageRating))}
            <p className="text-sm text-muted-foreground">
              Based on {reviewData.totalReviews} Google reviews
            </p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            <div className="bg-background p-8 rounded-2xl shadow-sm max-w-4xl mx-auto">
              {/* Stars */}
              {renderStars(currentReview.rating)}

              {/* Review Text */}
              <div className="mb-6">
                <p className="text-muted-foreground text-lg leading-relaxed italic whitespace-pre-wrap">
                  "{currentReview.text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                {currentReview.profilePhoto && (
                  <img
                    src={currentReview.profilePhoto}
                    alt={currentReview.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold text-foreground">
                    {currentReview.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {currentReview.relativeTime}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {/* Previous Button */}
        <button
          onClick={prevReview}
          className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors duration-200 text-foreground"
          aria-label="Previous review"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {reviewData.reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextReview}
          className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors duration-200 text-foreground"
          aria-label="Next review"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Google Logo Attribution */}
      <div className="text-center mt-6">
        <a
          href={`https://search.google.com/local/writereview?placeid=${import.meta.env.PUBLIC_GOOGLE_PLACE_ID || ''}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <span>Powered by</span>
          <svg className="w-16 h-6" viewBox="0 0 272 92" fill="none">
            <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
            <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
            <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
            <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
            <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
            <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
