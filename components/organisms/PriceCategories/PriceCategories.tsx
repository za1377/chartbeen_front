'use client';

import { useTranslations } from 'next-intl';
import { PriceCard } from '@/components/molecules/PriceCard';
import { SectionWrapper, PriceGrid, Description } from './PriceCategories.styles';

const priceCategories = [
  { key: 'gold', iconSrc: '/image/svg/gold.svg' },
  { key: 'coin', iconSrc: '/image/svg/coin.svg' },
  { key: 'dollar', iconSrc: '/image/svg/dollar.svg' },
  { key: 'euro', iconSrc: '/image/svg/euro.svg' },
  { key: 'bitcoin', iconSrc: '/image/svg/bitcoin.svg' },
  { key: 'ethereum', iconSrc: '/image/svg/ethereum.svg' },
];

export function PriceCategories() {
  const t = useTranslations('hero');

  return (
    <SectionWrapper>
      <PriceGrid>
        {priceCategories.map((category, index) => (
          <PriceCard
            key={category.key}
            title={t(category.key)}
            iconSrc={category.iconSrc}
            active={index === 0}
            onClick={() => console.log('Selected:', category.key)}
          />
        ))}
      </PriceGrid>

      <Description>{t('description')}</Description>
    </SectionWrapper>
  );
}

export default PriceCategories;