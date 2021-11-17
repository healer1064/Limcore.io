import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(LanguageDetector).init({
  lng: 'en',
  // we init with resources
  // \u000A - перенос строки
  resources: {
    en: {
      translations: {
        login: 'Login',
        profile: 'Profile',
        other: 'Other',
        buyLimc: 'Buy LIMC',
        buy: 'Buy',
        lockUp: '6 months lock-up',
        phone: 'Phone number',
        next: 'Next step',
        balance: 'Balance',
        commonBalance: 'Common balance',

        // Auth: step1
        logIn: 'Log on',
        cellNumber: 'Cell number',
        getCode: 'Get a code',
        signUp: 'Sign up',
        needToLogToBuy: 'You should log on to buy LIMC',

        // Errors
        err_forget: 'You forgot to enter your phone number or e-mail',
        err_mail: 'Wrong e-mail format',
        err_phone: 'Wrong phone number format',
        err_phoneNotConfirmed: 'Phone number is not confirmed',
        err_mailNotConfirmed: 'E-mail is not confirmed',
        err_limit: 'Number of login attempts exceeded (will be unlocked after an hour)',
        err_notRegistered: 'User is not registered',
        err_phoneInvalid: 'Phone number is invalid',
        err_smthWentWrong: 'Something went wrong..',

        // Auth: step2
        cellCodeFromSms: 'Enter a code from SMS message',
        weSentCode: 'We sent you a code to cell number',
        change: 'Change',
        getNewCode: 'Get a new code at',
        getNewCode2: 'Get a new code',

        fa_enterCode: 'Enter 2-FA code',
        fa_enterCodeFromGoogle: 'Enter a code from Google Authenticator',

        err_code4: 'The code must be 4 digits',
        err_needCodeAgain: 'You need to get confirmation code again',
        err_codeInvalid: 'The code is invalid',

        // Reg: step1
        logOn: 'Registration',

        err_correctNumber: 'Enter correct information',
        err_userIsRegistered: 'User is already registered',
        err_phoneVerified: 'The phone is already verified',

        // Reg: step3
        err_wrongInfo: 'Information is incorrect',
        err_waitOneMinute: 'Wait one minute',
        enterEmail: 'Cell an e-mail',

        // Reg: step4
        err_mailConfirmed: 'The email is already confirmed',
        enterCode: 'Enter your code',
        weSentCodeOnEmail: 'We sent you a code to',

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
        footer_mobNavPurse: 'Purse',
        footer_mobNavStreams: 'Streams',
        footer_mobNavChat: 'Chat',
        footer_mobNavProfile: 'Profile',

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

        mm_main: 'We are in Mass Media',
        mm1_title: 'How cryptocurrency is mined in Russia?',
        mm1_subtitle:
          'Blockchain Life press center and Limcore CEO Dmitry Shumaev discussed private mining, LIMC token possibilities and love for the country.',
        mm2_title: 'Limcore CEO says: investments into Limcore mining is an alternative to bank deposites.',
        mm2_subtitle: 'Limcore: all project’s advantages and possible benefits for the first investors',

        purse_navMain: 'Main page',
        purse_navStreams: 'Streams',
        purse_myAccounts: 'My accounts',
        purse_notSync: 'Not synchronized',
        purse_needSync: 'Synchronize',
        purse_walletConnect: 'To start mining synchronize Limcore wallet with Trust wallet',
        purse_walletConnectSync: 'Limcore Wallet is synchronized with an external wallet',
        purse_sync: 'Synchronize',

        purse_mainingDetails: 'Mining detailing',
        purse_income: 'Common income',
        purse_xch: 'HSN 24h',
        purse_forks: 'All forks 24h',
        purse_mainingBefore: 'Before mining launch',
        purse_mainingDateLast: '80 days left out of 80',
        purse_forksAsset: 'Asset',
        purse_forksBalance: 'Balance',
        purse_forksPrice: 'Price',
        purse_showAll: 'Show all',
        purse_getBack: 'Get back',
        purse_goFilling: 'Go to fill in form',
        purse_fillToRestore: 'Fill out your profile to restore your account in the future',
        purse_noTransactionsYet: 'You do not have any transactions yet.',
        purse_accessLater: 'We will grant you an access late',
        purse_whyWait: 'Why do you have to wait?',
        purse_mainingStart:
          'Mining starts 80 days after the previous Round is completed. Round may be finished before the estimated terms.',

        chat_inProcess: 'The chat is under construction.',
        chat_tg: 'Join our Telegram chat',

        profile_fillIn: 'Fill in your profile',
        profile_willGrant: 'We will grant you an access to all functions',
        profile_subtitle:
          'You will need to enter you First and Last names, birth date, passport data, taxpayer ID number and place of living',

        profile_title1: 'Enter your First and Last names, birth date and sex',
        profile_firstName: 'First name',
        profile_firstNameEnter: 'Enter your First name',
        profile_lastName: 'Last name',
        profile_lastNameEnter: 'Enter your Last name',
        profile_paternityName: 'Paternity',
        profile_paternityEnter: 'Enter your Paternity',
        profile_noPaternity: 'I don’t have a paternity',
        profile_birth: 'Birth date',
        profile_sex: 'Sex',
        profile_male: 'Male',
        profile_female: 'Female',
        profile_continue: 'Continue',

        profile_title2: 'Enter your passport data',
        profile_pasSer: 'Series',
        profile_pasNumber: 'Number',
        profile_authorityCode: 'Issuing authority code: enter the code',
        profile_issueDate: 'Issue date',
        profile_pasIssued: 'Passport issued',
        profile_pasAuthority: 'Enter the issue authority name',

        profile_title3: 'Enter your registration address',
        profile_city: 'City*',
        profile_cityEnter: 'Enter the city',
        profile_street: 'Street*',
        profile_streetEnter: 'Enter the street',
        profile_house: 'House*',
        profile_building: 'Building',
        profile_apartment: 'Apartment*',
        profile_complete: 'Complete',

        profile_phoneNumber: 'Cell number',
        profile_addresses: 'My addresses',
        profile_2fa: 'Two-factor authentication',
        profile_2fa_connect: 'Connect the two-factor authentication',

        profile_addressReg: 'Registration address',
        profile_addressLetters: 'Send letters to this address',
        profile_addressHome: 'Home address',
        profile_add: 'Add',
        profile_shortStreet: ' ',
        profile_shortHouse: ' ',
        profile_shortCity: ' ',

        profile_writeAddress: 'Enter your address',
        profile_writeHomeAddress: 'Enter your home address',

        profile_2fa_add: 'Connect the two-factor authentication',
        profile_2fa_subtitle:
          'If you log in from a different device, we will require a code from Google Authenticator application to enter in to the password',
        profile_connect: 'Connect',
        profile_2fa_on: 'The two-factor authentication is turned on',
        profile_2fa_linked: 'The app is linked with',
        profile_2fa_download: 'Download the mobile application',
        profile_2fa_enterCode: 'Enter the code from app',
        profile_2fa_enterCodeInGoogle: 'Enter the code in Google Authenticator',
        profile_2fa_enterCodeFromApp: 'Enter the code generated by the app',

        profile_rusPasport: 'Russian passport',
        profile_documents: 'Documents',
        profile_email: 'E-mail',
        profile_2fa_doWantToOff: 'Do you want to turn off two-factor authentication?',
        profile_2fa_wantToOff: 'Turn off',
        profile_2fa_cancel: 'Cancel',

        streams_title_1: 'Edifice build up',
        streams_title_2: 'Surrounding area modification',
        stream_camera: 'Camera',
      },
    },
    ru: {
      translations: {
        login: 'Войти',
        profile: 'Профиль',
        other: 'Прочее',
        buyLimc: 'Купить LIMC',
        buy: 'Купить',
        lockUp: 'Lock-up период 6 месяцев',
        phone: 'Телефон',
        next: 'Далее',
        balance: 'Баланс',
        commonBalance: 'Общий баланс',

        // Auth: step1
        logIn: 'Авторизация',
        cellNumber: 'Введите телефон',
        getCode: 'Получить код',
        signUp: 'Зарегистрироваться',
        needToLogToBuy: 'Чтобы купить LIMC, нужно авторизоваться',

        // Errors
        err_forget: 'Вы забыли ввести телефон или e-mail',
        err_mail: 'Неверный формат e-mail',
        err_phone: 'Некорректно введен номер',
        err_phoneNotConfirmed: 'Телефон не подтвержден',
        err_mailNotConfirmed: 'Email не подтвержден',
        err_limit: 'Превышено количество попыток входа (разблокировка через час)',
        err_notRegistered: 'Пользователь не зарегистрирован',
        err_phoneInvalid: 'Некорректно введен номер',
        err_smthWentWrong: 'Что-то пошло не так..',

        // Auth: step2
        cellCodeFromSms: 'Введите код из СМС',
        weSentCode: 'Мы отправили код на номер',
        change: 'Изменить',
        getNewCode: 'Получить новый код можно через',
        getNewCode2: 'Отправить новый код',

        fa_enterCode: 'Введите 2-FA код',
        fa_enterCodeFromGoogle: 'Введите код, сгенерированный приложением Google Authenticator',

        err_code4: 'Код должен содержать 4 цифры',
        err_needCodeAgain: 'Нужно снова получить код подтверждения',
        err_codeInvalid: 'Код недействителен',

        // Reg: step1
        logOn: 'Регистрация',

        err_correctNumber: 'Введите корректные данные',
        err_userIsRegistered: 'Пользователь уже зарегистрирован',
        err_phoneVerified: 'Телефон уже подтвержден',

        // Reg: step3
        err_wrongInfo: 'Неверные данные',
        err_waitOneMinute: 'Не прошла минута после первого запроса',
        enterEmail: 'Введите e-mail',

        // Reg: step4
        err_mailConfirmed: 'Email уже подтвержден',
        enterCode: 'Введите код',
        weSentCodeOnEmail: 'Мы отправили код на адрес',

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
        footer_mobNavPurse: 'Кошелек',
        footer_mobNavStreams: 'Трансляции',
        footer_mobNavChat: 'Чат',
        footer_mobNavProfile: 'Профиль',

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

        mm_main: 'СМИ о нас',
        mm1_title: 'Как добывается криптовалюта в России?',
        mm1_subtitle:
          'Пресс-центр Blockchain Life и CEO Limcore Дмитрий Шумаев обсудили частный майнинг, возможности токена LIMC и любовь к стране',
        mm2_title: 'CEO Limcore: инвестиции в майнинг от Limcore — альтернатива банковским депозитам',
        mm2_subtitle: 'Limcore: чем примечателен проект и какие преимущества могут получить ранние инвесторы',

        purse_navMain: 'Главная',
        purse_navStreams: 'Трансляции',
        purse_myAccounts: 'Мои счета',
        purse_notSync: 'Не синхронизирован',
        purse_needSync: 'Синхронизируйтесь',
        purse_walletConnect: 'Для старта майнинга синхронизируйте Limcore Wallet с Trust Wallet',
        purse_walletConnectSync: 'Limcore Wallet синхронизирован с внешним кошельком',
        purse_sync: 'Синхронизировать',

        purse_mainingDetails: 'Детализация майнинга',
        purse_income: 'Общий доход',
        purse_xch: 'XCH 24h',
        purse_forks: 'Все форки 24h',
        purse_mainingBefore: 'До старта майнинга',
        purse_mainingDateLast: 'осталось 80 дней из 80',
        purse_forksAsset: 'Ассет',
        purse_forksBalance: 'Баланс',
        purse_forksPrice: 'Стоимость',
        purse_showAll: 'Смотреть все',
        purse_getBack: 'Вернуться назад',
        purse_goFilling: 'Перейти к заполнению',
        purse_fillToRestore: 'Заполните профиль, чтобы в будущем восстановить аккаунт',
        purse_noTransactionsYet: 'У вас еще нет транзакций.',
        purse_accessLater: 'Мы предоставим вам доступ позже.',
        purse_whyWait: 'Почему нужно ждать?',
        purse_mainingStart:
          'Майнинг начинается спустя 80&nbsp;дней с&nbsp;момента завершения раунда. Раунд может закончиться раньше указанного срока',

        chat_inProcess: 'Чат находится в разработке.',
        chat_tg: 'Вступай в чат в Telegram',

        profile_fillIn: 'Заполните профиль',
        profile_willGrant: 'Для восстановления доступа в случае полной потери доступа к аккаунту',
        profile_subtitle: 'Нужно будет указать ФИО, дату рождения, паспортные данные, ИНН и место жительства',

        profile_title1: 'Enter your First and Last names, birth date and sex',
        profile_firstName: 'Имя',
        profile_firstNameEnter: 'Введите ваше имя',
        profile_lastName: 'Фамилия',
        profile_lastNameEnter: 'Введите вашу фамилию',
        profile_paternityName: 'Отчество',
        profile_paternityEnter: 'Введите ваше отчество',
        profile_noPaternity: 'У меня нет отчества',
        profile_birth: 'День рождения',
        profile_sex: 'Пол',
        profile_male: 'Мужской',
        profile_female: 'Женский',
        profile_continue: 'Продолжить',

        profile_title2: 'Укажите паспортные данные',
        profile_pasSer: 'Серия',
        profile_pasNumber: 'Номер',
        profile_authorityCode: 'Код подразделения',
        profile_issueDate: 'Дата выдачи',
        profile_pasIssued: 'Паспорт выдан',
        profile_pasAuthority: 'Введите учреждение',

        profile_title3: 'Укажите место жительства',
        profile_city: 'Город*',
        profile_cityEnter: 'Введите город',
        profile_street: 'Улица*',
        profile_streetEnter: 'Введите название улицы',
        profile_house: 'Дом*',
        profile_building: 'Строение',
        profile_apartment: 'Квартира*',
        profile_complete: 'Завершить',

        profile_phoneNumber: 'Телефон',
        profile_addresses: 'Мои адреса',
        profile_2fa: 'Двухфакторная аутентификация',
        profile_2fa_connect: 'Подключите двухфакторную аутентификацию',

        profile_addressReg: 'Адрес регистрации',
        profile_addressLetters: 'Письма по этому адресу',
        profile_addressHome: 'Домашний адрес',
        profile_add: 'Добавить',
        profile_shortStreet: 'ул',
        profile_shortHouse: 'дом',
        profile_shortCity: 'г',

        profile_writeAddress: 'Укажите адрес',
        profile_writeHomeAddress: 'Введите ваш домашний адрес',

        profile_2fa_add: 'Подключить двухфакторную аутентификацию',
        profile_2fa_subtitle:
          'При входе с незнакомого устройства, помимо пароля, мы будем запрашивать код для входа с помощью приложения Google Authenticator',
        profile_connect: 'Подключить',
        profile_2fa_on: 'Двухфакторная аутентификация включена',
        profile_2fa_linked: 'Приложение привязано к номеру',
        profile_2fa_download: 'Скачайте мобильное приложение',
        profile_2fa_enterCode: 'Введите код из приложения',
        profile_2fa_enterCodeInGoogle: 'Введите код в Google Authenticator',
        profile_2fa_enterCodeFromApp: 'Введите код, сгенерированный приложением',

        profile_rusPasport: 'Паспорт РФ',
        profile_documents: 'Документы',
        profile_email: 'E-mail',
        profile_2fa_doWantToOff: 'Выключить двухфакторную аутентификацию?',
        profile_2fa_wantToOff: 'Выключить',
        profile_2fa_cancel: 'Отмена',

        streams_title_1: 'Ремонт здания',
        streams_title_2: 'Ремонт прилегающей территории',
        stream_camera: 'Камера',
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
