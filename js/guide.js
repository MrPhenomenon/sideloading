const quickGuide = [
    [
      { type: 'title', text: 'Step 1' },
      { type: 'content', text: 'Install the following two shortcuts:' },
      { type: 'link', href: 'https://www.icloud.com/shortcuts/05dc7c8991fe4664870398d317cf52e5', text: 'DNS Shortcut', newTab: true },
      { type: 'link', href: 'https://www.icloud.com/shortcuts/57f03a5d4bbf4529a03e2598828b05de', text: 'Esign & Certs Shortcut', newTab: true },
      { type: 'link', href: 'https://routinehub.co/shortcut/19640/', text: 'DNS+Esign+Cert Shortcut', newTab: true },
    ],
    [
      { type: 'title', text: 'Step 2' },
      { type: 'content', text: 'Ensure the DNS is enabled in your settings.' },
      { type: 'content', text: 'Install Esign using the provided certificate.' },
      { type: 'content', text: 'Download the same certificate used to install Esign.' },
      { type: 'content', text: 'Import the certificate into Esign.' },
      { type: 'content', text: 'You’re done!' },
    ],
    [
      { type: 'title', text: 'Disclaimer!' },
      { type: 'content', text: 'This DNS is prebuilt, and all DNS services can track your internet activity. Use it at your own discretion, but be aware that the creator of this DNS could potentially track your internet logs.' },
    ]
  ];

  const makeDNS = [
    [
      { type: 'title', text: 'Step 1' },
      { type: 'content', text: 'Follow the steps to create your own DNS. [Remove any other DNS you have (adblock, etc.)]' },
      { type: 'content', text: 'When creating your DNS, you have multiple services to choose from (or you can host your own server). I’d recommend:' },
      { type: 'link', href: 'https://nextdns.io', text: 'NextDNS', newTab: true },
      { type: 'content', text: 'Create an account' },
      { type: 'content', text: 'Go to “Denylist”' },
      { type: 'content', text: 'Add the following links to the denylist:' },
      { type: 'link', href: '#denylist', text: 'DenyList Links', newTab: false },
      { type: 'content', text: 'Add this link to the allowlist (for Feather only):' },
      { type: 'link', text: 'app.localhost.direct', href: '#' },
  
      { type: 'image', src: 'images/best-guide/dnsBlockiLst.png', alt: 'Denylist Image' },
      { type: 'image', src: 'images/best-guide/allowlist.jpg', alt: 'Allowlist Image' },
    ],
    [
      { type: 'title', text: 'Step 2' },
      { type: 'content', text: 'Once your denylist is set up, install the DNS profile by going to the "Setup" tab and downloading the config profile.' },
      { type: 'content', text: 'Then, enable the DNS and ensure it is turned on in "VPN & Device Management," found under "General" in settings.' },
      { type: 'content', text: 'If you have another DNS, make sure to disable it, and turn off any VPN.' },
      { type: 'image', src: 'images/best-guide/dns-profile.jpg', alt: 'DNS Profile' },
      { type: 'image', src: 'images/best-guide/dns-settings.jpg', alt: 'DNS Settings' },
    ],
    [
      { type: 'title', text: 'Step 3 (Optional: To add AdBlock)' },
      { type: 'content', text: 'Go to the "Privacy" tab and add a blocklist.' },
      { type: 'content', text: 'Add any ad blocker you prefer.' },
      { type: 'image', src: 'images/best-guide/adblock.png', alt: 'AdBlock Image 1' },
      { type: 'image', src: 'images/best-guide/adblock2.png', alt: 'AdBlock Image 2' },
    ],
  ];
  

  const installingEsign = [
    [
      { type: 'title', text: 'Step 1' },
      { type: 'content', text: "Warning: You can't use any free VPN with this method. If you want to, you'll need to create your own VPN before installing Esign to avoid blacklisting." },
      { type: 'link', href: 'vpn-guide.html', text: 'Make your own VPN guide', newTab: true },
      { type: 'content', text: 'Download Esign from the link below. It has several certificates to choose from, just find one that works (some may fail to install). Keep trying until you get one to install, OR use the shortcut (This is the easier way to install both Esign and Feather and get the cert files!).' },
      { type: 'link', href: 'https://esigncert.github.io/khoindvn/', text: 'Download Esign', newTab: true },
      { type: 'link', href: 'https://www.icloud.com/shortcuts/57f03a5d4bbf4529a03e2598828b05de', text: 'Download Shortcut', newTab: true },
      { type: 'content', text: 'Alternate links: If none of the above links work, you are most likely blacklisted. You will need to backup > erase all content and settings > restore. This is the only way to get unblacklisted.' },
      { type: 'link', href: 'http://ealmartini.bio.link', text: 'ealmartini', newTab: true },
      { type: 'link', href: '⁠linktr.ee/DmSideloadz', text: 'DmSideloadz', newTab: true },
      { type: 'link', href: '⁠beacons.ai/xoikila/home', text: 'xoikila', newTab: true },
      { type: 'link', href: 'http://beacons.ai/cosmolol/home', text: 'cosmolol', newTab: true },
      { type: 'link', href: 'http://cloudyserver.bio.link', text: 'cloudyserver', newTab: true },
      { type: 'link', href: 'http://jorkthepork.com', text: 'jorkthepork', newTab: true },
      { type: 'content', text: 'Do not use the live (or active) cert link. This certificate is currently signed. Do not use that certificate, as it will work temporarily, but if the certificate gets revoked, your apps will be revoked too. This is what some other signing services use, and these certs are subject to quick revocation.' },
      { type: 'image', src: 'images/best-guide/shortcut.png', alt: 'Shortcut Image' },
      { type: 'image', src: 'images/best-guide/esign.png', alt: 'Esign Image' },
    ],  
    [
      { type: 'title', text: 'Step 2' },
      { type: 'content', text: 'Trust Esign in your settings to allow the app to open (Settings > General > VPN & Device Management).' },
      { type: 'image', src: 'images/best-guide/verifycert.png', alt: 'Cert Verification' },
    ],
    [
      { type: 'title', text: 'Step 3' },
      { type: 'content', text: 'Download the certificate files (ZIP file) from the link below.' },
      { type: 'link', href: 'https://khoindvn.io.vn/document/DNS/Esign-Certs.zip', text: 'Esign-Certs', newTab: true },
      { type: 'image', src: 'images/best-guide/Dlcert.png', alt: 'Cert Download' },
    ],
    [
      { type: 'title', text: 'Step 4' },
      { type: 'content', text: 'Open Esign (WARNING: On some phones, there’s a bug that may cause all apps to stop working while trying to import files or apps. If this happens, perform a hard reset by quickly pressing the Volume Up, Volume Down, and then holding the Power button).' },
      { type: 'content', text: 'In Esign, go to the far-left tab (Files), and at the top-right corner, hit the "+" and select "Import." Choose the cert ZIP file to import.' },
      { type: 'content', text: 'Once imported, click it to unzip. You can then delete the ZIP file.' },
      { type: 'image', src: 'images/best-guide/esignApp.png', alt: 'Esign App' },
      { type: 'image', src: 'images/best-guide/importZip.png', alt: 'Import ZIP File' },
    ],
    [
      { type: 'title', text: 'Step 5' },
      { type: 'content', text: 'Open the cert folder and pick one to install. I use HDFC, but any should work. If one doesn’t work, try another. Import by clicking on the cert and selecting "Import."' },
      { type: 'content', text: 'That’s it! You’re all set up. Now it’s time to get some apps!' },
      { type: 'image', src: 'images/best-guide/importCert.png', alt: 'Import Certificate' },
    ],
  ];
  

  const downloadingApps = [
    [
      { type: 'title', text: 'Installing Apps from IPA' },
      { type: 'content', text: 'There are 2 ways to install apps:' },
      { type: 'content', text: 'You can import any downloaded .ipa files into the same file location as the ZIP folder.' },
      { type: 'content', text: 'When prompted, it will ask if you want to import it to the App Library. Click "Yes," and it will move to the "Unsigned" tab.' },
      { type: 'link', href: '#installingApps', text: 'Installing the IPA', newTab: false },
      { type: 'image', src: 'images/best-guide/installIpa.png', alt: 'Install IPA' },
    ],
    [
      { type: 'title', text: 'Installing Apps from Repos' },
      { type: 'content', text: 'Using repositories (repos) is my preferred method to install apps, as you can download and install them directly within Esign.' },
      { type: 'content', text: 'To add a repo, go to the "App Store" tab > "App Source" (top left) > "+" (top right). You can then paste your repos.' },
      { type: 'content', text: 'Here are all the repos I currently use. Just copy this text, hit the plus sign, and it will paste them all.' },
      { type: 'link', href: 'esign-repo.html', text: 'Esign Repos', newTab: true },
      { type: 'link', href: 'https://rentry.org/ipa-sources2', text: 'Links for other IPA Sources and Games', newTab: true },
      { type: 'content', text: 'You can now download apps from the Esign App Store tab.' },
      { type: 'image', src: 'images/best-guide/appsources.png', alt: 'App Sources' },
      { type: 'image', src: 'images/best-guide/addsource.png', alt: 'Add Source' },
    ],
  ];
  

  const installingApps = [
    [
      { type: 'title', text: 'Step 1' },
      { type: 'content', text: 'Go to the "Apps" tab. You will see the unsigned app you imported. Click on it and hit "SIGNATURE" (DO NOT just hit install, it will NOT work!)' },
      { type: 'content', text: 'On the next tab, hit "SIGNATURE" again, and it will load. After that, hit "Install." A pop-up will appear to confirm installation, and you’re done. No revokes, and you can install as many apps as you want!' },
      { type: 'image', src: 'images/best-guide/signApp.png', alt: 'Sign App' },
      { type: 'image', src: 'images/best-guide/signApp2.png', alt: 'Sign App 2' },
      { type: 'image', src: 'images/best-guide/installApp.png', alt: 'Install App' },
      { type: 'image', src: 'images/best-guide/installApp2.png', alt: 'Install App 2' },
    ],
  ];
  

  const feather = [
    [
      { type: 'title', text: 'Step 1' },
      { type: 'content', text: 'Set up NextDNS following the detailed guide (only Steps 1 & 2).' },
      { type: 'link', href: 'best-guide.html', text: 'NextDNS Setup', newTab: true },
    ],
    [
      { type: 'title', text: 'Step 2' },
      { type: 'content', text: 'Download this shortcut.' },
      { type: 'link', href: 'https://www.icloud.com/shortcuts/57f03a5d4bbf4529a03e2598828b05de', text: 'Shortcut', newTab: true },
      { type: 'content', text: 'Open the shortcut from the Shortcuts app.' },
      { type: 'content', text: 'Select "Installers" > "Feather".' },
      { type: 'content', text: 'Choose any certificate. If the first doesn’t work, try another one.' },
      { type: 'content', text: 'If a popup asks for permissions, select "Allow" and "Install".' },
    ],
    [
      { type: 'title', text: 'Step 3' },
      { type: 'content', text: 'Download any certificate from this Telegram channel.' },
      { type: 'link', href: 'https://t.me/AppleP12', text: 'AppleP12 Telegram', newTab: true },
      { type: 'content', text: 'Open the profile, and in the "Files" tab, download any certificate.' },
      { type: 'image', src: 'images/best-guide/p12.jpg', alt: 'P12 Telegram' },
      { type: 'image', src: 'images/best-guide/p12cert.jpg', alt: 'P12 Certificate' },
    ],
  ];
  
  
  const faqs = [
    {
      question: 'None of the ESign links are working, and I cannot install it!',
      answer: 'Most likely blacklisted! If you have used Scarlet in the past or if you have used ESign and had to reinstall, or if you EVER disabled the DNS, the only fix is to back up > erase all content and settings > restore from backup. Redo all steps in the guide, and all certs should work again.'
    },
    {
      question: 'I installed ESign, but when I try to sign/install an app, I get “Integrity not verified” or “App requires verification.”',
      answer: 'Use the same certificate you used to install ESign. You can find this in General > VPN & Device Management if you don’t remember.'
    },
    {
      question: 'Can I get notifications for sideloaded apps?',
      answer: 'It depends on the cert. Some certs include notifications for certain apps, but you cannot edit the mobile provision file of a revoked cert to add apps to the notification list. (No Instagram notifications is the most common question).'
    },
    {
      question: 'What cert should I use?',
      answer: 'HDFC, Aldo, and Sunshine seem to be the most reliable in the US. Other than that, just use one that works for you. (HDFC seems to have the most notifications added in mobile provisions).'
    },
    {
      question: 'What is NoLogs ESign? What’s the difference?',
      answer: 'NoLogs removes telemetry data, which includes information sent back to the developer such as crash reports, iOS version, device info, and more. Every app, including those in the App Store, has this kind of tracking. However, in this case, the data is sent to a Chinese company, which many people may prefer to avoid.'
    },
    {
      question: 'Can I update my phone with the DNS?',
      answer: 'Yes, but only if you set up your own DNS.'
    },
    {
      question: 'Do I need to redo the steps after I update?',
      answer: 'Not if you set up your own DNS. Otherwise, yes, and you may need to reset your device if you disabled DNS to update in order to get unblacklisted.'
    },
    {
      question: 'Does this work on iPad / Apple TV / Apple Vision Pro / Apple Watch?',
      answer: 'iPad, yes. All others, no. (Paid certs do support other devices).'
    },
    {
      question: 'Can I use a VPN?',
      answer: 'Yes, but you need to be able to edit the VPN’s built-in DNS from automatic (using the VPN’s DNS) to manual (using your own DNS). This varies with each VPN as they are all different. A guide is available for those interested in a detailed look.'
    },
    {
      question: 'Can I inject .debs / .dylib into apps?',
      answer: 'Yes, check the guide.'
    },
    {
      question: 'All my sideloaded apps are crashing/instantly closing on open! Is there a fix?',
      answer: 'Yes and no. It seems to be a bug when the phone is restarted (the cause is unclear, as it doesn’t happen every time). To be extra safe, you can turn on airplane mode before restarting your phone. Not entirely sure if this helps, but it might prevent the crashing bug. To fix it, delete all crashing sideloaded apps and start again with a new cert.'
    },
    {
      question: 'Can I use a paid cert with ESign?',
      answer: 'Yes, just import your P12 & mobile provision files. (No need to use a DNS).'
    },
    {
      question: 'What if I use a non-revoked leaked cert?',
      answer: 'It will work until it gets revoked (don’t use an active cert).'
    },
    {
      question: 'Does this work on iOS 18?',
      answer: 'Yes.'
    }
  ];
  

  const dylib = [
    [
      { type: 'title', text: 'Introduction' },
      { type: 'content', text: 'For more advanced users, you may find an app or game that does not have a tweaked version. This is a quick guide to import or remove dylib/debs from an ipa to allow for free in-app purchases (IAP), block ads, or even add iGameGod (a hex editor tool to modify values like gold/gems).' },
      { type: 'content', text: 'You can get most decrypted apps from the following (Some may not be the most up-to-date):' },
      { type: 'link', href: 'https://decrypt.day/', text: 'decrypt.day', newTab:true },
      { type: 'content', text: 'Or from here (More up-to-date, but has a 2 app/day limit):' },
      { type: 'link', href: 'https://armconverter.com/decryptedappstore/us', text: 'decryptedAppStore', newTab:true },
      { type: 'content', text: 'If you can’t find it here, there are a few other websites to search for decrypted IPAs. If you have any suggestions, let me know and I will add them to the list.' }
    ],
    [
      { type: 'title', text: 'Dylib/Deb Files' },
      { type: 'content', text: 'Finding dylib/deb files can be difficult, so I’ve provided a few I’ve found throughout the subreddit. If you want more, I found this .ipa you can sideload, as it has a ton.' },
      { type: 'link', href: 'https://www.postbox.news/downloads', text: 'PostBox IPA', newTab:true },
      { type: 'content', text: '(Recommend going to the "Repos" tab and adding repos like TheBigBoss & Julioverne.)' },
      { type: 'content', text: 'If you do not want to download an app, you can also use this website to search for them:' },
      { type: 'link', href: 'https://www.ios-repo-updates.com', text: 'iOS Repo Updates', newTab:true },
      { type: 'content', text: 'Adblock (.deb file):' },
      { type: 'link', href: 'https://julioverne.github.io/debfiles/com.julioverne.adblock_0.2~beta1_iphoneos-arm.deb', text: 'Julioverne Adblock', newTab:true },
      { type: 'link', href: 'http://apt.thebigboss.org/repofiles/cydia/debs2.0/splashadblock_1.5.deb', text: 'Splash Adblock', newTab:true },
      { type: 'content', text: 'IAP (Free In-App Purchases):' },
      { type: 'link', href: 'https://github.com/Paisseon/SatellaJailed/blob/emt/SatellaJailed.dylib', text: 'Satella Jailed', newTab:true },
      { type: 'content', text: 'This only works for non-server-sided IAPs, mainly low-anti-cheat games. (It won’t work for all apps, and you can get banned from games with anti-cheat detection.)' }
    ],
    [
      { type: 'title', text: 'Adblock and IAP Files' },
      { type: 'content', text: 'Adblock (.deb file):' },
      { type: 'link', href: 'https://julioverne.github.io/debfiles/com.julioverne.adblock_0.2~beta1_iphoneos-arm.deb', text: 'Julioverne Adblock', newTab:true },
      { type: 'link', href: 'http://apt.thebigboss.org/repofiles/cydia/debs2.0/splashadblock_1.5.deb', text: 'Splash Adblock', newTab:true },
      { type: 'content', text: 'IAP (Free In-App Purchases):' },
      { type: 'link', href: 'https://github.com/Paisseon/SatellaJailed/blob/emt/SatellaJailed.dylib', text: 'Satella Jailed' , newTab:true},
      { type: 'content', text: 'This only works for non-server-sided IAPs, mainly low-anti-cheat games. (It won’t work for all apps, and you can get banned from games with anti-cheat detection.)' },
      { type: 'content', text: 'IGG (iGameGod Hex Editor):' },
      { type: 'link', href: 'https://iosgods.com/igg', text: 'IGG', newTab:true },
      { type: 'content', text: 'Works on most games to modify game values for non-server values like cash/gold/gems.' }
    ],
    [
      { type: 'title', text: 'Injecting Deb/Dylib' },
      { type: 'content', text: 'Import the IPA you want to modify into ESign’s Files tab. Click on it and select “Add Library” so it moves into the Unsigned Apps tab.' },
      { type: 'content', text: 'Next, import your Deb/Dylib files to the same Files tab.' },
      { type: 'content', text: 'Click on the app, but instead of hitting “Sign,” select “More Settings.”' },
      { type: 'content', text: 'Find the "Add Library" option.' },
      { type: 'content', text: 'Add the libraries you want.' },
      { type: 'content', text: 'Hit "OK" and you will see them added.' },
      { type: 'content', text: 'Then just sign the app, and you’re done!' },
      { type: 'image', src: 'images/dylib/1.png', alt: '' },
      { type: 'image', src: 'images/dylib/2.png', alt: '' },
      { type: 'image', src: 'images/dylib/3.png', alt: '' }
    ],
    [
      { type: 'title', text: 'Removing Deb/Dylib' },
      { type: 'content', text: 'Sometimes tweaked apps come with unnecessary features (looking at you, iOSGods). You can remove junk, like iOSGods ad popups, in a similar way.' },
      { type: 'content', text: 'In the "More Settings" tab, click "Remove Existing Library" to remove unwanted libraries.' },
      { type: 'content', text: 'This can be helpful for tweaked apps that have unnecessary tweaks, most notably in tweaked versions of YouTube, Spotify, or social media apps, which can cause issues.' },
      { type: 'image', src: 'images/dylib/removing.png', alt: '' }
    ]
  ];
  

  const vpn = [
    [
      { type: 'title', text: 'How to?' },
      { type: 'content', text: 'First, you will need to find your DNS address for NextDNS. You can find it here (yours will be different than mine).' },
      { type: 'content', text: 'Next, you will need to take the address and change your VPN from automatic to manual (This is different for every VPN).' },
      { type: 'image', src: 'images/vpn/1.png', alt: '' },
    ],
    [
      { type: 'title', text: 'Connecting NextDNS with VPN' },
      { type: 'content', text: 'WireGuard guide thanks to u/Dropped_Angel.' },
      { type: 'content', text: 'This should be somewhat universal, depending on your VPN’s configurability.' },
      { type: 'content', text: 'Set up a WireGuard profile and configure the WireGuard app.' },
      { type: 'link', href: 'https://itunes.apple.com/us/app/wireguard/id1441195209?ls=1&mt=8', text: 'WireGuard' },
      { type: 'content', text: 'Download and set up the .conf file for WireGuard using AirVPN’s configuration generator (PAID).' },
      { type: 'link', href: 'https://airvpn.org/generator/', text: 'AirVPN' },
      { type: 'image', src: 'images/vpn/2.png', alt: '' },
    ],
    [
      { type: 'title', text: 'Step 2' },
      { type: 'content', text: 'Proceed with setting up NextDNS as WireGuard’s DNS.' },
      { type: 'content', text: 'Use your NextDNS custom DNS and copy the first one for both Part 1 and Part 2.' },
      { type: 'content', text: 'Copy and paste the first line of Part 1 and Part 2, separated by a comma.' },
      { type: 'content', text: 'Repeat the steps for every configuration, both future and current.' },
      { type: 'content', text: 'SAVE.' },
      { type: 'image', src: 'images/vpn/3.png', alt: '' },
      { type: 'image', src: 'images/vpn/4.png', alt: '' },
    ],
  ];
  

  const tips = [
    [
      { type: 'title', text: 'Tips to Avoid Getting Blacklisted' },
      { type: 'content', text: 'Do NOT use any free VPN with this method. If you have a paid VPN, configure it to work with your DNS. You need to create your own VPN if you want to use a free VPN (see the guide below).' },
      { type: 'link', href: 'vpn-guide.html', text: 'VPN Guide' },
      { type: 'content', text: "Do NOT turn off DNS, even for updating iOS. If you're unable to update iOS, you need to set up your own DNS." },
      { type: 'link', href: 'best-guide.html', text: 'DNS Guide' },
      { type: 'content', text: 'If you add multiple ad blockers to the list in NextDNS, you will likely hit the monthly quota of 300k queries.' },
      { type: 'content', text: 'So use only one ad blocker (AdGuard DNS Filter is recommended).' },
      { type: 'content', text: 'You will usually receive a warning email from NextDNS about your limit; keep an eye out for that and switch to your backup for the rest of the month.' },
      { type: 'content', text: "Your backup could be Khoindvn's DNS (shift back to NextDNS once you hit your limit)." },
      { type: 'link', href: 'https://khoindvn.io.vn/document/DNS/khoindns.mobileconfig?sign=1', text: 'Khoindvn DNS' },
      { type: 'content', text: 'You can manually check your last 30 days of usage to get an estimate in the Analytics Tab.' },
      { type: 'image', src: 'images/usage.jpg', alt: 'usage' },
    ]
  ];
  

  const freevpn = [
    [
      { type: 'title', text: 'Introduction' },
      { type: 'content', text: 'The most frequently asked question is: can you use a VPN? The answer is yes, but it takes some work to get it to function without revoking all your apps. This is because VPNs have a built-in DNS they use to filter internet traffic, and it’s possible to adjust the built-in VPN DNS to work with NextDNS or another DNS provider.' },
    ],
    [
      { type: 'title', text: 'Instructions' },
      { type: 'content', text: 'This guide is for Windows; you need a Windows PC or laptop.' },
      { type: 'content', text: 'Read the instructions carefully before watching the guide.' },
      { type: 'content', text: 'Warning: This should be done before installing Esign because your DNS will not work while linking your IP.' },
      { type: 'content', text: 'Once your VPN is set up, you cannot change the location, so choose your server location carefully.' },
      { type: 'content', text: 'You can have a maximum of 2 VPN connections at the same time.' },
      { type: 'content', text: 'A credit or debit card is required for the initial setup (don’t worry, you won’t be charged).' },
    ],
    [
      { type: 'title', text: 'Video Guide' },
      { type: 'content', text: 'First, read the following instructions to learn what settings you need to change. Then, follow this tutorial (thanks to u/Rockybroo_YT for providing the link).' },
      { type: 'link', href: 'https://www.youtube.com/watch?v=1dIy0rZ_GKs&t=241s', text: 'Watch the Tutorial', newTab: true },
      { type: 'content', text: "At 0:45, during sign-up, you'll need to select a 'Home Region'." },
      { type: 'content', text: "Choose this location carefully, as it will be your VPN location, and you won’t be able to change it later." },
      { type: 'content', text: "So avoid selecting your country if you want to access sites that are blocked there." },
      { type: 'content', text: "At the 03:38 mark in the video, replace Cloudflare's 1.1.1.1 with your NextDNS addresses." },
      { type: 'content', text: "To find the address, open NextDNS on your phone where the profile is installed." },
      { type: 'content', text: "Scroll down a bit, and you’ll see the addresses under the heading 'DNS Servers'." },
      { type: 'content', text: "Add both of these addresses in the 'Primary' and 'Secondary DNS Server' fields." },
      { type: 'content', text: "When it’s time to install OpenVPN on your PC, instead download and install OpenVPN from the App Store." },
      { type: 'content', text: "Add the URL and sign in." },
      { type: 'content', text: "You should now be able to connect to the VPN." },
      { type: 'content', text: "Connect to the VPN and open NextDNS." },
      { type: 'content', text: "It should say, 'This device is using NextDNS with no profile'." },
      { type: 'content', text: "Scroll down and look for 'Link IP'." },
      { type: 'content', text: "Click the button, refresh the page, and it should now say 'All good!'." },
      { type: 'content', text: "You NEED to be connected to the VPN when linking your IP, and don't click the button again when you are disconnected from the VPN." },
      { type: 'content', text: "Enjoy!" },
      { type: 'image', src: 'images/vpn/region.png', alt: 'region' },
      { type: 'image', src: 'images/vpn/dns.png', alt: '' },
      { type: 'image', src: 'images/vpn/err.jpg', alt: '' },
      { type: 'image', src: 'images/vpn/ip.png', alt: '' },
    ]
  ];
  


// { type: 'title', text: '' },

//     { type: 'content', text: '' },

// { type: 'link', href: '', text: '' },

// { type: 'image', src: 'images/best-guide/', alt: '' },
