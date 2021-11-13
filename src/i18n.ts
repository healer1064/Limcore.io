import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(LanguageDetector).init({
  lng: 'ru',
  // we init with resources
  // \u000A - перенос строки
  resources: {
    en: {
      translations: {
        login: 'Login',

        nav_about: 'About Limcore',
        nav_roadmap: 'Roadmap',
        nav_team: 'Team',
        nav_qa: 'Q&A',

        landing_title: 'Cloud mining of all the forks',
        landing_subtitle: 'The fastest and the most profitable way of cryptocurrency investing',

        firstRound_round1: 'Round 1',
        firstRound_limit: 'Limit',
        firstRound_limcPrice: '1 LIMC price',
        firstRound_terms: 'Terms',
        firstRound_firstRoundTerms: 'Nov 15, 2021 – Dec 30, 2021',
        firstRound_startSelling: 'Market launch will take place on Nov 15 at 00:01 MOS.',
        firstRound_followNews: 'Follow the news in our Telegram channel',

        roundsRoadmap_round2: 'Round 2',
        roundsRoadmap_round3: 'Round 3',
        roundsRoadmap_round4: 'Round 4',
        roundsRoadmap_round5: 'Round 5 (Final)',
        roundsRoadmap_endSelling: 'End of 2022',
        roundsRoadmap_description1:
          'Tokens limit in every round depends directly on our infrastructure readiness and server equipment factories productive capacity. With each round LIMC becomes more expensive due to our systematic increase of mining capacities (terabyte), fixed for each LIMC token.',
        roundsRoadmap_description2:
          'Prices and limits for Rounds 3, 4, 5 will be published later, as at the latest update of our website we haven’t received yet guaranteed quantity of the equipment we get from the producer factories by planned Rounds end dates.',

        limcoreDescription_modern: 'Modern datacenter of Chi mining and all the forks simultaneously.',
        limcoreDescription_safe:
          'It is much safer and more profitable than most of the other investing offers in the market.',
        limcoreDescription_howWorks: 'How does it work?',
        limcoreDescription_howSubtitle1: 'Buying LIMC, you get a mining capacity from our datacenter.',
        limcoreDescription_howSubtitle2:
          'This is the easiest and the safest way of investing in mining, as LIMC token has its own liquidity and will be available shortly on large exchanges.',
        limcoreDescription_howSubtitle3:
          'You can siphon off your assets, gained from mining, or sell your LIMC tokens anytime.',
        limcoreDescription_howSubtitle4:
          'By 2024 Limcore Company is to construct their own tape data storage, which will allow to increase manyfold the income from mining.',

        roadmap_may30: 'Assembling of a test stand for mining',
        roadmap_june24: 'My profile launch v0.1',
        roadmap_july10: 'Signing and prepaying for land and building purchase agreement',
        roadmap_july22: 'Laying of first electric power networks',
        roadmap_august03: 'Completion of land and building registration',
        roadmap_october15: 'Limcore Token creation',
        roadmap_november1: 'Russian legal entity launch',
        roadmap_november15: 'My profile launch v.0.2',
        roadmap_decemberEnd: 'End of December 2021',

        roadmap_startRound1: 'Round 1 launch 1LIMC = $95/80,000 LIMC',
        roadmap_startRound2: 'Round 2 launch 1 LIMC = min $110 / 120,000 LIMC',
        roadmap_startRound3: 'Round 3 launch',
        roadmap_startRound4: 'Round 4 launch',
        roadmap_startRound5: 'Round 5 launch',

        roadmap_tg: 'Photos and videos are in our Telegram channel',
        roadmap_inProcess: 'In progress',
        roadmap_registration: 'Swiss legal entity launch',
        roadmap_listing: 'LIMC listing on HITBTC + BitGlobal exchanges',
        roadmap_buildUp: 'DPC (Data Processing Center) build-up completion in Mozhaysk',
        roadmap_mvp: 'Development and MVP creation of own tape data storage',
        roadmap_launch: 'Tape data storages full-scale production launch',

        team_title: 'Project team',
        team_shumaev: 'Dmitry Shumaev',
        team_shumaevDesc:
          'Before Limcore worked in several government entities as IT Security specialist. Run the government entity BaikonurSvyazInform',

        team_losev: 'Pavel Losev',
        team_losevDesc: 'Before Limcore worked in Central Bank of Russian Federation',

        team_turkinRank: 'Sales Support Department Director',
        team_turkin: 'Kirill Turkin',
        team_turkinDesc: 'Has a proven experience of Extra strict clients Follow up departments work forming',

        team_balikinRank: 'Leading System Administrator',
        team_balikin: 'Alexander Balykin',
        team_balikinDesc:
          'Before Limcore run his own company, which organized web and server architecture for more than 20 legal entities.',

        team_smirnovRank: 'System Administrator',
        team_smirnov: 'Dmitry Smirnov',
        team_smirnovDesc: 'Before Limcore used to work as a system administrator in Orenburg City Administration',

        team_kazachenkoRank: 'Security Department Director',
        team_kazachenko: 'Alexander Kazachenko',
        team_kazachenkoDesc:
          'Served in Russian Federation Security Ministries in Specialised Designation Company. Recipient of a Maroon beret.',

        team_mironovRank: 'Lawyer',
        team_mironov: 'Taras Mironov',
        team_mironovDesc: 'Forms technical enquiries for leading law firms within Limcore needs',

        team_plotnikovRank: 'Construction Director',
        team_plotnikov: 'Oleg Plotnikov',
        team_plotnikovDesc:
          'Personally implemented 68 government contracts and completed more than a thousand of commercial contracts in Russia.',

        footer_leaflet: 'Promotion leaflet',
        footer_infoDeclosure: 'Information disclosure',
        footer_docsRF: 'Russian Federation foundation documents',
        footer_docsRound1: 'Round 1 foundation documents',
        footer_equipInsurance: 'Equipment insurance',
        footer_buildingInsurance: 'Building and other assets insurance',
        footer_coop: 'Cooperation with users',
        footer_agreementPersonalData: 'User agreement on personal data processing',
        footer_agreementLimcBuy: 'LIMC token purchase agreement-offer',
        footer_russia: 'Russia',
        footer_fullOrganisationName: 'LLC Limcore Data Center',
        footer_docs: 'TRRC 502801001 / Tax Payer ID 9729264079',
        footer_address: 'Registered address: 98, Mira str., Mozhaysk, Russian Federaion',
        footer_issuer: 'Issuer LIMC Round 1',
        footer_switzerland: 'Switzerland',
        footer_inRegProcess: 'Registration in progress',

        qa_title: 'Q & A',
        qa_card1_title: 'What is the difference between farming & mining?',
        qa_card1_subtitle1:
          'Cryptocurrency mining demands equipment purchase or rent with its further set up. Besides, mining leads to electricity expenses. This has a bad influence on obtained cryptocurrency profitability.',
        qa_card1_subtitle2:
          'Another important difference from mining is that an investor buys digital assets for farming. Miners do not need to inject to cryptocurrency but do need to buy mining farms. The purchased cryptoassets are the things that bring in the profit while farming.',
        qa_card1_subtitle3:
          'Limcore provides farming services in the Chia network. The process flows with remote Data Processing Center with common compute power. Farming can be compared with a purchase of a big industry shares, where each participant gets a manufactured product pro rata to their investments.',

        qa_card2_title: 'How the mining compensation is distributed within LIMC holders?',
        qa_card2_subtitle1: 'For example, two users availed of Limcore services.',
        qa_card2_subtitle2: 'First user possesses 1 LIMC, the second one – 2 LIMCs.',
        qa_card2_subtitle3: 'Limcore DPC mined 1200 Chia coins in 24 hours.',
        qa_card2_subtitle4: 'Limcore keeps 15% - 150 Chia coins for operating and electricity costs.',
        qa_card2_subtitle5: 'First user will get ⅓ from 850 Chia coins, which is 340 Chia coins.',
        qa_card2_subtitle6: 'Second user will get ⅔ from 850 Chia coins, which is 680 Chia coins.',

        qa_card3_title: 'What are the Limcore platform advantages?',
        qa_card3_subtitle1: 'A low barrier of entry starting from 0,1 LIMC.',
        qa_card3_subtitle2:
          'There is no need in expensive equipment or support services, additional expenses for electricity, etc. A high farming effectiveness.',
        qa_card3_subtitle3: 'Transparence.',
        qa_card3_subtitle4: 'DeFi mechanics in compensation distribution.',
        qa_card3_subtitle5:
          'The list of supported forks is constantly being enlarged, which allows to increase the Limcore users’ income.',
        qa_card3_subtitle6:
          'The compensation is calculated in real time and transferred to a Chia wallet account within 24 hours. All fixes assets, land and equipment fully belongs to Limcore company on the legal ownership.',
        qa_card3_subtitle7:
          'We are open for meetings and invite everyone interested for excursions. 98, Mira str., Mozhaysk, Moscow Region, Russian Federation.',

        qa_card4_title: 'Why Chia?',
        qa_card4_subtitle1:
          'We are convinced that Chia Network is one of the most interesting and high-potential projects.',
        qa_card4_subtitle2:
          'Project’s founder Bram Cohen is an experienced businessman, founder of the vera torrents (BitTorrent). He assembled a strong team, who have all the necessary subject matter expertise for a market leader.',
        qa_card4_subtitle3: 'The company president Gene Hoffman is a former CEO of eMusic.com and Vindicia.',
        qa_card4_subtitle4: 'Financial director Mitch Edwards is a former Deputy CEO of the Overstock company.',
        qa_card4_subtitle5:
          'Partner Michael Novogratz is a member of the consultative committee on financial markets in FRBNY (Federal Reserve Bank of New York), Managing director of the hedge fund, dollar billionaire. He used to be a Goldman Sachs Branch Office Director in Latin America.',
        qa_card4_subtitle6: 'The experienced Chia team can guarantee the Limcore platform work.',
      },
    },
    ru: {
      translations: {
        login: 'Войти',

        nav_about: 'Что такое Limcore?',
        nav_roadmap: 'Roadmap',
        nav_team: 'Команда',
        nav_qa: 'Вопрос-ответ',

        landing_title: 'Облачный майнинг всех форков',
        landing_subtitle: 'Самый быстрый и выгодный способ инвестирования в криптовалюту',

        firstRound_round1: 'Раунд №1',
        firstRound_limit: 'Лимит',
        firstRound_limcPrice: 'Цена за 1 LIMC',
        firstRound_terms: 'Сроки',
        firstRound_firstRoundTerms: '15.11.2021 — 30.12.21',
        firstRound_startSelling: 'Старт продаж состоится 15 ноября в 00:01 по МСК',
        firstRound_followNews: 'Следите за новостями в нашей группе в Telegram',

        roundsRoadmap_round2: 'Раунд №2',
        roundsRoadmap_round3: 'Раунд №3',
        roundsRoadmap_round4: 'Раунд №4',
        roundsRoadmap_round5: 'Раунд №5 (Final)',
        roundsRoadmap_endSelling: 'конец 2022',
        roundsRoadmap_description1:
          'Лимит токенов в каждом раунде напрямую зависит от готовности нашей инфраструктуры и производственной мощности заводов изготовителей серверного оборудования. С каждым раундом LIMC продаётся дороже, из-за нашего постепенного увеличения объемов майнинговых мощностей (терабайт) закреплённых за каждым токеном LIMC',
        roundsRoadmap_description2:
          'Стоимость и лимиты для Раундов №3,4,5 будут опубликованы позже, т.к. на момент последнего обновления нашего сайта мы не получили гарантированное количество получаемого нами оборудования от заводов изготовителей к планируемым датам завершения раундов',

        limcoreDescription_modern: 'Современный дата-центр майнинга Chia и всех форков одновременно',
        limcoreDescription_safe: 'Это безопаснее и выгоднее большинства инвестиционных предложений на рынке',
        limcoreDescription_howWorks: 'Как это работает?',
        limcoreDescription_howSubtitle1: 'Покупая LIMC, вы приобретаете майнинговую мощность из нашего дата-центр',
        limcoreDescription_howSubtitle2:
          'Это самый простой и безопасный способ инвестирования в майнинг, поскольку токен LIMC в ближайшее время будет присутствовать на крупных биржах и обладает собственной ликвидностью',
        limcoreDescription_howSubtitle3:
          'Вы можете в любое время вывести активы полученные от майнинга или продать свои токены LIМС',
        limcoreDescription_howSubtitle4:
          'К 2024 году компания Limcore сконструирует собственную ленточную систему хранения данных, что позволит многократно увеличить доход с майнинга',

        roadmap_may30: 'Сборка тестовой стойки для майнинга',
        roadmap_june24: 'Запуск личного кабинета v0.1',
        roadmap_july10: 'Подписание и авансирование договора о покупке земельного участка и здания',
        roadmap_july22: 'Прокладка первых электрических сетей',
        roadmap_august03: 'Завершение регистрации здания и земельного участка',
        roadmap_october15: 'Создание Limcore Token',
        roadmap_november1: 'Запуск Российского юридического лица',
        roadmap_november15: 'Запуск личного кабинета v.0.2',
        roadmap_decemberEnd: 'Конец декабря 2021',

        roadmap_startRound1: 'Старт Round №1 1LIMC = $95/80,000 LIMC',
        roadmap_startRound2: 'Старт Round №2 1 LIMC = min $110 / 120,000 LIMC',
        roadmap_startRound3: 'Старт Round №3',
        roadmap_startRound4: 'Старт Round №4',
        roadmap_startRound5: 'Старт Round №5',

        roadmap_tg: 'Фото и видео в нашей группе в Telegram',
        roadmap_inProcess: 'В процессе',
        roadmap_registration: 'Регистрация Швейцарского юридического лица',
        roadmap_listing: 'Листинг LIMC  на биржах HITBTC + BitGlobal',
        roadmap_buildUp: 'Завершение ремонта ЦОД в г. Можайск',
        roadmap_mvp: 'Проектирование и создание MVP собственного ленточного накопителя',
        roadmap_launch: 'Запуск серийного производства ленточного накопителя данных',

        team_title: 'Команда проекта',
        team_shumaev: 'Дмитрий Шумаев',
        team_shumaevDesc:
          'В юношестве работал в нескольких гос. учреждениях РФ в качестве сотрудника по ИТ безопасности. Руководил гос. предприятием «БайконурСвязьИнформ»',

        team_losev: 'Павел Лосев',
        team_losevDesc: 'Ранее работал в Центральном Банке Российской Федерации',

        team_turkinRank: 'Руководитель службы поддержки клиентов',
        team_turkin: 'Кирилл Туркин',
        team_turkinDesc: 'Имеет успешный опыт выстраивания работы отделов сопровождения особо требовательных клиентов',

        team_balikinRank: 'Ведущий системный администратор',
        team_balikin: 'Александр Балыкин',
        team_balikinDesc:
          'До начала работы в Limcore руководил собственной организацией по сопровождению сетевой и серверной архитектурой более чем у 20 юридических лиц',

        team_smirnovRank: 'Системный администратор',
        team_smirnov: 'Дмитрий Смирнов',
        team_smirnovDesc: 'Ранее строил карьеру в качестве системного администратора в администрации г. Оренбург',

        team_kazachenkoRank: 'Руководитель службы безопасности',
        team_kazachenko: 'Александр Казаченко',
        team_kazachenkoDesc:
          'Служил в силовых структурах Российской Федерации в роте специального назначения. Обладатель Крапового берета',

        team_mironovRank: 'Юрист',
        team_mironov: 'Тарас Миронов',
        team_mironovDesc: 'Формирует технические задания для ведущих юридических компаний в рамках задач Limcore',

        team_plotnikovRank: 'Руководитель строительства',
        team_plotnikov: 'Олег Плотников',
        team_plotnikovDesc:
          'Лично реализовал 68 государственных контрактов и выполнил более тысячи коммерческих подрядов в России',

        footer_leaflet: 'Рекламный буклет',
        footer_infoDeclosure: 'Раскрытие информации',
        footer_docsRF: 'Учредительные документы РФ',
        footer_docsRound1: 'Учредительные документы Round 1',
        footer_equipInsurance: 'Страхование оборудования',
        footer_buildingInsurance: 'Страхование здания и прочего имущества',
        footer_coop: 'Взаимодействие с пользователями',
        footer_agreementPersonalData: 'Пользовательское соглашение об обработке персональных данных',
        footer_agreementLimcBuy: 'Договор оферта о покупке токена LIMC',
        footer_russia: 'Россия',
        footer_fullOrganisationName: 'ООО «Лимкор Дата Центр»',
        footer_docs: 'КПП: 502801001 / ИНН: 9729264079',
        footer_address: 'Юридический адрес компании: г. Можайск, улица Мира, дом 98',
        footer_issuer: 'Эмитент LIMC Round 1',
        footer_switzerland: 'Швейцария',
        footer_inRegProcess: 'В процессе регистрации',

        qa_title: 'Вопросы и ответы',
        qa_card1_title: 'Чем отличается фарминг от майнинга?',
        qa_card1_subtitle1:
          'Майнинг криптовалюты требует покупки или аренды и настройки оборудования. Кроме того, майнинг ведёт к расходам на электричество. Это негативно влияет на рентабельность добытой криптовалюты.',
        qa_card1_subtitle2:
          'Другим важным от майнинга отличием является то, что для фарминга инвестор покупает цифровые активы. Майнерам не нужны вложения в криптовалюту, но требуется покупка майнинг-ферм. При фарминге доход приносят купленные криптоактивы.',
        qa_card1_subtitle3:
          'Limcore предоставляет услуги фарминга в сети Chia. Процесс происходит с использованием удаленного центра обработки данных с общей вычислительной мощностью. Фарминг можно сравнить с покупкой акций большого производства, где каждый получает произведенный продукт пропорционально своим инвестициям.',

        qa_card2_title: 'Как распределяется вознаграждение с майнинга среди холдеров LIMC?',
        qa_card2_subtitle1: 'Например, услугами Limcore воспользовались два пользователя.',
        qa_card2_subtitle2: 'Первый пользователь владеет 1 LIMC, второй 2 LIMC.',
        qa_card2_subtitle3: 'ЦОД компании Limcore добыл 1200 Chia coin за 24 часа.',
        qa_card2_subtitle4:
          'Limcore оставляет за собой 15% — 150 Chia coin для эксплуатационных расходов и затрат на электроэнергию.',
        qa_card2_subtitle5: 'Первый пользователь получит ⅓ от 850 Chia coin — 340 Chia coin.',
        qa_card2_subtitle6: 'Второй пользователь получит ⅔ от 850 Chia coin — 680 Chia coin.',

        qa_card3_title: 'Какие преимущества платформы Limcore?',
        qa_card3_subtitle1: 'Низкий порог входа с 0,1 LIMC.',
        qa_card3_subtitle2:
          'Не требуется дорогостоящее оборудование или техническое обслуживание. Никаких дополнительных затрат на электроэнергию и т. д. Высокая эффективность фарминга.',
        qa_card3_subtitle3: 'Прозрачность.',
        qa_card3_subtitle4: 'Механика DeFi в распределении наград.',
        qa_card3_subtitle5:
          'Список поддерживаемых форков постоянно увеличивается, повышая доход пользователей Limcore.',
        qa_card3_subtitle6:
          'Награда рассчитывается real-time и переводится на счет раз в сутки на кошелек XCH. Вся недвижимость, земля и оборудование полностью принадлежат Limcore по праву собственности.',
        qa_card3_subtitle7:
          'Мы открыты к встречам и приглашаем всех желающих на экскурсии. Московская область, город Можайск. улица Мира дом 98.',

        qa_card4_title: 'Почему именно Chia?',
        qa_card4_subtitle1:
          'Мы в Limcore уверены, что Chia Network — это один из наиболее интересных и перспективных проектов.',
        qa_card4_subtitle2:
          'Основатель проекта Брэм Коен — опытный предприниматель, основатель «тех самых» торрентов (BitTorrent). Он собрал сильную команду, обладающую необходимыми компетенциями для лидера рынка.',
        qa_card4_subtitle3: 'Президент компании Джин Хоффман — в прошлом генеральный директор eMusic.com и Vindicia.',
        qa_card4_subtitle4:
          'Финансовый директор Митч Эдвардс — в прошлом заместитель генерального директора компании Overstock.',
        qa_card4_subtitle5:
          'Партнер Майкл Новограц — член Федерального резервного банка нью-йоркского консультативного комитета по финансовым рынкам, управляющий хэдж-фондом, долларовый миллиардер. Ранее являлся руководителем отделения Goldman Sachs в Латинской Америке.',
        qa_card4_subtitle6: 'Опытный состав команды сети Chia позволяет быть уверенным в работе платформы Limcore.',
      },
    },
  },

  fallbackLng: 'ru',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
})

export default i18n
