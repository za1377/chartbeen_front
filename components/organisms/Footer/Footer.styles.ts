import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: sticky;
  bottom: 0;
  background: ${({ theme }) => theme.colors.brand.primary};
  color: white;
  padding: 40px 2.5rem;
  margin-top: 40px;

  @media (max-width: 768px) {
    padding: 24px 1rem;
  }
`;

export const FooterContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 24px;
  }
`;

// ===== بخش برند (چپ) =====
export const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background-color: #E1E1E3;
  border-radius: 10px;
  padding: 2rem 4rem;
  rotate: -8deg;
  position: relative;

  @media (max-width: 768px) {
    background-color: inherit;
    padding: 0rem;
    rotate: 0deg;
  }

`;

export const BrandName = styled.span`
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const WhiteCircle = styled.span`
  width: 15px;
  height: 15px;
  position: absolute;
  background-color: white;
  border-radius: 50%;

  @media (max-width: 768px) {
    display: none;
  }

  &.one {
    top: 7%;
    left: 5%;
  }
  &.two {
    top: 7%;
    right: 5%;
  }
  &.three {
    bottom: 7%;
    left: 5%;
  }
  &.four {
    bottom: 7%;
    right: 5%;
  }
`

// ===== بخش ارتباطات (راست) =====
export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const ContactTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: white;
  margin: 0;
`;

export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  font-size: 0.95rem;
  transition: opacity 0.2s ease-in-out;
  direction: rtl;

  &:hover {
    opacity: 0.8;
  }

  /* &:dir(rtl) {
    flex-direction: row-reverse;
  } */
`;

export const ContactIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

// ===== شبکه‌های اجتماعی =====
export const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
`;