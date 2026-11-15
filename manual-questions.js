/* Questões autorais para os 12 manuais indicados. O formato foi inspirado
   na prova oficial do IBAM para ACE: enunciados objetivos, situações de
   vigilância e quatro alternativas. */
window.MANUAL_QUESTIONS = (() => {
  const manuals = [
    { id: "colera", title: "01 · Cólera", source: "01_Colera.pdf", facts: [
      ["agente etiológico", "a bactéria Vibrio cholerae, especialmente os sorogrupos O1 e O139", "A cólera é uma infecção intestinal causada por Vibrio cholerae; os sorogrupos O1 e O139 são epidemiologicamente relevantes."],
      ["transmissão", "a via fecal-oral, pela ingestão de água ou alimentos contaminados", "A transmissão ocorre principalmente pela ingestão de água ou alimentos contaminados por fezes ou vômitos de pessoas infectadas."],
      ["quadro clínico característico", "diarreia aquosa abundante, que pode levar rapidamente à desidratação", "O quadro pode incluir diarreia aquosa intensa e vômitos, com risco de desidratação e distúrbios hidroeletrolíticos."],
      ["investigação laboratorial", "a coleta de amostra de fezes ou swab retal para identificação do agente", "A investigação laboratorial utiliza amostras fecais para identificar Vibrio cholerae, conforme orientação da vigilância e do laboratório."],
      ["medida preventiva coletiva", "a oferta de água segura, o saneamento e a higiene adequada das mãos e dos alimentos", "Água potável, destino adequado de dejetos e higiene dos alimentos são medidas centrais para interromper a transmissão."],
      ["conduta diante de suspeita", "a comunicação oportuna à vigilância e o encaminhamento para avaliação e hidratação", "Suspeitas devem ser comunicadas e avaliadas sem demora; a reposição de líquidos é essencial e a assistência define o tratamento."],
      ["principal complicação", "a desidratação grave, que pode evoluir para choque quando não tratada", "A perda intensa de água e eletrólitos pode causar choque e morte; reconhecimento e reidratação precoces reduzem o risco."]
    ]},
    { id: "arboviroses", title: "02 · Dengue, chikungunya e Zika", source: "02_Dengue_Chikungunya_Zika.pdf", facts: [
      ["agente etiológico", "vírus distintos: dengue, chikungunya e Zika são arboviroses diferentes", "Embora compartilhem vetores e sinais, dengue, chikungunya e Zika são causadas por vírus distintos."],
      ["transmissão urbana", "a picada de fêmeas infectadas de mosquitos Aedes, sobretudo Aedes aegypti", "No ciclo urbano brasileiro, a transmissão ocorre principalmente pela picada de fêmeas infectadas de Aedes aegypti."],
      ["padrão clínico que ajuda a diferenciar", "chikungunya costuma causar artralgia intensa e persistente; Zika, exantema e conjuntivite; dengue, febre e mialgia", "A intensidade da dor articular sugere chikungunya; exantema com conjuntivite é frequente em Zika; dengue pode cursar com febre e mialgia."],
      ["sinal de alarme da dengue", "dor abdominal intensa e contínua, vômitos persistentes, sangramento ou sinais de choque", "Sinais de alarme indicam possível agravamento da dengue e exigem avaliação imediata por serviço de saúde."],
      ["controle do vetor", "eliminar ou vedar recipientes com água parada e manejar corretamente os que não podem ser removidos", "A eliminação de criadouros e o manejo dos depósitos de água interrompem o ciclo do Aedes; larvicida é indicado apenas conforme protocolo."],
      ["proteção individual", "usar repelente conforme o rótulo, telas e roupas que reduzam a exposição a mosquitos", "Repelentes registrados, telas e barreiras físicas reduzem picadas; a orientação deve respeitar rótulo e recomendações de saúde."],
      ["atuação do ACE", "identificar e registrar criadouros, orientar moradores e comunicar situações de risco à equipe", "O ACE atua na vigilância, controle ambiental, educação e comunicação de riscos, articulado com a equipe de saúde."]
    ]},
    { id: "chagas", title: "03 · Doença de Chagas", source: "03_Doenca_de_Chagas.pdf", facts: [
      ["agente etiológico", "o protozoário Trypanosoma cruzi", "Trypanosoma cruzi é o protozoário causador da doença de Chagas."],
      ["transmissão vetorial clássica", "contaminação da pele ou mucosas com fezes de triatomíneos infectados; não é a saliva da picada", "Na transmissão vetorial, o parasito das fezes do barbeiro penetra por pele lesada ou mucosa; a picada isolada não inocula o agente."],
      ["outras vias de transmissão", "as vias oral, transfusional, por transplante e congênita", "Além da via vetorial, a doença pode ser transmitida por alimentos contaminados, sangue, transplantes ou da gestante para o bebê."],
      ["vetor", "triatomíneos conhecidos popularmente como barbeiros", "Insetos triatomíneos podem participar do ciclo de transmissão vetorial da doença de Chagas."],
      ["fase aguda", "pode apresentar febre e, na porta de entrada, sinal de Romaña ou chagoma de inoculação", "A fase aguda pode ser febril; edema palpebral unilateral após inoculação conjuntival é conhecido como sinal de Romaña."],
      ["fase crônica", "pode comprometer coração e tubo digestivo, inclusive com cardiomiopatia e megassíndromes", "A doença crônica pode causar alterações cardíacas e digestivas, embora algumas pessoas permaneçam na forma indeterminada."],
      ["prevenção da transmissão oral", "higienizar e processar alimentos de forma segura e adotar boas práticas de manipulação", "A prevenção da transmissão oral depende de higiene, seleção e processamento seguros dos alimentos e controle sanitário."]
    ]},
    { id: "tegumentar", title: "04 · Leishmaniose tegumentar", source: "04_Leishmaniose_Tegumentar.pdf", facts: [
      ["agente etiológico", "protozoários do gênero Leishmania", "A leishmaniose tegumentar é causada por protozoários do gênero Leishmania."],
      ["transmissão", "a picada de fêmeas infectadas de flebotomíneos, conhecidos como mosquito-palha", "A transmissão ocorre pela picada de flebotomíneos infectados; não há transmissão habitual direta entre pessoas."],
      ["manifestação cutânea típica", "úlcera geralmente indolor, com bordas elevadas e fundo granuloso", "A forma cutânea costuma produzir úlcera de evolução lenta, frequentemente indolor e com bordas elevadas."],
      ["forma mucosa", "pode afetar mucosas, em especial nariz e boca, causando lesões destrutivas", "A forma mucosa compromete principalmente mucosas das vias aéreas superiores e pode causar dano importante."],
      ["confirmação diagnóstica", "avaliação clínica e investigação laboratorial de material da lesão, segundo protocolo", "O diagnóstico combina dados clínicos e epidemiológicos com exames laboratoriais indicados para a forma suspeita."],
      ["prevenção individual", "reduzir a exposição ao flebotomíneo com telas, mosquiteiros e repelente", "Barreiras físicas e repelentes ajudam a reduzir o contato com flebotomíneos, especialmente ao entardecer e à noite."],
      ["atuação da vigilância", "notificar e investigar casos e mapear condições ambientais e de transmissão no território", "A vigilância investiga casos, identifica áreas de transmissão e orienta medidas integradas adequadas ao contexto local."]
    ]},
    { id: "visceral", title: "05 · Leishmaniose visceral", source: "05_Leishmaniose_Visceral.pdf", facts: [
      ["agente etiológico no Brasil", "Leishmania infantum (sinônimo histórico: L. chagasi)", "A leishmaniose visceral nas Américas é causada por Leishmania infantum, também referida em literatura anterior como L. chagasi."],
      ["transmissão", "a picada de flebotomíneo infectado; não ocorre pelo contato casual com cães ou pessoas", "A transmissão depende do vetor flebotomíneo infectado; tocar ou conviver casualmente com um cão não transmite a doença."],
      ["vetor urbano importante", "o flebotomíneo Lutzomyia longipalpis", "Lutzomyia longipalpis é um importante vetor da leishmaniose visceral em áreas urbanas brasileiras."],
      ["reservatório relevante no ciclo urbano", "o cão doméstico, que requer manejo conforme as normas sanitárias", "O cão tem importância epidemiológica no ciclo urbano, e as ações sobre reservatórios devem seguir as normas oficiais."],
      ["quadro clínico sugestivo", "febre prolongada, emagrecimento e aumento do fígado e do baço", "Febre persistente, perda de peso e hepatoesplenomegalia são achados sugestivos e requerem avaliação clínica."],
      ["gravidade", "pode ser fatal sem diagnóstico e tratamento oportunos", "A forma visceral pode evoluir gravemente; suspeitas devem ser encaminhadas para diagnóstico e tratamento sem demora."],
      ["prevenção", "manejo ambiental e redução do contato com o vetor, articulados à vigilância", "Limpeza do peridomicílio, manejo de matéria orgânica e medidas de proteção reduzem condições favoráveis ao vetor."]
    ]},
    { id: "esquistossomose", title: "06 · Esquistossomose", source: "06_Esquistossomose.pdf", facts: [
      ["agente etiológico no Brasil", "o helminto Schistosoma mansoni", "Schistosoma mansoni é o agente da esquistossomose mansônica no Brasil."],
      ["forma infectante para a pessoa", "a cercária, liberada pelo caramujo e capaz de penetrar pela pele em água doce", "Cercárias eliminadas por caramujos infectados penetram ativamente na pele durante contato com água contaminada."],
      ["hospedeiro intermediário", "caramujos do gênero Biomphalaria", "Caramujos Biomphalaria são hospedeiros intermediários de S. mansoni."],
      ["contaminação do ambiente", "ovos eliminados nas fezes alcançam água doce e dão continuidade ao ciclo", "Ovos presentes nas fezes chegam à água; as formas larvárias infectam caramujos e originam cercárias."],
      ["forma grave", "a forma hepatoesplênica pode causar hipertensão portal e aumento do baço", "A doença crônica grave pode provocar fibrose hepática, hipertensão portal e esplenomegalia."],
      ["diagnóstico parasitológico usual", "pesquisa de ovos nas fezes, por método indicado pelo serviço de saúde", "A pesquisa de ovos nas fezes é método parasitológico central para o diagnóstico, conforme avaliação clínica e protocolo."],
      ["prevenção coletiva", "saneamento, diagnóstico e tratamento dos infectados e redução do contato com água de risco", "Saneamento e tratamento de pessoas infectadas reduzem a contaminação ambiental; evitar água suspeita também previne exposição."]
    ]},
    { id: "raiva", title: "07 · Raiva", source: "07_Raiva.pdf", facts: [
      ["agente etiológico", "um vírus do gênero Lyssavirus, família Rhabdoviridae", "A raiva é causada por vírus do gênero Lyssavirus."],
      ["transmissão", "saliva infectada, sobretudo por mordedura; também pode ocorrer por arranhadura ou lambedura de mucosa/pele lesionada", "A saliva de mamífero infectado pode transmitir o vírus por mordedura, arranhadura ou contato com mucosa ou pele lesada."],
      ["animais suscetíveis", "mamíferos, incluindo cães, gatos, morcegos e animais silvestres", "A raiva acomete mamíferos; morcegos e outros animais podem participar de ciclos de transmissão."],
      ["conduta após exposição", "lavar imediatamente o ferimento com água e sabão e procurar um serviço de saúde", "Após exposição, a limpeza imediata da lesão e a avaliação de profilaxia pós-exposição por serviço de saúde são urgentes."],
      ["prevenção em cães e gatos", "vacinação antirrábica conforme o programa oficial", "A vacinação de cães e gatos, conforme campanhas e calendário local, é medida essencial de prevenção."],
      ["característica clínica", "encefalite aguda progressiva, quase sempre fatal após início dos sintomas", "A raiva clínica causa encefalite progressiva e é quase sempre fatal, razão da urgência da profilaxia."],
      ["orientação ao encontrar morcego caído", "não tocar no animal e acionar a vigilância ou o serviço municipal responsável", "Morcegos não devem ser manipulados; o serviço de vigilância deve ser acionado para orientação e recolhimento seguro."]
    ]},
    { id: "leptospirose", title: "08 · Leptospirose", source: "08_Leptospirose.pdf", facts: [
      ["agente etiológico", "bactérias do gênero Leptospira", "Leptospirose é uma zoonose bacteriana causada por Leptospira."],
      ["fonte de infecção comum", "urina de animais infectados, especialmente roedores, que contamina água e lama", "A urina de animais infectados contamina o ambiente; ratos são importantes fontes de infecção em áreas urbanas."],
      ["porta de entrada", "pele lesionada ou íntegra após imersão prolongada, além de mucosas", "A bactéria pode penetrar por pele lesionada ou macerada e por mucosas, sobretudo em contato com água contaminada."],
      ["situação de risco", "contato com água ou lama de enchente contaminada", "Enchentes ampliam o contato com água e lama contaminadas por urina de roedores e elevam o risco de leptospirose."],
      ["sinal clínico frequentemente lembrado", "febre e mialgia intensa, que pode predominar nas panturrilhas", "Febre e dores musculares, especialmente nas panturrilhas, são frequentes, embora o quadro possa variar."],
      ["forma grave", "pode cursar com icterícia, insuficiência renal e hemorragia", "Casos graves podem apresentar icterícia, comprometimento renal e hemorragias, exigindo assistência imediata."],
      ["proteção durante limpeza pós-enchente", "evitar contato direto com água/lama e usar botas e luvas impermeáveis", "A proteção inclui evitar exposição e usar botas e luvas; ferimentos devem ser protegidos e a limpeza deve seguir orientação sanitária."]
    ]},
    { id: "peste", title: "09 · Peste", source: "09_Peste.pdf", facts: [
      ["agente etiológico", "a bactéria Yersinia pestis", "Yersinia pestis é o agente etiológico da peste."],
      ["transmissão da forma bubônica", "principalmente pela picada de pulgas infectadas associadas a roedores", "A forma bubônica é frequentemente transmitida por pulgas infectadas; roedores participam do ciclo da peste."],
      ["transmissão da forma pneumônica", "gotículas respiratórias de pessoa com peste pneumônica, em contato próximo", "A peste pneumônica pode ser transmitida entre pessoas por gotículas respiratórias em contato próximo."],
      ["reservatórios e vigilância", "roedores silvestres e suas pulgas em focos naturais, monitorados pela vigilância", "A vigilância de roedores e pulgas em áreas focais ajuda a detectar circulação e prevenir casos humanos."],
      ["manifestação da forma bubônica", "febre súbita e bubão, com linfonodo aumentado e doloroso", "A peste bubônica pode causar febre aguda e bubão, que é linfonodo aumentado, doloroso e inflamado."],
      ["conduta diante de suspeita", "encaminhamento urgente e comunicação imediata à vigilância de saúde", "A peste é evento grave: suspeita requer atendimento urgente e notificação imediata conforme os fluxos de vigilância."],
      ["prevenção no foco", "vigilância de roedores e pulgas, manejo ambiental e proteção contra picadas", "O controle exige ações integradas sobre roedores e pulgas, vigilância epidemiológica e proteção individual."]
    ]},
    { id: "malaria", title: "10 · Malária", source: "10_Malaria.pdf", facts: [
      ["agente etiológico", "protozoários do gênero Plasmodium", "A malária é causada por protozoários do gênero Plasmodium."],
      ["transmissão principal no Brasil", "picada de fêmea infectada do mosquito Anopheles", "A transmissão natural ocorre pela picada da fêmea infectada de mosquito Anopheles."],
      ["diagnóstico oportuno", "identificação do Plasmodium em sangue, por gota espessa ou teste rápido conforme o serviço", "Gota espessa e testes rápidos são métodos usados para diagnóstico; a escolha e a interpretação cabem ao serviço de saúde."],
      ["quadro clínico comum", "febre, calafrios e sudorese, com possíveis cefaleia, náuseas e mal-estar", "A malária costuma causar episódios febris com calafrios e sudorese, mas os sintomas podem ser inespecíficos."],
      ["espécie associada a quadros graves", "Plasmodium falciparum, embora outras espécies também possam causar gravidade", "P. falciparum está associado a maior risco de malária grave; qualquer caso suspeito exige diagnóstico e tratamento oportunos."],
      ["prevenção individual", "reduzir picadas com mosquiteiros, telas, repelentes e roupas protetoras", "Barreiras físicas e repelentes diminuem a exposição ao Anopheles, especialmente nos horários de maior atividade do vetor."],
      ["atuação do ACE em área receptiva", "orientar prevenção, identificar situações de risco e comunicar casos suspeitos à equipe", "O ACE apoia vigilância e prevenção no território e encaminha suspeitas; diagnóstico e tratamento são atribuições dos serviços de saúde."]
    ]},
    { id: "esporotricose", title: "11 · Esporotricose", source: "11_Esporotricose.pdf", facts: [
      ["agente etiológico", "fungos do complexo Sporothrix", "A esporotricose é causada por fungos do gênero Sporothrix, incluindo espécies do complexo."],
      ["transmissão ambiental", "inoculação do fungo na pele após trauma com solo, espinhos ou matéria vegetal contaminada", "A forma clássica ocorre quando o fungo presente no ambiente é inoculado por pequenos traumas na pele."],
      ["transmissão zoonótica urbana", "arranhadura, mordedura ou contato com secreções de gatos infectados", "Gatos com lesões podem transmitir Sporothrix por arranhadura, mordedura ou contato com secreções contaminadas."],
      ["manifestação frequente", "nódulo ou lesão ulcerada na pele, por vezes seguida por nódulos ao longo dos vasos linfáticos", "A forma cutâneo-linfática pode produzir nódulos em cadeia ao longo dos vasos linfáticos a partir da lesão inicial."],
      ["confirmação diagnóstica", "avaliação clínica com confirmação micológica, frequentemente por cultura", "A confirmação laboratorial pode envolver exame micológico e cultura de material da lesão, segundo avaliação profissional."],
      ["proteção no manejo de solo e plantas", "usar luvas e roupas protetoras para evitar inoculação por espinhos ou material contaminado", "Luvas e proteção da pele reduzem o risco de inoculação durante jardinagem e manejo de matéria vegetal."],
      ["conduta com gato suspeito", "evitar manipular lesões sem proteção e buscar orientação veterinária e da vigilância", "Animais suspeitos devem ser avaliados por serviço veterinário; contato com lesões e secreções deve ser evitado ou protegido."]
    ]},
    { id: "febre-amarela", title: "12 · Febre amarela", source: "12_Febre_Amarela.pdf", facts: [
      ["agente etiológico", "um vírus do gênero Flavivirus", "O agente da febre amarela é um vírus do gênero Flavivirus."],
      ["ciclo silvestre nas Américas", "mosquitos Haemagogus e Sabethes transmitem o vírus entre primatas não humanos e pessoas", "No ciclo silvestre, mosquitos dos gêneros Haemagogus e Sabethes participam da transmissão; pessoas se infectam ao entrar na área."],
      ["papel dos primatas não humanos", "são hospedeiros sentinelas importantes; não transmitem diretamente a doença às pessoas", "Macacos não transmitem febre amarela diretamente a pessoas; mortes de primatas podem sinalizar circulação viral e devem ser comunicadas."],
      ["quadro clínico grave", "pode evoluir com icterícia, hemorragias e comprometimento hepático e renal", "A forma grave pode causar icterícia, sangramentos e falência de órgãos, exigindo atendimento imediato."],
      ["prevenção específica", "vacinação conforme calendário e avaliação das recomendações oficiais para cada pessoa", "A vacina é a principal medida de proteção individual; indicação e contraindicações devem seguir as recomendações oficiais vigentes."],
      ["vigilância de epizootias", "notificar a morte de primatas não humanos à vigilância, sem tocar ou remover o animal", "A comunicação de epizootias permite orientar a investigação; animais mortos não devem ser manipulados pela população."],
      ["prevenção complementar", "evitar picadas de mosquitos em áreas de risco com repelentes, roupas e barreiras físicas", "Repelentes, roupas protetoras e telas complementam a vacinação e reduzem a exposição aos vetores."]
    ]}
  ];
  const templates = [
    (d, f) => `Sobre ${d.title.replace(/^\d+ · /, "")}, assinale a alternativa correta quanto a ${f[0]}.`,
    (d, f) => `Durante uma ação de vigilância relacionada a ${d.title.replace(/^\d+ · /, "")}, a equipe precisa orientar a população sobre ${f[0]}. A orientação adequada é:`,
    (d, f) => `Um ACE revisa os pontos essenciais de ${d.title.replace(/^\d+ · /, "")}. Qual afirmação deve considerar correta sobre ${f[0]}?`
  ];
  const category = (label) => {
    if (/agente etiológico/i.test(label)) return "agente";
    if (/transmiss|forma infectante|porta de entrada|contaminação do ambiente/i.test(label)) return "transmissão";
    if (/vetor|reservatório|hospedeiro|animais suscetíveis|fonte de infecção|papel dos primatas/i.test(label)) return "vetor";
    if (/diagnóstic|investigação laboratorial|confirmação/i.test(label)) return "diagnóstico";
    if (/prevenção|proteção|controle|atuação|conduta|orientação|vigilância/i.test(label)) return "prevenção";
    return "clínica";
  };
  const all = [];
  manuals.forEach((d, mi) => {
    const made = [];
    d.facts.forEach((f, fi) => {
        const kind = category(f[0]);
        const distractors = [...new Set(manuals.flatMap(m => m.facts.filter(x => category(x[0]) === kind).map(x => x[1])).filter(a => a !== f[1]))];
        if (distractors.length < 3) {
          for (const other of manuals.flatMap(m => m.facts.map(x => x[1]))) {
            if (other !== f[1] && !distractors.includes(other)) distractors.push(other);
            if (distractors.length >= 3) break;
          }
        }
      for (let variant = 0; variant < (fi < 6 ? 3 : 2); variant++) {
        if (made.length >= 20) break;
        const wrong = [];
        for (let step = 0; wrong.length < 3 && step < distractors.length; step++) {
          const option = distractors[(mi * 3 + fi + step) % distractors.length];
          if (option !== f[1] && !wrong.includes(option)) wrong.push(option);
        }
        const options = [f[1], ...wrong];
        const correctAnswer = (mi + fi + variant) % 4;
        const [a, b, c, e] = options;
        const ordered = [a, b, c, e];
        [ordered[0], ordered[correctAnswer]] = [ordered[correctAnswer], ordered[0]];
        const stem = templates[variant % templates.length](d, f);
        made.push({
          id: `manual-${d.id}-${String(made.length + 1).padStart(2, "0")}`,
          question: stem,
          options: ordered,
          correctAnswer,
          explanation: f[2],
          subject: d.title,
          difficulty: variant === 2 ? "Difícil" : "Médio",
          tema: "endemias",
          manual: d.id,
          source: d.source
        });
      }
    });
    all.push(...made);
  });
  return all;
})();
