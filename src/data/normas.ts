export interface Norma {
    title: string;
    content: string;
  }
  
  export interface Capitulo {
    id: string;
    number: string;
    title: string;
    description: string;
    articles: Norma[];
  }
  
  export const normas: Capitulo[] = [
    {
      id: "filosofia-y-contexto-de-la-temporada",
      number: "01",
      title: "Filosofía y contexto de la temporada",
      description:
        "Principios de inmersión, supervivencia y el contexto narrativo del inicio del apocalipsis en Devank Roleplay.",
      articles: [
        {
          title: "Regla central",
          content:
            "Toda muerte válida es CK definitivo. No hay vidas extra ni recuperación de habilidades. El permadeath NO permite matar porque sí, ejecutar a quien coopera, forzar tiroteos ni robar o invadir bases sin justificación.",
        },
        {
          title: "Enfoque de juego",
          content:
            "DEVANK prioriza las historias compartidas, el realismo, la supervivencia y las consecuencias. Ganar PvP o eliminar rivales no es el objetivo. Las mismas reglas se aplican a todos, incluido el Staff.",
        },
        {
          title: "Contexto de la temporada",
          content:
            "Esta temporada comienza al inicio del apocalipsis: aún hay rumores, confusión e instituciones funcionando. Los personajes no conocen el origen del brote, los zombis, las hordas ni lo que ocurrirá. Deben descubrirlo en rol, con miedo, dudas, errores y aprendizaje progresivo. No se permite anticipar el desastre usando información OOC.",
        },
      ],
    },
    {
      id: "personajes-oficios-y-reincorporacion",
      number: "02",
      title: "Personajes, oficios y reincorporación",
      description:
        "Normas sobre la creación de personajes coherentes, límites de habilidades, consecuencias del CK y retorno a facciones.",
      articles: [
        {
          title: "Personajes normales y originales",
          content:
            "Historia creíble, conocimientos limitados y habilidades acordes al oficio. No se permiten personajes «PRO», omniscientes, sobrehumanos, extravagantes con ventajas especiales ni copias de personajes conocidos.",
        },
        {
          title: "Sin militares",
          content:
            "Quedan excluidos soldados, exmilitares con entrenamiento excepcional, fuerzas especiales, comandos, mercenarios, agentes secretos y perfiles equivalentes. No se inventan secretos del gobierno, laboratorios o del brote; solo el Staff puede autorizar excepciones narrativas sin ventajas automáticas.",
        },
        {
          title: "Cada oficio tiene límites",
          content:
            "Ser médico no implica saber mecánica o usar todas las armas; ser mecánico no significa dominar medicina, carpintería y agricultura. Las nuevas habilidades requieren aprendizaje IC y respeto de los límites del servidor.",
        },
        {
          title: "Nuevo CK, nueva vida",
          content:
            "Se pierde la identidad, conocimientos, relaciones, rangos, conflictos y pertenencias del fallecido. No se admiten familiares o sustitutos para vengarlo, buscar su cadáver, recuperar su loot ni transferencias OOC de bienes. Los supervivientes pueden gestionar sus pertenencias con motivos IC y respetando las reglas de bases.",
        },
        {
          title: "Facciones oficiales",
          content:
            "Si tu personaje muere, no podés volver con otro personaje a esa misma facción, ni encubierto, ni con otro nombre, ni después de la guerra. Tampoco pueden disolverla o renombrarla para saltarse la norma. La facción sigue con sus supervivientes y nuevos integrantes legítimos, no con el reemplazo de sus muertos.",
        },
        {
          title: "Grupos no oficiales",
          content:
            "Es la única excepción para reencontrarte con antiguos compañeros: debe surgir de rol orgánico, sin pactos OOC, retorno automático, rangos, objetos o información heredada. No se permite repetir muertes y retornos para mantener integrantes infinitos. Nadie vuelve a un conflicto o guerra activa de su personaje anterior, aunque sea un grupo no oficial.",
        },
      ],
    },
    {
      id: "conceptos-basicos-de-rol",
      number: "03",
      title: "Conceptos básicos de rol",
      description:
        "Definiciones fundamentales de rol, prohibiciones de abusos y uso correcto de comandos narrativos.",
      articles: [
        {
          title: "MG, PG, DM/KOS y RK",
          content:
            "MG: usar información OOC en rol, incluidos Discord, streams y recuerdos del personaje muerto. PG: acciones imposibles, abusar de cámara o mecánicas. DM/KOS: atacar o matar sin contexto IC válido, también a quien coopera. RK: vengar la vida anterior. Todos prohibidos.",
        },
        {
          title: "RDE y Valoración de vida",
          content:
            "RDE: respetar entorno y consecuencias; una base no está abandonada porque sus dueños estén desconectados. Valoración de vida: evitar riesgos absurdos y actuar con instinto de supervivencia, sin impedir la defensa razonable.",
        },
        {
          title: "Bugs/exploits y Admin Abuse",
          content:
            "Bugs/exploits: prohibido aprovecharlos; se reportan. Admin Abuse: prohibido favorecer con herramientas o información del Staff; un abuso probado supone salida del equipo y posibles sanciones.",
        },
        {
          title: "Uso de comandos /me y /do",
          content:
            "/me describe acciones observables que no refleja el juego. /do describe o consulta estados y pruebas observables, nunca pensamientos ni resultados impuestos. Usarlos con criterio en registros, capturas, interrogatorios y escenas importantes.",
        },
      ],
    },
    {
      id: "fair-play-y-prohibicion-de-forzar-rol",
      number: "04",
      title: "Fair Play y prohibición de forzar rol",
      description:
        "Reglas para garantizar la igualdad de oportunidades en el desarrollo de escenas y evitar conflictos fabricados.",
      articles: [
        {
          title: "Participación y reacción razonable",
          content:
            "Todos deben permitir una participación y reacción razonable cuando el contexto lo permita. Se prohíbe explotar vacíos, manipular pruebas, aprovechar superioridad numérica para ignorar reglas, utilizar errores o reportes para sacar ventaja, o imponer resultados imposibles.",
        },
        {
          title: "Prohibición de forzar conflictos",
          content:
            "Está prohibido buscar o fabricar una excusa para robar, invadir, disparar o generar un CK. No se podrá acosar, provocar ni encadenar exigencias artificiales para obligar al otro a responder violentamente. Tampoco imponer suicidios, tareas imposibles o una situación en la que la víctima solo pueda morir. El conflicto debe surgir del rol, no de las ganas de hacer PvP.",
        },
      ],
    },
    {
      id: "ck-muerte-definitiva",
      number: "05",
      title: "CK: Muerte definitiva",
      description:
        "Condiciones del sistema permadeath, reinicio tras el fallecimiento y criterios de revisión administrativa.",
      articles: [
        {
          title: "Validez del CK",
          content:
            "Toda muerte válida es CK: infectados, mordeduras, enfermedades, hambre, accidentes, caídas, incendios, errores propios y combates válidos. No hay PK, vidas extras, devolución de experiencia ni resurrecciones ordinarias. Estar herido, atado, inconsciente o rendido no equivale a estar muerto ni habilita a rematar.",
        },
        {
          title: "Reinicio desde cero",
          content:
            "Un nuevo personaje empieza desde cero: no conoce secretos, contraseñas, mapas, enemigos ni objetivos del fallecido. No puede recibir transferencias preparadas OOC ni vengarse. No se permite provocar una muerte para evadir deudas, investigaciones, capturas o guerras; el cierre voluntario de una historia con conflictos abiertos se consulta por ticket.",
        },
        {
          title: "Revisiones de muerte",
          content:
            "Solo por fallo técnico extraordinario y verificable, abuso mecánico o infracción grave vinculada con la muerte. La desconexión o el descontento no garantizan revivir. El personaje no participa mientras se resuelve el ticket; la restitución es excepcional y la decide el Staff con pruebas.",
        },
      ],
    },
    {
      id: "violencia-cooperacion-y-tiroteos",
      number: "06",
      title: "Violencia, cooperación y tiroteos",
      description:
        "Límites del uso de la fuerza letal, protección al jugador cooperador y requisitos para tiroteos o asesinatos.",
      articles: [
        {
          title: "Prohibido matar porque sí o a quien coopera",
          content:
            "Si alguien se rinde, baja el arma, deja de atacar, permite el registro o cumple órdenes razonables, no puede ser ejecutado, rematado, abandonado a una muerte segura ni sometido a un CK indirecto. Rige en robos, capturas, interrogatorios, raideos y guerras, aunque exista rivalidad previa o un plan aprobado.",
        },
        {
          title: "Motivos insuficientes para matar",
          content:
            "No responder preguntas, insultar, tener miedo, discutir o intentar escapar sin agresión letal no justifica matar. Tampoco rumores, sospechas de traición, robos sin demostrar, deseos de loot, desacuerdos, amenazas vagas o imaginar que alguien será peligroso. Está prohibido dar órdenes imposibles para simular que el otro «no coopera».",
        },
        {
          title: "Defensa letal",
          content:
            "La defensa letal se admite ante una amenaza mortal real e inmediata (por ejemplo, un agresor que dispara), con respuesta proporcional. Si un rendido inicia una nueva agresión letal, podrá detenerse esa amenaza; una sospecha no alcanza. No se puede fabricar legítima defensa provocando al otro.",
        },
        {
          title: "Asesinatos planificados",
          content:
            "Fuera de la defensa inmediata o combate válido en guerra, requieren ticket previo, hechos graves IC, cronología, participantes y pruebas. No se pueden ejecutar personas rendidas, desarmadas, inmovilizadas o cooperadoras aun con ticket: deben usarse salidas no letales.",
        },
        {
          title: "Tiroteos",
          content:
            "Solo ante motivos IC graves o enfrentamientos válidos de una guerra autorizada. Un insulto, una provocación, un rumor o buscar equipo no permite disparar. Si alguien se rinde o deja de ser amenaza letal, se cesa el fuego. La parte agresora debe grabar la escena; la afectada, cuando pueda.",
        },
      ],
    },
    {
      id: "robos-a-personas-secuestros-y-roles-sensibles",
      number: "07",
      title: "Robos a personas, secuestros y roles sensibles",
      description:
        "Regulación de asaltos en exterior, tiempos máximos de retención, consentimiento en roles sensibles e identificación con máscaras.",
      articles: [
        {
          title: "Robos a personas",
          content:
            "Robos a personas fuera de bases, registros, amenazas y retenciones básicas no necesitan ticket previo, pero sí contexto IC, Fair Play, oportunidad razonable de respuesta y respeto a la cooperación. Esto no autoriza robar bases (capítulo 11). Resistirse no autoriza automáticamente un CK.",
        },
        {
          title: "Retenciones",
          content:
            "Máximo 30 minutos OOC, salvo consentimiento expreso para extenderlas. Debe existir rol activo; no se retiene para impedir jugar. Se prohíbe dejar morir a cautivos cooperadores mediante hordas, infección, trampas o privación deliberada de supervivencia.",
        },
        {
          title: "Roles sensibles",
          content:
            "Tortura, desmembramientos y vejaciones extremas requieren consentimiento OOC revocable. Se prohíben violación, abuso sexual y actos sexuales no consentidos. Nadie puede presionar usando el CK.",
        },
        {
          title: "Máscaras",
          content:
            "No se reconoce con certeza a alguien solo por datos OOC; las pistas IC pueden justificar sospechas, no certezas automáticas.",
        },
      ],
    },
    {
      id: "reportes-y-disputas",
      number: "08",
      title: "Reportes y disputas",
      description:
        "Procedimiento para reportar infracciones, requisitos de pruebas y normas de conducta durante disputas.",
      articles: [
        {
          title: "Procedimiento de reporte",
          content:
            "El rol continúa y se reporta al finalizar, salvo intervención administrativa por problemas graves o técnicos. Los tickets deben aportar implicados, fecha, hechos en orden, norma y pruebas disponibles (clips, capturas o registros).",
        },
        {
          title: "Resolución y buena fe",
          content:
            "El Staff distinguirá si la acción letal fue válida y si la muerte mecánica admite corrección excepcional. Se prohíben denuncias falsas, pruebas manipuladas, amenazas OOC y presión sobre los involucrados. La falta de clip no convierte automáticamente una denuncia en falsa.",
        },
      ],
    },
    {
      id: "desconexiones-y-comportamiento-ooc",
      number: "09",
      title: "Desconexiones y comportamiento OOC",
      description:
        "Normas sobre evasión de rol mediante desconexión y respeto fuera de personaje.",
      articles: [
        {
          title: "Evasión de rol y fallos técnicos",
          content:
            "No se puede desconectar, cambiar de personaje ni abusar de reinicios para evitar persecuciones, robos, heridas, capturas, combates o CK. Si ocurre una falla real o emergencia, avisar cuanto antes; el Staff decidirá cómo seguir, sin asumir automáticamente mala fe ni conceder inmunidad.",
        },
        {
          title: "Comportamiento OOC",
          content:
            "Los conflictos IC no pasan a lo personal. Se prohíben acoso, amenazas, racismo y xenofobia, con posibles sanciones inmediatas.",
        },
      ],
    },
    {
      id: "vehiculos-y-combate",
      number: "10",
      title: "Vehículos y combate",
      description:
        "Restricciones sobre el uso de armas desde vehículos y atropellos intencionados.",
      articles: [
        {
          title: "Combate vehicular",
          content:
            "Prohibido disparar desde el interior de un vehículo, detenido o en movimiento. Para responder al fuego, se huye o se sale completamente antes de disparar, cuando sea posible. Prohibido atropellar para matar o abusar de física o bugs para conseguir bajas.",
        },
      ],
    },
    {
      id: "bases-robos-e-incursiones",
      number: "11",
      title: "Bases, robos e incursiones",
      description:
        "Protección de refugios, requisitos de autorización para incursiones y cuotas mínimas de defensores.",
      articles: [
        {
          title: "Requisitos para incursiones",
          content:
            "Ninguna base ajena, oficial o no, individual o comunitaria, puede robarse, invadirse, sabotearse, saquearse o destruirse sin: (1) motivos IC de peso, (2) desarrollo previo de rol y (3) ticket/autorización del Staff. La autorización debe contemplar la operación o existir una guerra aprobada que incluya esa base. Una visita o invitación genuina no es una incursión.",
        },
        {
          title: "Alcance de la protección",
          content:
            "La protección incluye refugios reconocibles aunque no tengan muros completos. Una base vacía o sin conectados no es botín libre. Tener acceso técnico, necesitar comida, querer armas, encontrarla desocupada, un rumor o el deseo de PvP no son motivos suficientes. Prohibido provocar a sus habitantes para forzar un ataque.",
        },
        {
          title: "Contenido del ticket y vehículos",
          content:
            "El ticket debe indicar objetivo, hechos y razones IC, participantes y pruebas. Los vehículos dentro de una base también están protegidos salvo operación autorizada; fuera de bases aplican las reglas generales de robo. La incursión no autoriza ejecuciones de rendidos o cooperadores ni destrucción gratuita.",
        },
        {
          title: "Mínimo de defensa al comenzar",
          content:
            "Conectados al menos 50 % de defensores respecto de atacantes (8 atacantes = 4 defensores). No necesitan estar en la base ni ser avisados. Si la facción es más pequeña, el Staff limitará atacantes; si no se cumple el mínimo, no inicia el raid, salvo excepción administrativa expresa. Se verifica al comenzar, no al planificar.",
        },
      ],
    },
    {
      id: "guerras-entre-facciones",
      number: "12",
      title: "Guerras entre facciones",
      description:
        "Autorización de conflictos bélicos, reglas de enfrentamiento, bajas definitivas y resolución de guerras.",
      articles: [
        {
          title: "Autorización y motivos",
          content:
            "Solo se autorizan con hechos IC graves, como ataques demostrados, sabotajes, traiciones importantes o disputas territoriales desarrolladas. No por insultos, sospechas, loot ni ganas de tiroteos. Requieren ticket previo con facciones y aliados, cronología, pruebas, objetivos, territorios/bases y condiciones solicitadas. El Staff aprueba o modifica; luego se comunica su alcance, no los planes militares.",
        },
        {
          title: "Desarrollo del conflicto",
          content:
            "Una guerra aprobada permite patrullas, emboscadas y combates coherentes, capturas y negociaciones dentro de las condiciones acordadas. No exige ticket por cada enfrentamiento ordinario, pero sí autorización para operaciones fuera de alcance y raideos que lo requieran. No autoriza KOS indiscriminado, ataques a neutrales, tiroteos fabricados ni matar rendidos.",
        },
        {
          title: "Bajas y reemplazos",
          content:
            "Toda baja válida es CK definitivo. Los personajes nuevos no vuelven a la guerra; si eran de una facción oficial, tampoco pueden volver a esa facción. No se incorporan combatientes OOC para reponer bajas, no se cambian condiciones sin permiso ni se alarga artificialmente la guerra.",
        },
        {
          title: "Objetivos y finalización",
          content:
            "Los objetivos deben ser proporcionados: recuperar bienes, resolver territorios, obtener garantías, compensaciones o liberar cautivos. Termina por paz, rendición, objetivos cumplidos o resolución del Staff. Los acuerdos se respetan; para reabrir hostilidades deben existir motivos nuevos o un incumplimiento real.",
        },
      ],
    },
    {
      id: "staff-sanciones-y-vigencia",
      number: "13",
      title: "Staff, sanciones y vigencia",
      description:
        "Criterios de sanción, resolución de vacíos normativos y aceptación de las reglas de la comunidad.",
      articles: [
        {
          title: "Sanciones",
          content:
            "Según gravedad, intención, reincidencia y pruebas, las medidas van de advertencia y suspensión a expulsión definitiva. KOS, abusos graves, exploits, acoso, racismo, xenofobia, pruebas falsas y Admin Abuse pueden sancionarse sin advertencia previa. Sancionar al agresor no revive automáticamente al fallecido.",
        },
        {
          title: "Vigencia y aceptación",
          content:
            "El Staff resuelve vacíos de manera prospectiva: no puede inventar reglas retroactivas para justificar muertes. Aceptar DEVANK implica aceptar una sola vida y respetar la historia de los demás.",
        },
      ],
    },
  ];