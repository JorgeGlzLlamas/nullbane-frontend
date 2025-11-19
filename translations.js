// translations.js - Sistema de traducción para Nullbane
const translations = {
    es: {
        // Navbar
        'nav.history': 'Historia',
        'nav.characters': 'Personajes',
        'nav.levels': 'Niveles',
        'nav.achievements': 'Logros',
        'nav.download': 'Descarga APK',
        
        // Home/Hero
        'home.subtitle': 'Plataformas de Acción 2D | Pixel Art Desafiante',
        'home.subtitle2': 'Crónica del Último Voto',
        'home.quote': '"La Orden de Plata ha caído. Como el último caballero, tu deber es purificar tu armadura oxidada"',
        'home.download.btn': 'Descarga APK Nullbane',
        
        // Historia Section
        'history.title': 'La Historia',
        'history.heading': 'La Era del Silencio: La Traición de Vorlag',
        'history.text1': 'Hace eones, la entidad cósmica **Tenebris, la Entidad Silente**, nació del vacío, buscando consumir toda luz y sonido. Para contrarrestar esta amenaza, se forjó la **Orden de Plata**, una hermandad de caballeros que no juraban lealtad a un rey, sino al concepto mismo de la vida. Ellos erigieron la Ciudadela Silente no como una fortaleza, sino como una prisión para Tenebris, sellándola con un poder arcano que la mantendría dormida.',
        'history.text2': 'La influencia de Tenebris era sutil y paciente. Un erudito de la Orden, **Vorlag**, traicionó su juramento rompiendo el sello desde dentro. Su traición fue el catalizador del desastre.',
        'history.button': 'Leer Crónica Completa',
        
        // Personajes Section
        'characters.title': 'Personajes y Controles',
        'characters.hero.title': 'SIR JOSEPH: EL HÉROE PRINCIPAL',
        'characters.hero.badge': 'JUGADOR CONTROLABLE',
        'characters.hero.subtitle': 'El Último Guardián de la Plata',
        'characters.hero.text1': 'Sir Joseph es el único superviviente de la Orden de Plata, traicionado y maldecido por Vorlag. Su armadura sagrada, ahora oxidada y pesada, limita sus capacidades y sirve como un constante recordatorio del peligro que acecha al mundo.',
        'characters.hero.text2': 'Su misión es purificar la corrupción para recuperar la legendaria Armadura de Plata. Solo restaurando su brillo y poder original podrá enfrentar a la oscuridad de Tenebris y cumplir el último juramento de su hermandad.',
        
        // Controles
        'controls.title': 'CONTROLES CLAVE',
        'controls.movement': 'Movimiento (A/D) & Salto/Evasión (W)',
        'controls.crouch': 'S: Agacharse / Esquivar Ataques Altos',
        'controls.combat': 'Combate Cuerpo a Cuerpo',
        'controls.attack': 'CLICK IZQ.',
        'controls.quick': 'Ataque Rápido (Espada)',
        
        // Bosses
        'bosses.title': 'Jefes (Bosses) y Enemigos',
        'boss.vorlag.name': 'VORLAG, EL TRAIDOR',
        'boss.vorlag.desc': 'Antiguo erudito de la Orden cuya brillantez fue eclipsada por la ambición. Al intentar dominar el poder del vacío en lugar de contenerlo, rompió el sello sagrado y condenó a su hermandad. Ahora, consumido por la misma corrupción que desató, sirve eternamente como el carcelero deforme de la prisión que juró proteger.',
        'boss.tenebris.name': 'TENEBRIS, LA ENTIDAD SILENTE',
        'boss.tenebris.desc': 'Una fuerza cósmica de entropía pura que existía antes de la creación. No busca el mal, sino el silencio absoluto y el retorno del universo a la nada. Aunque yace aprisionada hace eones, proyecta su voluntad destructiva en el mundo físico, esperando el momento para devorar la luz y extinguir toda existencia.',
        
        // Enemigos
        'enemy.skeleton.name': 'Esqueletos Guerreros',
        'enemy.skeleton.desc': 'Antiguos soldados leales cuyo juramento eterno de proteger el bosque fue corrompido, convirtiéndolos en marionetas de hueso sin voluntad .',
        'enemy.watcher.name': 'Vigías Malditos',
        'enemy.watcher.desc': 'Pacíficos videntes cíclopes cuya percepción fue retorcida por el traidor, condenándolos a ver solo dolor y cazar a todo ser vivo',
        'enemy.specter.name': 'Espectros Nocturnos',
        'enemy.specter.desc': 'La voluntad de la oscuridad materializada en obsidiana, creados específicamente como una burla letal de los nobles caballeros de la Orden.',
        
        // Niveles
        'levels.title': 'Niveles de Plataformeo y Combate',
        'level.1.name': 'Nivel 1: Bosque Susurrante',
        'level.1.desc1': 'El punto de entrada a la corrupción que asola el mundo. Este bosque, antaño lleno de vida, se ha convertido en un paisaje marchito de árboles retorcidos y tierra oscura suspendida en el vacío. Representa el inicio de la cruzada de Sir Joseph, quien debe avanzar con su armadura oxidada bajo un cielo opresivo, enfrentando los vestigios de un reino olvidado.',
        'level.1.desc2': 'El terreno irregular exige al jugador dominar el salto de precisión entre plataformas escalonadas. La amenaza principal son los Esqueletos Guerreros, antiguos soldados que patrullan las rutas de forma predecible. Al carecer de maniobras evasivas rápidas, el combate se centra en el cálculo de distancias para atacar con la espada sin exponerse al contraataque enemigo.',
        'level.2.name': 'Nivel 2: La Gruta Hundida',
        'level.2.desc1': 'Una red claustrofóbica de cavernas subterráneas dominada por tonos obsidiana y fosas de agua turquesa turbia. Este nivel marca el descenso hacia la guarida del traidor responsable de la caída de la Orden. La atmósfera es pesada y húmeda, sirviendo como antesala a la purificación del caballero; superar esta zona es requisito para restaurar la legendaria Armadura de Plata.',
        'level.2.desc2': 'La navegación se vuelve crítica debido a las rocas resbaladizas y las estructuras de madera inestables sobre abismos mortales. Los Vigías Malditos vigilan las cornisas, lanzando proyectiles a distancia que obligan al jugador a moverse constantemente. Sin la opción de esquivar, la supervivencia depende enteramente del posicionamiento estratégico y el uso del salto para eludir los ataques mágicos mientras se cierra la brecha para eliminar a los tiradores y alcanzar al jefe de la zona.',
        
        // Logros
        'achievements.title': 'Medallas de Hazaña (Logros)',
        'achievement.1.name': 'Primer Voto Cumplido',
        'achievement.1.desc': 'Completa la travesía por el Bosque Susurrante y entra a la Gruta Hundida.',
        'achievement.2.name': 'Caída del Erudito',
        'achievement.2.desc': 'Derrota a Vorlag, el Traidor, en el corazón de la Gruta Hundida.',
        'achievement.3.name': 'Plata Renacida',
        'achievement.3.desc': 'Consigue la Armadura de Plata y la determinación para el asalto final.',
        'achievement.4.name': 'Escalador Silente',
        'achievement.4.desc': 'Alcanza la aguja más alta de la Ciudadela Silente.',
        'achievement.5.name': 'Maestro del Espectro',
        'achievement.5.desc': 'Esquiva 10 ataques consecutivos de los Espectros Nocturnos sin recibir daño.',
        'achievement.6.name': 'Inmaculado',
        'achievement.6.desc': 'Completa la Gruta Hundida sin usar Pociones de Savia Vital.',
        'achievement.7.name': 'Eclipse Destrozado',
        'achievement.7.desc': 'Derrota a Tenebris, la Entidad Silente, y restaura la luz al mundo.',
        'achievement.8.name': 'El Guardián Eterno',
        'achievement.8.desc': 'Desbloquea el final secreto al completar todos los desafíos del Vacío.',
        
        // Descarga
        'download.title': '¡Descarga la APK y Cumple tu Último Voto!',
        'download.desc': 'Versión Beta 1.0 disponible exclusivamente para Android. Juega ahora el prólogo y el primer acto de la historia de Sir Joseph.',
        'download.button': 'Descargar APK (v1.0)',
        'download.requirements': 'Requerimientos Mínimos (Android/PC)',
        'download.os': 'Sistema Operativo:',
        'download.os.value': 'Windows 10/11 (64 bits)',
        'download.cpu': 'Procesador (CPU):',
        'download.cpu.value': 'Doble núcleo a 2.4 GHz',
        'download.ram': 'Memoria RAM:',
        'download.ram.value': '4 GB',
        'download.gpu': 'Tarjeta Gráfica (GPU):',
        'download.gpu.value': 'Integrada compatible con DirectX 11 o superior',
        'download.storage': 'Almacenamiento:',
        'download.storage.value': '3 GB libre',
        
        // Footer
        'footer.text1': '© 2025 Nullbane Games. Un proyecto de la UT de Nayarit. Clasificación B (+12 Años).',
        'footer.text2': 'Desarrollado por el Equipo 6 (IDGS-102).',
        
        // Página de Historia
        'story.banner.title': 'Historia de Nullbane',
        'story.banner.subtitle': 'La Crónica Completa',
        'story.back': 'Volver al Inicio',
        'story.chapter1.title': 'Orígenes: La Era del Silencio',
        'story.chapter1.text1': 'Antes de la existencia de los reinos y los hombres, el universo era un lienzo en blanco de quietud absoluta. De este vacío primordial nació Tenebris, la Entidad Silente. A diferencia de otros males, Tenebris no busca conquistar ni destruir por odio; su propósito es consumir toda luz y sonido para devolver la existencia a su estado original de silencio eterno.',
        'story.chapter1.text2': 'Para contrarrestar esta amenaza cósmica, se fundó la Orden de Plata, una hermandad de caballeros que no juraba lealtad a ningún monarca, sino a la preservación de la vida misma. Construyeron la Ciudadela Silente, no como una fortaleza militar, sino como una prisión arcana sellada para mantener a la entidad dormida. Durante milenios, la Orden vigiló en secreto, mientras el mundo exterior olvidaba su propósito.',
        'story.chapter2.title': 'El Cataclismo: La Traición de Vorlag',
        'story.chapter2.text1': 'La prisión de Tenebris era fuerte, pero su influencia era paciente. A través de las grietas del sello, la entidad susurró promesas de poder prohibido. Vorlag, uno de los eruditos más brillantes de la Orden, fue seducido por estos susurros.',
        'story.chapter2.text2': 'En su arrogancia, Vorlag creyó que poseía el intelecto para dominar el poder del vacío en lugar de simplemente contenerlo. Su traición no fue un ataque, sino una implosión: rompió el sello sagrado desde el interior. El resultado fue devastador; la corrupción de Tenebris se liberó como una plaga instantánea, aniquilando a la hermandad y transformando a los guardianes y criaturas del entorno en monstruosidades retorcidas por la oscuridad.',
        'story.chapter3.title': 'El Presente: La Cruzada del Último Caballero',
        'story.chapter3.text1': 'Sir Joseph, quien se encontraba en una misión lejana durante el cataclismo, fue el único superviviente. Al regresar, encontró la Ciudadela en ruinas y su juramento hecho pedazos. La maldición liberada por Vorlag lo alcanzó, oxidando su brillante armadura plateada y convirtiéndola en una carga pesada, un mapa físico de sus fracasos.',
        'story.chapter3.text2': 'Ahora, el mundo se desvanece. El camino hacia la Ciudadela está bloqueado por la magia del traidor, y la corrupción se expande desde el Bosque Susurrante. La misión de Joseph es desesperada: debe cazar a su antiguo hermano Vorlag en la Gruta Hundida para purificar su armadura y obtener el poder necesario para ascender a la Ciudadela. Allí, en el trono de la oscuridad, deberá enfrentar a Tenebris antes de que el silencio consuma lo último que queda de realidad.',
    },
    en: {
        // Navbar
        'nav.history': 'Story',
        'nav.characters': 'Characters',
        'nav.levels': 'Levels',
        'nav.achievements': 'Achievements',
        'nav.download': 'Download APK',
        
        // Home/Hero
        'home.subtitle': '2D Action Platformer | Challenging Pixel Art',
        'home.subtitle2': 'Chronicle of the Last Oath',
        'home.quote': '"The Silver Order has fallen. As the last knight, your duty is to purify your rusted armor"',
        'home.download.btn': 'Download Nullbane APK',
        
        // Historia Section
        'history.title': 'The Story',
        'history.heading': 'The Age of Silence: Vorlag\'s Betrayal',
        'history.text1': 'Eons ago, the cosmic entity **Tenebris, the Silent Entity**, was born from the void, seeking to consume all light and sound. To counter this threat, the **Silver Order** was forged, a brotherhood of knights who swore allegiance not to a king, but to the very concept of life itself. They erected the Silent Citadel not as a fortress, but as a prison for Tenebris, sealing it with arcane power that would keep it dormant.',
        'history.text2': 'Tenebris\' influence was subtle and patient. A scholar of the Order, **Vorlag**, betrayed his oath by breaking the seal from within. His betrayal was the catalyst for disaster.',
        'history.button': 'Read Full Chronicle',
        
        // Personajes Section
        'characters.title': 'Characters and Controls',
        'characters.hero.title': 'SIR JOSEPH: THE MAIN HERO',
        'characters.hero.badge': 'PLAYABLE CHARACTER',
        'characters.hero.subtitle': 'The Last Guardian of Silver',
        'characters.hero.text1': 'Sir Joseph is the sole survivor of the Silver Order, betrayed and cursed by Vorlag. His sacred armor, now rusted and heavy, limits his capabilities and serves as a constant reminder of the danger threatening the world.',
        'characters.hero.text2': 'His mission is to purify the corruption to recover the legendary Silver Armor. Only by restoring its shine and original power can he face the darkness of Tenebris and fulfill the last oath of his brotherhood.',
        
        // Controles
        'controls.title': 'KEY CONTROLS',
        'controls.movement': 'Movement (A/D) & Jump/Dodge (W)',
        'controls.crouch': 'S: Crouch / Dodge High Attacks',
        'controls.combat': 'Melee Combat',
        'controls.attack': 'LEFT CLICK',
        'controls.quick': 'Quick Attack (Sword)',
        
        // Bosses
        'bosses.title': 'Bosses and Enemies',
        'boss.vorlag.name': 'VORLAG, THE TRAITOR',
        'boss.vorlag.desc': 'Former Order scholar whose brilliance was eclipsed by ambition. By attempting to master the void\'s power instead of containing it, he broke the sacred seal and doomed his brotherhood. Now, consumed by the very corruption he unleashed, he serves eternally as the deformed jailer of the prison he swore to protect.',
        'boss.tenebris.name': 'TENEBRIS, THE SILENT ENTITY',
        'boss.tenebris.desc': 'A cosmic force of pure entropy that existed before creation. It seeks not evil, but absolute silence and the universe\'s return to nothingness. Though imprisoned for eons, it projects its destructive will into the physical world, awaiting the moment to devour light and extinguish all existence.',
        
        // Enemigos
        'enemy.skeleton.name': 'Skeleton Warriors',
        'enemy.skeleton.desc': 'Former loyal soldiers whose eternal oath to protect the forest was corrupted, turning them into mindless bone puppets.',
        'enemy.watcher.name': 'Cursed Watchers',
        'enemy.watcher.desc': 'Peaceful cyclops seers whose perception was twisted by the traitor, condemning them to see only pain and hunt all living beings',
        'enemy.specter.name': 'Nocturnal Specters',
        'enemy.specter.desc': 'The will of darkness materialized in obsidian, created specifically as a lethal mockery of the Order\'s noble knights.',
        
        // Niveles
        'levels.title': 'Platforming and Combat Levels',
        'level.1.name': 'Level 1: Whispering Forest',
        'level.1.desc1': 'The entry point to the corruption ravaging the world. This forest, once full of life, has become a withered landscape of twisted trees and dark earth suspended in the void. It represents the beginning of Sir Joseph\'s crusade, who must advance with his rusted armor under an oppressive sky, facing the vestiges of a forgotten kingdom.',
        'level.1.desc2': 'The uneven terrain demands the player master precision jumping between staggered platforms. The main threat is Skeleton Warriors, ancient soldiers who patrol routes predictably. Lacking quick evasive maneuvers, combat focuses on calculating distances to attack with the sword without exposing oneself to enemy counterattack.',
        'level.2.name': 'Level 2: The Sunken Grotto',
        'level.2.desc1': 'A claustrophobic network of underground caverns dominated by obsidian tones and pools of murky turquoise water. This level marks the descent toward the traitor\'s lair responsible for the Order\'s fall. The atmosphere is heavy and humid, serving as an antechamber to the knight\'s purification; overcoming this zone is required to restore the legendary Silver Armor.',
        'level.2.desc2': 'Navigation becomes critical due to slippery rocks and unstable wooden structures over deadly abysses. Cursed Watchers guard the ledges, launching ranged projectiles that force the player to move constantly. Without the option to dodge, survival depends entirely on strategic positioning and using jumps to evade magical attacks while closing the gap to eliminate shooters and reach the zone\'s boss.',
        
        // Logros
        'achievements.title': 'Achievement Medals',
        'achievement.1.name': 'First Oath Fulfilled',
        'achievement.1.desc': 'Complete the journey through the Whispering Forest and enter the Sunken Grotto.',
        'achievement.2.name': 'Fall of the Scholar',
        'achievement.2.desc': 'Defeat Vorlag, the Traitor, in the heart of the Sunken Grotto.',
        'achievement.3.name': 'Silver Reborn',
        'achievement.3.desc': 'Obtain the Silver Armor and the determination for the final assault.',
        'achievement.4.name': 'Silent Climber',
        'achievement.4.desc': 'Reach the highest spire of the Silent Citadel.',
        'achievement.5.name': 'Specter Master',
        'achievement.5.desc': 'Dodge 10 consecutive attacks from Nocturnal Specters without taking damage.',
        'achievement.6.name': 'Immaculate',
        'achievement.6.desc': 'Complete the Sunken Grotto without using Vital Sap Potions.',
        'achievement.7.name': 'Shattered Eclipse',
        'achievement.7.desc': 'Defeat Tenebris, the Silent Entity, and restore light to the world.',
        'achievement.8.name': 'The Eternal Guardian',
        'achievement.8.desc': 'Unlock the secret ending by completing all Void challenges.',
        
        // Descarga
        'download.title': 'Download the APK and Fulfill Your Last Oath!',
        'download.desc': 'Beta Version 1.0 available exclusively for Android. Play the prologue and first act of Sir Joseph\'s story now.',
        'download.button': 'Download APK (v1.0)',
        'download.requirements': 'Minimum Requirements (Android/PC)',
        'download.os': 'Operating System:',
        'download.os.value': 'Windows 10/11 (64-bit)',
        'download.cpu': 'Processor (CPU):',
        'download.cpu.value': 'Dual-core at 2.4 GHz',
        'download.ram': 'RAM Memory:',
        'download.ram.value': '4 GB',
        'download.gpu': 'Graphics Card (GPU):',
        'download.gpu.value': 'Integrated compatible with DirectX 11 or higher',
        'download.storage': 'Storage:',
        'download.storage.value': '3 GB free',
        
        // Footer
        'footer.text1': '© 2025 Nullbane Games. A project from UT Nayarit. Rated B (+12 Years).',
        'footer.text2': 'Developed by Team 6 (IDGS-102).',
        
        // Página de Historia
        'story.banner.title': 'Nullbane Story',
        'story.banner.subtitle': 'The Complete Chronicle',
        'story.back': 'Back to Home',
        'story.chapter1.title': 'Origins: The Age of Silence',
        'story.chapter1.text1': 'Before the existence of kingdoms and men, the universe was a blank canvas of absolute stillness. From this primordial void was born Tenebris, the Silent Entity. Unlike other evils, Tenebris does not seek to conquer or destroy out of hatred; its purpose is to consume all light and sound to return existence to its original state of eternal silence.',
        'story.chapter1.text2': 'To counter this cosmic threat, the Silver Order was founded, a brotherhood of knights who swore allegiance not to any monarch, but to the preservation of life itself. They built the Silent Citadel, not as a military fortress, but as a sealed arcane prison to keep the entity dormant. For millennia, the Order watched in secret, while the outside world forgot its purpose.',
        'story.chapter2.title': 'The Cataclysm: Vorlag\'s Betrayal',
        'story.chapter2.text1': 'Tenebris\' prison was strong, but its influence was patient. Through the cracks in the seal, the entity whispered promises of forbidden power. Vorlag, one of the Order\'s brightest scholars, was seduced by these whispers.',
        'story.chapter2.text2': 'In his arrogance, Vorlag believed he possessed the intellect to master the void\'s power instead of merely containing it. His betrayal was not an attack, but an implosion: he broke the sacred seal from within. The result was devastating; Tenebris\' corruption was unleashed like an instant plague, annihilating the brotherhood and transforming guardians and creatures of the environment into monstrosities twisted by darkness.',
        'story.chapter3.title': 'The Present: The Last Knight\'s Crusade',
        'story.chapter3.text1': 'Sir Joseph, who was on a distant mission during the cataclysm, was the sole survivor. Upon returning, he found the Citadel in ruins and his oath shattered. The curse released by Vorlag reached him, rusting his bright silver armor and turning it into a heavy burden, a physical map of his failures.',
        'story.chapter3.text2': 'Now, the world fades away. The path to the Citadel is blocked by the traitor\'s magic, and corruption spreads from the Whispering Forest. Joseph\'s mission is desperate: he must hunt his former brother Vorlag in the Sunken Grotto to purify his armor and gain the power necessary to ascend to the Citadel. There, on the throne of darkness, he must face Tenebris before silence consumes what little remains of reality.',
    }
};

// Función para cambiar idioma
function changeLanguage(lang) {
    // Guardar preferencia
    localStorage.setItem('nullbane-lang', lang);
    
    // Obtener todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Actualizar el botón de idioma
    updateLanguageButton(lang);
}

// Función para actualizar el botón de idioma
function updateLanguageButton(lang) {
    const langButton = document.getElementById('lang-toggle');
    if (langButton) {
        langButton.textContent = lang === 'es' ? 'ES' : 'EN';
    }
}

// Cargar idioma guardado o usar español por defecto
function initLanguage() {
    const savedLang = localStorage.getItem('nullbane-lang');
    const defaultLang = savedLang || 'es'; // Español por defecto
    
    changeLanguage(defaultLang);
}

// Inicializar cuando cargue el DOM
document.addEventListener('DOMContentLoaded', initLanguage);