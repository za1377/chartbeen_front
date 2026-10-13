import styled from 'styled-components';

export const NavMenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-direction: row-reverse;

  /* موبایل: عمودی توی Drawer */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 4px;

    &:dir(rtl) {
      align-items: end;
    }
  }
`;

export const NavMenuItem = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.brand.secondary : theme.colors.brand.primary};
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 100%;
  text-align: start;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.primary};
    background: rgba(40, 132, 178, 0.1);
  }

  /* موبایل: افقی */
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    font-size: 0.9rem;

    color: ${({ $active, theme }) =>
      $active
        ? theme.colors.brand.secondary
        : theme.mode === 'dark'
          ? theme.colors.text.tertiary
          : theme.colors.brand.primary};

    &:dir(rtl) {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
  }

  /* دسکتاپ: عمودی (آیکون بالا، متن پایین) */
  @media (min-width: 769px) {
    flex-direction: column;
    gap: 2px;
    width: auto;
    padding: 6px 10px;
    font-size: 0.8rem;
  }
`;

export const NavMenuIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const SubMenuWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const SubMenuContent = styled.div<{ $open: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  inset-inline-end: 0;
  min-width: 160px;
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  padding: 6px;
  z-index: 100;

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transform: ${({ $open }) =>
    $open ? 'translateY(0)' : 'translateY(-8px)'};
  transition: all 0.2s ease-in-out;

  /* موبایل: static (نه absolute) */
  @media (max-width: 768px) {
    position: static;
    box-shadow: none;
    border: none;
    padding: 0;
    margin-top: 4px;
    min-width: 100%;
    opacity: 1;
    visibility: visible;
    transform: none;
    display: ${({ $open }) => ($open ? 'block' : 'none')};
  }
`;

export const SubMenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 12px;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: inherit;
  font-size: 13px;
  text-align: start;
  transition: background 0.15s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.background.secondary};
  }

  &:dir(rtl) {
    flex-direction: row-reverse;
  }
`;

export const SubMenuDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.border.primary};
  margin: 4px 0;
`;