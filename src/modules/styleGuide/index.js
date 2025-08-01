import React from 'react'
import styles from './styleGuide.module.scss';
import StyleGuideBanner from './styleGuideBanner';
import BrandIdentity from './brandIdentity';
import BrandColors from './brandColors';
import GallerySection from './gallerySection';
import Gamergebanner from './gamergebanner';
import TypographyStyleguide from './typographyStyleguide';
import MainGallery from './mainGallery';
export default function StyleGuide() {
  return (
    <div>
      <StyleGuideBanner/>
      <BrandColors/>
      <BrandIdentity/>
      <GallerySection/>
      <Gamergebanner/>
      <TypographyStyleguide/>
      <MainGallery/>
    </div>
  )
}
