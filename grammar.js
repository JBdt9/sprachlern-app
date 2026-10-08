// Lernmodule nach den vier London-Arbeitsblättern, mit eigenen Business-Beispielen.
const grammarModules = [
  {id:'mistakes',title:'Typische Fehler',icon:'✓',description:'Wortwahl, Satzbau und häufige Stolpersteine.',rules:[
    ['Präpositionen & feste Wendungen','Lerne zusammengehörige Wörter als Einheit: arrive at the office, depend on the budget, look at the report, make a complaint.'],
    ['Zeiten & Satzbau','Nach didn’t steht die Grundform. Bei yesterday verwendest du normalerweise Simple Past. In indirekten Fragen steht das Subjekt vor dem Verb: Do you know where the office is?'],
    ['Wörter, die ähnlich aussehen','Hard heißt hart oder fleißig; hardly heißt kaum. Excited beschreibt dein Gefühl, exciting die Sache, die dieses Gefühl auslöst. Actually bedeutet tatsächlich oder eigentlich.'],
    ['Verstärker & Mengen','Enough steht vor Nomen, aber nach Adjektiven: enough time, good enough. Bei starken Adjektiven wie hilarious oder delicious ist absolutely eine natürliche Verstärkung. Very delicious ist in der üblichen Lernregel zu vermeiden, aber keine absolute Grammatikunmöglichkeit.']
  ]},
  {id:'verbs',title:'Gerundium & Infinitiv',icon:'↔',description:'Wann brauchst du doing, to do oder do?',rules:[
    ['Verb + -ing','Nach enjoy, avoid, admit, consider, deny, dislike, discuss, finish, imagine, keep, mind, miss, practise, postpone, recommend, risk und suggest folgt bei einem direkt anschließenden Verb die -ing-Form. Auch can’t help, can’t stand, have difficulty, spend time, waste time, it’s worth und there’s no point verwenden -ing.'],
    ['Verb + to + Grundform','Afford, agree, appear, arrange, choose, decide, fail, hope, intend, learn, manage, need, plan, pretend, promise, refuse und seem stehen vor to + Verb. Ebenso would like/love/prefer und can’t wait.'],
    ['Mit einer Person dazwischen','Advise, allow, encourage, expect, remind, urge, want und warn können mit Person + to + Verb stehen: Please remind me to call. Nach let und make steht im Aktiv Person + Grundform ohne to. Bei help sind beide Formen möglich.'],
    ['Nach Präpositionen: -ing','Insist on paying, be good at presenting, apologise for interrupting, worry about missing und be used to working. Das to in be used to ist eine Präposition. Used to work beschreibt dagegen eine frühere Gewohnheit.'],
    ['Beide Formen – oft ähnliche Bedeutung','Begin, start und continue erlauben häufig -ing oder to + Verb. Like, love, hate und prefer können ebenfalls beide Formen haben; Kontext und Betonung unterscheiden sich. Nach would like verwendest du to + Verb.'],
    ['Beide Formen – andere Bedeutung','Try doing = etwas ausprobieren; try to do = versuchen, etwas zu schaffen. Remember/forget to do bezieht sich auf eine auszuführende Handlung; remember/forget doing auf die Erinnerung an eine vergangene Handlung. Stop doing = aufhören; stop to do = etwas unterbrechen, um etwas anderes zu tun.'],
    ['Adjektive & would rather','It’s important/easy/difficult to do. Nach would rather folgt die Grundform ohne to: I’d rather call.']
  ]},
  {id:'prepositions',title:'Präpositionen',icon:'⌁',description:'Feste Wortverbindungen und in, on, at.',rules:[
    ['Zeit & Ort','At für Uhrzeiten, on für Tage und Daten, in für Monate, Jahre und längere Zeiträume. Arrive in für Städte/Länder, arrive at für konkrete Orte. Vor next/last week brauchst du keine Präposition.'],
    ['Verb + Präposition','Apply for a job, concentrate on work, depend on the budget, listen to someone, wait for a reply. Discuss, ask someone, tell someone und believe someone brauchen in diesen Konstruktionen keine zusätzliche Präposition.'],
    ['Person und Sache unterscheiden','Apologise to someone for something; complain to someone about something; thank someone for something; lend to someone und borrow from someone.'],
    ['Adjektiv + Präposition','Responsible for, satisfied with, interested in, good at, similar to, different from, proud of, ready for.'],
    ['Feste Ausdrücke','On time = pünktlich; in time = rechtzeitig. By train, on foot, in a car, on a bus; in advance, in charge, in my opinion und in front of.']
  ]},
  {id:'nouns',title:'Zählbar oder unzählbar?',icon:'a?',description:'Artikel, Mengen und Bedeutungswechsel.',rules:[
    ['Unzählbare Nomen','Advice, information, equipment, furniture, luggage/baggage, accommodation, homework, progress, research, news, work, money, traffic, permission und evidence werden in ihrer üblichen Bedeutung nicht mit a/an und nicht mit einer normalen Pluralendung verwendet.'],
    ['Mengen ausdrücken','Verwende some, much oder a lot of: some advice, much information. Einzelne Einheiten beschreibst du mit a piece of advice, two pieces of equipment oder an item of luggage. News steht mit einem Verb im Singular: The news is good.'],
    ['Zählbare Nomen','A job, a trip, a journey, an idea, a suggestion, a tool, a permit, a policy, a room und a suitcase sind zählbar. A/an richtet sich nach dem folgenden Laut: an injury, a useful tool.'],
    ['Die Bedeutung entscheidet','Experience = Berufserfahrung, an experience = ein Erlebnis. Paper = Material, a paper = zum Beispiel eine Zeitung oder wissenschaftliche Arbeit. Glass = Material, a glass = Trinkglas. Room = Platz, a room = Zimmer. Hair = Haare insgesamt, a hair = ein einzelnes Haar. Time = Zeit, a time = ein bestimmter Zeitpunkt oder Anlass.'],
    ['Weitere Wörter aus deinem Blatt','Help, fun, transport, weather, damage, courage, rubbish, luck, scenery, toast als Essen, clothing, jewellery, smoke und health sind in diesen Bedeutungen unzählbar. A toast kann dagegen ein Trinkspruch sein; an iron ein Bügeleisen, iron das Material.']
  ]}
];
// [Modul, Lückensatz, Lösung, Ablenker, deutsche Regel, vollständiger Satz]
const grammarQuestions=[];
function addQuestions(module,rows){rows.forEach((r,i)=>grammarQuestions.push({id:module+'-'+i,module,prompt:r[0],answer:r[1],options:[r[1],...r[2]],explanation:r[3],example:r[4]||r[0].replace('___',r[1]==='Kein Artikel'||r[1]==='Keine Präposition'?'':r[1])}));}
addQuestions('mistakes',[
 ['We will arrive ___ the office at nine.','at',['to','on'],'Arrive at verwendest du für konkrete Orte wie das Büro.'],
 ['The speaker was ___ hilarious.','absolutely',['very','extremely'],'Hilarious ist bereits ein starkes Adjektiv. Absolutely ist hier die natürliche Verstärkung.'],
 ['The launch depends ___ the budget.','on',['of','from'],'Die feste Verbindung lautet depend on.'],
 ['She works ___ to meet the deadline.','hard',['hardly','hardness'],'Hard heißt fleißig; hardly bedeutet kaum.'],
 ['Please look ___ this chart.','at',['to','on'],'Die Verbindung heißt look at something.'],
 ['We need to ___ a decision.','make',['do','take doing'],'Lerne make a decision als feste Wortverbindung.'],
 ['I have a lot of ___ to do tonight.','homework',['homeworks','a homework'],'Homework ist unzählbar und hat hier keine Pluralendung.'],
 ['We do not have ___ for this project.','enough money',['money enough','enough moneys'],'Enough steht vor dem Nomen.'],
 ['I ___ working with international teams now.','am used to',['used to','am use to'],'Be used to + -ing heißt an etwas gewöhnt sein.'],
 ['Please be ___ for the meeting: it starts at 9 sharp.','on time',['in time','at time'],'On time heißt zur vereinbarten Zeit, also pünktlich.'],
 ['I am looking for a new ___.','job',['work','works'],'Job ist eine zählbare Stelle. Work bezeichnet Arbeit allgemein.'],
 ['She did not ___ to the conference.','go',['went','gone'],'Nach did not steht die Grundform.'],
 ['I cannot finish this report ___.','on my own',['by my own','by me own'],'On my own und by myself bedeuten allein oder ohne Hilfe.'],
 ['I ___ the client yesterday.','saw',['have seen','see'],'Yesterday bezeichnet eine abgeschlossene Vergangenheit: Simple Past.'],
 ['This is the best presentation I have ___ seen.','ever',['never','yet'],'Ever bedeutet hier jemals.'],
 ['The new project is ___.','exciting',['excited','excite'],'Das Projekt ist spannend; die Person ist excited.'],
 ['I must ___ now.','leave',['to leave','leaving'],'Nach must steht die Grundform ohne to.'],
 ['I enjoy ___ new clients.','meeting',['to meet','meet'],'Nach enjoy folgt die -ing-Form.'],
 ['I am ___ working in London this week.','currently',['actual','at currently'],'Currently bedeutet aktuell. Actually bedeutet tatsächlich oder eigentlich.'],
 ['We had ___ at the team event.','such a good time',['so good time','such good time'],'Die Wendung lautet have a good time; such steht hier vor a + Adjektiv + Nomen.'],
 ['One of my ___ works in sales.','colleagues',['colleague','colleague’s'],'Nach one of steht eine Gruppe im Plural.'],
 ['The business lunch was ___ delicious.','absolutely',['much','many'],'Absolutely ist eine natürliche Verstärkung für delicious.'],
 ['___ 30 degrees in the office yesterday.','It was',['There were','There was'],'Temperaturangaben verwenden it: It was 30 degrees.'],
 ['We are ___ a new supplier.','looking for',['searching','looking'],'Look for something; auch search for something ist möglich.'],
 ['The business ___ was tiring.','trip',['travel','travels'],'Eine einzelne Reise ist a trip oder a journey. Travel bezeichnet Reisen allgemein.'],
 ['I like the first proposal. I ___ like the second.','also',['either','too much'],'Also steht hier vor dem Vollverb. Too wäre normalerweise am Satzende.'],
 ['I would like to ___ a complaint.','make',['do','give doing'],'Die feste Verbindung lautet make a complaint.'],
 ['We need ___ near the conference venue.','cheap accommodation',['a cheap accommodation','cheap accommodations'],'Accommodation ist im britischen Englisch hier unzählbar.'],
 ['Do you know ___?','where the office is',['where is the office','where the office does'],'Indirekte Fragen haben die Reihenfolge Subjekt + Verb.'],
 ['I ___ grateful for your support.','am really',['really','really be'],'Ein vollständiger Satz braucht hier am: I am really grateful.'],
 ['It is important to speak ___ well.','English',['the English','an English'],'Sprachnamen stehen hier ohne Artikel.'],
 ['___ we were in London, we met our clients.','While',['During','For'],'While leitet einen Satz ein; during steht vor einem Nomen.'],
 ['Your presentation reminds me ___ our last project.','of',['about','for'],'Die Verbindung lautet remind someone of something.']
]);
addQuestions('verbs',[
 ['We avoid ___ unnecessary meetings.','holding',['to hold','hold'],'Avoid wird mit -ing verwendet.'],
 ['Would you consider ___ the deadline?','extending',['to extend','extend'],'Nach consider steht die -ing-Form.'],
 ['Let us discuss ___ a new colleague.','hiring',['to hire','hire'],'Nach discuss steht hier -ing.'],
 ['Have you finished ___ the report?','writing',['to write','write'],'Nach finish steht die -ing-Form.'],
 ['Would you mind ___ the window?','closing',['to close','close'],'Would you mind + -ing ist eine höfliche Bitte.'],
 ['I suggest ___ the client today.','calling',['to call','call'],'Suggest + -ing; alternativ suggest that we call.'],
 ['We postponed ___ the product.','launching',['to launch','launch'],'Postpone wird mit -ing verwendet.'],
 ['It is worth ___ the figures again.','checking',['to check','check'],'Nach it is worth steht -ing.'],
 ['There is no point ___ about it now.','complaining',['to complain','complain'],'There is no point + -ing.'],
 ['We agreed ___ together.','to work',['working','work'],'Agree steht hier mit to + Grundform.'],
 ['They decided ___ a new office.','to open',['opening','open'],'Decide + to + Grundform.'],
 ['We hope ___ the deal this week.','to close',['closing','close'],'Hope + to + Grundform.'],
 ['I cannot afford ___ this opportunity.','to miss',['missing','miss'],'Afford + to + Grundform.'],
 ['She promised ___ the proposal.','to send',['sending','send'],'Promise + to + Grundform.'],
 ['I would like ___ the team.','to thank',['thanking','thank'],'Would like + to + Grundform.'],
 ['Please remind me ___ the supplier.','to call',['calling','call'],'Remind + Person + to + Grundform.'],
 ['Our manager encouraged us ___ questions.','to ask',['asking','ask'],'Encourage + Person + to + Grundform.'],
 ['They allowed the team ___ early.','to leave',['leaving','leave'],'Allow + Person + to + Grundform.'],
 ['My manager let me ___ from home.','work',['to work','working'],'Nach let + Person steht im Aktiv die Grundform ohne to.'],
 ['The delay made us ___ our plans.','change',['to change','changing'],'Nach make + Person steht im Aktiv die Grundform ohne to.'],
 ['I would rather ___ than send another email.','call',['to call','calling'],'Would rather + Grundform ohne to.'],
 ['It is important ___ clearly.','to communicate',['communicating','communicate'],'Adjektiv + to + Grundform: important to communicate.'],
 ['She apologised for ___ the meeting.','interrupting',['to interrupt','interrupt'],'Nach einer Präposition folgt ein Verb in der -ing-Form.'],
 ['I am used to ___ early.','starting',['start','started'],'Das to in be used to ist eine Präposition; danach steht -ing.'],
 ['We used to ___ in a smaller office.','work',['working','worked'],'Used to + Grundform beschreibt eine frühere Gewohnheit.'],
 ['Please remember ___ the invoice tomorrow.','to send',['sending','send'],'Remember to do bedeutet daran denken, eine Handlung auszuführen.'],
 ['I remember ___ that client last year.','meeting',['to meet','meet'],'Remember doing bezeichnet eine Erinnerung an eine vergangene Handlung.'],
 ['Do not forget ___ the file before you leave.','to save',['saving','save'],'Forget to do: eine anstehende Handlung nicht vergessen.'],
 ['I will never forget ___ my first big contract.','signing',['to sign','sign'],'Forget doing bezieht sich auf die Erinnerung an eine vergangene Handlung.'],
 ['The team stopped ___ when the call began.','talking',['to talk','talk'],'Stop doing bedeutet mit der Handlung aufhören.'],
 ['On the way to work, I stopped ___ a coffee.','to buy',['buying','buy'],'Stop to do: eine andere Tätigkeit unterbrechen, um etwas zu tun.'],
 ['If the software freezes, try ___ it.','restarting',['to restarting','restart'],'Try doing heißt eine mögliche Lösung ausprobieren.'],
 ['I tried ___ the file, but I could not open it.','to download',['download','to downloading'],'Try to do betont den Versuch, eine Handlung zu schaffen.']
]);
addQuestions('prepositions',[
 ['Please apologise ___ the client for the delay.','to',['for','with'],'Apologise to + Person; for + Grund.'],
 ['I applied ___ the marketing job.','for',['to','on'],'Apply for a job.'],
 ['The meeting is ___ Wednesday.','on',['in','at'],'On steht vor Wochentagen.'],
 ['We will discuss it ___ the morning.','in',['on','at'],'In the morning; aber at night.'],
 ['The call starts ___ nine.','at',['on','in'],'At steht vor Uhrzeiten.'],
 ['The project started ___ 2024.','in',['at','on'],'In steht vor Jahreszahlen.'],
 ['We agree ___ your suggestion.','with',['to','at'],'Agree with einer Person oder Meinung; agree to einem Vorschlag zustimmen ist ebenfalls möglich, diese Übung fragt nach der Formulierung agree with your suggestion.','We agree with your suggestion.'],
 ['This laptop belongs ___ the company.','to',['for','with'],'Belong to bezeichnet Zugehörigkeit.'],
 ['Please concentrate ___ your work.','on',['at','in'],'Concentrate on.'],
 ['It depends ___ the client.','on',['of','from'],'Depend on.'],
 ['We need to discuss ___ the problem.','Keine Präposition',['about','on'],'Discuss wird direkt mit dem Objekt verbunden.'],
 ['Thank you ___ your help.','for',['to','of'],'Thank someone for something.'],
 ['She insisted ___ paying.','on',['to','for'],'Insist on + -ing.'],
 ['Please listen ___ the speaker.','to',['at','for'],'Listen to.'],
 ['We spoke ___ last week.','Keine Präposition',['in','on'],'Vor last und next week steht hier keine Präposition.'],
 ['How much did you spend ___ the equipment?','on',['for','at'],'Spend money on something.'],
 ['We complained ___ the faulty printer.','about',['to','for'],'Complain about eine Sache, complain to eine Person.'],
 ['Can you wait ___ my reply?','for',['to','on'],'Wait for.'],
 ['She is good ___ negotiating.','at',['in','on'],'Good at + Nomen oder -ing.'],
 ['Our product is different ___ theirs.','from',['of','with'],'Different from ist eine verbreitete Standardform.'],
 ['I am grateful ___ you for your help.','to',['for','with'],'Grateful to + Person, for + Grund.'],
 ['He is interested ___ marketing.','in',['on','at'],'Interested in.'],
 ['Who is responsible ___ this project?','for',['of','to'],'Responsible for.'],
 ['Are you satisfied ___ the result?','with',['of','for'],'Satisfied with.'],
 ['This proposal is similar ___ the first one.','to',['with','of'],'Similar to.'],
 ['Please book the tickets ___ advance.','in',['on','at'],'In advance heißt im Voraus.'],
 ['Who is ___ charge of the team?','in',['on','at'],'In charge of heißt verantwortlich für.'],
 ['We arrived ___ London yesterday.','in',['at','to'],'Arrive in für Städte oder Länder.'],
 ['We arrived ___ the hotel at six.','at',['in','to'],'Arrive at für einen konkreten Ort.'],
 ['We arrived ___ time to prepare before the meeting.','in',['at','with'],'In time heißt rechtzeitig für etwas.'],
 ['___ my opinion, the price is fair.','In',['On','At'],'In my opinion heißt meiner Meinung nach.'],
 ['We travelled ___ train.','by',['on','in'],'By train beschreibt das Verkehrsmittel.'],
 ['The office is ten minutes away ___ foot.','on',['by','with'],'Die feste Wendung lautet on foot.'],
 ['Could you lend this book ___ Alex?','to',['from','of'],'Lend something to someone.'],
 ['I borrowed a pen ___ Sam.','from',['to','of'],'Borrow something from someone.'],
 ['We will meet in front ___ the office.','of',['to','from'],'In front of heißt vor.'],
 ['Please tell ___ Alex about the change.','Keine Präposition',['to','for'],'Tell someone: die Person folgt direkt.'],
 ['I am going ___ home after the meeting.','Keine Präposition',['to','at'],'Go home steht ohne to.']
]);
addQuestions('nouns',[
 ['Can you give me ___ advice?','some',['an','a'],'Advice ist unzählbar: some advice oder a piece of advice.'],
 ['We need ___ information about the contract.','more',['an','a'],'Information ist unzählbar.'],
 ['The office needs ___ new equipment.','some',['a','an'],'Equipment ist unzählbar; einzelne Gegenstände sind pieces of equipment.'],
 ['We have made ___ progress.','good',['a good','an good'],'Progress ist unzählbar und steht hier ohne a.'],
 ['She has ___ experience in sales.','a lot of',['an','a'],'Berufserfahrung ist hier unzählbar.'],
 ['The conference was ___ valuable experience.','a',['an','some'],'Ein einzelnes Erlebnis ist zählbar: a valuable experience.'],
 ['I am looking for ___ new job.','a',['an','some'],'Job ist zählbar und beginnt mit einem Konsonantenlaut.'],
 ['I am looking for ___ work.','some',['a','an'],'Work im Sinn von Arbeit ist unzählbar.'],
 ['Can you make ___ suggestion?','a',['an','some'],'Suggestion ist zählbar.'],
 ['We bought ___ new furniture.','some',['a','an'],'Furniture ist unzählbar.'],
 ['We need ___ permission to use this photo.','Kein Artikel',['a','an'],'Permission ist hier unzählbar.'],
 ['I have ___ good news for you.','some',['a','an'],'News ist unzählbar und wird mit Singularverb verwendet.'],
 ['She gave me two ___ of advice.','pieces',['advices','piece'],'Zwei Ratschläge heißen two pieces of advice.'],
 ['We do not have ___ time.','much',['many','a'],'Time im Sinn von verfügbarer Zeit ist unzählbar; much statt many.'],
 ['Is there ___ for everyone in the car?','room',['a room','rooms'],'Room bedeutet hier Platz und ist unzählbar.'],
 ['We booked ___ room for the meeting.','a',['an','some'],'Ein Zimmer oder Raum ist zählbar: a room.'],
 ['Please put your ___ here.','luggage',['luggages','a luggage'],'Luggage ist unzählbar.'],
 ['The team conducted ___ research.','some',['a','an'],'Research ist hier unzählbar.'],
 ['We bought ___ useful tool.','a',['an','some'],'Useful beginnt mit einem gesprochenen j-Laut; deshalb a useful tool.'],
 ['The incident caused ___ injury.','an',['a','some'],'Injury ist zählbar und beginnt mit einem Vokallaut.'],
 ['The report is printed on ___ recycled paper.','Kein Artikel',['a','an'],'Paper als Material ist unzählbar.'],
 ['She published ___ paper on leadership.','a',['an','some'],'Eine wissenschaftliche Arbeit ist zählbar: a paper.'],
 ['The window is made of ___.','glass',['a glass','glasses'],'Glass als Material ist unzählbar.'],
 ['Could I have ___ glass of water?','a',['an','some'],'Das Trinkgefäß ist zählbar: a glass.'],
 ['We were stuck in ___ heavy traffic.','Kein Artikel',['a','an'],'Traffic ist unzählbar.'],
 ['We need ___ accommodation for the business trip.','some',['an','a'],'Accommodation ist im britischen Englisch hier unzählbar.'],
 ['Have ___ good trip!','a',['an','some'],'Eine einzelne Reise ist zählbar.'],
 ['The news ___ encouraging.','is',['are','be'],'News sieht wie Plural aus, steht aber mit einem Singularverb.'],
 ['She has ___ long hair.','Kein Artikel',['a','an'],'Hair bezeichnet hier die Haare insgesamt und ist unzählbar.'],
 ['There is ___ hair on the document.','a',['an','some'],'Ein einzelnes Haar ist zählbar.'],
 ['They raised their glasses and made ___ toast.','a',['an','some'],'Ein Trinkspruch ist a toast; Toastbrot ist unzählbar.']
]);

grammarModules.push({id:'adjectives',title:'Abstufbare & starke Adjektive',icon:'↑',description:'Von tired zu knackered: Wortbedeutung, Verstärker und passende Sprache im Büro.',rules:[
 ['Abstufbar: gradable','Adjektive wie expensive, good-looking, useful, embarrassing, hard-working, tired, loud, annoying, confusing, sad, small und hungry beschreiben Eigenschaften mit unterschiedlichen Graden. Typische Verstärker sind very, quite oder extremely: very tired, extremely small.'],
 ['Stark oder absolut: non-gradable','Starke Adjektive enthalten bereits eine extreme Bedeutung: deafening = ohrenbetäubend, minuscule = winzig, famished = ausgehungert. Absolute Bedeutungen beschreiben einen Grenzpunkt, etwa worthless = wertlos. Oft passen absolutely, completely oder utterly; die natürliche Verbindung hängt vom einzelnen Wort ab. Really ist bei vielen normalen und starken Adjektiven möglich.'],
 ['Wert & Aussehen','Priceless = unschätzbar wertvoll, unbezahlbar; expensive = teuer. Ein Rat kann priceless sein, ohne einen Preis zu haben. Stunning = atemberaubend, beeindruckend oder umwerfend; good-looking = gut aussehend. Worthless = wertlos; not useful = nicht nützlich. Diese Paare sind keine exakten Synonyme.'],
 ['Gefühle & Einsatz','Cringeworthy = zum Fremdschämen, hochpeinlich; embarrassing = peinlich. Tireless = unermüdlich; hard-working = fleißig. Knackered = völlig erschöpft, todmüde; tired = müde. Knackered ist britisch und sehr umgangssprachlich; in einer formellen E-Mail passt exhausted besser.'],
 ['Lautstärke & Verständlichkeit','Deafening = ohrenbetäubend; loud = laut. Infuriating = äußerst ärgerlich, macht wütend; annoying = lästig oder ärgerlich. Incomprehensible = unverständlich; confusing = verwirrend. Etwas Verwirrendes ist nicht automatisch völlig unverständlich.'],
 ['Traurigkeit, Größe & Hunger','Tragic = tragisch, oft mit schwerem Leid oder Tod verbunden; sad = traurig. Minuscule = winzig; small = klein. Famished = ausgehungert, sehr hungrig; hungry = hungrig. Tragic ist stärker als sad und sollte bei kleinen beruflichen Problemen vorsichtig verwendet werden.'],
 ['Eine hilfreiche Lernregel, keine starre Grenze','Lerne natürliche Kombinationen: absolutely priceless, utterly worthless, absolutely stunning, utterly incomprehensible, absolutely famished. Nicht jedes starke Adjektiv passt gleich gut zu jedem Verstärker. Im echten Sprachgebrauch sind auch Abstufungen wie very embarrassing oder utterly infuriating möglich; diese Kategorien sind eine Lernhilfe.']
]});
addQuestions('adjectives',[
 ['Her advice was ___: it helped us avoid a costly mistake.','priceless',['hungry','deafening'],'Priceless bedeutet unschätzbar wertvoll; es bedeutet nicht einfach teuer.'],
 ['The new office is attractive; the view is absolutely ___.','stunning',['worthless','famished'],'Stunning bedeutet atemberaubend oder beeindruckend. Good-looking heißt gut aussehend.'],
 ['The outdated access code has no value now. It is ___.','worthless',['tireless','priceless'],'Worthless bedeutet wertlos. Not useful bedeutet nicht nützlich und ist nicht immer gleichbedeutend.'],
 ['The joke made everyone feel embarrassed. It was ___.','cringeworthy',['deafening','famished'],'Cringeworthy bedeutet zum Fremdschämen oder hochpeinlich; embarrassing heißt peinlich.'],
 ['Her ___ efforts kept the project moving; she never seemed to stop.','tireless',['worthless','minuscule'],'Tireless heißt unermüdlich; hard-working heißt fleißig.'],
 ['After the long journey, I felt ___. (British informal: very tired)','knackered',['stunning','priceless'],'Knackered heißt todmüde oder völlig erschöpft und ist sehr umgangssprachliches britisches Englisch.'],
 ['The construction noise was ___; we could barely hear each other.','deafening',['famished','worthless'],'Deafening heißt ohrenbetäubend und ist stärker als loud.'],
 ['The repeated software failure was ___; it made the whole team angry.','infuriating',['good-looking','hungry'],'Infuriating bedeutet äußerst ärgerlich oder wütend machend; annoying ist schwächer.'],
 ['Nobody could understand the instructions. They were ___.','incomprehensible',['tireless','priceless'],'Incomprehensible heißt unverständlich. Confusing heißt verwirrend.'],
 ['The accident caused a terrible loss of life. It was ___.','tragic',['minuscule','good-looking'],'Tragic bedeutet tragisch und bezieht sich oft auf schweres Leid oder Tod.'],
 ['The difference was ___: only 0.001 per cent.','minuscule',['deafening','famished'],'Minuscule bedeutet winzig oder äußerst klein; small heißt klein.'],
 ['We skipped breakfast and lunch. By evening, we were ___.','famished',['priceless','stunning'],'Famished bedeutet ausgehungert oder sehr hungrig; hungry heißt hungrig.'],
 ['The hotel was ___ expensive.','very',['many','much'],'Expensive ist abstufbar. Very expensive ist eine natürliche Kombination.'],
 ['The advice was ___ priceless.','absolutely',['many','much'],'Absolutely priceless ist eine natürliche Verstärkung: unschätzbar wertvoll.'],
 ['The damaged document was ___ worthless.','utterly',['many','much'],'Utterly worthless bedeutet völlig wertlos.'],
 ['The instructions were ___ incomprehensible.','utterly',['many','much'],'Utterly incomprehensible bedeutet völlig unverständlich.'],
 ['For a formal client email, replace “knackered” with ___.','exhausted',['famished','cringeworthy'],'Exhausted beschreibt starke Erschöpfung und passt besser in formelle Kommunikation.'],
 ['The ___ laptop cost far more than our budget allowed.','expensive',['priceless','famished'],'Expensive beschreibt einen hohen Preis. Priceless bedeutet unschätzbar wertvoll.']
]);

grammarModules.push({id:'numbers',title:'Zahlen auf Englisch',icon:'⅒',description:'Potenzen, Brüche und Ordnungszahlen sicher lesen und verwenden.',rules:[
 ['Potenzen: powers','10¹⁸ liest du ten to the power of eighteen. Allgemein: Basis + to the power of + Exponent. 10³ = ten to the power of three. Die Schreibweise 10^18 bedeutet dasselbe wie 10¹⁸.'],
 ['Quadrat und Kubik','Bei Exponent 2 und 3 sind kurze Formen üblich: 5² = five squared; 2³ = two cubed. Auch five to the power of two und two to the power of three sind richtig.'],
 ['Brüche: fractions','1/10 = one tenth. Der Zähler ist eine Grundzahl, der Nenner normalerweise eine Ordnungszahl: 1/3 = one third, 2/3 = two thirds. Bei einem Zähler größer als eins wird der Nenner in der Regel Plural.'],
 ['Half und quarter','1/2 = one half oder a half; 1/4 = one quarter oder a quarter; 3/4 = three quarters. 1½ = one and a half. In einer direkten Mengenangabe ist der Bruch zusammengehörig: a one-tenth share. Als alleinstehende Zahl ist one tenth üblich.'],
 ['Ordnungszahlen: ordinals','21st = twenty-first, mit Bindestrich. Die letzten Ziffern bestimmen normalerweise die Endung: 1st, 2nd, 3rd, 4th. Ausnahme: 11th, 12th, 13th. Daher 21st, 22nd, 23rd, 24th, aber 111th.'],
 ['Grundzahl oder Ordnungszahl?','Twenty-one zählt die Anzahl: twenty-one clients. Twenty-first bezeichnet die Position: our twenty-first client. Typische unregelmäßige Formen sind first, second, third, fifth, eighth, ninth und twelfth.'],
 ['Datumsangaben im Beruf','21 October wird beim Sprechen oft the twenty-first of October. In geschriebenen Business-Datumsangaben ist 21 October ohne st üblich. Eindeutige Monatsnamen vermeiden Verwechslungen zwischen britischer und amerikanischer Datumsreihenfolge.'],
 ['Zahlen bei Präsentationen','Ein Zehntel entspricht 10 %: One tenth of our sales come from exports. Bei Dezimalzahlen sagst du point und liest die Nachkommastellen einzeln: 0.25 = zero point two five. Im Englischen wird normalerweise ein Dezimalpunkt geschrieben.']
]});
addQuestions('numbers',[
 ['10¹⁸ is read as ___.','ten to the power of eighteen',['ten times eighteen','eighteen to the power of ten'],'Der Exponent 18 steht nach to the power of; die Basis ist ten.'],
 ['1/10 is read as ___.','one tenth',['one ten','ten first'],'Der Zähler ist one, der Nenner ist die Ordnungszahl tenth.'],
 ['21st is written in words as ___.','twenty-first',['twenty-one','twenty-oneth'],'Twenty-first bezeichnet die 21. Position und wird mit Bindestrich geschrieben.'],
 ['2/3 is read as ___.','two thirds',['two third','second three'],'Bei einem Zähler größer als eins steht der Nenner normalerweise im Plural.'],
 ['1/2 is read as ___.','one half',['one second','one halves'],'Für die Hälfte verwendest du half; one half und a half sind möglich.'],
 ['3/4 is read as ___.','three quarters',['three quarter','third four'],'Quarter bedeutet Viertel; bei drei Vierteln verwendest du quarters.'],
 ['5² can be read as ___.','five squared',['five cubed','two squared'],'Squared bedeutet hoch zwei. Five to the power of two ist ebenfalls richtig.'],
 ['2³ can be read as ___.','two cubed',['two squared','three cubed'],'Cubed bedeutet hoch drei. Two to the power of three ist ebenfalls richtig.'],
 ['The ordinal form of 11 is ___.','11th',['11st','11nd'],'11, 12 und 13 verwenden th, auch wenn sie auf 1, 2 oder 3 enden.'],
 ['The ordinal form of 22 is ___.','22nd',['22th','22st'],'22 endet auf 2 und gehört nicht zu den Ausnahmen 11, 12, 13: twenty-second.'],
 ['The ordinal form of 23 is ___.','23rd',['23th','23nd'],'23 endet auf 3: twenty-third.'],
 ['The ordinal form of 111 is ___.','111th',['111st','111rd'],'Die letzten zwei Ziffern sind 11; daher gilt die Ausnahme mit th.'],
 ['This is our ___ client. (Position 21)','twenty-first',['twenty-one','twenty-ones'],'Eine Position braucht eine Ordnungszahl.'],
 ['We have ___ clients. (Total: 21)','twenty-one',['twenty-first','twenty-oneth'],'Eine Anzahl braucht eine Grundzahl.'],
 ['0.25 is read as ___.','zero point two five',['zero comma twenty-five','zero point twenty-fifth'],'Bei Dezimalzahlen sagst du point und liest die Nachkommastellen einzeln.'],
 ['1½ hours is read as ___.','one and a half hours',['one and a halves hours','first and half hours'],'Für eineinhalb sagst du one and a half; das Nomen hours steht hier im Plural.'],
 ['The ordinal word for 12 is ___.','twelfth',['twelveth','twelve'],'Twelfth ist die korrekte, unregelmäßige Schreibweise von zwölfte.'],
 ['One tenth is equal to ___.','10 per cent',['1 per cent','100 per cent'],'Ein Zehntel entspricht 0.1 oder 10 %.']
]);

let grammarProgress={answered:0,correct:0,mastered:[]};
try{const saved=JSON.parse(localStorage.getItem('officeEnglishGrammar'));if(saved&&Number.isInteger(saved.answered)&&Number.isInteger(saved.correct)&&Array.isArray(saved.mastered))grammarProgress=saved}catch{}
let grammarQueue=[],grammarPosition=0,grammarScore=0,grammarLocked=false,grammarSelection='',grammarOptions=[],grammarMissed=[];
function saveGrammar(){try{localStorage.setItem('officeEnglishGrammar',JSON.stringify(grammarProgress))}catch{storageOk=false}}
function grammarShuffle(items){const a=items.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function grammar(){app.innerHTML=`<div class="eyebrow">Deine London-Lernthemen</div><h1>Grammatik, die dir hilft.</h1><p>${grammarModules.length} Themen aus deinen Lernunterlagen – verständlich erklärt und auf den Berufsalltag übertragen.</p><div class="toolbar"><button class="primary" id="grammar-mix">Alle Themen gemischt üben →</button><span class="tag">${grammarProgress.mastered.length} / ${grammarQuestions.length} Übungen richtig gelöst · ${grammarProgress.answered} Antworten</span></div><div class="topics">${grammarModules.map(m=>`<article class="card"><span class="icon">${m.icon}</span><h2>${m.title}</h2><p>${m.description}</p><p>${grammarQuestions.filter(q=>q.module===m.id).length} Übungen · jeweils 5 pro Runde</p><div class="toolbar"><button class="primary" data-grammar-start="${m.id}">Üben →</button><button class="secondary" data-grammar-lesson="${m.id}">Erklärung lesen</button></div></article>`).join('')}</div><p style="font-size:13px">Die Beispiele sind eigene Lernbeispiele nach den sichtbaren Themen deiner Fotos. Bei Varianten erklärt die App den jeweiligen Kontext. Britisches Englisch steht im Vordergrund.</p>`;document.getElementById('grammar-mix').onclick=()=>startGrammar();document.querySelectorAll('[data-grammar-start]').forEach(b=>b.onclick=()=>startGrammar(b.dataset.grammarStart));document.querySelectorAll('[data-grammar-lesson]').forEach(b=>b.onclick=()=>grammarLesson(b.dataset.grammarLesson))}
function grammarLesson(id){const m=grammarModules.find(m=>m.id===id);app.innerHTML=`<div class="quiz"><button class="secondary" id="grammar-back">← Grammatik</button><div class="eyebrow" style="margin-top:28px">Deine London-Lernthemen</div><h1>${m.title}</h1>${m.rules.map(([title,text])=>`<article class="card lesson"><h2>${title}</h2><p>${text}</p></article>`).join('')}<button class="primary" id="grammar-practice">Dieses Thema üben →</button></div>`;document.getElementById('grammar-back').onclick=()=>go('grammar');document.getElementById('grammar-practice').onclick=()=>startGrammar(id);window.scrollTo(0,0)}
function startGrammar(id='',repeat){grammarSelection=id;grammarQueue=repeat?grammarShuffle(repeat):grammarShuffle(grammarQuestions.filter(q=>!id||q.module===id)).slice(0,5);grammarPosition=0;grammarScore=0;grammarMissed=[];view='grammarQuiz';document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active',b.dataset.view==='grammar'));grammarQuestion();window.scrollTo(0,0)}
function grammarQuestion(){grammarLocked=false;const q=grammarQueue[grammarPosition];grammarOptions=grammarShuffle(q.options);app.innerHTML=`<div class="quiz"><div class="quiz-top"><button class="secondary" id="grammar-back">← Grammatik</button><span>${grammarModules.find(m=>m.id===q.module).title} · Frage ${grammarPosition+1} von ${grammarQueue.length}</span></div><div class="track"><div style="width:${grammarPosition/grammarQueue.length*100}%"></div></div><section class="card" style="margin-top:24px"><div class="question"><div class="eyebrow">Ergänze den Satz</div><h2 lang="en" style="font-size:27px;line-height:1.5">${q.prompt}</h2><p>Wähle die passende Form. „Kein Artikel“ oder „Keine Präposition“ lässt die Lücke leer.</p></div><div class="answers">${grammarOptions.map((a,i)=>`<button class="answer" data-grammar-answer="${i}">${a}</button>`).join('')}</div><div id="grammar-feedback" aria-live="polite"></div></section></div>`;document.getElementById('grammar-back').onclick=()=>go('grammar');document.querySelectorAll('[data-grammar-answer]').forEach(b=>b.onclick=()=>grammarAnswer(Number(b.dataset.grammarAnswer)))}
function grammarAnswer(index){if(grammarLocked||!Number.isInteger(index)||index<0||index>=grammarOptions.length)return;grammarLocked=true;const q=grammarQueue[grammarPosition],right=grammarOptions[index]===q.answer;if(right){grammarScore++;grammarProgress.correct++;if(!grammarProgress.mastered.includes(q.id))grammarProgress.mastered.push(q.id)}else grammarMissed.push(q);grammarProgress.answered++;let day=progress.days.find(d=>d.date===dateKey());if(!day){day={date:dateKey(),count:0};progress.days.push(day)}day.count++;save();saveGrammar();document.querySelectorAll('[data-grammar-answer]').forEach(b=>{b.disabled=true;const i=Number(b.dataset.grammarAnswer);if(grammarOptions[i]===q.answer)b.classList.add('correct');else if(i===index)b.classList.add('wrong')});document.getElementById('grammar-feedback').innerHTML=`<div class="feedback"><strong>${right?'✓ Richtig!':'Noch nicht ganz.'}</strong><p lang="en"><strong>${q.example}</strong></p><p>${q.explanation}</p><button class="primary" id="grammar-next">${grammarPosition===grammarQueue.length-1?'Ergebnis ansehen':'Nächste Frage'} →</button></div>`;document.getElementById('grammar-next').onclick=()=>{grammarPosition++;if(grammarPosition<grammarQueue.length)grammarQuestion();else grammarResult()}}
function grammarResult(){app.innerHTML=`<div class="quiz card"><div class="eyebrow">Grammatikrunde abgeschlossen</div><h1>${grammarScore===grammarQueue.length?'Stark gemacht!':'Ein Schritt weiter!'}</h1><p>Du hast ${grammarScore} von ${grammarQueue.length} Fragen richtig beantwortet.</p><div class="toolbar"><button class="primary" id="grammar-again">Weitere Runde →</button>${grammarMissed.length?'<button class="secondary" id="grammar-repeat">Fehler wiederholen</button>':''}<button class="secondary" id="grammar-back">Zur Grammatik</button></div>${grammarQueue.map(q=>`<article class="lesson"><div class="example"><strong lang="en">${q.example}</strong><p>${q.explanation}</p></div></article>`).join('')}</div>`;document.getElementById('grammar-again').onclick=()=>startGrammar(grammarSelection);document.getElementById('grammar-back').onclick=()=>go('grammar');if(grammarMissed.length){const missed=grammarMissed.slice();document.getElementById('grammar-repeat').onclick=()=>startGrammar(grammarSelection,missed)}}

const adjectivePairs=[
 ['good','gut','excellent','ausgezeichnet','The proposal is very good.','The proposal is absolutely excellent.'],
 ['bad','schlecht','awful','furchtbar','The connection is very bad.','The connection is absolutely awful.'],
 ['big','groß','enormous','riesig','The market is very big.','The market is absolutely enormous.'],
 ['small','klein','tiny / minuscule','winzig','The difference is very small.','The difference is absolutely tiny.'],
 ['hot','heiß','boiling','kochend heiß','The office is very hot.','The office is absolutely boiling.'],
 ['cold','kalt','freezing','eiskalt','The warehouse is very cold.','The warehouse is absolutely freezing.'],
 ['tired','müde','exhausted / knackered','erschöpft / todmüde','I am very tired.','I am completely exhausted.'],
 ['hungry','hungrig','famished / starving','ausgehungert / sehr hungrig','We are very hungry.','We are absolutely famished.'],
 ['angry','wütend','furious','rasend vor Wut','The customer is very angry.','The customer is absolutely furious.'],
 ['annoying','ärgerlich, lästig','infuriating','äußerst ärgerlich, wütend machend','The delay is very annoying.','The repeated delay is utterly infuriating.'],
 ['funny','lustig','hilarious','urkomisch','The story was very funny.','The story was absolutely hilarious.'],
 ['interesting','interessant','fascinating','faszinierend','The research is very interesting.','The research is absolutely fascinating.'],
 ['surprised','überrascht','astonished','erstaunt, verblüfft','We were very surprised.','We were absolutely astonished.'],
 ['afraid','ängstlich','terrified','erschrocken, voller Angst','He was very afraid.','He was absolutely terrified.'],
 ['dirty','schmutzig','filthy','sehr schmutzig, dreckig','The floor is very dirty.','The floor is absolutely filthy.'],
 ['crowded','voll, belebt','packed','dicht gedrängt, brechend voll','The train was very crowded.','The train was completely packed.'],
 ['loud','laut','deafening','ohrenbetäubend','The noise is very loud.','The noise is absolutely deafening.'],
 ['good-looking','gut aussehend','stunning','umwerfend, atemberaubend','The building is very good-looking.','The building is absolutely stunning.'],
 ['confusing','verwirrend','incomprehensible','unverständlich','The instructions are very confusing.','The instructions are utterly incomprehensible.'],
 ['embarrassing','peinlich','cringeworthy','zum Fremdschämen, hochpeinlich','The mistake was very embarrassing.','The joke was absolutely cringeworthy.']
];
const absoluteAdjectives=[
 ['perfect','perfekt','absolutely perfect','The timing is absolutely perfect.'],
 ['impossible','unmöglich','completely impossible','Meeting that deadline is completely impossible.'],
 ['empty','leer','completely empty','The meeting room is completely empty.'],
 ['full','voll','completely full','The calendar is completely full.'],
 ['essential','unverzichtbar, wesentlich','absolutely essential','Clear communication is absolutely essential.'],
 ['unique','einzigartig','truly unique','This design is truly unique.'],
 ['worthless','wertlos','utterly worthless','The expired voucher is utterly worthless.'],
 ['priceless','unschätzbar wertvoll','absolutely priceless','Your practical advice is absolutely priceless.'],
 ['tireless','unermüdlich','tireless efforts','Thank you for your tireless efforts.']
];
function adjectiveOverview(){app.innerHTML=`<button class="secondary" id="adjective-back">← Adjektivmodul</button><div class="eyebrow" style="margin-top:28px">Zum Nachschlagen</div><h1>Adjektive auf einen Blick.</h1><p>Abstufbare Adjektive beschreiben verschiedene Grade. Starke Adjektive enthalten bereits eine extreme Bedeutung; absolute Adjektive beschreiben einen Grenzpunkt.</p><div class="topics" style="margin-bottom:24px"><section class="card"><h2>Abstufbar</h2><p>Typische Verstärker: <strong>slightly, quite, fairly, very, extremely</strong>.</p><div class="example" lang="en">The report is very interesting.</div><p>Eine Eigenschaft kann stärker oder schwächer ausgeprägt sein.</p></section><section class="card"><h2>Nicht abstufbar</h2><p>Häufig passend: <strong>absolutely, completely, utterly</strong> – abhängig vom Wort.</p><div class="example" lang="en">The report is absolutely fascinating.</div><p><strong>Really</strong> ist bei vielen Adjektiven beider Gruppen möglich.</p></section></div><h2>Übliche Adjektive & starke Alternativen</h2><p>Die Paare zeigen ähnliche Bedeutungsfelder. Sie sind je nach Kontext unterschiedlich stark und keine exakten Synonyme.</p><div class="adjective-table-wrap"><table class="adjective-table"><caption>${adjectivePairs.length} häufige Adjektivpaare mit natürlichen Beispielsätzen</caption><thead><tr><th scope="col">Abstufbar</th><th scope="col">Starke Alternative</th><th scope="col">Beispiele</th></tr></thead><tbody>${adjectivePairs.map(r=>`<tr><td><strong lang="en">${r[0]}</strong><br><span>${r[1]}</span></td><td><strong lang="en">${r[2]}</strong><br><span>${r[3]}</span></td><td><div lang="en">${r[4]}</div><div lang="en" style="margin-top:8px;color:var(--green)">${r[5]}</div></td></tr>`).join('')}</tbody></table></div><h2 style="margin-top:30px">Absolute Bedeutungen & weitere Wörter aus deinem Foto</h2><div class="adjective-table-wrap"><table class="adjective-table"><caption>Grenzpunkte und feste Bedeutungen</caption><thead><tr><th scope="col">Adjektiv</th><th scope="col">Bedeutung</th><th scope="col">Typische Verbindung & Beispiel</th></tr></thead><tbody>${absoluteAdjectives.map(r=>`<tr><td><strong lang="en">${r[0]}</strong></td><td>${r[1]}</td><td><strong lang="en">${r[2]}</strong><p lang="en">${r[3]}</p></td></tr>`).join('')}</tbody></table></div><section class="card" style="margin-top:24px"><h2>Diese Unterschiede helfen dir im Alltag</h2><p><strong>Expensive → priceless:</strong> kein normales Verstärkungspaar. Expensive heißt teuer; priceless heißt unschätzbar wertvoll.</p><p><strong>Useful → worthless:</strong> worthless heißt wertlos; not useful heißt lediglich nicht nützlich.</p><p><strong>Hard-working → tireless:</strong> fleißig und unermüdlich sind verwandt, aber nicht identisch. Tireless wird oft direkt ohne Verstärker verwendet.</p><p><strong>Sad → tragic:</strong> tragic bezeichnet meist schweres Leid; es ist mehr als eine stärkere Form von traurig.</p><p><strong>Knackered:</strong> sehr umgangssprachliches britisches Englisch. In formellen Nachrichten verwende exhausted.</p><p><strong>Keine starre Grenze:</strong> Manche Adjektive werden im tatsächlichen Sprachgebrauch auch abgestuft, etwa more fascinating oder almost empty. Die Kategorien erklären typische Kombinationen; sie verbieten nicht jede andere Form. Quite kann je nach Wort und Kontext „ziemlich“ oder „völlig“ bedeuten.</p></section><button class="primary" id="adjective-practice" style="margin-top:24px">Adjektive üben →</button>`;document.getElementById('adjective-back').onclick=()=>grammarLesson('adjectives');document.getElementById('adjective-practice').onclick=()=>startGrammar('adjectives');window.scrollTo(0,0)}
const originalGrammarLesson=grammarLesson;
grammarLesson=function(id){originalGrammarLesson(id);if(id==='adjectives'){const link=document.createElement('button');link.className='secondary';link.style.marginBottom='24px';link.textContent='Adjektivübersicht öffnen →';link.onclick=adjectiveOverview;document.querySelector('.quiz').insertBefore(link,document.getElementById('grammar-practice'))}};
const adjectiveTableStyle=document.createElement('style');adjectiveTableStyle.textContent='.adjective-table-wrap{overflow-x:auto;background:white;border:1px solid var(--line);border-radius:16px}.adjective-table{width:100%;border-collapse:collapse;text-align:left;line-height:1.6;min-width:650px}.adjective-table caption{text-align:left;padding:16px 20px;color:var(--muted);font-size:13px}.adjective-table th{background:#edf3e8;color:var(--green)}.adjective-table th,.adjective-table td{padding:16px 20px;vertical-align:top;border-bottom:1px solid var(--line)}.adjective-table td span{color:var(--muted);font-size:14px}.adjective-table td p{margin:6px 0}.adjective-table tr:last-child td{border-bottom:0}';document.head.appendChild(adjectiveTableStyle);

// Ergänzungen aus IMG_2646 und IMG_2647. Vorhandene Paare bleiben erhalten.
adjectivePairs.find(r=>r[0]==='good')[2]='excellent / fantastic';
adjectivePairs.find(r=>r[0]==='good')[3]='ausgezeichnet / fantastisch';
adjectivePairs.push(
 ['pretty','hübsch','gorgeous','wunderschön','The design is very pretty.','The design is absolutely gorgeous.'],
 ['ugly','hässlich','hideous','scheußlich, sehr hässlich','The old sign is very ugly.','The old sign is absolutely hideous.'],
 ['surprising','überraschend','astounding','erstaunlich, verblüffend','The results are very surprising.','The results are absolutely astounding.'],
 ['clean','sauber','spotless','makellos sauber','The office is very clean.','The office is completely spotless.'],
 ['old','alt','ancient','uralt; antik','The computer is very old.','The computer is absolutely ancient.']
);
const additionalGradable=[
 ['kind','freundlich, hilfsbereit','very kind','It was very kind of you to help.','Beschreibt freundliches oder fürsorgliches Verhalten.'],
 ['nice','nett, angenehm','really nice','The new office is really nice.','Ein allgemeines Wort für etwas Angenehmes; im Beruf ist eine präzisere Beschreibung oft hilfreich.'],
 ['expensive','teuer','extremely expensive','The new equipment is extremely expensive.','Beschreibt einen hohen Preis und lässt sich abstufen.'],
 ['risky','riskant','quite risky','Launching without testing is quite risky.','Beschreibt ein Risiko; very risky und less risky sind möglich.'],
 ['complex','komplex','highly complex','The process is highly complex.','Beschreibt viele miteinander verbundene Teile. Highly complex ist eine natürliche Verbindung.'],
 ['high','hoch','very high','The costs are very high.','Bezieht sich hier auf die Höhe eines Betrags, nicht auf die Geschwindigkeit.'],
 ['fast','schnell','extremely fast','The new system is extremely fast.','Fast kann Adjektiv oder Adverb sein: a fast system; it runs fast.'],
 ['profitable','profitabel, gewinnbringend','highly profitable','The project is highly profitable.','Beschreibt, dass Gewinn erzielt wird; highly profitable und more profitable sind üblich.']
];
const additionalStrong=[
 ['terrible','schrecklich, sehr schlecht','absolutely terrible','The customer service was absolutely terrible.','Eine starke negative Bewertung; im Sprachgebrauch auch very terrible möglich, aber absolutely terrible ist hier die natürliche Lernverbindung.'],
 ['fantastic','fantastisch, großartig','absolutely fantastic','The team did an absolutely fantastic job.','Verstärkt eine positive Bewertung. Fantastic bedeutet hier nicht riesig: big → enormous oder huge.'],
 ['useless','nutzlos, unbrauchbar','completely useless','The broken scanner is completely useless.','Beschreibt fehlenden Nutzen; worthless beschreibt fehlenden Wert. In manchen Kontexten ist more useless möglich.'],
 ['wonderful','wunderbar','absolutely wonderful','The feedback was absolutely wonderful.','Eine starke positive Bewertung; really wonderful ist ebenfalls natürlich.'],
 ['outrageous','empörend, unerhört; unverschämt','absolutely outrageous','The unexpected fee is absolutely outrageous.','Bei einem Preis oft unverschämt hoch. Abscheulich ist je nach Kontext möglich, aber nicht die allgemeine Übersetzung.'],
 ['ridiculous','lächerlich, absurd','utterly ridiculous','The proposed deadline is utterly ridiculous.','Beschreibt etwas Unvernünftiges oder Absurdes. Das Wort kann schroff wirken; in einer höflichen E-Mail besser unrealistic.']
];
const adjectiveModule=grammarModules.find(m=>m.id==='adjectives');
adjectiveModule.rules.push(
 ['Abstufbarkeit ist nicht dasselbe wie Steigerung','Gradable bedeutet: Eine Eigenschaft kann unterschiedlich stark ausgeprägt sein, etwa slightly risky, very risky oder less risky. Komparativ und Superlativ sind Formen des Vergleichs: riskier, riskiest. Bei starken und absoluten Bedeutungen bevorzugt die Lernregel andere Verstärker, erlaubt aber je nach Kontext Ausnahmen.'],
 ['Neue Wörter aus deinen Notizen','Pretty → gorgeous, ugly → hideous, surprising → astounding, clean → spotless und old → ancient ergänzen die Übersicht. Ancient kann historisch antik bedeuten oder umgangssprachlich uralt. Surprising beschreibt die Sache; surprised das Gefühl einer Person.'],
 ['Korrektur: big und fantastic','Fantastic heißt fantastisch oder großartig. Es ist keine stärkere Größenangabe zu big. Verwende für sehr groß enormous oder huge. Good → fantastic ist dagegen ein passendes Bewertungspaar.'],
 ['Korrektur: promptly ist ein Adverb','Promptly bedeutet unverzüglich, umgehend oder pünktlich und beschreibt die Handlung: Please reply promptly. Das Adjektiv lautet prompt: Thank you for your prompt reply. Promptly gehört daher nicht in die Adjektivliste.'],
 ['Passende Verstärker wählen','Totally, absolutely und completely sind keine beliebig austauschbare Liste. Lerne konkrete Verbindungen: absolutely fantastic, completely useless, utterly ridiculous, highly profitable. Auch starke Adjektive werden im tatsächlichen Sprachgebrauch manchmal mit very oder in Vergleichsformen verwendet.']
);
const previousAdjectiveOverview=adjectiveOverview;
adjectiveOverview=function(){previousAdjectiveOverview();const section=document.createElement('section');section.style.marginTop='30px';section.innerHTML=`<h2>Weitere Business-Adjektive aus deinen Notizen</h2>${[[additionalGradable,'Abstufbare Adjektive'],[additionalStrong,'Starke Bewertungen']].map(([rows,title])=>`<div class="adjective-table-wrap" style="margin-bottom:24px"><table class="adjective-table"><caption>${title}</caption><thead><tr><th scope="col">Wort & Bedeutung</th><th scope="col">Verbindung & Beispiel</th><th scope="col">Erklärung</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong lang="en">${r[0]}</strong><br>${r[1]}</td><td><strong lang="en">${r[2]}</strong><p lang="en">${r[3]}</p></td><td>${r[4]}</td></tr>`).join('')}</tbody></table></div>`).join('')}<div class="card"><h2>Korrekturen zu den Fotos</h2><p><strong>Big → fantastic:</strong> Für Größe verwende enormous oder huge. Fantastic heißt großartig.</p><p><strong>Promptly:</strong> ein Adverb, kein Adjektiv. „Please reply promptly.“ Das Adjektiv prompt bedeutet zügig, umgehend oder pünktlich.</p><p><strong>Surprising / surprised:</strong> Eine Nachricht ist surprising; die Person ist surprised.</p><p><strong>Ancient:</strong> historisch antik oder uralt; bei alter Technik oft eine humorvolle Übertreibung.</p></div>`;app.insertBefore(section,document.getElementById('adjective-practice'))};

const londonBusinessWords=[
 ['markup','Preisaufschlag','Projekte','The selling price includes a 25 per cent markup.','Markup ist ein Aufschlag auf die Kosten. Bei Kosten von 80 und Verkaufspreis 100 beträgt der Aufschlag 20 / 80 = 25 %. Als Verb: mark up the price.'],
 ['profit margin','Gewinnmarge','Projekte','Our profit margin on this product is 20 per cent.','Die Marge bezieht den Gewinn auf den Umsatz. Im vereinfachten Beispiel mit Kosten 80 und Verkaufspreis 100: 20 / 100 = 20 %. Markup und margin sind daher nicht gleich. Weitere Kosten können die tatsächlich ausgewiesene Gewinnmarge verändern.'],
 ['to turn down','ablehnen','Networking','We had to turn down the offer.','Turn down bedeutet ein Angebot oder eine Bitte ablehnen. Mit Pronomen: turn it down, nicht turn down it. Es kann auch leiser stellen bedeuten: turn down the volume.'],
 ['to get on board','sich einer Idee oder einem Vorhaben anschließen','Networking','We need everyone to get on board with the plan.','Im Business-Kontext bedeutet get on board with a plan einen Plan unterstützen und mitmachen. Wörtlich kann es auch an Bord gehen heißen.'],
 ['to arrange','organisieren, vereinbaren oder ordnen','Meetings','Could you arrange a meeting for next week?','Arrange a meeting heißt ein Meeting organisieren; arrange to meet heißt ein Treffen vereinbaren. Arrange kann auch Gegenstände ordnen bedeuten.'],
 ['to match','entsprechen, passen oder zuordnen','Projekte','The solution must match the client’s requirements.','Match kann Anforderungen entsprechen, zusammenpassen oder zuordnen bedeuten: match each word with its definition.'],
 ['promptly','umgehend, unverzüglich oder pünktlich','E-Mails','Please reply promptly.','Promptly ist ein Adverb und beschreibt eine Handlung. Das Adjektiv heißt prompt: a prompt reply.']
];
for(const entry of londonBusinessWords){if(!vocab.some(w=>w[0]===entry[0]))vocab.push(entry)}
lessons.push(['Markup und Marge unterscheiden','Ein Aufschlag bezieht sich auf die Kosten, eine Marge auf den Umsatz. Kosten 80, Verkaufspreis 100: 25 % markup, aber 20 % margin. Das ist ein vereinfachtes Sprachbeispiel; weitere Kosten verändern die tatsächliche Marge.','A 25 per cent markup gives us a 20 per cent margin in this example.','Ein Preisaufschlag von 25 % ergibt in diesem Beispiel eine Marge von 20 %.'],['Angebote ablehnen und Pläne unterstützen','Turn down heißt ablehnen; get on board with a plan heißt einen Plan unterstützen und mitmachen. Für höfliche Ablehnungen hilft eine kurze Begründung.','We had to turn down the offer, but we are on board with the new plan.','Wir mussten das Angebot ablehnen, unterstützen aber den neuen Plan.']);

const originalGo=go,originalHome=home;
go=function(next){if(next==='grammar'){view=next;document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active',b.dataset.view===next));grammar();window.scrollTo(0,0)}else originalGo(next)};
home=function(){originalHome();const section=document.createElement('section');section.className='card';section.style.marginTop='24px';section.innerHTML=`<div class="eyebrow">Neu · Deine London-Lernthemen</div><h2 style="margin-top:14px">Vom Arbeitsblatt in den Alltag.</h2><p>Typische Fehler, Gerundium & Infinitiv, Präpositionen, unzählbare Nomen, starke Adjektive und Zahlen auf Englisch: ${grammarQuestions.length} Übungen mit direkten Erklärungen.</p><p>${grammarProgress.mastered.length} Übungen richtig gelöst · ${grammarProgress.answered?Math.round(grammarProgress.correct/grammarProgress.answered*100):0}% richtige Grammatikantworten</p><button class="primary" id="open-grammar">Grammatik entdecken →</button>`;app.appendChild(section);document.getElementById('open-grammar').onclick=()=>go('grammar')};
const grammarNav=document.createElement('button');grammarNav.dataset.view='grammar';grammarNav.textContent='Grammatik';grammarNav.onclick=()=>go('grammar');document.querySelector('nav').insertBefore(grammarNav,document.querySelector('[data-view="tips"]'));
const grammarStyle=document.createElement('style');grammarStyle.textContent='nav{flex-wrap:wrap;justify-content:center}@media(max-width:760px){.topics{grid-template-columns:1fr}.question h2{overflow-wrap:anywhere}}';document.head.appendChild(grammarStyle);
home();
