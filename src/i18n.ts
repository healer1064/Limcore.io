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
        walletconnect_disconnect: 'Disconnect from external wallet',

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
        landing_video: 'https://www.youtube.com/embed/5ZuYH1pEQhM',

        firstRound_round1: 'Round 1',
        firstRound_limit: 'Limit',
        firstRound_limcPrice: '1 LIMC price',
        firstRound_terms: 'Terms',
        firstRound_firstRoundTerms: 'Nov 15, 2021 – Dec 30, 2021',
        firstRound_startSelling: 'Market launch will take place on Nov 15 at 00:01 MOS.',
        firstRound_followNews: 'Follow the news in our Telegram channel @limc_chat',

        roundsRoadmap_limcMin: 'LIMC (min $110)',
        roundsRoadmap_priceLater: 'LIMC (price and limit later)',

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

        roadmap_startRound1: 'Round 1 launch 1\u00a0LIMC = $95/80,000 LIMC',
        roadmap_startRound2: 'Round 2 launch 1\u00a0LIMC = min $110 / 120,000 LIMC',
        roadmap_startRound3: 'Round 3 launch',
        roadmap_startRound4: 'Round 4 launch',
        roadmap_startRound5: 'Round 5 launch',

        roadmap_tg: 'Photos and videos are in our Telegram channel',
        roadmap_tg_channel: '@limc_chat',
        roadmap_inProcess: 'In progress',
        roadmap_registration: 'Swiss legal entity launch',
        roadmap_listing: 'LIMC listing on HITBTC + BitGlobal exchanges',
        roadmap_buildUp: 'DPC (Data Processing Center) build-up completion in Mozhaysk',
        roadmap_mvp: 'Development and MVP creation of own tape data storage',
        roadmap_launch: 'Tape data storages full-scale production launch',

        roadmap_deadline_may30: '31.05.2021',
        roadmap_deadline_june24: '24.06.2021',
        roadmap_deadline_july10: '10.07.2021',
        roadmap_deadline_july22: '22.07.2021',
        roadmap_deadline_august03: '03.08.2021',
        roadmap_deadline_october15: '15.10.2021',
        roadmap_deadline_november1: '01.11.2021',
        roadmap_deadline_november15: '15.11.2021',
        roadmap_deadline_1530: '15.11 – 30.12.2021',
        roadmap_deadline_2627: '26.10 – 27.10.2021',
        roadmap_deadline_1025: '10.01 – 25.02.2022',
        roadmap_deadline_2501: '25.01.2022',
        roadmap_deadline_2502: '25.02.2022',

        team_title: 'Project team',

        team_shumaevRank: 'CEO / Owner',
        team_shumaev: 'Dmitry Shumaev',
        team_shumaevDesc:
          'Before Limcore worked in several government entities as IT Security specialist. Run the government entity BaikonurSvyazInform',

        team_losevRank: 'Co-Owner / Chief\u00A0Financial\u00A0Officer',
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
        purse_walletConnect: 'To start mining synchronize Limcore wallet with external wallet',
        purse_walletConnectSync: 'Limcore Wallet is synchronized with an external wallet',
        purse_sync: 'Synchronize',

        purse_mainingDetails: 'Mining detailing',
        purse_income: 'Common income',
        purse_xch: 'HSN 24h',
        purse_forks: 'All forks 24h',
        purse_mainingBefore: 'Before mining launch',
        purse_mainingDateLast: 'days left out of 80',
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

        calculator_title: 'Yield calculator',
        calculator_designation: 'This calculator does not include',
        calculator_item_LIMC: 'Possible increase in the value of the LIMC token',
        calculator_item_Chia: 'Possible increae in the value of Chia coin and derivative forks',
        calculator_item_new: 'The emergence of new forks and their cost',
        calculator_actual: 'All data is relevant at the current moment',
        calculator_LIMCquantity: 'LIMC quantity',
        calculator_USDTsum: 'Investment amount in USDT',
        calculator_signification: 'Distribution of rewards',
        calculator_holder: 'Holder LIMC',
        calculator_limcore: 'Limcore',
        calculator_85: 'Income from 85%',
        calculator_21: '21.6% per annum in $',
        calculator_hour: 'Per hour',
        calculator_day: 'Per day',
        calculator_month: 'Per month',
        calculator_popup: 'Coverage of infrastructure maintenance costs',
        calculator_sliderTitle: '1 LIMC simultaneously mines all tokens',
        calculator_already: 'Marked tokens are already being mined by Limcore',
        calculator_inProcess: 'Others in the process of integration',

        chat_form_placeholder: 'Search',
        chat_reset_button_value: 'Cancel',
        chat_no_results: 'No results',
        chat_no_results_text: 'No results were found for',
        chat_no_results_try: 'Try again',
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
        walletconnect_disconnect: 'Отключиться от внешнего кошелька',

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
        landing_video: 'https://www.youtube.com/embed/aK9obYQi-FI',

        firstRound_round1: 'Раунд №1',
        firstRound_limit: 'Лимит',
        firstRound_limcPrice: 'Цена за 1 LIMC',
        firstRound_terms: 'Сроки',
        firstRound_firstRoundTerms: '15.11.2021 — 30.12.21',
        firstRound_startSelling: 'Старт продаж состоится 15 ноября в 00:01 по МСК',
        firstRound_followNews: 'Следите за новостями в нашей группе в Telegram @limc_russ',

        roundsRoadmap_limcMin: 'LIMC (min $110)',
        roundsRoadmap_priceLater: 'LIMC (price and limit later)',

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
        roadmap_deadline_may30: '31.05.2021',
        roadmap_june24: 'Запуск личного кабинета v0.1',
        roadmap_deadline_june24: '24.06.2021',
        roadmap_july10: 'Подписание и авансирование договора о покупке земельного участка и здания',
        roadmap_deadline_july10: '10.07.2021',
        roadmap_july22: 'Прокладка первых электрических сетей',
        roadmap_deadline_july22: '22.07.2021',
        roadmap_august03: 'Завершение регистрации здания и земельного участка',
        roadmap_deadline_august03: '03.08.2021',
        roadmap_october15: 'Создание Limcore Token',
        roadmap_deadline_october15: '15.10.2021',
        roadmap_november1: 'Запуск Российского юридического лица',
        roadmap_deadline_november1: '01.11.2021',
        roadmap_november15: 'Запуск личного кабинета v.0.2',
        roadmap_deadline_november15: '15.11.2021',
        roadmap_decemberEnd: 'Конец декабря 2021',
        roadmap_deadline_1530: '15.11 – 30.12.2021',
        roadmap_deadline_2627: '26.10 – 27.10.2021',
        roadmap_deadline_1025: '10.01 – 25.02.2022',
        roadmap_deadline_2501: '25.01.2022',
        roadmap_deadline_2502: '25.02.2022',

        roadmap_startRound1: 'Старт Round №1 1\u00a0LIMC = $95/80,000 LIMC',
        roadmap_startRound2: 'Старт Round №2 1\u00a0LIMC = min $110 / 120,000 LIMC',
        roadmap_startRound3: 'Старт Round №3',
        roadmap_startRound4: 'Старт Round №4',
        roadmap_startRound5: 'Старт Round №5',

        roadmap_tg: 'Фото и видео в нашей группе в Telegram',
        roadmap_tg_channel: '@limc_russ',
        roadmap_inProcess: 'В процессе',
        roadmap_registration: 'Регистрация Швейцарского юридического лица',
        roadmap_listing: 'Листинг LIMC  на биржах HITBTC + BitGlobal',
        roadmap_buildUp: 'Завершение ремонта ЦОД в г. Можайск',
        roadmap_mvp: 'Проектирование и создание MVP собственного ленточного накопителя',
        roadmap_launch: 'Запуск серийного производства ленточного накопителя данных',

        team_title: 'Команда проекта',

        team_shumaevRank: 'CEO / Owner',
        team_shumaev: 'Дмитрий Шумаев',
        team_shumaevDesc:
          'В юношестве работал в нескольких гос. учреждениях РФ в качестве сотрудника по ИТ безопасности. Руководил гос. предприятием «БайконурСвязьИнформ»',

        team_losevRank: 'Co-Owner / Chief\u00A0Financial\u00A0Officer',
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
        purse_walletConnect: 'Для старта майнинга синхронизируйте Limcore Wallet с внешним кошельком',
        purse_walletConnectSync: 'Limcore Wallet синхронизирован с внешним кошельком',
        purse_sync: 'Синхронизировать',

        purse_mainingDetails: 'Детализация майнинга',
        purse_income: 'Общий доход',
        purse_xch: 'XCH 24h',
        purse_forks: 'Все форки 24h',
        purse_mainingBefore: 'До старта майнинга',
        purse_mainingDateLast: 'дней из 80',
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
          'Майнинг начинается спустя 80 дней с момента завершения раунда. Раунд может закончиться раньше указанного срока',

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

        calculator_title: 'Калькулятор доходности',
        calculator_designation: 'Данный калькулятор не учитывает',
        calculator_item_LIMC: 'Возможный рост стоимости токена LIMC',
        calculator_item_Chia: 'Возможный рост стоимости Chia coin и производных форков',
        calculator_item_new: 'Появление новых форков и их стоимость',
        calculator_actual: 'Все данные актуальны на текущий момент',
        calculator_LIMCquantity: 'Количество LIMC',
        calculator_USDTsum: 'Сумма инвестиций в USDT',
        calculator_signification: 'Распределение вознаграждений',
        calculator_holder: 'Холдер LIMC',
        calculator_limcore: 'Limcore',
        calculator_85: 'Доход с 85%',
        calculator_21: '21,6% годовых в $',
        calculator_hour: 'В час',
        calculator_day: 'В день',
        calculator_month: 'В месяц',
        calculator_popup: 'Покрытие расходов на поддержание инфраструктуры',
        calculator_sliderTitle: '1 LIMC одновременно майнит все токены',
        calculator_already: 'Отмеченные токены уже майнятся компанией Limcore',
        calculator_inProcess: 'Остальные в процессе интеграции',

        chat_form_placeholder: 'Поиск',
        chat_reset_button_value: 'Отмена',
        chat_no_results: 'Результатов нет',
        chat_no_results_text: 'Ничего не найдено по запросу',
        chat_no_results_try: 'Попробуйте снова',
      },
    },
    cn: {
      translations: {
        login: '登录',
        profile: '个人资料',
        other: '其他',
        buyLimc: '购买LIMC',
        buy: '购买',
        lockUp: 'Lock-up五个月的期间',
        phone: '手机号码',
        next: '下一步',
        balance: '平衡',
        commonBalance: '总平衡',
        walletconnect_disconnect: '断开与外部钱包的连接',

        // Auth: step1
        logIn: '登录',
        cellNumber: '手机号码或电子邮箱',
        getCode: '获取验证码',
        signUp: '注册',
        needToLogToBuy: '你必须登录才能购买LIMC',

        // Errors
        err_forget: '你忘记了输入手机号码或电子邮箱',
        err_mail: '电子邮箱格式不正确',
        err_phone: '手机号码不正确',
        err_phoneNotConfirmed: '手机号码未确认',
        err_mailNotConfirmed: '电子邮箱未确认',
        err_limit: '超过了登录的次数（ 一小时后解锁）',
        err_notRegistered: '用户未注册',
        err_phoneInvalid: '手机号码不正确',
        err_smthWentWrong: '出了点问题',

        // Auth: step2
        cellCodeFromSms: '请输入短信中的验证码',
        weSentCode: '我们已将验证码发送到该号码',
        change: '改变',
        getNewCode: '你可以在分钟后得到新的验证码',
        getNewCode2: '发送新验证码',
        fa_enterCode: '请输入2-FA验证码',
        fa_enterCodeFromGoogle: '请输入Google Authenticator生成的验证码',
        err_code4: '验证码必须包含4个数字',
        err_needCodeAgain: '需要再次获得验证码',
        err_codeInvalid: '验证码无效',

        // Reg: step1
        logOn: '注册',

        err_correctNumber: '请输入正确的数据',
        err_userIsRegistered: '用户已经注册',
        err_phoneVerified: '电话号码已经确认',

        // Reg: step3
        err_wrongInfo: '数据不正确',
        err_waitOneMinute: '第一次请求后不到一分钟',
        enterEmail: '请输入电子邮箱',

        // Reg: step4
        err_mailConfirmed: '电子邮箱已经确认',
        enterCode: '请输入验证码',
        weSentCodeOnEmail: '我们已将验证码发送到电子邮箱里',

        nav_about: '关于Limcore',
        nav_roadmap: 'Roadmap',
        nav_team: '团队',
        nav_qa: '常见问题',

        landing_title: '所有Chia分叉的云端挖矿',
        landing_subtitle: '加密货币投资的最快而有利的方式',
        landing_video: 'https://www.youtube.com/embed/5ZuYH1pEQhM',

        firstRound_round1: '第1轮',
        firstRound_limit: '限制',
        firstRound_limcPrice: '1 LIMC价格',
        firstRound_terms: '期限',
        firstRound_firstRoundTerms: '2021.11.15 - 2021.12.30',
        firstRound_startSelling: '市场启动将11月15号00：01莫斯科时间开始',
        firstRound_followNews: '在我们的Telegram频道中关注新闻 @limc_chat',

        roundsRoadmap_limcMin: 'LIMC（最少$110)',
        roundsRoadmap_priceLater: 'LIMC（价格和限额迟些时候)',

        roundsRoadmap_round2: '第2轮',
        roundsRoadmap_round3: '第3轮',
        roundsRoadmap_round4: '第4轮',
        roundsRoadmap_round5: '第5轮 (Final)',
        roundsRoadmap_endSelling: '2022年底',
        roundsRoadmap_description1:
          '每一轮的代币限额直接取决于我们的设施准备情况和服务器设备制造厂的生产能力。由于我们逐步增大分配到每一LIMC代币的挖矿功率容量（太字节），每轮LIMC代币都变得更加昂贵',
        roundsRoadmap_description2:
          '第3、4、5轮的价格和限额将于以后公布，因为在我们网站的最后更新中，我们没有在计划一轮完成日期前收到我们从制造厂得到的设备的保证数量',

        limcoreDescription_modern: 'Chia挖矿和所有分叉的现代数据中心',
        limcoreDescription_safe: '这比市场上的大多数投资建议安全、有利',
        limcoreDescription_howWorks: '这是如何运作的?',
        limcoreDescription_howSubtitle1: '当购买LIMC时，你购买我们数据中心的挖矿功率',
        limcoreDescription_howSubtitle2:
          '这是最简单而安全投资于挖矿的方式，因为LIMC代币很快就会在大型加以所上出现，并有自己的流动性',
        limcoreDescription_howSubtitle3: '你可以随时提取从挖矿中获得的资产或出售自己的LIMC代币',
        limcoreDescription_howSubtitle4:
          '到2024年，Limcore公司将建立自己的磁带数据存储系统，这将使从挖矿中获得的收入增加数倍',

        roadmap_may30: '挖矿试验台的组装',
        roadmap_june24: '个人中心v0.1的启动',
        roadmap_july10: '签署并预付土地和建筑购买的合同',
        roadmap_july22: '第一排电网的铺设',
        roadmap_august03: '土地和建筑登记的完成',
        roadmap_october15: 'Limcore Token 的创造',
        roadmap_november1: '俄罗斯法律实体的启动',
        roadmap_november15: '个人中心v0.2的启动',
        roadmap_decemberEnd: '2021年12月底',

        roadmap_deadline_may30: '2021.05.31',
        roadmap_deadline_june24: '2021.06.24',
        roadmap_deadline_july10: '2021.07.10',
        roadmap_deadline_july22: '2021.07.22',
        roadmap_deadline_august03: '2021.08.03',
        roadmap_deadline_october15: '2021.10.15',
        roadmap_deadline_november1: '2021.11.01',
        roadmap_deadline_november15: '2021.11.15',
        roadmap_deadline_1530: '2021.11.15 – 2021.12.30',
        roadmap_deadline_2627: '2021.10.26 – 2021.10.27',
        roadmap_deadline_1025: '2022.01.10 – 2022.02.25',
        roadmap_deadline_2501: '2022.01.25',
        roadmap_deadline_2502: '2022.02.25',

        roadmap_startRound1: '第1轮1 LIMC = $95/80,000 LIMC的启动',
        roadmap_startRound2: '第2轮1 LIMC = min $110 / 120,000 LIMC的启动',
        roadmap_startRound3: '第3轮 的启动',
        roadmap_startRound4: '第4轮 的启动',
        roadmap_startRound5: '第5轮 的启动',

        roadmap_tg: '照片和视频都在我们的Telegram频道',
        roadmap_tg_channel: '@limc_chat',
        roadmap_inProcess: '正在进行中',
        roadmap_registration: '瑞士法律实体的登记',
        roadmap_listing: '在HITBTC + BitGlobal交易所上LIMC的股票上市',
        roadmap_buildUp: '莫扎伊斯克市的修理数据处理中心的完成',
        roadmap_mvp: '自己磁带储存器的计划和MVP建造',
        roadmap_launch: '磁带数据储存器的成批生产的启动',

        team_title: '项目团队',

        team_shumaevRank: '总裁 / 业主',
        team_shumaev: '德米特里·舒马耶夫',
        team_shumaevDesc: '年轻时他在几个俄罗斯政府机构担任过IT安全职员。管理过拜科努尔联系通知政府机构',

        team_losevRank: '共同所有者 / 首席财务官',
        team_losev: '帕维尔·洛谢夫',
        team_losevDesc: '他曾在俄罗斯联邦中央银行工作过',

        team_turkinRank: '客户服务经理',
        team_turkin: '基里尔·图尔金',
        team_turkinDesc: '在为要求特别高的客户的跟踪部门的工作安排方面有成熟经验',

        team_balikinRank: '领先的系统管理员',
        team_balikin: '亚历山大·巴雷金',
        team_balikinDesc: '在Limcore公司开始工作前，他为20多个法律实体经营过自己的支持网络和服务器架构的组织',

        team_smirnovRank: '系统管理员',
        team_smirnov: '德米特里·斯米尔诺夫',
        team_smirnovDesc: '他曾在奥伦堡市政府担任过系统管理员',

        team_kazachenkoRank: '保安部主任',
        team_kazachenko: '亚历山大·卡扎琴科',
        team_kazachenkoDesc: '他曾在俄罗斯联邦强力机构的一个特种部队连服役过。红色贝雷帽的获得者',

        team_mironovRank: '律师',
        team_mironov: '塔拉斯·米罗诺夫',
        team_mironovDesc: '他在Limcore任务范围内为领先的律师公司形成技术任务',

        team_plotnikovRank: '建筑经理',
        team_plotnikov: '奥列格·普洛特尼科夫',
        team_plotnikovDesc: '在俄罗斯他亲自执行了68个政府合同、完成了一千多份商业合同',

        footer_leaflet: '宣传册',
        footer_infoDeclosure: '信息披露',
        footer_docsRF: '俄罗斯联邦成立文件',
        footer_docsRound1: 'Round 1 成立文件',
        footer_equipInsurance: '设备保险',
        footer_buildingInsurance: '房屋及财产保险',
        footer_coop: '用户体验',
        footer_agreementPersonalData: 'П关于处理个人数据的用户协议',
        footer_agreementLimcBuy: '关于购买LIMC代币的合同建议书',
        footer_russia: '俄罗斯',
        footer_fullOrganisationName: 'Limcore数据中心有限公司',
        footer_docs: '纳税人登记原因代码： 502801001 / 个人税号：9729264079',
        footer_address: '公司法定地址：俄罗斯联邦莫扎伊斯克市米拉（Mira)街98号',
        footer_issuer: 'LIMC Round 1发行人',
        footer_switzerland: '瑞士',
        footer_inRegProcess: '正在登记过程中',
        footer_mobNavPurse: '钱包',
        footer_mobNavStreams: '转播',
        footer_mobNavChat: '聊天',
        footer_mobNavProfile: '个人信息',

        qa_title: '常见问题',
        qa_card1_title: '耕种和挖矿有什么区别?',
        qa_card1_subtitle1:
          '加密货币挖矿需要购买或租用和设置设备。此外，挖矿导致电力成本。这对开采加密货币的盈利能力有消极影响。',
        qa_card1_subtitle2:
          '与挖矿的另一个重要区别是，投资者购买数字资产用于耕种。挖矿者不需要投资于加密货币，但需要购买挖矿现场。耕种时，产生收入的是购买的加密资产',
        qa_card1_subtitle3:
          'Limcore在Chia网络上提供耕种的服务。该过程与具有共同算计能力的远程数据处理中心进行流动。耕种可比作购买大工业股份，每个人都按投资比例获得制成品。',

        qa_card2_title: '来自挖矿的报酬如何分配给LIMC持有人？',
        qa_card2_subtitle1: '例如，有两个使用Limcore服务的用户。',
        qa_card2_subtitle2: '第一个用户拥有1个LIMC，第二个拥有两个LIMC。',
        qa_card2_subtitle3: '在24小时内，Limcore公司的数据处理中心开采了1200个Chia coin。',
        qa_card2_subtitle4: 'Limcore保留15% - 150个Chia coin作为运营和电力成本。',
        qa_card2_subtitle5: '第一个用户将获得850个Chia coin的⅓，是340个Chia coin。',
        qa_card2_subtitle6: '第二个用户将850个Chia coin的⅔，是680个Chia coin。',

        qa_card3_title: 'Limcore平台的优势是什么？',
        qa_card3_subtitle1: '很低准输门槛，从0,1 LIMC开始。',
        qa_card3_subtitle2: '不需要昂贵的设备或技术维护。没有额外的电费等开支。',
        qa_card3_subtitle3: '透明度。',
        qa_card3_subtitle4: '在奖励分配方面应用DeFi机制。',
        qa_card3_subtitle5: '支持的分叉列表不断扩大，使得Limcore用户的收入增加。',
        qa_card3_subtitle6:
          '奖励是实时计算的，每天转移到Chia钱包里。关于法律所有权，所有房地产、土地以及设备完全属于Limcore公司。',
        qa_card3_subtitle7: '我们对会议开放，并邀请每个有兴趣的人来参观。莫斯科州莫扎伊斯克市米拉（Mira)街98号。',

        qa_card4_title: '为什么Chia？',
        qa_card4_subtitle1: '我司相信Chia Nerwork是最有趣和有前途的项目之一。',
        qa_card4_subtitle2:
          '项目的创始人是布莱姆·科恩，他是有经验的企业家、著名“比特洪流”（BigTorrent)的创始人。他组建了一个具有市场领导者所需的专长的强大团员。',
        qa_card4_subtitle3: '公司总裁是吉恩·霍夫曼，是eMusic.com 和Vindicia的前任总裁。',
        qa_card4_subtitle4: '财务主管是米彻·爱德华兹，是Overstock公司的前任副总经理。',
        qa_card4_subtitle5:
          '迈克尔·诺沃格拉茨搭档是纽约联邦储备银行金融市场咨询委员会的成员、对冲基金的总经理、美元的亿万富翁。他曾担任过拉丁美洲Goldman Sachs分布的主任。',
        qa_card4_subtitle6: '经验丰富的Chia团队可以保证Limcore平台的工作。',

        mm_main: '媒体对我们的报道',
        mm1_title: '在俄罗斯，加密货币史如何开采的？',
        mm1_subtitle:
          'Blockchain Life新闻中心和Limcore总裁德米特里·舒马耶夫谈论了私营挖矿、LIMC代币的能力性以及爱国心。',
        mm2_title: 'Limcore总裁：对Limcore挖矿的投资是银行存款的代替方案。',
        mm2_subtitle: 'Limcore：项目的显著特点和第一批投资者可以得到的好处',

        purse_navMain: '主页',
        purse_navStreams: '转播',
        purse_myAccounts: '我的帐户',
        purse_notSync: '未同步',
        purse_needSync: '同步',
        purse_walletConnect: '开始挖矿需要将Limcore wallet与Trust wallet同步',
        purse_walletConnectSync: 'Limcore Wallet与外部钱包同步了',
        purse_sync: '同步',

        purse_mainingDetails: '挖矿详情',
        purse_income: '收入总额',
        purse_xch: 'Chia 24h',
        purse_forks: '所以分叉 24h',
        purse_mainingBefore: '挖矿开始前还剩',
        purse_mainingDateLast: '80天中还剩80天',
        purse_forksAsset: '资产',
        purse_forksBalance: '平衡',
        purse_forksPrice: '价格',
        purse_showAll: '查看全部',
        purse_getBack: '返回',
        purse_goFilling: '跳转填写',
        purse_fillToRestore: '完成你的个人资料，以便在将来恢复你的帐户',
        purse_noTransactionsYet: '你还没有交易。',
        purse_accessLater: '我们以后将为你提供访问权限',
        purse_whyWait: '为什么要等待？',
        purse_mainingStart: '挖矿在该轮结束后80天开始。一轮可能会在指定的期限前完成',

        chat_inProcess: '聊天正在开发中',
        chat_tg: '加入Telegram的聊天',

        profile_fillIn: '填写个人资料',
        profile_willGrant: '为了访问恢复，在完全失去你的帐户的访问权的情况下',
        profile_subtitle: '你将需要输入你的全名、出生日期、护照细节、个人税号和居住地',

        profile_title1: '请输入全名、出生日期和性别',
        profile_firstName: '名字',
        profile_firstNameEnter: '请输入名字',
        profile_lastName: '姓氏',
        profile_lastNameEnter: '请输入姓氏',
        profile_paternityName: '父名',
        profile_paternityEnter: '请输入父名',
        profile_noPaternity: '我没有父名',
        profile_birth: '出生日期',
        profile_sex: '性别',
        profile_male: '男',
        profile_female: '女',
        profile_continue: '下一步',

        profile_title2: '请输入护照细节',
        profile_pasSer: '组号',
        profile_pasNumber: '号码',
        profile_authorityCode: '机关代码',
        profile_issueDate: '签发日期',
        profile_pasIssued: '签发护照的机构',
        profile_pasAuthority: '请输入机构',

        profile_title3: '请输入居住地',
        profile_city: '城市*',
        profile_cityEnter: '请输入城市',
        profile_street: '街道*',
        profile_streetEnter: '请输入街道',
        profile_house: '门牌号*',
        profile_building: '楼',
        profile_apartment: '公寓号*',
        profile_complete: '完成',

        profile_phoneNumber: '手机号码',
        profile_addresses: '我的地址',
        profile_2fa: '双因素身份验证',
        profile_2fa_connect: '连接双因素身份验证',

        profile_addressReg: '注册地址',
        profile_addressLetters: '将信寄到这个地址',
        profile_addressHome: '住所地址',
        profile_add: '添加',
        profile_shortStreet: '街道',
        profile_shortHouse: '门牌号',
        profile_shortCity: '城市',

        profile_writeAddress: '请输入地址',
        profile_writeHomeAddress: '请输入你的家庭地址',

        profile_2fa_add: '连接双因素身份验证',
        profile_2fa_subtitle:
          '当从不熟悉的设备登录时，除了密码外，我们会要求使用Google Authenticator应用程序提供登录验证码',
        profile_connect: '连接',
        profile_2fa_on: '双因素身份验证户用成功',
        profile_2fa_linked: '应用程序与手机号码绑带成功',
        profile_2fa_download: '下载手机应用程序',
        profile_2fa_enterCode: '请输入应用程序中的验证码',
        profile_2fa_enterCodeInGoogle: '请在Google Authenticator中输入验证码',
        profile_2fa_enterCodeFromApp: '请输入应用程序生成的验证码',

        profile_rusPasport: '俄罗斯护照',
        profile_documents: '证件',
        profile_email: '电子邮箱',
        profile_2fa_doWantToOff: '禁用双因素身份验证吗？',
        profile_2fa_wantToOff: '禁用',
        profile_2fa_cancel: '取消',
        streams_title_1: '建筑整修',
        streams_title_2: '周边地区的整修',
        stream_camera: '摄像头',

        calculator_title: '利潤計算器',
        calculator_designation: '這個計算器不包括',
        calculator_item_LIMC: 'LIMC 代幣價值可能增加',
        calculator_item_Chia: 'Chia 幣和衍生品分叉的價值可能會上漲',
        calculator_item_new: '新分叉的出現及其成本',
        calculator_actual: '所有數據都是最新的',
        calculator_LIMCquantity: 'LIMC數量',
        calculator_USDTsum: 'USDT投資金額',
        calculator_signification: '獎勵分配',
        calculator_holder: '持有人 LIMC',
        calculator_limcore: 'Limcore',
        calculator_85: '收入來自 85%',
        calculator_21: '每年 21.6% 美元',
        calculator_hour: '在一個小時之內',
        calculator_day: '每天',
        calculator_month: '每月',
        calculator_popup: '基礎設施維護成本的覆蓋範圍',
        calculator_sliderTitle: '1 LIMC 同時開採所有代幣',
        calculator_already: 'Limcore 已經在開採標記的代幣',
        calculator_inProcess: '其他正在整合中',
      },
    },
  },

  fallbackLng: 'en',
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
