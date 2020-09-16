(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/o+D":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi");var n=a("mt4B"),i=a("ykJU"),s=a("q1tI"),o=a.n(s),r=a("ymbu"),l=a.n(r),u=function(e){var t=e.lang,s=Object.keys(l.a[t]);return o.a.createElement(n.a,{className:"spacing spacing--after-small spacing--after-mobile offset",id:"course-contents"},o.a.createElement("div",{className:"container spacing flex-fix-aligning col-7--mobile"},s.map((function(e){var n="en"===t?["Fundamentals of Web apps","Introduction to React","Communicating with server","Programming a server with NodeJS and Express","Testing Express servers, user administration","Testing React apps","State management with Redux","React router, custom hooks, styling app with CSS and webpack","GraphQL","Typescript","React Native"]:"zh"===t?["Web 应用的基础设施","React 入门","与服务端通信","用NodeJS和Express写服务端程序","测试 Express 服务端程序, 以及用户管理","测试 React 应用","利用Redux进行状态管理","React router、自定义 hook，利用CSS和webpack给app添加样式","GraphQL","Typescript","React Native"]:["Web-sovellusten toiminnan perusteet","Reactin perusteet","Palvelimen kanssa tapahtuva kommunikointi","Palvelimen ohjelmointi NodeJS:n Express-kirjastolla","Express-sovellusten testaaminen, käyttäjänhallinta","React-sovelluksen testaaminen","Sovelluksen tilan hallinta Redux-kirjastolla","React router, custom-hookit, tyylikirjastot ja webpack","GraphQL","Typescript","React Native"];return o.a.createElement(i.a,{key:n[e],className:"col-3 col-10--mobile col-4--tablet",image:{src:a("A2TI")("./part-"+e+".svg"),alt:n[e]},hoverImageSrc:a("uVes")("./part-"+e+"_ovr.svg"),name:("en"===t||"zh"===t?"Part":"Osa")+" "+e,summary:n[e],path:"en"===t?"/en/part"+e:"zh"===t?"/zh/part"+e:"/osa"+e})}))))}},"64fX":function(e,t,a){},A2TI:function(e,t,a){var n={"./part-0.svg":"14qD","./part-0_ovr.svg":"U2Ud","./part-1.svg":"+3Mn","./part-10.svg":"637K","./part-10_ovr.svg":"BxUb","./part-1_ovr.svg":"Ihds","./part-2.svg":"tJuj","./part-2_ovr.svg":"NAY/","./part-3.svg":"j7o1","./part-3_ovr.svg":"08MX","./part-4.svg":"YJeN","./part-4_ovr.svg":"SnsQ","./part-5.svg":"fVSn","./part-5_ovr.svg":"BHQJ","./part-6.svg":"VpC5","./part-6_ovr.svg":"yLsD","./part-7.svg":"UdFo","./part-7_ovr.svg":"y/zO","./part-8.svg":"8smP","./part-8_ovr.svg":"i8/x","./part-9.svg":"MJ9L","./part-9_ovr.svg":"7YFN"};function i(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id="A2TI"},CKG8:function(e){e.exports=JSON.parse('{"fi":{"name":"Yleistä","intro":["Kurssilla tutustutaan JavaScriptilla tapahtuvaan moderniin websovelluskehitykseen. Pääpaino on React-kirjaston avulla toteutettavissa single page -sovelluksissa, ja niitä tukevissa Node.js:llä toteutetuissa REST-rajapinnoissa. Kurssilla tutustutaan myös GraphQL:n eli REST:ille vaihtoehtoiseen rajapintojen toteutusperiaatteeseen","Tämän vuoden kurssi sisältää myös uuden, <a href=\'/osa9\'>TypeScriptiä</a> käsittelevän osan, jonka sisällöstä vastaa <a href=\'https://www.terveystalo.com/fi/Yritystietoa/Terveystalo-tyontantajana/Digital-Health/\'>Terveystalo</a>.","Kurssilla käsitellään myös sovellusten testaamista, konfigurointia ja suoritusympäristöjen hallintaa sekä MongoDB-tietokannan käyttöä sovelluksen tietojen tallettamiseen","Kurssin laajuus on 3-9 opintopistettä, sisältö on sama kun Helsingin yliopiston tietojenkäsittelytieteen osaston keväällä 2020 pidetyllä kurssilla <a href=\'https://fullstack-hy2020.github.io/\'>Full stack -websovelluskehitys</a>. Kurssiin liittyy myös 1-10 opintopisteen laajuinen <a href=\'/osa0/yleista#full-stack-harjoitustyo\'>harjoitustyö</a>.","Yhteistyökumppaneina kurssilla on <a href=\'https://www.houston-inc.com/\'>Houston Inc</a>, <a href=\'https://www.terveystalo.com/fi/Yritystietoa/Terveystalo-tyontantajana/Digital-Health/\'>Terveystalo</a>, <a href=\'https://elisa.fi/\'>Elisa</a>, <a href=\'https://www.kesko.fi/\'>K-ryhmä</a>, <a href=\'https://www.instagram.com/unitytechnologies/?hl=en\'>Unity Technologies</a>, <a href=\'https://careers.konecranes.com/Konecranes/\'>Konecranes</a> ja <a href=\'https://www.smartly.io/\'>Smartly.io</a>. Katso <a href=\'https://www.youtube.com/playlist?list=PLumQiZ25uijis31zaRL7rhzLalSwLqUtm\'>täältä</a> yhteistyökumppaniemme asiantuntijoiden vierailuluentoja kurssin aihepiireistä."],"info":[{"title":"Kurssimateriaali","content":["Kurssimateriaali on tarkoitettu luettavaksi osa kerrallaan \\"alusta loppuun\\". Materiaalin seassa on tehtäviä, jotka on sijoitettu siten, että kunkin tehtävän tekemiseen pitäisi olla riittävät tekniset valmiudet sitä edeltävässä materiaalissa. Voit siis tehdä tehtäviä sitä mukaan kun niitä tulee materiaalissa vastaan. Voi myös olla, että koko osan tehtävät kannattaa tehdä vasta luettuaan ensin osan alusta loppuun kertaalleen. Useissa osissa tehtävät ovat samaa ohjelmaa laajentavia pienistä osista koostuvia kokonaisuuksia. Muutamia tehtävien ohjelmia kehitetään eteenpäin useamman osan aikana.","Materiaali perustuu muutamien osasta osaan vaihtuvien esimerkkiohjelmien asteittaiseen laajentamiseen. Materiaali toiminee parhaiten, jos kirjoitat samalla koodin myös itse ja teet koodiin myös pieniä modifikaatioita. Materiaalin käyttämien ohjelmien koodin eri vaiheiden tilanteita on tallennettu GitHubiin."]},{"title":"Suoritustapa","content":["Kurssi koostuu kahdeksasta osasta, joista ensimmäinen on historiallisista syistä numero nolla. Kunkin osan tekemiseen kannattaa varata aikaa noin 5-25 tuntia.","Materiaalissa osasta n osaan n+1 eteneminen ei ole mielekästä ennen kuin riittävä osaaminen osan n asioista on saavutettu. Kurssilla sovelletaankin pedagogisin termein tavoiteoppimista, engl. mastery learning ja on tarkoitus, että etenet seuraavaan osaan vasta, kun riittävä määrä edellisen osan tehtävistä on tehty.","Oletuksena on, että teet kunkin osan tehtävistä ainakin ne jotka eivät ole merkattu tähdellä. Myös tähdellä merkatut tehtävät vaikuttavat arvosteluun, mutta niiden tekemättäjättäminen ei aiheuta liian suuria esteitä seuraavan osan (tähdellä merkkaamattomien) tehtävien tekemiseen.","Etenemisnopeus kurssilla on vapaa, tehtäviä voi palauttaa 10.1.2021. klo 23:59 asti.","Tämän kurssin eri osiin jo tehtyjen palautusten ajankäyttöstatistiikan näet tehtävien palautussivulta."]},{"title":"Arvosteluperusteet","content":["Kurssi voidaan suorittaa joko 3 tai 5-9 opintopisteen laajuisena.","Laajuus ja arvosana määräytyy kaikkien tehtyjen tehtävien perusteella, myös tähdellä merkityt tehtävät siis vaikuttavat arvosanaan. Kurssin lopussa on koe, joka on suoritettava hyväksytysti. Koe ei kuitenkaan vaikuta arvosanaan.","Jos haluat kurssilta suorituksen, tallenna opiskelijanumerosi palautussovelluksen näkymään my submissions."]},{"title":"Alkutoimet","content":["Tällä kurssilla suositellaan Chrome-selaimen käyttöä, sillä se tarjoaa parhaan välineistön web-sovelluskehitystä ajatellen.","Kurssin tehtävät palautetaan GitHubiin, joten Git tulee olla asennettuna ja sitä on syytä osata käyttää. Ohjeita Gitin käyttämiseen löytyy muunmuassa täältä.","Asenna myös joku järkevä webkoodausta tukeva tekstieditori, enemmän kuin suositeltava valinta on Visual studio code.","Älä koodaa nanolla, Notepadilla tai Geditillä. NetBeanskaan ei ole omimmillaan Web-koodauksessa ja se on myös turhan raskas verrattuna esim. Visual Studio Codeen.","Asenna koneeseesi heti myös Node.js. Materiaali on tehty versiolla 8.6, älä asenna mitään sitä vanhempaa versiota.","Asennusohjeita on koottu tänne.","Noden myötä koneelle asentuu myös Node package manager npm, jota tulemme tarvitsemaan kurssin aikana aktiivisesti. Tuoreen noden kera asentuu myös npx, jota tarvitaan myös muutaman kerran."]},{"title":"Typoja materiaalissa","content":["Kurssilla on paljon materiaalia ja se on olosuhteiden pakosta kirjoitettu todella nopeasti. Materiaalissa on betatestauksesta ja oikoluvuista huolimatta kirjoitusvirheitä. Jos löydät kirjoitusvirheen tai joku asia on sanottu epäselvästi tai kielioppisääntöjen vastaisesti, tee pull request repositoriossa https://github.com/fullstack-hy2020/fullstack-hy2020.github.io olevaan kurssimateriaaliin.","Pull requestin tekeminen on helppoa. Esim. jos tällä sivulla on typo, mene sivun “lähdekoodiin” https://github.com/fullstack-hy2019/fullstack-hy2019.github.io/edit/source/src/content/pages/about.json klikkaa kynän kuvaa oikealta, tee muutokset ja klikkaa muutama kerta “vihreää” Ohtu-kurssin ohjeen mukaan."]}]},"en":{"name":"General","intro":["This course serves as an introduction to modern web application development with JavaScript. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js. The course also contains a section on GraphQL, a modern alternative to REST APIs.","The course covers testing, configuration and environment management, and the use of MongoDB for storing the application’s data.","This year\'s edition of the course contains a new part on <a href=\'/osa9\'>TypeScript</a>. Content for this part is provided by <a href=\'https://www.terveystalo.com/fi/Yritystietoa/Terveystalo-tyontantajana/Digital-Health/\'>Terveystalo</a>","The course is worth 3-9 credits, and the content is the same as in the  <a href=\'https://fullstack-hy2020.github.io/\'>Full stack course</a> held at the <a href=\'https://www.helsinki.fi/en/computer-science\'>Department of Computer Science</a> at the University of Helsinki in Spring 2020. There is also an associated <a href=\'/osa0/yleista#full-stack-harjoitustyo\'>project</a> that is worth 1-10 credits.","Partners and affiliates of the course include <a href=\'https://www.houston-inc.com/\'>Houston Inc</a>, <a href=\'https://www.terveystalo.com/fi/Yritystietoa/Terveystalo-tyontantajana/Digital-Health/\'>Terveystalo</a>, <a href=\'https://elisa.fi/\'>Elisa</a>, <a href=\'https://www.kesko.fi/\'>K-ryhmä</a>, <a href=\'https://www.instagram.com/unitytechnologies/?hl=en\'>Unity Technologies</a> and <a href=\'https://careers.konecranes.com/Konecranes/\'>Konecranes</a>. See <a href=\'https://www.youtube.com/watch?v=BZexOyQZMMc&list=PLumQiZ25uijis31zaRL7rhzLalSwLqUtm\'>here for guest lectures</a> on course-related topics given by various experts from our partners and affiliates."],"info":[{"title":"Course Material","content":["The course material is meant to be read \\"part by part\\" from the beginning to the end. it may also be worthwhile to do the whole part of the tasks only after reading the first part of the piece once and for all.","The material is based on the gradual extension of some of the sample programs that change part of the material. The material works best if you also type the code yourself and make small modifications to the code."]},{"title":"Performance","content":["The course consists of eight parts, the first of which is zero for historical reasons.","In the material, from part n to n + 1, advancement is not meaningful until sufficient knowledge of some of n\'s has been achieved.","It is assumed that you are doing at least some of the tasks that have not been marked with an asterisk. The tasks marked with an asterisk will also affect the review, but their failure to do so will not cause too many obstacles to doing the next section (unmarked).","The speed of the course on the course is free, tasks can be returned until 10.12020 until 23:59.","The time usage statistics for the returns already made in different parts of this course can be found on the task return page."]},{"title":"Rating Criteria","content":["The course can be completed in either 3 or 5-8 credits.","The scope and grade are determined by all the tasks performed, so the tasks marked with an asterisk will also affect the grade.","If you want to complete the course, save your student number recovery application to my submissions."]},{"title":"Types of material","content":["There is a lot of material in the course and it has been written very fast about the circumstances. Despite the beta testing and proofreading, the material has spelling mistakes. /fullstackopen-2020.github.iok in course material. ","Making pull request is easy. For example, if this page has typo, go to the \\"source code\\" page https://github.com/fullstack-hy2019/fullstack-hy2019.github.io/edit/source/src/content/pages/about.json click on the pen image to the right, make the changes and click a few times \\"green\\" according to the Danger course. "]}]},"zh":{"name":"General","intro":["本课程是介绍如何使用JavaScript开发现代Web应用程序。 课程的重点是使用ReactJS构建单页面应用程序（SPA），并使用由Node.js构建REST API。 该课程还包含介绍GraphQL的部分，这是REST API的现代替代方案。","课程还包括测试、配置和环境管理，以及使用 MongoDB 来存储应用的数据","今年（2020）的课程还包含了一个新的部分—— <a href=\'/part9\'>TypeScript</a>，这部分课程内容是由<a href=\'https://www.terveystalo.com/fi/Yritystietoa/Terveystalo-tyontantajana/Digital-Health/\'>Terveystalo</a>提供的","本门课程价值3~9个学分，课程内容与赫尔辛基大学<a href=\'https://www.helsinki.fi/en/computer-science\'>计算机科学系</a>的2020春季课程<a href=\'https://fullstack-hy2020.github.io/\'>【全栈课程】</a>相同，这门课附带一个相关的<a href=\'/osa0/yleista#full-stack-harjoitustyo\'>项目作业</a>，价值1~10个学分","本门课的合作伙伴和友情机构包括<a href=\'https://www.houston-inc.com/\'>Houston Inc</a>, <a href=\'https://www.terveystalo.com/fi/Yritystietoa/Terveystalo-tyontantajana/Digital-Health/\'>Terveystalo</a>, <a href=\'https://elisa.fi/\'>Elisa</a>, <a href=\'https://www.kesko.fi/\'>K-ryhmä</a>, <a href=\'https://www.instagram.com/unitytechnologies/?hl=en\'>Unity Technologies</a> 以及 <a href=\'https://careers.konecranes.com/Konecranes/\'>Konecranes</a>。<a href=\'https://www.youtube.com/watch?v=BZexOyQZMMc&list=PLumQiZ25uijis31zaRL7rhzLalSwLqUtm\'>这里</a>可以观看由我们的合作伙伴和友情机构的多为专家提供的与本门课程主题相关的客座讲座。"],"info":[{"title":"Course Material","content":["The course material is meant to be read \\"part by part\\" from the beginning to the end. it may also be worthwhile to do the whole part of the tasks only after reading the first part of the piece once and for all.","The material is based on the gradual extension of some of the sample programs that change part of the material. The material works best if you also type the code yourself and make small modifications to the code."]},{"title":"Performance","content":["The course consists of eight parts, the first of which is zero for historical reasons.","In the material, from part n to n + 1, advancement is not meaningful until sufficient knowledge of some of n\'s has been achieved.","It is assumed that you are doing at least some of the tasks that have not been marked with an asterisk. The tasks marked with an asterisk will also affect the review, but their failure to do so will not cause too many obstacles to doing the next section (unmarked).","The speed of the course on the course is free, tasks can be returned until 10.12020 until 23:59.","The time usage statistics for the returns already made in different parts of this course can be found on the task return page."]},{"title":"Rating Criteria","content":["The course can be completed in either 3 or 5-8 credits.","The scope and grade are determined by all the tasks performed, so the tasks marked with an asterisk will also affect the grade.","If you want to complete the course, save your student number recovery application to my submissions."]},{"title":"Types of material","content":["There is a lot of material in the course and it has been written very fast about the circumstances. Despite the beta testing and proofreading, the material has spelling mistakes. /fullstackopen-2020.github.iok in course material. ","Making pull request is easy. For example, if this page has typo, go to the \\"source code\\" page https://github.com/fullstack-hy2019/fullstack-hy2019.github.io/edit/source/src/content/pages/about.json click on the pen image to the right, make the changes and click a few times \\"green\\" according to the Danger course. "]}]}}')},CN8t:function(e,t,a){"use strict";a("64fX");var n=a("jsr+"),i=a("AxK6"),s=a("Wbzz"),o=a("q1tI"),r=a.n(o),l=a("98iT"),u=a.n(l),c=a("TiAl"),h=a("0Yyr"),m=[{src:a.n(h).a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:u.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];t.a=function(e){var t=e.lang;return r.a.createElement(n.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},r.a.createElement(n.a,{className:"col-5 push-right-3 col-10--mobile order-2--mobile order-2--tablet footer__links",flex:!0,spaceBetween:!0},m.map((function(e){return r.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},r.a.createElement(i.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))}))),r.a.createElement(n.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile order-1--tablet footer__navigation"},r.a.createElement("div",{className:"footer__navigation-link-container"},c.b[t].map((function(e){return r.a.createElement(s.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover",style:{marginLeft:"4.5rem"}},e.text)})))))}},brk1:function(e,t,a){},gcgQ:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("aHCT"),a("zXXn");var n=a("76ZC"),i=a.n(n),s=a("q1tI"),o=a.n(s);var r=function(e){var t=e.text,a=e.className,n=e.heading,s=e.headingFontSize,r=e.bold,l=e.centered,u=e.noPadding,c=e.headingFont,h=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["text","className","heading","headingFontSize","bold","centered","noPadding","headingFont"]),m=[];l&&m.push("centered"),r&&m.push("bold"),u&&m.push("body-text--no-padding"),c&&m.push("heading-font");return o.a.createElement("div",Object.assign({className:"body-text "+a},h),n.title&&function(){if(n){var e=n.level;return o.a.createElement(e,{className:"body-text__title",style:s?{fontSize:s}:{}},n.title)}return null}(),t&&"string"==typeof t?o.a.createElement("p",{className:"body-text__content "+m.join(" ")},t):t&&t.map((function(e){return o.a.createElement("div",{key:e,className:"body-text__content "+m.join(" ")},i()(e))})))};r.defaultProps={heading:{title:"",level:"h2"},text:"",className:"",centered:!1,bold:!1,noPadding:!1}},gqR3:function(e,t){e.exports={fi:"Helsingin yliopiston ja Houston Inc:n kaikille avoin ja ilmainen moderniin Javascript-pohjaiseen web-sovelluskehitykseen keskittyvä kurssi. Osallistujilta edellytetään vahvaa ohjelmointirutiinia, pitkäjänteistyyttä ja valmiuksia omatoimiseen ongelmanratkaisuun.",en:"Open online course on Javascript based modern web development by University of Helsinki and Houston Inc.."}},mt4B:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("rXWv");var n=a("q1tI"),i=a.n(n);var s=function(e){var t=e.className,a=e.backgroundColor,n=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["className","backgroundColor"]),s=a?{backgroundColor:a}:null;return i.a.createElement("div",Object.assign({className:"banner "+t,style:s},n))};s.defaultProps={className:""}},rXWv:function(e,t,a){},u1fg:function(e){e.exports=JSON.parse('{"white":"#ffffff","black":"#33332d","main":"#e1e1e1","violet":"#B795F3","turquoise":"#82F7EB","green":"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D","yellow":"#F7F382","pink":"#E693CB","blue":"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0","light-green":"#D4FCB5","part10-light-blue":"#AFF4FE"}')},uVes:function(e,t,a){var n={"./part-0_ovr.svg":"U2Ud","./part-10_ovr.svg":"BxUb","./part-1_ovr.svg":"Ihds","./part-2_ovr.svg":"NAY/","./part-3_ovr.svg":"08MX","./part-4_ovr.svg":"SnsQ","./part-5_ovr.svg":"BHQJ","./part-6_ovr.svg":"yLsD","./part-7_ovr.svg":"y/zO","./part-8_ovr.svg":"i8/x","./part-9_ovr.svg":"7YFN"};function i(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id="uVes"},ykJU:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("E5k/"),a("C8Qj"),a("pJf4"),a("brk1");var n=a("AxK6"),i=a("Wbzz"),s=a("q1tI"),o=a.n(s),r=a("iAdT"),l=a("u1fg"),u=function(e,t){e.currentTarget.firstElementChild.firstElementChild.firstElementChild.src=t},c=function(e){var t=e.image,a=e.hoverImageSrc,s=e.background,c=void 0===s?"main":s,h=e.name,m=e.summary,p=e.path,d=e.companyPath,k=e.small,v=e.className,f=[];return k&&f.push("content-liftup--small"),p?o.a.createElement("div",{className:"content-liftup "+v+" "+f.join(" ")},o.a.createElement(r.a,{largeMargin:!0},o.a.createElement(i.Link,{to:p,onMouseOver:function(e){u(e,a||t.src)},onMouseOut:function(e){u(e,t.src)}},o.a.createElement(n.a,Object.assign({},t,{className:"content-liftup__image image--square-big",overlay:l[c]})))),o.a.createElement("p",{className:"content-liftup__name"},h),o.a.createElement("p",{className:"content-liftup__summary"},m)):o.a.createElement(o.a.Fragment,null,d?o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:d,className:"content-liftup "+v+" "+f.join(" ")+" no-hover"},o.a.createElement(n.a,Object.assign({},t,{contain:!0,squareBig:!0,className:"content-liftup__image"})),h&&o.a.createElement("p",{className:"content-liftup__name"},h),m&&o.a.createElement("p",{className:"content-liftup__summary"},m)):o.a.createElement("div",{className:"content-liftup "+v+" "+f.join(" ")+" no-hover"},o.a.createElement(n.a,Object.assign({},t,{contain:!0,className:"content-liftup__image image--square-big"})),h&&o.a.createElement("p",{className:"content-liftup__name"},h),m&&o.a.createElement("p",{className:"content-liftup__summary"},m)))};c.defaultProps={className:"",published:"",path:"",companyPath:""}},ymbu:function(e,t){e.exports={fi:{0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},1:{a:"Reactin alkeet",b:"Javascriptiä",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},2:{a:"Kokoelmien renderöinti ja moduulit",b:"Lomakkeiden käsittely",c:"Palvelimella olevan datan hakeminen",d:"Palvelimella olevan datan muokkaaminen",e:"Tyylien lisääminen React-sovellukseen"},3:{a:"Node.js ja Express",b:"Sovellus internetiin",c:"Tietojen tallettaminen MongoDB-tietokantaan",d:"Validointi ja ESLint"},4:{a:"Sovelluksen rakenne ja testauksen alkeet",b:"Backendin testaaminen",c:"Käyttäjien hallinta",d:"Token-perustainen kirjautuminen"},5:{a:"Kirjautuminen frontendissä",b:"props.children ja proptypet",c:"React-sovellusten testaaminen",d:"End to end -testaus"},6:{a:"Flux-arkkitehtuuri ja Redux",b:"Monta reduseria",c:"Redux-sovelluksen kommunikointi palvelimen kanssa",d:"connect"},7:{a:"React-router",b:"custom-hookit",c:"Lisää tyyleistä",d:"Webpack",e:"Luokkakomponentit, Sekalaista",f:"Tehtäviä: blogilistan laajennus"},8:{a:"GraphQL-palvelin",b:"React ja GraphQL",c:"Tietokanta ja käyttäjien hallinta",d:"Kirjautuminen ja välimuistin päivitys",e:"Fragmentit ja subskriptiot"},9:{},10:{}},en:{0:{a:"General info",b:"Fundamentals of Web apps"},1:{a:"Introduction to React",b:"JavaScript",c:"Component state, event handlers",d:"A more complex state, debugging React apps"},2:{a:"Rendering a collection, modules",b:"Forms",c:"Getting data from server",d:"Altering data in server",e:"Adding styles to React app"},3:{a:"Node.js and Express",b:"Deploying app to internet",c:"Saving data to MongoDB",d:"Validation and ESLint"},4:{a:"Structure of backend application, introduction to testing",b:"Testing the backend",c:"User administration",d:"Token authentication"},5:{a:"Login in frontend",b:"props.children and proptypes",c:"Testing React apps",d:"End to end -testing"},6:{a:"Flux-architecture and Redux",b:"Many reducers",c:"Communicating with server in a redux application",d:"connect"},7:{a:"React-router",b:"Custom hooks",c:"More about styles",d:"Webpack",e:"Class components, Miscellaneous",f:"Exercises: extending the bloglist"},8:{a:"GraphQL-server",b:"React and GraphQL",c:"Database and user administration",d:"Login and updating the cache",e:"Fragments and subscriptions"},9:{a:"Background and introduction",b:"First steps with Typescript",c:"Typing the express app",d:"React with types"},10:{a:"Introduction to React Native",b:"React Native basics",c:"Communicating with server",d:"Testing and extending our application"}},zh:{0:{a:"基础知识",b:"Web 应用的基础设施"},1:{a:"React 简介",b:"JavaScript",c:"组件状态，事件处理",d:"深入React 应用调试"},2:{a:"从渲染集合到模块学习",b:"表单",c:"从服务器获取数据",d:"在服务端将数据Alert出来",e:"给React应用加点样式"},3:{a:"Node.js 与 Express",b:"把应用部署到网上",c:"将数据存入MongoDB",d:"ESLint与代码检查"},4:{a:"从后端结构到测试入门",b:"测试后端应用",c:"用户管理",d:"密钥认证"},5:{a:"完成前台的登录功能",b:"props.children 与 proptypes",c:"测试React 应用",d:"端到端测试"},6:{a:"Flux架构与Redux",b:"再来点 reducers",c:"在Redux应用中与后端通信",d:"connect方法"},7:{a:"React-router",b:"自定义 hooks",c:"样式进阶",d:"Webpack",e:"各种各样的Class components",f:"练习：扩展你的博客列表"},8:{a:"GraphQL服务器",b:"React 与 GraphQL",c:"数据库与用户管理",d:"登录与更新缓存",e:"Fragments 与 subscriptions"},9:{a:"背景与介绍",b:"Typescript的一小步",c:"Typescript版的express应用",d:"利用Typescript编写React应用"},10:{a:"React Native 介绍",b:"React Native 入门",c:"与服务端通信",d:"测试与扩展我们的应用"}}}},zXXn:function(e,t,a){}}]);
//# sourceMappingURL=836bf4e841fabf12613adcae66869a129245fe4e-fae752fcef8b8910682f.js.map