(function() { var a=this,b=function(k,g){var e=k.split("."),d=a;e[0]in d||!d.execScript||d.execScript("var "+e[0]);for(var f;e.length&&(f=e.shift());)e.length||void 0===g?d=d[f]?d[f]:d[f]={}:d[f]=g};var c;
c={s:["v. Chr.","n. Chr."],r:["v. Chr.","n. Chr."],w:"JFMAMJJASOND".split(""),H:"JFMAMJJASOND".split(""),v:"Januar Februar M\u00e4rz April Mai Juni Juli August September Oktober November Dezember".split(" "),G:"Januar Februar M\u00e4rz April Mai Juni Juli August September Oktober November Dezember".split(" "),C:"Jan. Feb. M\u00e4r. Apr. Mai Juni Juli Aug. Sep. Okt. Nov. Dez.".split(" "),J:"Jan Feb M\u00e4r Apr Mai Jun Jul Aug Sep Okt Nov Dez".split(" "),N:"Sonntag Montag Dienstag Mittwoch Donnerstag Freitag Samstag".split(" "),L:"Sonntag Montag Dienstag Mittwoch Donnerstag Freitag Samstag".split(" "),
F:"So. Mo. Di. Mi. Do. Fr. Sa.".split(" "),K:"So Mo Di Mi Do Fr Sa".split(" "),A:"SMDMDFS".split(""),I:"SMDMDFS".split(""),D:["Q1","Q2","Q3","Q4"],B:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"],p:["vorm.","nachm."],q:["EEEE, d. MMMM y","d. MMMM y","dd.MM.y","dd.MM.yy"],M:["HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm"],R:["{1} {0}","{1} {0}","{1} {0}","{1} {0}"],t:0,O:[5,6],u:3};var h={c:".",f:",",j:"%",o:"0",m:"+",h:"-",e:"E",l:"\u2030",g:"\u221e",i:"NaN",b:"#,##0.###",n:"#E0",k:"#,##0%",a:"\u00a4#,##0.00;(\u00a4#,##0.00)",d:"USD"},h={c:",",f:".",j:"%",o:"0",m:"+",h:"-",e:"E",l:"\u2030",g:"\u221e",i:"NaN",b:"#,##0.###",n:"#E0",k:"#,##0\u00a0%",a:"#,##0.00\u00a0\u00a4",d:"EUR"};b("I18N_DATETIMESYMBOLS_ERAS",c.s);b("I18N_DATETIMESYMBOLS_ERANAMES",c.r);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",c.w);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",c.H);b("I18N_DATETIMESYMBOLS_MONTHS",c.v);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",c.G);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",c.C);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",c.J);b("I18N_DATETIMESYMBOLS_WEEKDAYS",c.N);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",c.L);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",c.F);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",c.K);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",c.A);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",c.I);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",c.D);b("I18N_DATETIMESYMBOLS_QUARTERS",c.B);b("I18N_DATETIMESYMBOLS_AMPMS",c.p);b("I18N_DATETIMESYMBOLS_DATEFORMATS",c.q);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",c.M);b("I18N_DATETIMESYMBOLS_AVAILABLEFORMATS",c.Q);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",c.t);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",c.O);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",c.u);void 0!==c.P&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",c.P);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",h.c);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",h.f);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",h.j);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",h.o);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",h.m);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",h.h);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",h.e);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",h.l);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",h.g);
b("I18N_NUMBERFORMATSYMBOLS_NAN",h.i);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",h.b);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",h.n);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",h.k);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",h.a);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",h.d); })();
