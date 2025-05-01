import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, MicOff, Send, Globe, X, MessageCircle, Volume2, Headphones, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

type SpeechRecognitionInstance = SpeechRecognition | null;

// Language responses
const languageResponses = {
      english: {
        mahabalipuram: `Ohhh Mahabs! My favorite beach temple town! 🌊
      You gotta see:
      - Shore Temple standing strong for 1300 years!
      - Five Rathas like stone LEGO
      - Arjuna's Penance - ancient Instagram wall!
      - Pancha Pandava Cave and Krishna's Butterball defy gravity
      - UNESCO World Heritage status since 1984
      - Ancient port city used by Pallavas for global trade`,
      
        madurai: `Madurai da! The city that never sleeps! 🛕
      It’s like walking inside a living temple!
      - Meenakshi Amman Temple: 33,000 sculptures and 14 towers, over 1000 years old!
      - Don't miss the golden lotus pond and evening aarti with live music
      - Streets are shaped like lotus petals 🌸
      - Eat Jigarthanda (only in Madurai!) & malligai poo (jasmine) fills the air
      - Check out Thirumalai Nayakkar Mahal & Gandhi Museum` ,
      
        ooty: `Ooty la? ☕ Best hill station everrr!
      - Ride the heritage Nilgiri toy train — Insta-worthy reels!
      - Emerald Lake's early morning mist is a dream
      - Botanical Garden has a 20-million-year-old fossil tree!
      - Don’t miss homemade chocolates 🍫 & eucalyptus oil
      - Rose Garden has 20,000+ varieties 🌹
      - Great spot for trekking, especially Doddabetta Peak` ,
      
        gangaikonda: `Yo! The Chola's flex temple! 👑
      - Gangaikonda Cholapuram: Built by Rajendra Chola to celebrate his northern conquests
      - Tower is shorter but broader than Thanjavur’s Brihadeeswarar Temple
      - Nandi statue is 8m tall and majestic
      - Underground granary and secret passages
      - Beautiful bronze sculptures and Chola inscriptions` ,

      kanyakumari: `Where the seas meet! 🌊🇮🇳
      - Southernmost tip of India where Bay of Bengal, Arabian Sea & Indian Ocean converge
      - Famous for sunrise & sunset views, especially on full moon days 🌅🌕
      - Vivekananda Rock Memorial – where Swami meditated 🧘
      - Thiruvalluvar Statue – 133-ft tribute to the Tamil poet-philosopher
      - Kanyakumari Amman Temple – a sacred Shakti Peeth of goddess Devi
      - Gandhi Mandapam – built at the spot where his ashes were kept before immersion
      - You can literally see 3 different sea colors blending into one! 🎨🌊`,
      
      rameswaram: `Island of devotion & legends! 🕉️🌊
      - One of the Char Dham pilgrimage sites in India
      - Home to Ramanathaswamy Temple – with India’s longest temple corridor 🚶‍♂️🛕
      - Linked to Ramayana – believed to be the place where Lord Rama built the bridge to Lanka
      - Dhanushkodi – a ghost town with surreal beach views & mythological significance
      - Sacred theerthams (wells) where pilgrims bathe for spiritual cleansing 💧
      - You can actually walk on the Pamban Bridge & see the train chugging through the sea! 🚂🌉`,
      
       thanjavur: `Cultural capital of Tamil Nadu! 🏛️🎨
        - Famous for the Brihadeeswarar Temple (Big Temple) – built by Raja Raja Chola I 🛕
        - UNESCO World Heritage Site & architectural marvel with a 216-ft vimana tower
        - Known for Tanjore paintings – vibrant, gold-foiled traditional art 🖼️✨
        - Saraswathi Mahal Library – one of Asia’s oldest libraries 📚
        - Hub of classical music, Bharatanatyam, and ancient Tamil learning 🎶💃
        - Temple shadow never falls on the ground at noon – engineering mystery! 🤯🧱`,


        
        airavatesvara: `OMG the musical temple! 🎵
      - Built by Rajaraja Chola II, shaped like a chariot pulled by horses
      - Pillars produce musical notes when tapped
      - UNESCO site part of the Great Living Chola Temples
      - Intricate carvings: dentistry tools, musical instruments & daily life
      - Mandapam built like a stage for dance performances` ,
      
        sittanavasal: `Hidden gem alert! 💎
      - Sittanavasal Cave: Jain monastery from 1st century BCE
      - 2000-year-old frescoes on ceiling painted with vegetable dyes
      - Lotus pond scene = India’s earliest known fresco art
      - Tamil Brahmi script inscriptions: ancient tweets!
      - Rock beds of monks & meditation chambers` ,
      
        greetings: `Yo! 🙌 Tamil Nadu travel expert here!`,
      
        food: `*Hungry?* 😋 Try:
      - Chettinad chicken (spicy!)
      - Filter coffee foam like clouds
      - Banana leaf meals (use hands!)` ,
      
        thanks: `Ayy, no biggie! 😊
      Wanna know a secret spot?` ,
      
        goodbye: `Catch you later! 👋
      (PS: Summer = mango hunting!)` ,
      
        default: `Hmm interesting! 🤔
      You into:
      1) Temple hopping
      2) Food adventures
      3) Hidden nature spots?`
      },
      
      tamil: {
        mahabalipuram: `ஆஹா மகாபலிபுரம்! என் பிடித்த கடல் கோயில் ஊர்! 🌊
      பார்க்க வேண்டியது:
      - 1300 ஆண்டுகளாக நிற்கும் ஷோர் கோவில்
      - ஐந்து ரதங்கள் - கல் லெகோ போலவே
      - அருச்சுனனின் தவம் - பண்டைய இன்ஸ்டாகிராம் சுவர்!
      - பாஞ்ச பாண்டவர் மலைக்குகை மற்றும் கிருஷ்ணனின் வெண்ணெய்க்கண்டம்
      - 1984இல் யுனெஸ்கோ பாரம்பரிய தளமாக அறிவிக்கப்பட்டது
      - பல்லவர்கள் காலத்தில் உலக வர்த்தகத்திற்கான முக்கிய துறைமுகம்` ,
      
        madurai: `மதுரை டா! தூங்காத நகரம்! 🛕
      பக்தியும் பசுமையும் கலந்த நகரம்!
      - மீனாட்சி அம்மன் கோவில்: 33,000 சிற்பங்கள் மற்றும் 14 கோபுரங்கள்
      - சன்னிதியில் 황ள் பொற்குளம், சாயங்கால ஆரத்தி இசையுடன்
      - நகரம் முழுவதும் மல்லிகை பூ வாசம்
      - ஜிகர்தண்டா என்ற இளநீர் மோர் மாதிரி பானம்!
      - திருமலை நாயக்கர் மஹால், காந்தி அருங்காட்சியகம் போக தவறாதீர்கள்` ,
      
        ooty: `ஊட்டி லா? ☕ மலைக்கோட்டையை விட அழகு!
      - நீலகிரி டாய் ட்ரெயின்: யுனெஸ்கோ பாரம்பரியமாகும்!
      - எமரால்ட் ஏரியின் காலை மூடுபனி கனவுலகத்தை போல
      - 2 கோடி வருட பழமையான மர fossils பாருங்கள்
      - சொக்கோலேட், யூகலிப்டஸ் எண்ணெய் வாங்குங்க
      - ரோஜா தோட்டத்தில் 20,000 வகைகள்!
      - டொடபெட்டா சிகரம் வரை பயணிக்கலாம்` ,
      
        gangaikonda: `அடே! சோழர்களின் மகத்தான கோவில்! 👑
      - ராஜேந்திர சோழன் வடக்குத் தேசங்களை வென்று கட்டினார்
      - தஞ்சாவூரில் உள்ள பெரிய கோவிலைவிட அகலம் அதிகம்
      - 8 மீ உயரமுடைய நந்தி சிலை
      - பூமிக்கீழ் தானியக் கொட்டிகள், ரகசிய வழிகள்
      - அழகான வெண்கல சிற்பங்கள் மற்றும் சோழர்களின் கல்வெட்டுகள்` ,
      
        airavatesvara: `இசை கூடிக்கோவில்! 🎵
      - ராஜராஜ சோழன் II கட்டினார்
      - தேர் வடிவ கட்டிடக்கலை, குதிரைகள் இழுக்கும் போல
      - தூண்களில் இசை ஒலி வரும்!
      - யுனெஸ்கோ பாரம்பரியத்தில்
      - நடன மேடை மாதிரியான மண்டபம்
      - பழைய வாழ்க்கை, இசைக் கருவிகள் செதுக்கப்பட்டுள்ளன` ,

          kanyakumari: `கடல்கள் சங்கமிக்கும் இடம்! 🌊🇮🇳
      - இந்தியாவின் தெற்குத் தூண் – வங்காள விரிகுடா, அரபிக்கடல், இந்தியப் பெருங்கடல் சந்திக்கிறது
      - பௌர்ணமி நாட்களில் அற்புதமான சூரிய உதயம் மற்றும் அஸ்தமனம் 🌅🌕
      - விவேகானந்தர் பாறை நினைவிடம் – தியானம் செய்த புனித இடம் 🧘
      - திருவள்ளுவர் சிலை – 133 அடி உயரம் கொண்ட தமிழறிஞர் நினைவாக
      - கன்னியாகுமரி அம்மன் கோவில் – சக்தி பீடமாகும்
      - காந்தி மண்டபம் – அஸ்திகள் வைக்கப்பட்ட இடம்
      - மூன்று கடல்களின் வண்ணங்களும் ஒரு இடத்தில்! 🎨🌊`,

          rameswaram: `பக்தியும் புராணங்களும் சேர்ந்த தீவு! 🕉️🌊
      - இந்தியாவின் சார் தாம் யாத்திரைகளில் ஒன்று
      - ராமநாதஸ்வாமி கோவில் – இந்தியாவின் மிக நீளமான கோவில் மதில் மார்பு 🚶‍♂️🛕
      - இராமாயணத்துடன் தொடர்புடையது – இராமர் இலங்கைக்கு பாலம் கட்டிய இடம்
      - தனுஷ்கோடி – பாழடைந்த நகரம் & கடற்கரை காட்சி
      - 22 தீர்த்தங்கள் – புனித நீராடுவதற்கான கிணறுகள் 💧
      - பாம்பன் பாலம் – கடலைக் கடக்கும் ரயிலின் அற்புதக் காட்சி 🚂🌉`,

          thanjavur: `தமிழ்நாட்டின் கலாச்சார தலைநகர்! 🏛️🎨
      - பெரிய கோவில் – இராஜராஜ சோழன் கட்டியது 🛕
      - யுனெஸ்கோ பாரம்பரிய மரபிடம் – 216 அடி உயர விமானம்
      - தஞ்சாவூர் ஓவியங்கள் – தங்கப் பதக்கம் கொண்ட பாரம்பரிய கலை 🖼️✨
      - சரஸ்வதி மஹால் நூலகம் – பழமையான பல நூல்கள் உள்ளன 📚
      - கர்நாடக இசை, பரதநாட்டியம் மற்றும் தமிழ் இலக்கிய மையம் 🎶💃
      - நண்பகல் வேளையில் கோவிலின் நிழல் தரையில் விழாது – அற்புத கட்டிடக்கலை! 🤯🧱`,


          
        sittanavasal: `மறைந்த சொர்க்கம்! 💎
      - ஜைனர்கள் வசித்த குகைகள் — கிமு 1ஆம் நூற்றாண்டு
      - 2000 வருட பழமையான சுவரோவியங்கள் — இயற்கை வண்ணங்களால்
      - தாமரைக் குளம் ஓவியம் இந்தியாவின் முதன்மையான ஓவியம்
      - தமிழ் பிராமி எழுத்துக்கள் = பண்டைய ட்வீட்டுகள்!
      - தியானம் செய்ய மெய்யான இடம் — பாறை கட்டிடங்கள்` ,
      
        greetings: `வணக்கம்! 🙌 தமிழ்நாடு பயண நிபுணர் இங்கே!` ,
      
        food: `*பசிக்கிறதா?* 😋 முயற்சிக்கவும்:
      - சேட்டிநாடு சிக்கன் (மிகவும் காரம்!)
      - மேகங்கள் போன்ற நுரை கொண்ட பால்காபி
      - வாழை இலை சிற்றுண்டிகள் (கையால் சாப்பிட வேண்டியது!)` ,
      
        thanks: `அடே, பரவாயில்லை! 😊
      ரகசிய இடம் தெரியுமா?` ,
      
        goodbye: `பிறகு சந்திப்போம்! 👋
      (கோடையில் மாம்பழ வேட்டை!)` ,
      
        default: `சுவாரஸ்யமா! 🤔
      உங்களுக்கு:
      1) கோவில் சுற்றுலா
      2) உணவுப் பயணம்
      3) இயற்கை ரகசியங்கள் பிடிக்குமா?`
      },
      
      hindi: {
        mahabalipuram: `अरे वाह! महाबलीपुरम! मेरा पसंदीदा समुद्र तट मंदिर शहर! 🌊
      देखने लायक:
      - 1300 साल से अडिग शोर मंदिर
      - पांच रथ - जैसे पत्थर के LEGO
      - अर्जुन की तपस्या - प्राचीन इंस्टाग्राम वॉल!
      - कृष्ण का मक्खन पत्थर और पांडव गुफाएं
      - 1984 से UNESCO वर्ल्ड हेरिटेज साइट
      - प्राचीन पल्लव व्यापारिक बंदरगाह` ,

          rameswaram: `भक्ति और किंवदंतियों का द्वीप! 🕉️🌊
      - भारत के चार धामों में से एक पवित्र स्थल
      - रामनाथस्वामी मंदिर – भारत की सबसे लंबी मंदिर गलियारा 🚶‍♂️🛕
      - रामायण से जुड़ा – जहाँ भगवान राम ने लंका तक पुल बनाया
      - धनुषकोडी – रहस्यमयी समुद्री नगर और बीच व्यू वाला स्थल
      - 22 पवित्र कुएँ (तीर्थ) – आध्यात्मिक स्नान के लिए 💧
      - पंबन ब्रिज – समुद्र के ऊपर चलती ट्रेन का अद्भुत नज़ारा 🚂🌉`,

          thanjavur: `तमिलनाडु की सांस्कृतिक राजधानी! 🏛️🎨
      - बृहदीश्वर मंदिर – राजा राजा चोल द्वारा निर्मित 🛕
      - यूनेस्को विश्व धरोहर – 216 फीट ऊँचा विमाना
      - तंजावुर पेंटिंग – सोने की परत वाली पारंपरिक कला 🖼️✨
      - सरस्वती महल पुस्तकालय – दुर्लभ पांडुलिपियों का संग्रह 📚
      - कर्नाटिक संगीत, भरतनाट्यम और तमिल साहित्य का केंद्र 🎶💃
      - दोपहर में मंदिर की छाया जमीन पर नहीं पड़ती – अद्भुत वास्तुशिल्प! 🤯🧱`,



        kanyakumari: `जहाँ मिलते हैं तीन समुद्र! 🌊🇮🇳
      - भारत का सबसे दक्षिणी सिरा – बंगाल की खाड़ी, अरब सागर और हिंद महासागर का संगम
      - सूर्योदय और सूर्यास्त के शानदार दृश्य, खासकर पूर्णिमा पर 🌅🌕
      - विवेकानंद शिला स्मारक – जहाँ स्वामी विवेकानंद ने ध्यान किया 🧘
      - तिरुवल्लुवर प्रतिमा – 133 फीट ऊँची तमिल कवि को समर्पित मूर्ति
      - कन्याकुमारी अम्मन मंदिर – एक शक्तिपीठ, देवी को समर्पित
      - गांधी मंडपम – जहाँ गांधी जी की अस्थियाँ रखी गई थीं
      - यहाँ आप तीन समुद्रों के रंग अलग-अलग देख सकते हैं! 🎨🌊`,

        
      
        madurai: `मदुरै! कभी न सोने वाला शहर! 🛕
      यह शहर ही एक मंदिर जैसा है!
      - मीनाक्षी अम्मन मंदिर: 33,000 मूर्तियाँ, 14 गोपुरम, 1000+ साल पुराना
      - सुनहरी कमल कुंड और शाम की आरती संगीत के साथ
      - शहर की सड़कों का आकार कमल के फूल जैसा
      - जिगरथंडा पेय (मदुरै स्पेशल!) और मोगरा फूल की खुशबू
      - थिरुमलाई नायक महल और गांधी संग्रहालय ज़रूर जाएँ` ,
      
        ooty: `ऊटी? ☕ बेस्ट हिल स्टेशन!
      - नीलगिरि टॉय ट्रेन में Insta Reels बनाओ!
      - एमराल्ड झील की सुबह की धुंध
      - बोटैनिकल गार्डन में 2 करोड़ साल पुराना पेड़
      - चॉकलेट और युकलिप्टस ऑयल का बाजार
      - रोज गार्डन में 20,000+ किस्में!
      - डोडाबेट्टा पीक पर ट्रैकिंग मत भूलना` ,
      
        gangaikonda: `वाह! चोल साम्राज्य का गौरव! 👑
      - राजेंद्र चोल द्वारा गंगा विजय के उपलक्ष्य में निर्मित
      - तंजावुर मंदिर से चौड़ा लेकिन छोटा टावर
      - 8 मीटर ऊँचा नंदी, प्रभावशाली
      - भूमिगत अनाज गोदाम और रहस्यमय सुरंगें
      - चोल काल की कांस्य मूर्तियाँ और शिलालेख` ,
      
        airavatesvara: `संगीतमय मंदिर! 🎵
      - राजा राजा चोल II द्वारा निर्मित
      - रथ के आकार की वास्तुकला, घोड़ों द्वारा खींचा गया जैसा
      - खंभों से निकलती है संगीत की ध्वनि
      - UNESCO की महान जीवित चोल मंदिरों में शामिल
      - नृत्य मंच के समान मंडपम
      - नक्काशियों में जीवन, संगीत और चिकित्सा के दृश्य` ,
      
        sittanavasal: `छुपा हुआ रत्न! 💎
      - पहली शताब्दी ईसा पूर्व की जैन गुफा
      - 2000 साल पुराने भित्ति चित्र, प्राकृतिक रंगों से
      - भारत की पहली 3D कला — कमल ताल की छवि
      - तमिल ब्राह्मी लिपि: पुराने समय की ट्वीट्स!
      - ध्यान के लिए पत्थरों में बनी शैयाएँ` ,
      
        greetings: `नमस्ते! 🙌 तमिलनाडु यात्रा गाइड सेवा में!` ,
      
        food: `*भूख लगी है?* 😋 ट्राई करें:
      - चेट्टीनाड चिकन (बहुत मसालेदार!)
      - झागदार फिल्टर कॉफी
      - केले के पत्ते पर भोजन (हाथ से खाएँ!)` ,
      
        thanks: `अरे धन्यवाद की जरूरत नहीं! 😊
      एक गुप्त जगह जानना चाहेंगे?` ,
      
        goodbye: `फिर मिलेंगे! 👋
      (गर्मी = आम की खोज!)` ,
      
        default: `बिलकुल दिलचस्प! 🤔
      आपको क्या पसंद है:
      1) मंदिर यात्रा
      2) भोजन रोमांच
      3) छुपी हुई प्राकृतिक जगहें?`
      }
  
};

const YunaAIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState(localStorage.getItem('yunaAIKey') || '');
  const [showApiKeyInput, setShowApiKeyInput] = useState(!localStorage.getItem('yunaAIKey'));
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const recognitionRef = useRef<SpeechRecognitionInstance>(null);
  
  const [messages, setMessages] = useState<{type: 'user' | 'assistant', content: string}[]>([
    {type: 'assistant', content: 'Vanakkam! I\'m Yuna, your Tamil Nadu travel assistant. How can I help you today?'}
  ]);
  
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const languages = [
    { code: 'english', name: 'English' },
    { code: 'tamil', name: 'தமிழ் (Tamil)' },
    { code: 'hindi', name: 'हिन्दी (Hindi)' }
  ];
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  useEffect(() => {
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognitionAPI) {
      setVoiceSupported(true);
      recognitionRef.current = new SpeechRecognitionAPI();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      
      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setTimeout(() => {
          handleSendMessage(transcript);
        }, 500);
      };
      
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
      
      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
        toast({
          title: "Voice Recognition Error",
          description: `Error: ${event.error}. Please try again.`,
          variant: "destructive",
        });
      };
    }
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const toggleAssistant = () => {
    setIsOpen(!isOpen);
  };

  const saveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('yunaAIKey', apiKey);
      setShowApiKeyInput(false);
      toast({
        title: "API Key Saved",
        description: "Your Yuna AI assistant is now ready to use.",
      });
    } else {
      toast({
        title: "API Key Required",
        description: "Please enter a valid API key to continue.",
        variant: "destructive",
      });
    }
  };

  const resetApiKey = () => {
    localStorage.removeItem('yunaAIKey');
    setApiKey('');
    setShowApiKeyInput(true);
  };
  
  const startListening = () => {
    if (!voiceSupported) {
      toast({
        title: "Voice Recognition Not Supported",
        description: "Your browser doesn't support voice recognition.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      if (recognitionRef.current) {
        recognitionRef.current.start();
        setIsListening(true);
      }
    } catch (error) {
      console.error('Failed to start voice recognition:', error);
      setIsListening(false);
    }
  };
  
  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };
  
  const speakText = (text: string) => {
    if (!window.speechSynthesis) {
      toast({
        title: "Text-to-Speech Not Supported",
        description: "Your browser doesn't support text-to-speech.",
        variant: "destructive",
      });
      return;
    }
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    switch (selectedLanguage) {
      case 'tamil':
        utterance.lang = 'ta-IN';
        break;
      case 'hindi':
        utterance.lang = 'hi-IN';
        break;
      default:
        utterance.lang = 'en-US';
    }
    
    setIsSpeaking(true);
    
    utterance.onend = () => {
      setIsSpeaking(false);
    };
    
    utterance.onerror = () => {
      setIsSpeaking(false);
      toast({
        title: "Text-to-Speech Error",
        description: "There was an error playing the speech.",
        variant: "destructive",
      });
    };
    
    window.speechSynthesis.speak(utterance);
  };

  const handleSendMessage = async (manualText?: string) => {
    const messageText = manualText || inputValue;
    if (messageText.trim() === '') return;
    
    if (!apiKey && !showApiKeyInput) {
      setShowApiKeyInput(true);
      toast({
        title: "API Key Required",
        description: "Please set up your API key to use Yuna AI.",
        variant: "destructive",
      });
      return;
    }
    
    const userMessage = messageText;
    setMessages(prev => [...prev, {type: 'user', content: userMessage}]);
    setInputValue('');
    setLoading(true);
    
    try {
      setTimeout(() => {
        const langResponses = languageResponses[selectedLanguage as keyof typeof languageResponses];
        let response = '';
        
        if (/mahabalipuram|mamallapuram/i.test(userMessage)) {
          response = langResponses.mahabalipuram;
        }
        else if (/madurai/i.test(userMessage)) {
          response = langResponses.madurai;
        }
        else if (/thanjavur|brihadeeswarar/i.test(userMessage)) {
          response = langResponses.thanjavur;
        }
        else if (/rameswaram|ramanathaswamy/i.test(userMessage)) {
          response = langResponses.rameswaram;
        }
        else if (/ooty|udhagamandalam/i.test(userMessage)) {
          response = langResponses.ooty;
        }
        else if (/kanyakumari/i.test(userMessage)) {
          response = langResponses.kanyakumari;
        }
        else if (/gangaikonda|cholapuram/i.test(userMessage)) {
          response = langResponses.gangaikonda;
        }
        else if (/airavatesvara|darasuram/i.test(userMessage)) {
          response = langResponses.airavatesvara;
        }
        else if (/sittanavasal|pudukottai/i.test(userMessage)) {
          response = langResponses.sittanavasal;
        }
        else if (/railway|train|nilgiri/i.test(userMessage)) {
          response = langResponses.nilgiri;
        }
        else if (/food|cuisine|eat|hungry|snack|restaurant/i.test(userMessage)) {
          response = langResponses.food;
        }
        else if (/hi|hello|hey|namaste|vanakkam/i.test(userMessage)) {
          response = "Hey there! 👋 So glad you're here! Ready to explore Tamil Nadu?";
        }
        else if (/how are you|what's up|sup|how's it going/i.test(userMessage)) {
          response = "I'm vibing high 😄 Just chilling and ready to help you explore Tamil Nadu!";
        }
        else if (/thank|thanks|nandri/i.test(userMessage)) {
          response = "You're very welcome! 🌟 Let me know if you need anything else!";
        }
        else if (/bye|goodbye|see you|poitu varen/i.test(userMessage)) {
          response = "Catch you later, explorer! 👋 Come back anytime!";
        }
        else if (/joke|funny|laugh/i.test(userMessage)) {
          response = "Why don't temples ever get lost? Because they always follow the *Path* to Enlightenment 😄";
        }
        else if (/suggest|recommend|where to go|ideas/i.test(userMessage)) {
          response = "Looking for ideas? 🤔 Try Mahabalipuram for coastal vibes 🌊 or Madurai for temple hopping 🛕! Want nature, history, or food tips?";
        }
        else if (/weather|climate/i.test(userMessage)) {
          response = "It’s usually hot and humid 🌞 in Tamil Nadu, but Ooty offers cool mountain air 🏞️. Want the current forecast?";
        }
        else if (/festival|event/i.test(userMessage)) {
          response = "Tamil Nadu’s festivals are 🔥! Pongal, Navaratri, and Chithirai Thiruvizha are must-see events! Planning to join one?";
        }
        else if (/history|facts|did you know/i.test(userMessage)) {
          response = "Did you know? The Brihadeeswarar Temple in Thanjavur has no shadow at noon! 😮 Tamil Nadu is full of surprises like that!";
        }
        else if (/famous|popular|highlight/i.test(userMessage)) {
          response = "Want the hits? Meenakshi Temple, Mahabalipuram Shore Temple, and Nilgiri Railway are crowd favorites! 🧭";
        }
        else if (/budget|cheap|affordable/i.test(userMessage)) {
          response = "Traveling on a budget? 🚍 I can help you plan low-cost trips with local buses, street food, and free entry sites!";
        }
        else if (/stay|hotel|accommodation/i.test(userMessage)) {
          response = "Looking for places to stay? 🛌 From homestays to heritage hotels, Tamil Nadu has you covered! Want my suggestions?";
        }
        else if (/photos|pictures|gallery/i.test(userMessage)) {
          response = "Love visuals? 📸 I can share photo spots like Ooty Lake, Thanjavur Palace, or Kanyakumari sunrise points!";
        }
        else if (/shopping|market|souvenir/i.test(userMessage)) {
          response = "Local shopping? 🛍️ Try Madurai’s street markets or Mahabalipuram’s stone crafts! I can guide you to cool stuff!";
        }
        else {
          response = "Oops, I didn’t catch that 😅. Want to ask about a place, food, or travel tip? I'm here to help like a buddy!";
        }
        
        
        setMessages(prev => [...prev, {type: 'assistant', content: response}]);
        setLoading(false);
        
        if (isListening) {
          speakText(response);
        }
      }, 1000);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(prev => [...prev, {type: 'assistant', content: 'I encountered an error. Please try again.'}]);
      setLoading(false);
    }
  };

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    setIsLanguageMenuOpen(false);
    const langName = languages.find(lang => lang.code === languageCode)?.name || languageCode;
    toast({
      title: "Language Changed",
      description: `Yuna will now respond in ${langName}`,
    });
  };

  return (
    <>
      <Button 
        className={`fixed bottom-6 right-6 rounded-full p-3 shadow-lg z-40 ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-tamil-terracotta hover:bg-tamil-brown'}`}
        onClick={toggleAssistant}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>
      
      {isOpen && (
        <Card className={`fixed ${isMobile ? 'inset-4 h-[calc(100vh-32px)]' : 'bottom-20 right-6 w-full max-w-md h-96'} z-40 shadow-xl border-tamil-brown/20 overflow-hidden`}>
          <div className="bg-gradient-to-r from-tamil-terracotta to-tamil-brown text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-white text-tamil-terracotta flex items-center justify-center font-bold">Y</div>
              <h3 className="font-medium">Yuna AI Assistant</h3>
              {isSpeaking && (
                <div className="flex space-x-1 ml-2">
                  <div className="w-1 h-4 bg-white animate-pulse rounded"></div>
                  <div className="w-1 h-3 bg-white animate-pulse rounded delay-75"></div>
                  <div className="w-1 h-5 bg-white animate-pulse rounded delay-150"></div>
                  <div className="w-1 h-2 bg-white animate-pulse rounded delay-300"></div>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                >
                  <Globe size={18} />
                </Button>
                
                {isLanguageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50">
                    <div className="py-1">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            selectedLanguage === language.code ? 'bg-tamil-terracotta text-white' : 'text-gray-700 hover:bg-gray-100'
                          }`}
                          onClick={() => handleLanguageSelect(language.code)}
                        >
                          {language.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {showApiKeyInput ? (
            <div className="p-4 space-y-4">
              <h3 className="font-medium text-lg">Set Up Yuna AI</h3>
              <p className="text-sm text-muted-foreground">
                Please enter your API key to enable Yuna AI Assistant functionality. 
                You can get an API key from your AI service provider.
              </p>
              <Input 
                type="password"
                placeholder="Enter your API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="border-tamil-brown/20"
              />
              <Button 
                className="w-full bg-tamil-terracotta hover:bg-tamil-brown"
                onClick={saveApiKey}
              >
                Save API Key
              </Button>
            </div>
          ) : (
            <CardContent className="p-0 flex flex-col h-[calc(100%-56px)]">
              <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs p-3 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-tamil-blue text-white rounded-br-none' 
                        : 'bg-muted rounded-bl-none'
                    }`}>
                      {message.content}
                      {message.type === 'assistant' && (
                        <button 
                          className="ml-2 text-muted-foreground hover:text-tamil-terracotta"
                          onClick={() => speakText(message.content)}
                          disabled={isSpeaking}
                        >
                          <Volume2 size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="max-w-xs p-3 rounded-lg bg-muted rounded-bl-none">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-tamil-terracotta animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-tamil-terracotta animate-bounce delay-75"></div>
                        <div className="w-2 h-2 rounded-full bg-tamil-terracotta animate-bounce delay-150"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-3 border-t flex gap-2">
                {isListening ? (
                  <Button 
                    variant="outline" 
                    className="shrink-0 bg-red-100 text-red-500 border-red-200 animate-pulse"
                    onClick={stopListening}
                  >
                    <MicOff size={18} />
                  </Button>
                ) : (
                  <Button 
                    variant="outline" 
                    className="shrink-0"
                    onClick={startListening}
                    disabled={!voiceSupported}
                  >
                    <Mic size={18} />
                  </Button>
                )}
                <Input 
                  placeholder={isListening ? "Listening..." : "Ask about Tamil Nadu..."} 
                  value={inputValue} 
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="border-tamil-brown/20"
                  disabled={loading || isListening}
                  readOnly={isListening}
                />
                <Button 
                  className="shrink-0 bg-tamil-terracotta hover:bg-tamil-brown"
                  onClick={() => handleSendMessage()}
                  disabled={loading || (inputValue.trim() === '' && !isListening)}
                >
                  {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                </Button>
              </div>
              <div className="px-3 py-2 border-t text-xs text-center text-muted-foreground">
                <button 
                  onClick={resetApiKey}
                  className="underline hover:text-tamil-terracotta"
                >
                  Reset API Key
                </button>
              </div>
            </CardContent>
          )}
        </Card>
      )}
    </>
  );
};

export default YunaAIAssistant;