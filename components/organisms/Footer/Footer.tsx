'use client';

import { useTranslations } from 'next-intl';
import { Icon } from '@/components/atoms/Icon';
import {
  StyledFooter,
  FooterContainer,
  BrandSection,
  BrandName,
  ContactSection,
  ContactTitle,
  ContactItem,
  ContactIcon,
  SocialIcons,
  SocialLink,
  WhiteCircle,
} from './Footer.styles';
import type { ContactItem as ContactItemType, SocialItem } from './Footer.types';

export function Footer() {
  const t = useTranslations('footer');

  const contactItems: ContactItemType[] = [
    {
      key: 'email',
      icon: 'mail',
      label: 'chartbeen05@gmail.com',
      href: 'mailto:chartbeen05@gmail.com',
    },
    {
      key: 'phone',
      icon: 'phone',
      label: '09931633857',
      href: 'tel:+989931633857',
    },
  ];

  const socialItems: SocialItem[] = [
    {
      key: 'rubika',
      iconSrc: '/image/svg/rubika-logo.svg',
      label: 'Rubika',
      href: 'https://rubika.ir/',
    },
    {
      key: 'bale',
      iconSrc: '/image/svg/bale-logo.svg',
      label: 'Bale',
      href: 'https://bale.ai/',
    },
    {
      key: 'eitaa',
      iconSrc: '/image/svg/eta-logo.svg',
      label: 'Eitaa',
      href: 'https://eitaa.com/',
    },
    {
      key: 'linkedin',
      iconSrc: '/image/svg/linkedin-logo.svg',
      label: 'LinkedIn',
      href: 'https://linkedin.com/',
    },
  ];

  return (
    <StyledFooter>
      <FooterContainer>
        {/* برند */}
        <BrandSection>

          <WhiteCircle className='one'/>
          <WhiteCircle className='two'/>
          <WhiteCircle className='three'/>
          <WhiteCircle className='four'/>

          <BrandName>chartbeen</BrandName>

          {/* شبکه‌های اجتماعی */}
          <SocialIcons>
            {socialItems.map((social) => (
              <SocialLink
                key={social.key}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <img src={social.iconSrc} alt={social.label} />
              </SocialLink>
            ))}
          </SocialIcons>
        </BrandSection>

        {/* ارتباطات */}
        <ContactSection>
          <ContactTitle>{t('contactTitle')}</ContactTitle>

          {contactItems.map((item) => (
            <ContactItem key={item.key} href={item.href}>
              <ContactIcon>
                <Icon name={item.icon as any} size="sm" color="inherit" />
              </ContactIcon>
              {item.label}
            </ContactItem>
          ))}


        </ContactSection>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;