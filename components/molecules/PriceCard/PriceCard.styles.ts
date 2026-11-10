import styled, { css } from 'styled-components';

export const CardWrapper = styled.button<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0.5rem 2rem;
  background: ${({ theme }) => theme.colors.background.primary};
  border: 2px solid ${({ theme }) => theme.colors.border.lightBlue};
  border-radius: 20px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.25s ease-in-out;
  /* width: 100%; */
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.colors.brand.secondary};
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      background: ${theme.colors.brand.light};
      border: 5px solid ${theme.colors.brand.primary};

      &:hover {
        border-color: ${theme.colors.brand.primary};
      }
    `}
`;

export const CardTitle = styled.span`
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`;

export const CardImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;