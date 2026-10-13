
import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;          
  top: 0;                    
  z-index: 50;               
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 2.5rem;
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? theme.colors.brand.light
      : theme.colors.brand.light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: 130px 0px 130px 0px;          // ← گردی رو بردار
  gap: 16px;
  flex-wrap: wrap;
  width: 100%;               
  box-sizing: border-box;   
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
`;

export const LogoSubtitle = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.brand.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 768px) {
    gap: 2px;
  }
`;

export const NavLink = styled.button<{ $active?: boolean }>`
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
    $active ? theme.colors.brand.primary : theme.colors.text.secondary};
  font-family: inherit;
  font-size: 11px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.primary};
    background: rgba(40, 132, 178, 0.1);
  }

  @media (max-width: 768px) {
    padding: 4px 6px;
    font-size: 10px;
  }
`;

export const NavIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;