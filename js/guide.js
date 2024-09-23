const quickGuide = [
  [
      { type: 'title', text: 'Step 1' },
      { type: 'content', text: 'Install these two shortcuts'},
      { type: 'link', href: 'https://www.icloud.com/shortcuts/05dc7c8991fe4664870398d317cf52e5', text: 'DNS Shortcut', newTab: true },
      { type: 'link', href: 'https://www.icloud.com/shortcuts/57f03a5d4bbf4529a03e2598828b05de', text: 'Esign & Certs Shortcut', newTab: true },
      { type: 'link', href: 'https://routinehub.co/shortcut/19640/', text: 'DNS+Esign+Cert Shortcut', newTab: true },

  ],
 [
      { type: 'title', text: 'Step 2' },
      { type: 'content', text: 'Be sure DNS is enabled in settings' },
      { type: 'content', text: 'Install esign using cert' },
      { type: 'content', text: 'Download same cert use to install ESign' },
      { type: 'content', text: 'Import cert into Esign' },
      { type: 'content', text: 'Profit' },
  ],
  [
      { type: 'title', text: 'Disclaimer!' },
      { type: 'content', text: 'This DNS is prebuilt and all DNS can track your internet activity! Use it if you want but just know it’s possible for the person who made it to track your internet logs.'},

  ]
];

const makeDNS = [
  [
      { type: 'title', text: 'Step 1' },
      { type: 'content', text: 'Follow the steps to make your DNS. [Removed pre built DNS]'},
      { type: 'content', text: 'When you make your own DNS you have multiple services to choose from (or host your own server), I’d recommend'},
      { type: 'link', href: 'https://nextdns.io/?from=ttmh29cu', text: 'NextDNS',newTab: true },
      { type: 'content', text: 'Make an account'},
      { type: 'content', text: 'Go to “Denylist”'},
      { type: 'content', text: 'Add the following links to the denylist'},
      { type: 'link', href: '#denylist', text: 'DenyList Links',newTab: false },
      { type: 'content', text: 'Add this link in the allowList ( for feather only )'},
      { type: 'link', text: 'app.localhost.direct', href:'#'},

      { type: 'image', src: 'Screenshots/best-guide/dnsBlockiLst.png', alt: 'Image 2' },
      { type: 'image', src: 'Screenshots/best-guide/allowlist.jpg', alt: 'allowList' },



  ],
  [
      { type: 'title', text: 'Step 2' },
      { type: 'content', text: 'Once you have your deny list set up you need to install the DNS profile by going to the setup tab and hitting download config profile' },
      { type: 'content', text: 'Then enable the DNS and check that it is turned on in VPN & device management found in General in settings' },
      { type: 'content', text: 'If you have another DNS be sure to disable it along with turning off a VPN' },
      { type: 'image', src: 'Screenshots/best-guide/dns-profile.jpg', alt: 'dns-profile' },
      { type: 'image', src: 'Screenshots/best-guide/dns-settings.jpg', alt: 'dns-settings' },

  ],
  [
      { type: 'title', text: 'Step 3 (Optional: To add adBlock)' },
      { type: 'content', text: 'Go to Privacy tab > Add a blocklist' },
      { type: 'content', text: 'Add any adblocker you want' },
      { type: 'image', src: 'Screenshots/best-guide/adblock.png', alt: '' },
      { type: 'image', src: 'Screenshots/best-guide/adblock2.png', alt: '' },

  ],
];

const installingEsign = [
    [
        { type: 'title', text: 'Step 1' },
        { type: 'content', text: 'Download ESign from link below it has quite a few certs to choose from just get one that works (some will fail to install) just keep trying until you get one to install OR use the shortcut ( This is the easier way to install both ESign and feather and get the cert files! ) ' },
        { type: 'link', href: 'https://esigncert.github.io/khoindvn/', text: 'Download Esign', newTab: true },
        { type: 'link', href: 'https://www.icloud.com/shortcuts/57f03a5d4bbf4529a03e2598828b05de', text: 'Download Shortcut', newTab: true },
        { type: 'content', text: 'Alt links (If none above work you are most likely blacklisted you will need to backup > erase all content and settings > restore. This is the only way to get unblacklisted)' },
        { type: 'link', href: 'http://ealmartini.bio.link', text: 'ealmartini',newTab: true },
        { type: 'link', href: '⁠linktr.ee/DmSideloadz', text: 'DmSideloadz',newTab: true },
        { type: 'link', href: '⁠beacons.ai/xoikila/home', text: 'xoikila' ,newTab: true},
        { type: 'link', href: 'http://beacons.ai/cosmolol/home', text: 'cosmolol' ,newTab: true},
        { type: 'link', href: 'http://cloudyserver.bio.link', text: 'cloudyserver' ,newTab: true},
        { type: 'link', href: 'http://jorkthepork.com', text: 'jorkthepork' ,newTab: true},
        { type: 'content', text: 'Do not use the live (or active) cert link this certificate is currently signed. Do not use that certificate. It will work but if the certificate gets revoked your apps will get revoked. This is what some other signing services use and are subject to being revoked quickly. ' },
        { type: 'image', src: 'Screenshots/best-guide/shortcut.png', alt: 'shortcut' },
        { type: 'image', src: 'Screenshots/best-guide/esign.png', alt: 'esign' },
  
    ],  
    [
      { type: 'title', text: 'Step 2' },
      { type: 'content', text: 'Trust ESign in settings to allow you to open the app (settings > general > VPN & device management' },
      { type: 'image', src: 'Screenshots/best-guide/verifycert.png', alt: 'Cert Download' },
    ],
    [
      { type: 'title', text: 'Step 3' },
      { type: 'content', text: 'Download the certs file zip (FILE ESign Cert) from the link below ' },
      { type: 'link', href: 'https://khoindvn.io.vn/document/DNS/Esign-Certs.zip', text: 'Esign-Certs' ,newTab: true},
      { type: 'image', src: 'Screenshots/best-guide/Dlcert.png', alt: 'Cert Download' },
    ],
    [
      { type: 'title', text: 'Step 4' },
      { type: 'content', text: 'Open ESign (WARNING) I have noticed on some phones there is a bug that will cause all apps to stop working while trying to import files or apps! Just do a hard reset of your phone (quick press Up then Down then hold power button)' },
      { type: 'content', text: 'In ESign go to the far left tab(files) and at the top right corner hit that and select import. Then choose the cert .zip file to import.' },
      { type: 'content', text: 'Once imported click it to unzip you can then delete the zip file' },
  
      { type: 'image', src: 'Screenshots/best-guide/esignApp.png', alt: 'Cert Download' },
      { type: 'image', src: 'Screenshots/best-guide/importZip.png', alt: 'Cert Download' },
    ],
    [
      { type: 'title', text: 'Step 5' },
      { type: 'content', text: 'Open cert folder and pick one out to install. I use HDFC but any should work if one does not work just try another. Import by clicking on the cert and importing.' },
      { type: 'content', text: 'That’s it you’re all set up now time to get some apps!' },
      { type: 'image', src: 'Screenshots/best-guide/importCert.png', alt: 'Cert Download' },
  
    ],
]

const downloadingApps = [
  [
      { type: 'title', text: 'Getting Apps from IPA' },
      { type: 'content', text: 'There are 2 ways of installing apps' },
      { type: 'content', text: 'You can import any downloaded .ipa files in the same file location as the zip folder.' },
      { type: 'content', text: ' It will ask if you want to import it to App Library and click yes and it will move to the unsigned tab ' },
      { type: 'link', href: '#installingApps', text: 'Installing the IPA' ,newTab: false},
      { type: 'image', src: 'Screenshots/best-guide/installipa.png', alt: '' },
  ],
  [
      { type: 'title', text: 'Getting Apps from Repos' },
      { type: 'content', text: 'You can use repos which is my preferred method to install apps as you can download and install directly inside ESign' },
      { type: 'content', text: 'To add a repo go to the App Store tab > app source (top left) > + (top right) you can then paste your repos' },
      { type: 'content', text: 'Here is a all the repos I currently use just copy this text and then hit the plus sign and it will paste them all' },
      { type: 'link', href: 'esign-repo.html', text: 'Esign Repos' ,newTab: true},
      { type: 'link', href: 'https://rentry.org/ipa-sources2', text: 'Links for other IPA Sources and Games' ,newTab: true},
      { type: 'content', text: 'You can now download apps from Esign AppStore tab' },
      { type: 'image', src: 'Screenshots/best-guide/appsources.png', alt: 'appsources' },
      { type: 'image', src: 'Screenshots/best-guide/addsource.png', alt: 'addsource' },
  ],
];

const installingApps = [
  [
      { type: 'title', text: 'Step 1' },
      { type: 'content', text: 'Go to the apps tab you will see the unsigned app you imported click on it and hit “SIGNATURE” (DO NOT JUST HIT INSTALL IT WILL NOT WORK!)' },
      { type: 'content', text: 'Hit signature again on the next tab and it will load then hit install and a pop up will come up for it to install the app and its done. No revokes and install as many as you want!' },
      { type: 'image', src: 'Screenshots/best-guide/signApp.png', alt: 'signApp' },
      { type: 'image', src: 'Screenshots/best-guide/signApp2.png', alt: 'signApp2' },
      { type: 'image', src: 'Screenshots/best-guide/installApp.png', alt: 'installApp' },
      { type: 'image', src: 'Screenshots/best-guide/installApp2.png', alt: 'installApp2' },
  ],

];


const faqs = [
  {
      question: 'None of the ESign links working and not installing!',
      answer: 'Ans: Most likely blacklisted! If you have used scarlet in the past or if you have used this and had to reinstall or if you EVER disabled the DNS. Only fix is to backup > erase all content and settings > restore from backup. Redo all steps in guide and all certs should work again.'
  },
  {
      question: ' I installed ESign, but when I try to sign/install an app I am getting “integrity not verified” or “App requires verification”',
      answer: ' Use the same cert you used to install ESign. This can be found in general > VPN & Device Management if you can’t remember.'
  },
  {
      question: 'Can I get notifications for sideloaded apps?',
      answer: 'Depending on the cert, some have added notifications for some apps, however you cannot edit the mobile provisions file of a revoked cert to add apps to the notification list. (No instagram notifications is the most common question)'
  },
  {
      question: ' What cert should I use?',
      answer: 'HDFC, Aldo, & Sunshine seem to be the most reliable in the US other than that just use one that works for you. (HDFC seems to have the most notifications added in mobile provisions)'
  },
  {
      question: 'What is NoLogs ESign? What’s the difference?',
      answer: 'NoLogs removes telemetry data. This is data sent back to the dev with logs like information about crashing, iOS version, device, and a lot more. Typically this is nothing new. Every single app has this tracking including apps on the AppStore, but this is sent to a Chinese company and many do not want them to have even more information about them.'
  },
  {
      question: 'Can I update my phone with the DNS?',
      answer: 'Yes, but only if you set up your own DNS'
  },
  {
      question: ' Do I need to redo the steps after I update?',
      answer: 'Not if you set up your own DNS, otherwise yes. (May need to reset device if disabled DNS to update to get unbalacklisted)'
  },
  {
      question: 'Does this work on iPad / Apple TV / Apple Vision Pro / Apple Watch?',
      answer: 'iPad yes, all others no (paid certs do support others)'
  },
  {
      question: 'Can I use a VPN?',
      answer: 'Yes, but you need to be able to edit the VPNs built in DNS from automatic (using the VPNs DNS) to manual (using your own built DNS) this will very from each VPN as they are all different. Here is a guide made by for those interest in a in depth look'
  },
  {
      question: 'Can I inject .debs / .deylib into apps?',
      answer: 'Yes, check the guide'
  },
  {
      question: 'All my sideloaded apps are crashing/instantly closing on open! Is there a fix?',
      answer: ' Yes and No, seems to be a bug when the phone is restarted (not sure the cause as it is not every time) to be extra safe you can turn on airplane mode before restarting your phone. Not entirely sure if this does anything, but could avoid the crashing bug. To fix you must delete all crashing sideloaded apps and start again with a new cert'
  },
  {
      question: ' Can I use a paid cert with ESign?',
      answer: 'Yes, just import your P12 & mobile provision files. (No need to use a DNS)'
  },
  {
      question: 'What if I use a non revoked leaked cert?',
      answer: ' It will work until it gets revoked (don’t use an active cert)'
  },
  {
      question: 'Does this work on IOS 18?',
      answer: 'Yes'
  },


];

const feather = [
  [
      { type: 'title', text: 'Step 1' },
      { type: 'content', text: 'Set up nextDNS from detailed guide (Step 1 & 2 only)' },
      { type: 'link', href: 'best-guide.html', text: 'NextDNS Setup' , newTab:true},

  ],
  [
      { type: 'title', text: 'Step 2' },
      { type: 'content', text: 'Download this shortcut' },
      { type: 'link', href: 'https://www.icloud.com/shortcuts/57f03a5d4bbf4529a03e2598828b05de', text: 'Shortcut' , newTab:true},
      { type: 'content', text: 'Open the shortcut from Shortcuts App' },
      { type: 'content', text: 'Choose Installers > Feather' },
      { type: 'content', text: 'Choose any certificate and try to choose another if first doesnt work' },
      { type: 'content', text: 'Choose Allow if theres a popup asking for permissions and Install'},


  ],
  [
    { type: 'title', text: 'Step 3' },
    { type: 'content', text: 'Download any cert from this telegram channel' },
    { type: 'link', href: 'https://t.me/AppleP12', text: 'AppleP12 telegram' , newTab:true},
    { type: 'content', text: 'Open profile and in files tab download any cert' },
    { type: 'image', src: 'Screenshots/best-guide/p12.jpg', alt: 'p12 telegram' },
    { type: 'image', src: 'Screenshots/best-guide/p12cert.jpg', alt: 'p12 cert' },
],

];






// { type: 'title', text: '' },

//     { type: 'content', text: '' },

// { type: 'link', href: '', text: '' },

// { type: 'image', src: 'Screenshots/best-guide/', alt: '' },
