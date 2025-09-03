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
        context: 'Dans le cadre de ma formation en administration système et réseaux, nous avons été amenés à mettre en place une solution de sauvegarde automatisée pour les structures hébergées à la M2L. L\'objectif était de permettre à chaque utilisateur de sauvegarder ses données sur un serveur FTP de façon sécurisée, avec une restauration possible en cas de besoin.',
        objectives: [
            'Acquérir des compétences techniques en gestion de sauvegardes.',
            'Savoir configurer et sécuriser un service FTP.',
            'Préparer des scénarios professionnels proches de la réalité.'
        ],
        steps: [
            {
                title: 'Gestion des utilisateurs et habilitations',
                images: [
                    {
                        src: 'DATASEC.img/Gestion des utilisateurs et habilitations/créationuser.png',
                        alt: 'Création d\'un utilisateur',
                        caption: 'Interface de création d\'un nouvel utilisateur'
                    },
                    {
                        src: 'DATASEC.img/Gestion des utilisateurs et habilitations/connexionuser.png',
                        alt: 'Connexion utilisateur',
                        caption: 'Interface de connexion utilisateur'
                    }
                ]
            },
            {
                title: 'Mise en place des sauvegardes',
                images: [
                    {
                        src: 'DATASEC.img/Mise en place des sauvegardes/configuration du profil.png',
                        alt: 'Configuration du profil',
                        caption: 'Configuration des paramètres de profil pour les sauvegardes'
                    },
                    {
                        src: 'DATASEC.img/Mise en place des sauvegardes/Différents types de sauvegarde.png',
                        alt: 'Types de sauvegarde',
                        caption: 'Aperçu des différents types de sauvegarde disponibles'
                    },
                    {
                        src: 'DATASEC.img/Mise en place des sauvegardes/test des paramètres FTP réussi.png',
                        alt: 'Test FTP réussi',
                        caption: 'Validation des paramètres de connexion FTP'
                    },
                    {
                        src: 'DATASEC.img/Mise en place des sauvegardes/planification sauvegarde.png',
                        alt: 'Planification des sauvegardes',
                        caption: 'Interface de planification automatique des sauvegardes'
                    },
                    {
                        src: 'DATASEC.img/Mise en place des sauvegardes/sauvegarde réussi.png',
                        alt: 'Sauvegarde réussie',
                        caption: 'Confirmation de la réussite de la sauvegarde'
                    },
                    {
                        src: 'DATASEC.img/Mise en place des sauvegardes/restauration fichier côté client.png',
                        alt: 'Restauration côté client',
                        caption: 'Interface de restauration des fichiers côté client'
                    }
                ]
            },
            {
                title: 'Vérification de la continuité du service',
                images: [
                    {
                        src: 'DATASEC.img/Vérification de la continuité du service/test de connexion user vers Server FTP.png',
                        alt: 'Test de connexion FTP',
                        caption: 'Test de connexion utilisateur vers le serveur FTP'
                    },
                    {
                        src: 'DATASEC.img/Vérification de la continuité du service/restauration réussi.png',
                        alt: 'Restauration réussie',
                        caption: 'Confirmation de la réussite de la restauration'
                    },
                    {
                        src: 'DATASEC.img/Vérification de la continuité du service/fichiers restaurés.png',
                        alt: 'Fichiers restaurés',
                        caption: 'Affichage des fichiers après restauration réussie'
                    }
                ]
            },
            {
                title: 'Configuration réseau',
                images: [
                    {
                        src: 'DATASEC.img/Configuration réseau/configuration IPV4 manuelle.png',
                        alt: 'Configuration IPv4 manuelle',
                        caption: 'Configuration manuelle des paramètres IPv4 du réseau'
                    }
                ]
            },
            {
                title: 'Déploiement du service',
                images: [
                    {
                        src: 'DATASEC.img/Déploiement du service/interface connexion server FTP.png',
                        alt: 'Interface de connexion serveur FTP',
                        caption: 'Interface de connexion au serveur FTP'
                    },
                    {
                        src: 'DATASEC.img/Déploiement du service/connexion réussi au server FTP.png',
                        alt: 'Connexion réussie au serveur FTP',
                        caption: 'Confirmation de la connexion réussie au serveur FTP'
                    },
                    {
                        src: 'DATASEC.img/Déploiement du service/configuration mdp et port server FTP.png',
                        alt: 'Configuration mot de passe et port FTP',
                        caption: 'Configuration des paramètres de mot de passe et port du serveur FTP'
                    }
                ]
            },
            {
                title: 'Accompagnement des utilisateurs',
                images: [
                    {
                        src: 'DATASEC.img/Accompagnement des utilisateurs/connexion avec identifiants.png',
                        alt: 'Connexion avec identifiants',
                        caption: 'Guide de connexion utilisateur avec identifiants'
                    },
                    {
                        src: 'DATASEC.img/Accompagnement des utilisateurs/configuration du profil.png',
                        alt: 'Configuration du profil utilisateur',
                        caption: 'Aide à la configuration du profil utilisateur'
                    },
                    {
                        src: 'DATASEC.img/Accompagnement des utilisateurs/test des paramètres FTP réussi.png',
                        alt: 'Test des paramètres FTP',
                        caption: 'Validation des paramètres FTP avec l\'utilisateur'
                    },
                    {
                        src: 'DATASEC.img/Accompagnement des utilisateurs/planification sauvegarde.png',
                        alt: 'Planification des sauvegardes',
                        caption: 'Formation à la planification automatique des sauvegardes'
                    },
                    {
                        src: 'DATASEC.img/Accompagnement des utilisateurs/restauration.png',
                        alt: 'Processus de restauration',
                        caption: 'Guide du processus de restauration pour les utilisateurs'
                    },
                    {
                        src: 'DATASEC.img/Accompagnement des utilisateurs/restauration fichier côté client.png',
                        alt: 'Restauration côté client',
                        caption: 'Accompagnement pour la restauration de fichiers côté client'
                    }
                ]
            }
        ]
    },
    velanne: {
        title: 'MISSION VELANNE',
        subtitle: 'Mission Velanne (VLAN)',
        context: 'Mise en place d\'une segmentation réseau avec VLANs pour isoler les ligues sportives et sécuriser le réseau.',
        objectives: [
            'Séparer logiquement les réseaux des ligues',
            'Améliorer la sécurité et la gestion des accès',
            'Mise en place de VLANs pour gérer les switchs'
        ],
        steps: [
            {
                title: 'Exploitation des normes VLAN (IEEE 802.1Q)',
                images: [
                    {
                        src: 'VELANNE.img/Exploitation des normes VLAN %28IEEE 802.1Q%29/Création de VLAN.png',
                        alt: 'Création de VLAN',
                        caption: 'Interface de création de VLAN selon les normes IEEE 802.1Q'
                    }
                ]
            },
            {
                title: 'Mise en place du VLAN 99 (administration)',
                images: [
                    {
                        src: 'VELANNE.img/Mise en place du VLAN 99 %28administration%29/Création et config VLAN administration.png',
                        alt: 'Configuration VLAN administration',
                        caption: 'Création et configuration du VLAN 99 pour l\'administration des switchs'
                    }
                ]
            },
            {
                title: 'Vérification de la continuité du service (tests de ping intra/inter-VLAN)',
                images: [
                    {
                        src: 'VELANNE.img/Vérification de la continuité du service %28tests de ping intrainter-VLAN%29/plan de test.png',
                        alt: 'Plan de test VLAN',
                        caption: 'Plan de test pour vérifier la continuité du service et les communications intra/inter-VLAN'
                    }
                ]
            },
            {
                title: 'Réponse à la demande d\'isoler les réseaux',
                images: [
                    {
                        src: 'VELANNE.img/Réponse à la demande d%27isoler les réseaux/Création VLANs utilisateurs.png',
                        alt: 'Création VLANs utilisateurs',
                        caption: 'Création des VLANs utilisateurs pour isoler les réseaux des différentes ligues'
                    }
                ]
            },
            {
                title: 'Déploiement du service avec configuration trunk',
                images: [
                    {
                        src: 'VELANNE.img/Déploiement du service avec configuration trunk/trunk entre les switchs.png',
                        alt: 'Configuration trunk entre les switchs',
                        caption: 'Configuration trunk entre les switchs pour le déploiement du service VLAN'
                    }
                ]
            }
        ]
    },
    kiwi: {
        title: 'MISSION KIWI',
        subtitle: 'Mission Kiwi',
        context: 'Mise en place d\'un Wi-Fi sécurisé et d\'un serveur DHCP pour automatiser l\'attribution des adresses IP.',
        objectives: [
            'Sécuriser l\'accès au Wi-Fi avec une clé WPA',
            'Simplifier la gestion avec un serveur DHCP',
            'Garantir la continuité en testant la connectivité'
        ],
        steps: [
            {
                title: 'Sécurisation du Wi-Fi (WPA-Personnal)',
                images: [
                    {
                        src: 'KIWI.img/S%C3%A9curisation du Wi-Fi %28WPA-Personnal%29/config WPA-Personnal + cl%C3%A9.png',
                        alt: 'Configuration WPA-Personnal avec clé',
                        caption: 'Configuration de la sécurisation Wi-Fi avec WPA-Personnal et définition de la clé de sécurité'
                    }
                ]
            },
            {
                title: 'Vérification de la continuité (tests ping + attribution IP DHCP)',
                images: [
                    {
                        src: 'KIWI.img/V%C3%A9rification de la continuit%C3%A9 %28tests ping + attribution IP DHCP%29/Adresse IP attribu%C3%A9e automatiquement.png',
                        alt: 'Adresse IP attribuée automatiquement',
                        caption: 'Vérification que l\'adresse IP est attribuée automatiquement par le serveur DHCP'
                    },
                    {
                        src: 'KIWI.img/V%C3%A9rification de la continuit%C3%A9 %28tests ping + attribution IP DHCP%29/Configuration DHCP filaire & Wi-Fi.png',
                        alt: 'Configuration DHCP filaire et Wi-Fi',
                        caption: 'Configuration du serveur DHCP pour les connexions filaire et Wi-Fi'
                    }
                ]
            },
            {
                title: 'Réponse à la demande d\'automatiser l\'attribution IP',
                images: [
                    {
                        src: 'KIWI.img/Réponse à la demande d%27automatiser l%27attribution IP/Réservations DHCP %28MAC → IP%29.png',
                        alt: 'Réservations DHCP MAC vers IP',
                        caption: 'Configuration des réservations DHCP pour associer des adresses MAC à des adresses IP fixes'
                    }
                ]
            },
            {
                title: 'Déploiement du point d\'accès et du serveur DHCP',
                images: [
                    {
                        src: 'KIWI.img/D%C3%A9ploiement du point acc%C3%A8s et du serveur DHCP/Config du point acc%C3%A8s Wi-Fi.png',
                        alt: 'Configuration du point d\'accès Wi-Fi',
                        caption: 'Configuration et paramétrage du point d\'accès Wi-Fi pour assurer la connectivité sans fil'
                    },
                    {
                        src: 'KIWI.img/D%C3%A9ploiement du point acc%C3%A8s et du serveur DHCP/Installation du serveur DHCP Ubuntu.png',
                        alt: 'Installation du serveur DHCP Ubuntu',
                        caption: 'Installation et configuration du serveur DHCP sur Ubuntu Server'
                    },
                    {
                        src: 'KIWI.img/D%C3%A9ploiement du point acc%C3%A8s et du serveur DHCP/Configuration du DHCP %28fichier dhcpd.conf%29.png',
                        alt: 'Configuration du DHCP fichier dhcpd.conf',
                        caption: 'Configuration détaillée du serveur DHCP via le fichier dhcpd.conf'
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
            'Standardisation des postes',
            'Sécurité (BitLocker, mises à jour, antivirus)',
            'Compatibilité avec logiciels métiers'
        ],
        steps: [
            {
                title: 'Installation et configuration système',
                images: [
                    {
                        src: 'Pr%C3%A9parationdeposte.img/Installation et configuration syst%C3%A8me/Installation Windows 11.png',
                        alt: 'Installation Windows 11',
                        caption: 'Installation du système d\'exploitation Windows 11 sur le poste de travail'
                    },
                    {
                        src: 'Pr%C3%A9parationdeposte.img/Installation et configuration syst%C3%A8me/renommage du poste.png',
                        alt: 'Renommage du poste',
                        caption: 'Configuration du nom du poste selon les standards ANRAS'
                    }
                ]
            },
            {
                title: 'Sécurisation et mises à jour',
                images: [
                    {
                        src: 'Pr%C3%A9parationdeposte.img/S%C3%A9curisation et mises %C3%A0 jour/activation TPM et Secure Boot, antivirus Windows Defender activ%C3%A9.png',
                        alt: 'Activation TPM et Secure Boot, antivirus Windows Defender activé',
                        caption: 'Activation des fonctionnalités de sécurité TPM, Secure Boot et Windows Defender'
                    },
                    {
                        src: 'Pr%C3%A9parationdeposte.img/S%C3%A9curisation et mises %C3%A0 jour/application des mises %C3%A0 jour.png',
                        alt: 'Application des mises à jour',
                        caption: 'Installation des dernières mises à jour de sécurité Windows'
                    },
                    {
                        src: 'Pr%C3%A9parationdeposte.img/S%C3%A9curisation et mises %C3%A0 jour/Chiffrement Bitlocker.png',
                        alt: 'Chiffrement BitLocker',
                        caption: 'Configuration et activation du chiffrement BitLocker pour sécuriser les données'
                    }
                ]
            },
            {
                title: 'Mises à jour matérielles',
                images: [
                    {
                        src: 'Pr%C3%A9parationdeposte.img/Mises %C3%A0 jour mat%C3%A9rielles/V%C3%A9rification des mises %C3%A0 jour.png',
                        alt: 'Vérification des mises à jour',
                        caption: 'Vérification et recherche des mises à jour matérielles disponibles'
                    },
                    {
                        src: 'Pr%C3%A9parationdeposte.img/Mises %C3%A0 jour mat%C3%A9rielles/application des mises %C3%A0 jour.png',
                        alt: 'Application des mises à jour matérielles',
                        caption: 'Installation des pilotes et mises à jour matérielles nécessaires'
                    }
                ]
            },
            {
                title: 'Installation des logiciels métiers',
                images: [
                    {
                        src: 'Pr%C3%A9parationdeposte.img/Installation des logiciels m%C3%A9tiers/Installation de edge et office.png',
                        alt: 'Installation de Edge et Office',
                        caption: 'Installation des logiciels Microsoft Edge et Office pour les besoins métiers'
                    },
                    {
                        src: 'Pr%C3%A9parationdeposte.img/Installation des logiciels m%C3%A9tiers/Sharepoint.png',
                        alt: 'Configuration SharePoint',
                        caption: 'Configuration et accès à la plateforme SharePoint de l\'organisation'
                    },
                    {
                        src: 'Pr%C3%A9parationdeposte.img/Installation des logiciels m%C3%A9tiers/synchronisation du SharePoint.png',
                        alt: 'Synchronisation SharePoint',
                        caption: 'Configuration de la synchronisation automatique avec SharePoint'
                    }
                ]
            }
        ]
    },
    ehpad: {
        title: 'MISE EN LIGNE D\'UN ARTICLE – EHPAD SAINTE MONIQUE',
        subtitle: 'Mise en ligne d\'un article – EHPAD Sainte Monique',
        context: 'Publication d\'un article institutionnel pour valoriser les actions de l\'EHPAD.',
        objectives: [
            'Renforcer la visibilité numérique',
            'Valoriser un événement avec des partenaires'
        ],
        steps: [
            {
                title: 'Connexion à l\'interface K-Sup',
                images: [
                    {
                        src: 'Miseenlignearticle.img/Connexion%20%C3%A0%20l\'interface%20K-Sup/connexion%20%C3%A0%20interface%20en%20admin.png',
                        alt: 'Connexion à interface en admin',
                        caption: 'Interface de connexion administrateur à la plateforme K-Sup'
                    },
                    {
                        src: 'Miseenlignearticle.img/Connexion%20%C3%A0%20l\'interface%20K-Sup/R%C3%A9sulat%20connexion%20admin.png',
                        alt: 'Résultat connexion admin',
                        caption: 'Confirmation de la connexion réussie en tant qu\'administrateur'
                    }
                ]
            },
            {
                title: 'Création de la fiche article',
                images: [
                    {
                        src: 'Miseenlignearticle.img/Cr%C3%A9ation%20de%20la%20fiche%20article/Choix%20de%20rubrique.png',
                        alt: 'Choix de rubrique',
                        caption: 'Sélection de la rubrique appropriée pour l\'article EHPAD Sainte Monique'
                    },
                    {
                        src: 'Miseenlignearticle.img/Cr%C3%A9ation%20de%20la%20fiche%20article/cr%C3%A9ation%20de%20la%20fiche.png',
                        alt: 'Création de la fiche',
                        caption: 'Interface de création de la fiche article dans le système K-Sup'
                    },
                    {
                        src: 'Miseenlignearticle.img/Cr%C3%A9ation%20de%20la%20fiche%20article/Rattachement%20%C3%A0%20la%20strucure.png',
                        alt: 'Rattachement à la structure',
                        caption: 'Configuration du rattachement de l\'article à la structure EHPAD'
                    }
                ]
            },
            {
                title: 'Rédaction et ajout d\'images',
                images: [
                    {
                        src: 'Miseenlignearticle.img/R%C3%A9daction%20et%20ajout%20images/insertion%20du%20texte.png',
                        alt: 'Insertion du texte',
                        caption: 'Rédaction et insertion du contenu textuel de l\'article'
                    },
                    {
                        src: 'Miseenlignearticle.img/R%C3%A9daction%20et%20ajout%20images/insertion%20de%20l\'image.png',
                        alt: 'Insertion de l\'image',
                        caption: 'Ajout et positionnement des images illustrant l\'événement'
                    }
                ]
            },
            {
                title: 'Publication et vérification finale',
                images: [
                    {
                        src: 'Miseenlignearticle.img/Publication%20et%20v%C3%A9rification%20finale/Pr%C3%A9visualisation.png',
                        alt: 'Prévisualisation',
                        caption: 'Prévisualisation de l\'article avant publication pour vérification'
                    },
                    {
                        src: 'Miseenlignearticle.img/Publication%20et%20v%C3%A9rification%20finale/R%C3%A9sultat%20pr%C3%A9visualisation.png',
                        alt: 'Résultat prévisualisation',
                        caption: 'Vérification du rendu final de l\'article en mode prévisualisation'
                    },
                    {
                        src: 'Miseenlignearticle.img/Publication%20et%20v%C3%A9rification%20finale/R%C3%A9sultat%20mise%20en%20ligne%20de%20l%27article.png',
                        alt: 'Résultat mise en ligne',
                        caption: 'Article publié et visible sur le site web de l\'EHPAD Sainte Monique'
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
            'Déploiement fibre optique',
            'Suivi administratif via SharePoint'
        ],
        steps: [
            {
                title: 'Préparation et envoi des mails aux établissements',
                images: [
                    {
                        src: 'fibreoptique.img/Pr%C3%A9paration%20et%20envoi%20des%20mails/Pr%C3%A9paration%20et%20envoi%20des%20mails.png',
                        alt: 'Préparation et envoi des mails',
                        caption: 'Processus de préparation et d\'envoi des communications aux établissements pour le projet SUSIE'
                    }
                ]
            },
            {
                title: 'Mise à jour du tableau de suivi administratif',
                images: [
                    {
                        src: 'fibreoptique.img/Mise%20%C3%A0%20jour%20du%20suivi%20administratif/Suivi%20pas%20mis%20%C3%A0%20jour.png',
                        alt: 'Suivi pas mis à jour',
                        caption: 'État initial du tableau de suivi administratif avant mise à jour'
                    },
                    {
                        src: 'fibreoptique.img/Mise%20%C3%A0%20jour%20du%20suivi%20administratif/Suivi%20mis%20%C3%A0%20jour.png',
                        alt: 'Suivi mis à jour',
                        caption: 'Tableau de suivi administratif après mise à jour avec les nouvelles données'
                    }
                ]
            },
            {
                title: 'Coordination avec les techniciens et Orange',
                images: [
                    {
                        src: 'fibreoptique.img/Coordination%20avec%20techniciens%20Orange/Mise%20en%20place%20de%20la%20fibre%20optique.png',
                        alt: 'Mise en place de la fibre optique',
                        caption: 'Coordination opérationnelle pour la mise en place de la fibre optique avec les équipes Orange'
                    }
                ]
            }
        ]
    },
    webex: {
        title: 'MISE À JOUR & INTÉGRATION DES CONTACTS – WEBEX CONTROL HUB',
        subtitle: 'Mise à jour & intégration des contacts – Webex Control Hub',
        context: 'Mise à jour et centralisation des contacts établissements dans Webex.',
        objectives: [
            'Structurer un fichier CSV conforme',
            'Importation automatisée dans Webex'
        ],
        steps: [
            {
                title: 'Collecte et structuration des données',
                images: [
                    {
                        src: 'int%C3%A9grationsdescontacts.img/Collecte%20et%20structuration%20des%20donn%C3%A9es/croisement%20des%20informations.png',
                        alt: 'Croisement des informations',
                        caption: 'Processus de croisement et de vérification des informations de contact'
                    },
                    {
                        src: 'int%C3%A9grationsdescontacts.img/Collecte%20et%20structuration%20des%20donn%C3%A9es/fichier%20CSV.png',
                        alt: 'Fichier CSV',
                        caption: 'Structure et organisation des données dans le fichier CSV'
                    }
                ]
            },
            {
                title: 'Préparation fichier CSV (UTF-8, séparateurs)',
                images: [
                    {
                        src: 'int%C3%A9grationsdescontacts.img/Pr%C3%A9paration%20fichier%20CSV%20%28UTF-8%2C%20s%C3%A9parateurs%29/fichier%20CSV.png',
                        alt: 'Fichier CSV préparé',
                        caption: 'Fichier CSV final avec encodage UTF-8 et séparateurs corrects'
                    }
                ]
            },
            {
                title: 'Analyse et correction des erreurs',
                images: [
                    {
                        src: 'int%C3%A9grationsdescontacts.img/Analyse%20et%20correction%20des%20erreurs/erreur%20premi%C3%A8re%20importation.png',
                        alt: 'Erreur première importation',
                        caption: 'Analyse des erreurs rencontrées lors de la première tentative d\'importation'
                    }
                ]
            },
            {
                title: 'Importation réussie dans Webex',
                images: [
                    {
                        src: 'int%C3%A9grationsdescontacts.img/Importation%20r%C3%A9ussie%20dans%20Webex/importation%20r%C3%A9ussi.png',
                        alt: 'Importation réussie',
                        caption: 'Confirmation de l\'importation réussie des contacts dans Webex Control Hub'
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
    }
};

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
        mission.objectives.forEach(objective => {
            const li = document.createElement('li');
            li.textContent = objective;
            objectivesList.appendChild(li);
        });
    }

    // Remplir les étapes
    const stepsContainer = document.getElementById('mission-steps');
    if (stepsContainer) {
        stepsContainer.innerHTML = '';
        mission.steps.forEach((step, stepIndex) => {
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
                        // Rediriger directement vers le lien
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

    // Ajouter les événements de clic sur les cases cliquables - DÉSACTIVÉ
    // document.querySelectorAll('.competence.clickable').forEach(cell => {
    //     cell.addEventListener('click', function() {
    //         const dataKey = this.getAttribute('data-popup');
    //         openPopup(dataKey);
    //     });
    // });

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
