// Configuration simplifiée des particules
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

// Gestion du défilement de la molette
document.addEventListener('wheel', function(e) {
    const currentSection = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2).closest('.section');
    
    if (!currentSection) return;
    
    const sectionContent = currentSection.querySelector('.container');
    const sectionRect = currentSection.getBoundingClientRect();
    const isScrollable = sectionContent.scrollHeight > sectionContent.clientHeight;
    
    // Si la section n'est pas scrollable ou si on est au début/fin de la section
    if (!isScrollable || 
        (sectionContent.scrollTop === 0 && e.deltaY < 0) || 
        (sectionContent.scrollTop + sectionContent.clientHeight >= sectionContent.scrollHeight && e.deltaY > 0)) {
        e.preventDefault();
        
        // Navigation entre les sections
        const sections = Array.from(document.querySelectorAll('.section'));
        const currentIndex = sections.indexOf(currentSection);
        
        if (e.deltaY > 0 && currentIndex < sections.length - 1) {
            sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
        } else if (e.deltaY < 0 && currentIndex > 0) {
            sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
        }
    }
}, { passive: false });

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
    }
    // Ajoutez les autres données selon le même modèle...
};

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
            const dataKey = this.getAttribute('data-popup');
            openPopup(dataKey);
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
