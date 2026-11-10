import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 40px 0;
`;

export const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 600px;
  padding: 1rem ;
  direction: rtl;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    max-width: 400px;
  }
`;

export const Description = styled.h2`
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin: 20px 0;
  line-height: 1.6;
  direction: rtl;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 12px 0;
  }
`;