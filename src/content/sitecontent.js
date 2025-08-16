// src/content/siteContent.js
const siteContent = {
  // Hebrew
  he: {
    code: "he",
    dir: "rtl",
    brand: "Zazim",
    nav: {
      home: "בית",
      diagnostics: "אבחון",
      movers: "מובילים",
      contact: "צור קשר",
    },
    hero: {
      title: "Zazim Movers Hub",
      subtitle:
        "הבית של עולם ההובלות: חיבור חכם בין לקוחות, מובילים, וכל מה שביניהם – בקלות, באמינות ובמקצועיות.",
      cta: "נסה אותנו בחינם",
    },
    form: {
      title: "בקשת הצעת מחיר ללא התחייבות",
      fullName: "שם מלא",
      email: "אימייל",
      phone: "טלפון",
      description: "תאר את הצורך בהובלה",
      submit: "שליחה",
      success: "קיבלנו! נציג יחזור אליך בקרוב.",
      validation: {
        fullName: "נא להזין שם מלא",
        email: "נא להזין אימייל תקין",
        phone: "נא להזין מספר טלפון",
        description: "נא לתאר בקצרה את הצורך",
      },
    },
    features: {
      title: "למה לבחור ב-Zazim?",
      items: [
        {
          title: "אמינות ושקיפות",
          desc: "ביקורות אמת, דירוגים בזמן אמת ומעקב מלא – כך יודעים בדיוק את מי מזמינים.",
        },
        {
          title: "התאמה חכמה",
          desc: "מנוע התאמה חכם שמצמיד מובילים פנויים ומדויקים לצורך שלך.",
        },
        {
          title: "שירות מקצה לקצה",
          desc: "מהערכת מחיר ועד מסירה – אנחנו איתך בכל שלב.",
        },
      ],
    },
    diagnostics: {
      title: "אבחון ותובנות",
      lead:
        "קבל תמונת מצב מהירה: זמינות מובילים, עומסים אזוריים, הערכות מחיר ותקלות נפוצות – בזמן אמת.",
      bullets: [
        "זמינות מובילים לפי אזור ותאריך",
        "טווחי מחירים משוערים לפי נפח ותנאי גישה",
        "התראות על עומסים או מזג אוויר קיצוני",
      ],
    },
    movers: {
      title: "מובילים מומלצים",
      lead:
        "בחרו מתוך רשימה נבדקת של מובילים בעלי ציון גבוה, ביטוח תכולה וניסיון מוכח.",
      note: "טיפ: בקשו תמונות של הציוד והרכב לפני היציאה לדרך.",
    },
    contact: {
      title: "צור קשר",
      lead:
        "שאלות, שיתופי פעולה או תמיכה? נשמח לשמוע ממך. זמינים במייל ובטלפון.",
      supportEmail: "support@zazim.example",
      supportPhone: "+972-50-000-0000",
      privacy:
        "אנחנו שומרים בקפדנות על פרטיותך. פרטי ההתקשרות משמשים למענה בלבד.",
    },
    footer: {
      rights: "כל הזכויות שמורות © Zazim",
      links: {
        terms: "תנאי שימוש",
        privacy: "מדיניות פרטיות",
      },
    },
  },

  // English
  en: {
    code: "en",
    dir: "ltr",
    brand: "Zazim",
    nav: {
      home: "Home",
      diagnostics: "Diagnostics",
      movers: "Movers",
      contact: "Contact",
    },
    hero: {
      title: "Zazim Movers Hub",
      subtitle:
        "The modern hub for moving services—connecting customers and movers with clarity, trust, and efficiency.",
      cta: "Try for Free",
    },
    form: {
      title: "Request a Free Quote",
      fullName: "Full Name",
      email: "Email",
      phone: "Phone Number",
      description: "Describe your moving needs",
      submit: "Submit",
      success: "Thanks! Our team will contact you soon.",
      validation: {
        fullName: "Please enter your full name",
        email: "Please enter a valid email",
        phone: "Please enter a phone number",
        description: "Please add a brief description",
      },
    },
    features: {
      title: "Why Choose Zazim?",
      items: [
        {
          title: "Trust & Transparency",
          desc: "Real reviews, live ratings, and full tracking—know exactly who you’re booking.",
        },
        {
          title: "Smart Matching",
          desc: "Our engine pairs you with the right, available movers for your specific job.",
        },
        {
          title: "End-to-End Service",
          desc: "From quoting to delivery, we’re with you at every step.",
        },
      ],
    },
    diagnostics: {
      title: "Diagnostics & Insights",
      lead:
        "A quick snapshot: mover availability, regional load, pricing ranges, and common risks—updated in real time.",
      bullets: [
        "Mover availability by date and region",
        "Estimated pricing by volume and access",
        "Alerts for heavy load or extreme weather",
      ],
    },
    movers: {
      title: "Recommended Movers",
      lead:
        "Hand-picked movers with high ratings, cargo insurance, and proven experience.",
      note: "Pro tip: ask for truck & equipment photos before dispatch.",
    },
    contact: {
      title: "Contact Us",
      lead:
        "Questions, partnerships, or support? We’re here. Reach us by email or phone.",
      supportEmail: "support@zazim.example",
      supportPhone: "+1-555-000-0000",
      privacy:
        "We take privacy seriously. Your details are used solely to respond to your request.",
    },
    footer: {
      rights: "All rights reserved © Zazim",
      links: {
        terms: "Terms",
        privacy: "Privacy",
      },
    },
  },

  // Russian
  ru: {
    code: "ru",
    dir: "ltr",
    brand: "Zazim",
    nav: {
      home: "Главная",
      diagnostics: "Диагностика",
      movers: "Перевозчики",
      contact: "Контакты",
    },
    hero: {
      title: "Zazim Movers Hub",
      subtitle:
        "Современная платформа, которая соединяет клиентов и перевозчиков — прозрачно, надежно и эффективно.",
      cta: "Попробовать бесплатно",
    },
    form: {
      title: "Запросить бесплатную смету",
      fullName: "Полное имя",
      email: "Эл. почта",
      phone: "Телефон",
      description: "Опишите ваши потребности при переезде",
      submit: "Отправить",
      success: "Спасибо! Мы свяжемся с вами в ближайшее время.",
      validation: {
        fullName: "Пожалуйста, укажите имя",
        email: "Укажите корректный адрес эл. почты",
        phone: "Укажите номер телефона",
        description: "Коротко опишите задачу",
      },
    },
    features: {
      title: "Почему Zazim?",
      items: [
        {
          title: "Доверие и прозрачность",
          desc: "Реальные отзывы, рейтинги и полное отслеживание — вы точно знаете, кого заказываете.",
        },
        {
          title: "Умное сопоставление",
          desc: "Подбираем свободных и подходящих перевозчиков под вашу задачу.",
        },
        {
          title: "Сопровождение на всех этапах",
          desc: "От сметы до доставки — мы с вами на каждом шаге.",
        },
      ],
    },
    diagnostics: {
      title: "Диагностика и аналитика",
      lead:
        "Мгновенный обзор: доступность перевозчиков, загрузка по регионам, ориентировочные цены и риски — в реальном времени.",
      bullets: [
        "Доступность по датам и регионам",
        "Оценка цен по объему и условиям доступа",
        "Предупреждения о высокой загрузке или погодных рисках",
      ],
    },
    movers: {
      title: "Рекомендованные перевозчики",
      lead:
        "Проверенные исполнители с высоким рейтингом, страхованием и опытом.",
      note: "Совет: запросите фото техники и оборудования до выезда.",
    },
    contact: {
      title: "Связаться с нами",
      lead:
        "Вопросы, сотрудничество или поддержка? Мы на связи по эл. почте и телефону.",
      supportEmail: "support@zazim.example",
      supportPhone: "+7-000-000-00-00",
      privacy:
        "Мы заботимся о конфиденциальности. Ваши данные используются только для ответа на запрос.",
    },
    footer: {
      rights: "Все права защищены © Zazim",
      links: {
        terms: "Условия",
        privacy: "Конфиденциальность",
      },
    },
  },

  // Arabic
  ar: {
    code: "ar",
    dir: "rtl",
    brand: "Zazim",
    nav: {
      home: "الرئيسية",
      diagnostics: "التشخيص",
      movers: "النقّالون",
      contact: "اتصل بنا",
    },
    hero: {
      title: "Zazim Movers Hub",
      subtitle:
        "منصة حديثة تربط العملاء بالنقّالين بكل وضوح وثقة وكفاءة.",
      cta: "جرّب مجانًا",
    },
    form: {
      title: "اطلب عرض سعر مجاني",
      fullName: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      description: "صف احتياجاتك للنقل",
      submit: "إرسال",
      success: "شكرًا لك! سيتواصل معك فريقنا قريبًا.",
      validation: {
        fullName: "يرجى إدخال الاسم الكامل",
        email: "يرجى إدخال بريد إلكتروني صالح",
        phone: "يرجى إدخال رقم هاتف",
        description: "يرجى إضافة وصف مختصر",
      },
    },
    features: {
      title: "لماذا Zazim؟",
      items: [
        {
          title: "ثقة وشفافية",
          desc: "مراجعات حقيقية وتقييمات فورية وتتبع كامل — تعرف تمامًا من الذي تحجزه.",
        },
        {
          title: "مطابقة ذكية",
          desc: "نوفّر لك النقّالين المناسبين والمتاحين لاحتياجك الخاص.",
        },
        {
          title: "خدمة متكاملة",
          desc: "من عرض السعر حتى التسليم — نحن معك في كل خطوة.",
        },
      ],
    },
    diagnostics: {
      title: "التشخيص والرؤى",
      lead:
        "نظرة سريعة: توفّر النقّالين، الضغط حسب المناطق، نطاقات الأسعار والمخاطر الشائعة — بتحديث فوري.",
      bullets: [
        "توفّر النقّالين حسب المنطقة والتاريخ",
        "تقدير الأسعار حسب الحجم وإمكانية الوصول",
        "تنبيهات حول الضغط العالي أو الطقس القاسي",
      ],
    },
    movers: {
      title: "نقّالون موصى بهم",
      lead:
        "قائمة مختارة من النقّالين ذوي التقييم العالي وتأمين الحمولة والخبرة المثبتة.",
      note: "نصيحة: اطلب صور الشاحنة والمعدات قبل الانطلاق.",
    },
    contact: {
      title: "اتصل بنا",
      lead:
        "أسئلة أو شراكات أو دعم؟ يسعدنا التواصل عبر البريد أو الهاتف.",
      supportEmail: "support@zazim.example",
      supportPhone: "+971-50-000-0000",
      privacy:
        "نحترم خصوصيتك. تُستخدم بياناتك فقط للرد على طلبك.",
    },
    footer: {
      rights: "© Zazim جميع الحقوق محفوظة",
      links: {
        terms: "الشروط",
        privacy: "الخصوصية",
      },
    },
  },
};

export default siteContent;
