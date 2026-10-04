import {
  LuHouse,           
  LuInfo,            
  LuBookOpen,        
  LuSettings,        
  
  LuSun,             
  LuMoon,            
  LuGlobe,           
  
  LuMail,           
  LuPhone,           
  
  LuLinkedin,        
  LuSend,            
  
  LuTrendingUp,      
  LuTrendingDown,    
  LuChartCandlestick,
  LuChartLine,       
  
  LuSearch,          
  LuRocket,          
  LuTrash2,          
  LuPencil,          
  LuPlus,            
  LuCircleCheck,     
  LuCircleAlert,     
  LuLoaderCircle,    
} from 'react-icons/lu';

export const iconMap = {
  home: LuHouse,
  info: LuInfo,
  blog: LuBookOpen,
  settings: LuSettings,
  
  sun: LuSun,
  moon: LuMoon,
  globe: LuGlobe,
  
  mail: LuMail,
  phone: LuPhone,
  
  linkedin: LuLinkedin,
  telegram: LuSend,
  
  trendingUp: LuTrendingUp,
  trendingDown: LuTrendingDown,
  chartCandle: LuChartCandlestick,
  chartLine: LuChartLine,
  
  search: LuSearch,
  rocket: LuRocket,
  trash: LuTrash2,
  pencil: LuPencil,
  plus: LuPlus,
  check: LuCircleCheck,
  alert: LuCircleAlert,
  loader: LuLoaderCircle,
} as const;

export type IconName = keyof typeof iconMap;