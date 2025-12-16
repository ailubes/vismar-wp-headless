# WordPress XML Translation Analysis Report
**Vismar Aqua Headless WordPress Migration**
**Analysis Date:** 2025-11-16
**Source File:** vismaraqua-.WordPress.2025-11-14.xml

---

## Executive Summary

The WordPress XML export contains **121 total published pages/posts** across three languages:
- **English (EN):** 13 pages/posts
- **Ukrainian (UK):** 64 pages/posts
- **Russian (RU):** 44 pages/posts (to be excluded)

### Key Findings
1. The site is heavily Ukrainian-focused with minimal English content
2. Only **1 page has both EN/UK translations** (Info page with same slug)
3. **12 English pages** need Ukrainian translations (including critical pages)
4. **63 Ukrainian pages** need English translations
5. All Russian content should be excluded from the headless migration

---

## 1. Language Distribution by Content Type

### English Pages (13 total)

#### Pages (8)
1. **Contacts** - /contacts
2. **About us** - /about-company
3. **What is RAS?** - /what-is-ras
4. **Main** - /main
5. **Services** - /services
6. **Info** - /info
7. **Projects** - /projects
8. **Equipment** - /equipment

#### Posts (3)
1. **Aquaculture: where to start?** - /aquaculture-where-to-start
2. **Mini farm for growing shrimp** - /mini-farm-for-growing-shrimp
3. **Write for us sponsored posts** - /write-for-us-sponsored-posts

#### Portfolio Items (2)
1. **How to phasellus vitae convallis** - /how-to-phasellus-vitae-convallis
2. **How to phasellus vitae convallis** - /how-to-phasellus-vitae-convallis-2

---

### Ukrainian Pages (64 total)

#### Pages (6)
1. **Проект "Кларієвий сом - 50"** - /proekt-klariyevij-som-50
2. **Про компанію** - /pro-kompaniyu
3. **Vismar Aqua Ltd Ukraine (en)** - /vismar-aqua-ltd-ukraine
4. **Проектування ферм...** (Main) - /golovna
5. **Iнформація** - /info
6. **Бізнес-план (ТЕО). Форель в УЗВ** - /biznes-plan-teo-forel-v-uzv-akvakultura-rybna-ferma

#### Posts (58)
Covering topics including:
- Aquaculture species (catfish, tilapia, oysters, shrimp, trout, mullet, etc.)
- Technology (biofloc, drum filters, aeration, RAS systems)
- Projects and case studies
- Industry news and conference materials
- Technical guides and calculations

---

### Russian Pages (44 total - TO BE EXCLUDED)

All Russian content should be excluded from the headless WordPress migration, including:
- Equipment pages (filters, pumps, prefiltration)
- Service pages
- Project pages (eel, barramundi, catfish, shrimp farms)
- Blog posts about aquaculture
- Technical documentation

---

## 2. Key Pages Translation Status

### Critical Navigation Pages

| Page Type | English | Ukrainian | Status |
|-----------|---------|-----------|--------|
| **Home/Main** | ✓ Main (/main) | ✓ Проектування ферм... (/golovna) | Both exist |
| **About** | ✓ About us (/about-company) | ✓ Про компанію (/pro-kompaniyu) | Both exist |
| **Contact** | ✓ Contacts (/contacts) | ✗ Missing | **NEED UK TRANSLATION** |
| **Services** | ✓ Services (/services) | ✗ Missing | **NEED UK TRANSLATION** |
| **Projects** | ✓ Projects (/projects) | ✗ Missing | **NEED UK TRANSLATION** |
| **Equipment** | ✓ Equipment (/equipment) | ✗ Missing | **NEED UK TRANSLATION** |
| **Info** | ✓ Info (/info) | ✓ Iнформація (/info) | Both exist |

---

## 3. Missing Translations Analysis

### HIGH PRIORITY: English Pages Needing Ukrainian Translation (7 pages)

1. **Contacts** (/contacts) - Critical navigation page
2. **Services** (/services) - Critical navigation page
3. **Projects** (/projects) - Critical navigation page
4. **Equipment** (/equipment) - Critical navigation page
5. **What is RAS?** (/what-is-ras) - Important educational content
6. **About us** (/about-company) - Already has UK version, but verify consistency
7. **Main** (/main) - Already has UK version, but verify consistency

### MEDIUM PRIORITY: English Posts Needing Ukrainian Translation (3 posts)

1. **Aquaculture: where to start?** (/aquaculture-where-to-start)
2. **Mini farm for growing shrimp** (/mini-farm-for-growing-shrimp)
3. **Write for us sponsored posts** (/write-for-us-sponsored-posts)

### Ukrainian Content Needing English Translation (63 items)

#### HIGH PRIORITY: Core Pages (4)
1. **Проект "Кларієвий сом - 50"** - /proekt-klariyevij-som-50
2. **Бізнес-план (ТЕО). Форель в УЗВ** - /biznes-plan-teo-forel-v-uzv-akvakultura-rybna-ferma
3. **Vismar Aqua Ltd Ukraine (en)** - /vismar-aqua-ltd-ukraine (already marked as EN!)
4. **Проектування ферм...** - /golovna (if different from EN "Main")

#### MEDIUM PRIORITY: Educational & Technical Posts (59)

**Catfish/Clary Content (5 posts)**
- Програма "Кларієвий сом" в Україні офіційно стартувала!
- Вперше конференція на тему "Кларієвий сом..."
- Матеріали конференції «Кларієвий сом...»
- Вирощування кларієвого сома в Україні
- The Catfish program in Ukraine has officially started! (this is EN)

**Shrimp/Crustacean Content (7 posts)**
- Вирощування креветок в кліматичних умовах України
- Міні ферма по вирощуванню креветок
- Гігантська прісноводна креветка
- Вирощування креветки ваннамей в умовах низької соленості води
- Шримс звичайний або піщана креветка
- Перспективи австралійських раків

**Fish Species Content (10 posts)**
- Що заважає розвитку форелівництва?
- Перспективи кефалівництва в Україні
- Форелівництво в Україні
- Сезонне вирощування тиляпії на Півдні України
- Сом європейський - нові перспективи
- Перший урожай червоної тилапії
- Новинки аквакультури - сигові
- Лакедра або жовтохвіст
- Лосось Юрського періоду
- Минь - річкова "тріска"

**Technology & Systems (12 posts)**
- Біофлок - сучасна аквакультурна технологія
- Технологія біофлокуляції: практичне застосування
- Барабанні фільтри - механічна фільтрація (UKR)
- Шляхи інтенсифікації роботи барабанного фільтру в РАС
- Розрахунок аерації для біологічного фільтру
- Правильна циркуляція води в рибницьких ставках
- Інтенсивна ставкова аквакультура
- HFTS: Технологія, що може змінити правила гри
- Використання хлораміну-Т в аквакультурі
- Засіб для очищення води ReVac
- Триплоїдність в аквакультурі

**Other Content (25 posts)**
- Various industry news, events, and educational content
- Case studies and project updates
- General aquaculture information

---

## 4. Translation Mapping Recommendations

### Immediate Actions Required

1. **Create Ukrainian translations for English navigation pages:**
   - Contacts → Контакти
   - Services → Послуги
   - Projects → Проекти
   - Equipment → Обладнання

2. **Verify existing translations match:**
   - About us ↔ Про компанію
   - Main ↔ Проектування ферм...
   - Info ↔ Інформація

3. **Create English translations for high-value Ukrainian content:**
   - Focus on most popular/trafficked articles
   - Prioritize educational content about RAS technology
   - Translate catfish program content (already has 1 EN version)

### Content Strategy Recommendations

1. **Phase 1: Essential Pages (Week 1)**
   - Translate 4 missing navigation pages to Ukrainian
   - Verify 3 existing page pairs are properly linked
   - Total: 7 pages to review/create

2. **Phase 2: Educational Content (Weeks 2-4)**
   - Translate top 10-15 Ukrainian posts to English
   - Focus on evergreen content about RAS, species, technology
   - Create consistent terminology glossary EN↔UK

3. **Phase 3: Comprehensive Coverage (Ongoing)**
   - Gradually translate remaining 40+ Ukrainian posts
   - Add new content in both languages simultaneously
   - Maintain 1:1 translation ratio going forward

---

## 5. Content Categorization by Post Type

### By WordPress Post Type

| Post Type | EN | UK | RU (exclude) | Total |
|-----------|----|----|--------------|-------|
| page | 8 | 6 | 13 | 27 |
| post | 3 | 58 | 31 | 92 |
| dt_portfolio | 2 | 0 | 0 | 2 |
| **TOTAL** | **13** | **64** | **44** | **121** |

### By Content Category (Ukrainian posts)

- **Fish/Species:** ~15 posts (tilapia, trout, catfish, mullet, etc.)
- **Shrimp/Crustaceans:** ~7 posts (vannamei, giant prawn, sand shrimp, crayfish)
- **Technology/Systems:** ~12 posts (biofloc, drum filters, RAS, aeration)
- **Projects/Case Studies:** ~5 posts (farm builds, harvests, programs)
- **Industry News:** ~8 posts (conferences, events, new products)
- **Other/General:** ~11 posts (various aquaculture topics)

---

## 6. Patterns & Issues Found

### Issues Identified

1. **Inconsistent Language Tagging**
   - No WPML metadata found in XML export
   - Language detection had to rely on character analysis
   - Some pages have mixed language indicators (e.g., "Vismar Aqua Ltd Ukraine (en)" is tagged UK)

2. **Duplicate Content**
   - Several Ukrainian posts appear twice with slightly different slugs
   - Example: "Триплоїдність в аквакультурі" (IDs 494 and 5847)
   - Need to deduplicate during migration

3. **Slug Naming Inconsistencies**
   - Some slugs use transliteration (golovna, poslуgi)
   - Others use English (services, projects, info)
   - Need consistent slug strategy for new headless site

4. **Missing Navigation Structure**
   - English has full navigation (Services, Projects, Equipment, Info)
   - Ukrainian missing 3 of these 4 pages
   - Creates asymmetric user experience

### Recommendations to Fix

1. **Implement proper WPML/Polylang setup** in new headless WP
2. **Create slug naming convention:**
   - EN: /en/page-name
   - UK: /uk/page-name or /page-name-uk
3. **Deduplicate content** before migration
4. **Create translation tracking spreadsheet** to manage EN↔UK pairs
5. **Set Ukrainian as default language** (primary audience)
6. **Add language switcher** to all pages

---

## 7. Recommended Translation Priority List

### Phase 1: Critical Pages (Must Have - Week 1)

| Priority | English Page | Ukrainian Translation | Status |
|----------|--------------|----------------------|--------|
| 1 | Contacts | Контакти | CREATE |
| 2 | Services | Послуги | CREATE |
| 3 | Projects | Проекти | CREATE |
| 4 | Equipment | Обладнання | CREATE |
| 5 | About us | Verify match with "Про компанію" | VERIFY |
| 6 | Main | Verify match with homepage | VERIFY |
| 7 | What is RAS? | Що таке РАС? | CREATE |

### Phase 2: High-Value Content (Should Have - Weeks 2-3)

**Translate to English:**
1. Бізнес-план (ТЕО). Форель в УЗВ (business plan page)
2. Вирощування кларієвого сома в Україні (catfish in Ukraine)
3. Сезонне вирощування тиляпії (seasonal tilapia farming)
4. HFTS: Технологія (HFTS technology)
5. Форелівництво в Україні (trout farming in Ukraine)

**Translate to Ukrainian:**
1. Aquaculture: where to start? → Аквакультура: з чого почати?
2. Mini farm for growing shrimp → Міні ферма для вирощування креветок

### Phase 3: Comprehensive Content (Nice to Have - Weeks 4-8)

Translate remaining 40+ Ukrainian educational posts to English based on:
- Traffic analytics (if available)
- SEO keyword opportunities
- Business priorities
- Seasonal relevance

---

## 8. Implementation Checklist

### Before Migration
- [ ] Export this analysis to spreadsheet for tracking
- [ ] Decide on URL structure (/en/page vs /page-en)
- [ ] Create translation glossary for technical terms
- [ ] Identify duplicate content to merge
- [ ] Set up WPML or Polylang in new headless WP

### During Migration
- [ ] Import EN content with proper language tags
- [ ] Import UK content with proper language tags
- [ ] Skip all RU content (44 items)
- [ ] Link existing translation pairs
- [ ] Create missing navigation pages
- [ ] Verify all internal links work

### After Migration
- [ ] Test language switcher functionality
- [ ] Verify all translation pairs are linked
- [ ] Check for broken links
- [ ] Implement hreflang tags for SEO
- [ ] Set up redirects from old URLs if needed
- [ ] Create ongoing translation workflow

---

## 9. Final Statistics

| Metric | Count |
|--------|-------|
| **Total items in XML** | 1,599 |
| **Published pages/posts** | 121 |
| **English items** | 13 (10.7%) |
| **Ukrainian items** | 64 (52.9%) |
| **Russian items (exclude)** | 44 (36.4%) |
| **Items to migrate (EN+UK)** | 77 |
| **Translation gaps** | 75 |
| **Immediate translations needed** | 7 (critical pages) |

---

## 10. Next Steps

1. **Review this report** with stakeholders
2. **Prioritize translation tasks** based on business goals
3. **Assign translation work** to team/translators
4. **Set up headless WP** with proper multilingual plugin
5. **Create translation tracking system** (spreadsheet/project management)
6. **Begin Phase 1 translations** (critical pages)
7. **Test migration** with small subset before full import
8. **Plan ongoing content strategy** to maintain EN/UK parity

---

**Report Generated:** 2025-11-16
**Analyst:** Claude Code
**Source:** /mnt/g/www/vismar-aqua-wp-headless/vismaraqua-.WordPress.2025-11-14.xml
