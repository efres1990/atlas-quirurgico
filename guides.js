// Guías clínicas, calculadoras, checklists, informe y modo revisión.
// Todo el texto es un resumen parafraseado en español; la redacción, el grado y el alcance exactos están en el original (enlace DOI).
const doi = d => `<a href="https://doi.org/${d}" target="_blank" rel="noopener">doi:${d}</a>`;

// grade: 'F' fuerte · 'D' débil/condicional · 'BP' buena práctica · 'E' enunciado (statement) · '?' no verificado aquí
export const GUIDES = {
  pared: [
    { id:'ehs_inc23', soc:'EHS', year:2023, title:'Hernia incisional de línea media',
      ref:'Sanders DL et al. Br J Surg 2023;110:1732–68', doi:'10.1093/bjs/znad284',
      scope:'Adultos, hernia incisional primaria de línea media con defecto ≤ 10 cm, cerrable sin separación de componentes.',
      recs:[
        ['Informar de que IMC alto, tabaco, diabetes e inmunosupresión aumentan el riesgo; la infección del sitio quirúrgico es el factor modificable más potente.','BP'],
        ['Imagen si la exploración no es concluyente; la TC es la más sensible (ecografía o RM con Valsalva aceptables).','D'],
        ['TC o RM para planificar la cirugía.','BP'],
        ['La TC no predice con exactitud si la fascia cerrará sin liberación miofascial. Orientan a técnica avanzada: anchura > 8 cm, área > 164 cm², ratio recto/defecto < 1,34 o CSI > 0,146.','D / BP'],
        ['Hernia reducible: riesgo bajo de evento agudo (≈ 1 % al año, 2,5 % a 5 años). Ofrecer reparación si afecta a la calidad de vida, con decisión compartida.','BP'],
        ['Optimizar antes: pérdida de peso, HbA1c, dejar de fumar, preparación respiratoria. Si no se consigue adelgazar, valorar con el paciente si retrasar compensa.','BP'],
        ['Reparación con malla frente a sutura.','F (certeza muy baja)'],
        ['Malla en posición retromuscular. Conocer también onlay e intraperitoneal; cautela con mallas en contacto con vísceras.','F (certeza muy baja) / BP'],
      ],
      note:'Abordaje (abierto/laparoscópico/robótico), tipo y fijación de malla, cierre del defecto en laparoscopia, drenajes y postoperatorio: consulta las preguntas clave siguientes en el original.' },
    { id:'closure22', soc:'EHS + AHS', year:2022, title:'Cierre de incisiones de pared abdominal (prevención)',
      ref:'Deerenberg EB et al. Br J Surg 2022;109:1239–50', doi:'10.1093/bjs/znac302',
      recs:[
        ['Preferir laparoscopia e incisiones no medias (también para la extracción de pieza) cuando sea seguro.','D'],
        ['Laparotomía media electiva: sutura continua con «puntos pequeños» (small bites) e hilo de absorción lenta.','D'],
        ['Valorar malla profiláctica tras laparotomía media electiva en pacientes de riesgo: malla sintética permanente en onlay o retromuscular.','D'],
        ['Cerrar la fascia de los trócares ≥ 10 mm, sobre todo en el ombligo y tras puerto único.','D'],
        ['Sin recomendación sobre malla profiláctica en laparotomía urgente ni sobre fajas.','—'],
      ] },
    { id:'umb20', soc:'EHS + AHS', year:2020, title:'Hernia umbilical y epigástrica',
      ref:'Henriksen NA et al. Br J Surg 2020;107:171–90', doi:'10.1002/bjs.11489',
      recs:[
        ['Reparación con malla para mejorar la recurrencia (umbral orientativo de defecto ≥ 1 cm).','?'],
        ['Abierta: posición preperitoneal preferente.','?'],
        ['Laparoscópica a considerar en defectos grandes o pacientes con más riesgo de complicación de herida.','?'],
      ], note:'No he revisado el texto completo aquí: verifica umbrales y grados en el original.' },
    { id:'rd21', soc:'EHS', year:2021, title:'Diástasis de rectos',
      ref:'Hernández-Granados P et al. Br J Surg 2021;108:1189–91', doi:'10.1093/bjs/znab128',
      recs:[
        ['Definición: ensanchamiento de la línea alba > 2 cm.','BP (fuerte)'],
        ['Diagnóstico clínico en la mayoría; para medir con precisión, ecografía o calibre 3 cm por encima del ombligo. TC útil si se sospecha hernia asociada o para planificar.','F / D'],
        ['Síntomas principales a valorar: imagen corporal e inestabilidad del core (con PROMs).','BP'],
        ['Fisioterapia puede considerarse antes de la cirugía.','D'],
        ['Sin hernia asociada: plicatura de la línea alba. Con hernia de línea media: reparación con malla (la plicatura puede bastar si la hernia es < 1 cm).','D'],
        ['Faja postoperatoria sugerida; sin programa de rehabilitación específico recomendable.','BP'],
      ] },
    { id:'psh18', soc:'EHS', year:2018, title:'Hernia paraestomal: prevención y tratamiento',
      ref:'Antoniou SA et al. Hernia 2018;22:183–98', doi:'10.1007/s10029-017-1697-5',
      recs:[
        ['Diagnóstico clínico; TC o ecografía si hay duda. Usar la clasificación EHS para comunicar resultados.','—'],
        ['Malla sintética no absorbible profiláctica al construir una colostomía terminal (2018: fuerte; la actualización de prevención de 2023 revisó esta recomendación).','F (2018)'],
        ['Evitar la reparación con sutura en cirugía electiva.','F'],
        ['En reparación laparoscópica, malla sin orificio (tipo Sugarbaker) preferible a keyhole.','D'],
      ], note:'Comprueba la actualización EHS 2023 sobre prevención (J Abdom Wall Surg) antes de aplicar la recomendación de malla profiláctica.' },
    { id:'emerg26', soc:'EHS', year:2026, title:'Hernia ventral primaria e incisional urgente',
      ref:'EHS. J Abdom Wall Surg 2026;5:16228', url:'https://www.frontierspartnerships.org/journals/journal-of-abdominal-wall-surgery',
      recs:[['Si el cierre directo es posible, se sugiere malla frente a sutura, con independencia del grado de contaminación.','D']], },
  ],
  ingle: [
    { id:'hs18', soc:'HerniaSurge', year:2018, title:'Guía internacional de hernia inguinal',
      ref:'HerniaSurge Group. Hernia 2018;22:1–165', doi:'10.1007/s10029-017-1668-x',
      recs:[
        ['Varones asintomáticos o poco sintomáticos: la espera vigilada es una opción.','—'],
        ['Mujeres: abordaje laparoendoscópico preferente por el riesgo de hernia femoral.','—'],
        ['Bilateral y recidiva tras abordaje anterior: abordaje posterior (laparoendoscópico).','—'],
      ], note:'Grados exactos en el original.' },
    { id:'hs23', soc:'HerniaSurge', year:2023, title:'Actualización 2023',
      ref:'HerniaSurge Group. BJS Open 2023;7:zrad080', doi:'10.1093/bjsopen/zrad080',
      recs:[
        ['Malla en la mayoría de los pacientes.','F'],
        ['Sin malla: posible con selección cuidadosa y decisión compartida si hay experiencia; Shouldice es la técnica recomendada.','D / F'],
        ['Preperitoneal abierta con malla plana: alternativa aceptable a Lichtenstein si hay experiencia.','D'],
        ['Hernia primaria unilateral en ambos sexos: laparoendoscópica si hay cirujano con experiencia y recursos; Lichtenstein sigue siendo la primera opción en ciertos pacientes o hernias.','F (elevada)'],
        ['La malla no aumenta el dolor crónico; la laparoendoscopia se asocia a menos dolor crónico que Lichtenstein.','E'],
      ] },
  ],
  ueg: [
    { id:'sages24', soc:'SAGES', year:2024, title:'Hernia de hiato',
      ref:'SAGES. Surg Endosc 2024;38:4765–75', url:'https://pubmed.ncbi.nlm.nih.gov/?term=SAGES+guidelines+hiatal+hernia+Surg+Endosc+2024',
      recs:[
        ['Fundoplicatura sistemática en la reparación de hernia de hiato.','D (certeza baja)'],
        ['Malla: sin recomendación (evidencia insuficiente).','—'],
        ['Hernias tipo II–IV asintomáticas: puede ofrecerse reparación en pacientes seleccionados.','D'],
        ['Recidiva: valorar conversión a bypass gástrico en Y de Roux en pacientes seleccionados.','D'],
      ], },
    { id:'esge23', soc:'ESGE', year:2023, title:'Esófago de Barrett',
      ref:'Weusten BLAM et al. Endoscopy 2023;55:1124–46', doi:'10.1055/a-2176-2440',
      recs:[
        ['Estándares de vigilancia: ≥ 1 min de inspección por cm, fotodocumentación, Praga (y París si hay lesión), biopsias dirigidas y 4 cuadrantes cada 2 cm.','F'],
        ['Intervalo según extensión máxima (M): 1–3 cm cada 5 años; 3–10 cm cada 3 años; ≥ 10 cm, centro experto.','D'],
        ['Z irregular / mucosa columnar < 1 cm: sin biopsias ni vigilancia rutinarias.','D'],
        ['Puede suspenderse la vigilancia a los 75 años o con esperanza de vida < 5 años.','D'],
        ['Tras resección endoscópica de displasia o cáncer: erradicar el Barrett residual por ablación.','F'],
        ['T1a bien/moderadamente diferenciado sin invasión linfovascular: la resección endoscópica es curativa.','F'],
        ['Tras erradicación: si DAG/ADC basal, control a 1, 2, 3, 4, 5, 7 y 10 años; si DBG, a 1, 3 y 5 años.','F'],
      ] },
    { id:'jgca6', soc:'JGCA', year:2021, title:'Cáncer gástrico (6.ª edición)',
      ref:'JGCA. Gastric Cancer 2023;26:1–25', doi:'10.1007/s10120-022-01331-8',
      recs:[
        ['T1: margen macroscópico de 2 cm (clips endoscópicos si el borde no es claro).','—'],
        ['T2 o más: margen proximal ≥ 3 cm (crecimiento expansivo, tipos 1–2) o ≥ 5 cm (infiltrativo, tipos 3–4); si no se cumple, biopsia intraoperatoria del margen.','—'],
        ['Invasión esofágica: no hace falta > 5 cm, pero conviene biopsia intraoperatoria para confirmar R0.','—'],
        ['Esplenectomía o disección del hilio (grupo 10): no aconsejada si no hay invasión de curvatura mayor; débilmente recomendada si la hay.','F en contra / D a favor'],
        ['Con invasión esofágica se añaden 19, 20 y 110 a la D2 (total y proximal). Cáncer de la UEG con invasión esofágica > 4 cm: mediastínicos 106recR, 107, 108, 109, 111, 112.','—'],
      ], note:'La tabla D1/D1+/D2 está en «Linfadenectomía gástrica (JGCA)».' },
    { id:'ifso22', soc:'ASMBS + IFSO', year:2022, title:'Indicaciones de cirugía metabólica y bariátrica',
      ref:'Eisenberg D et al. Obes Surg 2023;33:3–14 / SOARD 2022;18:1345–56', doi:'10.1016/j.soard.2022.08.013',
      recs:[
        ['Recomendada con IMC ≥ 35, haya o no comorbilidad.','—'],
        ['A considerar con IMC 30–34,9 y enfermedad metabólica.','—'],
        ['A considerar desde IMC 30 si no se logra pérdida de peso sustancial o duradera con tratamiento no quirúrgico.','—'],
        ['Población asiática: IMC > 25 sugiere obesidad clínica y debe ofrecerse cirugía desde IMC > 27,5.','—'],
        ['Niños y adolescentes seleccionados: considerar cirugía.','—'],
      ] },
  ],
  cr: [
    { id:'esmo25', soc:'ESMO', year:2025, title:'Cáncer de recto localizado',
      ref:'Hofheinz RD et al. Ann Oncol 2025;36:1007–24', doi:'10.1016/j.annonc.2025.05.528',
      recs:[
        ['La decisión neoadyuvante se basa en la RM: margen circunferencial predicho (1 mm), EMVI y subestadio T3 (c/d).','—'],
        ['La RM también estima la extensión quirúrgica necesaria para un margen libre (> 1 mm).','—'],
      ], note:'Algoritmos completos (TNT, preservación de órgano) en el original. Resumen parcial.' },
    { id:'nl_crc', soc:'Guía holandesa CRC', year:'', title:'Extensión de la resección en recto',
      ref:'Richtlijnendatabase · Colorectaal carcinoom', url:'https://richtlijnendatabase.nl/richtlijn/colorectaal_carcinoom_crc/primaire_behandeling_rectumcarcinoom_bij_crc/uitgebreidheid_van_de_resectie_rc.html',
      recs:[
        ['Buscar un margen distal ≥ 1 cm en la ETM; un margen patológico libre > 1 mm se considera radical.','—'],
        ['Planificar tipo y extensión con la RM basal y de reestadificación; objetivo: margen circunferencial > 1 mm.','—'],
        ['Preferir ligadura baja preservando la cólica izquierda, valorando incluir los ganglios del origen de la AMI.','—'],
      ] },
    { id:'psh18cr', soc:'EHS', year:2018, title:'Prevención de hernia paraestomal', ref:'Antoniou SA et al. Hernia 2018;22:183–98', doi:'10.1007/s10029-017-1697-5',
      recs:[['Valorar malla profiláctica al construir una colostomía terminal (revisa la actualización de 2023).','F (2018)']] },
  ],
  cuello: [
    { id:'ata25', soc:'ATA', year:2025, title:'Cáncer diferenciado de tiroides (adultos)',
      ref:'Ringel MD et al. Thyroid 2025;35:841–985 · resumen ejecutivo Thyroid 2025;35:1214–20', doi:'10.1177/10507256251390877',
      recs:[
        ['Cirugía del cáncer de tiroides por cirujano de alto volumen (≥ 25 tiroidectomías/año).','—'],
        ['Estudios moleculares: pueden considerarse para planificar la cirugía; no de forma rutinaria.','—'],
        ['cT1 (≤ 2 cm) sin extensión extratiroidea macroscópica y cN0M0: lobectomía como cirugía inicial, salvo cánceres bilaterales u otra indicación.','—'],
        ['cT2N0M0 (> 2 y ≤ 4 cm) de bajo riesgo: la lobectomía puede ser preferible por menor riesgo; informar de posible conversión o totalización.','—'],
        ['> 4 cm, extensión extratiroidea macroscópica, cN1 o cM1: tiroidectomía total y resección de los ganglios afectados.','—'],
        ['Totalización: «puede considerarse» (antes «debería ofrecerse») por persistencia, para radioyodo o para seguimiento con tiroglobulina.','—'],
        ['Más peso a la vigilancia activa, la decisión compartida y las técnicas ablativas.','—'],
      ], note:'La 2025 sustituye a la ATA 2015 para el cáncer diferenciado. Grados y matices en el original.' },
    { id:'aaes20', soc:'AAES', year:2020, title:'Tratamiento quirúrgico de la enfermedad tiroidea',
      ref:'Patel KN et al. Ann Surg 2020;271:e21–e93', doi:'10.1097/SLA.0000000000003580',
      recs:[
        ['Ecografía diagnóstica en todo paciente con sospecha de nódulo tiroideo.','F (alta)'],
        ['TSH en toda enfermedad nodular.','F (baja)'],
        ['PAAF según criterios ecográficos, tamaño y clínica de las guías establecidas.','F (moderada)'],
        ['Disección a lo largo de la cápsula tiroidea para preservar las paratiroides.','F (baja)'],
        ['Si una paratiroides no puede preservarse: autotrasplante.','F (baja)'],
        ['La biopsia intraoperatoria tiene valor para confirmar tejido paratiroideo.','F (moderada)'],
        ['Graves con oftalmopatía moderada-grave: valorar tiroidectomía total como tratamiento definitivo de primera línea, por cirujano de alto volumen.','F'],
      ], note:'66 recomendaciones en total (incluye neuromonitorización, vaciamientos, hipocalcemia y reoperación).' },
    { id:'phpt22', soc:'5.º Workshop internacional', year:2022, title:'Hiperparatiroidismo primario',
      ref:'Bilezikian JP et al. J Bone Miner Res 2022;37:2293–314', doi:'10.1002/jbmr.4677',
      recs:[
        ['En el hiperparatiroidismo primario asintomático se recomienda la cirugía para curar la enfermedad (con indicaciones).','F (alta)'],
        ['Indicaciones: calcio > 1 mg/dl sobre el límite superior; osteoporosis (T ≤ −2,5) o fractura vertebral; FG < 60; litiasis o nefrocalcinosis; calciuria > 250 mg/24 h (mujeres) o > 300 mg/24 h (varones); edad < 50.','—'],
        ['La evidencia no basta para operar solo para mejorar síntomas neurocognitivos, calidad de vida o parámetros cardiovasculares.','—'],
      ] },
    { id:'beth23', soc:'Bethesda', year:2023, title:'Citología tiroidea (3.ª edición)',
      ref:'Ali SZ et al. Thyroid 2023;33:1039–44', doi:'10.1089/thy.2023.0141',
      recs:[
        ['Seis categorías con nombre único: I no diagnóstica, II benigna, III AUS (atipia de significado incierto), IV neoplasia folicular, V sospechosa de malignidad, VI maligna.','—'],
        ['Riesgo medio de malignidad: I ≈ 13 %, II ≈ 4 %, III ≈ 22 %, IV ≈ 30 %, V ≈ 74 %, VI ≈ 97 %.','—'],
        ['AUS se subdivide en atipia nuclear y otras; nomenclatura alineada con la OMS 2022.','—'],
      ] },
  ],
};

export const CHECKS = {
  ingle: [{ id:'cvmpo', title:'Visión crítica del orificio miopectíneo (TEP/TAPP)', ref:'Daes J, Felix E. Ann Surg 2017;266:e1–e2',
    items:['Sínfisis del pubis y ligamento de Cooper expuestos (cruzando la línea media)','Espacio de Retzius disecado hasta la vejiga','Vasos epigástricos inferiores identificados','Espacio de Bogros disecado lateralmente hasta la espina iliaca anterosuperior','Tracto iliopúbico identificado (nervios por debajo, sin grapas ni puntos)','Elementos del cordón parietalizados (deferente y vasos gonadales libres del peritoneo)','Saco reducido y lipomas del cordón / preperitoneales reducidos','Psoas visible; espacio suficiente para una malla que cubra todo el orificio','Orificios directo, indirecto y femoral (y obturador) revisados'] }],
  pared: [{ id:'awr', title:'Checklist preoperatorio de reparación de pared', ref:'Basado en EHS 2023 (KQ1–7)',
    items:['TC/RM de planificación revisada (anchura, área, ratio recto/defecto)','Tabaco: abandono documentado','IMC y HbA1c optimizados o decisión compartida documentada','Contaminación / estoma / ISQ previa registrada','Malla retromuscular planificada (o motivo para otra posición)','Necesidad de separación de componentes estimada (anchura > 8 cm, ratio < 1,34)','Cierre de laparotomía planificado con small bites'] }],
  ueg: [{ id:'hh', title:'Reparación de hernia de hiato y fundoplicatura', ref:'Práctica quirúrgica habitual; no son recomendaciones formales de guía',
    items:['Saco herniario resecado / reducido completamente','Esófago abdominal sin tensión (orientativo: ≥ 2–3 cm)','Vagos anterior y posterior identificados y preservados','Pilares cerrados (posterior ± anterior) sin tensión excesiva','Fundoplicatura (SAGES 2024 la sugiere de forma sistemática)','Decisión sobre malla documentada (SAGES: sin recomendación)'] }],
  cuello: [{ id:'tt', title:'Tiroidectomía segura', ref:'AAES 2020; neuromonitorización según INMSG (Randolph 2011). Lista orientativa',
    items:['Laringoscopia / evaluación de la voz preoperatoria según riesgo','Neuromonitorización: V1 y R1 antes de la resección','Rama externa del NLS identificada o protegida (ligadura selectiva de la ATS)','NLR identificado en todo su trayecto cervical','Paratiroides: n.º identificadas y preservadas in situ','Autotrasplante si alguna desvascularizada (y localización)','Ligadura de ramas terciarias de la ATI, no del tronco','R2 y V2 al finalizar; si pérdida de señal en el primer lado, valorar diferir el contralateral','Hemostasia (Valsalva) y plan de calcio/PTH postoperatorio'] }],
  cr: [{ id:'tme', title:'Calidad de la escisión total del mesorrecto', ref:'Quirke / MERCURY; guía holandesa CRC',
    items:['Ligadura de la AMI (alta / baja con ganglios del origen) documentada','Nervios hipogástricos y plexo preservados','Plano de la fascia mesorrectal (holy plane) respetado','Margen distal ≥ 1 cm (macroscópico)','Pieza: grado de mesorrecto (completo / casi completo / incompleto)','Margen circunferencial > 1 mm en anatomía patológica','≥ 12 ganglios en la pieza'] }],
};

// ---------- calculadoras ----------
const num = (el, k) => +(el.querySelector(`[data-c="${k}"]`)?.value || 0);
const chk = (el, k) => !!el.querySelector(`[data-c="${k}"]`)?.checked;
const sel = (el, k) => el.querySelector(`[data-c="${k}"]`)?.value;
const row = (lab, inner) => `<label><span>${lab}</span>${inner}</label>`;
const cb = k => `<input type="checkbox" data-c="${k}">`;
const nu = (k, v, mn, mx, st = 1) => `<input type="number" data-c="${k}" value="${v}" min="${mn}" max="${mx}" step="${st}" style="width:70px">`;
const sl = (k, opts) => `<select data-c="${k}">${opts.map(o => `<option value="${o[0]}">${o[1]}</option>`).join('')}</select>`;

export const CALCS = {
  pared: [
    { id:'herniascore', title:'HERNIAscore (riesgo de hernia incisional)', ref:'Goodenough CJ et al. J Am Coll Surg 2015;220:405–13', doi:'10.1016/j.jamcollsurg.2014.12.027',
      form: () => row('Abordaje', sl('ap', [['0','Laparoscopia (incisiones < 15 mm)'],['3','Laparoscopia asistida con la mano'],['4','Laparotomía']])) + row('EPOC', cb('copd')) + row('IMC ≥ 25', cb('bmi')),
      calc: el => { const s = +sel(el,'ap') + chk(el,'copd') + chk(el,'bmi'); const c = s <= 3 ? ['I','≈ 5 % en la cohorte de validación'] : s <= 5 ? ['II','≈ 20 %'] : ['III','≈ 55 %'];
        return { txt:`HERNIAscore ${s} → clase ${c[0]} (${c[1]})`, html:`<b>${s} puntos · clase ${c[0]}</b><br>Hernia incisional observada: ${c[1]} (seguimiento mediano 41 meses).` }; } },
    { id:'vhwg', title:'Grado VHWG modificado (riesgo de complicación de herida)', ref:'Kanters AE et al. J Am Coll Surg 2012;215:787–93', doi:'10.1016/j.jamcollsurg.2012.08.012',
      form: () => row('Fumador', cb('smk')) + row('Diabetes', cb('dm')) + row('Obesidad (IMC ≥ 30)', cb('ob')) + row('EPOC', cb('copd')) + row('Infección de herida previa', cb('ssi')) + row('Campo limpio-contaminado, contaminado o sucio', cb('cont')),
      calc: el => { const g = chk(el,'cont') ? 3 : (chk(el,'smk')||chk(el,'dm')||chk(el,'ob')||chk(el,'copd')||chk(el,'ssi')) ? 2 : 1; const t = ['','bajo riesgo','comorbilidad','contaminado'][g];
        return { txt:`VHWG modificado: grado ${g} (${t})`, html:`<b>Grado ${g}</b> · ${t}` }; } },
    { id:'ehsinc', title:'Clasificación EHS de hernia incisional', ref:'Muysoms FE et al. Hernia 2009;13:407–14', doi:'10.1007/s10029-009-0518-x',
      form: () => row('Localización', sl('loc', ['M1','M2','M3','M4','M5','L1','L2','L3','L4'].map(z => [z, z]))) + row('Anchura W (cm)', nu('w', 6, 0, 40, .5)) + row('Longitud L (cm)', nu('l', 8, 0, 40, .5)) + row('Recurrente', cb('rec')),
      calc: el => { const w = num(el,'w'), l = num(el,'l'); const W = w < 4 ? 'W1' : w <= 10 ? 'W2' : 'W3';
        const t = `EHS: ${sel(el,'loc')} · ${W} (W ${w} × L ${l} cm) · ${chk(el,'rec') ? 'recurrente' : 'primaria'}`;
        const adv = w > 8 ? '<br><span class="bad">Anchura > 8 cm: EHS 2023 orienta a valorar técnica avanzada (separación de componentes).</span>' : '';
        return { txt:t, html:`<b>${t}</b>${adv}` }; } },
    { id:'rd', title:'Diástasis de rectos (EHS 2021)', ref:'Hernández-Granados P et al. 2021', doi:'10.1093/bjs/znab128',
      form: () => row('Distancia inter-rectos 3 cm sobre el ombligo (cm)', nu('ird', 3, 0, 15, .1)) + row('Hernia de línea media asociada', cb('h')) + row('Hernia < 1 cm', cb('small')) + row('Posparto', cb('pp')),
      calc: el => { const d = num(el,'ird'); if (d <= 2) return { txt:`IRD ${d} cm: no cumple la definición de diástasis (> 2 cm)`, html:`IRD ${d} cm · <b>no es diástasis</b> según EHS (> 2 cm).` };
        const tx = chk(el,'h') ? (chk(el,'small') ? 'plicatura puede bastar (hernia < 1 cm) o reparación con malla' : 'reparación con malla') : 'plicatura de la línea alba (fisioterapia previa a considerar)';
        return { txt:`Diástasis ${d} cm${chk(el,'pp') ? ' posparto' : ''}: ${tx}`, html:`<b>Diástasis ${d} cm</b>${chk(el,'pp') ? ' · posparto' : ''}<br>Sugerencia EHS: ${tx}.` }; } },
  ],
  ingle: [
    { id:'ehsing', title:'Clasificación EHS inguinal', ref:'Miserez M et al. Hernia 2007;11:113–6', doi:'10.1007/s10029-007-0198-3',
      form: () => row('Primaria / recidivada', sl('pr', [['P','P'],['R','R']])) + row('Tipo', sl('t', [['L','L (lateral/indirecta)'],['M','M (medial/directa)'],['F','F (femoral)']])) + row('Tamaño (dedos ≈ 1,5 cm)', sl('s', [['0','0'],['1','1 (≤ 1,5 cm)'],['2','2 (1,5–3 cm)'],['3','3 (> 3 cm)'],['X','X (no explorado)']])),
      calc: el => { const t = `EHS ${sel(el,'pr')}${sel(el,'t')}${sel(el,'s')}`; return { txt:t, html:`<b>${t}</b>` }; } },
    { id:'hsdec', title:'Orientación de abordaje (HerniaSurge 2018/2023)', ref:'HerniaSurge 2018 · actualización 2023', doi:'10.1093/bjsopen/zrad080',
      form: () => row('Sexo', sl('sx', [['m','Varón'],['f','Mujer']])) + row('Síntomas', sl('sy', [['n','Asintomática / mínimos'],['s','Sintomática']])) + row('Bilateral', cb('bi')) + row('Recidiva tras abordaje anterior', cb('ra')) + row('Recidiva tras abordaje posterior', cb('rp')) + row('Experiencia laparoendoscópica disponible', cb('ex')) + row('Contraindicación a anestesia general', cb('ga')),
      calc: el => { const L = []; if (sel(el,'sx') === 'm' && sel(el,'sy') === 'n') L.push('espera vigilada es una opción razonable');
        if (chk(el,'ra')) L.push('recidiva anterior → abordaje posterior (laparoendoscópico)');
        else if (chk(el,'rp')) L.push('recidiva posterior → abordaje anterior (Lichtenstein)');
        else if (chk(el,'ga')) L.push('anestesia general no deseable → Lichtenstein con anestesia local');
        else if (chk(el,'ex')) L.push((chk(el,'bi') ? 'bilateral' : 'primaria unilateral') + ' → laparoendoscópica (TEP/TAPP) recomendada con experiencia');
        else L.push('sin experiencia laparoendoscópica → Lichtenstein');
        if (sel(el,'sx') === 'f') L.push('mujer: explorar el orificio femoral (laparoendoscopia preferente)');
        L.push('malla en la mayoría (fuerte)'); const t = 'Inguinal: ' + L.join('; ');
        return { txt:t, html:'<ul>' + L.map(x => `<li>${x}</li>`).join('') + '</ul>' }; } },
  ],
  ueg: [
    { id:'barrett', title:'Vigilancia de Barrett (ESGE 2023)', ref:'Weusten BLAM et al. Endoscopy 2023', doi:'10.1055/a-2176-2440',
      form: ctx => row('Praga C (cm)', nu('C', ctx.BAR ? ctx.BAR.C : 2, 0, 20, .5)) + row('Praga M (cm)', nu('M', ctx.BAR ? ctx.BAR.M : 4, 0, 20, .5)) + row('Edad', nu('age', 60, 18, 100)) + row('Esperanza de vida < 5 años', cb('le')) + row('Displasia / lesión visible', cb('dys')),
      calc: el => { const C = num(el,'C'), M = Math.max(num(el,'M'), C), a = num(el,'age'); let r;
        if (chk(el,'dys')) r = 'displasia o lesión visible: valoración en centro experto y tratamiento endoscópico (no aplica el intervalo de no displásico)';
        else if (M < 1) r = '< 1 cm: sin biopsias ni vigilancia rutinarias';
        else if (a >= 75 || chk(el,'le')) r = '≥ 75 años o esperanza de vida < 5 años: puede suspenderse la vigilancia';
        else if (M < 3) r = 'vigilancia cada 5 años'; else if (M < 10) r = 'vigilancia cada 3 años'; else r = '≥ 10 cm: remitir a centro experto';
        const bx = M >= 1 ? ` · biopsias Seattle: ${Math.ceil(M / 2)} niveles × 4 cuadrantes · inspección ≥ ${Math.ceil(M)} min` : '';
        const t = `Barrett C${C}M${M}: ${r}${bx}`; return { txt:t, html:`<b>C${C} M${M}</b><br>${r}${bx}` }; } },
    { id:'bmi', title:'Indicación bariátrica (ASMBS/IFSO 2022)', ref:'ASMBS/IFSO 2022', doi:'10.1016/j.soard.2022.08.013',
      form: () => row('Peso (kg)', nu('kg', 110, 30, 300)) + row('Talla (cm)', nu('cm', 170, 120, 220)) + row('Enfermedad metabólica (p. ej. DM2)', cb('met')) + row('Fracaso del tratamiento no quirúrgico', cb('fail')) + row('Población asiática', cb('asia')),
      calc: el => { const b = num(el,'kg') / ((num(el,'cm') / 100) ** 2), A = chk(el,'asia'); let r;
        if (A && b > 27.5) r = 'ofrecer cirugía (umbral asiático > 27,5)';
        else if (b >= 35) r = 'cirugía recomendada (≥ 35, con o sin comorbilidad)';
        else if (b >= 30 && chk(el,'met')) r = 'considerar cirugía (30–34,9 con enfermedad metabólica)';
        else if (b >= 30 && chk(el,'fail')) r = 'considerar cirugía (≥ 30 sin pérdida sustancial o duradera con tratamiento médico)';
        else r = 'fuera de los umbrales de la guía';
        const t = `IMC ${b.toFixed(1)}: ${r}`; return { txt:t, html:`<b>IMC ${b.toFixed(1)} kg/m²</b><br>${r}` }; } },
    { id:'jgca', title:'Extensión de linfadenectomía y margen (JGCA 6.ª)', ref:'JGCA. Gastric Cancer 2023;26:1–25', doi:'10.1007/s10120-022-01331-8',
      form: () => row('Gastrectomía', sl('g', [['T','Total'],['D','Distal'],['P','Preservadora de píloro'],['X','Proximal']])) + row('Extensión', sl('d', [['1','D1'],['1+','D1+'],['2','D2']])) + row('T', sl('t', [['1','T1'],['2','T2 o más']])) + row('Crecimiento (Borrmann)', sl('b', [['e','Expansivo (1–2)'],['i','Infiltrativo (3–4)']])) + row('Invasión esofágica', cb('eso')) + row('Invasión de curvatura mayor', cb('gc')),
      calc: el => { const T = { T:{ '1':'1–7', '1+':'1–7, 8a, 9, 11p', '2':'1–7, 8a, 9, 11p, 11d, 12a' }, D:{ '1':'1, 3, 4sb, 4d, 5, 6, 7', '1+':'1, 3, 4sb, 4d, 5, 6, 7, 8a, 9', '2':'1, 3, 4sb, 4d, 5, 6, 7, 8a, 9, 11p, 12a' }, P:{ '1':'1, 3, 4sb, 4d, 6, 7', '1+':'1, 3, 4sb, 4d, 6, 7, 8a, 9', '2':null }, X:{ '1':'1, 2, 3a, 4sa, 4sb, 7', '1+':'1, 2, 3a, 4sa, 4sb, 7, 8a, 9, 11p', '2':'1, 2, 3a, 4sa, 4sb, 7, 8a, 9, 11p, 11d' } };
        const g = sel(el,'g'), d = sel(el,'d'); let st = T[g][d]; if (!st) st = 'D2 no definida para esta gastrectomía en el texto revisado';
        else if (d === '2' && chk(el,'eso') && (g === 'T' || g === 'X')) st += ' + 19, 20, 110';
        const m = sel(el,'t') === '1' ? '2 cm' : (sel(el,'b') === 'e' ? '≥ 3 cm' : '≥ 5 cm') + ' proximal';
        const sp = (g === 'T' || g === 'X') ? (chk(el,'gc') ? 'grupo 10/esplenectomía: débilmente recomendada (invasión de curvatura mayor)' : 'grupo 10/esplenectomía: no aconsejada') : '';
        const t = `JGCA D${d}: grupos ${st}. Margen ${m}${chk(el,'eso') ? ' (invasión esofágica: biopsia intraoperatoria del margen)' : ''}.${sp ? ' ' + sp + '.' : ''}`;
        return { txt:t, html:t }; } },
  ],
  cuello: [
    { id:'tirads', title:'ACR TI-RADS (nódulo tiroideo)', ref:'Tessler FN et al. J Am Coll Radiol 2017;14:587–95', doi:'10.1016/j.jacr.2017.01.046',
      form: () => row('Composición', sl('co', [['0','Quística o espongiforme'],['1','Mixta quística-sólida'],['2','Sólida o casi sólida']])) + row('Ecogenicidad', sl('ec', [['0','Anecoica'],['1','Hiper/isoecoica'],['2','Hipoecoica'],['3','Muy hipoecoica']])) + row('Forma', sl('sh', [['0','Más ancho que alto'],['3','Más alto que ancho']])) + row('Márgenes', sl('ma', [['0','Lisos o mal definidos'],['2','Lobulados o irregulares'],['3','Extensión extratiroidea']])) + row('Focos ecogénicos', sl('fo', [['0','Ninguno o artefacto en cola de cometa grande'],['1','Macrocalcificaciones'],['2','Calcificación periférica (anillo)'],['3','Focos ecogénicos puntiformes']])) + row('Tamaño máximo (cm)', nu('sz', 1.5, 0, 10, .1)),
      calc: el => { const p = ['co','ec','sh','ma','fo'].reduce((a, k) => a + +sel(el, k), 0); const sz = num(el, 'sz');
        const tr = p <= 1 ? 1 : p === 2 ? 2 : p === 3 ? 3 : p <= 6 ? 4 : 5; const TH = { 3:[2.5,1.5], 4:[1.5,1.0], 5:[1.0,.5] };
        let r = tr <= 2 ? 'sin PAAF' : sz >= TH[tr][0] ? 'PAAF' : sz >= TH[tr][1] ? 'seguimiento ecográfico' : 'sin PAAF ni seguimiento por tamaño';
        const t = `TI-RADS TR${tr} (${p} puntos), ${sz} cm: ${r}`; return { txt:t, html:`<b>TR${tr}</b> · ${p} puntos<br>${r}${tr >= 3 ? `<br><span class="steps">Umbrales TR${tr}: PAAF ≥ ${TH[tr][0]} cm, seguimiento ≥ ${TH[tr][1]} cm</span>` : ''}` }; } },
    { id:'bethesda', title:'Bethesda 2023: riesgo y conducta habitual', ref:'Ali SZ et al. Thyroid 2023', doi:'10.1089/thy.2023.0141',
      form: () => row('Categoría', sl('b', [['1','I · No diagnóstica'],['2','II · Benigna'],['3','III · AUS'],['4','IV · Neoplasia folicular'],['5','V · Sospechosa de malignidad'],['6','VI · Maligna']])),
      calc: el => { const B = { 1:['≈ 13 %','repetir PAAF guiada por ecografía'], 2:['≈ 4 %','seguimiento clínico y ecográfico'], 3:['≈ 22 %','repetir PAAF, test molecular, lobectomía diagnóstica o vigilancia'], 4:['≈ 30 %','test molecular o lobectomía diagnóstica'], 5:['≈ 74 %','test molecular, lobectomía o tiroidectomía'], 6:['≈ 97 %','lobectomía o tiroidectomía'] }[sel(el, 'b')];
        const t = `Bethesda ${sel(el, 'b')}: riesgo de malignidad ${B[0]}; conducta habitual: ${B[1]}`; return { txt:t, html:`Riesgo medio <b>${B[0]}</b><br>${B[1]}` }; } },
    { id:'ataext', title:'Extensión de la cirugía en cáncer diferenciado (ATA 2025)', ref:'ATA 2025', doi:'10.1177/10507256251390877',
      form: () => row('Tamaño (cm)', nu('sz', 1.8, 0, 15, .1)) + row('Extensión extratiroidea macroscópica', cb('ete')) + row('Ganglios clínicos (cN1)', cb('n1')) + row('Metástasis a distancia (cM1)', cb('m1')) + row('Nódulos / cáncer contralateral', cb('bil')),
      calc: el => { const sz = num(el, 'sz'); let r;
        if (chk(el, 'ete') || chk(el, 'n1') || chk(el, 'm1') || sz > 4) r = 'tiroidectomía total y resección de los ganglios afectados';
        else if (chk(el, 'bil')) r = 'valorar tiroidectomía total (afectación o nódulos contralaterales)';
        else if (sz <= 2) r = 'lobectomía (cT1N0M0)';
        else r = 'lobectomía puede ser preferible (cT2N0M0 de bajo riesgo); total según rasgos y preferencia';
        const t = `CDT ${sz} cm: ${r}`; return { txt:t, html:`<b>${r}</b>` }; } },
    { id:'phpt', title:'Indicación quirúrgica en HPTP asintomático (2022)', ref:'Bilezikian JP et al. JBMR 2022', doi:'10.1002/jbmr.4677',
      form: () => row('Calcio sobre el límite superior (mg/dl)', nu('ca', .6, 0, 5, .1)) + row('T-score mínimo', nu('t', -1.8, -6, 3, .1)) + row('Fractura vertebral', cb('vf')) + row('FG (ml/min)', nu('gfr', 80, 5, 150)) + row('Litiasis / nefrocalcinosis', cb('st')) + row('Calciuria (mg/24 h)', nu('uca', 200, 0, 800, 10)) + row('Sexo', sl('sx', [['f','Mujer'],['m','Varón']])) + row('Edad', nu('age', 60, 18, 100)),
      calc: el => { const L = []; if (num(el, 'ca') > 1) L.push('calcio > 1 mg/dl sobre el límite'); if (num(el, 't') <= -2.5) L.push('T-score ≤ −2,5'); if (chk(el, 'vf')) L.push('fractura vertebral');
        if (num(el, 'gfr') < 60) L.push('FG < 60'); if (chk(el, 'st')) L.push('litiasis/nefrocalcinosis'); if (num(el, 'uca') > (sel(el, 'sx') === 'f' ? 250 : 300)) L.push('hipercalciuria'); if (num(el, 'age') < 50) L.push('edad < 50');
        const t = L.length ? 'HPTP: indicación quirúrgica (' + L.join(', ') + ')' : 'HPTP: sin criterios clásicos; cirugía posible si no hay contraindicación (decisión compartida)';
        return { txt:t, html:L.length ? `<b>Indicación</b>: ${L.join(', ')}` : 'Sin criterios clásicos de indicación.' }; } },
  ],
  cr: [
    { id:'tmeq', title:'Margen circunferencial y distal', ref:'Guía holandesa CRC · ESMO 2025', url:'https://doi.org/10.1016/j.annonc.2025.05.528',
      form: () => row('Margen circunferencial (mm)', nu('crm', 3, 0, 30, .1)) + row('Margen distal (mm)', nu('dm', 15, 0, 100, .5)) + row('Grado de mesorrecto', sl('q', [['1','Completo (plano mesorrectal)'],['2','Casi completo (intramesorrectal)'],['3','Incompleto (muscular propia)']])),
      calc: el => { const c = num(el,'crm'), d = num(el,'dm'); const t = `Recto: MRC ${c} mm (${c <= 1 ? 'POSITIVO ≤ 1 mm' : 'negativo'}); margen distal ${d} mm (${d > 1 ? (d >= 10 ? 'objetivo ≥ 1 cm cumplido' : 'radical (> 1 mm) pero < 1 cm') : 'afecto'}); mesorrecto grado ${sel(el,'q')}`;
        return { txt:t, html:t.replace('POSITIVO', '<span class="bad">POSITIVO</span>') }; } },
  ],
};

// ---------- estado (localStorage opcional) ----------
const LS = 'atlas_review_v1';
let REV = {}; try { REV = JSON.parse(localStorage.getItem(LS) || '{}'); } catch (e) {}
const save = () => { try { localStorage.setItem(LS, JSON.stringify(REV)); } catch (e) {} };
export const REPORT = {}; // id -> texto

const GTXT = { F:'Fuerte', D:'Débil / condicional', BP:'Buena práctica', E:'Enunciado', '?':'No verificado aquí', '—':'Ver original' };
function gradeBadge(g) { const k = g.split(' ')[0]; return `<span class="gr gr-${k.replace(/[^A-Z?]/g, '') || 'x'}" title="${GTXT[k] || g}">${g}</span>`; }

export function guidesHTML(vid, ctx) {
  const G = GUIDES[vid] || [], C = CALCS[vid] || [], K = CHECKS[vid] || [];
  const tab = ctx.gtab || 'g'; const T = (k, t) => `<button class="btn ${tab === k ? 'on' : ''}" data-gtab="${k}">${t}</button>`;
  let h = `<h2>Guías y herramientas</h2><div>${T('g', 'Guías')}${T('c', 'Calculadoras')}${T('k', 'Checklists')}${T('r', 'Informe')}${T('v', 'Revisión')}</div>`;
  if (tab === 'g') {
    h += '<p class="sub">Resumen parafraseado. Antes de aplicarlo a un paciente, lee la recomendación literal en el original.</p>';
    for (const g of G) { const r = REV[g.id];
      h += `<details class="gcard"${G.length < 3 ? ' open' : ''}><summary><b>${g.soc} ${g.year}</b> · ${g.title}${r && r.ok ? ' <span class="okb">✓ revisado</span>' : ''}</summary>
      ${g.scope ? `<p class="steps">${g.scope}</p>` : ''}<ul class="recs">${g.recs.map(([t, gr]) => `<li>${t} ${gradeBadge(gr)}</li>`).join('')}</ul>
      ${g.note ? `<div class="tip">${g.note}</div>` : ''}<div class="src">${g.ref} · ${g.doi ? doi(g.doi) : `<a href="${g.url}" target="_blank" rel="noopener">enlace</a>`}</div></details>`; }
    if (!G.length) h += '<p>Sin guías específicas para esta vista.</p>';
  }
  if (tab === 'c') { for (const c of C) h += `<div class="tool calc" data-calc="${c.id}"><b>${c.title}</b>${c.form(ctx)}<div class="cres"></div><button class="btn" data-addrep="${c.id}">Añadir al informe</button><div class="src">${c.ref}${c.doi ? ' · ' + doi(c.doi) : ''}</div></div>`; if (!C.length) h += '<p>Sin calculadoras para esta vista. En «Pared abdominal» está el simulador de defecto y malla.</p>'; }
  if (tab === 'k') { for (const k of K) { const st = (REV['ck_' + k.id] || {}).items || [];
      h += `<div class="tool" data-ck="${k.id}"><b>${k.title}</b>${k.items.map((t, i) => `<label style="justify-content:flex-start"><input type="checkbox" data-cki="${i}" ${st[i] ? 'checked' : ''}> <span>${t}</span></label>`).join('')}<button class="btn" data-ckrep="${k.id}">Añadir al informe</button><button class="btn" data-ckclr="${k.id}">Desmarcar</button><div class="src">${k.ref}</div></div>`; }
    if (!K.length) h += '<p>Sin checklist para esta vista.</p>'; }
  if (tab === 'r') { const auto = ctx.auto ? ctx.auto() : [];
    const txt = [`Atlas 3D quirúrgico · ${new Date().toLocaleDateString('es-ES')}`, ...auto, ...Object.values(REPORT)].join('\n');
    h += `<p class="sub">Junta los resultados del simulador y de las calculadoras. Sin datos identificativos: añade solo un código interno.</p><textarea id="repTxt" rows="12" style="width:100%;background:#0b1118;color:var(--txt,#e6edf3);border:1px solid var(--line);border-radius:6px;font:12px/1.4 ui-monospace,monospace">${txt}</textarea>
      <button class="btn" data-repcopy>Copiar</button><button class="btn" data-repclr>Vaciar</button><div class="warn">Texto de apoyo, no un informe clínico validado.</div>`; }
  if (tab === 'v') {
    h += `<p class="sub">Para que un experto (tu pareja, un tutor) valide cada ficha. Se guarda en este navegador.</p><label class="tool" style="display:flex;gap:8px"><span>Revisor/a</span><input id="revWho" value="${(REV._who || '').replace(/"/g, '&quot;')}" style="flex:1"></label>`;
    for (const g of G) { const r = REV[g.id] || {};
      h += `<div class="tool"><label style="justify-content:flex-start"><input type="checkbox" data-revok="${g.id}" ${r.ok ? 'checked' : ''}> <b>${g.soc} ${g.year} · ${g.title}</b></label><textarea data-revn="${g.id}" rows="2" placeholder="Correcciones, matices, práctica local…" style="width:100%">${r.n || ''}</textarea>${r.d ? `<div class="steps">Última revisión: ${r.d}${r.who ? ' · ' + r.who : ''}</div>` : ''}</div>`; }
    h += `<button class="btn" data-revexp>Copiar revisión (JSON)</button><button class="btn" data-revimp>Importar revisión</button>`;
  }
  return h + '<p style="margin-top:12px"><a data-gclose="1">← Volver al resumen</a></p>';
}

const copy = async t => { try { await navigator.clipboard.writeText(t); return true; } catch (e) { return false; } };

export function wireGuides(el, vid, ctx, rerender) {
  el.querySelectorAll('[data-gtab]').forEach(b => b.onclick = () => { ctx.gtab = b.dataset.gtab; rerender(); });
  el.querySelectorAll('[data-gclose]').forEach(a => a.onclick = e => { e.preventDefault(); ctx.close(); });
  for (const c of CALCS[vid] || []) { const box = el.querySelector(`[data-calc="${c.id}"]`); if (!box) continue;
    const run = () => { const r = c.calc(box); box.querySelector('.cres').innerHTML = `<div class="tip">${r.html}</div>`; box._r = r; };
    box.querySelectorAll('[data-c]').forEach(i => i.oninput = i.onchange = run); run();
    box.querySelector('[data-addrep]').onclick = () => { REPORT[c.id] = box._r.txt; const b = box.querySelector('[data-addrep]'); b.textContent = '✓ Añadido'; setTimeout(() => b.textContent = 'Añadir al informe', 1200); }; }
  for (const k of CHECKS[vid] || []) { const box = el.querySelector(`[data-ck="${k.id}"]`); if (!box) continue; const key = 'ck_' + k.id;
    box.querySelectorAll('[data-cki]').forEach(i => i.onchange = () => { const s = (REV[key] = REV[key] || { items:[] }); s.items[+i.dataset.cki] = i.checked; save(); });
    box.querySelector('[data-ckclr]').onclick = () => { REV[key] = { items:[] }; save(); rerender(); };
    box.querySelector('[data-ckrep]').onclick = () => { const s = (REV[key] || {}).items || []; REPORT[key] = `${k.title}: ` + k.items.map((t, i) => (s[i] ? '☑ ' : '☐ ') + t).join(' · '); const b = box.querySelector('[data-ckrep]'); b.textContent = '✓ Añadido'; setTimeout(() => b.textContent = 'Añadir al informe', 1200); }; }
  el.querySelectorAll('[data-repcopy]').forEach(b => b.onclick = async () => { const t = el.querySelector('#repTxt'); const ok = await copy(t.value); if (!ok) { t.select(); document.execCommand && document.execCommand('copy'); } b.textContent = '✓ Copiado'; });
  el.querySelectorAll('[data-repclr]').forEach(b => b.onclick = () => { for (const k in REPORT) delete REPORT[k]; rerender(); });
  const who = el.querySelector('#revWho'); if (who) who.onchange = () => { REV._who = who.value; save(); };
  const stamp = id => { const r = (REV[id] = REV[id] || {}); r.d = new Date().toLocaleString('es-ES'); r.who = REV._who || ''; };
  el.querySelectorAll('[data-revok]').forEach(c => c.onchange = () => { stamp(c.dataset.revok); REV[c.dataset.revok].ok = c.checked; save(); rerender(); });
  el.querySelectorAll('[data-revn]').forEach(t => t.onchange = () => { stamp(t.dataset.revn); REV[t.dataset.revn].n = t.value; save(); });
  el.querySelectorAll('[data-revexp]').forEach(b => b.onclick = async () => { const ok = await copy(JSON.stringify(REV, null, 1)); b.textContent = ok ? '✓ Copiado' : 'No se pudo copiar'; });
  el.querySelectorAll('[data-revimp]').forEach(b => b.onclick = () => { const s = prompt('Pega el JSON de revisión'); if (!s) return; try { Object.assign(REV, JSON.parse(s)); save(); rerender(); } catch (e) { b.textContent = 'JSON no válido'; } });
}
