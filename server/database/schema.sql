-- Create User table
CREATE TABLE User (
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    pseudo VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    registration_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    role ENUM('admin', 'user') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO user (pseudo, username, name, password, email, role)
VALUES ('Nexx', 'Mathieu', 'REY', 'password', 'mathieu-rey33@gmail.com', 'admin');

-- Create Book table
CREATE TABLE Book (
    id_book INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    cover_image VARCHAR(255),
    genre VARCHAR(255),
    synopsis TEXT,
    purchase_link VARCHAR(255),
    publication_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    id_user INT,
    FOREIGN KEY (id_user) REFERENCES User(id_user)
);

INSERT INTO Book (title, cover_image, genre, synopsis, purchase_link, id_user)
VALUES (
    'Chimère', 
    'Couverture-Chimère', 
    'Thriller, Science-fiction, Horreur', 
    'Dans l’obscurité de la ville de Golza, la nuit devient le théâtre de l\'horreur. "Chimère" nous plonge dans un monde où les cicatrices du passé et la quête de justice se croisent pour donner naissance à une danse macabre. Fallen, une figure mystérieuse et redoutée, sème la terreur à travers la ville avec une cruauté implacable. Son objectif est aussi précis que brutal : faire payer ceux qu\'il juge responsables des injustices qui l\'ont détruit. Alors que ses actes sanglants provoquent l\'alarme parmi les autorités, une unité spéciale est déployée pour capturer ce spectre implacable, ignorant qu\'ils se trouvent face à un ennemi dont la détermination est alimentée par un passé torturé et une vengeance sans compromis. À travers des scènes de violence brutale et de manipulations psychologiques, "Chimère" révèle une ville où l’innocence et la culpabilité se confrontent dans un tourbillon de vengeance et de rédemption. Les lignes entre le bien et le mal s’estompent alors que chaque personnage est confronté à ses propres limites et à la vérité cachée derrière les façades de la société. Plongez dans ce récit où chaque personnage, qu\'il soit traqué ou traqueur, est pris dans les mailles d\'une toile de vengeance et de désespoir. "Chimère" est une exploration sombre de la nature humaine, une quête de justice où le prix de la vérité peut être plus dévastateur que le silence.', 
    NULL, 
    1 
);


-- Create Chapter table
CREATE TABLE Chapter (
    id_chapter INT PRIMARY KEY AUTO_INCREMENT,
    content LONGTEXT NOT NULL,
    chapter_number INT NOT NULL,
    id_book INT,
    FOREIGN KEY (id_book) REFERENCES Book(id_book)
);

INSERT INTO Chapter (content, chapter_number, id_book)
VALUES
(
    'Journal de Fallen\n\n

Cher Journal,\n

Lorsque la guerre débute, le stratège le plus avisé se retire sans l’ombre d’un murmure et observe tapis dans l’obscurité, le fragile papillon, dont les désirs sont plus grands que ses ailes, se rapprocher dangereusement de la lumière. Il sait qu’une bataille n’est pas remportée par le camp ayant fait le plus de victimes, mais par celui qui est encore là pour conter l’histoire. Il n’y a pas de guerre de force, seulement des guerres d’usure. C’est alors que le papillon, proche de la lueur divine qui caressait son corps d’une chaleur rassurante, fut aveuglé par son goitre d’auto-satisfaction et de son avide appétit. À quelques centimètres de son Graal, il ne put s’empêcher de jeter un rapide coup d’œil en arrière pour mesurer l’étendue de sa longueur d’avance sur son adversaire, perdant de vue un bref instant, l’objet de sa convoitise. La transcendante lumière saisit alors cette occasion et retira son masque pour brûler les ailes du pauvre papillon qui n’eut le temps de comprendre ce qui lui arrivait. Rampant au sol comme il le fit jadis à son départ, vile chenille visqueuse incapable de s''élancer plus loin que la portée de son propre corps, prisonnière de sa faible nature, il ne put qu’observer son prédateur se délecter. Un loup ténébreux aux crocs de givre, arborant un regard complaisant après avoir déposé son costume scintillant à terre. La partie venait de prendre fin, bien que son sort ne fut déjà scellé le jour où l’un cru judicieux de penser que plus l’ennemi s''efface et se retire, plus ses chances de mordre diminuent.\n

Ainsi s’acheva la quête fébrile du regretté lépidoptère, dont les prouesses élevées au rang de fables, furent contées à ses semblables par le canidé triomphant. Il leur enseigna une règle fondamentale et pourtant si souvent négligée qui dit : "pour vaincre, il faut laisser à l’autre le soin de croire qu’il est sûr de gagner. Plus sa fierté grandit et plus elle devient son point faible. "\n

Goutte à goutte, le son de l’essence même de la vie d’un homme, maquillait le silence d’une vieille bâtisse de campagne, loin du centre-ville de Golza. Attaché et suspendu à une poutre rongée par l’humidité, l’homme commençait à perdre connaissance. Une fine entaille le long de sa gorge, il luttait dans le silence le plus absolu. Splash, splash… Chaque goutte qui tombait était un murmure de supplication qui caressait les tympans de cette obscure silhouette dos à lui, et dont la tête était vêtue d’une capuche rouge feu. Sa main droite tenait une lame aussi aiguisée que les crocs d’une hyène affamée observant sa proie, et le sang glissait dessus comme l’eau sur une nappe synthétique. Cette lame semblait être le prolongement de son être, une main de fer capable d''ôter la vie d’une simple caresse. À l''extérieur de la maison, la faucheuse déambulait comme une danseuse ivre et amoureuse au milieu des corps encore chauds, salissant la nature sauvage de ce lieu par un sang charbonneux, perverti par le serpent lui-même. C’est alors que l’ombre meurtrière sombra dans ses pensées et se mit à s’adresser à sa dernière victime, peu de temps avant que celle-ci ne succombe :\n

__ Douce, douce mort dansante sur le requiem de mon fil de rasoir, comme les feuilles d''un arbre face au vent. Je suis l''automne et la brise quand peu à peu ta verdure perd de son teint. Au premier rayon de soleil, la rosée recouvrira le feuillage comme les larmes d''un cœur pur et meurtrit. Accepte le fer entre le menton et le torse et je te promets un arc-en-ciel à nul autre pareil. Rouge vif et chaleureux, afin de combler la froideur de la nuit…\n

Trois mois plus tôt...\n\n

__ Aaron, nous sommes demandés au bureau du patron.
__ Bien, je te suis Carl.\n 

Aaron et Carl, tous deux policiers d''élite à la tête d''une section spéciale anti-terrorisme, étaient la fierté de la police. Leur carrière était un testament à leur efficacité : plus de dossiers résolus, plus de criminels appréhendés que tout autre duo dans le corps. Ils empruntaient maintenant le couloir austère du quartier général, en direction du bureau d''Earl, le chef incontesté de leur unité.
Carl, nerveux, jouait machinalement avec ses cheveux dorés, un geste de réassurance face à l''angoisse qui le tenaillait. Ses mains tremblantes trahissaient une appréhension qu''il n''arrivait pas à contenir, ses jambes semblaient presque prêtes à le trahir. En revanche, Aaron affichait une sérénité implacable, son regard empreint d''une assurance tranquille. Peu importe ce que leur supérieur avait à leur annoncer, il était prêt à l''affronter sans faillir. Mais l’agitation palpable de Carl finit par briser le silence pesant :\n\n
 
— Earl va probablement nous passer un savon. Cela fait quatre mois que cette affaire stagne, et nous sommes complètement à la traîne. Pendant ce temps, "Fallen" est toujours en liberté. Je sens qu’on va se faire remplacer, je le crains !
— Calme-toi, Carl ! répondit Aaron d’une voix ferme mais apaisante. On ne se fera pas remplacer. Personne n’est mieux placé que nous pour résoudre cette affaire, et tu le sais bien. Carl cligna des yeux rapidement, émit un rire nerveux et redressa le menton.
— Oui, tu as raison, murmura-t-il, comme pour se convaincre.
Arrivés devant le bureau d''Earl, Aaron prit l’initiative de frapper à la porte avant d’entrer. Carl le suivit, hésitant, comme un élève derrière son maître.
— Bonsoir, Earl, lança Aaron sans détourner le regard. Carl resta silencieux, les lèvres serrées.
— Asseyez-vous, je vous prie, répondit Earl d’une voix calme.
Les deux policiers prirent place sur les chaises rigides, à l’image de l’atmosphère tendue. Aaron s’étira légèrement, affichant une confiance tranquille, tandis que Carl croisa les bras, trahissant son malaise et son besoin de se protéger. Aucun détail n’échappait à l’œil perçant d''Earl, dont la réputation pour l’analyse était bien établie.
— Alors, Carl, quelque chose à me dire avant que je ne commence ? Ton agitation est palpable, et j’ai l’impression que je vais être déçu dès que tu ouvriras la bouche, observa Earl avec un sourire en coin.\n

— Euh... Non, tout va bien, dit Carl, tapotant nerveusement son poignet, trahissant son impatience. Aaron le fixait sans un mot.
— Hum... Je vois, répondit Earl avec un léger sourire. De toute évidence, tu n’as rien à m’apprendre que je ne sache déjà. Votre enquête est dans l’impasse, je suis bien au courant. Nous avons affaire à un tueur en série qui, je vous le rappelle, a pris la vie de dix personnes avant de signer ses crimes en déposant soigneusement une lettre pour vous narguer. Et c’est précisément pour cela que je vous ai convoqués. Je viens de recevoir un colis pour le moins... troublant, et ce que je m’apprête à vous dire doit rester confidentiel. Tout porte à croire qu’il a été envoyé par notre tueur.
— Que contient-il ? demanda Aaron, le regard assombri de suspicion.
— Un CD, répondit Earl calmement, sur lequel on voit l’assassin masqué. Il confesse les meurtres, décrit chaque scène, nomme les dix victimes... et affirme se trouver à Golza. Il nous lance un défi, c’est évident. Il veut jouer.
— Encore un cinglé de plus à arrêter ! grogna Carl, les dents serrées.
— Je veux que vous partiez immédiatement sur place avec votre équipe. Je vous rejoindrai ensuite. Ce meurtrier doit être arrêté, et vite, déclara Earl en se levant de son fauteuil.
— Très bien, laissez-nous quelques jours pour préparer notre départ. Cette mission pourrait durer, et nous allons devoir nous installer à Golza, répondit Aaron d’une voix posée.
— Il va falloir aussi penser à nos familles, ajouta-t-il en soupirant légèrement.
— Une semaine. Vous avez une semaine pour vous établir, conclut Earl avant de quitter la pièce sans un regard en arrière.

Golza. La ville la plus peuplée du pays, avec ses huit cent soixante-douze mille âmes, palpitant au rythme d’une criminalité dévorante. Quarante-trois pour cent de crimes en plus que les grandes villes voisines. Ce n’était pas un hasard si Fallen, ce tueur insaisissable, avait choisi Golza pour défier les hommes d’Earl. Pourtant, Golza ne se résumait pas à sa noirceur. Derrière ses façades meurtries, la ville rayonnait encore. C’était un centre étudiant dynamique, un carrefour de culture et d’histoire. On y trouvait des églises centenaires, des musées, des châteaux majestueux, un port effervescent et de vastes parcs où la vie continuait à vibrer malgré la peur.
Mais cette splendeur avait été ternie, trois mois plus tôt, lorsque le premier meurtre de Fallen avait fait basculer la ville dans la terreur. Le nom de Fallen hantait désormais chaque conversation, chaque coin de rue. Son ombre planait sur les réseaux sociaux, saturés de rumeurs, de témoignages anxieux et de caricatures moquant une police impuissante. Nul ne connaissait l’identité de ce tueur masqué, ni ce qu’il cherchait réellement. Mais une chose était certaine : tout le monde avait peur, et à juste titre.
Aaron et Carl n’avaient qu’une semaine pour annoncer à leurs familles qu’ils devaient quitter leur foyer, pour une mission à plus de cent cinquante kilomètres de là. Golza serait leur nouvelle maison, et la raison de leur départ, bien qu’inexprimée, résonnait déjà clairement dans leurs esprits : ils devaient mettre fin à la chasse avant que Fallen ne frappe à nouveau.

Le 8 octobre 2064...

Le soleil frappait durement sur la ville. Alix, un jeune homme de dix-neuf ans au regard perdu, sirotait son café à la terrasse d''un bar qu''il fréquentait souvent, "Le 813". Atypique, solitaire, et presque translucide sous la lumière crue, il donnait l’impression de porter le poids du monde sur ses épaules. Pourtant, son expression affichait toujours une certaine arrogance, une distance calculée. Alors qu''il aspirait à quelques instants de tranquillité, une jeune femme s’approcha sans invitation et s’assit en face de lui, brisant sa solitude avec une familiarité nonchalante.
— Salut, beau brun. J’ai failli ne pas te reconnaître avec cette tenue. Un enterrement en vue ? lança-t-elle, un sourire moqueur aux lèvres.
— Qu’est-ce que tu veux ? rétorqua Alix sans même lever les yeux, comme s''il savait déjà qui elle était.
— Tu m’as habituée à plus d''enthousiasme. Je passais par là et j''espérais bien t’y trouver, mon chou, dit-elle avec légèreté.
— On n''est pas censé se voir, tu le sais, non ? répondit-il, la voix pleine d''irritation retenue.
— Relax, j''ai pris ma cape d’invisibilité. On risque rien, répondit-elle avec un éclat malicieux.
— T’as fait tout ce chemin juste pour me dire ce que je sais déjà ? Je suis prêt, comme toujours. Maintenant, dégage. J’ai pas envie d''attirer l’attention.
— Très bien, comme tu veux, Sir. On se tient au courant. Passe le bonjour à Victoria ! fit-elle, d’un ton faussement innocent.
— Je me ferais une joie de ne pas y penser, répliqua-t-il sèchement.
— À plus, trésor ! lança-t-elle en se levant, glissant ses lunettes de soleil sur son nez avant de disparaître dans la foule aussi vite qu''elle était arrivée.
Alix termina son café, attachant ses cheveux d’un geste distrait. Il laissa quelques pièces sur la table et s’éloigna, les mains enfoncées dans les poches. Après une dizaine de minutes de marche à travers les rues animées de Golza, il arriva devant une porte rouge en bordure de route. Comme à son habitude, il jeta un coup d’œil rapide autour de lui avant de sonner. Un déclic retentit, et il entra sans hésitation.
Gravissant les escaliers, il arriva dans une salle d''attente froide et impersonnelle, aux murs d’un blanc clinique qui rappelaient l’atmosphère stérile des hôpitaux. Le silence y régnait, pesant. Alix s’assit, attendant patiemment, son regard vide fixé sur les murs nus. Quelques minutes s’écoulèrent…


— Bonjour M. Draugh, Mme Langlet va vous recevoir dans une minute, annonça la jeune secrétaire avec un sourire poli.
— Bien, merci, répondit Alix sans lever les yeux de son téléphone.
Cinq minutes plus tard, la porte du bureau au fond du couloir s’ouvrit, laissant apparaître une femme qui s’approcha de lui.
— Bonjour Alix, tu peux entrer, je te rejoins dans un instant.
— Merci, répondit-il avant de se lever.
Il pénétra dans un bureau sobre, presque banal, où une plaque sur la porte indiquait le nom "Langlet Victoria". Il s’installa, posa ses mains sur ses genoux et attendit, les yeux perdus dans le vide.
Quelques minutes plus tard, Victoria entra dans la pièce, refermant la porte derrière elle.
— Alors Alix, comment te sens-tu aujourd''hui ? demanda-t-elle en s''asseyant en face de lui.
— Vous avez changé de coiffure. Je préférais avant, lâcha-t-il froidement.
— Tu sais, Alix, je suis là pour t''aider. Si tu viens à tes rendez-vous, c’est que tu reconnais en avoir besoin. Pourquoi rendre les choses plus compliquées ?
— Répondre à une question par une autre, c’est ce que vous appelez dans votre jargon "l’évitement", non ? Si j''évite, ça ne vous suffit pas pour deviner que la réponse ne peut pas être aussi positive que vous l''attendiez ?
— Ce qui compte, ce n''est pas ce que je devine, mais ce que tu choisis de partager. Ici, tu es en terrain neutre. Te confier te soulagera. Qu’attends-tu de ces séances, Alix ?
— Votre secrétaire... elle a rencontré quelqu’un, répondit-il en évitant délibérément la question. Elle a regardé son téléphone en souriant quatre fois depuis que je suis arrivé. Ses pommettes ont rougi, elle a fait ses ongles récemment, elle a moins de cernes que la semaine dernière. Ah, et elle porte des chaussures neuves, avec un parfum différent de la dernière fois.
— Intéressant, mais y a-t-il un autre lien avec ce que nous devrions vraiment discuter ?
— Vous pensez qu’il est réellement possible de faire confiance à quelqu’un ? demanda-t-il brusquement.
— Mon avis importe peu, Alix. En tant que psychologue, je te dirais que la confiance se construit. Les déceptions ne doivent pas dicter ta manière d’agir avec les autres.
— C’est votre rôle de dire ça. Vous savez mieux que quiconque combien l''humain est vulnérable face à ses propres faiblesses, rétorqua Alix, son ton plus acerbe.
— La semaine dernière, tu m’as parlé de ta sœur. Tu disais que vos relations avaient changé. Peux-tu m’en dire plus ?
— Ma sœur ? Je n’ai pas de sœur, répondit-il sèchement, sans la moindre émotion.
— C''est une métaphore, j''en suis consciente. Mais qu''est-ce qui a changé entre vous pour que vous ne vous parliez plus ?
— Vous avez changé de coiffure. Chez une femme, c’est souvent un signe de changement de vie. Quelque chose vous tracasse, Victoria ? demanda Alix, ignorant la question, son regard plus perçant.
— Mme Langlet, corrigea-t-elle avec fermeté. Fais un effort, Alix. Je ne peux pas t''aider si tu continues à détourner chaque conversation.
— On parle, vous en avez simplement déduit le contraire.
— Tu as dit ne plus avoir de sœur. Cela implique un conflit, n''est-ce pas ?
— Voilà le problème. Les gens interprètent ce qui les arrange.
— Nous n’avons que la logique pour nous comprendre mutuellement. C''est ainsi que la communication fonctionne. Donc, tu n''as pas de sœur, mais tu lui parles toujours. Quelle est ta logique ?
— Il n’y a qu’une seule logique. Trois et trois font six, peu importe l’angle de vue. Mais quelqu''un pourrait voir un neuf selon sa perspective. La même vérité peut être perçue différemment.
— Cela ne répond pas à ma question. Comment décrirais-tu ta sœur ? insista-t-elle calmement.
— Vous êtes sur le point de vous séparer, n’est-ce pas ? La coiffure…
— Tu es un garçon brillant, Alix, mais ici, tu es le patient. Ne renversons pas les rôles. Parle-moi de ta sœur.
— La vie... suffit parfois d’un instant pour perdre quelqu’un, murmura-t-il, son regard s’assombrissant légèrement.
— Donc tu l’as perdue ?
— Je n’ai rien dit de tel. Vous interprétez à votre guise.
— Que cherches-tu vraiment, Alix ? demanda Victoria, son ton plus doux.
— Que pensez-vous de Fallen ? répondit-il soudainement, changeant une fois de plus de sujet.
— Fallen ? Ce tueur en série ? Quel est le rapport avec notre discussion ?
— Vous faites de l’évitement, Victoria.
— Mme Langlet, corrigea-t-elle encore. Voilà des mois que j''essaie de te comprendre. Faisons un marché. Je réponds à une de tes questions, et tu réponds à une des miennes. Cela te convient-il ?
— Que pensez-vous de Fallen ? insista-t-il, les yeux fixant intensément les siens.
— Je n’en pense rien. Il doit être arrêté. Prendre des vies est un acte abominable, et la justice doit prévaloir.
— Si je vous disais que j’étais Fallen, diriez-vous que je suis abominable ?
— L’es-tu ? demanda-t-elle calmement, son regard plongé dans celui d’Alix.
— Si je vous le disais, vous seriez obligée de me dénoncer, et moi, de vous tuer. Ce serait idiot. Je voulais juste connaître votre opinion. Il est facile de déshumaniser quelqu’un qu’on ne connaît pas. Nous condamnons sans comprendre, jugeons à travers des actes. Mais si ses raisons étaient valables ?
— Il n’y a aucune raison qui justifie de tuer, Alix. Nous avons des lois pour ça.
— Un lion a-t-il besoin de lois pour chasser ? répliqua-t-il.
— Nous ne sommes pas des lions, Alix.
— Pourtant, nous tuons. Animaux, gibier... nos lois permettent de prendre une vie pour se nourrir, mais pas pour réclamer justice ? Sommes-nous plus précieux que les autres créatures ?
— Où veux-tu en venir exactement ? demanda Victoria, intriguée.
— Il n’y a pas de méchants dans la vie, seulement des âmes en peine. Ce qu’on appelle "monstres" ne sont souvent que des êtres que personne n''a su aider.
— Beaucoup de personnes souffrent, sans devenir des criminels pour autant, répondit Victoria, son ton plus posé.
— La souffrance est subjective, tout comme la tolérance.
— Je ne te suis plus, Alix.
— Vous voulez m’aider, non ? Si je souffre, alors je ne suis pas si différent de Fallen. La seule différence, c’est que je n’ai pas encore agi.
— Ce qui te différencie, c’est justement ta retenue. Le bien et le mal sont définis par nos choix. Les lois sont là pour cela.
— Les lois sont des créations humaines. Qui sommes-nous pour juger de leur légitimité ?
— Si ce que tu fais blesse les autres, comment cela peut-il être bien ?
— Vous punissez un enfant pour l’éduquer. Il souffre sur le moment, mais il en tire des leçons. Peut-être que ce monde a besoin de la même éducation.
— Les lois sont là pour ça. Les prisons sont là pour ça.
— Les prisons n’ont jamais transformé un loup en agneau. Ceux qui en sortent sont plus dangereux qu’avant.
— Alors, tu penses que l’État devrait exécuter les coupables ?
— Je ne pense rien. La vérité est tout ce qui compte. Si elle n''est pas absolue, je ne me prononce pas.
— Et qu’en est-il de ta sœur ? demanda Victoria, revenant à la question initiale.
— Le temps est écoulé. Nous en parlerons la prochaine fois.
— Hum... d’accord. La prochaine fois, j’attends de toi des réponses plus franches. Essaie de t’ouvrir, Alix.
— Je vais y réfléchir. À la semaine prochaine. Oh, et vous n’avez pas nié.
— Nier quoi ?
— Le changement dans votre vie. Vous ne l’avez pas nié. À la semaine prochaine, Mme Langlet.
Alix se leva, toujours inexpressif, et quitta le bureau. Victoria le regarda partir, puis s''enfonça dans son fauteuil, notant dans son carnet ses pensées avant de se diriger vers la secrétaire.

__ Dites-moi Laura, avez vous rencontré un homme ?
__ Euh... et bien... Oui... Comment le savez-vous ?
__ M. Draugh, l’a deviné, pas moi. Je voulais juste vérifier quelque chose.
__ Euh...”

Victoria retourna dans son bureau et s’assied pour réfléchir. Alix sortit comme il était venu, les mains dans les poches et rentra chez lui.

Patient : Alix DRAUGH
Premières observations :
Alix présente une intelligence très aiguisée, marquée par une capacité d''observation exceptionnelle. Il semble avoir un besoin compulsif de comprendre et de maîtriser son environnement, ce qui pourrait indiquer un profil obsessionnel, possiblement lié à un besoin de contrôle exacerbé. Cette hypervigilance aux détails traduit chez lui un besoin de réduire l''incertitude qui l''entoure, symptôme typique des troubles anxieux, même si cela reste à approfondir.
Il se montre hautain dans ses interactions, manifestant une attitude de supériorité intellectuelle. Ce comportement peut révéler un mécanisme de défense face à un possible sentiment d''infériorité sous-jacent, ou à une fragilité narcissique qu''il tente de masquer en se positionnant au-dessus des autres. Cela demande une évaluation plus approfondie de son estime de soi.
Alix a montré une tendance marquée à déshumaniser certaines relations, en particulier celle avec sa sœur, qu’il aborde de manière détachée et cryptique. Le lien qu’il entretient avec elle semble central à ses difficultés, et il est probable que ce sujet soit une clé pour comprendre ses traumatismes non résolus. Il refuse de nommer explicitement les émotions qui pourraient l''affecter à ce sujet, usant de mécanismes d’évitement et de rationalisation.
Il convient d’explorer cette dynamique familiale, et de comprendre en quoi la relation avec sa sœur a façonné ses perceptions du monde et des autres. La résistance d''Alix à se livrer directement sur ce point pourrait être un indice de la profondeur du traumatisme, nécessitant une approche progressive et prudente pour ne pas déclencher davantage de mécanismes de défense.
Piste de travail : exploration du lien fraternel, décryptage de son rapport au contrôle et évaluation de son estime de soi.

Un peu plus tard dans la soirée...

Dans les entrailles du quartier le plus sordide de Golza, un coin à peine illuminé par des néons clignotants, une jeune femme à la peau pâle descendit dans une station de métro. Ses cheveux blonds, ternis par la poussière et les années, tranchaient violemment avec l’obscurité ambiante. Son allure marquée par les tatouages recouvrant ses bras et son cou la rendait presque irréelle, comme une ombre mouvante dans ce décor délabré. Le sac à dos en bandoulière, elle s''avança avec nonchalance, ses pas résonnant sur le sol fissuré, tandis que l’atmosphère étouffante du lieu semblait la réconforter, presque comme une vieille amie.
Les minutes s''étiraient, le silence n''était brisé que par le passage régulier des métros. Elle laissait passer les rames, l’une après l’autre, son regard scrutant le vide, attendant… quelque chose. Contrairement à ce qu’on pourrait attendre d’une femme seule, à cette heure et en un lieu si sinistre, elle n’exprimait aucune peur. Ses yeux fixes, son visage impassible, tout en elle reflétait une étrange assurance, comme si cet endroit sordide n''était qu''une extension de son propre être. Enfin, lorsque la troisième rame s’éloigna dans un grincement métallique, son regard s’accrocha à une silhouette de l’autre côté de la voie. Dans la pénombre, il était difficile de distinguer les traits de l’inconnu, mais un échange silencieux s''établit entre eux, un dialogue muet où l’obscurité elle-même semblait s’immiscer.
Sans hâte, elle traversa les escaliers, chaque pas résonnant comme un écho funeste, jusqu''à se retrouver face à lui.

— Bonsoir Nina, murmura le mystérieux quidom.
— Salut, répliqua-t-elle d’une voix basse. Tu as ce que je t''ai demandé ?
Ses yeux le transperçaient, froids, vides, attendant la transaction sans un mot de plus.
— Tiens, mais ralentis sur les doses, prévint-il en lui tendant une seringue. À ce rythme, tu risques de te brûler.
— Je te remercie pour ta sollicitude, mais je sais ce que je fais, lâcha-t-elle d''un ton glacé, saisissant l''objet avec une discrétion familière.

Sans ajouter un mot, ils se séparèrent dans un silence lourd, chacun disparaissant dans les ombres comme s’ils n’avaient jamais été là. Nina se dirigea vers les toilettes de la station. Elle vérifia rapidement qu’elle n’était pas suivie avant de verrouiller la porte derrière elle. Les murs délabrés, recouverts de graffitis presque illisibles, se resserraient autour d’elle. Dans ce huis clos oppressant, elle s''assit sur le couvercle des toilettes, sortit la seringue de sa poche et la tapota mécaniquement.
Sans la moindre hésitation, elle retroussa sa manche et enfonça l’aiguille dans sa peau avec une précision froide. Pas de douleur, pas de grimace. Cette scène macabre semblait un rituel qu''elle maîtrisait depuis longtemps. Mais une fois le liquide injecté, l’attente commença. Elle ferma les yeux, laissant la substance faire son œuvre. Son visage resta impassible quelques minutes, puis un changement subtil s’opéra. Des gouttes de sueur perlaient sur son front, glissant sur ses joues rougies par la montée brutale des effets. Ses mâchoires se crispèrent, ses muscles se tendirent sous l’intensité d’une douleur invisible, une lutte intérieure qui la consumait.

Ses lèvres laissèrent échapper un gémissement, qui se mua peu à peu en cri, guttural, bestial. À travers la porte, on aurait pu croire à un cri de naissance, comme si une vie luttait pour s''arracher de son corps. La station de métro, déserte à cette heure avancée, restait sourde à sa souffrance. Le lieu semblait absorber sa douleur, comme un théâtre complice.
Dix minutes plus tard, Nina sortit des toilettes, son visage aussi impassible qu’à son entrée. Ses yeux étaient vides, mais ses gestes méthodiques. Le sac à l''épaule, elle monta dans la rame de métro suivante, le regard perdu dans la nuit obscure qui régnait dehors. Elle descendit quelques stations plus loin, en plein cœur du centre-ville, où résonnait encore la cacophonie lointaine des festivités. Le contraste entre l''agitation joyeuse de la ville et la noirceur de son esprit était frappant.
En marchant à travers la foule, elle sentit une vibration dans sa poche. Un message venait d''arriver.

De : -A-
A : Nina
A : 23h12

Ne prends aucun risque inconsidéré. 

-A-

De : Nina
A : -A-
A: 23h13

Je gère. 

Nina continua d’avancer dans les rues sombres, ses pas résonnant à peine dans l’air lourd et moite de la nuit. Elle tourna dans une ruelle, avalée par l''obscurité, se fondant avec les ombres comme si elle n’avait jamais existé. Non loin de là, dans un modeste appartement au dernier étage d’un immeuble décrépit du centre-ville, tout près du commissariat, vivait une autre femme, à l’opposé de cette noirceur. Une femme que tout le voisinage connaissait sous le nom d’Abby.
Abby était discrète, presque effacée, mais dotée d’une douceur qui enrobait tout autour d’elle d’une chaleur silencieuse. Sa bienveillance avait fait d’elle une figure appréciée du quartier. Elle donnait sans compter : des repas aux sans-abris, du temps pour aider les personnes âgées, et un soutien inébranlable aux associations d’enfants malades. Elle était partout, une présence apaisante, comme une lumière vacillante dans cette ville ternie par la violence. Mais sous ce masque de bonté se cachait une solitude profonde. Abby n’avait que peu d’amis. Elle était maladroite, d’une timidité presque maladive, et la gentillesse qu’elle offrait sans réserve la rendait vulnérable, facilement écrasée par les autres.
Sa vie était modeste, sans grandes aspirations, si ce n’est un rêve aussi simple que celui de fonder une famille. Une existence banale, à peine remarquable, si ce n’était ce détail particulier qui faisait d’Abby une énigme aux yeux de tous. Car malgré son apparente candeur, elle vouait une fascination obsessionnelle pour une figure bien plus sombre : Fallen.
Fallen, un nom qui résonnait comme un murmure de terreur dans les ruelles de Golza. Un justicier aux méthodes brutales, qui traquait les criminels sans pitié, laissant derrière lui un sillage de corps mutilés. Mais pour Abby, Fallen était plus qu’un homme. Il était une cause, une mission justifiée par le chaos ambiant. Elle voyait en lui un purificateur, quelqu’un qui, malgré la violence de ses actes, agissait pour un bien supérieur. Une croyance étrange pour une femme aussi douce, qui surprenait quiconque découvrait son adoration pour cet être sanguinaire. Son appartement était un mausolée dédié à Fallen. Les murs, autrefois neutres, étaient désormais tapissés d’articles de journaux, de coupures relatant chaque acte de violence, chaque meurtre, chaque mystère. Abby, dans ses heures perdues, croquait des portraits imaginaires de cet homme, dessinant sans relâche son visage selon les descriptions qu’elle avait glanées. Son ordinateur regorgeait de vidéos, de discussions, de spéculations, tout un arsenal de fanatisme latent que personne, ou presque, ne soupçonnait. Le voisinage la voyait comme une femme sans histoires, mais derrière sa porte close, un sanctuaire morbide s’étendait, rendant son adoration pour Fallen d’autant plus malsaine.
Peu savaient quoi que ce soit sur son passé. Abby parlait rarement d’elle-même. Elle évoquait parfois ses parents, vivant à l’étranger selon ses dires, ou sa jeunesse modeste. Elle s’était installée à Golza pour y poursuivre des études artistiques dans la prestigieuse université du centre-ville. Mais ce rêve d’art semblait n’être qu’un vague souvenir, effacé par l’obsession grandissante qu’elle nourrissait pour Fallen. Malgré son physique agréable — petite, cheveux bruns tombant en cascade sur ses épaules, un visage doux — elle attirait peu d’attention. Trop timide, trop effacée. Les rares hommes qui entraient dans sa vie étaient rapidement repoussés par son attachement démesuré, presque étouffant. Abby était le genre de femme à s’accrocher désespérément à la moindre connexion humaine, à en devenir dépendante, laissant son cœur trop fragile s’effriter encore et encore.
Dans cet appartement, seule face à ses pensées, elle restait en retrait, attendant quelque chose, ou quelqu’un. Alors que la ville s''animait dans une cacophonie de sons, de rires et de festivités, Abby, quant à elle, demeurait sereinement installée dans son appartement, coupée de l’agitation extérieure. Affalée sur son canapé, un roman policier entre les mains, elle savourait sa solitude. Grande amatrice de thrillers, elle possédait une impressionnante collection de livres, qu’elle dévorait à un rythme effréné. Trois ouvrages par semaine ne lui posaient aucune difficulté. Un verre de vin rouge à portée de main, une musique douce en fond, et l''insonorisation de son double vitrage la plongeaient dans un cocon hors du temps. Ce soir de fête, la nuit noire régnait sur Golza, mais dans son univers feutré, Abby s’absorbait dans les pages de son livre, indifférente à l''effervescence extérieure. Dehors, la fête de la musique battait son plein. Des groupes d’étudiants envahissaient les rues, l’alcool circulait sans modération, et les cris joyeux se mêlaient au bruit des instruments qui résonnaient de part et d''autre de la ville. Golza, habituellement oppressante, était pour une nuit, un lieu de célébration. Pourtant, dans cette atmosphère électrisée, quelque chose de plus sombre se préparait. Comme si, sous la surface, une ombre guettait, prête à frapper. Un groupe d’étudiants, insouciants et légèrement ivres, marchait vers le fleuve, des bouteilles d’alcool cachées dans leurs poches. Ils riaient, titubaient, ne prêtant pas attention aux deux hommes qui s’approchaient dans l’ombre. L''un d''eux sortit une lame, la faisant luire sous le faible éclairage des réverbères. Sans un mot de plus, il les somma de lui remettre tout ce qu''ils possédaient : argent, bijoux, téléphones. L’autre homme restait en retrait, surveillant les environs, son regard acéré comme celui d’un prédateur prêt à bondir. Face à la menace, le groupe, pétrifié par la peur, obéit. Aucune des deux filles ne songea à résister, et les garçons, tout aussi terrorisés, ne trouvèrent pas la force de jouer les héros.
Mais soudain, un son étrange rompit le silence, presque imperceptible dans le tumulte de la fête au loin. L’homme armé s’effondra brutalement, sa lame échappant de ses doigts crispés. Un poignard venait de s’enfoncer dans sa carotide, et il s''étouffait déjà dans son propre sang, son rire gargouillant résonnant sinistrement tandis qu’il luttait pour respirer. Les étudiants étaient figés, les visages tordus de terreur, incapables de comprendre ce qui venait de se passer. Aucun cri ne sortirait de leur gorge, comme si l’horreur les avait rendus muets. Le vacarme festif engloutissait leurs supplications silencieuses.
Le second homme, pris de panique, sortit un pistolet et commença à hurler, agitant son arme dans toutes les directions.

__ Montre-toi ! » hurlait-il, le souffle court, la voix brisée par l’angoisse.
Dans son dos, une ombre se matérialisa lentement, glissant dans l’obscurité comme un spectre. Plus elle approchait, plus l’on distinguait cette capuche rouge recouvrant un visage masqué, terrifiant et impassible. C’était Fallen.
__ Comme il est facile pour un prédateur d''insuffler la peur dans l''âme de sa proie, au point qu’elle se rende sans même tenter de fuir, » murmura-t-il d’une voix déformée par le modulateur de son masque, ajoutant à son aura sinistre. __ Dis-moi, vermine, de quelle façon souhaites-tu mourir ? 
Le malfrat, désespéré, pointa son arme vers Fallen, les mains tremblantes.  
__ Toi… laisse-moi tranquille ! Va-t’en avant que je ne vide mon chargeur sur toi ! 
Fallen ne bougea pas d’un centimètre, ses bras grands ouverts comme s’il accueillait la mort avec une nonchalance glaciale. « Est-ce là tes derniers mots, nuisible ? La supplication mêlée à la menace… Vas-y, vide donc ton chargeur, ne me loupe pas. Quand tu auras fini de jouer, je te ferai mal. »
Les tirs résonnèrent avec force, et l’agresseur hurla en vidant le chargeur entier de son arme sur Fallen. Chaque impact projetait légèrement son corps en arrière, comme une poupée désarticulée. Le dernier coup atteignit sa poitrine, et Fallen s’effondra, son corps inerte s''écrasant au sol. Le malfrat, hystérique, éclata d’un rire nerveux.
__ AHAHAHAH, tu fais moins le fier maintenant, HEIN ? On va me donner une médaille pour t’avoir fumé, espèce de raclure ! Ahahahaha ! 
Mais son euphorie fut de courte durée. Fallen, allongé sur le sol, remua légèrement.
__ Et le loup dit à l''agneau, “ murmura une voix mécanique déformée”, que pour tuer, l’arme n’est rien si celui qui la tient a peur de verser son propre sang. Commence à courir. Quand je t''aurai rattrapé, je tiendrai ma promesse... et te ferai mal. 
Lentement, comme si de rien n''était, Fallen se redressa. Les balles qui l’avaient percé semblaient n’avoir aucun effet sur lui. L’agresseur, pétrifié, recula d''un pas, puis se mit à fuir dans un mélange de terreur et de désespoir.
__ Non... laisse-moi ! Par pitié ! 
Mais il était trop tard. Le corps de Fallen bascula vers l’avant et, en une fraction de seconde, il disparut dans l’ombre. Lorsqu’il réapparut, il se tenait juste devant sa proie. D''un coup sec, il envoya un puissant coup de pied dans la rotule du malfrat, brisant sa jambe dans un craquement sinistre. L’homme s’effondra, hurlant de douleur, tandis que Fallen posait calmement une main gantée sur sa bouche pour étouffer ses cris.
Sans hâte, Fallen s’accroupit à côté de lui. Il sortit une nouvelle lame de sa ceinture et la fit scintiller sous les faibles lumières, juste sous la gorge de sa victime.
__ Là... shhhhh, doucement... » murmura Fallen d’une voix hypnotique. « Calme-toi. Écoute ma voix et seulement ma voix. Détends-toi, tout va bien... tu es en sécurité.
Fallen commença à balancer lentement son poignard devant les yeux de sa victime, ses mots imprégnés d’un pouvoir quasi hypnotique.
_ Petit à petit, les autres sons disparaissent. Tes muscles se détendent. Tes paupières sont lourdes, ton corps devient plus lourd que le marbre. Tu es calme, détendu, confiant… 
La respiration de l’homme se fit plus lente, ses yeux se voilèrent d’une étrange sérénité. Fallen continuait de tapoter son épaule doucement.
__ Parfait, te voilà docile et calme. À présent, tu n’entends que ma voix. Profite de chaque instant de ce délicieux moment… 
D''un geste méthodique et mesuré, Fallen commença à inciser lentement la gorge de sa proie, traçant la lame avec une précision glaciale. Les yeux de l’agresseur s''écarquillèrent, et une vague de douleur le traversa.
__ Et maintenant, nuisible, je veux que tu sentes la chaleur glaçante de ma lame traverser ta chair. Ressens chaque battement de ton cœur, et au compte de trois, ta douleur se multipliera par dix à chaque seconde. Tu hurleras à trois, et seulement à trois... jusqu’à ce que tes cordes vocales se déchirent. Un... deux... trois. 
Au compte de trois, Fallen relâcha sa prise sur la bouche de l’homme. Ce dernier laissa échapper un cri déchirant, atroce, résonnant comme un hurlement bestial. Le sang giclait, se répandant sur la pelouse humide tandis que Fallen poursuivait son œuvre, sans se presser. Il prenait son temps, savourant chaque instant de son sadisme méthodique.
Lorsque la vie quitta enfin son corps, Fallen se releva calmement. Il essuya sa lame sur les vêtements de la victime avant de s’en aller, disparaissant dans la nuit, indifférent aux témoins potentiels.
Plus tard, le corps mutilé fut découvert par des passants et la police fut immédiatement alertée. La scène de crime, macabre, marqua profondément ceux qui y assistèrent. Un périmètre de sécurité fut mis en place tandis que les dernières notes de musique mouraient dans l’air, ternissant ce qui devait être une soirée festive.
— Je me souviendrai toujours de ces années comme si c’était hier. Mon frère, Tyler, et moi vivions dans une petite maison de campagne avec nos parents. Notre mère était dépressive, elle ne ressemblait plus à rien. Elle passait son temps à boire, à nous ignorer, tandis que notre père… ce monstre… passait des heures le soir à nous battre et à nous humilier. Parfois c’était moi, parfois mon frère, et il nous forçait à regarder l’autre se faire maltraiter. Brûlures de cigarettes, coups de ceinture, gifles… nous avions droit à tout. Je ne compte plus les cicatrices, tant sur ma peau que dans mon esprit. Mais le pire… ce sont les blessures invisibles, celles qui ne guérissent jamais. Nous avons perdu toute foi en l’humanité.
— Ce que ma sœur essaie de dire, c’est que nous vivons désormais sur la défensive. Pour nous, tout le monde est un ennemi potentiel, dit Tyler. Notre père, pour les autres, c’était un homme respectable. Personne ne se doutait de rien. Et quand on nous posait des questions sur nos blessures, nous devions inventer des histoires. Dire qu’on se battait entre nous ou qu’on était maladroits. Personne n’aurait cru ce qu’il se passait vraiment, et si jamais nous avions osé parler… les conséquences auraient été terribles.
— Comment avez-vous réussi à vous en sortir ? demanda une jeune femme du groupe, ses yeux emplis de compassion.
— Une nuit, notre père, ivre, s’est encore une fois retourné contre nous pour un rien, expliqua Grace, les larmes aux yeux. Tyler a craqué ce soir-là. Il ne pouvait plus me voir subir cela. Ils se sont battus… et mon père est tombé dans les escaliers. C’était un accident, mais Tyler vit aujourd’hui avec ce poids sur la conscience.
— Je n’oublierai jamais ce moment, intervint Tyler, sa voix tremblante. Même si c’était un monstre… il restait notre père. Après ça, tout s’est enchaîné : les examens médicaux, les psychologues, et notre mère a été emprisonnée pour complicité et non-assistance. Nous sommes devenus orphelins, placés dans une famille d’accueil jusqu’à notre majorité.
— C’est tellement atroce… murmura quelqu’un d’autre dans le groupe, horrifié par leur récit.
Les échanges continuèrent, jusqu’à ce que l’heure du repas approche et que la cloche de l’église se mette à sonner…

Un peu plus tard, à midi, dans cette même église, un jeune homme pénétra d’un pas nonchalant. Il plongea ses doigts dans l’eau bénite, fit le signe de croix, puis se dirigea vers le confessionnal.

— Pardonnez-moi, mon père, car j’ai péché, dit-il d’une voix calme.
— Je t’écoute, mon enfant. Allège ton cœur, confesse tes fautes, et Dieu t’accordera sa miséricorde.
— J’en doute… mais j’espère me tromper.
— Qu’as-tu sur la conscience, mon fils ? Que veux-tu confesser ?
— L’injustice de ce monde me ronge. Mon père est en prison pour un crime atroce qu’il n’a pas commis. Tout l’accable, mais je sais qu’il est innocent. C’est un complot contre lui, et il n’y a rien que je puisse faire. Je suis rempli de haine… et d’impuissance.
— Comment t’appelles-tu, mon fils ? demanda le prêtre, la voix douce.
— John, mon père.
— Dis-moi, John… crois-tu encore en Dieu ?
— Je suis né dans une famille pratiquante, mais aujourd’hui… je ne sais plus. Ma foi s’effondre. Si Dieu existe, pourquoi permet-il autant de malheurs ? Pourquoi reste-t-il silencieux devant tant d’injustice ?
— Tu tiens Dieu pour responsable des maux de ce monde ?
— Non, répondit John, hésitant. Je sais que le mal vient des hommes, de leur perversion… mais je ne peux m’empêcher d’accuser Dieu de laisser faire, de fermer les yeux.
— Dieu aime tous ses enfants, John. Même ceux qui font le mal. Si tu avais un enfant, et qu’il commettait un acte terrible, te détournerais-tu de lui ?
— Non… je continuerais de l’aimer, répondit-il après un moment de réflexion. Mais l’amour ne doit pas passer avant la justice. Je voudrais qu’il assume ses actes.
— Ce n’est pas aussi simple, mon fils. L’amour est la force la plus puissante qui soit. Dieu n’est pas responsable des actions des hommes. Il leur a donné le libre-arbitre, et avec lui, la liberté de choisir entre le bien et le mal. Derrière chaque souffrance, il y a une leçon, quelque chose à apprendre… même si la douleur et la colère nous aveuglent. Si ton père est innocent, comme tu le crois, alors tu dois garder foi en lui et en Dieu. Seul le divin peut juger avec justice. Notre propre vision de ce qui est juste est souvent biaisée par nos croyances et nos émotions.
— J’aimerais pouvoir encore y croire… mais c’est trop tard, dit John en serrant les poings. Si je me trompe, j’assumerai les conséquences de mes actes. Je ne peux plus vivre ainsi, à voir mon père pourrir en prison pour un crime qu’il n’a pas commis. J’utiliserai mon libre-arbitre. Je rendrai justice.
— Dans ce cas, tu te détournes de Dieu pour embrasser les ténèbres, avertit le prêtre. Est-ce cela que ton père souhaiterait ?
— Mon père veut être libre, c’est tout ce qui compte.
— Veut-il que tu perdes ton âme pour sa liberté ? Sa libération vaut-elle plus que toi ?
John resta silencieux un instant, le regard perdu.
— Probablement pas… mais je ne peux plus reculer. Je ferai tout ce qu’il faut pour qu’il sorte. Tous ceux qui l’ont condamné à tort doivent payer. Ils ont détruit ma vie, notre famille… Le pardon est à Dieu. Pas à moi.
— Puis-je encore te faire changer d’avis, John ? demanda le prêtre, une lueur d’espoir dans la voix.
— Non, mon père.
— Alors… pourquoi es-tu venu te confier ?
— Pour vider mon cœur, répondit il simplement.
— Puisse Dieu te protéger, mon fils, murmura le prêtre, impuissant.
John sortit du confessionnal, la colère brûlant dans ses yeux sombres. Ses pas résonnèrent dans l’église silencieuse alors qu’il quittait l’édifice. Quelques mois plus tôt, son père avait été accusé de complicité de terrorisme, faussement impliqué dans un attentat ayant fait quatre-vingt-neuf morts. Les preuves étaient accablantes, et il avait été condamné à la perpétuité. Peu de temps après, la mère de John, incapable de supporter la honte, s’était suicidée, laissant son fils unique seul avec sa rage.

Au même moment, loin de cette agitation, dans un sous-sol sophistiqué aux équipements high-tech, se tenait une réunion secrète. Des hommes et des femmes de divers âges étaient rassemblés autour d''une grande table en métal.

__ Merci à tous d’être venus. Nous pouvons commencer la réunion, annonça le président de la réunion.
__ Nous devons absolument aborder le cas de Fallen et régler cette situation en priorité, s’exclama l’un des hommes. Nous savons qu’il se trouve à Golza. Pour une raison inconnue, il a lui-même invité la police à se rendre là-bas. Les informations reçues ce matin révèlent qu''il aurait tué deux nouvelles personnes hier soir. L’une d’elles était armée, les douilles et traces de poudre ont été retrouvées sur les lieux.
__ Fallen a-t-il été blessé ? demanda une femme, les sourcils froncés.
__ Apparemment. Un de mes contacts dans la police va nous fournir un échantillon de sang trouvé sur les lieux. Nous pourrons l’analyser pour confirmer s''il s’agit bien de lui.
__ A-t-il pris des mesures pour s’assurer que ce sang ne tombe pas entre les mains des enquêteurs ? demanda un autre membre du groupe.
__ Bien sûr. Si la vérité éclatait, ce serait catastrophique pour nous.
__ Très bien. Il est crucial que personne ne découvre ce qu’est réellement Fallen. Nous avons mis tous nos espoirs dans ce projet, et il est impératif de le protéger.
__ Et concernant l’unité spéciale qui a été envoyée sur place ? demanda un autre participant.
__ Ils seront un atout précieux pour nous aider à le localiser. Une fois trouvé, nous veillerons à ce qu''il soit ramené ici.
__ Parfait. Maintenant que tout est clair, passons à l’ordre du jour suivant. Longue vie à Chimère, mes frères et sœurs. “Progrès et sacrifice” !
__ “Progrès et sacrifice” ! répondirent en chœur tous les participants, leur voix résonnant avec conviction dans la salle.


Journal de Fallen

Cher Journal,

Quel monde misérable…

À toi, mon sang envers et contre tous, toi qui m''as donné vie par égoïsme, toi, qui m''a tenu la main pour m''apprendre à marcher quand mes jambes étaient encore fébriles, toi , qui m''aime encore malgré mes fautes, ne marche pas sur mes rêves.

À toi, mon ami de longue date, toi qui as su voir à travers mes faux sourires et qui as séché mes larmes bien trop de fois, toi qui m''as offert ta confiance, toi, qui oses me remettre sur le droit chemin, ne marche pas sur mes rêves.

À toi, mon ennemi à venir, toi qui peut-être un jour sera sur ma route, toi dont la carrure en impose, toi, et tes précédents combats qui t''ont rendus victorieux et fier, ne marche pas sur mes rêves.

À toi, mon amour potentiel, toi qui te diras différente des autres, toi, qui souhaiteras plus que tout guérir mes maux, toi qui t''offriras à moi dans l''espoir que je sois le dernier, toi, qui me prononceras ces quelques mots trop souvent utilisés à tort, ne marche pas sur mes rêves.

À toi, qui que tu sois, toi qui as marché sur mes rêves, toi qui étais l''une de ces quatre personnes, toi, qui n''as pas tenu compte de mon avertissement, je vais te détruire et rien ne saurai m''en empêcher. Je suis né et j''ai grandi dans la rue, une rue qui ressemblait à une chambre d''enfant, mais sans amour à l’intérieur. J''ai connu mes premières larmes avant mes premiers rires, j''ai connu la douleur avant l''amour, la trahison avant le soutien, j''ai connu mes premières funérailles avant mon premier véritable anniversaire.

À toi, qui crois connaître la haine, mais qui ne sais pas l''écrire, la prononcer, regarde bien dans mes yeux et dis moi quelle échappatoire tu y vois. Je prendrais ta famille, tes amis, ton amour, et même tes ennemis, tout le monde t''oubliera et je serai seul devant ta pierre tombale avec un verre à la main. Toi, qui que tu sois, toi qui as marché sur mes rêves, je briserais ton esprit avant tes os. Peu importe les efforts que tu feras, les coups que tu me donneras, je ne tomberai jamais. J''ai connu l''enfer quand j''étais un enfant, le cornu comme j''avais pour habitude de l’appeler est encore tout tremblant, je l''ai séquestré dans son antre alors que je n''avais pas dix ans. J''ai suturé mes plaies avec mes dents et quelques cheveux, j''ai regardé la mort de près et je l''ai vu cligner des yeux. Je suis faible à tes yeux, mais mon esprit est clair, je ne frappe pas souvent, mais je suis vif comme l''éclair. Je me délecterai de ton sang, te mettrai à l''envers, tu me mépriseras, mais tu me supplieras. Ne t''avise surtout pas de croire que la foudre ne frappe jamais deux fois au même endroit, je ne suis peut-être qu''un homme ordinaire, mais j''ai beaucoup trop de vécu dans les bras.

À toi, qui que tu sois, toi que j''aurais détruit, je trainerai ton nom dans la boue, toi, qui t''ais cru plus fort que ma haine, je raclerai tes semelles avec les dents de tes proches et je reprendrai mes rêves. Rien n''y personne ne m''empêchera de les atteindre.

Du haut de mon toit, j’observe, telle une sentinelle, prêt à bondir sur mon gibier. Cramponnez vous, parce que l’époque où les mères chantonnaient des berceuses à leurs petits avant de dormir est révolue, maintenant à la nuit tombée, ce sont des cris stridents, des os qui se brisent, chacun de mes gestes fera l’effet d’un tremblement de terre, chaque goutte de sang que je ferais couler comptera pour chaque larme que ce monde m’a fait verser !

Je suis Fallen ! ',  
    1,             
    1                    
);


-- Create Poem table
CREATE TABLE Poem (
    id_poem INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    publication_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    id_user INT,
    FOREIGN KEY (id_user) REFERENCES User(id_user)
);

INSERT INTO Poem (title, content, id_user)
VALUES (
    'Le loup et l\'araignée',
    "Alors l'araignée dit au loup de rendre à ses arts ce qui appartient à ses arts\nCar au même titre que sa toile, l'art est nié.\nEt bien que ce ne soit pas une évidence, elle a son paradis et son Eve y danse.\nLe loup au pouls rapide, pris au piège dans la prison de fils répondit alors\nQue si l'art est nié, c'est que l'art muet de l'araignée est un art niait. Alarmée,\nL'infecte insecte injecte alors son venin au loup en vue de le manger\nMais lorsque l'araignée mordit le loup, le loup presque mort dit à l'araignée :\nQue si son art régnait, son dard est niait puisque l'art c'est nié.\nAlors le loup accepta le sort de l'Arachné et devint l'art saigné,\nSaignant et à l'arrêt, l'araignée triomphante se pencha sur le loup haletant\nLorsque soudain le canidé meurtri vint applaudir des crocs l'araignée...\nL'araig...l'arai... l'art est nait. Le loup lui enseigna avant de la saigner.",
    1
);


-- Create Comment table
CREATE TABLE Comment (
    id_comment INT PRIMARY KEY AUTO_INCREMENT,
    content TEXT NOT NULL,
    publication_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    id_user INT,
    id_work INT,
    work_type ENUM('book', 'poem'),
    FOREIGN KEY (id_user) REFERENCES User(id_user)
);

-- Create Rating table
CREATE TABLE Rating (
    id_rating INT PRIMARY KEY AUTO_INCREMENT,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    id_user INT,
    id_work INT,
    work_type ENUM('book', 'poem'),
    FOREIGN KEY (id_user) REFERENCES User(id_user)
);
