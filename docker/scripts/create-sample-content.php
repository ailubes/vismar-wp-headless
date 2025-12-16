<?php
/**
 * Create Sample Content for Vismar Aqua
 *
 * This script creates:
 * - 8 pages in both EN and UK (16 total)
 * - 4 services in both languages
 * - 2 projects in both languages
 * - 2 software solutions in both languages
 * - 2 species in both languages
 * - Navigation menus for both languages
 *
 * Run: docker exec vismar-wordpress php -f /var/www/html/wp-content/scripts/create-sample-content.php
 */

// Load WordPress
require_once('/var/www/html/wp-load.php');

// Ensure we're running as admin
if (!defined('WP_CLI') && !current_user_can('manage_options')) {
    wp_set_current_user(1); // Set to admin user
}

echo "===========================================\n";
echo "Creating Sample Content for Vismar Aqua\n";
echo "===========================================\n\n";

// Track created content
$created = [
    'pages' => [],
    'services' => [],
    'projects' => [],
    'software' => [],
    'species' => [],
    'menus' => []
];

// ============================================
// 1. CREATE PAGES
// ============================================
echo "1. Creating Pages...\n";
echo "-------------------\n";

$pages_data = [
    [
        'en' => ['title' => 'Home', 'slug' => 'home', 'content' => 'Welcome to Vismar Aqua - Your trusted partner in aquaculture systems design and implementation.'],
        'uk' => ['title' => 'Головна', 'slug' => 'home', 'content' => 'Ласкаво просимо до Vismar Aqua - Ваш надійний партнер у проектуванні та реалізації аквакультурних систем.']
    ],
    [
        'en' => ['title' => 'About', 'slug' => 'about', 'content' => 'Vismar Aqua is a leading provider of aquaculture solutions with over 15 years of experience in RAS systems design, hatchery implementation, and water treatment solutions.'],
        'uk' => ['title' => 'Про нас', 'slug' => 'about', 'content' => 'Vismar Aqua - провідний постачальник аквакультурних рішень з понад 15-річним досвідом у проектуванні систем RAS, впровадженні інкубаторіїв та рішеннях з водоочистки.']
    ],
    [
        'en' => ['title' => 'Services', 'slug' => 'services', 'content' => 'Explore our comprehensive range of aquaculture services, from RAS systems design to complete turnkey solutions.'],
        'uk' => ['title' => 'Послуги', 'slug' => 'services', 'content' => 'Ознайомтеся з нашим повним спектром послуг аквакультури, від проектування систем RAS до повних рішень під ключ.']
    ],
    [
        'en' => ['title' => 'Projects', 'slug' => 'projects', 'content' => 'Discover our successful aquaculture projects implemented across Europe and beyond.'],
        'uk' => ['title' => 'Проєкти', 'slug' => 'projects', 'content' => 'Відкрийте для себе наші успішні проєкти аквакультури, реалізовані по всій Європі та за її межами.']
    ],
    [
        'en' => ['title' => 'Software', 'slug' => 'software', 'content' => 'Innovative software solutions for modern aquaculture management and monitoring.'],
        'uk' => ['title' => 'Програмне забезпечення', 'slug' => 'software', 'content' => 'Інноваційні програмні рішення для сучасного управління та моніторингу аквакультури.']
    ],
    [
        'en' => ['title' => 'Species', 'slug' => 'species', 'content' => 'Learn about the various fish species we work with and their optimal growing conditions.'],
        'uk' => ['title' => 'Види', 'slug' => 'species', 'content' => 'Дізнайтеся про різні види риб, з якими ми працюємо, та їх оптимальні умови вирощування.']
    ],
    [
        'en' => ['title' => 'Contact', 'slug' => 'contact', 'content' => 'Get in touch with our team of aquaculture experts. We are here to help you realize your aquaculture projects.'],
        'uk' => ['title' => 'Контакти', 'slug' => 'contact', 'content' => 'Зв\'яжіться з нашою командою експертів з аквакультури. Ми тут, щоб допомогти вам реалізувати ваші проєкти аквакультури.']
    ],
    [
        'en' => ['title' => 'Privacy Policy', 'slug' => 'privacy', 'content' => 'Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information.'],
        'uk' => ['title' => 'Політика конфіденційності', 'slug' => 'privacy', 'content' => 'Ваша конфіденційність важлива для нас. Ця політика конфіденційності пояснює, як ми збираємо, використовуємо та захищаємо вашу особисту інформацію.']
    ]
];

foreach ($pages_data as $page_pair) {
    // Create English page
    $en_page_id = wp_insert_post([
        'post_title'   => $page_pair['en']['title'],
        'post_name'    => $page_pair['en']['slug'],
        'post_content' => $page_pair['en']['content'],
        'post_status'  => 'publish',
        'post_type'    => 'page',
    ]);

    if (is_wp_error($en_page_id)) {
        echo "  ERROR: Failed to create page: {$page_pair['en']['title']}\n";
        continue;
    }

    // Set language to English
    pll_set_post_language($en_page_id, 'en');
    echo "  ✓ Created EN page: {$page_pair['en']['title']} (ID: $en_page_id)\n";

    // Create Ukrainian page
    $uk_page_id = wp_insert_post([
        'post_title'   => $page_pair['uk']['title'],
        'post_name'    => $page_pair['uk']['slug'],
        'post_content' => $page_pair['uk']['content'],
        'post_status'  => 'publish',
        'post_type'    => 'page',
    ]);

    if (is_wp_error($uk_page_id)) {
        echo "  ERROR: Failed to create page: {$page_pair['uk']['title']}\n";
        continue;
    }

    // Set language to Ukrainian
    pll_set_post_language($uk_page_id, 'uk');
    echo "  ✓ Created UK page: {$page_pair['uk']['title']} (ID: $uk_page_id)\n";

    // Link translations
    pll_save_post_translations([
        'en' => $en_page_id,
        'uk' => $uk_page_id,
    ]);
    echo "  ✓ Linked translations\n";

    $created['pages'][] = [
        'en' => ['id' => $en_page_id, 'title' => $page_pair['en']['title']],
        'uk' => ['id' => $uk_page_id, 'title' => $page_pair['uk']['title']]
    ];
}

echo "\n";

// ============================================
// 2. CREATE SERVICES
// ============================================
echo "2. Creating Services...\n";
echo "----------------------\n";

$services_data = [
    [
        'en' => [
            'title' => 'RAS Systems Design',
            'content' => 'Complete design and engineering of Recirculating Aquaculture Systems (RAS) tailored to your specific needs. Our RAS systems incorporate cutting-edge technology for optimal water quality, fish health, and operational efficiency.',
            'acf' => [
                'service_tagline' => 'Innovative recirculating aquaculture solutions',
                'service_icon' => '🔄',
                'service_description_short' => 'We design state-of-the-art RAS systems that maximize production while minimizing environmental impact.',
                'service_features' => "Advanced biofilters\nEfficient water circulation\nAutomated monitoring\nEnergy optimization",
                'service_benefits' => "Reduced water consumption\nYear-round production\nHigher stocking density\nBetter disease control",
                'service_cta_text' => 'Learn More',
                'service_cta_link' => '/en/services/ras-systems'
            ]
        ],
        'uk' => [
            'title' => 'Проектування систем RAS',
            'content' => 'Повне проектування та інжиніринг систем рециркуляційної аквакультури (RAS), адаптованих до ваших конкретних потреб. Наші системи RAS включають передові технології для оптимальної якості води, здоров\'я риби та операційної ефективності.',
            'acf' => [
                'service_tagline' => 'Інноваційні рішення рециркуляційної аквакультури',
                'service_icon' => '🔄',
                'service_description_short' => 'Ми проектуємо сучасні системи RAS, які максимізують виробництво, мінімізуючи вплив на навколишнє середовище.',
                'service_features' => "Передові біофільтри\nЕфективна циркуляція води\nАвтоматизований моніторинг\nОптимізація енергії",
                'service_benefits' => "Зменшене споживання води\nЦілорічне виробництво\nВища щільність посадки\nКращий контроль хвороб",
                'service_cta_text' => 'Дізнатися більше',
                'service_cta_link' => '/uk/services/ras-systems'
            ]
        ]
    ],
    [
        'en' => [
            'title' => 'Hatchery Design',
            'content' => 'Professional hatchery design and setup services for optimal fish breeding and larval rearing. We create controlled environments that ensure maximum survival rates and healthy fingerling production.',
            'acf' => [
                'service_tagline' => 'Professional fish breeding facilities',
                'service_icon' => '🐟',
                'service_description_short' => 'Comprehensive hatchery solutions from design to commissioning.',
                'service_features' => "Temperature control systems\nLarval rearing tanks\nBroodstock management\nIncubation systems",
                'service_benefits' => "Higher survival rates\nConsistent production\nDisease prevention\nQuality fingerlings",
                'service_cta_text' => 'Get Started',
                'service_cta_link' => '/en/services/hatchery'
            ]
        ],
        'uk' => [
            'title' => 'Проектування інкубаторіїв',
            'content' => 'Професійні послуги з проектування та налаштування інкубаторіїв для оптимального розведення риби та вирощування личинок. Ми створюємо контрольовані середовища, які забезпечують максимальну виживаність та здорове виробництво мальків.',
            'acf' => [
                'service_tagline' => 'Професійні заклади для розведення риби',
                'service_icon' => '🐟',
                'service_description_short' => 'Комплексні рішення для інкубаторіїв від проектування до введення в експлуатацію.',
                'service_features' => "Системи контролю температури\nБасейни для вирощування личинок\nУправління маточним стадом\nСистеми інкубації",
                'service_benefits' => "Вища виживаність\nСтабільне виробництво\nПрофілактика захворювань\nЯкісні мальки",
                'service_cta_text' => 'Почати',
                'service_cta_link' => '/uk/services/hatchery'
            ]
        ]
    ],
    [
        'en' => [
            'title' => 'Water Treatment',
            'content' => 'Advanced water treatment solutions for aquaculture facilities. Our systems ensure optimal water quality parameters through mechanical filtration, biological treatment, and advanced oxidation processes.',
            'acf' => [
                'service_tagline' => 'Clean water for healthy fish',
                'service_icon' => '💧',
                'service_description_short' => 'State-of-the-art water treatment technology for aquaculture.',
                'service_features' => "Mechanical filtration\nBiological filters\nOzonation systems\nUV sterilization",
                'service_benefits' => "Improved water quality\nReduced disease risk\nLower operational costs\nEnvironmental compliance",
                'service_cta_text' => 'Contact Us',
                'service_cta_link' => '/en/contact'
            ]
        ],
        'uk' => [
            'title' => 'Водоочистка',
            'content' => 'Передові рішення з водоочистки для аквакультурних об\'єктів. Наші системи забезпечують оптимальні параметри якості води через механічну фільтрацію, біологічну обробку та передові процеси окислення.',
            'acf' => [
                'service_tagline' => 'Чиста вода для здорової риби',
                'service_icon' => '💧',
                'service_description_short' => 'Сучасні технології очищення води для аквакультури.',
                'service_features' => "Механічна фільтрація\nБіологічні фільтри\nСистеми озонування\nУФ стерилізація",
                'service_benefits' => "Покращена якість води\nЗменшений ризик захворювань\nНижчі операційні витрати\nЕкологічна відповідність",
                'service_cta_text' => 'Зв\'яжіться з нами',
                'service_cta_link' => '/uk/contact'
            ]
        ]
    ],
    [
        'en' => [
            'title' => 'Turnkey Solutions',
            'content' => 'Complete turnkey aquaculture projects from concept to operation. We handle every aspect of your aquaculture facility including design, construction, equipment installation, and staff training.',
            'acf' => [
                'service_tagline' => 'End-to-end aquaculture solutions',
                'service_icon' => '🏭',
                'service_description_short' => 'Full-service project management for aquaculture facilities.',
                'service_features' => "Complete design\nConstruction management\nEquipment procurement\nStaff training",
                'service_benefits' => "Single point of contact\nTime savings\nQuality assurance\nPost-installation support",
                'service_cta_text' => 'Start Your Project',
                'service_cta_link' => '/en/contact'
            ]
        ],
        'uk' => [
            'title' => 'Рішення під ключ',
            'content' => 'Повні проєкти аквакультури під ключ від концепції до експлуатації. Ми керуємо кожним аспектом вашого аквакультурного об\'єкта, включаючи проектування, будівництво, встановлення обладнання та навчання персоналу.',
            'acf' => [
                'service_tagline' => 'Комплексні рішення для аквакультури',
                'service_icon' => '🏭',
                'service_description_short' => 'Повне управління проєктами для аквакультурних об\'єктів.',
                'service_features' => "Повне проектування\nУправління будівництвом\nЗакупівля обладнання\nНавчання персоналу",
                'service_benefits' => "Єдина точка контакту\nЕкономія часу\nЗабезпечення якості\nПіслямонтажна підтримка",
                'service_cta_text' => 'Почніть ваш проєкт',
                'service_cta_link' => '/uk/contact'
            ]
        ]
    ]
];

foreach ($services_data as $service_pair) {
    // Create English service
    $en_service_id = wp_insert_post([
        'post_title'   => $service_pair['en']['title'],
        'post_content' => $service_pair['en']['content'],
        'post_status'  => 'publish',
        'post_type'    => 'service',
    ]);

    if (is_wp_error($en_service_id)) {
        echo "  ERROR: Failed to create service: {$service_pair['en']['title']}\n";
        continue;
    }

    // Set language and ACF fields
    pll_set_post_language($en_service_id, 'en');
    foreach ($service_pair['en']['acf'] as $field => $value) {
        update_field($field, $value, $en_service_id);
    }
    echo "  ✓ Created EN service: {$service_pair['en']['title']} (ID: $en_service_id)\n";

    // Create Ukrainian service
    $uk_service_id = wp_insert_post([
        'post_title'   => $service_pair['uk']['title'],
        'post_content' => $service_pair['uk']['content'],
        'post_status'  => 'publish',
        'post_type'    => 'service',
    ]);

    if (is_wp_error($uk_service_id)) {
        echo "  ERROR: Failed to create service: {$service_pair['uk']['title']}\n";
        continue;
    }

    // Set language and ACF fields
    pll_set_post_language($uk_service_id, 'uk');
    foreach ($service_pair['uk']['acf'] as $field => $value) {
        update_field($field, $value, $uk_service_id);
    }
    echo "  ✓ Created UK service: {$service_pair['uk']['title']} (ID: $uk_service_id)\n";

    // Link translations
    pll_save_post_translations([
        'en' => $en_service_id,
        'uk' => $uk_service_id,
    ]);
    echo "  ✓ Linked translations\n";

    $created['services'][] = [
        'en' => ['id' => $en_service_id, 'title' => $service_pair['en']['title']],
        'uk' => ['id' => $uk_service_id, 'title' => $service_pair['uk']['title']]
    ];
}

echo "\n";

// ============================================
// 3. CREATE PROJECTS
// ============================================
echo "3. Creating Projects...\n";
echo "----------------------\n";

$projects_data = [
    [
        'en' => [
            'title' => 'UAE Shrimp Farm - 250MT Annual Production',
            'content' => 'State-of-the-art super-intensive shrimp production facility designed for desert climate conditions in the United Arab Emirates.',
            'acf' => [
                'project_client' => 'Confidential Client, UAE',
                'project_location' => 'United Arab Emirates',
                'project_year' => 2022,
                'project_status' => 'construction',
                'project_system_type' => 'ras',
                'project_annual_production' => 250,
                'project_production_unit' => 'tonnes',
                'project_facility_size' => 2000,
                'project_facility_size_unit' => 'm²',
                'project_standing_biomass' => 45,
                'project_biomass_unit' => 'tonnes',
                'project_water_volume' => 4000,
                'project_water_volume_unit' => 'm³',
                'project_overview' => 'State-of-the-art super-intensive shrimp production facility for desert climate.',
                'project_challenge' => 'Extreme climate management with outdoor temperatures of 45-50°C in summer.',
                'project_solution' => 'Insulated building design, efficient HVAC systems, and energy-efficient cooling.',
                'project_results' => 'Successfully designed 250 tonnes annual production capacity with 95% water recirculation.',
                'project_technologies' => [
                    [
                        'technology_name' => 'Biofloc Technology',
                        'technology_description' => 'Advanced biofloc system for water management'
                    ],
                    [
                        'technology_name' => 'SOLVOX Oxygen System',
                        'technology_description' => 'Linde SOLVOX for dissolved oxygen'
                    ]
                ],
                'project_performance_metrics' => [
                    [
                        'metric_name' => 'Water Exchange',
                        'metric_value' => '5',
                        'metric_unit' => '% per day'
                    ],
                    [
                        'metric_name' => 'Feed Conversion Ratio',
                        'metric_value' => '1.55',
                        'metric_unit' => 'FCR'
                    ]
                ],
                'project_featured' => true
            ]
        ],
        'uk' => [
            'title' => 'Ферма креветок ОАЕ - 250 тонн на рік',
            'content' => 'Сучасний суперінтенсивний об\'єкт виробництва креветок, спроектований для умов пустельного клімату в Об\'єднаних Арабських Еміратах.',
            'acf' => [
                'project_client' => 'Confidential Client, UAE',
                'project_location' => 'Об\'єднані Арабські Емірати',
                'project_year' => 2022,
                'project_status' => 'construction',
                'project_system_type' => 'ras',
                'project_annual_production' => 250,
                'project_production_unit' => 'тонн',
                'project_facility_size' => 2000,
                'project_facility_size_unit' => 'м²',
                'project_standing_biomass' => 45,
                'project_biomass_unit' => 'тонн',
                'project_water_volume' => 4000,
                'project_water_volume_unit' => 'м³',
                'project_overview' => 'Сучасний суперінтенсивний об\'єкт виробництва креветок для пустельного клімату.',
                'project_challenge' => 'Управління екстремальним кліматом з температурою на відкритому повітрі 45-50°C влітку.',
                'project_solution' => 'Ізольована конструкція будівлі, ефективні системи HVAC та енергоефективне охолодження.',
                'project_results' => 'Успішно спроектовано потужність річного виробництва 250 тонн з 95% рециркуляцією води.',
                'project_technologies' => [
                    [
                        'technology_name' => 'Технологія біофлок',
                        'technology_description' => 'Передова система біофлок для управління водою'
                    ],
                    [
                        'technology_name' => 'Система кисню SOLVOX',
                        'technology_description' => 'Linde SOLVOX для розчиненого кисню'
                    ]
                ],
                'project_performance_metrics' => [
                    [
                        'metric_name' => 'Обмін води',
                        'metric_value' => '5',
                        'metric_unit' => '% на день'
                    ],
                    [
                        'metric_name' => 'Коефіцієнт конверсії корму',
                        'metric_value' => '1.55',
                        'metric_unit' => 'FCR'
                    ]
                ],
                'project_featured' => true
            ]
        ]
    ],
    [
        'en' => [
            'title' => 'Pakistan Shrimp Farm & Hatchery - Biofloc System',
            'content' => 'Innovative biofloc-based shrimp production with integrated tilapia farming for sustainable aquaculture in Pakistan.',
            'acf' => [
                'project_client' => 'Private Investment Group, Pakistan',
                'project_location' => 'Pakistan',
                'project_year' => 2024,
                'project_status' => 'design',
                'project_system_type' => 'biofloc',
                'project_annual_production' => 80,
                'project_production_unit' => 'tonnes',
                'project_facility_size' => 1500,
                'project_facility_size_unit' => 'm²',
                'project_overview' => 'Innovative biofloc-based shrimp production with integrated tilapia farming.',
                'project_challenge' => 'Integration of biofloc technology with IMTA system for sustainable production.',
                'project_solution' => 'Designed biofloc RAS with tilapia integration for nutrient cycling.',
                'project_results' => 'Feasibility study completed showing 3-year ROI with sustainable production.',
                'project_technologies' => [
                    [
                        'technology_name' => 'Biofloc RAS',
                        'technology_description' => 'Zero-discharge biofloc system'
                    ],
                    [
                        'technology_name' => 'IMTA Integration',
                        'technology_description' => 'Multi-trophic aquaculture with tilapia'
                    ]
                ],
                'project_featured' => false
            ]
        ],
        'uk' => [
            'title' => 'Креветкова ферма та інкубаторій Пакистан - Біофлок система',
            'content' => 'Інноваційне виробництво креветок на основі біофлок з інтегрованим вирощуванням тиляпії для сталої аквакультури в Пакистані.',
            'acf' => [
                'project_client' => 'Private Investment Group, Pakistan',
                'project_location' => 'Пакистан',
                'project_year' => 2024,
                'project_status' => 'design',
                'project_system_type' => 'biofloc',
                'project_annual_production' => 80,
                'project_production_unit' => 'тонн',
                'project_facility_size' => 1500,
                'project_facility_size_unit' => 'м²',
                'project_overview' => 'Інноваційне виробництво креветок на основі біофлок з інтегрованим вирощуванням тиляпії.',
                'project_challenge' => 'Інтеграція технології біофлок з системою IMTA для сталого виробництва.',
                'project_solution' => 'Спроектовано біофлок RAS з інтеграцією тиляпії для циклу поживних речовин.',
                'project_results' => 'Завершено дослідження доцільності, що показує 3-річний ROI зі сталим виробництвом.',
                'project_technologies' => [
                    [
                        'technology_name' => 'Біофлок RAS',
                        'technology_description' => 'Система біофлок з нульовим скиданням'
                    ],
                    [
                        'technology_name' => 'Інтеграція IMTA',
                        'technology_description' => 'Багаторівнева аквакультура з тиляпією'
                    ]
                ],
                'project_featured' => false
            ]
        ]
    ]
];

foreach ($projects_data as $project_pair) {
    // Create English project
    $en_project_id = wp_insert_post([
        'post_title'   => $project_pair['en']['title'],
        'post_content' => $project_pair['en']['content'],
        'post_status'  => 'publish',
        'post_type'    => 'project',
    ]);

    if (is_wp_error($en_project_id)) {
        echo "  ERROR: Failed to create project: {$project_pair['en']['title']}\n";
        continue;
    }

    // Set language and ACF fields
    pll_set_post_language($en_project_id, 'en');
    foreach ($project_pair['en']['acf'] as $field => $value) {
        $result = update_field($field, $value, $en_project_id);
        if (!$result && $value !== '' && $value !== null && $value !== false) {
            echo "    ⚠ Warning: Could not set field '$field' for EN project\n";
        }
    }
    echo "  ✓ Created EN project: {$project_pair['en']['title']} (ID: $en_project_id)\n";
    echo "    - Set " . count($project_pair['en']['acf']) . " ACF fields\n";

    // Create Ukrainian project
    $uk_project_id = wp_insert_post([
        'post_title'   => $project_pair['uk']['title'],
        'post_content' => $project_pair['uk']['content'],
        'post_status'  => 'publish',
        'post_type'    => 'project',
    ]);

    if (is_wp_error($uk_project_id)) {
        echo "  ERROR: Failed to create project: {$project_pair['uk']['title']}\n";
        continue;
    }

    // Set language and ACF fields
    pll_set_post_language($uk_project_id, 'uk');
    foreach ($project_pair['uk']['acf'] as $field => $value) {
        $result = update_field($field, $value, $uk_project_id);
        if (!$result && $value !== '' && $value !== null && $value !== false) {
            echo "    ⚠ Warning: Could not set field '$field' for UK project\n";
        }
    }
    echo "  ✓ Created UK project: {$project_pair['uk']['title']} (ID: $uk_project_id)\n";
    echo "    - Set " . count($project_pair['uk']['acf']) . " ACF fields\n";

    // Link translations
    pll_save_post_translations([
        'en' => $en_project_id,
        'uk' => $uk_project_id,
    ]);
    echo "  ✓ Linked translations\n";

    $created['projects'][] = [
        'en' => ['id' => $en_project_id, 'title' => $project_pair['en']['title']],
        'uk' => ['id' => $uk_project_id, 'title' => $project_pair['uk']['title']]
    ];
}

echo "\n";

// ============================================
// 4. CREATE SOFTWARE
// ============================================
echo "4. Creating Software Solutions...\n";
echo "--------------------------------\n";

$software_data = [
    [
        'en' => [
            'title' => 'AI Fish Counting',
            'content' => 'Automated fish population monitoring using artificial intelligence and computer vision. Accurate, non-invasive counting system for biomass estimation and inventory management.',
            'acf' => [
                'software_tagline' => 'Automated fish population monitoring',
                'software_icon' => '🤖',
                'software_description_short' => 'AI-powered system for accurate fish counting and biomass estimation',
                'software_key_features' => "Real-time counting\nComputer vision AI\nNon-invasive monitoring\nBiomass estimation\nInventory tracking",
                'software_technology_stack' => 'TensorFlow, Python, OpenCV, REST API',
                'software_demo_url' => 'https://demo.vismar-aqua.com/ai-counting',
                'software_documentation_url' => 'https://docs.vismar-aqua.com/ai-counting'
            ]
        ],
        'uk' => [
            'title' => 'AI підрахунок риби',
            'content' => 'Автоматизований моніторинг популяції риби з використанням штучного інтелекту та комп\'ютерного зору. Точна, неінвазивна система підрахунку для оцінки біомаси та управління запасами.',
            'acf' => [
                'software_tagline' => 'Автоматизований моніторинг популяції риби',
                'software_icon' => '🤖',
                'software_description_short' => 'Система на базі AI для точного підрахунку риби та оцінки біомаси',
                'software_key_features' => "Підрахунок у реальному часі\nШтучний інтелект комп'ютерного зору\nНеінвазивний моніторинг\nОцінка біомаси\nВідстеження запасів",
                'software_technology_stack' => 'TensorFlow, Python, OpenCV, REST API',
                'software_demo_url' => 'https://demo.vismar-aqua.com/ai-counting',
                'software_documentation_url' => 'https://docs.vismar-aqua.com/ai-counting'
            ]
        ]
    ],
    [
        'en' => [
            'title' => 'AquaMonitor Pro',
            'content' => 'Comprehensive farm management system for aquaculture operations. Monitor water quality, feeding schedules, fish health, and production metrics in real-time from any device.',
            'acf' => [
                'software_tagline' => 'Complete aquaculture management platform',
                'software_icon' => '📊',
                'software_description_short' => 'All-in-one solution for managing modern aquaculture facilities',
                'software_key_features' => "Real-time monitoring\nWater quality tracking\nFeeding automation\nHealth alerts\nProduction analytics\nMobile app",
                'software_technology_stack' => 'React, Node.js, PostgreSQL, IoT sensors',
                'software_demo_url' => 'https://demo.vismar-aqua.com/aquamonitor',
                'software_documentation_url' => 'https://docs.vismar-aqua.com/aquamonitor'
            ]
        ],
        'uk' => [
            'title' => 'AquaMonitor Pro',
            'content' => 'Комплексна система управління фермою для аквакультурних операцій. Моніторинг якості води, графіків годівлі, здоров\'я риби та виробничих показників у реальному часі з будь-якого пристрою.',
            'acf' => [
                'software_tagline' => 'Повна платформа управління аквакультурою',
                'software_icon' => '📊',
                'software_description_short' => 'Комплексне рішення для управління сучасними аквакультурними об\'єктами',
                'software_key_features' => "Моніторинг у реальному часі\nВідстеження якості води\nАвтоматизація годівлі\nСповіщення про здоров'я\nАналітика виробництва\nМобільний додаток",
                'software_technology_stack' => 'React, Node.js, PostgreSQL, IoT сенсори',
                'software_demo_url' => 'https://demo.vismar-aqua.com/aquamonitor',
                'software_documentation_url' => 'https://docs.vismar-aqua.com/aquamonitor'
            ]
        ]
    ]
];

foreach ($software_data as $software_pair) {
    // Create English software
    $en_software_id = wp_insert_post([
        'post_title'   => $software_pair['en']['title'],
        'post_content' => $software_pair['en']['content'],
        'post_status'  => 'publish',
        'post_type'    => 'software',
    ]);

    if (is_wp_error($en_software_id)) {
        echo "  ERROR: Failed to create software: {$software_pair['en']['title']}\n";
        continue;
    }

    // Set language and ACF fields
    pll_set_post_language($en_software_id, 'en');
    foreach ($software_pair['en']['acf'] as $field => $value) {
        update_field($field, $value, $en_software_id);
    }
    echo "  ✓ Created EN software: {$software_pair['en']['title']} (ID: $en_software_id)\n";

    // Create Ukrainian software
    $uk_software_id = wp_insert_post([
        'post_title'   => $software_pair['uk']['title'],
        'post_content' => $software_pair['uk']['content'],
        'post_status'  => 'publish',
        'post_type'    => 'software',
    ]);

    if (is_wp_error($uk_software_id)) {
        echo "  ERROR: Failed to create software: {$software_pair['uk']['title']}\n";
        continue;
    }

    // Set language and ACF fields
    pll_set_post_language($uk_software_id, 'uk');
    foreach ($software_pair['uk']['acf'] as $field => $value) {
        update_field($field, $value, $uk_software_id);
    }
    echo "  ✓ Created UK software: {$software_pair['uk']['title']} (ID: $uk_software_id)\n";

    // Link translations
    pll_save_post_translations([
        'en' => $en_software_id,
        'uk' => $uk_software_id,
    ]);
    echo "  ✓ Linked translations\n";

    $created['software'][] = [
        'en' => ['id' => $en_software_id, 'title' => $software_pair['en']['title']],
        'uk' => ['id' => $uk_software_id, 'title' => $software_pair['uk']['title']]
    ];
}

echo "\n";

// ============================================
// 5. CREATE SPECIES
// ============================================
echo "5. Creating Species...\n";
echo "---------------------\n";

$species_data = [
    [
        'en' => [
            'title' => 'Rainbow Trout',
            'content' => 'Rainbow trout (Oncorhynchus mykiss) is one of the most popular cold-water aquaculture species. Known for excellent flavor and rapid growth rates in optimal conditions.',
            'acf' => [
                'species_scientific_name' => 'Oncorhynchus mykiss',
                'species_common_names' => 'Rainbow Trout, Steelhead',
                'species_optimal_temp' => '12-18°C',
                'species_optimal_ph' => '6.5-8.0',
                'species_optimal_salinity' => '> 7 mg/L',
                'species_growth_rate' => 'Fast (18-24 months to market size)',
                'species_market_size' => '300-400g',
                'species_feeding' => '1.2:1',
                'species_systems' => '60-80 kg/m³',
                'species_challenges' => 'Excellent for RAS and flow-through systems. Highly valued in European markets. Requires high oxygen levels and good water quality.'
            ]
        ],
        'uk' => [
            'title' => 'Райдужна форель',
            'content' => 'Райдужна форель (Oncorhynchus mykiss) є одним з найпопулярніших холодноводних видів аквакультури. Відома відмінним смаком та швидкими темпами росту в оптимальних умовах.',
            'acf' => [
                'species_scientific_name' => 'Oncorhynchus mykiss',
                'species_common_names' => 'Райдужна форель, Стальноголовий лосось',
                'species_optimal_temp' => '12-18°C',
                'species_optimal_ph' => '6.5-8.0',
                'species_optimal_salinity' => '> 7 мг/л',
                'species_growth_rate' => 'Швидкий (18-24 місяці до товарного розміру)',
                'species_market_size' => '300-400г',
                'species_feeding' => '1.2:1',
                'species_systems' => '60-80 кг/м³',
                'species_challenges' => 'Відмінно підходить для систем RAS та проточних систем. Високо цінується на європейських ринках. Потребує високого рівня кисню та хорошої якості води.'
            ]
        ]
    ],
    [
        'en' => [
            'title' => 'Nile Tilapia',
            'content' => 'Nile tilapia (Oreochromis niloticus) is one of the most farmed fish species globally. Hardy, fast-growing, and adaptable to various production systems.',
            'acf' => [
                'species_scientific_name' => 'Oreochromis niloticus',
                'species_common_names' => 'Nile Tilapia, Nilotica',
                'species_optimal_temp' => '25-30°C',
                'species_optimal_ph' => '6.5-9.0',
                'species_optimal_salinity' => '> 4 mg/L',
                'species_growth_rate' => 'Very fast (6-8 months to market size)',
                'species_market_size' => '500-800g',
                'species_feeding' => '1.6:1',
                'species_systems' => '80-120 kg/m³',
                'species_challenges' => 'Extremely adaptable warm-water species. Tolerates variable water quality. Ideal for RAS systems in controlled environments.'
            ]
        ],
        'uk' => [
            'title' => 'Нільська тиляпія',
            'content' => 'Нільська тиляпія (Oreochromis niloticus) є одним з найбільш вирощуваних видів риби у світі. Витривала, швидкоростуча та адаптивна до різних систем виробництва.',
            'acf' => [
                'species_scientific_name' => 'Oreochromis niloticus',
                'species_common_names' => 'Нільська тиляпія, Нілотика',
                'species_optimal_temp' => '25-30°C',
                'species_optimal_ph' => '6.5-9.0',
                'species_optimal_salinity' => '> 4 мг/л',
                'species_growth_rate' => 'Дуже швидкий (6-8 місяців до товарного розміру)',
                'species_market_size' => '500-800г',
                'species_feeding' => '1.6:1',
                'species_systems' => '80-120 кг/м³',
                'species_challenges' => 'Надзвичайно адаптивний тепловодний вид. Переносить змінну якість води. Ідеальний для систем RAS у контрольованих середовищах.'
            ]
        ]
    ]
];

foreach ($species_data as $species_pair) {
    // Create English species
    $en_species_id = wp_insert_post([
        'post_title'   => $species_pair['en']['title'],
        'post_content' => $species_pair['en']['content'],
        'post_status'  => 'publish',
        'post_type'    => 'species',
    ]);

    if (is_wp_error($en_species_id)) {
        echo "  ERROR: Failed to create species: {$species_pair['en']['title']}\n";
        continue;
    }

    // Set language and ACF fields
    pll_set_post_language($en_species_id, 'en');
    foreach ($species_pair['en']['acf'] as $field => $value) {
        update_field($field, $value, $en_species_id);
    }
    echo "  ✓ Created EN species: {$species_pair['en']['title']} (ID: $en_species_id)\n";

    // Create Ukrainian species
    $uk_species_id = wp_insert_post([
        'post_title'   => $species_pair['uk']['title'],
        'post_content' => $species_pair['uk']['content'],
        'post_status'  => 'publish',
        'post_type'    => 'species',
    ]);

    if (is_wp_error($uk_species_id)) {
        echo "  ERROR: Failed to create species: {$species_pair['uk']['title']}\n";
        continue;
    }

    // Set language and ACF fields
    pll_set_post_language($uk_species_id, 'uk');
    foreach ($species_pair['uk']['acf'] as $field => $value) {
        update_field($field, $value, $uk_species_id);
    }
    echo "  ✓ Created UK species: {$species_pair['uk']['title']} (ID: $uk_species_id)\n";

    // Link translations
    pll_save_post_translations([
        'en' => $en_species_id,
        'uk' => $uk_species_id,
    ]);
    echo "  ✓ Linked translations\n";

    $created['species'][] = [
        'en' => ['id' => $en_species_id, 'title' => $species_pair['en']['title']],
        'uk' => ['id' => $uk_species_id, 'title' => $species_pair['uk']['title']]
    ];
}

echo "\n";

// ============================================
// 6. CREATE MENUS
// ============================================
echo "6. Creating Navigation Menus...\n";
echo "-------------------------------\n";

// Check if menus already exist
$en_menu_exists = wp_get_nav_menu_object('Main Menu EN');
$uk_menu_exists = wp_get_nav_menu_object('Main Menu UK');

// Create English menu
if (!$en_menu_exists) {
    $en_menu_id = wp_create_nav_menu('Main Menu EN');

    if (is_wp_error($en_menu_id)) {
        echo "  ERROR: Failed to create English menu\n";
    } else {
        echo "  ✓ Created English menu (ID: $en_menu_id)\n";

        // Add pages to English menu
        $menu_order = 1;
        foreach ($created['pages'] as $page) {
            wp_update_nav_menu_item($en_menu_id, 0, [
                'menu-item-title' => $page['en']['title'],
                'menu-item-object-id' => $page['en']['id'],
                'menu-item-object' => 'page',
                'menu-item-type' => 'post_type',
                'menu-item-status' => 'publish',
                'menu-item-position' => $menu_order++
            ]);
        }

        echo "  ✓ Added " . count($created['pages']) . " items to English menu\n";
        $created['menus']['en'] = $en_menu_id;
    }
} else {
    echo "  ⚠ English menu already exists\n";
    $created['menus']['en'] = $en_menu_exists->term_id;
}

// Create Ukrainian menu
if (!$uk_menu_exists) {
    $uk_menu_id = wp_create_nav_menu('Main Menu UK');

    if (is_wp_error($uk_menu_id)) {
        echo "  ERROR: Failed to create Ukrainian menu\n";
    } else {
        echo "  ✓ Created Ukrainian menu (ID: $uk_menu_id)\n";

        // Add pages to Ukrainian menu
        $menu_order = 1;
        foreach ($created['pages'] as $page) {
            wp_update_nav_menu_item($uk_menu_id, 0, [
                'menu-item-title' => $page['uk']['title'],
                'menu-item-object-id' => $page['uk']['id'],
                'menu-item-object' => 'page',
                'menu-item-type' => 'post_type',
                'menu-item-status' => 'publish',
                'menu-item-position' => $menu_order++
            ]);
        }

        echo "  ✓ Added " . count($created['pages']) . " items to Ukrainian menu\n";
        $created['menus']['uk'] = $uk_menu_id;
    }
} else {
    echo "  ⚠ Ukrainian menu already exists\n";
    $created['menus']['uk'] = $uk_menu_exists->term_id;
}

echo "\n";

// ============================================
// 7. SET FRONT PAGE
// ============================================
echo "7. Setting Front Page...\n";
echo "-----------------------\n";

// Find the Home page
$home_page = null;
foreach ($created['pages'] as $page) {
    if ($page['en']['title'] === 'Home') {
        $home_page = $page['en']['id'];
        break;
    }
}

if ($home_page) {
    update_option('show_on_front', 'page');
    update_option('page_on_front', $home_page);
    echo "  ✓ Set Home page (ID: $home_page) as front page\n";
} else {
    echo "  ⚠ Could not find Home page to set as front page\n";
}

echo "\n";

// ============================================
// SUMMARY
// ============================================
echo "===========================================\n";
echo "SUMMARY OF CREATED CONTENT\n";
echo "===========================================\n\n";

echo "Pages created: " . (count($created['pages']) * 2) . " (" . count($created['pages']) . " pairs)\n";
echo "Services created: " . (count($created['services']) * 2) . " (" . count($created['services']) . " pairs)\n";
echo "Projects created: " . (count($created['projects']) * 2) . " (" . count($created['projects']) . " pairs)\n";
echo "Software created: " . (count($created['software']) * 2) . " (" . count($created['software']) . " pairs)\n";
echo "Species created: " . (count($created['species']) * 2) . " (" . count($created['species']) . " pairs)\n";
echo "Menus created: " . count($created['menus']) . "\n\n";

echo "KEY POST IDs:\n";
echo "-------------\n";
foreach ($created['pages'] as $page) {
    if ($page['en']['title'] === 'Home') {
        echo "Home Page (EN): {$page['en']['id']}\n";
        echo "Home Page (UK): {$page['uk']['id']}\n";
    }
}

if (!empty($created['services'])) {
    echo "\nFirst Service:\n";
    echo "  EN: {$created['services'][0]['en']['title']} (ID: {$created['services'][0]['en']['id']})\n";
    echo "  UK: {$created['services'][0]['uk']['title']} (ID: {$created['services'][0]['uk']['id']})\n";
}

if (!empty($created['projects'])) {
    echo "\nFeatured Project:\n";
    echo "  EN: {$created['projects'][0]['en']['title']} (ID: {$created['projects'][0]['en']['id']})\n";
    echo "  UK: {$created['projects'][0]['uk']['title']} (ID: {$created['projects'][0]['uk']['id']})\n";
}

echo "\n===========================================\n";
echo "✓ Sample content creation complete!\n";
echo "===========================================\n\n";

echo "Next steps:\n";
echo "1. Visit WordPress admin: http://localhost:8080/wp-admin\n";
echo "2. Check content in both languages\n";
echo "3. Test GraphQL queries for frontend\n";
echo "4. Configure theme settings if needed\n\n";
