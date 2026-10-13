import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 3rem;
  background: ${({ theme }) => theme.colors.brand.light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: 130px 0px 130px 0px;
  gap: 16px;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px 1rem;
    border-radius: 60px 0px 60px 0px;
    gap: 10px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }

  svg {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  align-items: center;
`;

export const LogoTitle = styled.span`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.brand.primary};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const LogoSubtitle = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.brand.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

// ===== دسکتاپ: NavMenu =====
export const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 768px) {
    display: none;
  }
`;

// ===== موبایل: دکمه‌ی همبرگری =====
export const HamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: ${({ theme }) => theme.colors.brand.primary};
  border-radius: 8px;
  transition: background 0.2s;

  &:hover {
    background: rgba(40, 132, 178, 0.1);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// ===== Backdrop =====
export const Backdrop = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 90;
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
    transition: all 0.3s ease-in-out;
  }
`;

// ===== Drawer (منوی موبایل) =====
export const Drawer = styled.aside<{ $open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    inset-inline-end: 0;
    width: 280px;
    max-width: 80vw;
    background: ${({ theme }) => theme.colors.background.primary};
    z-index: 100;
    box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease-in-out;
    overflow-y: auto;
    transform: ${({ $open }) =>
    $open ? 'translateX(0)' : 'translateX(100%)'};
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
`;

export const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
`;

export const DrawerCloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.background.secondary};
  }
`;

export const DrawerBody = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;