# VISMAR AQUA Website Content Audit & Migration Plan
**Date:** November 13, 2025  
**Project:** Vismar Aqua Website Redesign (WordPress Headless + Next.js)  
**Languages:** English & Ukrainian

---

## 🎯 EXECUTIVE SUMMARY

### Current State
- **Primary URL:** http://vismar-aqua.com
- **Current CMS:** WordPress (traditional)
- **Languages:** Primarily Ukrainian with some English pages (inconsistent bilingual implementation)
- **Content Age:** Mix of 2015-2025 content, with some pages outdated
- **Site Structure:** Traditional WordPress blog/page structure
- **URL Pattern:** Mixed (some /en/ prefix, some /ru/, mostly Ukrainian root)

### Target State
- **New Tech Stack:** Headless WordPress + Next.js frontend
- **Languages:** Full bilingual parity (EN & UA)
- **URL Structure:** /en/ and /ua/ prefixes for all content
- **All existing URLs:** Must redirect with 301s to new structure
- **New Sections:** Software/IT Solutions, expanded portfolio, modernized services

---

## 📊 CONTENT INVENTORY

### 1. CORE PAGES (High Priority - Must Migrate)

#### 1.1 Homepage
**Current URL:** 
- http://vismar-aqua.com (Ukrainian)
- http://vismar-aqua.com/en (English - partial)

**Status:** ⚠️ **NEEDS COMPLETE REWRITE**
- Current content is outdated
- Mixes Russian and Ukrainian
- No clear value proposition
- No mention of software capabilities
- Testimonials are present but formatting is poor

**Migration Action:**
- [ ] Complete rewrite in both EN & UA
- [ ] New hero section
- [ ] Add software solutions highlight
- [ ] Modernize testimonials section
- [ ] Add Neusatz Aqua case study feature
- [ ] New CTAs for both engineering and software

**New URLs:**
- `/en/` (English)
- `/ua/` (Ukrainian)

---

#### 1.2 About Us / Company
**Current URL:** 
- https://vismar-aqua.com/en/about-company
- https://vismar-aqua.com/ru/vismar-aqua-ltd-ukraine

**Current Content:**
- Founded by Lubomir Haidamaka in 2014
- 15+ years experience
- International team
- Partnership with Business Planning Workshop
- DBOT (Design-Build-Operate-Transfer) methodology

**Status:** ✅ **GOOD FOUNDATION - NEEDS UPDATE**

**Migration Action:**
- [ ] Keep core company history
- [ ] Add new IT/Software department info
- [ ] Update team information
- [ ] Add Neusatz Aqua relationship
- [ ] Modernize language (currently too informal)
- [ ] Add timeline/milestones
- [ ] Professional headshots and team photos

**New URLs:**
- `/en/about/` (English)
- `/ua/about/` (Ukrainian - same slug, different language)

**301 Redirects:**
```
/en/about-company → /en/about/
/ru/vismar-aqua-ltd-ukraine → /ua/about/
```

**Note:** All page URLs use English slugs across both languages, only the language prefix changes (/en/ vs /ua/)

---

#### 1.3 Services Overview
**Current URL:** 
- https://vismar-aqua.com/en/services

**Current Content (4 main services):**
1. **DESIGN** - Feasibility studies, working drafts, DSTU/GBR compliance (120 days)
2. **BUILD** - Turnkey farm construction (180+ days)
3. **OPERATE** - Post-commissioning support, personnel training, tech procedures
4. **TRANSFER** - Knowledge transfer, achieving design capacity

**Status:** ✅ **SOLID CONTENT - NEEDS RESTRUCTURING**

**Migration Action:**
- [ ] Keep DBOT methodology as core framework
- [ ] Expand each service into its own dedicated page
- [ ] Add NEW: Software Development Services section
- [ ] Add process diagrams/flowcharts
- [ ] Add pricing indicators or "Request Quote" CTAs
- [ ] Case study links for each service type

**New Structure:**
```
/en/services/ (overview)
├── /en/services/design/
├── /en/services/build/
├── /en/services/operate/
├── /en/services/transfer/
├── /en/services/ras-systems/
├── /en/services/hfts-technology/
├── /en/services/hatchery-design/
├── /en/services/water-treatment/
├── /en/services/processing-facilities/
├── /en/services/feed-mill-design/
├── /en/services/equipment-design/
└── /en/services/software/ (NEW!)

/ua/services/ (Ukrainian - same slugs)
├── /ua/services/design/
├── /ua/services/build/
├── /ua/services/operate/
├── /ua/services/transfer/
├── /ua/services/ras-systems/
├── /ua/services/hfts-technology/
├── /ua/services/hatchery-design/
├── /ua/services/water-treatment/
├── /ua/services/processing-facilities/
├── /ua/services/feed-mill-design/
├── /ua/services/equipment-design/
└── /ua/services/software/ (NEW!)
```

**301 Redirects:**
```
/en/services → /en/services/
```

---

#### 1.4 Engineering Services (Individual Pages to Create)

##### 1.4.1 RAS Systems Design
**Current:** Mentioned throughout site but no dedicated page
**Status:** ❌ **MISSING - CREATE NEW**

**Content Needed:**
- What is RAS
- Benefits vs traditional aquaculture
- Vismar Aqua's RAS approach
- Species suitable for RAS
- Technical specifications
- Energy efficiency features
- Case studies
- Equipment list
- Design process
- Pricing guide / ROI calculator

**New URL:** 
- `/en/services/ras-systems/` (English)
- `/ua/services/ras-systems/` (Ukrainian - same slug)

---

##### 1.4.2 HFTS Technology
**Current URL:** http://vismar-aqua.com/hfts-technology-can-be-a-game-changer.html

**Current Content:** 
- Excellent long-form article about HFTS (Hybrid Flow-Through System)
- Ukrainian market focus
- Technical benefits
- Policy recommendations
- Very well written

**Status:** ✅ **EXCELLENT - PROMOTE TO SERVICE PAGE**

**Migration Action:**
- [ ] Keep full article as blog post
- [ ] Create service page based on article
- [ ] Add technical specs
- [ ] Add case studies
- [ ] Add implementation timeline
- [ ] Add cost comparisons

**New URLs:**
- `/en/services/hfts-technology/` (service page)
- `/en/insights/hfts-game-changer/` (blog article)
- `/ua/services/hfts-technology/` (service page - same slug)
- `/ua/insights/hfts-game-changer/` (blog article - same slug)

**301 Redirects:**
```
/hfts-technology-can-be-a-game-changer.html → /en/insights/hfts-game-changer/
```

---

##### 1.4.3 Hatchery Design
**Current:** Mentioned in projects but no dedicated page
**Status:** ❌ **MISSING - CREATE NEW**

**Content Needed:**
- Hatchery design principles
- Species-specific requirements
- Broodstock management facilities
- Larval rearing systems
- Biosecurity protocols
- Water quality management
- Neusatz Aqua as case study
- Equipment specifications

**New URL:** 
- `/en/services/hatchery-design/` (English)
- `/ua/services/hatchery-design/` (Ukrainian - same slug)

---

##### 1.4.4 Water Treatment Systems
**Current URL:** https://vismar-aqua.com/ru/barabannye-filtry-vismar-ecodrum.html
**Status:** ⚠️ **PRODUCT PAGE - NEEDS CONVERSION**

**Current Content:**
- Vismar Ecodrum drum filters
- Vismar Aquadrum filters
- Technical specifications
- Product links to shop.vismar-aqua.com

**Migration Action:**
- [ ] Convert from product page to service page
- [ ] Keep technical info but make it service-oriented
- [ ] Add other water treatment solutions (biofilters, UV, ozone, etc.)
- [ ] Explain when each system is appropriate
- [ ] Add design process
- [ ] Integration with overall farm design

**New URL:** 
- `/en/services/water-treatment/` (English)
- `/ua/services/water-treatment/` (Ukrainian - same slug)

**301 Redirects:**
```
/ru/barabannye-filtry-vismar-ecodrum.html → /en/services/water-treatment/
```

---

##### 1.4.5 Processing Facilities Design
**Current:** Mentioned in some projects
**Status:** ❌ **MISSING - CREATE NEW**

**Content Needed:**
- Processing facility design approach
- HACCP compliance and food safety standards
- Equipment selection and layout optimization
- Integration with farm operations
- Cold chain management
- Processing workflow optimization
- Packaging and storage solutions
- Water and waste management in processing
- Energy efficiency in processing
- Capacity planning and scaling
- Quality control systems
- Staff training areas and facilities
- Case studies/examples

**New URL:** 
- `/en/services/processing-facilities/` (English)
- `/ua/services/processing-facilities/` (Ukrainian - same slug)

---

##### 1.4.6 Fish Feed Mill Design
**Current:** Mentioned in Neusatz Aqua project (feed mill with capacity of 6000 tons/year)
**Status:** ❌ **MISSING - CREATE COMPREHENSIVE PAGE**

**Content Needed:**
- Feed mill design expertise
- Capacity planning (small to large scale)
- Raw material handling and storage
- Mixing and pelleting technology
- Quality control systems
- Formulation flexibility
- Automation and control systems
- Dust control and safety systems
- Energy efficiency
- Integration with farm operations
- Storage and distribution systems
- Example: Neusatz Aqua 6000 ton/year feed mill
- Cost analysis and ROI
- Maintenance and operation considerations

**New URL:**
- `/en/services/feed-mill-design/` (English)
- `/ua/services/feed-mill-design/` (Ukrainian - same slug)

---

##### 1.4.7 Aquaculture Equipment Design
**Current URL:** https://vismar-aqua.com/en/equipment
**Status:** ⚠️ **NEEDS TRANSFORMATION FROM SALES TO DESIGN SERVICE**

**Current Content:**
- Wide range of equipment for flow and recirculation farms
- Own production + world manufacturers
- Species: trout, salmon, pike, perch, eel, sea bream, sea bass, tilapia, shrimp
- Individual selection based on requirements
- Links to shop.vismar-aqua.com (may be deprecated)

**New Positioning:** 
**"Custom Equipment Design & Specification"** - Not equipment sales, but equipment engineering services:
- Custom equipment design for specific farm needs
- Equipment specification and selection
- Performance optimization
- Integration with overall farm systems
- Equipment sourcing recommendations
- Installation planning and supervision
- Testing and commissioning support

**Content Needed:**
- Equipment design capabilities
- Types of equipment designed:
  - Drum filters (Vismar Ecodrum, Aquadrum examples)
  - Aeration systems
  - Biofilters
  - Water quality monitoring systems
  - Feeding systems
  - Pumping systems
  - UV and ozone systems
  - Heat exchangers
  - Custom tanks and raceways
- Design process
- Materials selection
- Performance specifications
- Integration approach
- Case studies of custom equipment
- Why custom vs off-the-shelf
- CTA: Equipment design consultation

**New URL:**
- `/en/services/equipment-design/` (English)
- `/ua/services/equipment-design/` (Ukrainian - same slug)

**301 Redirects:**
```
/en/equipment → /en/services/equipment-design/
```

**Note:** This transforms "equipment sales" into "equipment design service" - aligning with the consultancy positioning.

---

#### 1.5 Equipment Design Service (Formerly Equipment Sales)
**Current URL:** https://vismar-aqua.com/en/equipment

**Current Content:**
- Wide range of equipment for flow and recirculation farms
- Own production + world manufacturers
- Species: trout, salmon, pike, perch, eel, sea bream, sea bass, tilapia, shrimp
- Individual selection based on requirements
- Links to shop.vismar-aqua.com

**Status:** ⚠️ **STRATEGIC REPOSITIONING NEEDED**

**Decision Made:** Transform from equipment sales to equipment design service

**New Positioning:**
Instead of "we sell equipment," the message becomes:
- "We design custom equipment solutions"
- "We specify optimal equipment for your needs"
- "We engineer equipment integration"
- "We supervise equipment installation"

**Migration Action:**
- [ ] Rewrite entire page with service focus
- [ ] Remove sales/pricing language
- [ ] Remove shop links (if shop is deprecated)
- [ ] Add equipment design process
- [ ] Add custom equipment examples (Vismar Ecodrum, Aquadrum)
- [ ] Add integration methodology
- [ ] Add case studies of equipment design projects
- [ ] Position as engineering service, not product catalog
- [ ] CTA changes from "Buy" to "Request equipment design consultation"

**New URL:** `/en/services/equipment-design/` and `/ua/services/equipment-design/`

**301 Redirect:**
```
/en/equipment → /en/services/equipment-design/
```

**Note:** This aligns with the overall "solutions provider" positioning rather than equipment vendor.

---

### 2. SOFTWARE SOLUTIONS (NEW SECTION - High Priority)

#### 2.1 Software Overview Page
**Status:** ❌ **CREATE NEW**

**Content Needed:**
- Announcement of new IT department
- Why Vismar Aqua is uniquely positioned (aquaculture + software expertise)
- Overview of capabilities
- Development process
- Custom software inquiry form
- Technology stack (React, Node.js, AI/ML, IoT integration, etc.)
- Team credentials

**New URL:** `/en/software/` and `/ua/software/` (same slug)

**Subsections to Create:**
```
English:
/en/software/
├── /en/software/ai-counting/
├── /en/software/farm-management/
├── /en/software/iot-monitoring/
├── /en/software/biofloc-control/
├── /en/software/feed-planning/
├── /en/software/genetic-tracking/
└── /en/software/custom-development/

Ukrainian (same slugs):
/ua/software/
├── /ua/software/ai-counting/
├── /ua/software/farm-management/
├── /ua/software/iot-monitoring/
├── /ua/software/biofloc-control/
├── /ua/software/feed-planning/
├── /ua/software/genetic-tracking/
└── /ua/software/custom-development/
```

---

#### 2.2 AI Counting Systems
**Status:** ❌ **CREATE NEW**

**Content Needed:**
- AI-based post-larvae and fry counting
- Computer vision technology
- Accuracy rates
- Integration with hatchery operations
- ROI calculator
- Demo video/screenshots
- Case studies
- Pricing

**New URL:** `/en/software/ai-counting/` and `/ua/software/ai-counting/` (same slug)

---

#### 2.3 Farm Management Platforms
**Status:** ❌ **CREATE NEW**

**Content Needed:**
- Digital farm management dashboards
- Real-time monitoring
- Data analytics
- Mobile app features
- Web dashboard features
- IoT sensor integration
- Alerts and notifications
- Historical data tracking
- Export/reporting features

**New URL:** `/en/software/farm-management/` and `/ua/software/farm-management/` (same slug)

---

#### 2.4 IoT Monitoring Apps
**Status:** ❌ **CREATE NEW**

**Content Needed:**
- Real-time pond monitoring
- Water quality sensors (DO, pH, temp, salinity, ammonia)
- Mobile app capabilities
- Alert systems
- Integration with farm management
- Hardware recommendations
- Installation services

**New URL:** `/en/software/iot-monitoring/` and `/ua/software/iot-monitoring/` (same slug)

---

#### 2.5 Biofloc Control Systems
**Status:** ❌ **CREATE NEW**

**Content Needed:**
- Biofloc technology overview
- Automated monitoring and control
- Carbon:Nitrogen ratio management
- Floc volume measurement
- Optimization algorithms
- Integration with feeding systems

**New URL:** `/en/software/biofloc-control/` and `/ua/software/biofloc-control/` (same slug)

---

#### 2.6 Feed Planning & Inventory
**Status:** ❌ **CREATE NEW**

**Content Needed:**
- Feed conversion ratio tracking
- Automated feed planning
- Inventory management
- Cost optimization
- Growth analytics
- Supplier management

**New URL:** `/en/software/feed-planning/` and `/ua/software/feed-planning/` (same slug)

---

#### 2.7 Genetic Selection Database
**Status:** ❌ **CREATE NEW**

**Content Needed:**
- Broodstock management
- Genetic lineage tracking
- Selection criteria
- Performance data
- Breeding program management

**New URL:** `/en/software/genetic-tracking/` and `/ua/software/genetic-tracking/` (same slug)

---

#### 2.8 Custom Development
**Status:** ❌ **CREATE NEW**

**Content Needed:**
- Custom software development capabilities
- Development process
- Technology stack
- Timeline expectations
- Pricing structure
- Portfolio of custom work
- Contact form for inquiries

**New URL:** `/en/software/custom-development/` and `/ua/software/custom-development/` (same slug)

---

### 3. PROJECTS / PORTFOLIO

#### 3.1 Projects Overview Page
**Current URL:** https://vismar-aqua.com/en/projects

**Current Projects Listed:**
1. Neusatz Aqua (Europe's largest shrimp hatchery) - Progresovka, Mykolaiv
2. Catfish farm - Cherkasy region  
3. Sturgeon farm - Baku, Azerbaijan
4. Modular catfish farm - Kyiv region
5. Shrimp farm - Lithuania
6. RAS modernization - Ukrainian laboratory

**Status:** ✅ **GOOD FOUNDATION - NEEDS EXPANSION**

**Migration Action:**
- [ ] Create dedicated page for EACH project
- [ ] Add project photos/videos
- [ ] Add technical specifications
- [ ] Add client testimonials (where possible)
- [ ] Add timeline
- [ ] Add results/outcomes
- [ ] Feature Neusatz Aqua prominently
- [ ] Add "Merman's House" story (closed due to war)
- [ ] Add software implementation examples

**New Structure:**
```
English:
/en/projects/ (overview with filters)
├── /en/projects/neusatz-aqua-hatchery/ (FEATURED)
├── /en/projects/catfish-farm-cherkasy/
├── /en/projects/sturgeon-farm-azerbaijan/
├── /en/projects/modular-catfish-kyiv/
├── /en/projects/shrimp-farm-lithuania/
└── /en/projects/ras-lab-modernization/

Ukrainian (same slugs):
/ua/projects/ (overview with filters)
├── /ua/projects/neusatz-aqua-hatchery/ (FEATURED)
├── /ua/projects/catfish-farm-cherkasy/
├── /ua/projects/sturgeon-farm-azerbaijan/
├── /ua/projects/modular-catfish-kyiv/
├── /ua/projects/shrimp-farm-lithuania/
└── /ua/projects/ras-lab-modernization/
```

---

#### 3.2 Neusatz Aqua (Flagship Project)
**Status:** ❌ **CREATE COMPREHENSIVE CASE STUDY**

**Content Needed:**
- Complete project overview
- Technical specifications
- Construction timeline with photos
- AI monitoring system implementation
- Hatchery design details
- Economic projections
- Sustainability features
- Team involvement
- Lessons learned
- Future expansion plans
- Link to neusatzaqua.com

**New URL:** `/en/projects/neusatz-aqua-hatchery/` and `/ua/projects/neusatz-aqua-hatchery/` (same slug)

---

### 4. SPECIES / AQUACULTURE TYPES

**Current:** Multiple blog posts about different species
**Status:** ⚠️ **SCATTERED - NEEDS CONSOLIDATION**

**Current Species Content Found:**
1. Vannamei Shrimp (various articles)
2. Macrobrachium rosenbergii (freshwater prawn)
3. Tilapia
4. Yellowtail (Seriola lalandi)
5. Eel (Anguilla anguilla)
6. Catfish
7. Sturgeon

**Migration Action:**
- [ ] Create "Solutions by Species" section
- [ ] Consolidate all species info into dedicated pages
- [ ] Add farming requirements for each
- [ ] Add profitability data
- [ ] Add suitable systems (RAS, HFTS, ponds, etc.)
- [ ] Link to relevant projects
- [ ] Link to relevant equipment

**New Structure:**
```
English:
/en/species/
├── /en/species/shrimp/
│   ├── /en/species/shrimp/vannamei/
│   └── /en/species/shrimp/macrobrachium/
├── /en/species/tilapia/
├── /en/species/catfish/
├── /en/species/sturgeon/
├── /en/species/eel/
├── /en/species/salmon-trout/
└── /en/species/marine-fish/

Ukrainian (same slugs):
/ua/species/
├── /ua/species/shrimp/
│   ├── /ua/species/shrimp/vannamei/
│   └── /ua/species/shrimp/macrobrachium/
├── /ua/species/tilapia/
├── /ua/species/catfish/
├── /ua/species/sturgeon/
├── /ua/species/eel/
├── /ua/species/salmon-trout/
└── /ua/species/marine-fish/
```

---

### 5. BLOG / INSIGHTS / ARTICLES

**Current:** Many blog posts scattered throughout site
**Status:** ⚠️ **NEEDS AUDIT & CONSOLIDATION**

**Categories Found:**
- Species information
- Technology articles (HFTS, biofloc, etc.)
- Equipment descriptions
- Water quality parameters
- Project updates
- Industry news

**Migration Strategy:**

#### 5.1 Keep & Migrate (High-Value Content)
- HFTS article ✅
- Biofloc technology articles
- RAS design principles
- Water quality management
- Species-specific articles

#### 5.2 Update & Migrate (Outdated but Valuable)
- Old project announcements → update with current status
- Equipment articles → update pricing and availability
- Technical articles → review for accuracy

#### 5.3 Archive / Remove (Low Value)
- Very old announcements
- Duplicate content
- Promotional posts for discontinued products

**New Blog Structure:**
```
English:
/en/insights/ (main blog)
├── /en/insights/category/engineering/
├── /en/insights/category/software/
├── /en/insights/category/species/
├── /en/insights/category/technology/
├── /en/insights/category/projects/
└── /en/insights/category/industry-news/

Ukrainian (same slugs):
/ua/insights/ (main blog)
├── /ua/insights/category/engineering/
├── /ua/insights/category/software/
├── /ua/insights/category/species/
├── /ua/insights/category/technology/
├── /ua/insights/category/projects/
└── /ua/insights/category/industry-news/
```

**Action Items:**
- [ ] Export all blog posts from WordPress
- [ ] Categorize each post (Keep/Update/Archive)
- [ ] Assign to new categories
- [ ] Rewrite/update outdated content
- [ ] Create 301 redirects for all migrated posts
- [ ] Add featured images to all posts
- [ ] Standardize author attribution

---

### 6. UTILITY PAGES

#### 6.1 Contact
**Current URL:** https://vismar-aqua.com/en/contacts

**Current Content:**
- Lubomir Haidamaka contact info
- Phone numbers
- Viber/WhatsApp
- Facebook link
- Contact form

**Status:** ✅ **ADEQUATE - NEEDS MODERNIZATION**

**Migration Action:**
- [ ] Multiple contact forms:
  - General inquiry
  - Engineering project request
  - Software development request
- [ ] Office locations (if any)
- [ ] Interactive map
- [ ] Response time expectations
- [ ] Team contact info (if appropriate)
- [ ] Social media links
- [ ] Newsletter signup

**New URL:** `/en/contact/` and `/ua/contact/` (same slug)

---

#### 6.2 Privacy Policy
**Status:** ❌ **MISSING - MUST CREATE**

**Content Needed:**
- GDPR-compliant privacy policy
- Cookie policy
- Data collection disclosure
- User rights
- Contact for privacy concerns

**New URL:** `/en/privacy/` and `/ua/privacy/` (same slug)

---

#### 6.3 Terms of Service
**Status:** ❌ **MISSING - SHOULD CREATE**

**New URL:** `/en/terms/` and `/ua/terms/` (same slug)

---

### 7. MINI FARM FOR SHRIMP
**Current URL:** https://vismar-aqua.com/en/mini-farm-for-growing-shrimp.html

**Current Content:**
- Detailed guide for small-scale shrimp farming
- Equipment list with prices
- Technical specifications
- Biofloc methodology
- Cost calculations
- Target: beginners with limited budget (~$10K investment)

**Status:** ⚠️ **VALUABLE BUT UNCLEAR POSITIONING**

**Question:** Is this:
1. A product offering? (Vismar sells these kits)
2. Educational content?
3. Lead generation tool?
4. Outdated content?

**Migration Options:**
1. Convert to educational guide + lead magnet
2. Convert to product offering page
3. Archive (if no longer relevant)

**Recommendation:** **NEEDS CLIENT DECISION**

---

## 🗺️ URL MIGRATION MAP

### URL Strategy

**Consistent English Slugs:** All pages use English URL slugs across both languages. Only the language prefix changes (/en/ vs /ua/). This approach:
- ✅ Simplifies maintenance (one slug to manage)
- ✅ Easier for developers to work with
- ✅ Common best practice for international sites
- ✅ Cleaner analytics and tracking
- ✅ Better for SEO (consistent URL structure)

**Example:**
- English: `/en/services/ras-systems/`
- Ukrainian: `/ua/services/ras-systems/` ← same slug, just language prefix changes

### Redirect Strategy

All existing URLs must be mapped to new URLs with 301 redirects. This is critical for SEO and user experience.

### Examples:

| Old URL | New URL | Language | Notes |
|---------|---------|----------|-------|
| `http://vismar-aqua.com` | `/ua/` | Root Ukrainian | Default to UA |
| `http://vismar-aqua.com/en` | `/en/` | English home | |
| `/en/about-company` | `/en/about/` | EN | Simplified |
| `/ru/vismar-aqua-ltd-ukraine` | `/ua/about/` | UA | Russian → Ukrainian, same slug |
| `/en/services` | `/en/services/` | EN | Keep structure |
| `/en/projects` | `/en/projects/` | EN | Keep structure |
| `/en/equipment` | `/en/equipment/` or TBD | EN | Decision needed |
| `/en/contacts` | `/en/contact/` | EN | Simplified |
| `/hfts-technology-can-be-a-game-changer.html` | `/en/insights/hfts-game-changer/` | EN | Article |
| `/en/mini-farm-for-growing-shrimp.html` | `/en/guides/mini-shrimp-farm/` or TBD | EN | Decision needed |
| `/ru/*` | `/ua/*` | UA | Russian → Ukrainian, same slugs |
| Various species articles | `/en/species/{species-name}/` | EN | New structure |
| Equipment articles | `/en/equipment/{equipment}/` or TBD | EN | Decision needed |

### Implementation:
- Next.js middleware for redirects
- Or nginx/Apache redirects (depending on hosting)
- Export redirect map from content audit
- Test all redirects before launch

---

## 📝 CONTENT PRIORITY MATRIX

### Phase 1: Critical (Launch Blockers)
Must be complete for site launch:

1. ✅ Homepage (EN & UA)
2. ✅ About page (EN & UA)
3. ✅ Services overview (EN & UA)
4. ✅ Software overview page (EN & UA) - NEW
5. ✅ Projects overview (EN & UA)
6. ✅ Contact page (EN & UA)
7. ✅ At least 3 key service pages (RAS, HFTS, Software)
8. ✅ Neusatz Aqua case study
9. ✅ Privacy policy
10. ✅ Basic 301 redirects

**Timeline:** 4-6 weeks

---

### Phase 2: Important (Post-Launch Priority)
Complete within 2 months of launch:

1. All remaining service pages
2. All software solution pages
3. All project case studies
4. Species pages (at least top 5)
5. Equipment section (if keeping)
6. Blog migration (high-value articles)
7. Complete redirect map
8. Team/staff pages

**Timeline:** 6-8 weeks post-launch

---

### Phase 3: Nice to Have
Complete within 6 months:

1. All species pages
2. Complete blog archive migration
3. Video content
4. Downloadable resources (PDFs, guides, etc.)
5. FAQ section
6. Client testimonials page
7. Certification/awards page

**Timeline:** Ongoing

---

## 📊 CONTENT GAP ANALYSIS

### What's Missing Entirely:

1. **Software/IT Content** (High Priority)
   - No mention of software capabilities on current site
   - Entire section needs creation
   - This is your key differentiator!

2. **Detailed Service Pages** (High Priority)
   - Current services page is overview only
   - Need dedicated pages for each service
   - Need technical depth

3. **Complete Project Portfolio** (Medium Priority)
   - Projects listed but not detailed
   - No photos/videos
   - No technical specs
   - No outcomes/results

4. **Team Information** (Medium Priority)
   - Only Lubomir mentioned
   - No team bios
   - No credentials/certifications
   - No photos

5. **Resources/Downloads** (Low Priority)
   - No downloadable guides
   - No case study PDFs
   - No technical whitepapers
   - Could be lead magnets

6. **Video Content** (Low Priority)
   - No videos on current site
   - High engagement potential
   - Consider for Phase 2

7. **Client Testimonials** (Medium Priority)
   - A few testimonials on home page
   - Need more, with photos
   - Need video testimonials
   - Need case study format

---

## 🔄 WORDPRESS CONTENT EXPORT PROCESS

### Step 1: Export Current Content
```bash
# Use WordPress native export
Tools → Export → All Content
```

This will give you XML file with:
- All posts
- All pages
- Comments (if any)
- Custom fields
- Media attachments

### Step 2: Analyze Export
- [ ] Count total posts: ___
- [ ] Count total pages: ___
- [ ] Count total images: ___
- [ ] Identify categories: ___
- [ ] Identify tags: ___

### Step 3: Categorize Content

Create spreadsheet with columns:
- Current URL
- Title
- Type (Post/Page)
- Language (EN/UA/RU)
- Status (Keep/Update/Archive)
- New URL
- Priority (P1/P2/P3)
- Assigned To
- Notes

### Step 4: Media Audit
- [ ] Export all images
- [ ] Categorize by usage (product, project, blog, etc.)
- [ ] Identify missing images needed
- [ ] Optimize all images (compress, resize)
- [ ] Update alt text for SEO

---

## 🌍 BILINGUAL CONTENT STRATEGY

### Content Parity Rules:

#### 100% Parity (Must translate):
- All core pages (home, about, services, contact)
- All service pages
- All software pages
- All project pages
- Legal pages (privacy, terms)

#### High Priority Translation:
- Blog posts about technology (HFTS, RAS, etc.)
- Species guides
- Equipment guides

#### Optional Translation:
- Older blog posts
- News/announcements
- Some project updates

### Translation Process:

1. **Native Content Creation**
   - Core pages: Write UA first (native market)
   - Technical pages: Write EN first (international standard)
   - Then translate

2. **Professional Translation**
   - Use professional translator for core pages
   - Technical accuracy is critical
   - Maintain brand voice in both languages

3. **Review Process**
   - Native speaker review
   - Technical expert review
   - SEO keyword check (both languages)

---

## 📋 CONTENT CREATION CHECKLIST

### For Each Page:

- [ ] Research keywords (EN & UA)
- [ ] Outline content structure
- [ ] Write first draft
- [ ] Add images/graphics
- [ ] SEO optimization
  - [ ] Title tag (< 60 chars)
  - [ ] Meta description (< 160 chars)
  - [ ] H1 (one per page)
  - [ ] H2-H6 hierarchy
  - [ ] Alt text for all images
  - [ ] Internal links
  - [ ] External links (authoritative sources)
- [ ] Add CTAs
- [ ] Proofread
- [ ] Translate (if applicable)
- [ ] Review translation
- [ ] Test on staging
- [ ] Get client approval

---

## 🎨 CONTENT WRITING GUIDELINES

### Tone & Voice:
- **Professional** but not stuffy
- **Technical** but accessible
- **Confident** but not arrogant
- **International** but with Ukrainian pride
- **Modern** and innovative

### Writing Rules:
1. Use active voice
2. Short paragraphs (2-4 sentences)
3. Bullet points for scanability
4. Headers every 200-300 words
5. Bold key points
6. Use numbers/data where possible
7. Include CTAs every 500 words
8. Link internally to related content
9. Cite sources for claims
10. Use specific examples

### Technical Writing:
- Define acronyms on first use
- Include metric conversions
- Use tables for specifications
- Add diagrams/flowcharts
- Provide real examples
- Show calculations/ROI

### SEO Writing:
- Primary keyword in:
  - URL
  - Title
  - H1
  - First paragraph
  - At least one H2
  - Meta description
  - Alt text (one image)
- Secondary keywords naturally throughout
- Long-tail keyword variations
- Semantic keywords
- Natural language (not keyword stuffing)

---

## 📸 MEDIA REQUIREMENTS

### Photography Needed:

#### Projects:
- [ ] Neusatz Aqua facility (exterior/interior)
- [ ] Hatchery equipment
- [ ] RAS systems in operation
- [ ] Biofloc tanks
- [ ] Post-larvae/broodstock
- [ ] Processing facilities
- [ ] Other project sites (if accessible)

#### Team:
- [ ] Professional headshots (all team members)
- [ ] Team working (design, construction, operation)
- [ ] Office environment
- [ ] On-site at projects

#### Equipment:
- [ ] Drum filters
- [ ] Aerators/blowers
- [ ] Pumps
- [ ] Monitoring equipment
- [ ] Biofilters
- [ ] UV systems

#### General:
- [ ] Various fish/shrimp species
- [ ] Aquaculture environments
- [ ] Technology (tablets, dashboards, apps)
- [ ] Hero images for each service

### Video Content (Phase 2):
- [ ] Company introduction (2-3 min)
- [ ] Neusatz Aqua tour (5 min)
- [ ] RAS system explainer (3 min)
- [ ] Software demo videos (2-3 min each)
- [ ] Client testimonial videos
- [ ] Behind-the-scenes construction

### Graphics/Illustrations:
- [ ] System diagrams (RAS, HFTS, etc.)
- [ ] Process flowcharts (DBOT methodology)
- [ ] Infographics (aquaculture statistics)
- [ ] Icons (services, species, features)
- [ ] Screenshots (software interfaces)
- [ ] Technical drawings (equipment)

---

## 📝 NEXT STEPS

### Immediate Actions (This Week):

1. **Content Audit Completion**
   - [ ] Review this document with team
   - [ ] Make decisions on:
     - Equipment section (keep/remove/modify?)
     - Mini farm guide (positioning?)
     - Product sales vs services focus?
   - [ ] Assign content creation responsibilities

2. **Export & Analysis**
   - [ ] Export WordPress content
   - [ ] Create spreadsheet inventory
   - [ ] Download all media files
   - [ ] Document current URL structure

3. **Content Strategy Finalization**
   - [ ] Approve new site structure
   - [ ] Prioritize content creation
   - [ ] Set deadlines
   - [ ] Assign writers/translators

### Week 2-4 Actions:

4. **Content Creation Phase 1**
   - [ ] Write new homepage (EN)
   - [ ] Translate homepage (UA)
   - [ ] Write About page
   - [ ] Write Services overview
   - [ ] Write Software overview (NEW)
   - [ ] Write 3 key service pages
   - [ ] Write Neusatz case study
   - [ ] Create privacy policy

5. **Media Production**
   - [ ] Schedule photography sessions
   - [ ] Create graphics/diagrams
   - [ ] Optimize all images
   - [ ] Organize media library

### Month 2 Actions:

6. **Content Creation Phase 2**
   - [ ] Complete all service pages
   - [ ] Complete all software pages
   - [ ] Complete project case studies
   - [ ] Migrate high-value blog posts
   - [ ] Create species pages

7. **Review & Refinement**
   - [ ] SEO review all pages
   - [ ] Proofread all content
   - [ ] Review translations
   - [ ] Test internal linking
   - [ ] Create 301 redirect file

---

## 💡 RECOMMENDATIONS

### Content Strategy:

1. **Lead with Software Innovation**
   - This is your unique differentiator
   - Make it prominent on homepage
   - Show how engineering + software = better outcomes

2. **Showcase Neusatz Aqua**
   - Your flagship proof of concept
   - Demonstrates full capabilities
   - Use throughout site as example

3. **Technical Depth with Accessibility**
   - Provide real technical details
   - But make it understandable
   - Use diagrams and examples

4. **ROI Focus**
   - Investors care about returns
   - Show cost savings
   - Demonstrate efficiency gains
   - Provide calculators where possible

5. **Trust Building**
   - Certifications/partnerships
   - Client testimonials
   - Project outcomes
   - Team credentials
   - Thought leadership (blog)

### Quick Wins:

1. **Software Announcement Blog Post**
   - Publish on LinkedIn, Facebook
   - Cross-promote on both sites (Vismar + Neusatz)
   - Generate buzz before launch

2. **Neusatz Integration**
   - Link between sites
   - Show ecosystem
   - Demonstrate capabilities

3. **Video Content**
   - Even basic videos have high impact
   - Can be smartphone footage initially
   - Humanizes brand

4. **Case Study Formula**
   - Problem → Solution → Results
   - Use for all projects
   - Include specific numbers

---

## 📊 METRICS TO TRACK

### Content Performance:
- Page views per page
- Time on page
- Bounce rate
- Conversion rate (contact forms)
- Internal link clicks
- Search rankings
- Backlinks

### Goals:
- X inquiries per month
- X% increase in organic traffic
- Page 1 rankings for key terms
- X video views
- X newsletter signups

---

## ❓ OPEN QUESTIONS FOR CLIENT

Please answer these to finalize content strategy:

1. **Mini Farm Guide**
   - Is this a current product offering?
   - Lead generation tool?
   - Educational content?

2. **Team**
   - Who should be featured?
   - Do we have professional photos?
   - Bios available?

3. **Certifications/Awards**
   - Any to showcase?
   - Professional affiliations?
   - Industry memberships?

4. **Software Portfolio**
   - Any existing software to showcase?
   - Demo access available?
   - Screenshots/videos of interfaces?

5. **Budget/Timeline**
   - What is content creation budget?
   - Photography budget?
   - Translation budget?
   - Deadline for launch?

6. **Target Markets**
   - Primary: International investors
   - But which countries specifically?
   - Any language preferences beyond EN/UA?
   - Market-specific content needed?

7. **Competitive Position**
   - Who are main competitors?
   - What makes you different?
   - Price positioning (premium/mid/value)?

**DECISION MADE:**
✅ **Equipment Section:** Transform from sales to "Equipment Design & Specification" service - aligns with consultancy positioning, not product vendor.

---

## 📁 DELIVERABLES FROM THIS AUDIT

### Completed:
✅ Content inventory
✅ Gap analysis
✅ Migration strategy
✅ New site structure
✅ Content prioritization
✅ Bilingual strategy
✅ SEO guidelines
✅ Writing guidelines

### To Complete:
- [ ] Detailed URL redirect map (after client decisions)
- [ ] Content creation schedule (after prioritization)
- [ ] Media asset list (after audit)
- [ ] Translation brief (after content finalization)

---

## 🎯 SUCCESS CRITERIA

This content migration will be successful when:

✅ All critical pages are live in both languages
✅ All old URLs redirect properly (no 404s)
✅ All images are optimized and have alt text
✅ SEO rankings maintained or improved
✅ Contact form submissions increase
✅ Site clearly communicates new software capabilities
✅ Neusatz Aqua integration is clear
✅ Professional, modern brand image
✅ International audience can easily understand offerings
✅ Clear path to conversion on every page

---

**Document Version:** 1.0  
**Last Updated:** November 13, 2025  
**Next Review:** After client feedback
