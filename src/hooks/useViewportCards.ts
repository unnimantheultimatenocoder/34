import { useMemo } from 'react';
    import { type Article } from '@/lib/api';

    const useViewportCards = (allCards: Article[], currentIndex: number) => {
      const visibleCards = useMemo(() => {
        const start = Math.max(0, currentIndex - 1);
        const end = Math.min(allCards.length, currentIndex + 2);
        const cards = allCards.slice(start, end);
        console.log('useViewportCards - currentIndex:', currentIndex, 'visibleCards:', cards.map(card => card.id));
        return cards;
      }, [allCards, currentIndex]);

      return visibleCards;
    };

    export default useViewportCards;
