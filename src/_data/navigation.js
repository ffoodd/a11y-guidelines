module.exports = {
  top: {
    en: [
      { label: 'Go to menu', href: '#main-menu' },
      { label: 'Go to content', href: '#main-content' },
      { label: 'Go to footer', href: '#footer' }
    ],
    fr: [
      { label: 'Aller au menu', href: '#main-menu' },
      { label: 'Aller au contenu', href: '#main-content' },
      { label: 'Aller au pied de page', href: '#footer' }
    ]
  },
  main: {
    'en': [
      { label: 'Home', href: '/en/' },
      {
        label: 'Web',
        href: '/en/web/',
        inCardNavigation: true,
        abstract: 'Lorem ipsum dolor sit amet',
        icon: {
          name: 'web',
          height: 130,
          width: 190
        },
        theme: 'info',
        subLevels: [
          { label: 'Design', href: '/en/web/design/' },
          { label: 'Develop', href: '/en/web/develop/' },
          { label: 'Test', href: '/en/web/test-tools/' },
          { label: 'Component examples', href: '/en/web/components-examples/' }
        ]
      },
      {
        label: 'Android',
        href: '/en/mobile/android/',
        inCardNavigation: true,
        abstract: 'Lorem ipsum dolor sit amet',
        icon: {
          name: 'android',
          height: 130,
          width: 72
        },
        theme: 'warning',
        subLevels: [
          { label: 'Criteria', href: '/en/mobile/android/criteria/' },
          { label: 'Develop', href: '/en/mobile/android/development/' },
          { label: 'Talkback', href: '/en/mobile/android/talkback/' }
        ]
      },
      {
        label: 'iOS',
        href: '/en/mobile/ios/',
        inCardNavigation: true,
        abstract: 'Lorem ipsum dolor sit amet',
        icon: {
          name: 'ios',
          height: 130,
          width: 72
        },
        theme: 'warning',
        subLevels: [
          { label: 'Design', href: '/en/mobile/ios/design/' },
          { label: 'Develop', href: '/en/mobile/ios/development/' },
          { label: 'Test', href: '/en/mobile/ios/test/' },
          { label: 'VoiceOver', href: '/en/mobile/ios/voiceover/' },
          { label: 'WWDC', href: '/en/mobile/ios/wwdc/' }
        ]
      },
      {
        label: 'Editorial content',
        href: '/en/editorial-content/',
        inCardNavigation: true,
        abstract: 'Lorem ipsum dolor sit amet',
        icon: {
          name: 'editorial-content',
          height: 151,
          width: 131
        },
        theme: 'purple',
        subLevels: [
          { label: 'Transversal recommendations', href: '/en/editorial-content/general/' },
          { label: 'Word', href: '/en/editorial-content/word/' },
          { label: 'Powerpoint', href: '/en/editorial-content/powerpoint/' },
          { label: 'PDF documents', href: '/en/editorial-content/pdf/' },
          { label: 'Emails', href: '/en/editorial-content/emails/' },
          { label: 'Audio/video content', href: '/en/editorial-content/animated-components/' }
        ]
      },
      { label: 'Articles', href: '/en/articles/' }
    ],
    'fr': [
      { label: 'Accueil', href: '/fr/' },
      {
        label: 'Web',
        href: '/fr/web/',
        inCardNavigation: true,
        abstract: 'Lorem ipsum dolor sit amet',
        icon: {
          name: 'web',
          height: 130,
          width: 190
        },
        theme: 'info',
        subLevels: [
          { label: 'Designer', href: '/fr/web/designer/' },
          { label: 'Développer', href: '/fr/web/developper/' },
          { label: 'Tester', href: '/fr/web/outils/' },
          { label: 'Exemples de composants', href: '/fr/web/exemples-de-composants/' }
        ]
      },
      {
        label: 'Android',
        href: '/fr/mobile/android/',
        inCardNavigation: true,
        abstract: 'Lorem ipsum dolor sit amet',
        icon: {
          name: 'android',
          height: 130,
          width: 72
        },
        theme: 'warning',
        subLevels: [
          { label: 'Designer', href: '/fr/mobile/android/conception/' },
          { label: 'Développer', href: '/fr/mobile/android/developpement/' },
          { label: 'Tester', href: '/fr/mobile/android/test/' },
          { label: 'Talkback', href: '/fr/mobile/android/talkback/' }
        ]
      },
      {
        label: 'iOS',
        href: '/fr/mobile/ios/',
        inCardNavigation: true,
        abstract: 'Lorem ipsum dolor sit amet',
        icon: {
          name: 'ios',
          height: 130,
          width: 72
        },
        theme: 'warning',
        subLevels: [
          { label: 'Designer', href: '/fr/mobile/ios/conception/' },
          { label: 'Développer', href: '/fr/mobile/ios/developpement/' },
          { label: 'Tester', href: '/fr/mobile/ios/test/' },
          { label: 'VoiceOver', href: '/fr/mobile/ios/voiceover/' },
          { label: 'WWDC', href: '/fr/mobile/ios/wwdc/' }
        ]
      },
      {
        label: 'Contenu éditorial',
        href: '/fr/contenu-editorial/',
        inCardNavigation: true,
        abstract: 'Lorem ipsum dolor sit amet',
        icon: {
          name: 'editorial-content',
          height: 151,
          width: 131
        },
        theme: 'purple',
        subLevels: [
          { label: 'Recommandations transverses', href: '/fr/contenu-editorial/generalites/' },
          { label: 'Word', href: '/fr/contenu-editorial/word/' },
          { label: 'Powerpoint', href: '/fr/contenu-editorial/powerpoint/' },
          { label: 'Documents PDF', href: '/fr/contenu-editorial/pdf/' },
          { label: 'Emails', href: '/fr/contenu-editorial/emails/' },
          { label: 'Contenus audios/vidéos', href: '/fr/contenu-editorial/composants-animes/' }
        ]
      },
      { label: 'Articles', href: '/fr/articles/' }
    ]
  },
  footer: {
    en: [
      { label: 'Contact', href: '/en/contact' },
      { label: 'About', href: '/en/about' },
      { label: 'Sitemap', href: '/en/sitemap/' },
    ],
    fr: [
      { label: 'Contact', href: '/fr/contact' },
      { label: 'À propos', href: '/fr/a-propos' },
      { label: 'Plan de site', href: '/fr/plan-de-site/' },
    ]
  }
}