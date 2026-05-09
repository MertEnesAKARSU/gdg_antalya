---
name: Artisanal Warmth
colors:
  surface: '#fff8f5'
  surface-dim: '#e4d8d0'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fef1e9'
  surface-container: '#f8ebe4'
  surface-container-high: '#f3e6de'
  surface-container-highest: '#ede0d8'
  on-surface: '#201a16'
  on-surface-variant: '#504442'
  inverse-surface: '#362f2a'
  inverse-on-surface: '#fbeee6'
  outline: '#827472'
  outline-variant: '#d3c3c0'
  surface-tint: '#745853'
  primary: '#271310'
  on-primary: '#ffffff'
  primary-container: '#3e2723'
  on-primary-container: '#ae8d87'
  inverse-primary: '#e3beb8'
  secondary: '#605e59'
  on-secondary: '#ffffff'
  secondary-container: '#e6e2db'
  on-secondary-container: '#66645f'
  tertiary: '#0e1c03'
  on-tertiary: '#ffffff'
  tertiary-container: '#223115'
  on-tertiary-container: '#889a75'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#e3beb8'
  on-primary-fixed: '#2b1613'
  on-primary-fixed-variant: '#5b403c'
  secondary-fixed: '#e6e2db'
  secondary-fixed-dim: '#cac6bf'
  on-secondary-fixed: '#1d1c18'
  on-secondary-fixed-variant: '#484742'
  tertiary-fixed: '#d5e9bf'
  tertiary-fixed-dim: '#b9cda4'
  on-tertiary-fixed: '#111f05'
  on-tertiary-fixed-variant: '#3b4c2c'
  background: '#fff8f5'
  on-background: '#201a16'
  surface-variant: '#ede0d8'
typography:
  headline-xl:
    fontFamily: ebGaramond
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: ebGaramond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-md:
    fontFamily: ebGaramond
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  headline-sm:
    fontFamily: ebGaramond
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: plusJakartaSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: plusJakartaSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: plusJakartaSans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: plusJakartaSans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-xl-mobile:
    fontFamily: ebGaramond
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 80px
---

## Brand & Style

The visual identity of this design system centers on the concept of "The Slow Pour"—an aesthetic that prioritizes intentionality, craftsmanship, and comfort. It is designed to feel "Instagram-friendly," meaning every screen should possess a photographic quality characterized by balanced compositions and a sophisticated, organic feel.

The style is **Minimalist with Tactile Warmth**. It avoids the sterile coldness of traditional minimalism by utilizing a palette of rich, earthy tones and soft, human-centric shapes. The emotional response should be one of "Visual Tranquility"—inviting the user to linger, much like the atmosphere of a high-end, independent neighborhood roastery. High-quality imagery of latte art, burlap textures, and ceramic glazes should be integrated as primary decorative elements.

## Colors

The palette is derived from the coffee-making process. The primary color is a **Deep Espresso Brown**, used for typography and high-contrast UI elements to provide grounding and authority. The background is a **Creamy Beige**, which acts as a softer, more sophisticated alternative to pure white, reducing eye strain and enhancing the cozy atmosphere.

Accents are used sparingly to guide the eye and denote action. **Muted Sage** provides a calming, organic touch for success states or organic product highlights, while **Terracotta** offers a warm, sun-baked energy for call-to-actions and promotional highlights. Neutral tones are kept warm (taupes and soft grays) to maintain the "creamy" aesthetic throughout the interface.

## Typography

Typography in this design system creates a dialogue between tradition and modernity. **EB Garamond** is utilized for all headings to evoke a sense of heritage, literary sophistication, and artisanal care. It should be typeset with generous leading to maintain its elegant silhouette.

**Plus Jakarta Sans** serves as the functional workhorse for body text and interface labels. Its soft, rounded terminals complement the "cozy" brand pillars while ensuring maximum legibility on small screens. Labels and small metadata should use a slightly increased letter spacing and semi-bold weights to maintain clarity against the creamy background tones.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy for desktop to create a curated, editorial look, centering content to mimic the layout of a premium lifestyle magazine. On mobile, it transitions to a fluid model with generous margins to ensure elements never feel cramped.

The spacing rhythm is built on an **8px base unit**. "Generous Whitespace" is a functional requirement; sections should be separated by large gaps (80px+) to allow the eye to rest and to signify a premium, unhurried experience. Elements within a group (like a coffee card’s title and price) should use tight spacing (8px-12px), while the groups themselves should be spaced widely (32px+).

## Elevation & Depth

Depth is achieved through **Ambient Shadows** and tonal layering. Rather than harsh black shadows, this design system uses soft, diffused shadows tinted with the primary coffee brown at very low opacities (8-12%). This creates the illusion that elements are gently resting on a surface rather than hovering in a digital void.

We utilize a "Surface-on-Surface" approach: 
1. **Base Layer:** Creamy Beige.
2. **Elevated Layer:** Pure White or a slightly lighter cream, used for cards and floating menus.
3. **Interactive Layer:** Subtle 1px borders in a muted taupe or the secondary accent color to provide definition without adding visual weight.

Backdrop blurs (Glassmorphism) may be used sparingly on navigation bars to suggest the translucency of steamed milk, but only when over high-quality imagery.

## Shapes

The shape language is organic and approachable. We avoid sharp 90-degree angles to maintain the "cozy" aesthetic. A **Rounded (Level 2)** standard is applied to all primary containers and buttons. 

For imagery, a mix of standard rounded corners and occasional asymmetrical "organic" masks (resembling liquid splashes or ceramic vessels) can be used to reinforce the artisanal brand narrative. Icons should follow a "line-art" style with rounded caps and joins, matching the stroke weight of the body typography.

## Components

### Buttons
Primary buttons use the Deep Coffee Brown with white text for maximum impact. Secondary buttons should use the Terracotta accent or a "Ghost" style with a 1.5px border. All buttons must have a height of at least 48px to ensure a "tactile" feel.

### Cards
Cards for products (e.g., "Single Origin Roast") should be borderless with a soft ambient shadow. Use a high-ratio image (4:5 or 1:1) to mirror the Instagram aesthetic. Text within cards should be center-aligned or left-aligned with significant internal padding (24px).

### Input Fields
Fields use a soft-filled background (a shade darker than the page background) rather than a white box. The active state is indicated by a subtle Terracotta bottom border or a soft glow.

### Chips & Tags
Use the Muted Sage and Terracotta colors for tags (e.g., "New Arrival," "Limited Batch"). These should be pill-shaped with small-caps labels to distinguish them from interactive buttons.

### Additional Elements
- **Artisanal Dividers:** Use thin, short lines or subtle "bean" icons instead of full-width horizontal rules.
- **Micro-interactions:** Transitions should be slow and ease-in-out, mimicking the "slow pour" philosophy. Avoid "snappy" or "aggressive" animations.
