import { useEffect } from 'react';
    import { type Article } from '@/lib/api';

    const useCardPreloader = (cards: Article[], currentIndex: number) => {
      const preloadCount = 3;

      useEffect(() => {
        if (!cards || cards.length === 0) {
          console.log('useCardPreloader - No cards to preload.');
          return;
        }

        console.log('useCardPreloader - currentIndex:', currentIndex);
        const preloadImages = cards
          .slice(currentIndex, currentIndex + preloadCount)
          .map(card => {
            if (!card.image_url) {
              console.log('useCardPreloader - No image URL for card:', card.id);
              return null;
            }
            const img = new Image();
            img.src = card.image_url;
            console.log('Preloading image:', img.src);
            return img;
          })
          .filter(Boolean);

        return () => {
            preloadImages.forEach(img => {
              if (img) {
                img.src = '';
              }
            });
          console.log('Unloading preloaded images');
        };
      }, [currentIndex, cards]);
    };

    export default useCardPreloader;
