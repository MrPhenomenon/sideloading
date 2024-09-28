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
      { type: 'content', text: 'Follow the steps to make your DNS. [Removed any other DNS you have (adblock etc)]'},
      { type: 'content', text: 'When you make your own DNS you have multiple services to choose from (or host your own server), I’d recommend'},
      { type: 'link', href: 'https://nextdns.io/?from=ttmh29cu', text: 'NextDNS',newTab: true },
      { type: 'content', text: 'Make an account'},
      { type: 'content', text: 'Go to “Denylist”'},
      { type: 'content', text: 'Add the following links to the denylist'},
      { type: 'link', href: '#denylist', text: 'DenyList Links',newTab: false },
      { type: 'content', text: 'Add this link in the allowList ( for feather only )'},
      { type: 'link', text: 'app.localhost.direct', href:'#'},

      { type: 'image', src: 'images/best-guide/dnsBlockiLst.png', alt: 'Image 2' },
      { type: 'image', src: 'images/best-guide/allowlist.jpg', alt: 'allowList' },



  ],
  [
      { type: 'title', text: 'Step 2' },
      { type: 'content', text: 'Once you have your deny list set up you need to install the DNS profile by going to the setup tab and hitting download config profile' },
      { type: 'content', text: 'Then enable the DNS and check that it is turned on in VPN & device management found in General in settings' },
      { type: 'content', text: 'If you have another DNS be sure to disable it along with turning off a VPN' },
      { type: 'image', src: 'images/best-guide/dns-profile.jpg', alt: 'dns-profile' },
      { type: 'image', src: 'images/best-guide/dns-settings.jpg', alt: 'dns-settings' },

  ],
  [
      { type: 'title', text: 'Step 3 (Optional: To add adBlock)' },
      { type: 'content', text: 'Go to Privacy tab > Add a blocklist' },
      { type: 'content', text: 'Add any adblocker you want' },
      { type: 'image', src: 'images/best-guide/adblock.png', alt: '' },
      { type: 'image', src: 'images/best-guide/adblock2.png', alt: '' },

  ],
];

const installingEsign = [
    [
        { type: 'title', text: 'Step 1' },
        { type: 'content', text: "Warning: You can't use any free VPN with this method. If you want to, you'll need to create your own VPN before installing Esign to avoid blacklisting." },
        { type: 'link', href: 'vpn-guide.html', text: 'Make your own VPN guide',newTab: true },
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
        { type: 'image', src: 'images/best-guide/shortcut.png', alt: 'shortcut' },
        { type: 'image', src: 'images/best-guide/esign.png', alt: 'esign' },
  
    ],  
    [
      { type: 'title', text: 'Step 2' },
      { type: 'content', text: 'Trust ESign in settings to allow you to open the app (settings > general > VPN & device management' },
      { type: 'image', src: 'images/best-guide/verifycert.png', alt: 'Cert Download' },
    ],
    [
      { type: 'title', text: 'Step 3' },
      { type: 'content', text: 'Download the certs file zip (FILE ESign Cert) from the link below ' },
      { type: 'link', href: 'https://khoindvn.io.vn/document/DNS/Esign-Certs.zip', text: 'Esign-Certs' ,newTab: true},
      { type: 'image', src: 'images/best-guide/Dlcert.png', alt: 'Cert Download' },
    ],
    [
      { type: 'title', text: 'Step 4' },
      { type: 'content', text: 'Open ESign (WARNING) I have noticed on some phones there is a bug that will cause all apps to stop working while trying to import files or apps! Just do a hard reset of your phone (quick press Up then Down then hold power button)' },
      { type: 'content', text: 'In ESign go to the far left tab(files) and at the top right corner hit that and select import. Then choose the cert .zip file to import.' },
      { type: 'content', text: 'Once imported click it to unzip you can then delete the zip file' },
  
      { type: 'image', src: 'images/best-guide/esignApp.png', alt: 'Cert Download' },
      { type: 'image', src: 'images/best-guide/importZip.png', alt: 'Cert Download' },
    ],
    [
      { type: 'title', text: 'Step 5' },
      { type: 'content', text: 'Open cert folder and pick one out to install. I use HDFC but any should work if one does not work just try another. Import by clicking on the cert and importing.' },
      { type: 'content', text: 'That’s it you’re all set up now time to get some apps!' },
      { type: 'image', src: 'images/best-guide/importCert.png', alt: 'Cert Download' },
  
    ],
]

const downloadingApps = [
  [
      { type: 'title', text: 'Getting Apps from IPA' },
      { type: 'content', text: 'There are 2 ways of installing apps' },
      { type: 'content', text: 'You can import any downloaded .ipa files in the same file location as the zip folder.' },
      { type: 'content', text: ' It will ask if you want to import it to App Library and click yes and it will move to the unsigned tab ' },
      { type: 'link', href: '#installingApps', text: 'Installing the IPA' ,newTab: false},
      { type: 'image', src: 'images/best-guide/installIpa.png', alt: 'ipa' },
  ],
  [
      { type: 'title', text: 'Getting Apps from Repos' },
      { type: 'content', text: 'You can use repos which is my preferred method to install apps as you can download and install directly inside ESign' },
      { type: 'content', text: 'To add a repo go to the App Store tab > app source (top left) > + (top right) you can then paste your repos' },
      { type: 'content', text: 'Here is a all the repos I currently use just copy this text and then hit the plus sign and it will paste them all' },
      { type: 'link', href: 'esign-repo.html', text: 'Esign Repos' ,newTab: true},
      { type: 'link', href: 'https://rentry.org/ipa-sources2', text: 'Links for other IPA Sources and Games' ,newTab: true},
      { type: 'content', text: 'You can now download apps from Esign AppStore tab' },
      { type: 'image', src: 'images/best-guide/appsources.png', alt: 'appsources' },
      { type: 'image', src: 'images/best-guide/addsource.png', alt: 'addsource' },
  ],
];

const installingApps = [
  [
      { type: 'title', text: 'Step 1' },
      { type: 'content', text: 'Go to the apps tab you will see the unsigned app you imported click on it and hit “SIGNATURE” (DO NOT JUST HIT INSTALL IT WILL NOT WORK!)' },
      { type: 'content', text: 'Hit signature again on the next tab and it will load then hit install and a pop up will come up for it to install the app and its done. No revokes and install as many as you want!' },
      { type: 'image', src: 'images/best-guide/signApp.png', alt: 'signApp' },
      { type: 'image', src: 'images/best-guide/signApp2.png', alt: 'signApp2' },
      { type: 'image', src: 'images/best-guide/installApp.png', alt: 'installApp' },
      { type: 'image', src: 'images/best-guide/installApp2.png', alt: 'installApp2' },
  ],

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
      { type: 'image', src: 'images/best-guide/p12.jpg', alt: 'p12 telegram' },
      { type: 'image', src: 'images/best-guide/p12cert.jpg', alt: 'p12 cert' },
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

const dylib = [
  [
      { type: 'title', text: 'Introduction' },
      { type: 'content', text: 'For more advanced users you may find an app or game that does not have a tweaked version. This is a quick guide to import or remove dylib/debs from an ipa to allow for free in app purchases (IAP) or block ads or even add igamegod (a hex editor tool to modify values like gold/gems)' },
      { type: 'content', text: 'You can get most decrypted apps from (Some may not be the most up to date)' },
      { type: 'link', href: 'https://decrypt.day/', text: 'decrypt.day' },
      { type: 'content', text: 'Or from here (More up to date but has a 2 app a day limit)' },
      { type: 'link', href: 'https://armconverter.com/decryptedappstore/us', text: 'decrypedAppStore' },
      { type: 'content', text: 'If you can’t find it here there are a few other websites you can search for decrypted ipas if you have a suggestion let me know and I will add it to the link. ' },
  ],
  [
      { type: 'title', text: 'Dylib/Deb files ' },
      { type: 'content', text: 'Finding them can be difficult so I provided a few I’ve found throughout the subreddit below, but if you want to look at more I found this .ipa you can sideload as it has a ton.' },
      { type: 'link', href: 'https://www.postbox.news/downloads', text: 'PostBox IPA' },
      { type: 'content', text: '(Recommend you go to the repos tab and add some like TheBigBoss & Julioverne)' },
      { type: 'content', text: 'If you do not want an app to download you can also use this website to search for them.' },
      { type: 'link', href: 'https://www.ios-repo-updates.com', text: 'iosRepoUpdates' },
      { type: 'content', text: 'Adblock (.deb file)' },
      { type: 'link', href: 'https://julioverne.github.io/debfiles/com.julioverne.adblock_0.2~beta1_iphoneos-arm.deb', text: 'Julioverne Adblock' },
      { type: 'link', href: 'http://apt.thebigboss.org/repofiles/cydia/debs2.0/splashadblock_1.5.deb', text: 'Splash Adblock' },
      { type: 'content', text: 'IAP (Free In App Purchases)' },
      { type: 'link', href: 'https://github.com/Paisseon/SatellaJailed/blob/emt/SatellaJailed.dylib', text: 'Satella Jailed' },
      { type: 'link', href: '', text: 'This is only for non-server sided IAP’s so mainly low anti-cheat games (Will not work for all apps and you can get banned from the game if they have anti cheat detection)' },


  ],
  [
        { type: 'title', text: 'Adblock and IAP Files' },
      { type: 'content', text: 'Adblock (.deb file)' },
      { type: 'link', href: 'https://julioverne.github.io/debfiles/com.julioverne.adblock_0.2~beta1_iphoneos-arm.deb', text: 'Julioverne Adblock' },
      { type: 'link', href: 'http://apt.thebigboss.org/repofiles/cydia/debs2.0/splashadblock_1.5.deb', text: 'Splash Adblock' },
      { type: 'content', text: 'IAP (Free In App Purchases)' },
      { type: 'link', href: 'https://github.com/Paisseon/SatellaJailed/blob/emt/SatellaJailed.dylib', text: 'Satella Jailed' },
      { type: 'content', text: 'This is only for non-server sided IAP’s so mainly low anti-cheat games (Will not work for all apps and you can get banned from the game if they have anti cheat detection)' },
      { type: 'content', text: 'IGG (IGameGod Hex Editor)' },
      { type: 'link', href: 'https://iosgods.com/igg', text: 'IGG' },
      { type: 'content', text: 'Works on most games to modify game values of anything the game keeps numbers on and works with non-server values cash/gold/gems' },
  ],
  [
        { type: 'title', text: 'Injecting Deb/Dylib' },
        { type: 'content', text: 'Import the ipa you want to modify into esign files tab and click on it to “add library” so it moves into the unsigned apps tab' },
        { type: 'content', text: 'Next import your Deb/Dylib files to the same file tab' },
        { type: 'content', text: 'Click on the app like normal but instead of hitting signature hit “more settings”' },
        { type: 'content', text: 'Next find the Add Library' },
        { type: 'content', text: ' Then add the ones you want' },
        { type: 'content', text: 'Hit OK and you will see them added' },
        { type: 'content', text: 'Then just Sign the app and you are done!' },
        { type: 'image', src: 'images/dylib/1.png', alt: '' },
        { type: 'image', src: 'images/dylib/2.png', alt: '' },
        { type: 'image', src: 'images/dylib/3.png', alt: '' },
  ],
  [
        { type: 'title', text: 'Removing Deb/Dylib' },
        { type: 'content', text: 'Sometimes tweaked apps come with garbage they don’t need (Looking at you iosgods) you can remove junk like for example iosgods ad popups in a similar way.' },
        { type: 'content', text: 'In the more settings tab you can click on Remove Existing Library to remove unwanted' },
        { type: 'content', text: 'This can be helpful for tweaked apps that have a bunch of unnecessary tweaks injected to them as well most notably in tweaked YouTube, Spotify or social media apps that can cause issues' },
        { type: 'image', src: 'images/dylib/removing.png', alt: '' },
  ],


];
const vpn = [

  [
      { type: 'title', text: 'How to?' },
      { type: 'content', text: 'First you will need to find your DNS address for NextDNS you can find it here (yours will be different than mine)' },
      { type: 'content', text: 'Next you will need to take the address and change your VPN from automatic to manual (This is different for every VPN!) ' },
      { type: 'image', src: 'images/vpn/1.png', alt: '' },
  ],
  [
      { type: 'title', text: 'Connecting NextDNS with VPN.' },
      { type: 'content', text: 'Wireguard guide thanks to u/Dropped_Angel' },
      { type: 'content', text: 'This should be somewhat universal depending on your vpn’s configurability ' },
      { type: 'content', text: 'Setup a WireGuard profile. Configure WireGuard App.' },
      { type: 'link', href: 'https://itunes.apple.com/us/app/wireguard/id1441195209?ls=1&mt=8', text: 'Wireguard' },
      { type: 'content', text: 'Download and setup the .conf file for WireGuard with AirVPN configuration Generator (PAID)' },
      { type: 'link', href: 'https://airvpn.org/generator/', text: 'AirVPN' },

      { type: 'image', src: 'images/vpn/2.png', alt: '' },
  ],
  [
      { type: 'title', text: 'Step 2' },
      { type: 'content', text: 'Proceed with setting up NextDNS as WireGuard’s DNS' },
      { type: 'content', text: 'Use your NextDNS custom dns and copy the first one on both.' },
      { type: 'content', text: 'Copy and paste the first line of Part 1 and Part 2. Separated with a comma' },
      { type: 'content', text: 'Repeat the steps for every thing configuration, future and current.' },
      { type: 'content', text: 'SAVE.' },
      { type: 'image', src: 'images/vpn/3.png', alt: '' },
      { type: 'image', src: 'images/vpn/4.png', alt: '' },
  ],
];

const tips = [
    [
    { type: 'title', text: 'Tips to not get Blacklisted' },
    { type: 'content', text: 'Do NOT use any free VPN with this method, if you have a paid VPN, configure it to work with your DNS. You need to make your own VPN if you want to use a free vpn (see the guide below)' },
    { type: 'link', href: 'vpn-guide.html', text: 'VPN Guide' },
    { type: 'content', text: 'Do NOT turn off DNS even for updating iOS, if you cannot update iOS you need to make your own DNS' },
    { type: 'link', href: 'best-guide.html', text: 'DNS Guide' },
    { type: 'content', text: ' If you add multiple adblockers to list in NextDNS it is very likely that you will hit the monthly quota of 300k queries' },
    { type: 'content',  text: 'So use only one adblocker (AdGuard DNS Filter is good)' },
    { type: 'content', text: 'You usually get warning email from NextDNS about your limit, keep an eye out for that and shift to your backup for the rest of the month' },
    { type: 'content', text: "Your backup could be Khoindvn's DNS ( Shift back to nextDNS one your limit )" },
    { type: 'link', href: 'https://khoindvn.io.vn/document/DNS/khoindns.mobileconfig?sign=1', text: 'Khoindvn DNS' },
    { type: 'content', text: 'You can manually check your last 30 days usage to get an estimate in Analytics Tab' },
    { type: 'image', src: 'images/usage.jpg', alt: 'usage' },
    ]
]

const freevpn = [
    [
        { type: 'title', text: 'Introduction' },
        { type: 'content', text: 'The most asked question is can you use a VPN? The answer is yes, but it takes some work to get it to work without revoking all your apps. This is because VPNs have a built in DNS they use to filterinternet traffic and it’s possible to adjust the built in VPN DNS to work with NextDNS or another DNS provide' },
    ],
    [
        { type: 'title', text: 'Instructions' },
        { type: 'content', text: 'This guide is for Windows, you need a Windows PC/Laptop'},
        { type: 'content', text: 'Read the instructions before watching the guide'},
        { type: 'content', text: 'Warning: This should be done before installing Esign because your DNS will not work while linking your IP'},
        { type: 'content', text: "You might get blacklisted if you already have a certificate installed, but it’s not guaranteed. I did it with certificates installed, and it's working fine so far." },
        { type: 'content', text: ' Once your VPN is set up, you cannot change the location, so choose your server location carefully. '},
        { type: 'content', text: 'You can have a maximum of 2 VPN connections at the same time.' },
        { type: 'content', text: 'A credit or debit card is required for the initial setup (don’t worry, you won’t be charged).' },
        { type: 'content', text: 'Let’s get started' },

    ],
    [
            { type: 'title', text: 'Video Guide' },
            { type: 'content', text: 'First, read the following instructions to learn what settings you need to change. Then, follow this tutorial (Thanks to u/Rockybroo_YT for providing the link).' },
            { type: 'link', href: 'https://www.youtube.com/watch?v=1dIy0rZ_GKs&t=241s', text: 'Watch the Tutorial', newTab:true },
            { type: 'content', text: "At 0:45, during sign-up, you'll need to select a 'Home Region'" },
            { type: 'content', text: "Choose this location carefully, as it will be your VPN location, and you won’t be able to change it later." },
            { type: 'content', text: "So avoid selecting your country if you want to access sites that are blocked there." },
            { type: 'content', text: "At the 03:38 mark in the video, replace Cloudflare's 1.1.1.1 with your NextDNS addresses" },
            { type: 'content', text: "To find the address, open NextDNS on your phone where the profile is installed." },
            { type: 'content', text: "Scroll down a bit, and you’ll see the addresses under the heading 'DNS Servers'." },
            { type: 'content', text: "Add both of these addresses in the 'Primary' and 'Secondary DNS Server' fields." },
            { type: 'content', text: "When it’s time to install OpenVPN on your PC, instead download and install OpenVPN from the App Store." },
            { type: 'content', text: "Add the URL and sign in." },
            { type: 'content', text: "You should now be able to connect to the VPN." },
            { type: 'content', text: "Connect to the VPN and open NextDNS." },
            { type: 'content', text: "It should say, 'This device is using NextDNS with no profile'." },
            { type: 'content', text: "Scroll down and look for 'Link IP'." },
            { type: 'content', text: "Click the button, refresh the page and it should now say 'All good!'." },
            { type: 'content', text: "You NEED to be connected to VPN when linking your IP and don't click the button again when you are disconnected from VPN" },
            { type: 'content', text: "Enjoy!" },
            { type: 'image', src: 'images/vpn/region.png', alt: 'region' },
            { type: 'image', src: 'images/vpn/dns.png', alt: '' },
            { type: 'image', src: 'images/vpn/err.jpg', alt: '' },
            { type: 'image', src: 'images/vpn/ip.png', alt: '' },
    ]


    
]


// { type: 'title', text: '' },

//     { type: 'content', text: '' },

// { type: 'link', href: '', text: '' },

// { type: 'image', src: 'images/best-guide/', alt: '' },
