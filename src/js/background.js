chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    var blockedUrl = encodeURIComponent(details.url),
      templateUrl = chrome.extension.getURL('src/blocked.html'),
      redirectUrl = templateUrl + '?url=' + blockedUrl;

    return {'redirectUrl': redirectUrl};
  },
  {
    'urls': [
      '*://*.24orenotizie.com/*',
      '*://*.70news.wordpress.com/*',
      '*://*.abcnews.com.co/*',
      '*://*.americannews.com/*',
      '*://*.blognews24ore.com/*',
      '*://*.breaknotizie.com/*',
      '*://*.catenaumana.com/*',
      '*://*.chesuccede.it/*',
      '*://*.clicknotizie.it/*',
      '*://*.condividilo.org/*',
      '*://*.coriere.net/*',
      '*://*.corrieredellapera.com/*',
      '*://*.corrieredelmattino.altervista.org/*',
      '*://*.corrieredisera.it/*',
      '*://*.curiosandoonline.com/*',
      '*://*.curiosity2013.altervista.org/*',
      '*://*.dailystar.co.uk/*',
      '*://*.direttanews.it/*',
      '*://*.direttanews24.com/*',
      '*://*.eaglerising.com/*',
      '*://*.empirenews.net/*',
      '*://*.endingthefed.com/*',
      '*://*.essere-informati.it/*',
      '*://*.funvideosonline.info/*',
      '*://*.gazzetta24.com/*',
      '*://*.gazzettadellasera.com/*',
      '*://*.gazzettanews24.com/*',
      '*://*.giornaleilsole.com/*',
      '*://*.giornaleinformativo.altervista.org/*',
      '*://*.grandecocomero.com/*',
      '*://*.guarda.link/*',
      '*://*.guarda.one/*',
      '*://*.hotglobalnews.com/*',
      '*://*.ilbellocheavanza.com/*',
      '*://*.ilcorriere.cloud/*',
      '*://*.ilcorrieredellanotte.it/*',
      '*://*.ilfatoquotidiano.com/*',
      '*://*.ilfattaccio.org/*',
      '*://*.ilfattoquotidaino.it/*',
      '*://*.ilgiornalenews.com/*',
      '*://*.ilmattoquotidiano.it/*',
      '*://*.ilmessaggio.it/*',
      '*://*.ilpatriota.it/*',
      '*://*.ilquotidaino.wordpress.com/*',
      '*://*.iltelegrafo.altervista.org/*',
      '*://*.imigliori.info/*',
      '*://*.imigliorivideo.co/*',
      '*://*.iovivoaroma.org/*',
      '*://*.italiahotspot.altervista.org/*',
      '*://*.italiainmovimento.it/*',
      '*://*.italianosveglia.com/*',
      '*://*.italianotizie24.eu/*',
      '*://*.italiapatriamia.eu/*',
      '*://*.italiarialzati.com/*',
      '*://*.jedanews.it/*',
      '*://*.kevideo.eu/*',
      '*://*.lanozione.com/*',
      '*://*.larepubblica.info/*',
      '*://*.lasera.altervista.org/*',
      '*://*.last-webs.com/*',
      '*://*.lfattonequotidiano.com/*',
      '*://*.libero-notizie.com/*',
      '*://*.liberogiornale.com/*',
      '*://*.linktoday.it/*',
      '*://*.livewebit.com/*',
      '*://*.mafia-capitale.it/*',
      '*://*.news24italia.com/*',
      '*://*.news24roma.com/*',
      '*://*.newscronaca.it/*',
      '*://*.newsitalys.com/*',
      '*://*.noinvasione.com/*',
      '*://*.notixonline.com/*',
      '*://*.notixweb.com/*',
      '*://*.notiziariosegreto.wordpress.com/*',
      '*://*.notizieflash.eu/*',
      '*://*.notiziepericolose.blogspot.com/*',
      '*://*.notiziespericolate.com/*',
      '*://*.ohmiaitalia.com/*',
      '*://*.pandapazzo.com/*',
      '*://*.paroladiugo.it/*',
      '*://*.perdavvero.com/*',
      '*://*.realfunny.info/*',
      '*://*.repubblica24.com/*',
      '*://*.robadapazzi.com/*',
      '*://*.rubrica24.altervista.org/*',
      '*://*.segretodistato.com/*',
      '*://*.siamolagente.altervista.org/*',
      '*://*.siamonapoletani.org/*',
      '*://*.skytg24news.com/*',
      '*://*.socialbuzz.it/*',
      '*://*.socialnotixweb.com/*',
      '*://*.stuppid.com/*',
      '*://*.succedenelmondo.com/*',
      '*://*.tg5stelle.it/*',
      '*://*.theblacksphere.net/*',
      '*://*.theglobalsun.com/*',
      '*://*.thenationalsun.com/*',
      '*://*.thepoliticalinsider.com/*',
      '*://*.theracketreport.com/*',
      '*://*.tmzbreaking.com/*',
      '*://*.tmzuncut.com/*',
      '*://*.tmzworldnews.com/*',
      '*://*.trumpvision365.com/*',
      '*://*.truthcdm.com/*',
      '*://*.tuttoinweb.com/*',
      '*://*.ultimora24.it/*',
      '*://*.usanewsflash.com/*',
      '*://*.usherald.com/*',
      '*://*.usconservativetoday.com/*',
      '*://*.videoenotizie.it/*',
      '*://*.videoviraliweb.com/*',
      '*://*.web-news24.com/*',
      '*://*.webitalia360.com/*',
      '*://*.worldnewsdailyreport.com/*',
      '*://*.worldpoliticus.com/*',
      '*://*.wowchevideo.com/*',
      '*://*.younetspiegalevele.info/*',
      '*://*.zonagrigianews.com/*',
    ],
    'types': ['main_frame'],
  },
  ['blocking']
);
