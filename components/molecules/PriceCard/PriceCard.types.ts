export interface PriceCardProps {
  title: string;
  iconSrc: string;       // مسیر SVG/عکس
  active?: boolean;      // کارت انتخاب‌شده 
  onClick?: () => void;
}