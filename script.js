// Configuration simplifiée des particules (commentée car particlesJS non chargé)
/*
particlesJS("particles-js", {
    particles: {
        number: {
            value: 40,
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#00ff9d" },
        shape: { type: "circle" },
        opacity: {
            value: 0.3,
            random: false
        },
        size: {
            value: 2,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00ff9d",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.5
                }
            }
        }
    }
});
*/

// Données des missions détaillées (définies au début)
const missionData = {
    'datasec': {
        title: 'Mission DataSec',
        subtitle: 'Mission DataSec',
        context: 'Dans le cadre de ma formation en administration système et réseaux, nous avons été amenés à mettre en place une solution de sauvegarde automatisée pour les structures hébergées à la M2L. L\'objectif était de permettre à chaque utilisateur de sauvegarder ses données sur un serveur FTP de façon sécurisée, avec une restauration possible en cas de besoin, et une documentation claire pour l\'utilisateur.',
        objectives: [
            'Acquérir des compétences techniques en gestion de sauvegardes.',
            'Savoir configurer et sécuriser un service FTP.',
            'Préparer des scénarios professionnels proches de la réalité.',
            'Produire une documentation utilisateur pour la sauvegarde FTP.'
        ],
        competenceObjectives: {
            'mode-projet': [
                'Analyser les objectifs et les contraintes du projet.',
                'Planifier les étapes et organiser le suivi.',
                'Suivre l\'avancement et ajuster les actions.'
            ],
            'service': [
                'Configurer un service FTP securise pour les utilisateurs.',
                'Verifier le bon fonctionnement via des tests de connexion.',
                'Produire une documentation guidee pour l\'utilisateur.'
            ]
        },
        steps: [
            {
                title: 'Travailler en mode projet',
                competenceKey: 'mode-projet',
                images: [
                    {
                        src: 'DATASEC.img/Travailler%20en%20mode%20projet/Suivi%20%C3%A9tape%20de%20la%20Mission%20Datasec/Diagramme%20de%20Gantt%20DATASEC.png',
                        alt: 'Diagramme de Gantt DATASEC',
                        caption: 'Suivi des etapes et planning de la mission DataSec'
                    }
                ]
            },
            {
                title: 'Mettre a disposition un service informatique - Mode operatoire',
                competenceKey: 'service',
                images: [
                    {
                        src: 'DATASEC.img/Mettre%20%C3%A0%20disposition%20un%20service%20informatique/Mode%20op%C3%A9ratoire/Configuration%20des%20Utilisateurs%20serveur%20FTP.png',
                        alt: 'Configuration des utilisateurs sur le serveur FTP',
                        caption: 'Configuration des utilisateurs sur le serveur FTP'
                    },
                    {
                        src: 'DATASEC.img/Mettre%20%C3%A0%20disposition%20un%20service%20informatique/Mode%20op%C3%A9ratoire/Sch%C3%A9ma%20r%C3%A9seau%20du%20Plot%20pour%20la%20mission.png',
                        alt: 'Schema reseau du plot pour la mission',
                        caption: 'Schema reseau du plot pour la mission DataSec'
                    },
                    {
                        src: 'DATASEC.img/Mettre%20%C3%A0%20disposition%20un%20service%20informatique/Mode%20op%C3%A9ratoire/Test%20connexion%20utilisateur%20au%20serveur.png',
                        alt: 'Test de connexion utilisateur au serveur',
                        caption: 'Test de connexion utilisateur au serveur FTP'
                    }
                ]
            },
            {
                title: 'Mettre a disposition un service informatique - Documentation guidee pour utilisateur',
                competenceKey: 'service',
                images: [
                    {
                        src: 'DATASEC.img/Mettre%20%C3%A0%20disposition%20un%20service%20informatique/Documentation%20guid%C3%A9e%20pour%20utilisateur/Connexion%20utilisateur%20et%20restauration.png',
                        alt: 'Connexion utilisateur et restauration',
                        caption: 'Connexion utilisateur et restauration des donnees'
                    },
                    {
                        src: 'DATASEC.img/Mettre%20%C3%A0%20disposition%20un%20service%20informatique/Documentation%20guid%C3%A9e%20pour%20utilisateur/Ex%C3%A9cution%20sauvegarde%20r%C3%A9ussi.png',
                        alt: 'Execution de sauvegarde reussie',
                        caption: 'Execution de sauvegarde reussie'
                    }
                ]
            },
            {
                title: 'Documentation utilisateur - sauvegarde FTP (PDF)',
                competenceKey: 'service',
                description: 'Guide utilisateur pour la sauvegarde FTP.',
                directLink: 'VELANNE.img/Mettre%20%C3%A0%20disposition%20un%20service%20informatique/DOC%20Utilisateur%20sauvegarde%20FTP.pdf',
                images: []
            }
        ]
    },
    velanne: {
        title: 'MISSION VELANNE',
        subtitle: 'Mission Velanne (VLAN)',
        context: 'Dans le cadre de la mission Velanne, j\'ai segmenté le réseau de la M2L par VLAN afin d\'isoler les ligues, sécuriser les flux et formaliser la mise en service. La mission s\'inscrit dans une démarche de travail en mode projet avec planification, suivi et validation par tests.',
        objectives: [
            'Définir la segmentation VLAN et les règles d\'isolation attendues',
            'Mettre en place la configuration et valider la connectivité par des tests',
            'Documenter l\'avancement et les preuves de réalisation'
        ],
        competenceObjectives: {
            'mode-projet': [
                'Cadrer la mission et fixer les objectifs de segmentation',
                'Planifier et suivre l\'avancement (compte rendu début/fin)',
                'Valider les résultats et formaliser les preuves'
            ],
            'service': [
                'Configurer les VLANs et les paramètres réseau nécessaires',
                'Tester la continuité du service et consigner les résultats',
                'Présenter la mise en service de manière claire et exploitable'
            ]
        },
        steps: [
            {
                title: 'Travailler en mode projet',
                competenceKey: 'mode-projet',
                images: [
                    {
                        src: 'VELANNE.img/Travailler%20en%20mode%20projet/Compte%20rendu%20d%C3%A9but%20de%20mission.png',
                        alt: 'Compte rendu début de mission',
                        caption: 'Compte rendu de début de mission et objectifs fixés'
                    },
                    {
                        src: 'VELANNE.img/Travailler%20en%20mode%20projet/Compte%20rendu%20de%20fin%20de%20mission.png',
                        alt: 'Compte rendu fin de mission',
                        caption: 'Compte rendu de fin de mission et bilan des actions'
                    }
                ]
            },
            {
                title: 'Mettre à disposition un service informatique',
                competenceKey: 'service',
                images: [
                    {
                        src: 'VELANNE.img/Mettre%20%C3%A0%20disposition%20un%20service%20informatique/Connexion%20au%20serveur%20ftp%20r%C3%A9ussi.png',
                        alt: 'Connexion au serveur FTP réussie',
                        caption: 'Validation d\'un accès fonctionnel au service'
                    },
                    {
                        src: 'VELANNE.img/Mettre%20%C3%A0%20disposition%20un%20service%20informatique/Tableau%20de%20test%20des%20pings%20apr%C3%A8s%20configuration%20des%20VLANs%20et%20ACL.png',
                        alt: 'Tableau de test des pings après configuration',
                        caption: 'Tableau de tests des pings après configuration VLAN/ACL'
                    }
                ]
            }
        ]
    },
    kiwi: {
        title: 'MISSION KIWI',
        subtitle: 'Mission Kiwi',
        context: 'Dans la mission Kiwi, j\'ai mis en service un serveur DHCP pour attribuer automatiquement des adresses IP aux utilisateurs filaires et Wi-Fi, avec des réservations d\'adresses pour garantir une attribution maîtrisée. Le suivi de la mission est prévu via Trello (preuve à venir) pour la compétence travailler en mode projet.',
        objectives: [
            'Mettre en service un serveur DHCP opérationnel pour l\'attribution automatique des adresses IP.',
            'Configurer des réservations DHCP pour les plages IP filaire et Wi-Fi.',
            'Organiser le suivi de mission via Trello (preuve à venir).'
        ],
        competenceObjectives: {
            'service': [
                'Valider le statut opérationnel du serveur DHCP.',
                'Paramétrer des réservations DHCP pour les utilisateurs filaires et Wi-Fi.',
                'Garantir une attribution d\'adresses IP conforme aux besoins.'
            ],
            'mode-projet': [
                'Planifier et suivre la mission dans Trello (preuve à venir).',
                'Tracer l\'avancement et les actions réalisées.'
            ]
        },
        steps: [
            {
                title: 'Serveur DHCP opérationnel - statut du service',
                competenceKey: 'service',
                images: [
                    {
                        src: 'KIWI.img/Mission%20Kiwi/Serveur%20DHCP%20op%C3%A9rationnel/Statut%20du%20serveur%20DHCP%20op%C3%A9rationnel.png',
                        alt: 'Statut du serveur DHCP opérationnel',
                        caption: 'Statut du serveur DHCP confirmant le service opérationnel'
                    }
                ]
            },
            {
                title: 'Réservation DHCP filaire et Wi-Fi - plage IP',
                competenceKey: 'service',
                images: [
                    {
                        src: 'KIWI.img/Mission%20Kiwi/R%C3%A9servation%20DHCP%20Filaire%20et%20Wifi/R%C3%A9servation%20plage%20IP%20WIFI%20et%20Filaire.png',
                        alt: 'Réservation plage IP Wi-Fi et filaire',
                        caption: 'Réservations DHCP pour les plages IP Wi-Fi et filaire'
                    }
                ]
            }
        ]

    },
    preparation: {
        title: 'PRÉPARATION DE POSTE INFORMATIQUE',
        subtitle: 'Mission 1 : Préparation de poste informatique',
        context: 'Préparer des postes pour qu\'ils soient conformes aux standards ANRAS.',
        objectives: [
            'Appliquer la nomenclature ANRAS sur le poste',
            'Sécuriser le poste avec BitLocker et sauvegarde Azure AD'
        ],
        steps: [
            {
                title: 'Renommage du poste selon la nomenclature ANRAS',
                images: [
                    {
                        src: 'Pr%C3%A9parationdeposte.img/Renommage%20du%20poste%20selon%20la%20nomenclature%20ANRAS/Nom%20du%20poste%20en%20cours%20de%20renommage.png',
                        alt: 'Nom du poste en cours de renommage',
                        caption: 'Renommage du poste selon la nomenclature ANRAS'
                    },
                    {
                        src: 'Pr%C3%A9parationdeposte.img/Renommage%20du%20poste%20selon%20la%20nomenclature%20ANRAS/V%C3%A9rification%20apr%C3%A8s%20renommage%20dans%20Portail%20Captif%20Entreprise%20Microsoft.png',
                        alt: 'Vérification après renommage dans Portail Captif Entreprise Microsoft',
                        caption: 'Vérification du renommage dans le portail captif Entreprise Microsoft'
                    }
                ]
            },
            {
                title: 'BitLocker activé avec sauvegarde Azure AD',
                images: [
                    {
                        src: 'Pr%C3%A9parationdeposte.img/BitLocker%20activ%C3%A9%20avec%20sauvegarde%20Azure%20AD/Enregistrement%20Azure%20AD%20et%20chiffrement%20Bitlocker%20activ%C3%A9.png',
                        alt: 'Enregistrement Azure AD et chiffrement Bitlocker activé',
                        caption: 'Activation de BitLocker avec sauvegarde dans Azure AD'
                    }
                ]
            },
            {
                title: 'Annexe - Procédure d\'installation Windows 11 (PDF)',
                description: 'Procédure d\'installation Windows 11 - PC ANRAS.',
                directLink: 'Pr%C3%A9parationdeposte.img/Annexe/PROC%C3%89DURE%20D%27INSTALLATION%20WINDOWS%2011%20-%20PC%20ANRAS.pdf',
                images: []
            }
        ]
    },
    ehpad: {
        title: 'MISE EN LIGNE D\'UN ARTICLE – EHPAD SAINTE MONIQUE',
        subtitle: 'Mise en ligne d\'un article – EHPAD Sainte Monique',
        context: 'Publication d\'un article institutionnel pour valoriser les actions de l\'EHPAD.',
        objectives: [
            'Créer et structurer l\'article dans K-Sup',
            'Vérifier la publication sur le site public'
        ],
        steps: [
            {
                title: 'Séquence création article sur K-Sup avant vérification sur site public',
                images: [
                    {
                        src: 'Miseenlignearticle.img/S%C3%A9quence%20Cr%C3%A9ation%20article%20sur%20K-Sup%20avant%20v%C3%A9rification%20sur%20site%20public/Arborescence%20de%20s%C3%A9lection%20de%20rubrique.png',
                        alt: 'Arborescence de sélection de rubrique',
                        caption: 'Arborescence de sélection de rubrique dans K-Sup'
                    },
                    {
                        src: 'Miseenlignearticle.img/S%C3%A9quence%20Cr%C3%A9ation%20article%20sur%20K-Sup%20avant%20v%C3%A9rification%20sur%20site%20public/Cr%C3%A9ation%20de%20la%20liste%20des%20fiches%20K-Sup.png',
                        alt: 'Création de la liste des fiches K-Sup',
                        caption: 'Création de la liste des fiches dans K-Sup'
                    }
                ]
            },
            {
                title: 'Vérification mise en ligne sur site public',
                images: [
                    {
                        src: 'Miseenlignearticle.img/V%C3%A9rification%20Mise%20en%20ligne%20sur%20Site%20public/Mise%20en%20ligne%20de%20l%27article.png',
                        alt: 'Mise en ligne de l\'article',
                        caption: 'Mise en ligne de l\'article sur le site public'
                    },
                    {
                        src: 'Miseenlignearticle.img/V%C3%A9rification%20Mise%20en%20ligne%20sur%20Site%20public/Visualisation%20de%20l\'article%20sur%20site%20public.png',
                        alt: 'Visualisation de l\'article sur site public',
                        caption: 'Vérification de l\'article sur le site public'
                    }
                ]
            }
        ]
    },
    susie: {
        title: 'MISSION 3 : MISE EN ŒUVRE FIBRE OPTIQUE FTTH – PROJET SUSIE',
        subtitle: 'Mission 3 : Mise en œuvre fibre optique FTTH – Projet SUSIE',
        context: 'Participation au projet SUSIE pour moderniser le réseau.',
        objectives: [
            'Mettre à jour le tableau de suivi du projet',
            'Documenter la mise en service de la fibre (PV Orange)'
        ],
        steps: [
            {
                title: 'Tableau de suivi Excel Projet SUSIE avant et après mise à jour',
                images: [
                    {
                        src: 'fibreoptique.img/Tableau%20de%20suivi%20Excel%20Projet%20SUSIE%20avant%20et%20apr%C3%A8s%20mise%20%C3%A0%20jour/Suivi%20non%20mis%20%C3%A0%20jour.png',
                        alt: 'Suivi non mis à jour',
                        caption: 'Tableau de suivi Excel avant mise à jour'
                    },
                    {
                        src: 'fibreoptique.img/Tableau%20de%20suivi%20Excel%20Projet%20SUSIE%20avant%20et%20apr%C3%A8s%20mise%20%C3%A0%20jour/Suivi%20mis%20%C3%A0%20jour.png',
                        alt: 'Suivi mis à jour',
                        caption: 'Tableau de suivi Excel après mise à jour'
                    }
                ]
            },
            {
                title: 'Procès Verbal de Mise en Service Orange (fibre active)',
                images: [
                    {
                        src: 'fibreoptique.img/Proc%C3%A8s%20Verbal%20de%20Mise%20en%20Service%20Orange%20%28fibre%20active%29/Proc%C3%A8s%20de%20mise%20en%20service%20de%20la%20fibre%20optique%20par%20ORANGE.png',
                        alt: 'Procès de mise en service de la fibre optique par ORANGE',
                        caption: 'Procès-verbal de mise en service de la fibre optique (page 1)'
                    },
                    {
                        src: 'fibreoptique.img/Proc%C3%A8s%20Verbal%20de%20Mise%20en%20Service%20Orange%20%28fibre%20active%29/Deuxi%C3%A8me%20partie%20Proc%C3%A8s%20de%20mise%20en%20service%20de%20la%20fibre%20optique%20par%20ORANGE.png',
                        alt: 'Deuxième partie Procès de mise en service de la fibre optique par ORANGE',
                        caption: 'Procès-verbal de mise en service de la fibre optique (page 2)'
                    }
                ]
            }
        ]
    },
    supressionsession: {
        title: 'RÉSOLUTION D\'INCIDENTS, SUPPRESSION DE SESSIONS UTILISATEURS MANUELLE',
        subtitle: 'Résolution d\'incidents et suppression de sessions utilisateurs',
        context: 'Traitement d\'incidents liés à l\'espace disque et nettoyage de profils utilisateurs pour rétablir un service stable.',
        objectives: [
            'Identifier la demande via le ticket et les preuves du hub',
            'Libérer l\'espace disque en supprimant les sessions inutiles',
            'Vérifier l\'amélioration après intervention'
        ],
        steps: [
            {
                title: 'Ticket et preuves depuis le hub',
                images: [
                    {
                        src: 'supressionsession.img/ticket%20preuve%20hub/affichage%20ticket.png',
                        alt: 'Affichage du ticket',
                        caption: 'Ticket d\'incident associé à la demande'
                    },
                    {
                        src: 'supressionsession.img/ticket%20preuve%20hub/Trace%20de%20l%27appel.png',
                        alt: 'Trace de l\'appel',
                        caption: 'Preuve de l\'appel depuis le hub'
                    }
                ]
            },
            {
                title: 'Avant / après : espace disque libéré',
                images: [
                    {
                        src: 'supressionsession.img/L%27avantapr%C3%A8s%20espace%20disque%20lib%C3%A9r%C3%A9/avant%20suppression%20session.png',
                        alt: 'Avant suppression de session',
                        caption: 'Espace disque avant suppression'
                    },
                    {
                        src: 'supressionsession.img/L%27avantapr%C3%A8s%20espace%20disque%20lib%C3%A9r%C3%A9/Apr%C3%A8s%20suppression%20utilisateur.png',
                        alt: 'Après suppression utilisateur',
                        caption: 'Espace disque libéré après suppression'
                    }
                ]
            }
        ]
    },
    creationscript: {
        title: 'CRÉATION DU SCRIPT POWERSHELL DE SUPPRESSION DE SESSIONS UTILISATEURS AUTOMATISÉES INACTIVES (> 60 JOURS)',
        subtitle: 'Création du script PowerShell de suppression de sessions inactives',
        context: 'Rédaction d\'un cahier des charges et développement d\'un script PowerShell pour supprimer automatiquement les sessions inactives, afin de libérer l\'espace disque et fiabiliser les interventions.',
        objectives: [
            'Formaliser le cahier des charges du script (périmètre et critères > 60 jours)',
            'Mettre en place la suppression automatisée avec gestion d\'erreurs',
            'Valider le bon fonctionnement sur un poste de formation'
        ],
        steps: [
            {
                title: 'Cahier des charges du script PowerShell',
                description: 'Document de cadrage précisant le périmètre, les contraintes et la gestion des erreurs.',
                directLink: 'cr%C3%A9ationscript.img/m%C3%A9canisme%20de%20gestion%20d%27erreurs/cahier%20des%20charges%20Script%20Powershell.pdf',
                images: []
            },
            {
                title: 'Résultat final d\'exécution du script sur le poste de formation',
                images: [
                    {
                        src: 'cr%C3%A9ationscript.img/R%C3%A9sultat%20final%20d%27ex%C3%A9cution%20du%20script%20sur%20le%20poste%20de%20formation/R%C3%A9sultat%20final%20d%27ex%C3%A9cution%20du%20script.png',
                        alt: 'Résultat final d\'exécution du script',
                        caption: 'Exécution réussie du script sur le poste de formation'
                    }
                ]
            }
        ]
    },
    suiviprojetsusie: {
        title: 'SUIVI ADMINISTRATIF ET OPÉRATIONNEL DU DÉPLOIEMENT FLEXIBLE INTERNET DANS LE CADRE D\'UN PROJET',
        subtitle: 'Suivi administratif et opérationnel du projet Flexible Internet',
        context: 'Suivi du projet Flexible Internet avec centralisation des informations, analyse des échanges et mise à jour des tableaux de pilotage.',
        objectives: [
            'Centraliser les informations projet dans un fichier de synthèse',
            'Analyser les échanges pour consolider le suivi',
            'Mettre à jour le tableau SharePoint du projet'
        ],
        steps: [
            {
                title: 'Fichier Excel de synthèse et les mails analysés',
                images: [
                    {
                        src: 'SuiviprojetSusie.img/Fichier%20Excel%20de%20synth%C3%A8se%20et%20les%20mails%20analys%C3%A9s/Centralisation%20des%20informations%20collect%C3%A9es%20dans%20un%20fichier%20de%20synth%C3%A8se.png',
                        alt: 'Centralisation des informations dans un fichier de synthèse',
                        caption: 'Centralisation des informations collectées dans un fichier de synthèse'
                    },
                    {
                        src: 'SuiviprojetSusie.img/Fichier%20Excel%20de%20synth%C3%A8se%20et%20les%20mails%20analys%C3%A9s/%C3%A9change%20des%20mails%20analys%C3%A9s%20pour%20exploitation%20des%20informations.png',
                        alt: 'Échange des mails analysés',
                        caption: 'Échanges de mails analysés pour exploiter les informations'
                    }
                ]
            },
            {
                title: 'Tableau SharePoint Projet Susie avant/après mise à jour',
                images: [
                    {
                        src: 'SuiviprojetSusie.img/ableau%20SharePoint%20Projet%20Susie%20avantapr%C3%A8s%20mise%20%C3%A0%20jour/Mise%20%C3%A0%20jour%20du%20tableau%20avant.png',
                        alt: 'Mise à jour du tableau avant',
                        caption: 'Tableau SharePoint avant mise à jour'
                    },
                    {
                        src: 'SuiviprojetSusie.img/ableau%20SharePoint%20Projet%20Susie%20avantapr%C3%A8s%20mise%20%C3%A0%20jour/Mise%20%C3%A0%20jour%20du%20tableau%20compl%C3%A8te.png',
                        alt: 'Mise à jour du tableau complète',
                        caption: 'Tableau SharePoint après mise à jour'
                    }
                ]
            }
        ]
    },
    m2l: {
        title: 'DÉVELOPPEMENT DE LA "MAISON DES LIGUES" SITE WEB POUR PRÉSENTER LES DIFFÉRENTES LIGUES SPORTIVES',
        subtitle: 'Développement de la "Maison des ligues" site web pour présenter les différentes ligues sportives',
        context: 'Dans le cadre d\'un projet collaboratif, j\'ai participé au développement d\'un site web pour la Maison des Ligues. Ce site a pour but de présenter les différentes ligues sportives hébergées et de valoriser leurs activités auprès des visiteurs.',
        objectives: [
            'Développer un site vitrine pour la Maison des Ligues',
            'Mettre en avant les différentes ligues sportives et leurs informations',
            'Travailler en collaboration avec mes camarades en utilisant GitHub',
            'Mettre le site en ligne et accessible via GitHub Pages'
        ],
        steps: [
            {
                title: 'Organisation du projet en équipe via GitHub',
                directLink: 'https://github.com/FastAze/maison-de-ligue',
                images: []
            },
            {
                title: 'Développement du site',
                directLink: 'https://docs.github.com/fr/pages',
                images: []
            },
            {
                title: 'Mise en ligne du site',
                directLink: 'https://fastaze.github.io/maison-de-ligue/',
                images: []
            }
        ]
    },
    glpi: {
        title: 'RECENSEMENT AUTOMATISÉ DU PATRIMOINE INFORMATIQUE VIA GLPI',
        subtitle: 'Recensement automatisé du patrimoine informatique via GLPI',
        context: 'Mise en place d\'un recensement automatisé des postes via GLPI pour centraliser l\'inventaire et disposer d\'informations fiables sur le matériel et les logiciels installés.',
        objectives: [
            'Automatiser l\'inventaire des postes avec l\'agent GLPI',
            'Consolider les informations dans le tableau de bord GLPI',
            'Accéder au détail matériel et logiciel de chaque poste'
        ],
        steps: [
            {
                title: 'Recensement automatisé via GLPI (preuves)',
                images: [
                    {
                        src: 'TP%20GLPI.img/Recensement%20automatis%C3%A9%20du%20patrimoine%20informatique%20via%20GLPI/Tableau%20de%20bord%20GLPI.png',
                        alt: 'Tableau de bord GLPI',
                        caption: 'Tableau de bord GLPI avec l\'inventaire centralisé'
                    },
                    {
                        src: 'TP%20GLPI.img/Recensement%20automatis%C3%A9%20du%20patrimoine%20informatique%20via%20GLPI/Patrimoine%20logiciel%20des%203%20postes.png',
                        alt: 'Patrimoine logiciel des 3 postes',
                        caption: 'Vue globale du patrimoine logiciel recensé'
                    },
                    {
                        src: 'TP%20GLPI.img/Recensement%20automatis%C3%A9%20du%20patrimoine%20informatique%20via%20GLPI/informations%20pr%C3%A9cises%20de%20chaque%20poste%20r%C3%A9f%C3%A9renc%C3%A9.png',
                        alt: 'Informations précises de chaque poste référencé',
                        caption: 'Fiche détaillée d\'un poste référencé'
                    },
                    {
                        src: 'TP%20GLPI.img/Recensement%20automatis%C3%A9%20du%20patrimoine%20informatique%20via%20GLPI/Recensement%20via%20l%27agent%20GLPI.png',
                        alt: 'Recensement via l\'agent GLPI',
                        caption: 'Inventaire automatisé via l\'agent GLPI'
                    }
                ]
            },
            {
                title: 'Annexe - Énoncé TP GLPI (PDF)',
                description: 'Énoncé du TP GLPI sur la fonction d\'inventaire.',
                directLink: 'TP%20GLPI.img/Annexe/25.26%20-%202SIO.TC.B1%20-%20%28TP03%29%20GLPI%20-%20Fonction%20d%27inventaire%20%28%C3%A9nonc%C3%A9%29.pdf',
                images: []
            }
        ]
    },
    veille: {
        title: 'VEILLE TECHNOLOGIQUE',
        subtitle: 'Veille technologique (IA et cybersécurité)',
        context: 'Dans le cadre du BTS SIO, je mène une veille pour suivre les évolutions de l\'intelligence artificielle et de la cybersécurité, analyser les impacts, puis partager une synthèse claire et structurée.',
        objectives: [
            'Sélectionner des sources fiables et récentes',
            'Analyser les tendances, risques et enjeux clés',
            'Produire une synthèse accessible et actualisée'
        ],
        steps: [
            {
                title: 'Collecte et sélection des sources',
                description: 'Recensement d\'articles 2026 et tri des informations utiles pour l\'IA et la cybersécurité.',
                images: []
            },
            {
                title: 'Synthèse et analyse',
                description: 'Rédaction d\'une synthèse mettant en évidence les tendances, risques et impacts.',
                images: []
            },
            {
                title: 'Accéder à la veille sur mon portfolio',
                description: 'Ouvrir la section Veille du site pour consulter les contenus.',
                directLink: '#veille',
                images: []
            }
        ]
    },
    websecu: {
        title: 'MISSION WEB SECU M2L',
        subtitle: 'Mise en place d\'une infrastructure complète (Serveur WEB, DNS, Active Directory, NAGIOS)',
        context: 'Mission d\'infrastructure pour déployer un environnement complet M2L. L\'objectif est de structurer le patrimoine informatique (AD, DNS, droits NTFS), de mettre en service les composants (serveur web, supervision) et de piloter l\'avancement avec des preuves.',
        objectives: [
            'Structurer le patrimoine informatique (AD, DNS, droits NTFS)',
            'Mettre en service les composants web et supervision',
            'Tracer le suivi de mission et les validations'
        ],
        competenceObjectives: {
            'patrimoine': [
                'Structurer l\'Active Directory (OU, utilisateurs, groupes)',
                'Administrer les droits NTFS sur les partages',
                'Configurer et vérifier les zones DNS'
            ],
            'service': [
                'Mettre en production un serveur web fonctionnel',
                'Superviser les hotes et services via Nagios',
                'Valider la disponibilité des services'
            ],
            'mode-projet': [
                'Planifier et suivre la mission',
                'Documenter l\'avancement et les preuves',
                'Cloturer la mission avec un bilan'
            ]
        },
        steps: [
            {
                title: 'Structure Active Directory (OU + utilisateurs + groupes)',
                competenceKey: 'patrimoine',
                images: [
                    {
                        src: 'WEBSECU.img/G%C3%A9rer%20le%20patrimoine%20informatique/Structure%20Active%20Directory%20%28OU%20%2B%20utilisateurs%20%2B%20groupes%29/arborescence%20compl%C3%A8te%20des%20Unit%C3%A9s%20d%27Organisation%20%28OU%29%20dans%20les%20groupes.png',
                        alt: 'Arborescence des OU dans les groupes',
                        caption: 'Arborescence complete des OU et organisation des groupes'
                    },
                    {
                        src: 'WEBSECU.img/G%C3%A9rer%20le%20patrimoine%20informatique/Structure%20Active%20Directory%20%28OU%20%2B%20utilisateurs%20%2B%20groupes%29/Appartenance%20des%20utilisateurs%20%C3%A0%20leurs%20groupes%20respectifs.png',
                        alt: 'Appartenance des utilisateurs a leurs groupes',
                        caption: 'Appartenance des utilisateurs a leurs groupes respectifs'
                    }
                ]
            },
            {
                title: 'Gestion des droits NTFS sur les partages',
                competenceKey: 'patrimoine',
                images: [
                    {
                        src: 'WEBSECU.img/G%C3%A9rer%20le%20patrimoine%20informatique/Gestion%20droits%20NTFS%20sur%20les%20partages/Tableau%20des%20droits%20NTFS%20sur%20les%20partages.png',
                        alt: 'Tableau des droits NTFS sur les partages',
                        caption: 'Tableau des droits NTFS par partage'
                    }
                ]
            },
            {
                title: 'Serveur Web Operationnel',
                competenceKey: 'service',
                images: [
                    {
                        src: 'WEBSECU.img/Mettre%20%C3%A0%20disposition%20un%20service%20informatique/Serveur%20Web%20Op%C3%A9rationnel/Serveur%20Web%20Apache%20fonctionnelle.png',
                        alt: 'Serveur Web Apache fonctionnel',
                        caption: 'Serveur Web Apache operationnel'
                    },
                    {
                        src: 'WEBSECU.img/Mettre%20%C3%A0%20disposition%20un%20service%20informatique/Serveur%20Web%20Op%C3%A9rationnel/site%20de%20la%20Maison%20des%20Ligues%20accessible%20depuis%20navigateur%20client.png',
                        alt: 'Site Maison des Ligues accessible',
                        caption: 'Site accessible depuis un navigateur client'
                    }
                ]
            },
            {
                title: 'Supervision Nagios des hotes et services',
                competenceKey: 'service',
                images: [
                    {
                        src: 'WEBSECU.img/Mettre%20%C3%A0%20disposition%20un%20service%20informatique/Supervision%20Nagios%20des%20h%C3%B4tes%20et%20services/Supervision%20des%20h%C3%B4tes%20depuis%20Serveur%20NAGIOS.png',
                        alt: 'Supervision des hotes depuis Nagios',
                        caption: 'Supervision des hotes depuis Nagios'
                    },
                    {
                        src: 'WEBSECU.img/Mettre%20%C3%A0%20disposition%20un%20service%20informatique/Supervision%20Nagios%20des%20h%C3%B4tes%20et%20services/Supervision%20des%20diff%C3%A9rents%20services%20des%20h%C3%B4tes%20depuis%20Serveur%20NAGIOS.png',
                        alt: 'Supervision des services depuis Nagios',
                        caption: 'Supervision des services depuis Nagios'
                    }
                ]
            },
            {
                title: 'Continuité de service via supervision NAGIOS',
                competenceKey: 'patrimoine',
                images: [
                    {
                        src: 'WEBSECU.img/G%C3%A9rer%20le%20patrimoine%20informatique/Continuit%C3%A9%20de%20service%20via%20supervision%20NAGIOS/Supervision%20des%20h%C3%B4tes%20depuis%20Serveur%20NAGIOS.png',
                        alt: 'Supervision des hotes depuis serveur NAGIOS',
                        caption: 'Supervision des hotes depuis serveur NAGIOS'
                    },
                    {
                        src: 'WEBSECU.img/G%C3%A9rer%20le%20patrimoine%20informatique/Continuit%C3%A9%20de%20service%20via%20supervision%20NAGIOS/Supervision%20des%20diff%C3%A9rents%20services%20des%20h%C3%B4tes%20depuis%20Serveur%20NAGIOS.png',
                        alt: 'Supervision des services des hotes depuis serveur NAGIOS',
                        caption: 'Supervision des services des hotes depuis serveur NAGIOS'
                    }
                ]
            },
            {
                title: 'Travailler en mode projet',
                competenceKey: 'mode-projet',
                images: [
                    {
                        src: 'WEBSECU.img/Travailler%20en%20mode%20projet/Trello%20WEB-SECU.png',
                        alt: 'Suivi Trello WEB-SECU',
                        caption: 'Suivi des taches via Trello'
                    },
                    {
                        src: 'WEBSECU.img/Travailler%20en%20mode%20projet/Vue%20int%C3%A9rieur%20de%20cette%20t%C3%A2che.png',
                        alt: 'Vue interieur de la tache',
                        caption: 'Vue detaillee d\'une tache projet'
                    }
                ]
            }
        ]
    }
};

let selectedCompetenceKey = null;

// Fonction pour ouvrir le menu de sélection des missions groupées
function openGroupedMissions(groupKey) {
    console.log('openGroupedMissions appelée avec:', groupKey);
    
    if (groupKey === 'dev-professionnel') {
        // Masquer toutes les sections normales
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });

        // Créer et afficher le menu de sélection
        showMissionSelectionMenu();
    }
}

// Fonction pour afficher le menu de sélection des missions
function showMissionSelectionMenu() {
    const missions = [
        { key: 'datasec', title: 'MISSION DATASEC', description: 'Création FileZilla Client/Server, SynBackFree' },
        { key: 'velanne', title: 'MISSION VELANNE', description: 'FileZilla, SynBackFree, Création et configuration de vlans' },
        { key: 'kiwi', title: 'MISSION KIWI', description: 'Ubuntu Server, DHCP, Point d\'accès Wi-Fi, Routeur' }
    ];

    const selectionHTML = `
        <section id="mission-selection" class="section active" style="display: block;">
            <div class="container">
                <div class="mission-selection-content">
                    <h2>Développement Professionnel</h2>
                    <p class="selection-subtitle">Sélectionnez une mission pour voir les détails</p>
                    <div class="missions-grid">
                        ${missions.map(mission => `
                            <div class="mission-card" onclick="openMissionDetail('${mission.key}')">
                                <h3>${mission.title}</h3>
                                <p>${mission.description}</p>
                                <span class="view-details">Voir les détails →</span>
                            </div>
                        `).join('')}
                    </div>
                    <button onclick="closeMissionSelection()" class="back-btn">← Retour au portfolio</button>
                </div>
            </div>
        </section>
    `;

    // Injecter le HTML dans le body
    document.body.insertAdjacentHTML('beforeend', selectionHTML);
}

// Fonction pour fermer le menu de sélection
function closeMissionSelection() {
    const selectionSection = document.getElementById('mission-selection');
    if (selectionSection) {
        selectionSection.remove();
    }

    if (selectedCompetenceKey) {
        selectedCompetenceKey = null;
    }
    
    // Réafficher la section d'accueil
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });
    
    const accueilSection = document.getElementById('accueil');
    if (accueilSection) {
        accueilSection.style.display = 'block';
        accueilSection.classList.add('active');
    }
}

// Fonction pour ouvrir la page de détail de mission (définition globale immédiate)
function openMissionDetail(missionKey) {
    console.log('openMissionDetail appelée avec:', missionKey);
    
    const mission = missionData[missionKey];
    if (!mission) {
        console.warn('Mission non trouvée:', missionKey);
        return;
    }

    console.log('Mission trouvée:', mission);

    // Masquer toutes les sections normales
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });

    // Afficher la section de détail
    const detailSection = document.getElementById('mission-detail');
    if (detailSection) {
        detailSection.style.display = 'block';
        detailSection.classList.add('active');
        console.log('Section de détail affichée');
    } else {
        console.error('Section mission-detail non trouvée');
        return;
    }

    // Remplir le contenu
    const titleElement = document.getElementById('mission-detail-title');
    const subtitleElement = document.getElementById('mission-detail-subtitle');
    const contextElement = document.getElementById('mission-context');
    
    if (titleElement) titleElement.textContent = mission.title;
    if (subtitleElement) subtitleElement.textContent = mission.subtitle;
    if (contextElement) contextElement.textContent = mission.context;

    // Remplir les objectifs
    const objectivesList = document.getElementById('mission-objectives');
    if (objectivesList) {
        objectivesList.innerHTML = '';
        const objectivesToRender = selectedCompetenceKey && mission.competenceObjectives && mission.competenceObjectives[selectedCompetenceKey]
            ? mission.competenceObjectives[selectedCompetenceKey]
            : mission.objectives;

        objectivesToRender.forEach(objective => {
            const li = document.createElement('li');
            li.textContent = objective;
            objectivesList.appendChild(li);
        });
    }

    // Remplir les étapes
    const stepsContainer = document.getElementById('mission-steps');
    if (stepsContainer) {
        stepsContainer.innerHTML = '';
        const filteredSteps = selectedCompetenceKey
            ? mission.steps.filter(step => step.competenceKey === selectedCompetenceKey)
            : mission.steps;

        filteredSteps.forEach((step, stepIndex) => {
            const stepDiv = document.createElement('div');
            stepDiv.className = 'mission-step';
            
            if (typeof step === 'object') {
                // Étape avec images (accordéon)
                stepDiv.innerHTML = `
                    <div class="step-header ${step.directLink ? 'step-direct-link' : ''}" data-step="${stepIndex}">
                        <span class="step-title">
                            ${step.title}
                            ${step.directLink ? '<i class="fas fa-external-link-alt"></i>' : ''}
                        </span>
                        ${step.directLink ? '' : '<i class="fas fa-chevron-down step-toggle"></i>'}
                    </div>
                    ${step.description ? `<p class="step-description">${step.description}</p>` : ''}
                    <div class="step-content" id="step-content-${stepIndex}" style="display: none;">
                        <div class="step-images">
                            ${step.images.map((img, index) => `
                                <div class="step-image-container">
                                    <img src="${img.src}" alt="${img.alt}" class="step-image clickable-image" data-index="${index}">
                                    <p class="image-caption">${img.caption}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                
                // Ajouter l'événement de clic pour l'accordéon
                const stepHeader = stepDiv.querySelector('.step-header');
                const stepContent = stepDiv.querySelector('.step-content');
                const stepToggle = stepDiv.querySelector('.step-toggle');
                
                stepHeader.addEventListener('click', () => {
                    // Vérifier s'il y a un lien direct pour cette étape
                    if (step.directLink) {
                        // Lien interne -> afficher la section correspondante
                        if (step.directLink.startsWith('#')) {
                            showSection(step.directLink.substring(1));
                            return;
                        }
                        // Lien externe
                        window.open(step.directLink, '_blank');
                        return;
                    }
                    
                    // Comportement normal de l'accordéon (seulement si pas de lien direct)
                    if (stepContent && stepToggle) {
                        const isVisible = stepContent.style.display !== 'none';
                        if (isVisible) {
                            stepContent.style.display = 'none';
                            stepToggle.style.transform = 'rotate(0deg)';
                        } else {
                            stepContent.style.display = 'block';
                            stepToggle.style.transform = 'rotate(180deg)';
                        }
                    }
                });
                
                // Ajouter les événements de clic pour les images après insertion dans le DOM
                setTimeout(() => {
                    const images = stepDiv.querySelectorAll('.clickable-image');
                    images.forEach((img, index) => {
                        img.addEventListener('click', () => {
                            openImageModal(step.images[index]);
                        });
                    });
                }, 0);
            } else {
                // Étape simple (texte) - maintenant aussi avec accordéon
                stepDiv.innerHTML = `
                    <div class="step-header" data-step="${stepIndex}">
                        <span class="step-title">${step}</span>
                        <i class="fas fa-chevron-down step-toggle"></i>
                    </div>
                    <div class="step-content" id="step-content-${stepIndex}" style="display: none;">
                        <p class="step-text">Détails de cette étape à compléter...</p>
                    </div>
                `;
                
                // Ajouter l'événement de clic pour l'accordéon des étapes simples
                const stepHeader = stepDiv.querySelector('.step-header');
                const stepContent = stepDiv.querySelector('.step-content');
                const stepToggle = stepDiv.querySelector('.step-toggle');
                
                stepHeader.addEventListener('click', () => {
                    const isVisible = stepContent.style.display !== 'none';
                    if (isVisible) {
                        stepContent.style.display = 'none';
                        stepToggle.style.transform = 'rotate(0deg)';
                    } else {
                        stepContent.style.display = 'block';
                        stepToggle.style.transform = 'rotate(180deg)';
                    }
                });
            }
            
            stepsContainer.appendChild(stepDiv);
        });
    }

    // Scroll vers le haut
    window.scrollTo(0, 0);
    console.log('Page de détail mise à jour et affichée');

    if (selectedCompetenceKey) {
        selectedCompetenceKey = null;
    }
}

// Fonction pour fermer la page de détail de mission
function closeMissionDetail() {
    console.log('closeMissionDetail appelée');
    
    // Masquer la section de détail
    const detailSection = document.getElementById('mission-detail');
    if (detailSection) {
        detailSection.style.display = 'none';
        detailSection.classList.remove('active');
    }
    
    // Retourner au tableau de compétences
    showSection('tableau-competences');

    if (selectedCompetenceKey) {
        selectedCompetenceKey = null;
    }
    
    console.log('Retour au tableau effectué');
}

// Rendre les fonctions disponibles globalement (immédiatement)
window.openMissionDetail = openMissionDetail;
window.closeMissionDetail = closeMissionDetail;

console.log('Fonctions de mission définies et disponibles globalement');

// Navigation par sections
function showSection(sectionId) {
    // Masquer toutes les sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    // Afficher la section demandée
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.classList.add('active');
    }
    
    // Mettre à jour la navigation active
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Initialiser la navigation
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM chargé - Initialisation de la navigation et vérification des fonctions:');
    console.log('openMissionDetail disponible:', typeof window.openMissionDetail);
    console.log('closeMissionDetail disponible:', typeof window.closeMissionDetail);
    console.log('missionData disponible:', typeof missionData);
    
    // Masquer les éléments indésirables contenant des chiffres binaires
    hideUnwantedElements();
    
    // Afficher la section accueil par défaut
    showSection('accueil');
    
    // Ajouter les événements de clic pour la navigation
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });
    
    // Test si l'élément cliquable existe
    const missionElement = document.querySelector('.mission-title-clickable');
    console.log('Élément mission clickable trouvé:', !!missionElement);
    if (missionElement) {
        console.log('Onclick attribute:', missionElement.getAttribute('onclick'));
    }
});

// Rendre la fonction showSection disponible globalement
window.showSection = showSection;

// Création de l'effet Matrix
function createMatrixEffect() {
    const matrixBg = document.createElement('div');
    matrixBg.className = 'matrix-bg';
    document.body.insertBefore(matrixBg, document.body.firstChild);

    const characters = '01';
    const columns = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = i * 20 + 'px';
        column.style.animationDelay = Math.random() * 2 + 's';
        
        let content = '';
        for (let j = 0; j < 25; j++) {
            content += characters.charAt(Math.floor(Math.random() * characters.length)) + '<br>';
        }
        column.innerHTML = content;
        matrixBg.appendChild(column);
    }
}

// Initialisation de l'effet Matrix
createMatrixEffect();

// Recréer l'effet lors du redimensionnement
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const oldMatrix = document.querySelector('.matrix-bg');
        if (oldMatrix) {
            oldMatrix.remove();
        }
        createMatrixEffect();
    }, 250);
});

// Animation des sections au scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.id === 'competences') {
                animateSkills();
            }
        }
    });
}, { threshold: 0.2 });

// Observer toutes les sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
    // Si c'est la section tableau de compétences, initialiser les animations
    if (section.id === 'tableau-competences') {
        animateSkills();
    }
});

// Animation des compétences
function animateSkills() {
    const skills = document.querySelectorAll('.progress');
    skills.forEach(skill => {
        const width = skill.getAttribute('data-width');
        skill.style.setProperty('--target-width', width);
    });
}

// Navigation fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menu mobile simplifié
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('active');
    });
}

// Gestion du formulaire
const form = document.querySelector('#contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const button = form.querySelector('button');
        
        // Animation du bouton
        button.style.background = '#0f0';
        button.style.color = '#000';
        button.innerHTML = 'Message Envoyé';
        
        setTimeout(() => {
            form.reset();
            button.style.background = 'transparent';
            button.style.color = '#0f0';
            button.innerHTML = 'Envoyer';
        }, 2000);
    });
}

// Effet de typing pour le texte d'accueil
const typingText = document.querySelector('.typing-text');
if (typingText) {
    typingText.style.width = '0';
    setTimeout(() => {
        typingText.style.width = '100%';
    }, 500);
}

// Animation des icônes tech au survol
const techIcons = document.querySelectorAll('.tech-icons i');
techIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.animation = 'none';
        icon.offsetHeight; // Trigger reflow
        icon.style.animation = null;
    });
});

// Animation du titre au survol
const mainTitle = document.querySelector('.main-title');
if (mainTitle) {
    mainTitle.addEventListener('mouseover', () => {
        mainTitle.style.textShadow = '0 0 20px #0f0';
    });
    
    mainTitle.addEventListener('mouseout', () => {
        mainTitle.style.textShadow = '0 0 10px #0f0';
    });
}

// Attendre que le document soit chargé
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle menu burger
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
        });
    });

    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            burger.classList.remove('active');
        }
    });

    // Animation du burger
    const updateBurgerStyle = () => {
        const lines = burger.querySelectorAll('div');
        if (burger.classList.contains('active')) {
            lines[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        }
    };

    burger.addEventListener('click', updateBurgerStyle);

    // Navigation douce
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
                // Fermer le menu mobile si ouvert
                nav.classList.remove('active');
            }
        });
    });

    // Animation des barres de compétences
    function animateSkills() {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach(bar => {
            // Récupérer la largeur définie dans l'attribut data-width
            const targetWidth = bar.getAttribute('data-width');
            // Animer la barre
            bar.style.width = targetWidth;
        });
    }

    // Observer les sections pour déclencher les animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // Si la section est visible
            if (entry.isIntersecting) {
                // Ajouter la classe visible
                entry.target.classList.add('visible');
                
                // Si c'est la section compétences, animer les barres
                if (entry.target.id === 'competences') {
                    animateSkills();
                }
            }
        });
    }, { threshold: 0.2 }); // Déclencher quand 20% de la section est visible

    // Observer toutes les sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Afficher les données dans la console (à remplacer par votre logique d'envoi)
            console.log('Formulaire soumis :', {
                nom: name,
                email: email,
                message: message
            });
            
            // Réinitialiser le formulaire
            this.reset();
            
            // Afficher un message de confirmation
            alert('Message envoyé avec succès !');
        });
    }

    // Gestion de l'intégration Google Sheets
    const sheetsFrame = document.querySelector('.google-sheets-frame');
    const container = document.querySelector('.google-sheets-container');

    if (sheetsFrame) {
        // Ajouter une classe de chargement
        container.classList.add('loading');

        sheetsFrame.addEventListener('load', function() {
            // Retirer la classe de chargement une fois chargé
            container.classList.remove('loading');
        });

        // Ajuster la hauteur en fonction du contenu
        function adjustFrameHeight() {
            const windowHeight = window.innerHeight;
            const containerTop = container.getBoundingClientRect().top;
            const maxHeight = windowHeight - containerTop - 100; // Marge de 100px
            sheetsFrame.style.height = Math.max(400, maxHeight) + 'px';
        }

        // Ajuster la hauteur au chargement et au redimensionnement
        window.addEventListener('resize', adjustFrameHeight);
        adjustFrameHeight();
    }

    // Gestion du défilement horizontal du tableau de compétences
    const tableContainer = document.querySelector('.tableau-container');
    const scrollTrack = document.querySelector('.scroll-track');
    const scrollThumb = document.querySelector('.scroll-thumb');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');

    if (tableContainer && scrollThumb && scrollTrack) {
        // Mise à jour de la position du thumb
        function updateThumbPosition() {
            const containerWidth = tableContainer.clientWidth;
            const scrollWidth = tableContainer.scrollWidth;
            const scrollLeft = tableContainer.scrollLeft;
            
            const trackWidth = scrollTrack.clientWidth;
            const thumbWidth = Math.max(50, (containerWidth / scrollWidth) * trackWidth);
            const thumbPosition = (scrollLeft / (scrollWidth - containerWidth)) * (trackWidth - thumbWidth);
            
            scrollThumb.style.width = `${thumbWidth}px`;
            scrollThumb.style.transform = `translateX(${thumbPosition}px)`;
        }

        // Gestion du défilement avec les boutons
        if (scrollLeftBtn && scrollRightBtn) {
            scrollLeftBtn.addEventListener('click', () => {
                tableContainer.scrollBy({
                    left: -100,
                    behavior: 'smooth'
                });
            });

            scrollRightBtn.addEventListener('click', () => {
                tableContainer.scrollBy({
                    left: 100,
                    behavior: 'smooth'
                });
            });
        }

        // Gestion du défilement avec le thumb
        let isDragging = false;
        let startX;
        let scrollLeft;

        scrollThumb.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - scrollThumb.offsetLeft;
            scrollLeft = tableContainer.scrollLeft;
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            
            const x = e.pageX - scrollTrack.offsetLeft;
            const walk = (x - startX);
            const scrollRatio = (tableContainer.scrollWidth - tableContainer.clientWidth) / (scrollTrack.clientWidth - scrollThumb.clientWidth);
            tableContainer.scrollLeft = scrollLeft + (walk * scrollRatio);
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // Mise à jour de la position du thumb lors du défilement
        tableContainer.addEventListener('scroll', updateThumbPosition);
        window.addEventListener('resize', updateThumbPosition);

        // Initialisation
        updateThumbPosition();
    }
});

// Données des popups pour chaque compétence
const popupData = {
    'gerer-patrimoine-parc': {
        title: 'Gérer le Patrimoine Informatique - Parc Informatique',
        description: 'Mise à jour complète du parc informatique incluant l\'inventaire des équipements, la gestion des licences et la documentation des configurations.',
        tasks: [
            'Recensement de tous les équipements informatiques',
            'Mise à jour de l\'inventaire dans la base de données',
            'Vérification des licences logicielles',
            'Documentation des configurations matérielles',
            'Mise en place d\'un système de suivi des équipements'
        ],
        skills: ['Inventaire', 'Gestion des licences', 'Documentation', 'Base de données']
    },
    'mode-projet-parc': {
        title: 'Travailler en Mode Projet - Parc Informatique',
        description: 'Planification et gestion du projet de mise à jour du parc informatique avec définition des étapes et des livrables.',
        tasks: [
            'Définition des objectifs du projet',
            'Établissement du planning de mise à jour',
            'Coordination avec les équipes techniques',
            'Suivi des indicateurs de progression',
            'Gestion des risques et des contraintes'
        ],
        skills: ['Gestion de projet', 'Planification', 'Coordination', 'Suivi d\'indicateurs']
    },
    'dev-professionnel-parc': {
        title: 'Développement Professionnel - Parc Informatique',
        description: 'Acquisition de nouvelles compétences en gestion de parc informatique et amélioration des processus existants.',
        tasks: [
            'Formation sur les outils de gestion de parc',
            'Veille technologique sur les nouveaux équipements',
            'Amélioration des processus de documentation',
            'Développement de compétences en ITIL',
            'Partage d\'expérience avec l\'équipe'
        ],
        skills: ['Formation continue', 'Veille technologique', 'ITIL', 'Amélioration continue']
    },
    'dev-professionnel-veille': {
        title: 'Développement Professionnel - Veille Technologique',
        description: 'Mise en place d\'une stratégie de veille technologique pour rester à jour sur les évolutions du secteur informatique.',
        tasks: [
            'Identification des sources d\'information pertinentes',
            'Mise en place d\'outils de veille automatisée',
            'Analyse des tendances technologiques',
            'Rédaction de synthèses technologiques',
            'Partage des informations avec l\'équipe'
        ],
        skills: ['Veille technologique', 'Analyse', 'Synthèse', 'Outils de veille', 'Communication']
    },
    'presence-en-ligne-m2l': {
        title: 'Présence en Ligne - Site Web M2L',
        description: 'Création d\'un site web pour la Maison des Ligues de Lorraine en utilisant HTML et CSS pour améliorer leur présence numérique.',
        tasks: [
            'Analyse des besoins du client',
            'Conception de l\'architecture du site',
            'Développement en HTML5 et CSS3',
            'Optimisation pour le référencement',
            'Tests de compatibilité navigateurs',
            'Formation du client à la maintenance'
        ],
        skills: ['HTML5', 'CSS3', 'Design web', 'SEO', 'Tests navigateurs']
    },
    'dev-professionnel-m2l': {
        title: 'Développement Professionnel - Site Web M2L',
        description: 'Mise en valeur du travail réalisé sur le projet M2L et consolidation de ma présence professionnelle à travers une réalisation publiée en ligne.',
        tasks: [
            'Mise en ligne du projet sur GitHub Pages',
            'Présentation claire du parcours et des compétences',
            'Valorisation du projet dans le portfolio',
            'Organisation des contenus pour un usage professionnel'
        ],
        skills: ['GitHub Pages', 'Présentation professionnelle', 'Organisation de contenu', 'Valorisation de projet']
    },
    'gerer-patrimoine-windows': {
        title: 'Gérer le Patrimoine - Windows Server',
        description: 'Administration et gestion d\'un environnement Windows Server incluant Active Directory, DHCP et PowerShell.',
        tasks: [
            'Installation et configuration d\'Active Directory',
            'Gestion des utilisateurs et groupes',
            'Configuration du service DHCP',
            'Automatisation avec PowerShell',
            'Mise en place des GPO (Group Policy Objects)',
            'Surveillance des performances serveur'
        ],
        skills: ['Windows Server', 'Active Directory', 'DHCP', 'PowerShell', 'GPO']
    },
    'incidents-windows': {
        title: 'Gestion d\'Incidents - Windows Server',
        description: 'Résolution d\'incidents et support technique sur l\'infrastructure Windows Server.',
        tasks: [
            'Diagnostic des problèmes serveur',
            'Résolution des incidents utilisateurs',
            'Maintenance des services Windows',
            'Documentation des solutions',
            'Formation des utilisateurs',
            'Mise en place de procédures de dépannage'
        ],
        skills: ['Diagnostic', 'Dépannage', 'Support technique', 'Documentation', 'Formation']
    },
    'service-windows': {
        title: 'Mise à Disposition de Services - Windows Server',
        description: 'Déploiement et mise en service de nouvelles fonctionnalités sur l\'infrastructure Windows Server.',
        tasks: [
            'Tests d\'intégration des nouveaux services',
            'Déploiement en production',
            'Formation des utilisateurs finaux',
            'Création de la documentation utilisateur',
            'Surveillance post-déploiement',
            'Recueil des retours utilisateurs'
        ],
        skills: ['Déploiement', 'Tests d\'intégration', 'Formation utilisateur', 'Documentation']
    },
    'gerer-patrimoine-reseau': {
        title: 'Gérer le Patrimoine - Équipements Réseau',
        description: 'Configuration et administration des équipements réseau pour assurer une connectivité optimale.',
        tasks: [
            'Configuration des switchs et routeurs',
            'Mise en place des VLANs',
            'Configuration des protocoles de routage',
            'Sécurisation des accès réseau',
            'Monitoring des performances réseau',
            'Maintenance préventive des équipements'
        ],
        skills: ['Configuration réseau', 'VLANs', 'Routage', 'Sécurité réseau', 'Monitoring']
    },
    'incidents-reseau': {
        title: 'Gestion d\'Incidents - Réseau',
        description: 'Résolution rapide des incidents réseau pour maintenir la continuité de service.',
        tasks: [
            'Diagnostic des pannes réseau',
            'Utilisation d\'outils de supervision',
            'Résolution des problèmes de connectivité',
            'Analyse des logs réseau',
            'Coordination avec les fournisseurs',
            'Mise à jour de la documentation réseau'
        ],
        skills: ['Diagnostic réseau', 'Supervision', 'Analyse de logs', 'Dépannage', 'Coordination']
    },
    'service-reseau': {
        title: 'Mise à Disposition de Services - Réseau',
        description: 'Déploiement de nouveaux services réseau et accompagnement des utilisateurs.',
        tasks: [
            'Tests de nouveaux équipements réseau',
            'Migration vers de nouvelles architectures',
            'Formation technique des équipes',
            'Validation des performances',
            'Documentation des procédures',
            'Support post-déploiement'
        ],
        skills: ['Tests réseau', 'Migration', 'Formation technique', 'Validation', 'Support']
    },
    'gerer-patrimoine-sisr2': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'incidents-sisr2': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'service-sisr2': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'presence-en-ligne-portfolio': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'dev-professionnel-portfolio': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'gerer-patrimoine-mission1': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'incidents-mission1': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'service-mission1': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'dev-professionnel-mission1': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'presence-en-ligne-mission2': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'mode-projet-mission2': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'dev-professionnel-mission2': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'gerer-patrimoine-mission3': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'incidents-mission3': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'mode-projet-mission3': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'service-mission3': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'dev-professionnel-mission3': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'gerer-patrimoine-mission4': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'incidents-mission4': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'service-mission4': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'dev-professionnel-mission4': {
        title: '',
        description: '',
        tasks: [],
        skills: []
    },
    'gerer-patrimoine-websecu': {
        title: 'Gérer le Patrimoine - Mission WEB SECU',
        description: 'Mise en place et structuration des services techniques du projet WEB SECU, avec une attention portée aux composants à administrer et à documenter.',
        tasks: [
            'Identification des services et rôles serveur à déployer',
            'Organisation des éléments techniques à suivre',
            'Préparation des preuves de configuration',
            'Documentation de l\'environnement mis en place'
        ],
        skills: ['Inventaire technique', 'Documentation', 'Administration système', 'Suivi des services']
    },
    'mode-projet-websecu': {
        title: 'Travailler en Mode Projet - Mission WEB SECU',
        description: 'Planification des étapes de la mission, coordination des tâches et suivi de la progression du projet d\'infrastructure.',
        tasks: [
            'Définition des étapes de réalisation',
            'Coordination des interventions sur les services',
            'Suivi des validations successives',
            'Organisation des livrables et preuves'
        ],
        skills: ['Planification', 'Coordination', 'Suivi de projet', 'Organisation']
    },
    'service-websecu': {
        title: 'Mettre à Disposition un Service - Mission WEB SECU',
        description: 'Déploiement et validation des services WEB, DNS, Active Directory et supervision pour rendre l\'infrastructure exploitable.',
        tasks: [
            'Déploiement des services techniques attendus',
            'Tests de fonctionnement et de disponibilité',
            'Validation de l\'accès utilisateur aux services',
            'Préparation des preuves de mise en service'
        ],
        skills: ['Déploiement', 'Tests', 'Validation de service', 'Mise en production']
    }
    // Ajoutez les autres données selon le même modèle...
};

// Debug - vérifier que les fonctions sont bien définies
console.log('PopupData loaded, maintenant les fonctions de mission devraient être disponibles');

// Gestion de la popup
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('competence-popup');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupTasks = document.getElementById('popup-tasks');
    const popupSkills = document.getElementById('popup-skills');
    const closeBtn = document.getElementById('popup-close');

    // Fonction pour ouvrir la popup
    function openPopup(dataKey) {
        const data = popupData[dataKey];
        if (!data) {
            console.warn('Données non trouvées pour:', dataKey);
            return;
        }

        // Remplir le contenu de la popup
        popupTitle.textContent = data.title;
        popupDescription.textContent = data.description;

        // Vider et remplir la liste des tâches
        popupTasks.innerHTML = '';
        data.tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task;
            popupTasks.appendChild(li);
        });

        // Vider et remplir les compétences
        popupSkills.innerHTML = '';
        data.skills.forEach(skill => {
            const badge = document.createElement('span');
            badge.className = 'skill-badge';
            badge.textContent = skill;
            popupSkills.appendChild(badge);
        });

        // Afficher la popup avec animation
        popup.style.display = 'flex';
        setTimeout(() => {
            popup.classList.add('active');
        }, 10);
        
        // Empêcher le scroll de la page
        document.body.style.overflow = 'hidden';
    }

    // Fonction pour fermer la popup
    function closePopup() {
        popup.classList.remove('active');
        setTimeout(() => {
            popup.style.display = 'none';
            // Restaurer le scroll de la page
            document.body.style.overflow = '';
        }, 300);
    }

    // Ajouter les événements de clic sur les cases cliquables
    document.querySelectorAll('.competence.clickable').forEach(cell => {
        cell.addEventListener('click', function() {
            const missionKey = this.getAttribute('data-mission');
            const groupKey = this.getAttribute('data-group');
            const popupKey = this.getAttribute('data-popup');
            const competenceKey = this.getAttribute('data-competence');

            if (missionKey && typeof window.openMissionDetail === 'function') {
                selectedCompetenceKey = competenceKey || null;
                window.openMissionDetail(missionKey);
                return;
            }

            if (groupKey && typeof window.openGroupedMissions === 'function') {
                selectedCompetenceKey = competenceKey || null;
                window.openGroupedMissions(groupKey);
                return;
            }

            if (popupKey) {
                openPopup(popupKey);
            }
        });
    });

    document.querySelectorAll('.mission-title-clickable[data-mission]').forEach(title => {
        title.addEventListener('click', function() {
            const missionKey = this.getAttribute('data-mission');
            if (missionKey && typeof window.openMissionDetail === 'function') {
                selectedCompetenceKey = null;
                window.openMissionDetail(missionKey);
            }
        });
    });

    // Fermer la popup avec le bouton X
    closeBtn.addEventListener('click', closePopup);

    // Fermer la popup en cliquant sur l'overlay
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            closePopup();
        }
    });

    // Fermer la popup avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            closePopup();
        }
    });
});

// Fonction pour masquer les éléments indésirables contenant des chiffres binaires
function hideUnwantedElements() {
    // Chercher tous les éléments contenant "10110" ou patterns similaires
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        const text = element.textContent || element.innerText || '';
        // Vérifier si l'élément contient uniquement des chiffres binaires
        if (text.trim() === '10110' || text.trim().match(/^[01]{4,}$/)) {
            element.style.display = 'none';
            console.log('Élément contenant des chiffres binaires masqué:', element, 'Contenu:', text.trim());
        }
    });
    
    // Masquer spécifiquement les éléments de débogage courants
    const debugSelectors = [
        '.CodeMirror-linenumbers',
        '.line-numbers', 
        '.monaco-line-numbers',
        '[class*="line-number"]',
        '[data-line]',
        '[data-line-number]',
        '.vscode-line-numbers'
    ];
    
    debugSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.style.display = 'none';
            console.log('Élément de débogage masqué:', el);
        });
    });
    
    // Observer les mutations pour masquer les nouveaux éléments ajoutés dynamiquement
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) { // Element node
                    const text = node.textContent || node.innerText || '';
                    if (text.trim().match(/^[01]{4,}$/)) {
                        node.style.display = 'none';
                        console.log('Nouvel élément binaire masqué:', node);
                    }
                }
            });
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Fonctions pour la modal d'images
function openImageModal(imageData) {
    // Créer la modal si elle n'existe pas
    let modal = document.getElementById('image-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-modal';
        modal.className = 'image-modal-overlay';
        modal.innerHTML = `
            <div class="image-modal-content">
                <button class="image-modal-close">&times;</button>
                <img id="modal-image" src="" alt="">
                <p id="modal-caption"></p>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Ajouter les événements de fermeture
        const closeBtn = modal.querySelector('.image-modal-close');
        closeBtn.addEventListener('click', closeImageModal);
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeImageModal();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeImageModal();
            }
        });
    }
    
    // Remplir la modal avec les données de l'image
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    
    modalImage.src = imageData.src;
    modalImage.alt = imageData.alt;
    modalCaption.textContent = imageData.caption;
    
    // Afficher la modal
    modal.style.display = 'flex';
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Fonctions pour la veille technologique
function openVeilleDetail(type) {
    // Masquer toutes les sections de veille
    const allDetails = document.querySelectorAll('.veille-detail');
    allDetails.forEach(detail => {
        detail.style.display = 'none';
    });
    
    // Afficher la section demandée
    const targetDetail = document.getElementById(`veille-${type}-detail`);
    if (targetDetail) {
        targetDetail.style.display = 'block';
        // Faire défiler vers la section
        targetDetail.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

function closeVeilleDetail() {
    const allDetails = document.querySelectorAll('.veille-detail');
    allDetails.forEach(detail => {
        detail.style.display = 'none';
    });
}
