(function(){'use strict';
 
/* ---------- icons ---------- */
const IC={
 dashboard:'<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
 inspections:'<path d="M16 4h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2.5" width="8" height="4" rx="1"/><path d="m8.5 13.5 2.2 2.2 4.3-4.3"/>',
 hospital:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8.5v7M8.5 12h7"/>',
 emergency:'<polygon points="13 2 4 14 12 14 11 22 20 10 12 10 13 2"/>',
 queueing:'<circle cx="9" cy="7" r="3.2"/><path d="M3 21v-1.5a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4V21"/><path d="M16.5 4.2a3.2 3.2 0 0 1 0 6"/><path d="M21 21v-1.5a4 4 0 0 0-3-3.85"/>',
 judging:'<circle cx="12" cy="8.5" r="5.5"/><path d="M8.2 13 7 21l5-2.8L17 21l-1.2-8"/>',
 search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
 check:'<polyline points="20 6 9 17 4 12"/>',
 x:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
 alert:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="7.5" x2="12" y2="13"/><line x1="12" y1="16.5" x2="12.01" y2="16.5"/>',
 clock:'<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/>',
 wrench:'<path d="M14.5 6.2a4 4 0 0 0-5.4 5.4l-5.1 5.1a2 2 0 1 0 2.8 2.8l5.1-5.1a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.1-2.1z"/>',
 plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
 arrow:'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
 user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
 monitor:'<rect x="2.5" y="3.5" width="19" height="13" rx="2"/><line x1="8" y1="20.5" x2="16" y2="20.5"/><line x1="12" y1="16.5" x2="12" y2="20.5"/>',
 flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',
 play:'<polygon points="6 4 19 12 6 20 6 4"/>',
 maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>',
 list:'<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
 pin:'<path d="M12 21s-7-5.7-7-11a7 7 0 0 1 14 0c0 5.3-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
 zap:'<polygon points="13 2 4 14 12 14 11 22 20 10 12 10 13 2"/>',
 logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
 bolt:'<polygon points="13 2 4 14 12 14 11 22 20 10 12 10 13 2"/>',
 box:'<path d="M21 8v8a2 2 0 0 1-1 1.73l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 16V8a2 2 0 0 1 1-1.73l7-4a2 2 0 0 1 2 0l7 4A2 2 0 0 1 21 8z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
 dots:'<circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/>',
 info:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="11" x2="12" y2="16"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
 chart:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
 award:'<circle cx="12" cy="9" r="6"/><path d="M8.5 14 7 22l5-2.8L17 22l-1.5-8"/>'
};
function icon(n,cls){return '<svg class="'+(cls||'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+(IC[n]||'')+'</svg>';}
 
/* ---------- stations & roles ---------- */
const STATIONS={
 dashboard:{name:'Command Center',short:'Dashboard',icon:'dashboard',color:'#3b4655',dot:'#3b4655'},
 inspections:{name:'Inspections',short:'Inspect',icon:'inspections',color:'#21406a',dot:'#21406a'},
 hospital:{name:'Robot Hospital',short:'Hospital',icon:'hospital',color:'#2c6e6a',dot:'#2c6e6a'},
 spares:{name:'Spare Parts',short:'Spares',icon:'box',color:'#5b5378',dot:'#5b5378'},
 queueing:{name:'Queueing',short:'Queue',icon:'queueing',color:'#272d37',dot:'#272d37'},
 judging:{name:'Judging',short:'Judging',icon:'judging',color:'#8d2f33',dot:'#8d2f33'}
};
const ROLE_ACCESS={
 'Lead / Admin':{edit:['inspections','hospital','spares','queueing','judging'],viewJudge:true},
 'Inspector':{edit:['inspections'],viewJudge:false},
 'Robot Hospital Tech':{edit:['hospital'],viewJudge:false},
 'Spare Parts':{edit:['spares'],viewJudge:false},
 'Queuer':{edit:['queueing'],viewJudge:false},
 'Judge':{edit:['judging'],viewJudge:true}
};
 
/* ---------- login personas (fast login) ---------- */
const USERS=[
 {name:'Caitlin',pass:'admin2026',role:'Lead / Admin',home:'dashboard',c:'#3b4655',desc:'Full access \u00b7 every station'},
 {name:'Roberto',pass:'inspect',role:'Inspector',home:'inspections',c:'#21406a',desc:'Robot inspections'},
 {name:'Franky',pass:'repair',role:'Robot Hospital Tech',home:'hospital',c:'#2c6e6a',desc:'Robot Hospital \u00b7 repairs and field fixes'},
 {name:'Doc',pass:'parts',role:'Spare Parts',home:'spares',c:'#5b5378',desc:'Spare parts desk'},
 {name:'Emily',pass:'queue',role:'Queuer',home:'queueing',c:'#272d37',desc:'Match queueing'},
 {name:'Chucks',pass:'judge',role:'Judge',home:'judging',c:'#8d2f33',desc:'Judging panel'}
];
 
/* ---------- volunteer pool ---------- */
const VOLUNTEERS=[
 {n:'Caitlin',r:'Lead / Admin',c:'#3b4655'},
 {n:'Roberto',r:'Inspector',c:'#21406a'},
 {n:'Diego Morales',r:'Inspector',c:'#21406a'},
 {n:'Yuki Tanaka',r:'Inspector',c:'#21406a'},
 {n:'Omar Haddad',r:'Inspector',c:'#21406a'},
 {n:'Franky',r:'Robot Hospital Tech',c:'#2c6e6a'},
 {n:'Aisha Rahman',r:'Robot Hospital Tech',c:'#2c6e6a'},
 {n:'Arjun Patel',r:'Robot Hospital Tech',c:'#2c6e6a'},
 {n:'Grace Mwangi',r:'Robot Hospital Tech',c:'#2c6e6a'},
 {n:'Doc',r:'Spare Parts',c:'#5b5378'},
 {n:'Min-jun Kim',r:'Robot Hospital',c:'#c2563a'},
 {n:'Kwame Osei',r:'Robot Hospital',c:'#c2563a'},
 {n:'Lucas Silva',r:'Robot Hospital',c:'#c2563a'},
 {n:'Emily',r:'Queuer',c:'#272d37'},
 {n:'Sofia Rossi',r:'Queuer',c:'#272d37'},
 {n:'Nadia Petrova',r:'Queuer',c:'#272d37'},
 {n:'Chucks',r:'Judge',c:'#8d2f33'},
 {n:'Mei Lin Chen',r:'Judge',c:'#8d2f33'},
 {n:'Priya Sharma',r:'Judge',c:'#8d2f33'}
];
function volColor(name){const v=VOLUNTEERS.find(x=>x.n===name);return v?v.c:'#6b7585';}
 
/* ---------- countries (lowercase ISO for flagcdn) ---------- */
const COUNTRIES=[
 ['us','United States'],['ca','Canada'],['mx','Mexico'],['br','Brazil'],['ar','Argentina'],['cl','Chile'],['co','Colombia'],['pe','Peru'],['ve','Venezuela'],['ec','Ecuador'],
 ['uy','Uruguay'],['py','Paraguay'],['bo','Bolivia'],['cr','Costa Rica'],['pa','Panama'],['gt','Guatemala'],['hn','Honduras'],['sv','El Salvador'],['ni','Nicaragua'],['do','Dominican Rep.'],
 ['jm','Jamaica'],['tt','Trinidad & Tobago'],['bs','Bahamas'],['bb','Barbados'],['ht','Haiti'],
 ['gb','United Kingdom'],['ie','Ireland'],['fr','France'],['de','Germany'],['es','Spain'],['pt','Portugal'],['it','Italy'],['nl','Netherlands'],['be','Belgium'],['lu','Luxembourg'],
 ['ch','Switzerland'],['at','Austria'],['se','Sweden'],['no','Norway'],['dk','Denmark'],['fi','Finland'],['is','Iceland'],['pl','Poland'],['cz','Czechia'],['sk','Slovakia'],
 ['hu','Hungary'],['ro','Romania'],['bg','Bulgaria'],['gr','Greece'],['hr','Croatia'],['si','Slovenia'],['rs','Serbia'],['ba','Bosnia & Herz.'],['mk','North Macedonia'],['al','Albania'],
 ['me','Montenegro'],['ua','Ukraine'],['by','Belarus'],['lt','Lithuania'],['lv','Latvia'],['ee','Estonia'],['md','Moldova'],['mt','Malta'],['cy','Cyprus'],['xk','Kosovo'],
 ['ng','Nigeria'],['gh','Ghana'],['ke','Kenya'],['za','South Africa'],['eg','Egypt'],['ma','Morocco'],['tn','Tunisia'],['dz','Algeria'],['et','Ethiopia'],['tz','Tanzania'],
 ['ug','Uganda'],['rw','Rwanda'],['sn','Senegal'],['ci','C\u00f4te d\u2019Ivoire'],['cm','Cameroon'],['zm','Zambia'],['zw','Zimbabwe'],['bw','Botswana'],['na','Namibia'],['mz','Mozambique'],
 ['ml','Mali'],['bf','Burkina Faso'],['ne','Niger'],['mw','Malawi'],['ao','Angola'],['mg','Madagascar'],['sd','Sudan'],['ly','Libya'],['so','Somalia'],['bj','Benin'],
 ['tg','Togo'],['gm','Gambia'],['mr','Mauritania'],['ga','Gabon'],['mu','Mauritius'],['cd','DR Congo'],['cg','Congo'],['sl','Sierra Leone'],['lr','Liberia'],['sz','Eswatini'],
 ['sa','Saudi Arabia'],['ae','United Arab Emirates'],['qa','Qatar'],['kw','Kuwait'],['bh','Bahrain'],['om','Oman'],['jo','Jordan'],['lb','Lebanon'],['il','Israel'],['ps','Palestine'],
 ['iq','Iraq'],['ir','Iran'],['tr','Turkey'],['ye','Yemen'],['sy','Syria'],
 ['in','India'],['pk','Pakistan'],['bd','Bangladesh'],['lk','Sri Lanka'],['np','Nepal'],['bt','Bhutan'],['mv','Maldives'],['af','Afghanistan'],
 ['cn','China'],['jp','Japan'],['kr','South Korea'],['tw','Taiwan'],['hk','Hong Kong'],['mn','Mongolia'],
 ['id','Indonesia'],['my','Malaysia'],['sg','Singapore'],['th','Thailand'],['vn','Vietnam'],['ph','Philippines'],['mm','Myanmar'],['kh','Cambodia'],['la','Laos'],['bn','Brunei'],['tl','Timor-Leste'],
 ['kz','Kazakhstan'],['uz','Uzbekistan'],['tm','Turkmenistan'],['kg','Kyrgyzstan'],['tj','Tajikistan'],['az','Azerbaijan'],['ge','Georgia'],['am','Armenia'],
 ['au','Australia'],['nz','New Zealand'],['fj','Fiji'],['pg','Papua New Guinea'],['ws','Samoa'],['to','Tonga'],['vu','Vanuatu'],['sb','Solomon Islands'],['ki','Kiribati'],['fm','Micronesia'],
 ['ru','Russia'],['li','Liechtenstein'],['mc','Monaco'],['ad','Andorra'],['sm','San Marino'],['va','Vatican'],
 ['dm','Dominica'],['lc','Saint Lucia'],['vc','St. Vincent'],['ag','Antigua & Barbuda'],['kn','St. Kitts & Nevis'],['gd','Grenada'],['bz','Belize'],['gy','Guyana'],['sr','Suriname'],
 ['cv','Cabo Verde'],['st','S\u00e3o Tom\u00e9 & Pr.'],['km','Comoros'],['sc','Seychelles'],['dj','Djibouti'],['er','Eritrea'],['ss','South Sudan'],['td','Chad'],['cf','Central African Rep.'],['gn','Guinea'],
 ['gw','Guinea-Bissau'],['gq','Equatorial Guinea'],['bi','Burundi'],['ls','Lesotho'],['nr','Nauru'],['pw','Palau'],['mh','Marshall Islands'],['tv','Tuvalu']
];
 
/* ---------- deterministic seed ---------- */
function rnd(i){const x=Math.sin(i*97.13+3.7)*10000;return x-Math.floor(x);}
 
/* ---------- inspections data ---------- */
const INSP_ITEMS=['Dimensions','Material Used','Code','Safety','Lights'];
const inspectorPool=VOLUNTEERS.filter(v=>v.r==='Inspector').map(v=>v.n);
function deriveOverall(items){
 const p=items.filter(x=>x==='pass').length,f=items.filter(x=>x==='fail').length,pe=items.filter(x=>x==='pending').length;
 if(pe===items.length)return 'Not started';
 if(p===items.length)return 'Passed';
 if(f>0&&pe===0)return 'Reinspection';
 return 'In progress';
}
const TEAMS=COUNTRIES.map(function(c,i){
 const roll=rnd(i*3+1);
 let items;
 if(roll<0.50){items=INSP_ITEMS.map(function(){return 'pass';});}
 else if(roll<0.70){items=INSP_ITEMS.map(function(){return 'pending';});}
 else{items=INSP_ITEMS.map(function(_,j){const rr=rnd(i*10+j+5);return rr<0.6?'pass':(rr<0.76?'fail':'pending');});}
 const overall=deriveOverall(items);
 const inspector=overall==='Not started'?null:inspectorPool[Math.floor(rnd(i*7+2)*inspectorPool.length)];
 return {id:101+i,code:c[0],country:c[1],pit:'Pit '+String.fromCharCode(65+(i%6))+(1+(i%19)),items:items,overall:overall,inspector:inspector};
});
function teamByCode(code){return TEAMS.find(function(t){return t.code===code;});}
 
/* ---------- robot hospital tickets ---------- */
const TICKETS=[
 {id:'RH241',code:'ng',team:'Nigeria',iss:'Drive motor controller overheating, intermittent cut outs under load',type:'Mechanical',pri:'high',st:'In progress',tech:'Franky',open:34,log:[['Opened, flagged at the queue',34],['Franky claimed the ticket',28],['Swapped motor controller, bench testing now',9]]},
 {id:'RH238',code:'br',team:'Brazil',iss:'Pneumatics leak at the main manifold, system won\u2019t hold pressure',type:'Mechanical',pri:'high',st:'Waiting',tech:'Aisha Rahman',open:52,log:[['Opened at inspection recheck',52],['Diagnosed cracked fitting',40],['Logged a spare part request',24]]},
 {id:'RH236',code:'in',team:'India',iss:'Encoder cable intermittent, odometry drift on one side',type:'Mechanical',pri:'normal',st:'In progress',tech:'Arjun Patel',open:41,log:[['Opened by pit crew',41],['Arjun reseating connectors',15]]},
 {id:'RH240',code:'ke',team:'Kenya',iss:'Loose chain on left drive, skipping teeth',type:'Mechanical',pri:'normal',st:'Waiting',tech:null,open:18,log:[['Opened by queueing crew',18]]},
 {id:'RH235',code:'de',team:'Germany',iss:'Firmware flash failed mid update, controller bricked',type:'Software',pri:'high',st:'In progress',tech:'Grace Mwangi',open:47,log:[['Opened, robot unresponsive',47],['Grace reflashing bootloader',12]]},
 {id:'RH239',code:'fr',team:'France',iss:'Bumper bracket bent, doesn\u2019t meet the frame perimeter rule',type:'Machine shop',pri:'normal',st:'Waiting',tech:'Aisha Rahman',open:29,log:[['Opened at inspection',29],['Filing a replacement bracket',16]]},
 {id:'RH242',code:'mx',team:'Mexico',iss:'Intermittent brownout, suspect battery connector resistance',type:'Mechanical',pri:'normal',st:'Waiting',tech:null,open:9,log:[['Opened by pit crew',9]]},
 {id:'RH237',code:'za',team:'South Africa',iss:'Vision camera mount cracked, field of view shifting',type:'Machine shop',pri:'low',st:'Waiting',tech:null,open:23,log:[['Opened by team',23]]},
 {id:'RH233',code:'tr',team:'Turkey',iss:'Bumper detached during the last match, reattach and reinforce',type:'Machine shop',pri:'normal',st:'Done',tech:'Grace Mwangi',open:64,res:'Riveted the bracket and added a gusset. Rechecked OK.',log:[['Opened post match',64],['Grace reinforced bracket',40],['Done, passed recheck',31]]},
 {id:'RH231',code:'jp',team:'Japan',iss:'Preemptive check, minor wheel wobble on the rear module',type:'Mechanical',pri:'low',st:'Done',tech:'Arjun Patel',open:80,res:'Tightened set screws, retrued the wheel. Good to go.',log:[['Opened by team',80],['Done',52]]},
 {id:'RH243',code:'eg',team:'Egypt',iss:'Pneumatic cylinder seized, arm won\u2019t actuate',type:'Mechanical',pri:'high',st:'Waiting',tech:null,open:6,log:[['Opened, urgent before Q36',6]]},
 {id:'RH234',code:'se',team:'Sweden',iss:'Loose wiring harness, intermittent comms to the expansion hub',type:'Mechanical',pri:'normal',st:'In progress',tech:'Grace Mwangi',open:38,log:[['Opened by pit crew',38],['Grace rerouting harness',14]]},
 {id:'RH244',code:'gb',team:'United Kingdom',iss:'Gripper servo stripped, replace and recalibrate',type:'Mechanical',pri:'low',st:'Waiting',tech:null,open:13,log:[['Opened by team',13]]},
 {id:'RH232',code:'au',team:'Australia',iss:'Battery not holding charge, swap and log voltage',type:'Mechanical',pri:'normal',st:'Done',tech:'Aisha Rahman',open:71,res:'Swapped to a charged pack, retired the old battery.',log:[['Opened by team',71],['Done',44]]}
];
 
/* ---------- flying squad (match critical) ---------- */
const T0=Date.now(), MIN=60000;
// Match critical field repairs and in-progress next-match countdowns fold into the Robot Hospital.
TICKETS.push(
 {id:'RH246',code:'ph',team:'Philippines',iss:'Robot won\u2019t power on at the queue, main breaker keeps tripping',type:'Mechanical',pri:'high',st:'In progress',tech:'Franky',open:7,match:'Q36',matchAt:T0+2.4*MIN,log:[['Flagged at field entry',7],['Franky on it at the queue',3]]},
 {id:'RH247',code:'ca',team:'Canada',iss:'Intake roller jammed, needs a fast clear before the match',type:'Mechanical',pri:'high',st:'In progress',tech:'Min-jun Kim',open:5,match:'Q37',matchAt:T0+9*MIN,log:[['Jam reported before queue',5],['Min-jun clearing it',2]]},
 {id:'RH248',code:'id',team:'Indonesia',iss:'Controller pairing dropped, repair and verify link',type:'Software',pri:'high',st:'Waiting',tech:null,open:4,match:'Q38',matchAt:T0+15*MIN,log:[['Pairing dropped at field',4]]}
);
[['RH241','Q36',T0+4*MIN],['RH236','Q39',T0+22*MIN],['RH235','Q37',T0+9*MIN],['RH234','Q40',T0+28*MIN]].forEach(function(s){var t=TICKETS.find(function(x){return x.id===s[0];});if(t){t.match=s[1];t.matchAt=s[2];}});
 
/* ---------- matches / queueing ---------- */
const MATCHES=[
 {q:'Q35',at:T0-8*MIN,table:4,played:true,A:['us','ke','fr'],B:['de','br','in']},
 {q:'Q36',at:T0+2.4*MIN,table:5,A:['mx','jp','ng'],B:['gb','se','eg']},
 {q:'Q37',at:T0+9*MIN,table:1,A:['ca','au','ph'],B:['kr','za','it']},
 {q:'Q38',at:T0+15*MIN,table:2,A:['nl','ar','ma'],B:['es','pl','tr']},
 {q:'Q39',at:T0+22*MIN,table:3,A:['gh','no','cl'],B:['et','vn','pt']},
 {q:'Q40',at:T0+29*MIN,table:4,A:['us','id','sa'],B:['ua','pe','dk']},
 {q:'Q41',at:T0+36*MIN,table:5,A:['jp','co','cz'],B:['ke','ro','fi']},
 {q:'Q42',at:T0+43*MIN,table:2,A:['br','mx','at'],B:['fr','gr','rs']}
];
const QSTATES=['Not queued','Queued','Missing'];
const queueState={};
MATCHES.forEach(function(m){m.A.concat(m.B).forEach(function(code){queueState[m.q+'_'+code]='Not queued';});});
function setQ(q,code,s){queueState[q+'_'+code]=s;}
['mx','jp','ng','gb','se'].forEach(function(c){setQ('Q36',c,'Queued');});
setQ('Q36','eg','Missing');
['ca','au','ph','kr','za','it'].forEach(function(c){setQ('Q37',c,'Queued');});
['nl','ar','es','pl'].forEach(function(c){setQ('Q38',c,'Queued');});
 
/* ---------- judging ---------- */
const JCRIT=['Engineering Doc','Robot Design','Innovation','Teamwork & GP','Global Impact'];
const JUDGE_TEAMS=[
 {code:'jp',scores:[4.5,5,4.5,4,4.5],judge:'Chucks',note:'Exceptional engineering notebook, clear iteration log.'},
 {code:'de',scores:[4,4.5,4,4.5,4],judge:'Mei Lin Chen',note:''},
 {code:'us',scores:[4.5,4,4,4,4.5],judge:'Chucks',note:'Strong outreach; wildfire detection demo stood out.'},
 {code:'ke',scores:[4,4,4.5,5,4.5],judge:'Priya Sharma',note:'Outstanding GP \u00b7 helped two teams in the pits.'},
 {code:'in',scores:[4,4.5,4.5,4,4],judge:'Mei Lin Chen',note:''},
 {code:'br',scores:[3.5,4,4,4.5,4],judge:'Chucks',note:''},
 {code:'kr',scores:[4.5,4.5,4,4,4.5],judge:'Priya Sharma',note:'Host nation \u00b7 very polished design review.'},
 {code:'fr',scores:[4,3.5,4,4,3.5],judge:'Mei Lin Chen',note:''},
 {code:'ng',scores:[3.5,4,4.5,4.5,5],judge:'Chucks',note:'Compelling local-impact story around wildfire response.'},
 {code:'mx',scores:[4,4,3.5,4,4],judge:'Priya Sharma',note:''}
];
JUDGE_TEAMS.forEach(function(r){r.scores=r.scores.map(function(v){return v*2;});});
const JMAX=10;
const AWARDS=['Albert Einstein Award for International Excellence','FIRST Global Grand Challenge Award','Zhang Heng Award for Engineering Design','Ustad Ahmad Lahori Award for Innovation in Engineering','Dr. Mae Jemison Award for International Unity','Raja\u00e2 Cherkaoui El Moursli Award for Courageous Achievement','Sofia Kovalevskaya Award for International Journey','Al-Khwarizmi Award for Outstanding Supporter','Francisco Jos\u00e9 de Caldas Award for Sustainable Excellence','Gracious Professionalism Award'];
JUDGE_TEAMS.push(
 {code:'ca',scores:[8,9,8,9,8],judge:'Mei Lin Chen',note:'Clean modular drivetrain, well documented.',awards:[]},
 {code:'au',scores:[9,8,8,8,9],judge:'Chucks',note:'',awards:[]},
 {code:'gb',scores:[8,8,9,8,8],judge:'Priya Sharma',note:'Creative fire suppression mechanism.',awards:[]},
 {code:'it',scores:[7,8,8,9,8],judge:'Mei Lin Chen',note:'',awards:[]},
 {code:'es',scores:[8,7,8,8,9],judge:'Chucks',note:'',awards:[]},
 {code:'nl',scores:[9,9,8,8,7],judge:'Priya Sharma',note:'Strong engineering notebook.',awards:[]},
 {code:'pl',scores:[7,8,7,8,8],judge:'Mei Lin Chen',note:'',awards:[]},
 {code:'se',scores:[8,8,8,7,8],judge:'Chucks',note:'',awards:[]},
 {code:'eg',scores:[8,7,9,8,8],judge:'Priya Sharma',note:'Resourceful build with limited parts.',awards:[]},
 {code:'za',scores:[7,8,8,9,9],judge:'Mei Lin Chen',note:'Outstanding community outreach story.',awards:[]},
 {code:'ph',scores:[8,8,7,8,8],judge:'Chucks',note:'',awards:[]},
 {code:'id',scores:[7,7,8,8,8],judge:'Priya Sharma',note:'',awards:[]},
 {code:'ua',scores:[9,9,9,8,10],judge:'Chucks',note:'Remarkable resilience and teamwork under hardship.',awards:[]},
 {code:'cl',scores:[7,8,8,8,7],judge:'Mei Lin Chen',note:'',awards:[]}
);
JUDGE_TEAMS.forEach(function(r){if(!r.awards)r.awards=[];});
var _aw={jp:[2,3],ke:[4,9],ng:[8,4],kr:[0],us:[4],ua:[5,9],nl:[2],za:[4]};
Object.keys(_aw).forEach(function(c){var r=JUDGE_TEAMS.find(function(x){return x.code===c;});if(r)r.awards=_aw[c].map(function(i){return AWARDS[i];});});
 
/* ---------- activity feed ---------- */
const ACTIVITY=[
 {ic:'check',tone:'ok',t:'Japan passed full inspection',s:'All five categories cleared',m:4,station:'inspections'},
 {ic:'bolt',tone:'hot',t:'Philippines pulled to the Robot Hospital',s:'Will not power on at the queue before Q36',m:7,station:'hospital'},
 {ic:'flag',tone:'mut',t:'Egypt marked missing for Q36',s:'Queuer flagged a no show at field',m:9,station:'queueing'},
 {ic:'box',tone:'info',t:'Brazil requested a spare part',s:'RH238 \u00b7 pneumatics fitting',m:12,station:'spares'},
 {ic:'judging',tone:'bad',t:'Kenya judging session complete',s:'Priya Sharma submitted scores',m:18,station:'judging'},
 {ic:'check',tone:'ok',t:'Kenya passed inspection',s:'Cleared on recheck',m:24,station:'inspections'},
 {ic:'wrench',tone:'ok',t:'Turkey repair done',s:'RH233 \u00b7 bumper reattached',m:31,station:'hospital'}
];
 
/* ---------- live UI state ---------- */
const state={station:'dashboard',role:'Lead / Admin',user:null,inspFilter:'all',inspView:'board',inspQuery:'',hospPri:'all',hospQuery:'',emgFilter:'active',spareCat:'all',spareQuery:''};
let intakeType='Mechanical';
 
/* ---------- helpers ---------- */
function $(id){return document.getElementById(id);}
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function flag(code,cls){return '<img class="flag '+(cls||'')+'" loading="lazy" src="https://flagcdn.com/'+code+'.svg" alt="" onerror="this.style.visibility=\'hidden\'">';}
function initials(name){const p=String(name).trim().split(/\s+/);return (p[0][0]+(p[1]?p[1][0]:'')).toUpperCase();}
function avatar(name,cls,extra){return '<span class="avatar '+(cls||'')+'" style="background:'+volColor(name)+';'+(extra||'')+'">'+initials(name)+'</span>';}
function miniAv(name){return '<span class="mini-av" style="background:'+volColor(name)+'">'+initials(name)+'</span>';}
function ago(m){m=Math.round(m);if(m<1)return 'just now';if(m<60)return m+'m ago';const h=Math.floor(m/60),mm=m%60;return h+'h'+(mm?' '+mm+'m':'')+' ago';}
function fmtAge(m){if(m<60)return m+'m';const h=Math.floor(m/60),mm=m%60;return h+'h'+(mm?mm+'m':'');}
function fmtCD(ms){if(ms<=0)return 'NOW';const s=Math.floor(ms/1000),m=Math.floor(s/60),ss=s%60;if(m>=60){const h=Math.floor(m/60),mm=m%60;return h+':'+String(mm).padStart(2,'0')+':'+String(ss).padStart(2,'0');}return String(m).padStart(2,'0')+':'+String(ss).padStart(2,'0');}
function clockHM(ts){const d=new Date(ts);return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');}
function cdTone(ms){if(ms<=180000)return 't-crit';if(ms<=480000)return 't-warn';return 't-ok';}
function toast(msg,accTxt){const t=$('toaster');const d=document.createElement('div');d.className='toast';d.innerHTML=icon('check')+'<span>'+esc(msg)+'</span>'+(accTxt?'<span class="t-acc">'+esc(accTxt)+'</span>':'');t.appendChild(d);setTimeout(function(){d.style.transition='opacity .3s,transform .3s';d.style.opacity='0';d.style.transform='translateY(8px)';setTimeout(function(){d.remove();},300);},2600);}
function actor(){return state.user?state.user.name:'Volunteer';}
function logActivity(o){o.m=0;ACTIVITY.unshift(o);if(ACTIVITY.length>24)ACTIVITY.pop();const an=$('act-n');if(an)an.textContent=ACTIVITY.length;}
 
const TONE={ok:['var(--ok-tint)','var(--ok)'],hot:['var(--hot-tint)','var(--hot)'],info:['var(--info-tint)','var(--info)'],bad:['var(--bad-tint)','var(--bad)'],warn:['var(--warn-tint)','var(--warn)'],mut:['var(--surface-3)','var(--text-2)'],acc:['var(--accent-tint)','var(--accent-deep)']};
 
/* ---------- access ---------- */
function access(){return ROLE_ACCESS[state.role]||{edit:[],viewJudge:false};}
function canEdit(st){return access().edit.indexOf(st)>=0;}
function requireEdit(st){if(canEdit(st))return true;toast('View only \u00b7 '+(STATIONS[st]?STATIONS[st].name:st)+' is handled by another role');return false;}
 
/* ---------- badges ---------- */
function overallBadge(s){const m={'Passed':'bg-ok','In progress':'bg-warn','Not started':'bg-mut','Reinspection':'bg-bad'};return '<span class="badge '+(m[s]||'bg-mut')+'"><span class="b-dot"></span>'+s+'</span>';}
function priBadge(p){const m={high:['bg-bad','High'],normal:['bg-warn','Normal'],low:['bg-info','Low']};const x=m[p]||m.normal;return '<span class="badge '+x[0]+'"><span class="b-dot"></span>'+x[1]+'</span>';}
function ticketBadge(st){const m={'Waiting':'bg-mut','In progress':'bg-warn','Done':'bg-ok'};return '<span class="badge '+(m[st]||'bg-mut')+'"><span class="b-dot"></span>'+st+'</span>';}
function typeBadge(tp){if(!tp)return '';return '<span class="badge bg-acc"><span class="b-dot"></span>'+esc(tp)+'</span>';}
function emgBadge(st){const m={'On it':'bg-warn','Waiting':'bg-bad','Resolved':'bg-ok','Will not make match':'bg-mut'};return '<span class="badge '+(m[st]||'bg-mut')+'"><span class="b-dot"></span>'+st+'</span>';}
function qBadge(s){const m={'Not queued':'bg-mut','Queued':'bg-info','Missing':'bg-bad'};return '<span class="badge '+(m[s]||'bg-mut')+'"><span class="b-dot"></span>'+s+'</span>';}
function checklistBar(items){return '<div class="checklist">'+items.map(function(x){return '<span class="chk '+(x==='pass'?'pass':x==='fail'?'fail':'pend')+'"></span>';}).join('')+'</div>';}
 
/* ---------- navigation ---------- */
const CORE=['dashboard','inspections','hospital','spares','queueing','judging'];
const LOCK_SVG='<svg class="ni-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
function buildNav(){
 const a=access();
 let h='<div class="nav-label">Operations</div>';
 CORE.forEach(function(k){
   const s=STATIONS[k];const locked=(k==='judging'&&!a.viewJudge);
   h+='<button class="nav-item'+(locked?' locked':'')+'" data-action="go" data-go="'+k+'">'+icon(s.icon,'ni-ic')+'<span class="ni-tx">'+s.name+'</span>'+(locked?LOCK_SVG:'<span class="ni-count" data-count="'+k+'"></span>')+'</button>';
 });
 $('nav').innerHTML=h;
 let b='';
 CORE.forEach(function(k){if(k==='judging'&&!a.viewJudge)return;const s=STATIONS[k];b+='<button class="bn-item" data-action="go" data-go="'+k+'">'+icon(s.icon)+'<span class="bn-tx">'+s.short+'</span></button>';});
 $('botnav').innerHTML=b;
 updateNavCounts();setActiveNav(state.station);
}
function updateNavCounts(){
 const c={inspections:TEAMS.filter(function(t){return t.overall!=='Passed';}).length,hospital:TICKETS.filter(function(t){return t.st!=='Done';}).length,spares:SPARES.filter(function(p){return p.inv<=0;}).length,queueing:MATCHES.filter(function(m){return !m.played;}).length};
 document.querySelectorAll('[data-count]').forEach(function(el){const k=el.getAttribute('data-count');el.textContent=(c[k]!=null?c[k]:'');});
}
function setActiveNav(station){document.querySelectorAll('.nav-item,.bn-item').forEach(function(el){el.classList.toggle('active',el.getAttribute('data-go')===station);});}
function go(station){
 const a=access();
 if(station==='judging'&&!a.viewJudge){toast('Judging is limited to judges and admins');return;}
 state.station=station;$('app').setAttribute('data-station',station);setActiveNav(station);
 document.querySelectorAll('.view').forEach(function(v){v.classList.toggle('is-active',v.id==='view-'+station);});
 closeDrawer();closeSearch();closeUserMenu();
 render(station);window.scrollTo(0,0);
}
function render(station){({dashboard:renderDashboard,inspections:renderInspections,hospital:renderHospital,spares:renderSpares,queueing:renderQueue,judging:renderJudging}[station]||function(){})();}
 
/* ---------- KPI + page-head helpers ---------- */
function kpi(n,l,tone){return '<div class="kpi'+(tone?' tone-'+tone:'')+'"><div class="k-n">'+n+'</div><div class="k-l">'+l+'</div></div>';}
function phead(station,title,sub,kpis){const s=STATIONS[station];return '<div class="phead"><div><div class="eyebrow"><span class="eb-dot"></span>'+s.name+'</div><h1 class="ptitle">'+title+'</h1><p class="psub">'+sub+'</p></div><div class="kpis">'+kpis+'</div></div>';}
 
/* ================= DASHBOARD ================= */
function statCard(k,big,bigsm,metas,locked){
 const s=STATIONS[k];
 return '<button class="station-card" data-action="go" data-go="'+k+'"><span class="sc-bar" style="background:'+s.color+'"></span><div class="sc-top"><span class="sc-ic" style="background:'+s.color+'">'+icon(s.icon)+'</span><div><div class="sc-name">'+s.name+'</div><div class="sc-role">'+(locked?'View limited':'Tap to open')+'</div></div></div><div class="sc-big">'+big+(bigsm?' <small>'+bigsm+'</small>':'')+'</div><div class="sc-meta">'+metas+'</div></button>';
}
function feedRow(a){const t=TONE[a.tone]||TONE.mut;return '<div class="feed-row"><span class="feed-ic" style="background:'+t[0]+';color:'+t[1]+'">'+icon(a.ic)+'</span><div class="feed-main"><div class="feed-t">'+esc(a.t)+'</div><div class="feed-s">'+esc(a.s)+'</div></div><span class="feed-time">'+ago(a.m)+'</span></div>';}
function renderDashboard(){
 const total=TEAMS.length;
 const passed=TEAMS.filter(function(t){return t.overall==='Passed';}).length;
 const inProg=TEAMS.filter(function(t){return t.overall==='In progress';}).length;
 const notStarted=TEAMS.filter(function(t){return t.overall==='Not started';}).length;
 const reins=TEAMS.filter(function(t){return t.overall==='Reinspection';}).length;
 const openT=TICKETS.filter(function(t){return t.st!=='Done';}).length;
 const highT=TICKETS.filter(function(t){return t.pri==='high'&&t.st!=='Done';}).length;
 const hospInprog=TICKETS.filter(function(t){return t.st==='In progress';}).length;
 const spareLow=SPARES.filter(function(p){return p.inv<=0;}).length;
 const matchCrit=TICKETS.filter(function(t){return t.matchAt&&t.st!=='Done'&&(t.matchAt-Date.now())<=10*MIN;}).length;
 const inProgMatch=TICKETS.filter(function(t){return t.matchAt&&t.st!=='Done';}).length;
 const upcoming=MATCHES.filter(function(m){return !m.played;}).length;
 const missing=Object.keys(queueState).filter(function(k){return queueState[k]==='Missing';}).length;
 const a=access();
 const hello=state.user?('Welcome, '+esc(state.user.name)):'Operations overview';
 
 let html=phead('dashboard',hello,'Live status across inspections, the Robot Hospital, spare parts, queueing and judging \u00b7 Incheon, day 2 qualifications.',
   kpi(total,'Teams','acc')+kpi(passed,'Inspection passed','ok')+kpi(openT,'In hospital','warn')+kpi(matchCrit,'Match critical',matchCrit?'bad':'ok')+kpi(missing,'Missing now','bad'));
 
 html+='<div class="stationgrid">';
 html+=statCard('inspections',passed,'/ '+total+' passed','<span class="badge bg-warn"><span class="b-dot"></span>'+inProg+' in progress</span><span class="badge bg-mut"><span class="b-dot"></span>'+notStarted+' to go</span>');
 html+=statCard('hospital',openT,'open tickets','<span class="badge bg-bad"><span class="b-dot"></span>'+highT+' high</span>'+(matchCrit?'<span class="badge bg-hot"><span class="b-dot"></span>'+matchCrit+' match critical</span>':'<span class="badge bg-info"><span class="b-dot"></span>'+hospInprog+' in progress</span>'));
 html+=statCard('spares',spareLow,'out of stock','<span class="badge bg-mut"><span class="b-dot"></span>'+SPARES.length+' parts</span><span class="badge bg-mut"><span class="b-dot"></span>'+kitsOpen+' kits open</span>');
 html+=statCard('queueing',upcoming,'matches up','<span class="badge '+(missing?'bg-bad':'bg-ok')+'"><span class="b-dot"></span>'+missing+' missing</span><span class="badge bg-mut"><span class="b-dot"></span>5 tables</span>');
 html+=statCard('judging',JUDGE_TEAMS.length,'on slate','<span class="badge bg-mut"><span class="b-dot"></span>3 judges</span>'+(a.viewJudge?'':'<span class="badge bg-mut"><span class="b-dot"></span>restricted</span>'),!a.viewJudge);
 html+='</div>';
 
 html+='<div class="dash-grid">';
 // activity
 html+='<div class="span-8"><div class="panel"><div class="panel-h"><span class="ph-ic" style="background:var(--accent)">'+icon('info')+'</span><div><h3>Live activity</h3><div class="ph-sub">Across all stations</div></div><div class="ph-act"><button class="link-arrow" data-action="activity-open">View all '+icon('arrow')+'</button></div></div><div class="feed">'+ACTIVITY.slice(0,7).map(feedRow).join('')+'</div></div></div>';
 // in-shop teams and their next match
 const eactive=TICKETS.filter(function(t){return t.matchAt&&t.st!=='Done';}).sort(function(x,y){return x.matchAt-y.matchAt;});
 let tick=eactive.map(function(t){const ms=t.matchAt-Date.now();const crit=cdTone(ms)==='t-crit';return '<div class="ticker-row'+(crit?' urgent':'')+'" data-action="open-ticket" data-id="'+t.id+'"><span class="tk-clock" data-countdown="'+t.matchAt+'">'+fmtCD(ms)+'</span><div class="tk-mid"><div class="tk-team">'+flag(t.code,'sm')+esc(t.team)+' <span style="color:var(--text-3);font-weight:500">'+(t.match||'')+'</span></div><div class="tk-iss">'+esc(t.iss)+'</div></div></div>';}).join('');
 if(!tick)tick='<div class="empty" style="padding:30px 10px"><div class="e-t">All clear</div><div>No teams waiting on a match</div></div>';
 html+='<div class="span-4"><div class="panel"><div class="panel-h"><span class="ph-ic" style="background:#2c6e6a">'+icon('emergency')+'</span><div><h3>In the shop</h3><div class="ph-sub">Next match countdowns</div></div></div><div class="ticker">'+tick+'</div></div></div>';
 // inspections at a glance
 const segs=[['Passed',passed,'var(--ok)'],['In progress',inProg,'var(--warn)'],['Reinspection',reins,'var(--bad)'],['Not started',notStarted,'var(--text-3)']];
 let bars=segs.map(function(s){const pct=Math.round(s[1]/total*100);return '<div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:5px"><span style="font-weight:500">'+s[0]+'</span><span class="mono" style="color:var(--text-3)">'+s[1]+' &middot; '+pct+'%</span></div><div style="height:8px;border-radius:5px;background:var(--surface-3);overflow:hidden"><div style="height:100%;width:'+pct+'%;background:'+s[2]+';border-radius:5px"></div></div></div>';}).join('');
 html+='<div class="span-6"><div class="panel"><div class="panel-h"><span class="ph-ic" style="background:#21406a">'+icon('inspections')+'</span><div><h3>Inspections at a glance</h3><div class="ph-sub">'+passed+' of '+total+' teams cleared</div></div><div class="ph-act"><button class="link-arrow" data-action="go" data-go="inspections">Open '+icon('arrow')+'</button></div></div><div style="padding:16px">'+bars+'</div></div></div>';
 // up next
 const up=MATCHES.filter(function(m){return !m.played;}).sort(function(x,y){return x.at-y.at;}).slice(0,3);
 let mini=up.map(function(m){const ms=m.at-Date.now();const main=m.table===5;return '<div class="ticker-row" data-action="go" data-go="queueing"><span class="tk-clock" data-countdown="'+m.at+'">'+fmtCD(ms)+'</span><div class="tk-mid"><div class="tk-team">'+m.q+' <span class="tbl-chip '+(main?'main':'')+'" style="margin-left:4px">'+icon('monitor')+'Table '+m.table+(main?' &middot; Main':'')+'</span></div><div class="tk-iss"><span style="color:var(--blue);font-weight:600">Blue</span> vs <span style="color:var(--red);font-weight:600">Red</span> &middot; '+clockHM(m.at)+'</div></div></div>';}).join('');
 html+='<div class="span-6"><div class="panel"><div class="panel-h"><span class="ph-ic" style="background:#272d37">'+icon('queueing')+'</span><div><h3>Up next</h3><div class="ph-sub">Next matches on the field</div></div><div class="ph-act"><button class="link-arrow" data-action="go" data-go="queueing">Queue '+icon('arrow')+'</button></div></div><div class="ticker">'+mini+'</div></div></div>';
 html+='</div>';
 $('view-dashboard').innerHTML=html;
}
 
/* ================= INSPECTIONS ================= */
const INSP_FILTERS=['all','Passed','In progress','Not started','Reinspection'];
function inspFiltered(){
 let list=TEAMS.slice();
 if(state.inspFilter!=='all')list=list.filter(function(t){return t.overall===state.inspFilter;});
 const q=state.inspQuery.trim().toLowerCase();
 if(q)list=list.filter(function(t){return t.country.toLowerCase().indexOf(q)>=0||t.code.indexOf(q)>=0||String(t.id).indexOf(q)>=0||t.pit.toLowerCase().indexOf(q)>=0;});
 list.sort(function(a,b){return a.country.localeCompare(b.country);});
 return list;
}
function tcard(t){return '<div class="tcard" data-action="open-team" data-code="'+t.code+'"><div class="tcard-top">'+flag(t.code,'lg')+'<div class="tcard-id"><div class="tcard-country">'+esc(t.country)+'</div><div class="tcard-meta">#'+t.id+' &middot; '+esc(t.pit)+'</div></div></div>'+checklistBar(t.items)+'<div class="tcard-foot">'+overallBadge(t.overall)+'<span class="tcard-insp">'+(t.inspector?'by '+esc(t.inspector.split(' ')[0]):'unassigned')+'</span></div></div>';}
function paintInspList(){
 const list=inspFiltered();const box=$('insp-list');if(!box)return;
 if(!list.length){box.innerHTML='<div class="empty">'+icon('search')+'<div class="e-t">No teams match</div><div>Try a different filter or search.</div></div>';return;}
 if(state.inspView==='board'){box.innerHTML='<div class="board">'+list.map(tcard).join('')+'</div>';}
 else{
   let rows=list.map(function(t){return '<tr data-action="open-team" data-code="'+t.code+'"><td><div class="cell-team">'+flag(t.code)+esc(t.country)+'</div></td><td class="mono" style="color:var(--text-3)">'+esc(t.pit)+'</td><td style="max-width:140px">'+checklistBar(t.items)+'</td><td>'+overallBadge(t.overall)+'</td><td>'+(t.inspector?'<div style="display:flex;align-items:center;gap:7px">'+miniAv(t.inspector)+esc(t.inspector.split(' ')[0])+'</div>':'<span style="color:var(--text-3)">\u00b7</span>')+'</td></tr>';}).join('');
   box.innerHTML='<table class="ltable"><thead><tr><th>Team</th><th>Pit</th><th>Progress</th><th>Status</th><th>Inspector</th></tr></thead><tbody>'+rows+'</tbody></table>';
 }
}
function renderInspections(){
 const counts={all:TEAMS.length};INSP_FILTERS.slice(1).forEach(function(f){counts[f]=TEAMS.filter(function(t){return t.overall===f;}).length;});
 let chips=INSP_FILTERS.map(function(f){const lbl=f==='all'?'All teams':f;return '<button class="chip'+(state.inspFilter===f?' on':'')+'" data-action="insp-filter" data-f="'+f+'">'+lbl+'<span class="c-n">'+counts[f]+'</span></button>';}).join('');
 let html=phead('inspections','Robot inspection','Five point safety and legality check \u00b7 dimensions, material used, code, safety and lights. Each item is pass, fail, or pending.',
   kpi(counts['Passed'],'Passed','ok')+kpi(counts['In progress'],'In progress','warn')+kpi(counts['Not started'],'Not started','acc')+kpi(counts['Reinspection'],'Reinspection','bad'));
 html+='<div class="toolbar"><div class="seg"><button class="'+(state.inspView==='board'?'on':'')+'" data-action="insp-view" data-v="board">'+icon('grid')+'Board</button><button class="'+(state.inspView==='list'?'on':'')+'" data-action="insp-view" data-v="list">'+icon('list')+'List</button></div><div class="chips">'+chips+'</div><div class="tb-search">'+icon('search')+'<input id="insp-search" type="text" placeholder="Search team, pit\u2026" value="'+esc(state.inspQuery)+'"></div></div>';
 html+='<div id="insp-list"></div>';
 $('view-inspections').innerHTML=html;
 paintInspList();
}
 
/* ================= ROBOT HOSPITAL ================= */
const HOSP_COLS=[['Waiting','#8b94a3'],['In progress','#2c6e6a'],['Done','#3f7d57']];
function hospFiltered(){
 let list=TICKETS.slice();
 if(state.hospPri!=='all')list=list.filter(function(t){return t.pri===state.hospPri;});
 const q=state.hospQuery.trim().toLowerCase();
 if(q)list=list.filter(function(t){return t.team.toLowerCase().indexOf(q)>=0||t.iss.toLowerCase().indexOf(q)>=0||t.id.toLowerCase().indexOf(q)>=0;});
 return list;
}
function ticketCard(t){var cd='';if(t.matchAt&&t.st!=='Done'){var ms=t.matchAt-Date.now();cd='<div class="ticket-cd '+cdTone(ms)+'">'+icon('clock')+'<span class="tc-q">'+(t.match||'next')+'</span><span class="tc-t" data-countdown="'+t.matchAt+'">'+fmtCD(ms)+'</span></div>';}return '<div class="ticket p-'+t.pri+'" data-action="open-ticket" data-id="'+t.id+'"><div class="ticket-top"><span class="ticket-id">'+t.id+'</span>'+priBadge(t.pri)+(t.type?typeBadge(t.type):'')+'</div><div class="ticket-iss"><div style="display:flex;align-items:center;gap:7px;margin-bottom:6px">'+flag(t.code,'sm')+'<b style="font-weight:600">'+esc(t.team)+'</b></div>'+esc(t.iss)+'</div>'+cd+'<div class="ticket-foot"><span class="ticket-tech">'+(t.tech?miniAv(t.tech)+esc(t.tech.split(' ')[0]):'<span style="color:var(--text-3)">Unassigned</span>')+'</span><span class="ticket-age">'+fmtAge(t.open)+'</span></div></div>';}
function paintHospBoard(){
 const list=hospFiltered();const box=$('hosp-board');if(!box)return;
 box.innerHTML=HOSP_COLS.map(function(col){const items=list.filter(function(t){return t.st===col[0];});return '<div class="kcol"><div class="kcol-h"><span class="kc-sw" style="background:'+col[1]+'"></span><span class="kc-name">'+col[0]+'</span><span class="kc-n">'+items.length+'</span></div><div class="kcards">'+(items.length?items.map(ticketCard).join(''):'<div style="padding:14px 6px;text-align:center;color:var(--text-3);font-size:12px">None</div>')+'</div></div>';}).join('');
}
function renderHospital(){
 const open=TICKETS.filter(function(t){return t.st!=='Done';}).length;
 const high=TICKETS.filter(function(t){return t.pri==='high'&&t.st!=='Done';}).length;
 const inprog=TICKETS.filter(function(t){return t.st==='In progress';}).length;
 const crit=TICKETS.filter(function(t){return t.matchAt&&t.st!=='Done'&&(t.matchAt-Date.now())<=10*MIN;}).length;
 const done=TICKETS.filter(function(t){return t.st==='Done';}).length;
 const pf=[['all','All'],['high','High'],['normal','Normal'],['low','Low']];
 let chips=pf.map(function(p){const n=p[0]==='all'?TICKETS.length:TICKETS.filter(function(t){return t.pri===p[0];}).length;return '<button class="chip'+(state.hospPri===p[0]?' on':'')+'" data-action="hosp-filter" data-f="'+p[0]+'">'+p[1]+'<span class="c-n">'+n+'</span></button>';}).join('');
 const ed=canEdit('hospital');
 let html=phead('hospital','Robot Hospital','Helping teams get back on the field. Log a team you are helping, claim a ticket, and watch the countdown to each team\u2019s next match.',
   kpi(open,'Open','warn')+kpi(high,'High priority','bad')+kpi(crit,'Match critical',crit?'bad':'ok')+kpi(done,'Done','ok'));
 html+='<div class="toolbar"><div class="chips">'+chips+'</div>'+(ed?'<button class="btn primary" data-action="hosp-new">'+icon('plus')+'Log help</button>':'')+'<button class="btn" data-action="hosp-display">'+icon('maximize')+'Match board</button><div class="tb-search">'+icon('search')+'<input id="hosp-search" type="text" placeholder="Search ticket, team\u2026" value="'+esc(state.hospQuery)+'"></div></div>';
 html+='<div class="kanban" id="hosp-board"></div>';
 $('view-hospital').innerHTML=html;
 paintHospBoard();
}
 
/* ================= MATCH BOARD (big screen) ================= */
function openDisplay(){
 var list=TICKETS.filter(function(t){return t.matchAt&&t.st!=='Done';}).sort(function(a,b){return a.matchAt-b.matchAt;});
 var cards=list.map(function(t){var ms=t.matchAt-Date.now();var tm=teamByCode(t.code);return '<div class="dcard '+cdTone(ms)+'"><div class="dcard-cd" data-countdown="'+t.matchAt+'">'+fmtCD(ms)+'</div><div class="dcard-team">'+flag(t.code,'lg')+'<span class="dt-n">'+esc(t.team)+'</span><span class="dcard-q">'+(t.match||'')+'</span></div><div class="dcard-iss">'+esc(t.iss)+'</div><div class="dcard-st">'+ticketBadge(t.st)+(t.tech?' &nbsp; '+esc(t.tech):'')+'</div></div>';}).join('');
 if(!cards)cards='<div style="color:#8a94a6;font-size:18px;padding:40px">No teams with an upcoming match.</div>';
 $('display').innerHTML='<div class="disp-head"><div class="dh-l"><span class="ph-ic" style="background:#2c6e6a;width:42px;height:42px;border-radius:12px">'+icon('emergency')+'</span><div class="disp-title">Robot Hospital \u00b7 match board<small>Teams in the shop and their next match \u00b7 FGC 2026 Incheon</small></div></div><div style="display:flex;align-items:center;gap:18px"><span class="disp-clock" id="disp-clock">'+clockHM(Date.now())+'</span><button class="btn-x-disp" data-action="display-close">'+icon('x')+'Exit</button></div></div><div class="disp-grid">'+cards+'</div>';
 $('display').classList.add('on');
}
function closeDisplay(){$('display').classList.remove('on');}
 
/* ================= QUEUEING ================= */
function renderQueue(){
 const up=MATCHES.filter(function(m){return !m.played;}).sort(function(a,b){return a.at-b.at;});
 const queued=Object.keys(queueState).filter(function(k){return queueState[k]==='Queued';}).length;
 const missing=Object.keys(queueState).filter(function(k){return queueState[k]==='Missing';}).length;
 const notq=Object.keys(queueState).filter(function(k){return queueState[k]==='Not queued';}).length;
 const ed=canEdit('queueing');
 let html=phead('queueing','Match queueing','Stage each alliance and get robots to the field on time. Every match shows its Blue and Red alliance and table \u00b7 Table 5 is the main field.',
   kpi(up.length,'Matches up','acc')+kpi(queued,'Queued','ok')+kpi(notq,'Not queued','warn')+kpi(missing,'Missing','bad'));
 function col(codes,cls,label,m){return '<div class="qalliance '+cls+'"><div class="qa-label"><span class="qa-sw"></span>'+label+'</div>'+codes.map(function(code){const tm=teamByCode(code);const st=queueState[m.q+'_'+code];return '<div class="qteam '+(st==='Missing'?'q-missing':'')+'">'+flag(code)+'<span class="qteam-name">'+esc(tm?tm.country:code)+'</span><span class="qstate" '+(ed?'data-action="q-advance" data-q="'+m.q+'" data-code="'+code+'"':'')+'>'+qBadge(st)+'</span></div>';}).join('')+'</div>';}
 html+=up.map(function(m){const ms=m.at-Date.now();const main=m.table===5;return '<div class="qmatch"><div class="qmatch-h"><span class="qmatch-q">'+m.q+'</span><span class="qmatch-time">'+clockHM(m.at)+'</span><span class="tbl-chip '+(main?'main':'')+'">'+icon('monitor')+'Table '+m.table+(main?' &middot; Main field':'')+'</span><div class="qmatch-cd">'+icon('clock')+'<span class="qcd-n" data-countdown="'+m.at+'">'+fmtCD(ms)+'</span></div></div><div class="qrow">'+col(m.A,'qa-blue','Blue Alliance',m)+col(m.B,'qa-red','Red Alliance',m)+'</div></div>';}).join('');
 if(ed)html+='<p style="color:var(--text-3);font-size:12px;margin-top:2px">Tap a team\u2019s status to advance it: Not queued \u2192 Queued \u2192 Missing.</p>';
 $('view-queueing').innerHTML=html;
}
function advanceQ(q,code){if(!requireEdit('queueing'))return;const key=q+'_'+code;const idx=QSTATES.indexOf(queueState[key]);const next=QSTATES[(idx+1)%QSTATES.length];queueState[key]=next;const tm=teamByCode(code);toast((tm?tm.country:code)+' \u2192 '+next);if(next==='Missing')logActivity({ic:'flag',tone:'bad',t:esc(tm?tm.country:code)+' marked missing',s:q,station:'queueing'});renderQueue();}
 
/* ================= JUDGING ================= */
function judgeRows(){return JUDGE_TEAMS.map(function(r){return {r:r,total:r.scores.reduce(function(a,b){return a+b;},0)};}).sort(function(a,b){return b.total-a.total;});}
function fmtScore(v){v=Math.round(v*2)/2;return v%1===0?v.toFixed(0):v.toFixed(1);}
function scorePill(code,ci,v){const cls=v>=8?'s-hi':(v>=6?'s-mid':'s-lo');return '<span class="score-pill '+cls+'">'+fmtScore(v)+'</span>';}
function renderJudging(){
 const a=access();
 if(!a.viewJudge){$('view-judging').innerHTML='<div class="lockwrap"><div><div class="lock-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg></div><h1 class="ptitle">Judging is restricted</h1><p class="psub" style="margin:9px auto 0;max-width:46ch">This area is for judges and the volunteer lead only. Sign in as Chucks (Judge) or Caitlin (Admin) to view scoring.</p></div></div>';return;}
 const ed=canEdit('judging');const rows=judgeRows();const maxTotal=JCRIT.length*JMAX;
 const avg=(rows.reduce(function(s,x){return s+x.total;},0)/rows.length).toFixed(1);
 const top=rows[0];const topName=teamByCode(top.r.code);
 let head='<tr><th class="lft">#</th><th class="lft">Team</th>'+JCRIT.map(function(c){return '<th>'+c+'</th>';}).join('')+'<th>Total</th><th class="lft">Judge</th></tr>';
 let body=rows.map(function(x,idx){const r=x.r;const tm=teamByCode(r.code);return '<tr data-action="open-judge" data-code="'+r.code+'" style="cursor:pointer"><td class="lft"><span class="rank-badge '+(idx===0?'r1':'')+'">'+(idx+1)+'</span></td><td class="lft"><div class="cell-team-j">'+flag(r.code)+esc(tm?tm.country:r.code)+(r.note?' <span title="Has comments" style="color:var(--accent);display:inline-flex">'+icon('info')+'</span>':'')+(r.awards&&r.awards.length?' <span title="'+r.awards.length+' award'+(r.awards.length>1?'s':'')+' considered" style="color:#b3892a;display:inline-flex">'+icon('award')+'</span>':'')+'</div></td>'+r.scores.map(function(v,ci){return '<td>'+scorePill(r.code,ci,v)+'</td>';}).join('')+'<td class="jtotal">'+fmtScore(x.total)+' <span style="color:var(--text-3);font-weight:500;font-size:11px">/ '+maxTotal+'</span></td><td class="lft"><div style="display:flex;align-items:center;gap:7px">'+miniAv(r.judge)+esc(r.judge.split(' ')[0])+'</div></td></tr>';}).join('');
 let html=phead('judging','Judging panel','Working tally across the FGC rubric, each criterion scored out of '+JMAX+'. '+(ed?'Open a team to grade with the sliders and add comments.':'Read-only \u00b7 scoring is entered by the assigned judge.'),
   kpi(rows.length,'Teams scored','acc')+kpi(avg+' / '+maxTotal,'Avg total','warn')+kpi(topName?topName.country:top.r.code,'Leading','ok'));
 html+='<div class="jhead-note">'+icon('info')+'<div>Scores are confidential to the judging panel. Award decisions are finalised in deliberation \u00b7 these figures are a working tally, not final results.</div></div>';
 html+='<div style="overflow-x:auto"><table class="jtable"><thead>'+head+'</thead><tbody>'+body+'</tbody></table></div>';
 $('view-judging').innerHTML=html;
}
function jSet(code,ci,v){if(!requireEdit('judging'))return;const r=JUDGE_TEAMS.find(function(x){return x.code===code;});if(!r)return;r.scores[ci]=v;const lab=$('jval-'+ci);if(lab)lab.textContent=fmtScore(v);const tot=r.scores.reduce(function(a,b){return a+b;},0);const td=$('jdraw-total');if(td)td.textContent=fmtScore(tot)+' / '+(JCRIT.length*JMAX);renderJudging();}
function openJudge(code){
 const r=JUDGE_TEAMS.find(function(x){return x.code===code;});if(!r)return;const tm=teamByCode(code);const ed=canEdit('judging');const total=r.scores.reduce(function(a,b){return a+b;},0);const maxTotal=JCRIT.length*JMAX;
 let crit=JCRIT.map(function(c,ci){var v=r.scores[ci];if(ed){return '<div class="jcrit"><div class="jcrit-top"><span class="jcrit-name">'+c+'</span><span class="jcrit-val" id="jval-'+ci+'">'+fmtScore(v)+'</span></div><input class="jslider" type="range" min="0" max="'+JMAX+'" step="0.5" value="'+v+'" data-jscore data-code="'+code+'" data-ci="'+ci+'"></div>';}else{return '<div class="jcrit"><div class="jcrit-top"><span class="jcrit-name">'+c+'</span>'+scorePill(code,ci,v)+'</div><div class="jbar"><div class="jbar-fill" style="width:'+(v/JMAX*100)+'%"></div></div></div>';}}).join('');
 const body='<div class="dsec"><div style="display:flex;align-items:center;gap:12px;margin-bottom:6px">'+flag(code,'lg')+'<div><div style="font-weight:600;font-size:16px">'+esc(tm?tm.country:code)+'</div><div class="mono" style="color:var(--text-3);font-size:12px">Judge: '+esc(r.judge)+'</div></div><div style="margin-left:auto;text-align:right"><div class="jtotal" id="jdraw-total" style="font-size:20px">'+fmtScore(total)+' / '+maxTotal+'</div><div style="font-size:11px;color:var(--text-3)">total score</div></div></div></div><div class="dsec"><div class="dsec-t">Rubric \u00b7 each out of '+JMAX+'</div>'+crit+'</div>'+awardHtml(code)+'<div class="dsec"><div class="dsec-t">Comments &amp; notes</div>'+(ed?'<textarea class="note-in" id="jnote-'+code+'" placeholder="Add comments or deliberation notes for this team\u2026">'+esc(r.note)+'</textarea><div style="margin-top:8px"><button class="btn sm primary" data-action="save-judge-note" data-code="'+code+'">'+icon('check')+'Save comment</button></div>':'<div style="font-size:13px;color:var(--text-2)">'+(r.note?esc(r.note):'No comments yet.')+'</div>')+'</div>';
 openDrawer('Judging \u00b7 '+esc(tm?tm.country:code),body,'');
}
function saveJudgeNote(code){if(!requireEdit('judging'))return;const r=JUDGE_TEAMS.find(function(x){return x.code===code;});const ta=$('jnote-'+code);if(r&&ta)r.note=ta.value;toast('Comment saved');renderJudging();}
function awardHtml(code){var r=JUDGE_TEAMS.find(function(x){return x.code===code;});if(!r)return '';var ed=canEdit('judging');var chips=r.awards.length?r.awards.map(function(a,i){return '<span class="award-chip">'+icon('award')+'<span>'+esc(a)+'</span>'+(ed?'<button class="award-x" data-action="remove-award" data-code="'+code+'" data-idx="'+i+'" title="Remove">'+icon('x')+'</button>':'')+'</span>';}).join(''):'<div style="font-size:13px;color:var(--text-3)">Not yet considered for an award.</div>';var add='';if(ed){var avail=AWARDS.filter(function(a){return r.awards.indexOf(a)<0;});if(avail.length){add='<div style="display:flex;gap:8px;margin-top:11px"><select id="award-sel" class="lf-in" style="height:40px;flex:1"><option value="">Considered for\u2026</option>'+avail.map(function(a){return '<option value="'+esc(a)+'">'+esc(a)+'</option>';}).join('')+'</select><button class="btn sm" data-action="add-award" data-code="'+code+'">'+icon('plus')+'Add</button></div>';}}return '<div class="dsec"><div class="dsec-t">Award consideration</div><div class="award-list">'+chips+'</div>'+add+'</div>';}
function addAward(code){if(!requireEdit('judging'))return;var r=JUDGE_TEAMS.find(function(x){return x.code===code;});if(!r)return;var sel=$('award-sel');var v=sel?sel.value:'';if(!v){toast('Pick an award first');return;}if(r.awards.indexOf(v)<0)r.awards.push(v);toast('Considered for award',v);renderJudging();openJudge(code);}
function removeAward(code,idx){if(!requireEdit('judging'))return;var r=JUDGE_TEAMS.find(function(x){return x.code===code;});if(!r)return;r.awards.splice(idx,1);toast('Removed from consideration');renderJudging();openJudge(code);}
 
/* ================= INSPECTIONS drawer + actions ================= */
function openTeam(code){
 closeSearch();const t=teamByCode(code);if(!t)return;const ed=canEdit('inspections');
 let items=t.items.map(function(v,i){const name=INSP_ITEMS[i];let ctrl;
   if(ed){ctrl='<div class="toggle3"><button class="'+(v==='pass'?'on-pass':'')+'" data-action="insp-item" data-code="'+code+'" data-i="'+i+'" data-v="pass">Pass</button><button class="'+(v==='fail'?'on-fail':'')+'" data-action="insp-item" data-code="'+code+'" data-i="'+i+'" data-v="fail">Fail</button><button class="'+(v==='pending'?'on-pend':'')+'" data-action="insp-item" data-code="'+code+'" data-i="'+i+'" data-v="pending">Pending</button></div>';}
   else{const m={pass:['bg-ok','Pass'],fail:['bg-bad','Fail'],pending:['bg-mut','Pending']}[v];ctrl='<span class="badge '+m[0]+'"><span class="b-dot"></span>'+m[1]+'</span>';}
   return '<div class="insp-item"><span class="ii-name">'+name+'</span>'+ctrl+'</div>';
 }).join('');
 const body='<div class="dsec"><div style="display:flex;align-items:center;gap:13px;margin-bottom:4px">'+flag(code,'lg')+'<div><div style="font-family:var(--display);font-weight:600;font-size:18px">'+esc(t.country)+'</div><div class="mono" style="color:var(--text-3);font-size:12px">Team #'+t.id+' &middot; '+esc(t.pit)+'</div></div><div style="margin-left:auto">'+overallBadge(t.overall)+'</div></div></div><div class="dsec"><div class="dsec-t">Inspection checklist</div>'+items+'</div><div class="dsec"><div class="dsec-t">Assigned inspector</div>'+(t.inspector?'<div style="display:flex;align-items:center;gap:9px">'+miniAv(t.inspector)+'<span style="font-weight:500">'+esc(t.inspector)+'</span></div>':'<span style="color:var(--text-3)">Unassigned</span>')+'</div>';
 let foot=ed?'<button class="btn primary" data-action="insp-item" data-code="'+code+'" data-i="-1" data-v="allpass" style="flex:1">'+icon('check')+'Mark all pass</button>':'';
 openDrawer('Inspection',body,foot);
}
function setInspItem(code,i,v){if(!requireEdit('inspections'))return;const t=teamByCode(code);if(!t)return;if(i<0&&v==='allpass'){t.items=t.items.map(function(){return 'pass';});toast('All items passed',t.country);}else{t.items[i]=v;}t.overall=deriveOverall(t.items);if(t.overall!=='Not started'&&!t.inspector)t.inspector=actor();paintInspList();updateNavCounts();openTeam(code);}
 
/* ================= HOSPITAL drawer + actions ================= */
function openTicket(id){
 const t=TICKETS.find(function(x){return x.id===id;});if(!t)return;const ed=canEdit('hospital');
 let log=t.log.map(function(l){return '<div class="logline"><span class="log-dot"></span><div><div class="log-txt">'+esc(l[0])+'</div><div class="log-meta">'+ago(l[1])+'</div></div></div>';}).join('');
 let actions='';
 if(ed){let claim=t.tech?'':'<button class="btn sm primary" data-action="claim-ticket" data-id="'+id+'">'+icon('user')+'Claim</button>';let sb='';['In progress','Done'].forEach(function(s){if(t.st!==s)sb+='<button class="btn sm" data-action="set-ticket-state" data-id="'+id+'" data-st="'+s+'">'+s+'</button>';});actions='<div class="dsec"><div class="dsec-t">Actions</div><div style="display:flex;gap:8px;flex-wrap:wrap">'+claim+sb+'</div></div><div class="dsec"><div class="dsec-t">Add a note</div><textarea class="note-in" id="tnote" placeholder="Add an update\u2026"></textarea><div style="margin-top:8px"><button class="btn sm" data-action="add-ticket-note" data-id="'+id+'">'+icon('plus')+'Add note</button></div></div>';}
 const body='<div class="dsec"><div style="display:flex;align-items:center;gap:11px;margin-bottom:10px">'+flag(t.code,'lg')+'<div><div style="font-weight:600;font-size:16px">'+esc(t.team)+'</div><div class="mono" style="color:var(--text-3);font-size:12px">'+t.id+'</div></div><div style="margin-left:auto">'+priBadge(t.pri)+'</div></div><div style="display:flex;gap:9px;align-items:center;flex-wrap:wrap">'+ticketBadge(t.st)+(t.type?typeBadge(t.type):'')+(t.matchAt&&t.st!=='Done'?'<span class="ticket-cd '+cdTone(t.matchAt-Date.now())+'" style="margin-top:0">'+icon('clock')+'<span class="tc-q">'+(t.match||'next')+'</span><span class="tc-t" data-countdown="'+t.matchAt+'">'+fmtCD(t.matchAt-Date.now())+'</span></span>':'')+'<span style="color:var(--text-3);font-size:12px">open '+fmtAge(t.open)+'</span></div></div><div class="dsec"><div class="dsec-t">Issue</div><div style="font-size:14px">'+esc(t.iss)+'</div></div>'+(t.tech?'<div class="dsec"><div class="dsec-t">Technician</div><div style="display:flex;align-items:center;gap:9px">'+miniAv(t.tech)+'<span style="font-weight:500">'+esc(t.tech)+'</span></div></div>':'')+(t.res?'<div class="dsec"><div class="dsec-t">Resolution</div><div style="font-size:13px;color:var(--text-2)">'+esc(t.res)+'</div></div>':'')+actions+'<div class="dsec"><div class="dsec-t">Timeline</div>'+log+'</div>';
 openDrawer('Repair ticket',body,'');
}
function claimTicket(id){if(!requireEdit('hospital'))return;const t=TICKETS.find(function(x){return x.id===id;});if(!t)return;t.tech=actor();if(t.st==='Waiting')t.st='In progress';t.log.unshift([actor()+' claimed the ticket',0]);toast('Ticket claimed',t.id);renderHospital();openTicket(id);updateNavCounts();}
function setTicketState(id,st){if(!requireEdit('hospital'))return;const t=TICKETS.find(function(x){return x.id===id;});if(!t)return;t.st=st;t.log.unshift(['Status set to '+st+' ('+actor()+')',0]);if(st==='Done'&&!t.res)t.res='Marked done by '+actor()+'.';toast('Updated',st);logActivity({ic:'wrench',tone:st==='Done'?'ok':'info',t:esc(t.team)+' ticket '+st.toLowerCase(),s:t.id,station:'hospital'});renderHospital();openTicket(id);updateNavCounts();}
function addTicketNote(id){if(!requireEdit('hospital'))return;const t=TICKETS.find(function(x){return x.id===id;});const ta=$('tnote');if(!t||!ta||!ta.value.trim())return;t.log.unshift([ta.value.trim()+' ('+actor()+')',0]);toast('Note added');openTicket(id);}
 
/* ================= drawer / activity / search / user menu ================= */
function openDrawer(title,body,foot){$('drawer-title').innerHTML=title;$('drawer-body').innerHTML=body;$('drawer-foot').innerHTML=foot||'';$('drawer-body').scrollTop=0;$('drawer').classList.add('on');$('scrim').classList.add('on');}
function closeDrawer(){$('drawer').classList.remove('on');$('scrim').classList.remove('on');}
function openActivity(){closeUserMenu();let rows=ACTIVITY.map(function(a){const t=TONE[a.tone]||TONE.mut;return '<div class="feed-row"><span class="feed-ic" style="background:'+t[0]+';color:'+t[1]+'">'+icon(a.ic)+'</span><div class="feed-main"><div class="feed-t">'+esc(a.t)+'</div><div class="feed-s">'+esc(a.s)+'</div></div><span class="feed-time">'+ago(a.m)+'</span></div>';}).join('');openDrawer('Activity log','<div style="margin:-4px 0"><div class="feed">'+rows+'</div></div>','');}
function doSearch(q){const pop=$('searchpop');q=String(q).trim().toLowerCase();if(!q){closeSearch();return;}const res=TEAMS.filter(function(t){return t.country.toLowerCase().indexOf(q)>=0||t.code.indexOf(q)>=0||String(t.id).indexOf(q)>=0||t.pit.toLowerCase().indexOf(q)>=0;}).slice(0,8);let h='<div class="sp-head">Teams</div>';if(!res.length)h+='<div class="sp-empty">No teams found</div>';else h+=res.map(function(t){return '<div class="sp-row" data-action="open-team" data-code="'+t.code+'">'+flag(t.code)+'<span class="sp-name">'+esc(t.country)+'</span>'+overallBadge(t.overall)+'<span class="sp-meta">'+esc(t.pit)+'</span></div>';}).join('');pop.innerHTML=h;pop.classList.add('on');}
function closeSearch(){const p=$('searchpop');if(p)p.classList.remove('on');}
function buildUserMenu(){if(!state.user)return;const u=state.user;$('um-av').textContent=initials(u.name);$('um-av').style.background=u.c;$('um-name').textContent=u.name;$('um-role').textContent=u.role;$('who').innerHTML=avatar(u.name)+'<div class="who-txt"><div class="who-name">'+esc(u.name)+'</div><div class="who-role">'+esc(u.role)+'</div></div>';const a=access();const ed=a.edit.map(function(s){return STATIONS[s]?STATIONS[s].name:s;}).join(', ');$('um-pop').innerHTML='<div class="um-head">'+avatar(u.name)+'<div><div class="um-h-name">'+esc(u.name)+'</div><div class="um-h-role">'+esc(u.role)+'</div></div></div><div class="um-access"><b>Can edit:</b> '+(a.edit.length===5?'All stations':ed)+'</div><button class="um-row" data-action="signout">'+icon('logout')+'Sign out</button>';}
function toggleUserMenu(){$('um-pop').classList.toggle('on');}
function closeUserMenu(){const p=$('um-pop');if(p)p.classList.remove('on');}
 
/* ================= LOGIN ================= */
function buildLogin(){
 let cards=USERS.map(function(u){return '<button class="persona" data-action="persona" data-name="'+u.name+'"><span class="p-av" style="background:'+u.c+'">'+initials(u.name)+'</span><div class="p-mid"><div class="p-name">'+u.name+'</div><div class="p-role">'+u.role+' &middot; '+esc(u.desc)+'</div></div><div class="p-cred"><div class="pc-l">Password</div><div class="pc-v">'+u.pass+'</div></div></button>';}).join('');
 $('login').innerHTML='<div class="login-hero"><svg class="lh-globe" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1"><circle cx="100" cy="100" r="86"/><ellipse cx="100" cy="100" rx="38" ry="86"/><ellipse cx="100" cy="100" rx="68" ry="86"/><line x1="14" y1="100" x2="186" y2="100"/><path d="M22 62h156M22 138h156"/></svg><div class="lh-top"><svg class="lh-mark" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="15" fill="#244a73"/><path d="M20 5v30M5 20h30M9.2 11c4.2 2.7 17.4 2.7 21.6 0M9.2 29c4.2-2.7 17.4-2.7 21.6 0" stroke="#9db8da" stroke-width="1.1"/><ellipse cx="20" cy="20" rx="6.6" ry="15" stroke="#9db8da" stroke-width="1.1"/><path d="M27.4 6.6c.5 2.6 3 3.3 3 6.2 0 2-1.7 3.5-3.5 3.5s-3.3-1.6-3.3-3.6c0-3.1 3.3-2.9 3.8-6.1z" fill="#e8714f"/></svg><div class="lh-org">FIRST Global<small>Volunteer Operations</small></div></div><div class="lh-mid"><div class="lh-kicker">Igniting Innovation</div><div class="lh-title">Volunteer Operations Console</div><div class="lh-sub">Mission control for the field crew \u00b7 inspections, the Robot Hospital, spare parts, queueing and judging, all in one place.</div><div class="lh-meta"><div><div class="lm-k">190+</div><div class="lm-l">Nations</div></div><div><div class="lm-k">7 to 10 Oct</div><div class="lm-l">2026</div></div><div><div class="lm-k">Incheon</div><div class="lm-l">Republic of Korea</div></div></div></div><div class="lh-foot">Proof of concept &middot; mock data for demonstration</div></div><div class="login-panel"><div class="lp-inner"><div class="lf-h">Volunteer sign-in</div><div class="lf-sub">Enter your name and password, or pick a profile below.</div><div class="lf-field"><label class="fld-label">Name</label><input id="li-name" class="lf-in" type="text" placeholder="e.g. Roberto" autocomplete="off"></div><div class="lf-field"><label class="fld-label">Password</label><input id="li-pass" class="lf-in" type="password" placeholder="Your password"></div><div class="lf-err" id="li-err"></div><button class="btn primary block" data-action="login-submit">Sign in '+icon('arrow')+'</button><div class="lf-divider">Fast login</div><div class="personas">'+cards+'</div></div></div>';
}
function loginErr(m){const e=$('li-err');if(e)e.textContent=m||'';}
function attemptLogin(){const n=(($('li-name')||{}).value)||'';const p=(($('li-pass')||{}).value)||'';if(!n.trim()){loginErr('Enter your name to sign in.');return;}const u=USERS.find(function(x){return x.name.toLowerCase()===n.trim().toLowerCase();});if(!u){loginErr('We couldn\u2019t find a volunteer named \u201c'+n.trim()+'\u201d. Try a fast login profile below.');return;}if(u.pass!==p){loginErr('That password doesn\u2019t match \u00b7 check the profile card below.');return;}doLogin(u);}
function personaLogin(name){const u=USERS.find(function(x){return x.name===name;});if(u)doLogin(u);}
function doLogin(u){state.user=u;state.role=u.role;state.inspFilter='all';state.inspView='board';state.inspQuery='';state.hospPri='all';state.hospQuery='';state.emgFilter='active';document.body.classList.add('authed');buildNav();buildUserMenu();go(u.home);toast('Signed in as '+u.name,u.role);}
function signOut(){closeDrawer();closeUserMenu();closeSearch();closeDisplay();document.body.classList.remove('authed');state.user=null;const n=$('li-name'),p=$('li-pass');if(n)n.value='';if(p)p.value='';loginErr('');window.scrollTo(0,0);}
 
/* ================= events + loop ================= */
function onClick(e){
 const actEl=e.target.closest('[data-action]');
 if(!e.target.closest('.usermenu'))closeUserMenu();
 if(!e.target.closest('.search'))closeSearch();
 if(!(e.target.closest&&e.target.closest('[data-combo],.searchpop'))){var _ps=document.querySelectorAll('.searchpop.on');for(var _i=0;_i<_ps.length;_i++){if(_ps[_i].id!=='searchpop')_ps[_i].classList.remove('on');}}
 if(!actEl)return;
 const a=actEl.getAttribute('data-action');const D=function(k){return actEl.getAttribute('data-'+k);};
 switch(a){
  case 'go':go(D('go'));break;
  case 'open-team':openTeam(D('code'));break;
  case 'open-ticket':openTicket(D('id'));break;
  case 'claim-ticket':claimTicket(D('id'));break;
  case 'set-ticket-state':setTicketState(D('id'),D('st'));break;
  case 'add-ticket-note':addTicketNote(D('id'));break;
  case 'hosp-display':openDisplay();break;
  case 'display-close':closeDisplay();break;
  case 'q-advance':advanceQ(D('q'),D('code'));break;
  case 'open-judge':openJudge(D('code'));break;
  case 'save-judge-note':saveJudgeNote(D('code'));break;
  case 'add-award':addAward(D('code'));break;
  case 'remove-award':removeAward(D('code'),parseInt(D('idx'),10));break;
  case 'insp-filter':state.inspFilter=D('f');renderInspections();break;
  case 'insp-view':state.inspView=D('v');renderInspections();break;
  case 'insp-item':setInspItem(D('code'),parseInt(D('i'),10),D('v'));break;
  case 'hosp-filter':state.hospPri=D('f');renderHospital();break;
  case 'hosp-new':openHospIntake();break;
  case 'hosp-type':intakeType=D('t');var bb=document.querySelectorAll('#drawer-body [data-action="hosp-type"]');for(var bi=0;bi<bb.length;bi++){bb[bi].classList.toggle('on',bb[bi].getAttribute('data-t')===intakeType);}break;
  case 'hosp-create':createHospTicket();break;
  case 'spare-create':createSpareReq();break;
  case 'open-new-kit':openNewKit();break;
  case 'spare-filter':state.spareCat=D('f');renderSpares();break;
  case 'combo-pick':comboPick(D('prefix'),D('val'));break;
  case 'help-open':openHelp();break;
  case 'help-send':sendHelp();break;
  case 'drawer-close':closeDrawer();break;
  case 'usermenu-toggle':toggleUserMenu();break;
  case 'signout':signOut();break;
  case 'activity-open':openActivity();break;
  case 'persona':personaLogin(D('name'));break;
  case 'login-submit':attemptLogin();break;
  default:break;
 }
}
function onInput(e){const id=e.target.id;const cb=e.target.getAttribute&&e.target.getAttribute('data-combo');if(cb){comboFilter(cb,e.target.value);return;}if(e.target.hasAttribute&&e.target.hasAttribute('data-jscore')){jSet(e.target.getAttribute('data-code'),parseInt(e.target.getAttribute('data-ci'),10),parseFloat(e.target.value));return;}if(id==='insp-search'){state.inspQuery=e.target.value;paintInspList();}else if(id==='hosp-search'){state.hospQuery=e.target.value;paintHospBoard();}else if(id==='gsearch'){doSearch(e.target.value);}else if(id==='spare-cat-search'){state.spareQuery=e.target.value;paintCatalog();}}
function onKey(e){
 if(e.key==='Escape'){closeDrawer();closeSearch();closeUserMenu();closeDisplay();return;}
 if(e.key==='Enter'&&(e.target.id==='li-name'||e.target.id==='li-pass')){attemptLogin();return;}
 if(e.key==='/'&&document.body.classList.contains('authed')){const tag=(e.target.tagName||'').toLowerCase();if(tag!=='input'&&tag!=='textarea'){e.preventDefault();const g=$('gsearch');if(g)g.focus();}}
}
function tickClock(){const c=$('ec-clock');if(c){const d=new Date();c.textContent=[d.getHours(),d.getMinutes(),d.getSeconds()].map(function(x){return String(x).padStart(2,'0');}).join(':');}}
setInterval(function(){
 const now=Date.now();tickClock();
 const dcl=$('disp-clock');if(dcl)dcl.textContent=clockHM(now);
 document.querySelectorAll('[data-countdown]').forEach(function(el){const tgt=+el.getAttribute('data-countdown');const ms=tgt-now;el.textContent=fmtCD(ms);const row=el.closest('.ticker-row');if(row)row.classList.toggle('urgent',ms>0&&ms<=180000);const dc=el.closest('.dcard');if(dc){dc.classList.remove('t-crit','t-warn');const tt=cdTone(ms);if(tt!=='t-ok')dc.classList.add(tt);}const tcd=el.closest('.ticket-cd');if(tcd){tcd.classList.remove('t-crit','t-warn','t-ok');tcd.classList.add(cdTone(ms));}});
 const up=MATCHES.filter(function(m){return !m.played;}).sort(function(a,b){return a.at-b.at;})[0];const en=$('ec-next');if(en&&up)en.textContent=up.q+' '+fmtCD(up.at-now);
},1000);
 
function init(){
 buildLogin();tickClock();
 const an=$('act-n');if(an)an.textContent=ACTIVITY.length;
 const up=MATCHES.filter(function(m){return !m.played;}).sort(function(a,b){return a.at-b.at;})[0];const en=$('ec-next');if(en&&up)en.textContent=up.q+' '+fmtCD(up.at-Date.now());
 document.addEventListener('click',onClick);
 document.addEventListener('input',onInput);
 document.addEventListener('keydown',onKey);
}
if(document.readyState!=='loading')init();else document.addEventListener('DOMContentLoaded',init);
 
/* ===== spare parts: 2025 FIRST Global kit of parts ===== */
const SPARES=[
 {no:'REV-41-1215',desc:'Storage Tote Orange',cat:'General',qty:1},
 {no:'REV-41-3681',desc:'FGC25 Swivel Mount',cat:'General',qty:1},
 {no:'REV-41-3683',desc:'FGC25 Rope',cat:'General',qty:1},
 {no:'REV-41-3684',desc:'FG25 Gamepiece A',cat:'General',qty:4},
 {no:'REV-41-3685',desc:'FG25 Gamepiece B',cat:'General',qty:2},
 {no:'REV-41-3686',desc:'FGC25 Flow Controller Wheel',cat:'General',qty:1},
 {no:'REV-42-3247',desc:'FIRST Global Ball Pump',cat:'General',qty:1},
 {no:'REV-31-1153',desc:'Expansion Hub',cat:'Control System & Sensors',qty:1},
 {no:'REV-31-1155',desc:'Potentiometer',cat:'Control System & Sensors',qty:1},
 {no:'REV-31-1299',desc:'Battery Charger',cat:'Control System & Sensors',qty:1},
 {no:'REV-31-1302',desc:'12V Slim Battery',cat:'Control System & Sensors',qty:2},
 {no:'REV-31-1425',desc:'Touch Sensor',cat:'Control System & Sensors',qty:2},
 {no:'REV-31-1462',desc:'Magnetic Limit Switch',cat:'Control System & Sensors',qty:2},
 {no:'REV-31-1505',desc:'2m Distance Sensor',cat:'Control System & Sensors',qty:1},
 {no:'REV-31-1557',desc:'Color Sensor V3',cat:'Control System & Sensors',qty:2},
 {no:'REV-31-1595',desc:'Control Hub',cat:'Control System & Sensors',qty:1},
 {no:'REV-31-1596',desc:'Driver Hub',cat:'Control System & Sensors',qty:1},
 {no:'REV-31-2983',desc:'REV USB PS4 Compatible Gamepad',cat:'Control System & Sensors',qty:2},
 {no:'REV-39-1598',desc:'Logitech C270 UVC USB Camera',cat:'Control System & Sensors',qty:1},
 {no:'REV-11-1130-PK4',desc:'36in PWM Cable 4 Pack',cat:'Cables',qty:1},
 {no:'REV-31-1387',desc:'Switch Cable and Bracket',cat:'Cables',qty:1},
 {no:'REV-31-1388-PK4',desc:'JST PH 4 pin Joiner Board 4 Pack',cat:'Cables',qty:2},
 {no:'REV-31-1392-PK2',desc:'XT30 extension Cable 30cm 2 Pack',cat:'Cables',qty:1},
 {no:'REV-31-1394-PK2',desc:'XT30 extension Cable 50cm 2 Pack',cat:'Cables',qty:1},
 {no:'REV-31-1407-PK4',desc:'Sensor Cable 4 pin 30cm 4 Pack',cat:'Cables',qty:1},
 {no:'REV-31-1408-PK4',desc:'Sensor Cable 4 pin 50cm 4 Pack',cat:'Cables',qty:1},
 {no:'REV-31-1409-PK4',desc:'Sensor Cable 4 pin 100cm 4 Pack',cat:'Cables',qty:1},
 {no:'REV-31-1412-PK4',desc:'JST VH 2 pin Motor Cables 30cm 4 Pack',cat:'Cables',qty:1},
 {no:'REV-31-1413-PK4',desc:'Motor Power Cable 2 pin 50cm 4 Pack',cat:'Cables',qty:1},
 {no:'REV-31-1418-PK2',desc:'JST PH 3 pin Communication Cable 50cm 2 Pack',cat:'Cables',qty:1},
 {no:'REV-31-1429-PK4',desc:'JST VH 2 pin Joiner Board 4 Pack',cat:'Cables',qty:2},
 {no:'REV-31-1526-PK4',desc:'Motor Power Cable 2 pin 100cm 4 Pack',cat:'Cables',qty:1},
 {no:'REV-31-1108',desc:'SRS Programmer',cat:'Motors & Servos',qty:1},
 {no:'REV-41-1300',desc:'Core Hex Motor',cat:'Motors & Servos',qty:3},
 {no:'REV-41-1364-PK4',desc:'Servo Gear Adapter 4 Pack',cat:'Motors & Servos',qty:2},
 {no:'REV-41-1600',desc:'UltraPlanetary Gearbox Kit & HD Hex Motor',cat:'Motors & Servos',qty:7},
 {no:'REV-41-1820',desc:'Aluminum Double Servo Arm',cat:'Motors & Servos',qty:2},
 {no:'REV-41-1828',desc:'Aluminum Servo Horn V2',cat:'Motors & Servos',qty:4},
 {no:'REV-41-3334',desc:'Smart Robot Servo V2',cat:'Motors & Servos',qty:6},
 {no:'REV-41-3337',desc:'SRS V2 Steel Servo Gear Replacement Set',cat:'Motors & Servos',qty:2},
 {no:'REV-41-1328-PK4',desc:'Servo Shaft Adapter 4 Pack',cat:'Motors & Servos',qty:3},
 {no:'REV-21-2452',desc:'3in Compliant Wheel MAX Bore 30A Light Gray',cat:'Motion',qty:6},
 {no:'REV-21-2540-PK10',desc:'MAXSpline Spacer 1/16in 10 Pack',cat:'Motion',qty:1},
 {no:'REV-41-1147-PK2',desc:'High Strength Hex Hub 2 Pack',cat:'Motion',qty:6},
 {no:'REV-41-1162',desc:'1.2mm UHMWPE Cord 10M',cat:'Motion',qty:2},
 {no:'REV-41-1163',desc:'Surgical Tubing 3mm',cat:'Motion',qty:6},
 {no:'REV-41-1164',desc:'Polyurethane Round Belt 6mm 6ft',cat:'Motion',qty:3},
 {no:'REV-41-1165-PK8',desc:'Barb for Polyurethane Hollow Belt 8 Pack',cat:'Motion',qty:1},
 {no:'REV-41-1190-PK2',desc:'90mm Omni Wheel 2 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1267',desc:'Grip Wheel 90mm',cat:'Motion',qty:8},
 {no:'REV-41-1316-PK4',desc:'15mm Hex Pillow Block 4 Pack',cat:'Motion',qty:3},
 {no:'REV-41-1317-PK8',desc:'15mm Bearing Pillow Block 8 Pack',cat:'Motion',qty:5},
 {no:'REV-41-1323-PK12',desc:'5mm Hex Shaft Spacer 15mm 12 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1324-PK16',desc:'5mm Hex Shaft Spacer 3mm 16 Pack',cat:'Motion',qty:3},
 {no:'REV-41-1325-PK28',desc:'5mm Hex Shaft Spacer 1.5mm 28 Pack',cat:'Motion',qty:1},
 {no:'REV-41-1331-PK8',desc:'15 Tooth Plastic Gear 8 Pack',cat:'Motion',qty:1},
 {no:'REV-41-1332-PK4',desc:'30 Tooth Plastic Gear 4 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1333-PK2',desc:'125 Tooth Plastic Gear 2 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1334-PK4',desc:'45 Tooth Plastic Gear 4 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1335-PK4',desc:'60 Tooth Plastic Gear 4 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1336-PK4',desc:'72 Tooth Plastic Gear 4 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1337-PK2',desc:'90 Tooth Plastic Gear 2 Pack',cat:'Motion',qty:3},
 {no:'REV-41-1338-PK4',desc:'10 Tooth #25 Sprocket 4 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1339-PK4',desc:'15 Tooth Plastic #25 Sprocket 4 Pack',cat:'Motion',qty:1},
 {no:'REV-41-1340-PK4',desc:'20 Tooth Plastic #25 Sprocket 4 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1341-PK2',desc:'54 Tooth Plastic #25 Sprocket 2 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1342-PK4',desc:'26 Tooth Plastic #25 Sprocket 4 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1343-PK2',desc:'40 Tooth #25 Sprocket 2 Pack',cat:'Motion',qty:1},
 {no:'REV-41-1344-PK4',desc:'30mm Round Belt Pulley 4 Pack',cat:'Motion',qty:1},
 {no:'REV-41-1345-PK4',desc:'60mm Round Belt Pulley 4 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1346-PK2',desc:'90mm Round Belt Pulley 2 Pack',cat:'Motion',qty:1},
 {no:'REV-41-1347-PK4',desc:'5mm x 75mm Hex Shaft 4 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1348-PK4',desc:'5mm x 90mm Hex Shaft 4 Pack',cat:'Motion',qty:5},
 {no:'REV-41-1349-PK4',desc:'5mm x 135mm Hex Shaft 4 Pack',cat:'Motion',qty:4},
 {no:'REV-41-1350-PK4',desc:'60mm Traction Wheel 4 Pack',cat:'Motion',qty:1},
 {no:'REV-41-1354-PK2',desc:'90mm Traction Wheel 2 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1362-PK4',desc:'5mm x 400mm Hex Shaft 4 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1365',desc:'#25 Roller Chain 10ft',cat:'Motion',qty:2},
 {no:'REV-41-1366-PK5',desc:'#25 Master Links 5 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1368-PK10',desc:'Small Pulley Bearings 10 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1503-PK8',desc:'22 Tooth Plastic Right Angle Rack Gear 8 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1702-PK4',desc:'Tensioning Bushing 39mm 4 Pack',cat:'Motion',qty:2},
 {no:'REV-41-1846-PK8',desc:'Motion Pattern Spacer 8 Pack',cat:'Motion',qty:1},
 {no:'REV-41-2035',desc:'Compliant Wheel 2in 5mm Hex Bore Soft',cat:'Motion',qty:6},
 {no:'REV-41-2038-PK2',desc:'MAX Hub 5mm Hex Plastic 2 Pack',cat:'Motion',qty:7},
 {no:'REV-41-2080',desc:'Ultra 90 Degree Gearbox',cat:'Motion',qty:2},
 {no:'REV-41-2150-PK4',desc:'1in Grip Wheel 5mm Hex Bore Soft Light Gray 4 Pack',cat:'Motion',qty:2},
 {no:'REV-41-2702-PK4',desc:'Flap Wheel 5mm Hex Bore Medium 4 Pack',cat:'Motion',qty:2},
 {no:'REV-42-1442',desc:'#25 Chain Tool',cat:'Motion',qty:1},
 {no:'REV-45-1259',desc:'15mm Hinge Kit',cat:'Motion',qty:3},
 {no:'REV-45-1507',desc:'15mm Linear Motion Kit V2',cat:'Motion',qty:4},
 {no:'REV-41-1119',desc:'5.5mm Nut Driver',cat:'Bearings & Hardware',qty:2},
 {no:'REV-41-1124-PK100',desc:'M3 x 20mm Hex Cap Screws 100 Pack',cat:'Bearings & Hardware',qty:1},
 {no:'REV-41-1125-PK50',desc:'M3 x 35mm Hex Cap Screws 50 Pack',cat:'Bearings & Hardware',qty:1},
 {no:'REV-41-1161-PK50',desc:'Zipties Black 160mm 50 Pack',cat:'Bearings & Hardware',qty:4},
 {no:'REV-41-1322-PK8',desc:'End Cap Bearing 8 Pack',cat:'Bearings & Hardware',qty:4},
 {no:'REV-41-1326-PK12',desc:'Through Bore Bearing Short 12 Pack',cat:'Bearings & Hardware',qty:2},
 {no:'REV-41-1327-PK10',desc:'Shaft Collars 10 Pack',cat:'Bearings & Hardware',qty:5},
 {no:'REV-41-1329-PK12',desc:'Through Bore Bearing Long 12 Pack',cat:'Bearings & Hardware',qty:4},
 {no:'REV-41-1359-PK100',desc:'M3 x 8mm Hex Cap Screws 100 Pack',cat:'Bearings & Hardware',qty:12},
 {no:'REV-41-1360-PK100',desc:'M3 x 16mm Hex Cap Screws 100 Pack',cat:'Bearings & Hardware',qty:1},
 {no:'REV-41-1361-PK100',desc:'M3 Nyloc Nuts 100 Pack',cat:'Bearings & Hardware',qty:8},
 {no:'REV-41-1373',desc:'Hook and Loop Fastener 13.5mm x 2m',cat:'Bearings & Hardware',qty:3},
 {no:'REV-41-1374',desc:'5.5mm Combination Wrench',cat:'Bearings & Hardware',qty:2},
 {no:'REV-41-1376',desc:'1.5mm Allen Wrench',cat:'Bearings & Hardware',qty:1},
 {no:'REV-41-1377',desc:'2mm Allen Wrench',cat:'Bearings & Hardware',qty:1},
 {no:'REV-41-1452-PK4',desc:'15mm Metal 12mm Ball Bearing Mount V2 4 Pack',cat:'Bearings & Hardware',qty:2},
 {no:'REV-41-1528-PK20',desc:'5mm Hex to 8mm Round Bearing Insert 20 Pack',cat:'Bearings & Hardware',qty:1},
 {no:'REV-41-1609',desc:'UltraPlanetary Hardware Pack',cat:'Bearings & Hardware',qty:1},
 {no:'REV-41-1683-PK4',desc:'5mm Hex Bearing Block 4 Pack',cat:'Bearings & Hardware',qty:2},
 {no:'REV-41-1713-PK100',desc:'M3 x 6mm Hex Cap Screws 100 Pack',cat:'Bearings & Hardware',qty:1},
 {no:'REV-41-1907-PK25',desc:'M3 x 8mm T Slot Screw 25 Pack',cat:'Bearings & Hardware',qty:4},
 {no:'REV-45-1727',desc:'Extrusion Channel Cover Color Pack',cat:'Bearings & Hardware',qty:1},
 {no:'REV-49-1559-PK10',desc:'8mm x 12mm x 3.5mm Flanged Bearing 10 Pack',cat:'Bearings & Hardware',qty:1},
 {no:'REV-41-1303-PK8',desc:'15mm Plastic Motion Bracket 8 Pack',cat:'Brackets',qty:4},
 {no:'REV-41-1304-PK8',desc:'15mm Plastic Rod End Bracket 8 Pack',cat:'Brackets',qty:2},
 {no:'REV-41-1305-PK8',desc:'15mm Plastic 90 Degree Bracket 8 Pack',cat:'Brackets',qty:6},
 {no:'REV-41-1306-PK8',desc:'15mm Plastic 60 Degree Bracket 8 Pack',cat:'Brackets',qty:1},
 {no:'REV-41-1307-PK8',desc:'15mm Plastic 45 Degree Bracket 8 Pack',cat:'Brackets',qty:2},
 {no:'REV-41-1308-PK8',desc:'15mm Plastic 30 Degree Bracket 8 Pack',cat:'Brackets',qty:1},
 {no:'REV-41-1310-PK8',desc:'15mm Plastic 135 Degree Bracket 8 Pack',cat:'Brackets',qty:1},
 {no:'REV-41-1311-PK6',desc:'15mm Plastic 120 Degree Bracket 6 Pack',cat:'Brackets',qty:1},
 {no:'REV-41-1312-PK6',desc:'15mm Plastic 150 Degree Bracket 6 Pack',cat:'Brackets',qty:1},
 {no:'REV-41-1313-PK4',desc:'15mm Plastic Indexable Motion Bracket 4 Pack',cat:'Brackets',qty:1},
 {no:'REV-41-1315-PK4',desc:'15mm Gearbox Motion Bracket 4 Pack',cat:'Brackets',qty:2},
 {no:'REV-41-1318-PK4',desc:'15mm Plastic Variable Angle Bracket 4 Pack',cat:'Brackets',qty:2},
 {no:'REV-41-1319-PK2',desc:'15mm Plastic Servo Bracket 2 Pack',cat:'Brackets',qty:3},
 {no:'REV-41-1320-PK8',desc:'15mm Plastic Inside Corner Bracket 8 Pack',cat:'Brackets',qty:4},
 {no:'REV-41-1321-PK8',desc:'15mm Plastic Lap Corner Bracket 8 Pack',cat:'Brackets',qty:5},
 {no:'REV-41-1433-PK4',desc:'15mm Metal Bent Core Hex Motor Bracket V2 4 Pack',cat:'Brackets',qty:2},
 {no:'REV-41-1475-PK4',desc:'15mm Metal Offset Servo Bracket V2 4 Pack',cat:'Brackets',qty:1},
 {no:'REV-41-1480-PK8',desc:'15mm Metal 90 Degree Bracket V2 8 Pack',cat:'Brackets',qty:2},
 {no:'REV-41-1483-PK8',desc:'15mm Metal T Bracket V2 8 Pack',cat:'Brackets',qty:1},
 {no:'REV-41-1485-PK4',desc:'15mm Metal Bent Servo Bracket V2 4 Pack',cat:'Brackets',qty:4},
 {no:'REV-41-1562-PK8',desc:'15mm Corner Cube 8 Pack',cat:'Brackets',qty:1},
 {no:'REV-41-1621-PK4',desc:'UltraPlanetary Outside Mounting Bracket 4 Pack',cat:'Brackets',qty:1},
 {no:'REV-41-1623-PK4',desc:'UltraPlanetary Bent Mounting Bracket 4 Pack',cat:'Brackets',qty:1},
 {no:'REV-41-1624-PK4',desc:'UltraPlanetary Flat Mounting Bracket 4 Pack',cat:'Brackets',qty:2},
 {no:'REV-41-1625-PK2',desc:'UltraPlanetary Long Reach Mounting Bracket 2 Pack',cat:'Brackets',qty:1},
 {no:'REV-41-1687',desc:'U Channel Endcap',cat:'Brackets',qty:4},
 {no:'REV-41-1166-PK2',desc:'Battery Holder Plate 2 Pack',cat:'Structure',qty:1},
 {no:'REV-41-1430-PK2',desc:'15mm Extrusion 150mm 45\u00b0 Ends 2 Pack',cat:'Structure',qty:4},
 {no:'REV-41-1431-PK2',desc:'15mm Extrusion 225mm 90\u00b0 Ends 2 Pack',cat:'Structure',qty:4},
 {no:'REV-41-1432-PK4',desc:'15mm Extrusion 420mm 90\u00b0 Ends 4 Pack',cat:'Structure',qty:8},
 {no:'REV-41-1491-PK4',desc:'M3 Standoff 30mm 4 Pack',cat:'Structure',qty:2},
 {no:'REV-41-1492-PK4',desc:'M3 Standoff 40mm 4 Pack',cat:'Structure',qty:2},
 {no:'REV-41-1493-PK4',desc:'M3 Standoff 45mm 4 Pack',cat:'Structure',qty:2},
 {no:'REV-41-1568-PK2',desc:'15mm Extrusion 120mm 90\u00b0 Ends 2 Pack',cat:'Structure',qty:5},
 {no:'REV-41-1762',desc:'45mm x 15mm C Channel 408mm',cat:'Structure',qty:6},
 {no:'REV-41-1767',desc:'45mm x 15mm C Channel 248mm',cat:'Structure',qty:4},
 {no:'REV-41-1839-PK2',desc:'4mm Corrugated Plastic Sheet 450mm x 300mm 2 Pack',cat:'Structure',qty:5},
 {no:'REV-41-3049',desc:'Polycarbonate Sheet 400x350x1mm',cat:'Structure',qty:4}
];
let kitsOpen=2;
SPARES.forEach(function(p){p.inv=p.qty*kitsOpen;p.req=0;p.reqUnits=0;});
const comboSel={};
const NAMES=VOLUNTEERS.map(function(v){return v.n;});
let selPart=null;
// recent request log; stock and the most-requested chart are derived from it
const SPARE_REQUESTS=[
 {no:'REV-41-3334',code:'de',team:'Germany',qty:6,by:'Doc',when:6},
 {no:'REV-41-1300',code:'ng',team:'Nigeria',qty:2,by:'Doc',when:11},
 {no:'REV-41-1359-PK100',code:'jp',team:'Japan',qty:12,by:'Doc',when:19},
 {no:'REV-41-3334',code:'br',team:'Brazil',qty:4,by:'Doc',when:24},
 {no:'REV-41-1828',code:'us',team:'United States',qty:5,by:'Doc',when:30},
 {no:'REV-41-1365',code:'ke',team:'Kenya',qty:2,by:'Doc',when:37},
 {no:'REV-31-1557',code:'in',team:'India',qty:4,by:'Doc',when:44},
 {no:'REV-41-1300',code:'it',team:'Italy',qty:2,by:'Doc',when:52},
 {no:'REV-41-1432-PK4',code:'ca',team:'Canada',qty:6,by:'Doc',when:61},
 {no:'REV-41-1359-PK100',code:'kr',team:'Korea',qty:8,by:'Doc',when:70},
 {no:'REV-41-1828',code:'mx',team:'Mexico',qty:3,by:'Doc',when:78},
 {no:'REV-41-1300',code:'fr',team:'France',qty:1,by:'Doc',when:86},
 {no:'REV-41-3334',code:'za',team:'South Africa',qty:2,by:'Doc',when:95},
 {no:'REV-41-1162',code:'eg',team:'Egypt',qty:3,by:'Doc',when:104},
 {no:'REV-41-1365',code:'pl',team:'Poland',qty:2,by:'Doc',when:112},
 {no:'REV-41-1300',code:'au',team:'Australia',qty:1,by:'Doc',when:120},
 {no:'REV-31-1392-PK2',code:'es',team:'Spain',qty:2,by:'Doc',when:131},
 {no:'REV-41-1364-PK4',code:'nl',team:'Netherlands',qty:4,by:'Doc',when:140}
];
SPARE_REQUESTS.forEach(function(r){var p=SPARES.find(function(x){return x.no===r.no;});if(!p)return;r.desc=p.desc;p.req+=1;p.reqUnits+=r.qty;p.inv=Math.max(0,p.inv-r.qty);});
 
/* ===== spare parts views ===== */
function partSelectHtml(){var cats=[];SPARES.forEach(function(p){if(cats.indexOf(p.cat)<0)cats.push(p.cat);});var opts='<option value="">Choose a part\u2026</option>';cats.forEach(function(c){opts+='<optgroup label="'+esc(c)+'">';SPARES.filter(function(p){return p.cat===c;}).forEach(function(p){opts+='<option value="'+p.no+'"'+(selPart===p.no?' selected':'')+(p.inv<=0?' disabled':'')+'>'+esc(p.desc)+' ('+p.no+')'+(p.inv<=0?' \u00b7 out of stock':' \u00b7 '+p.inv+' in stock')+'</option>';});opts+='</optgroup>';});return '<select id="spart" class="lf-in" style="height:44px">'+opts+'</select>';}
function renderSpares(){
 const ed=canEdit('spares');
 const cats=[];SPARES.forEach(function(p){if(cats.indexOf(p.cat)<0)cats.push(p.cat);});
 const lowStock=SPARES.filter(function(p){return p.inv<=0;}).length;
 const totalReq=SPARE_REQUESTS.length;
 let html=phead('spares','Spare parts','Teams request replacement parts from the official FGC kit. Stock counts down with each request \u00b7 anything out of stock shows in red.',
   kpi(SPARES.length,'Catalog parts','acc')+kpi(totalReq,'Requests logged','warn')+kpi(kitsOpen,'Kits open','acc')+kpi(lowStock,'Out of stock',lowStock?'bad':'ok'));
 if(ed){
   html+='<div class="panel" style="margin-bottom:18px"><div class="panel-h"><span class="ph-ic" style="background:var(--accent)">'+icon('plus')+'</span><div><h3>New part request</h3><div class="ph-sub">Logged by '+esc(actor())+'</div></div></div><div style="padding:16px"><div style="display:grid;grid-template-columns:1fr 1fr 110px;gap:14px;margin-bottom:16px"><div><label class="fld-label">Requesting team</label>'+countryCombo('spteam','Type a country\u2026')+'</div><div><label class="fld-label">Part</label>'+partSelectHtml()+'</div><div><label class="fld-label">Quantity</label><input id="spare-qty" class="lf-in" type="number" min="1" value="1" style="height:44px"></div></div><button class="btn primary" data-action="spare-create">'+icon('check')+'Log request</button></div></div>';
 }
 // most requested top 15
 const ranked=SPARES.filter(function(p){return p.req>0;}).sort(function(a,b){return b.reqUnits-a.reqUnits||b.req-a.req;}).slice(0,15);
 const maxU=ranked.length?ranked[0].reqUnits:1;
 let topRows=ranked.map(function(p,i){var pct=Math.round(p.reqUnits/maxU*100);var out=p.inv<=0;return '<tr><td class="mono" style="color:var(--text-3);text-align:center">'+(i+1)+'</td><td><div style="font-weight:600;font-size:13px">'+esc(p.desc)+'</div><div class="mono" style="font-size:11px;color:var(--text-3)">'+p.no+'</div></td><td style="width:34%"><div class="reqbar"><div class="reqbar-fill" style="width:'+pct+'%"></div></div></td><td class="mono" style="text-align:center;font-weight:600">'+p.reqUnits+'</td><td class="mono" style="text-align:center;color:var(--text-3)">'+p.req+'</td><td style="text-align:right"><span class="'+(out?'stock-pill out':(p.inv<=p.qty?'stock-pill low':'stock-pill'))+'">'+(out?'Out':p.inv)+'</span></td></tr>';}).join('');
 if(!topRows)topRows='<tr><td colspan="6" style="text-align:center;color:var(--text-3);padding:20px">No requests yet.</td></tr>';
 html+='<div class="dash-grid" style="margin-bottom:18px"><div class="span-8"><div class="panel"><div class="panel-h"><span class="ph-ic" style="background:var(--accent)">'+icon('chart')+'</span><div><h3>Most requested parts</h3><div class="ph-sub">Top 15 by units requested</div></div></div><div style="overflow-x:auto"><table class="ltable"><thead><tr><th style="text-align:center">#</th><th>Part</th><th>Demand</th><th style="text-align:center">Units</th><th style="text-align:center">Times</th><th style="text-align:right">Stock</th></tr></thead><tbody>'+topRows+'</tbody></table></div></div></div>'+spareRecentHtml()+'</div>';
 // catalog
 let catChips='<button class="chip'+(state.spareCat==='all'?' on':'')+'" data-action="spare-filter" data-f="all">All<span class="c-n">'+SPARES.length+'</span></button>'+cats.map(function(c){const n=SPARES.filter(function(p){return p.cat===c;}).length;return '<button class="chip'+(state.spareCat===c?' on':'')+'" data-action="spare-filter" data-f="'+esc(c)+'">'+esc(c)+'<span class="c-n">'+n+'</span></button>';}).join('');
 html+='<div class="panel"><div class="panel-h"><span class="ph-ic" style="background:var(--accent)">'+icon('box')+'</span><div><h3>Kit catalog</h3><div class="ph-sub">2025 FIRST Global kit of parts</div></div>'+(ed?'<div style="margin-left:auto;display:flex;align-items:center;gap:12px"><span style="font-size:12px;color:var(--text-3)">Kits open <b style="color:var(--text-1);font-family:var(--mono)">'+kitsOpen+'</b></span><button class="btn sm" data-action="open-new-kit">'+icon('plus')+'Open new kit</button></div>':'')+'</div><div style="padding:14px 16px"><div class="toolbar" style="margin:0 0 14px"><div class="chips">'+catChips+'</div><div class="tb-search">'+icon('search')+'<input id="spare-cat-search" type="text" placeholder="Search catalog\u2026" value="'+esc(state.spareQuery)+'"></div></div><div id="spare-catalog"></div></div></div>';
 $('view-spares').innerHTML=html;
 paintCatalog();
}
function spareRecentHtml(){var recent=SPARE_REQUESTS.slice().sort(function(a,b){return a.when-b.when;}).slice(0,7);var rows=recent.map(function(r){var tm=teamByCode(r.code);return '<div class="recent-row"><div class="cell-team" style="flex:1;min-width:0">'+flag(r.code)+'<span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(tm?tm.country:r.team)+'</span></div><div style="font-size:12px;color:var(--text-2);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(r.desc||r.no)+'</div><span class="mono" style="font-weight:600;font-size:12px">x'+r.qty+'</span></div>';}).join('');if(!recent.length)rows='<div style="color:var(--text-3);font-size:13px;padding:14px">No requests yet.</div>';return '<div class="span-4"><div class="panel"><div class="panel-h"><span class="ph-ic" style="background:var(--accent)">'+icon('list')+'</span><div><h3>Recent requests</h3><div class="ph-sub">Latest from the parts desk</div></div></div><div style="padding:6px 14px 12px">'+rows+'</div></div></div>';}
function createSpareReq(){if(!requireEdit('spares'))return;var code=comboSel.spteam;if(!code){toast('Choose a team');return;}var no=($('spart')||{}).value;if(!no){toast('Choose a part');return;}var p=SPARES.find(function(x){return x.no===no;});if(!p)return;var qn=parseInt(($('spare-qty')||{}).value,10);var qty=qn>0?qn:1;if(p.inv<=0){toast('Out of stock',p.no);return;}if(qty>p.inv){qty=p.inv;toast('Only '+p.inv+' in stock','requesting '+qty);}p.inv-=qty;p.req+=1;p.reqUnits+=qty;var tm=teamByCode(code);var r={no:p.no,desc:p.desc,code:code,team:tm?tm.country:code,qty:qty,by:actor(),when:0};SPARE_REQUESTS.forEach(function(x){x.when+=0;});SPARE_REQUESTS.unshift(r);logActivity({ic:'box',tone:'info',t:esc(r.team)+' requested '+esc(p.desc),s:p.no+' \u00b7 x'+qty,station:'spares'});toast('Request logged',p.desc+' \u00b7 x'+qty);comboSel.spteam='';selPart=null;renderSpares();updateNavCounts();}
function paintCatalog(){
 const box=$('spare-catalog');if(!box)return;
 let list=SPARES.slice();
 if(state.spareCat!=='all')list=list.filter(function(p){return p.cat===state.spareCat;});
 const q=state.spareQuery.trim().toLowerCase();
 if(q)list=list.filter(function(p){return p.desc.toLowerCase().indexOf(q)>=0||p.no.toLowerCase().indexOf(q)>=0||p.no.toLowerCase().replace(/-/g,'').indexOf(q.replace(/[-\s]/g,''))>=0||p.cat.toLowerCase().indexOf(q)>=0;});
 let rows=list.map(function(p){var out=p.inv<=0;var cls=out?'stock-pill out':(p.inv<=p.qty?'stock-pill low':'stock-pill');var stk=out?'Out of stock':String(p.inv)+' in stock';return '<tr'+(out?' style="background:#fdf3f2"':'')+'><td class="mono" style="font-size:12px;white-space:nowrap">'+p.no+'</td><td'+(out?' style="color:var(--bad);font-weight:600"':'')+'>'+esc(p.desc)+'</td><td style="color:var(--text-3);font-size:12px">'+esc(p.cat)+'</td><td class="mono" style="text-align:center;color:var(--text-3)">'+p.qty+'</td><td style="text-align:right"><span class="'+cls+'">'+stk+'</span></td></tr>';}).join('');
 if(!rows)rows='<tr><td colspan="5" style="text-align:center;color:var(--text-3);padding:24px">No parts match.</td></tr>';
 box.innerHTML='<table class="ltable"><thead><tr><th>Part number</th><th>Description</th><th>Category</th><th style="text-align:center">Per kit</th><th style="text-align:right">Stock</th></tr></thead><tbody>'+rows+'</tbody></table>';
}
function openNewKit(){if(!requireEdit('spares'))return;kitsOpen++;SPARES.forEach(function(p){p.inv+=p.qty;});logActivity({ic:'box',tone:'ok',t:'New kit opened',s:'Kits open: '+kitsOpen,station:'spares'});toast('New kit opened','Now '+kitsOpen+' kits');renderSpares();updateNavCounts();}
 
/* ===== robot hospital intake ===== */
function openHospIntake(){
 if(!requireEdit('hospital'))return;
 intakeType='Mechanical';comboSel.hiteam='';comboSel.hitech=actor();
 var types=['Mechanical','Software','Machine shop','Other'];
 var typeBtns=types.map(function(t){return '<button class="chip'+(intakeType===t?' on':'')+'" data-action="hosp-type" data-t="'+esc(t)+'">'+esc(t)+'</button>';}).join('');
 var body='<div class="dsec"><div class="dsec-t">Which team are you helping?</div>'+countryCombo('hiteam','Type a country\u2026')+'</div><div class="dsec"><div class="dsec-t">Type of issue</div><div class="chips">'+typeBtns+'</div></div><div class="dsec"><div class="dsec-t">Assigned to</div>'+nameCombo('hitech','Assign a volunteer\u2026')+'<div style="font-size:11px;color:var(--text-3);margin-top:6px">Defaults to you. Type to assign someone else.</div></div><div class="dsec"><div class="dsec-t">More details</div><textarea class="note-in" id="hi-details" placeholder="What is going on? Add any details, parts tried, symptoms\u2026"></textarea></div>';
 openDrawer('Log a repair',body,'<button class="btn primary" data-action="hosp-create" style="flex:1">'+icon('check')+'Add to Robot Hospital</button>');
}
function createHospTicket(){if(!requireEdit('hospital'))return;var code=comboSel.hiteam;if(!code){toast('Choose a team');return;}var det=(($('hi-details')||{}).value||'').trim();var tm=teamByCode(code);var tech=comboSel.hitech||actor();var id='RH'+(245+TICKETS.length);var iss=det||((intakeType==='Other'?'General':intakeType)+' issue reported');var t={id:id,code:code,team:tm?tm.country:code,iss:iss,type:intakeType,pri:'normal',st:'In progress',tech:tech,open:0,log:[[tech+' is helping ('+intakeType.toLowerCase()+')'+(tech!==actor()?' \u00b7 logged by '+actor():''),0]]};TICKETS.unshift(t);logActivity({ic:'wrench',tone:'info',t:esc(t.team)+' in the Robot Hospital',s:intakeType+' \u00b7 '+tech,station:'hospital'});toast('Ticket added',id);closeDrawer();intakeType='Mechanical';renderHospital();updateNavCounts();}
 
/* ===== flag + name comboboxes ===== */
function countryCombo(prefix,ph){var code=comboSel[prefix]||'';var c=code?COUNTRIES.find(function(x){return x[0]===code;}):null;var label=c?c[1]:'';var fl=code?flag(code,'sm'):'';return '<div style="position:relative"><span id="'+prefix+'-fl" style="position:absolute;left:11px;top:50%;transform:translateY(-50%);display:flex;pointer-events:none;z-index:1">'+fl+'</span><input id="'+prefix+'-in" data-combo="'+prefix+'" data-kind="country" class="lf-in" type="text" autocomplete="off" placeholder="'+ph+'" value="'+esc(label)+'" style="height:44px;padding-left:'+(code?'40px':'13px')+'"><div class="searchpop" id="'+prefix+'-pop"></div></div>';}
function nameCombo(prefix,ph){var nm=comboSel[prefix]||'';var av=nm?miniAv(nm):'';return '<div style="position:relative"><span id="'+prefix+'-fl" style="position:absolute;left:9px;top:50%;transform:translateY(-50%);display:flex;pointer-events:none;z-index:1">'+av+'</span><input id="'+prefix+'-in" data-combo="'+prefix+'" data-kind="name" class="lf-in" type="text" autocomplete="off" placeholder="'+ph+'" value="'+esc(nm)+'" style="height:44px;padding-left:'+(nm?'38px':'13px')+'"><div class="searchpop" id="'+prefix+'-pop"></div></div>';}
function comboFilter(prefix,q){var inp=document.getElementById(prefix+'-in');if(!inp)return;var kind=inp.getAttribute('data-kind');var pop=document.getElementById(prefix+'-pop');if(!pop)return;q=String(q).trim().toLowerCase();var rows='';if(kind==='country'){if(!q){pop.classList.remove('on');return;}var res=COUNTRIES.filter(function(c){return c[1].toLowerCase().indexOf(q)>=0;}).slice(0,8);if(!res.length){rows='<div class="sp-empty">No countries found</div>';}else{rows=res.map(function(c){return '<div class="combo-row" data-action="combo-pick" data-prefix="'+prefix+'" data-val="'+c[0]+'">'+flag(c[0],'sm')+'<span style="font-size:13px">'+esc(c[1])+'</span></div>';}).join('');}}else{var rn=q?NAMES.filter(function(n){return n.toLowerCase().indexOf(q)>=0;}):NAMES.slice();rn=rn.slice(0,8);if(!rn.length){rows='<div class="sp-empty">No names found</div>';}else{rows=rn.map(function(n){return '<div class="combo-row" data-action="combo-pick" data-prefix="'+prefix+'" data-val="'+esc(n)+'">'+miniAv(n)+'<span style="font-size:13px">'+esc(n)+'</span></div>';}).join('');}}pop.innerHTML=rows;pop.classList.add('on');}
function comboPick(prefix,val){comboSel[prefix]=val;var inp=document.getElementById(prefix+'-in');if(!inp)return;var kind=inp.getAttribute('data-kind');var label=val,fl='';if(kind==='country'){var c=COUNTRIES.find(function(x){return x[0]===val;});label=c?c[1]:val;fl=flag(val,'sm');inp.style.paddingLeft='40px';}else{fl=miniAv(val);inp.style.paddingLeft='38px';}inp.value=label;var fh=document.getElementById(prefix+'-fl');if(fh)fh.innerHTML=fl;var pop=document.getElementById(prefix+'-pop');if(pop)pop.classList.remove('on');}
 
/* ===== help ===== */
function openHelp(){
 var pin='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>';
 var chat='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z"/></svg>';
 var body='<div class="dsec"><div style="font-size:14px;color:var(--text-2)">Stuck on something? Fayez is on site to help. Find him in person, or send a quick message and he will come to you.</div></div><div class="dsec"><div class="help-card"><div class="hc-top"><span class="hc-ic" style="background:#2c6e6a">'+pin+'</span><div><div class="hc-t">Find Fayez walking around</div><div class="hc-s">Roaming the pits and the field</div></div></div><div style="font-size:13px;color:var(--text-2)">Look for the volunteer in the FGC staff shirt near the Robot Hospital and the queueing lanes. Flag him down, or ask any lead to radio for him.</div></div><div class="help-card"><div class="hc-top"><span class="hc-ic" style="background:#3b4655">'+chat+'</span><div><div class="hc-t">Send him a message</div><div class="hc-s">He will read it and come find you</div></div></div><textarea class="note-in" id="help-msg" placeholder="What do you need help with? Where are you?"></textarea></div></div>';
 openDrawer('Need a hand?',body,'<button class="btn primary" data-action="help-send" style="flex:1">'+icon('check')+'Send to Fayez</button>');
}
function sendHelp(){var m=(($('help-msg')||{}).value||'').trim();if(!m){toast('Add a short message first');return;}toast('Sent to Fayez','He will come find you');closeDrawer();}
})();
