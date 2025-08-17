# OpenxAI Website Content Requirements

This document outlines the content specifications for each component in the OpenxAI website. It includes guidelines on content type, word count, character limits, and formatting requirements to ensure optimal display and user experience.

## Table of Contents
- [Navbar](#navbar)
- [Hero Section](#hero-section)
- [About Section](#about-section)
- [Services Section](#services-section)
- [Models Section](#models-section)
- [Comparison Models](#comparison-models)
- [Blogs Section](#blogs-section)
- [Footer](#footer)

---

## Navbar

### Component Overview
The navigation bar is the primary navigation element that appears at the top of the website across all pages.

### Content Requirements

#### Logo
- **Type**: Text or Image
- **Text Option**: 
  - Max length: 15 characters
- **Image Option**: 
  - Format: SVG, PNG, or WebP
  - Dimensions: 120x40px (recommended)
  - Background: Transparent

#### Navigation Links
- **Count**: 4-8 links (optimal: 6 links)
- **Label Requirements**:
  - Max length: 20 characters per label
  - Should be clear and descriptive
  - Use title case (e.g., "Core Platform" not "core platform")
- **Current Links**:
  1. Vision (6 chars)
  2. Core Platform (13 chars)
  3. Community (9 chars)
  4. Contribute & Earn (17 chars)
  5. DAO (3 chars)
  6. Docs (4 chars)

#### CTA Button
- **Type**: Call-to-action button
- **Text Requirements**:
  - Max length: 15 characters
  - Examples: "Get Started", "Try Now", "Sign Up"
  - Current: "Get Started" (11 chars)
- **Icon** (Optional):
  - Format: SVG icon
  - Size: 16x16px
  - Should complement the text

---

## Hero Section

### Component Overview
The hero section is the main focal point of the landing page, featuring a large heading and primary call-to-action button. It includes animated elements and serves as the first impression for users.

### Content Requirements

#### Main Heading (H1)
- **Type**: Primary headline text
- **Character Limits**:
  - Optimal: 30-50 characters
  - Maximum: 80 characters (to prevent wrapping issues)
  - Mobile consideration: Should work well on small screens
- **Word Count**: 3-8 words (optimal: 4-6 words)
- **Current**: "Build, Rent, Consume AI from Anyway" (39 chars, 7 words)

#### CTA Button
- **Type**: Primary action button
- **Text Requirements**:
  - Max length: 12 characters
  - Should be action-oriented and urgent
  - Examples: "Launch Now", "Get Started", "Try Free", "Start Build"
  - Current: "Launch Now" (10 chars)

---

## About Section

### Component Overview
The About section introduces the company's mission and vision, accompanied by key statistics that build credibility and showcase achievements. It includes animated text reveals and statistics cards.

### Content Requirements

#### Section Title
- **Type**: H1 heading
- **Character Limits**:
  - Optimal: 8-15 characters
  - Maximum: 25 characters
- **Current**: "About us" (8 chars - perfect)

#### Main Description Text
- **Type**: Mission/vision statement paragraph
- **Character Limits**:
  - Optimal: 200-400 characters
  - Maximum: 600 characters
  - Current: 441 characters (within optimal range)
- **Word Count**: 
  - Optimal: 30-60 words
  - Current: 67 words (slightly over optimal)
- **Current Content**: "AI is the most powerful technology humanity has ever created..." (441 chars)

#### Statistics Cards
- **Count**: 3 or 6 cards (optimal: 3-6 cards)
- **Current**: 3 active cards
- **Layout**: Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)

##### Individual Statistic Requirements:
**Statistic Value**:
- **Type**: Number, percentage, or metric
- **Character Limits**: 
  - Optimal: 1-4 characters
  - Maximum: 8 characters
- **Format**: Numbers, percentages, ranges (e.g., "10", "30+", "93%")
- **Current Values**: "10", "30+", "93%" (all optimal)

**Statistic Description**:
- **Character Limits**:
  - Optimal: 60-120 characters
  - Maximum: 150 characters
- **Word Count**: 10-20 words
- **Current**: All descriptions are 79 characters (optimal)

**Icons**:
- **Available Icons**: monitor, brain, trending, network, server, marketplace, gpu, api, contract, tools
- **Current Usage**: "monitor", "network", "trending"
- **Requirements**: Should relate to the statistic content

---

## Services Section

### Component Overview
The Services section showcases the platform's offerings with interactive category filtering. Users can toggle between "Creator" and "Consumer" categories to view relevant services, each represented by icon cards.

### Content Requirements

#### Section Title
- **Type**: H1 heading
- **Character Limits**:
  - Optimal: 15-30 characters
  - Maximum: 50 characters
- **Current**: "How OpenxAI can help you" (24 chars - optimal)

#### Subtitle Description
- **Type**: Explanatory paragraph
- **Character Limits**:
  - Optimal: 80-150 characters
  - Maximum: 200 characters
- **Current**: "Build ontop of the most established industry frameworks for AI on Solana, including the Tars proprietary framework." (120 chars - optimal)
- **Word Count**: 
  - Optimal: 12-25 words
  - Current: 17 words (perfect)

#### Category Toggle System
- **Type**: Interactive filter buttons
- **Count**: 2-4 categories (optimal: 2-3)
- **Current**: 2 categories ("Creator", "Consumer")
- **Label Requirements**:
  - Max length: 12 characters per category
  - Should be clear user types/roles
  - Single words preferred for mobile
- **Current Labels**: "Creator" (7 chars), "Consumer" (8 chars) - both optimal

#### Service Cards
- **Total Count**: 6-12 services (current: 6 services)
- **Distribution**: Should be balanced across categories
- **Current Distribution**:
  - Creator: 4 services (67%)
  - Consumer: 2 services (33%)
- **Layout**: Responsive grid (1/2/4 columns)
- **Card Variant**: Style2 (fixed dimensions: 256x192px)

##### Individual Service Requirements:

**Service Title**:
- **Character Limits**:
  - Optimal: 12-20 characters
  - Maximum: 25 characters (to prevent wrapping in card)
- **Current Services**:
  1. "Decentralized Hosting & VMs" (27 chars - **over limit**)
  2. "AI Model Marketplace" (20 chars - optimal)
  3. "Compute Resources" (17 chars - optimal)
  4. "API Gateway" (11 chars - optimal)
  5. "Smart Contracts" (15 chars - optimal)
  6. "Developer Tools" (15 chars - optimal)

**Service Icons**:
- **Available Icons**: server, marketplace, gpu, api, contract, tools
- **Current Usage**: All 6 icons are used appropriately
- **Requirements**: Should visually represent the service type
- **Icon Mapping**: Each service has appropriate icon selection

**Service Categories**:
- **Values**: Must match category toggle options exactly
- **Current**: Properly aligned with "Creator" and "Consumer"
- **Requirements**: Each service must belong to one category

---

## Models Section

### Component Overview
The Models section showcases available AI models in a horizontal scrolling carousel format. Each model is displayed as an image card with detailed information including category, description, versions, and last updated date.

### Content Requirements

#### Section Title
- **Type**: H1 heading
- **Character Limits**:
  - Optimal: 20-35 characters
  - Maximum: 50 characters
- **Current**: "Ultimate apps are at OpenxAI" (29 chars - optimal)

#### Subtitle Description
- **Type**: Explanatory paragraph
- **Character Limits**:
  - Optimal: 80-150 characters
  - Maximum: 200 characters
- **Current**: "Build ontop of the most established industry frameworks for AI on Solana, including the Tars proprietary framework." (120 chars - optimal)
- **Word Count**: 
  - Optimal: 12-25 words
  - Current: 17 words (perfect)
- **Note**: Same content as Services section (consider variation)

#### Model Cards
- **Total Count**: 4-8 models (current: 6 models)
- **Layout**: Horizontal scrolling carousel with snap points
- **Card Dimensions**: Fixed 320x400px cards

##### Individual Model Requirements:

**Model Name**:
- **Character Limits**:
  - Optimal: 8-15 characters
  - Maximum: 20 characters
- **Current Models**:
  1. "Qwen" (4 chars - optimal)
  2. "Qwen Coder" (10 chars - optimal)
  3. "Qwen VL" (7 chars - optimal)
  4. "Qwen Audio" (10 chars - optimal)
  5. "Qwen Max" (8 chars - optimal)
  6. "Qwen Multimodal" (15 chars - optimal)

**Model Description**:
- **Character Limits**:
  - Optimal: 60-120 characters
  - Maximum: 150 characters (due to line-clamp-3)
- **Word Count**: 10-20 words
- **Current Descriptions**: All around 80-100 characters (optimal)

**Category Labels**:
- **Available Categories**: "All", "General", "Code", "Vision", "Audio", "Multimodal"
- **Character Limits**: 
  - Optimal: 5-12 characters
  - Maximum: 15 characters
- **Current Usage**: 
  - "General" (7 chars) - used 2x
  - "Code" (4 chars)
  - "Vision" (6 chars)
  - "Audio" (5 chars)
  - "Multimodal" (10 chars)
- **Display**: Shown as badge in card header and footer label

**Model Images**:
- **Format**: JPG, PNG, WebP recommended
- **Dimensions**: Should work well at 320x192px display size
- **Current**: All use "/qwen-hero.jpg" (needs unique images per model)
- **Requirements**: 
  - High quality, professional appearance
  - Should represent model type/category
  - Alt text required for accessibility

**Version Information**:
- **Format**: Number with optional "+" suffix
- **Character Limits**: 1-5 characters
- **Current**: All show "6+"

**Last Updated**:
- **Format**: Relative time format (e.g., "9 months ago")
- **Character Limits**: 
  - Optimal: 8-15 characters
  - Maximum: 20 characters
- **Current**: All show "9 months ago"

---

## Comparison Models

### Component Overview
The Comparison Models section presents a side-by-side comparison between "Today's AI" (current limitations) and "Tomorrow's AI" (OpenxAI's solutions). It uses animated cards with feature lists and comparison metrics to highlight the platform's advantages.

### Content Requirements

#### Section Title
- **Type**: H2 heading
- **Character Limits**:
  - Optimal: 15-30 characters
  - Maximum: 40 characters
- **Current**: "AI Evolution Comparison" (23 chars - optimal)

#### Section Subtitle
- **Type**: Explanatory paragraph
- **Character Limits**:
  - Optimal: 60-120 characters
  - Maximum: 150 characters
- **Current**: "See how Tomorrow's AI with OpenxAI compares to Today's centralized solutions" (78 chars - optimal)
- **Word Count**: 
  - Optimal: 10-20 words
  - Current: 12 words (perfect)

### Comparison Cards Structure

#### Card Layout
- **Format**: Two-column side-by-side comparison
- **Responsive**: Single column on mobile, two columns on desktop

#### Left Card: "Today's AI"
**Card Title**:
- **Content**: Static "Current" label
- **Supporting Text**: "Other AI" (9 chars)
- **Description**: "Limitations we face" (fixed subtitle)

**Card Subtitle**:
- **Character Limits**: 8-12 characters
- **Current**: "Other AI" (8 chars - optimal)
- **Alternative Options**: "Legacy AI", "Old AI", "Current AI"

#### Right Card: "Tomorrow's AI"  
**Card Title**:
- **Content**: Static "Future" label
- **Supporting Text**: "OpenxAI" (7 chars)
- **Description**: "Solutions we're building" (fixed subtitle)

**Card Subtitle**:
- **Character Limits**: 8-12 characters
- **Current**: "OpenxAI" (7 chars - optimal)
- **Guidelines**: Should be brand name or future-focused term

### Feature Description Lists

#### Description Points Structure
- **Count**: 3 bullet points per card (current: 3 each)

#### Individual Description Requirements
- **Character Limits**:
  - Optimal: 30-60 characters per point
  - Maximum: 80 characters
- **Word Count**: 5-12 words per point
- **Current Points Analysis**:
  1. "Decentralized & owned by people, not corporations." (51 chars, 8 words)
  2. "Your AI, your data, your control, no Middlemen." (48 chars, 9 words)
  3. "AI for everyone. Free, open, and unstoppable." (46 chars, 7 words)

### Comparison Metrics

#### Metrics Structure
- **Count**: 3 metrics (current: 3 metrics)
- **Format**: Title + Values for both sides
- **Display**: Listed at bottom of each card

#### Individual Metric Requirements

**Metric Titles**:
- **Character Limits**:
  - Optimal: 20-35 characters
  - Maximum: 45 characters
- **Current Metrics**:
  1. "Cost & Energy Consumption" (26 chars - optimal)
  2. "Content Censorship & Restrictions" (34 chars - optimal)
  3. "Model Ownership, Data Control & Privacy" (40 chars - optimal)

**Metric Values**:
- **Format**: Numbers with multiplier suffix (e.g., "25x", "20x")
- **Character Limits**: 2-5 characters
- **Current Values**:
  - Today: "25x", "20x", "1x" 
  - Tomorrow: "45x", "32x", "5x"

---

## Blogs Section

### Component Overview
The Blogs section showcases the latest company insights, updates, and thought leadership articles. It features a responsive grid layout with blog preview cards and a "View More" button for accessing additional content.

### Content Requirements

#### Section Title
- **Type**: H1 heading
- **Character Limits**:
  - Optimal: 20-35 characters
  - Maximum: 45 characters
- **Current**: "Latest Insights & Updates" (25 chars - optimal)

#### Section Subtitle
- **Type**: Explanatory paragraph
- **Character Limits**:
  - Optimal: 100-180 characters
  - Maximum: 220 characters
- **Current**: "Stay informed with the latest developments in decentralized AI, blockchain technology, and the OpenxAI ecosystem." (119 chars - optimal)
- **Word Count**: 
  - Optimal: 15-30 words
  - Current: 17 words (perfect)

#### Blog Posts Grid
- **Count**: 3-6 posts (current: 3 posts)
- **Layout**: Responsive grid (1 column mobile → 2 columns tablet → 3 columns desktop)
- **Optimal Display**: 3 posts per row on desktop for visual balance
- **Card Spacing**: 24px to 32px gap (responsive)

##### Individual Blog Post Requirements:

**Blog Post Title**:
- **Character Limits**:
  - Optimal: 30-60 characters
  - Maximum: 80 characters (due to line-clamp-2)
- **Word Count**: 5-12 words
- **Current Titles**:
  1. "DeFiGraph — Knowledge Graph (KG) for DeFi" (42 chars, 7 words - optimal)
  2. "The Future of Decentralized AI on Solana" (41 chars, 7 words - optimal)
  3. "Building with OpenxAI: A Developer's Guide" (42 chars, 7 words - optimal)

**Blog Post Description**:
- **Character Limits**:
  - Optimal: 80-150 characters
  - Maximum: 200 characters (due to line-clamp-3)
- **Word Count**: 12-25 words
- **Current Descriptions**: All around 90-110 characters (optimal)

**Publication Date**:
- **Format**: "DD MMM" format (e.g., "24 May")
- **Character Limits**: 5-8 characters
- **Current Format**: All follow "DD MMM" pattern (optimal)

**Blog Post Images**:
- **Format**: JPG, PNG, WebP recommended
- **Dimensions**: Should work well at card display size (240px height)
- **Current**: All use "/qwen-hero.jpg" placeholder
- **Requirements**:
  - High quality, professional appearance
  - Should represent article topic
  - Consistent aspect ratio across all posts

#### Call-to-Action Button
- **Type**: Action button for accessing more blog content
- **Text**: "View More" (9 chars)

---

## Footer

### Component Overview
The Footer section serves as the website's comprehensive navigation hub and brand presence at the bottom of every page. It features a dramatic gradient background with the brand logo, organized link sections, social media icons, and copyright information.

### Content Requirements

#### Brand Title/Logo
- **Type**: Primary brand identifier
- **Character Limits**:
  - Optimal: 6-12 characters
  - Maximum: 15 characters
- **Current**: "OpenxAI" (7 chars - optimal)

#### Link Sections
- **Count**: 2 sections (current: Services, Company)
- **Layout**: Responsive columns (6-2-2-2 desktop grid)
- **Structure**: Section title + list of links

##### Section 1: "Services"
**Section Title**:
- **Character Limits**: 8-15 characters
- **Current**: "Services" (8 chars - optimal)

**Links Requirements**:
- **Count**: 4-6 links per section (current: 4 links)
- **Character Limits**: 
  - Optimal: 8-20 characters per link
  - Maximum: 25 characters
- **Current Links**:
  1. "Features" (8 chars - optimal)
  2. "Benefits" (8 chars - optimal)
  3. "Pricing" (7 chars - optimal)
  4. "FAQ" (3 chars - optimal)

##### Section 2: "Company"
**Section Title**:
- **Character Limits**: 8-15 characters
- **Current**: "Company" (7 chars - optimal)

**Links Requirements**:
- **Count**: 4-6 links per section (current: 5 links)
- **Current Links**:
  1. "Blog" (4 chars - optimal)
  2. "Changelog" (9 chars - optimal)
  3. "Privacy Policy" (14 chars - optimal)
  4. "Terms of Use" (12 chars - optimal)
  5. "Contact Us" (10 chars - optimal)

#### Social Media Section
- **Count**: 3-6 social platforms (current: 3 platforms)
- **Layout**: Horizontal row with consistent spacing

**Available Social Platforms**:
- **Supported Icons**: telegram, discord, github, twitter, instagram, reddit, youtube, linkedin
- **Current Usage**: "twitter", "instagram", "youtube"

**Social Link Requirements**:
- **Platform Name**: 
  - Character Limits: 6-12 characters
  - Should match actual platform names
- **URLs**: Must be actual social media profile links


#### Copyright Section
- **Type**: Legal/ownership statement
- **Current**: "2025 Copyright © ReadyLaunch. All rights reserved."

---

*This concludes the complete content requirements documentation for all website components.*
