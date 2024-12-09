const MONTHS = [
	"चैत्र",
	"वैशाख",
	"ज्येष्ठ",
	"आषाढ",
	"श्रावण",
	"भाद्रपद",
	"आश्विन:",
	"कार्तिक:",
	"मार्गशीर्ष:",
	"पौष:",
	"माघ:",
	"फाल्गुन:"
];

const TITHIYA = [
	"प्रतिपदा",
	"द्वितीया",
	"तृतीया",
	"चतुर्थी",
	"पंचमी",
	"षष्ठी",
	"सप्तमी",
	"अष्टमी",
	"नवमी",
	"दशमी",
	"एकादशी",
	"द्वादशी",
	"त्रयोदशी",
	"चतुर्दशी",
	"पूर्णिमा",
	"अमावस्या"
];

const PAKSH = [
	"शुक्ल",
	"कृष्ण"
];

const YUG = [
	"सत्य",
	"त्रेता",
	"द्वापर",
	"कलि"
]

const SAMVAT = [
	"कल्पाब्द",
	"सृष्टि",
	"वामन",
	"श्रीराम",
	"श्रीकृष्ण",
	"युधिष्ठिर",
	"बौद्ध",
	"महावीर",
	"श्रीशंकराचार्य",
	"विक्रम",
	"शालिवाहन",
	"कलचुरी",
	"वलभी",
	"फसली",
	"बँगला",
	"हर्षाब्द",
	"भारत"
];

const KAAL_IKAI = [
	"कल्प",
	"मन्वंतर",
	"युग",
	"सम्वत्"
];

exports.getMonths = function() {
	return MONTHS;
}

exports.getTithiya = function() {
	return TITHIYA;
}

exports.getAllPaksh = function() {
	return PAKSH;
}

exports.getAllYug = function() {
	return YUG;
}

exports.getSamvat = function() {
	return SAMVAT;
}

exports.getKaalIkai = function() {
	return KAAL_IKAI;
}
