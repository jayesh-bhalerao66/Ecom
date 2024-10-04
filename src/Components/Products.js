const products = [
  {
    id: 1,
    image: "images/mob1.webp",
    productName: "realme 12 5G (Woodland Green, 128 GB)  (6 GB RAM)",
    price: 16999,
    desc: `6 GB RAM | 128 GB ROM | Expandable Upto 2 TB
        17.07 cm (6.72 inch) Full HD+ Display
        108MP + 2MP | 8MP Front Camera
        5000 mAh Battery
        Dimensity 6100+ Processor`,
    type: "mobile",
  },
  {
    id: 2,
    image: "images/mob2.webp",
    productName:
      "POCO M6 5G - Locked with Airtel Prepaid (Orion Blue, 128 GB)  (4 GB RAM)",
    price: 8799,
    desc: `4 GB RAM | 128 GB ROM | Expandable Upto 1 TB
    17.12 cm (6.74 inch) HD+ Display
    50MP Rear Camera
    5000 mAh Battery
    Mediatek Dimensity 6100+ Processor`,
    type: "mobile",
  },
  {
    id: 3,
    image: "images/mob3.webp",
    productName:
      "SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 512 GB)  (12 GB RAM)",
    price: 139999,
    desc: `12 GB RAM | 512 GB ROM
    17.27 cm (6.8 inch) Quad HD+ Display
    200MP + 50MP + 12MP + 10MP | 12MP Front Camera
    5000 mAh Battery
    Snapdragon 8 Gen 3 Processor`,
    type: "mobile",
  },
  {
    id: 4,
    image: "images/mob4.jpg",
    productName:
      "OnePlus 11 5G",
    price: 56999,
    desc: `OnePlus 11 5G (Titan Black, 8GB RAM, 128GB Storage)
    Camera: 50MP Main Camera with Sony IMX890 (OIS supported), 48MP Ultrawide Camera with Sony IMX581 (FOV: 115 degree) and 32MP Telephoto lens with Sony IMX709 (2X Optical Zoom); 16MP Front (Selfie) Camera with EIS support`,
    type: "mobile",
  },
  {
    id: 5,
    image: "images/mob5.jpg",
    productName:
      "SAMSUNG Galaxy M34 5G (Titanium Gray, 512 GB)  (12 GB RAM)",
    price: 17999,
    desc: `12 GB RAM | 512 GB ROM
    17.27 cm (6.8 inch) Quad HD+ Display
    200MP + 50MP + 12MP + 10MP | 12MP Front Camera
    5000 mAh Battery
    Snapdragon 8 Gen 3 Processor`,
    type: "mobile",
  },
  {
    id: 6,
    image: "images/1.jpg",
    productName:
      "Tecno Spark 9",
    price: 7999,
    desc: `Tecno Spark 9 (Sky Mirror, 4GB RAM,64GB Storage) | 7GB Expandable RAM | Helio G37 Gaming Processor
    Upto 7GB larger RAM (4GB LPDDR4x + 3GB Virtual RAM) with the help of memory fusion technology | 37% improvement in apps switching | 64GB eMCP ROM | No support for Africa's frequency bands | Warranty In India Only`,
    type: "mobile",
  },
  {
    id: 7,
    image: "images/2.webp",
    productName:
      "Redmi Note 12 5G",
    price: 17999,
    desc: `Redmi Note 12 5G Matte Black 4GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera
    Display: Super AMOLED (1080x2400) Display with 120Hz Refresh rate; 1200nits peak brightness; 240Hz Touch sampling rate`,
    type: "mobile",
  },
  {
    id: 8,
    image: "images/3.jpg",
    productName:
      "Redmi K50i 5G",
    price: 26999,
    desc: `Redmi K50i 5G (Phantom Blue, 8GB RAM, 256GB Storage)| Flagship Mediatek Dimensity 8100 Processor | 144Hz Liquid FFS Display
    The 5G enabled Dimensity 8100 SoC built on TSMC’s advanced 5nm process technology has 25% better CPU power efficiency over previous Dimensity chips. Combined with LPDDR5 RAM and UFS 3.1 storage the device elevates the gaming experience to new heights. The device can maintain sustained peak performance owing to the better heat dissipation via a large vapor chamber cooling system with 7 layers of graphite`,
    type: "mobile",
  },
  {
    id: 9,
    image: "images/headset1.webp",
    productName: "OnePlus Bullets Wireless Z2 ",
    price: 1798,
    desc: `With Mic:Yes
    Bluetooth version: 5
    Battery life: 20 Hrs | Charging time: 10 min`,
    type: "headset",
  },
  {
    id: 10,
    image: "images/headset2.webp",
    productName: "realme Techlife Buds T100",
    price: 1399,
    desc: `With Mic:Yes
    Bluetooth version: 5.3
    Wireless range: 10 m
    Battery life: 28 hrs | Charging time: 1.5 hrs
    Fast charging - 10min charge for up to 120min playback`,
    type: "headset",
  },
  {
    id: 11,
    image: "images/head3.jpg",
    productName: "boAt Airdopes",
    price: 1299,
    desc: `boAt Airdopes 121v2 in-Ear True Wireless Earbuds with Upto 14 Hours Playback, 8MM Drivers, Battery Indicators, Lightweight Earbuds & Multifunction Controls (Active Black, with Mic)
    Playback- Airdopes 121v2 offers a nonstop playback of up to 3.5H with each charge and an additional 10.5H playtime with the included charging case,Lightweight- With a dual tone finish on a lightweight ergonomic design weighing just around 4g per earbud`,
    type: "headset",
  },
  {
    id: 12,
    image: "images/head4.jpg",
    productName: "boAt Airdopes 141",
    price: 1499,
    desc: `boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with mic, 42H Playtime, Beast Mode(Low Latency Upto 80ms) for Gaming, ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance (Bold Black)
    Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours including the 6 hours nonstop playtime for earbuds.`,
    type: "headset",
  },
  {
    id: 13,
    image: "images/head5.jpg",
    productName: "Jabra Elite 3",
    price: 3999,
    desc: `Jabra Elite 3 in Ear Bluetooth Truly Wireless in Ear Earbuds, Noise Isolating with mic for Clear Calls, Rich Bass, Customizable Sound, Mono Mode - Dark Grey
    Unique sound experience: The ergonomically designed wireless earphones offer class-leading customization options, high-quality sound with powerful bass and a battery life of up to 28 hours`,
    type: "headset",
  },
  {
    id: 14,
    image: "images/head6.jpg",
    productName: "pTron Bassbuds",
    price: 949,
    desc: `pTron Bassbuds Jade Truly Wireless in Ear Earbuds with 40ms Gaming Low Latency, HD Stereo Calls, 40Hrs Playtime, 1-Step Pairing Bluetooth Headphone, Fast TypeC Charging & IPX4 Waterproof (Black)
    Touch TSA on the right earbud for 3 seconds to change modes - Game & Music. Note: Music Mode will be On by Default`,
    type: "headset",
  },
  {
    id: 15,
    image: "images/head7.jpg",
    productName: "JBL Wave 200",
    price: 2499,
    desc: `JBL Wave 200 True Wireless In Ear Earbuds with Mic, 20 Hours Playtime, Deep Bass Sound, Dual Connect Technology, Quick Charge, Comfort Fit Ergonomic Design, Voice Assistant Support for Mobiles (Black)
    JBL DEEP BASS SOUND: Feel the sound with the Deep Bass powered by the 8mm Dynamic drivers and add fun to your routine.`,
    type: "headset",
  },
  {
    id: 16,
    image: "images/laptop1.webp",
    productName: "Apple 2020 Macbook Air Apple M1",
    price: 82990,
    desc: `Stylish & Portable Thin and Light Laptop
    13.3 inch Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology)`,
    type: "laptop",
  },
  {
    id: 17,
    image: "images/laptop2.webp",
    productName: "HP 15s Intel Core i3 12th Gen 1215U ",
    price: 37527,
    desc: `Stylish & Portable Thin and Light Laptop
    15.6 Inch Full HD, Micro Edge, Anti-Glare, UWVA, Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC`,
    type: "laptop",
  },
  {
    id: 18,
    image: "images/lap3.jpg",
    productName: "ASUS VivoBook 15",
    price: 25990,
    desc: `ASUS VivoBook 15 (2021), 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020, Thin and Light Laptop (4GB RAM/256GB SSD/Integrated Graphics/Windows 11 Home/Transparent Silver/1.8 Kg), X515MA-BR011W
    Processor: Intel Celeron N4020, 1.1 GHz base speed, Up to 2.8 GHz Turbo Speed, 2 cores, 2 Threads, 4MB Cache`,
    type: "laptop",
  },
  {
    id: 19,
    image: "images/lap4.jpg",
    productName: "Acer Extensa 15",
    price: 25990,
    desc: `Acer Extensa 15 Thin & Light Intel Processor Pentium Silver N5030 15.6 inches ( 39 cm ) Business Laptop (4GB RAM/256 GB SSD/Windows 11 Home/Black/1.9 Kg, EX215-31)
    Fast and Easy Computing : Perfect budget laptop under 30000 for students and working professionals that helps get jobs done quickly and efficiently thanks to the Intel Pentium Silver N5030 processor.`,
    type: "laptop",
  },
  {
    id: 20,
    image: "images/lap5.jpg",
    productName: "Microsoft Surface GO",
    price: 59999,
    desc: `Microsoft Surface GO 3 8VA-00013 10.5' (26.67 cms) Laptop (Intel Pentium T6600 Processor/8GB/128GB SSD/Windows 11 Home), Platinum
    Processor: Intel Pentium T6600 Processor gives your daily tasks and apps an added boost`,
    type: "laptop",
  },
  {
    id: 21,
    image: "images/lap6.jpg",
    productName: "Infinix INBook X1",
    price: 22990,
    desc: `Infinix INBook X1 Neo Series Celeron Quad Core - (Intel, 4 GB/128 GB SSD/Windows 11 Home) XL22 Thin and Light Laptop (14 inch (35 cm) Cosmic Blue, 1.24 kg)
    PROCESSOR : Intel Celeron Quad Core N5100 (Base Frequency 1.1 GHz, Max Turbo Frequency at 2.8 GHz)`,
    type: "laptop",
  },
  {
    id: 22,
    image: "images/lap7.jpg",
    productName: "AXL Laptop",
    price: 17990,
    desc: `AXL Laptop (Vayu Book) Newly Launched Thin & Light | 14.1 Inch HD Display (4GB/128GB SSD | 1920*1080 FHD IPS | HD Gemini Lake N4020 | Windows 11 Home | UHD Graphics 600 | Space Grey
    Windows 11 Home: that is web and mobile-friendly & Pre-Loaded with the latest Windows 11 Home.`,
    type: "laptop",
  },
  {
    id: 23,
    image: "images/lap8.jpg",
    productName: "Lenovo IdeaPad Slim",
    price: 26750,
    desc: `Lenovo IdeaPad Slim 3 Intel Celeron N4020 14 (35.36cm) HD Thin & Light Laptop (4GB/256GB SSD/Windows 10/Platinum Grey/1.5Kg), 81WH001NIN
    Free upgrade to Windows 11 when available* Disclaimer-*The Windows 11 upgrade will be delivered late 2021 into 2022. Specific timing varies by device. Certain features require specific hardware.`,
    type: "laptop",
  },
  {
    id: 24,
    image: "images/Watch1.jpg",
    productName: "Noise Pulse 2",
    price: 2999,
    desc: `Noise Pulse 2 Max Advanced Bluetooth Calling Smart Watch with 1.85'' TFT and 550 Nits Brightness, Smart DND, 10 Days Battery, 100 Sports Mode, Smartwatch for Men and Women - (Jade Green)
    Massive 1.85' display: See everyday data clearly under the brightest sun on the 1.85'' TFT LCD that sports 550 nits of brightness and the highest screen-to-body ratio.`,
    type: "Watch",
  },
  {
    id: 25,
    image: "images/Watch2.jpg",
    productName: "Fire-Boltt Phoenix",
    price: 1799,
    desc: `Fire-Boltt Phoenix Smart Watch with Bluetooth Calling 1.3,120+ Sports Modes, 240*240 PX High Res with SpO2, Heart Rate Monitoring & IP67 Rating
    Fire-Boltt is India' No 1 Wearable Watch Brand Q122 by IDC Worldwide quarterly wearable device tracker Q122.【Bluetooth Calling Watch】- Fire-Boltt Phoenix enables you to make and receive calls directly from your watch via the built-in speaker and microphone.`,
    type: "Watch",
  },
  {
    id: 26,
    image: "images/Watch3.jpg",
    productName: "Noise Pulse Go",
    price: 1799,
    desc: `Noise Pulse Go Buzz Bluetooth Calling Smart Watch, 1.69' Clear Display, 550Nits,150+ Watch face, Comfort Strap, Heart Rate, Steps & Sleep Tracker, IP68, 7 Days Battery(Rose Pink)
    This item Noise Pulse Go Buzz Bluetooth Calling Smart Watch, 1.69 Clear Display, 550Nits,150+ Watch face, Comfort Strap, Heart Rate, Steps & Sleep Tracker, IP68, 7 Days Battery(Rose Pink)`,
    type: "Watch",
  },
  {
    id: 27,
    image: "images/Watch4.jpg",
    productName: "Samsung Galaxy Watch4",
    price: 16780,
    desc: `Samsung Galaxy Watch4 LTE (4.4 cm, Black, Compatible with Android only)
    Only compatible with Android Smartphones (Runs on Wear OS Powered by Samsung)`,
    type: "Watch",
  },
  {
    id: 28,
    image: "images/Watch5.jpg",
    productName: "Samsung Galaxy Watch5",
    price: 29854,
    desc: `Samsung Galaxy Watch5 Bluetooth (44 mm, Graphite, Compatible with Android only)
    Sleep Tracking: Know your sleep with our new and improved sleep tracking technology. Plan your bedtime, detect snoring, understand and track your sleep.`,
    type: "Watch",
  },
  {
    id: 29,
    image: "images/Watch6.jpg",
    productName: "Apple Watch Ultra",
    price: 89899,
    desc: `Apple Watch Ultra [GPS + Cellular 49 mm] Smart Watch w/ Rugged Titanium Case & White Ocean Band. Fitness Tracker, Precision GPS, Action Button, Extra-Long BatteryLife, Brighter Retina Display
    WHY APPLE WATCH ULTRA — Rugged and capable, built to meet the demands of endurance athletes, outdoor adventurers and water sports enthusiasts — with a specialised strap for each. Up to 36 hours of battery life, plus all the Apple Watch features that help you stay healthy, safe and connected.`,
    type: "Watch",
  },
  {
    id: 30,
    image: "images/Watch7.jpg",
    productName: "imoo Watch Phone Z6",
    price: 20899,
    desc: `imoo Watch Phone Z6, 4G Kids Smart Watch with Dual Camera, Smart Watch for Kids with Video Phone Call, Kids GPS Tracker Smart Watch Phone with Real-time Locating, IPX8 Swimming Waterproof Phone(Green)
    8MP+5MP Flip Dual Cameras - With 8MP+5MP dual cameras: Parents can not only see their children's status but also the surroundings where their kids are during video calls, bringing more peace of mind! Kids can snap their adventure and the exciting moments in daily lives.`,
    type: "Watch",
  },
  {
    id: 31,
    image: "images/Watch8.jpg",
    productName: "Garmin Forerunner",
    price: 27990,
    desc: `Garmin Forerunner 245 Music, GPS Running Smartwatch with Music and Advanced Dynamics, Black
    Sync with music streaming services, such as spotify, to easily store and play your favourite songs right from your watch`,
    type: "Watch",
  },
  {
    id: 32,
    image: "images/tv1.jpg",
    productName: "Toshiba",
    price: 26299,
    desc: `Toshiba 108 cm (43 inches) Bezelless Series 4K Ultra HD Smart LED Google TV 43C350LP (Silver)
    Resolution : 4K Ultra HD (3840x2160) | Refresh Rate : 60 Hertz | ALLM VRR Supported | Bezel-less Design`,
    type: "tv",
  },
  {
    id: 33,
    image: "images/tv2.jpg",
    productName: "TCL",
    price: 17499,
    desc: `TCL 100 cm (40 inches) Full HD Certified Android R Smart LED TV 40S6505 (Black)
    Resolution: Full HD (1920 x 1080) | Refresh Rate: 60 Hertz.`,
    type: "tv",
  },
  {
    id: 34,
    image: "images/tv3.jpg",
    productName: "OnePlus ",
    price: 14999,
    desc: `OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black)
    Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz`,
    type: "tv",
  },
  {
    id: 35,
    image: "images/tv4.jpg",
    productName: "Redmi",
    price: 11999,
    desc: `Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black)
    Resolution: HD Ready (1366 x 768) | Refresh Rate: 60 hertz | 178 Degree wide viewing angle`,
    type: "tv",
  },
  {
    id: 36,
    image: "images/tv5.jpg",
    productName: "Samsung",
    price: 13299,
    desc: `Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)
    Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz`,
    type: "tv",
  },
  {
    id: 37,
    image: "images/tv6.jpg",
    productName: "Acer",
    price: 11499,
    desc: `Acer 80 cm (32 inches) I Series HD Ready Android Smart LED TV AR32AR2841HDFL (Black)
    Resolution : HD Ready (1366x768) | Refresh Rate : 60 Hertz | 178 Degree wide viewing angle`,
    type: "tv",
  },
  {
    id: 38,
    image: "images/tv7.jpg",
    productName: "OnePlus 108 cm",
    price: 28999,
    desc: `OnePlus 108 cm (43 inches) Y Series 4K Ultra HD Smart Android LED TV 43Y1S Pro (Black)
    Resolution : 4K Ultra HD (3840x2160) | Refresh Rate : 60 Hertz`,
    type: "tv",
  },
];
export default products;
