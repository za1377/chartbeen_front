import styled from 'styled-components';

export const NavMenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const NavMenuItem = styled.button<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 10px;
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

  &:hover {
    color: ${({ theme }) => theme.colors.brand.primary};
    background: rgba(40, 132, 178, 0.1);
  }
`;

export const NavMenuIcon = styled.span`
  font-size: 1rem;
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