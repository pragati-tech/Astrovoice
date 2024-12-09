const express=require('express')
const articleRouter=require('./routes/articles')
const app=express()
const axios=require('axios')
const path = require('path');
const bodyparser=require('body-parser');
const usermodel=require('./models/users');
const Article=require('./models/blog');
const nse = require('indian-stock-exchange');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}))

const quotes = [
  "इंतेज़ार करने वालो को सिर्फ उतना मिलता है ,जितना कोशिश करने वाले छोड़ देते है |",
  "मेहनत इतनी ख़ामोशी से करो, कि सफलता शोर मचा दें |",
  "जितने वाले कुछ अलग चीज़े नहीं करते बस वो चीज़ो को अलग तरीके से करते हैं |",
  "किसी को हरा देना बहुत ही आसान है |",
  "सफल और असफल लोग अपनी क्षमताओं में बहुत भिन्न नहीं होते हैं। वे अपनी क्षमता तक पहुँचने के लिए अपनी इच्छाओं में भिन्न होते हैं |",
  "मंज़िल उन्हीं को मिलती है , जिनके सपनों में जान होती है, पंख से कुछ नहीं होता , हौसलों से उड़ान होती है!",
  "जिस-जिस पर यह जग हंसा है, उसी ने इतिहास रचा है।",
  "सही करने की हिम्मत उसी में आती है जो गलती करने से नहीं डरते है |",
  "जिसने भी खुद को खर्च किया है, दुनिया ने उसी को Google पर Search किया है |",
  "अवसर की प्रतीक्षा में मत बैठो । आज का अवसर ही सर्वोत्तम है |",
  "बड़ा सोचो ,जल्दी सोचो ,आगे सोचो विचारों पर  किसी का अधिकार नहीं है |",
  "सपनों को सच करने से पहले सपनों को ध्यान से देखना होता है",
  "जमाने में वही लोग हम पर उंगली उठाते हैं जिनकी हमें छूने की औकात नहीं होती |",
  "अगर आप सफल होना चाहते हो तो आपको अपने काम में एकाग्रता लानी होगी |"
  // Add more quotes here
];
// Random quote generation
app.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.render('index', { quote: randomQuote });
});

// subscription newsletter
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static('views'));
app.post('/',(req,res)=>{
    const email=req.body.email;
    console.log(`new subscription:${email}`);
    res.send('Thank you for subscribing!');
})
// stock market 

// All-blog page
app.use('/blogs',async(req,res) => {
  const blog=await Article.find().sort({
    createdAt:'desc'
  })
  res.render('article/blogs',{articles:blog})
})

app.get('/stockpredictor', async (req, res) => {
const options = {
  method: 'GET',
  url: 'https://latest-stock-price.p.rapidapi.com/any',
  headers: {
    'X-RapidAPI-Key': 'c1f49afc25msh804c8e13bc3cd3cp18e705jsn77a98686a721',
    'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	res.render('stockmarket/stockpredictor',{stocks:response.data})
} catch (error) {
	console.error(error);
}
});

// AQUARIUS
const options = {
  method: 'GET',
  url: 'https://daily-astrology-rasipalan.p.rapidapi.com/api/rasipalanrapid',
  params: {
    sign: '11',
    lang: 'en'
  },
  headers: {
    'X-RapidAPI-Key': 'c1f49afc25msh804c8e13bc3cd3cp18e705jsn77a98686a721',
    'X-RapidAPI-Host': 'daily-astrology-rasipalan.p.rapidapi.com'
  }
};
app.get('/aquarius', async (req, res) => {

  try {
    const response = await axios.request(options);
	let resp=response.data.message;
  
  res.render('horoscope/aquarius',{resp});

  } catch (err) {
    console.error(err); 
  }

});

// PISCES
const options2 = {
  method: 'GET',
  url: 'https://daily-astrology-rasipalan.p.rapidapi.com/api/rasipalanrapid',
  params: {
    sign: '12',
    lang: 'en'
  },
  headers: {
    'X-RapidAPI-Key': 'c1f49afc25msh804c8e13bc3cd3cp18e705jsn77a98686a721',
    'X-RapidAPI-Host': 'daily-astrology-rasipalan.p.rapidapi.com'
  }
};
app.get('/pisces', async (req, res) => {

  try {
    const response = await axios.request(options2);
	let resp=response.data.message;
  
  res.render('horoscope/pisces',{resp});

  } catch (err) {
    console.error(err); 
  }

});

// ARIES
const options3 = {
  method: 'GET',
  url: 'https://horostory.p.rapidapi.com/horoscope',
  params: {
    sign: 'aries',
    date: 'today'
  },
  headers: {
    'X-RapidAPI-Key': 'c1f49afc25msh804c8e13bc3cd3cp18e705jsn77a98686a721',
    'X-RapidAPI-Host': 'horostory.p.rapidapi.com'
  }
};
app.get('/aries', async (req, res) => {

  try {
    const response = await axios.request(options3);
	let resp=response.data;
  res.render('horoscope/aries',{resp});

  } catch (err) {
    console.error(err); 
  }

});

// TAURUS
const options4 = {
  method: 'GET',
  url: 'https://horostory.p.rapidapi.com/horoscope',
  params: {
    sign: 'taurus',
    date: 'today'
  },
  headers: {
    'X-RapidAPI-Key': 'c1f49afc25msh804c8e13bc3cd3cp18e705jsn77a98686a721',
    'X-RapidAPI-Host': 'horostory.p.rapidapi.com'
  }
};
app.get('/taurus', async (req, res) => {

  try {
    const response = await axios.request(options4);
	let resp=response.data;
  res.render('horoscope/taurus',{resp});

  } catch (err) {
    console.error(err); 
  }

});

// GEMINI
const options5 = {
  method: 'GET',
  url: 'https://horostory.p.rapidapi.com/horoscope',
  params: {
    sign: 'gemini',
    date: 'today'
  },
  headers: {
    'X-RapidAPI-Key': 'c1f49afc25msh804c8e13bc3cd3cp18e705jsn77a98686a721',
    'X-RapidAPI-Host': 'horostory.p.rapidapi.com'
  }
};
app.get('/gemini', async (req, res) => {

  try {
    const response = await axios.request(options5);
	let resp=response.data;
  
  res.render('horoscope/gemini',{resp});

  } catch (err) {
    console.error(err); 
  }

});

// CANCER
const options6 = {
  method: 'GET',
  url: 'https://horostory.p.rapidapi.com/horoscope',
  params: {
    sign: 'cancer',
    date: 'today'
  },
  headers: {
    'X-RapidAPI-Key': 'c1f49afc25msh804c8e13bc3cd3cp18e705jsn77a98686a721',
    'X-RapidAPI-Host': 'horostory.p.rapidapi.com'
  }
};
app.get('/cancer', async (req, res) => {

  try {
    const response = await axios.request(options6);
	let resp=response.data;
  res.render('horoscope/cancer',{resp});

  } catch (err) {
    console.error(err); 
  }

});

// LEO
const options7 = {
  method: 'GET',
  url: 'https://horostory.p.rapidapi.com/horoscope',
  params: {
    sign: 'leo',
    date: 'today'
  },
  headers: {
    'X-RapidAPI-Key': 'c1f49afc25msh804c8e13bc3cd3cp18e705jsn77a98686a721',
    'X-RapidAPI-Host': 'horostory.p.rapidapi.com'
  }
};
app.get('/leo', async (req, res) => {

  try {
    const response = await axios.request(options7);
	let resp=response.data;
  res.render('horoscope/leo',{resp});

  } catch (err) {
    console.error(err); 
  }

});

// VIRGO
const options8 = {
  method: 'GET',
  url: 'https://horostory.p.rapidapi.com/horoscope',
  params: {
    sign: 'virgo',
    date: 'today'
  },
  headers: {
    'X-RapidAPI-Key': 'c1f49afc25msh804c8e13bc3cd3cp18e705jsn77a98686a721',
    'X-RapidAPI-Host': 'horostory.p.rapidapi.com'
  }
};
app.get('/virgo', async (req, res) => {

  try {
    const response = await axios.request(options8);
	let resp=response.data;
  res.render('horoscope/virgo',{resp});

  } catch (err) {
    console.error(err); 
  }

});

// LIBRA
const options9 = {
  method: 'GET',
  url: 'https://horostory.p.rapidapi.com/horoscope',
  params: {
    sign: 'libra',
    date: 'today'
  },
  headers: {
    'X-RapidAPI-Key': 'c1f49afc25msh804c8e13bc3cd3cp18e705jsn77a98686a721',
    'X-RapidAPI-Host': 'horostory.p.rapidapi.com'
  }
};
app.get('/libra', async (req, res) => {

  try {
    const response = await axios.request(options9);
	let resp=response.data;
  res.render('horoscope/libra',{resp});

  } catch (err) {
    console.error(err); 
  }

});

// SCORPIO
const options10 = {
  method: 'GET',
  url: 'https://horostory.p.rapidapi.com/horoscope',
  params: {
    sign: 'scorpio',
    date: 'today'
  },
  headers: {
    'X-RapidAPI-Key': 'c1f49afc25msh804c8e13bc3cd3cp18e705jsn77a98686a721',
    'X-RapidAPI-Host': 'horostory.p.rapidapi.com'
  }
};
app.get('/scorpio', async (req, res) => {

  try {
    const response = await axios.request(options10);
	let resp=response.data;
  res.render('horoscope/scorpio',{resp});

  } catch (err) {
    console.error(err); 
  }

});

// SAGITTARIUS
const options11 = {
  method: 'GET',
  url: 'https://horostory.p.rapidapi.com/horoscope',
  params: {
    sign: 'sagittarius',
    date: 'today'
  },
  headers: {
    'X-RapidAPI-Key': 'c1f49afc25msh804c8e13bc3cd3cp18e705jsn77a98686a721',
    'X-RapidAPI-Host': 'horostory.p.rapidapi.com'
  }
};
app.get('/sagittarius', async (req, res) => {

  try {
    const response = await axios.request(options11);
	let resp=response.data;
  res.render('horoscope/sagittarius',{resp});

  } catch (err) {
    console.error(err); 
  }

});

// CAPRICORN
const options12 = {
  method: 'GET',
  url: 'https://horostory.p.rapidapi.com/horoscope',
  params: {
    sign: 'capricorn',
    date: 'today'
  },
  headers: {
    'X-RapidAPI-Key': 'c1f49afc25msh804c8e13bc3cd3cp18e705jsn77a98686a721',
    'X-RapidAPI-Host': 'horostory.p.rapidapi.com'
  }
};
app.get('/capricorn', async (req, res) => {
  try {
    const response = await axios.request(options12);
	let resp=response.data;
  res.render('horoscope/capricorn',{resp});
  } catch (err) {
    console.error(err); 
  }
});

// KUNDALI MAKER
app.get('/kundli-form',(req,res)=>{
  res.render('kundli-form')
})
app.post('/kundli', async (req, res) => {
  const {name, birthdate,birthtime,city} = req.body;
  // Prepare parameters 
  const params = new URLSearchParams();
  params.set('name', name);
  params.set('birthdate', birthdate);
  params.set('birthtime', birthtime);
  params.set('City', city);
  try {

    const response = await axios.request({
      method: 'POST',
      url: 'https://kundli1.p.rapidapi.com/',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'c1f49afc25msh804c8e13bc3cd3cp18e705jsn77a98686a721',
        'X-RapidAPI-Host': 'kundli1.p.rapidapi.com'
      },
      data: params,
    });
    // Display Kundli data
    res.render('kundli', {
      kundli: response.data
    });
  } catch (error) {
    // Handle error
    res.send('error genrating kundli!')
  }
});


app.use('/article',articleRouter)
app.listen(3000)
