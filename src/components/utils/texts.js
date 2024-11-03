

const Texts = {
    en: {
        navigation: {
            ABOUT: 'About',
            WORK: 'Projects',
            CONTACT: 'Contact',
            DE: 'GER',
        },
        greeting: "Hello I'm Sergej",
        work: {
            title: "Projects",
            projects: {
                chi: {
                    title: "Gamma Analysis",
                    description: "Residuena analysis using the example of gamma radiation recorded by a satellite.",
                    features: ['Welcome Screen: Allows users to log in or register a new account.',
                        'Movie List View: Shows a complete list of movies for logged-in users.',
                        'Movie Cards: Each movie card in the list includes buttons to view detailed information about the movie, explore its genre, or learn about the director. Users can add or remove movies from their favorites list here.',
                        'Profile View: Enables users to view and update their personal information with an option to deregister. Users can also view their favorite movies here.',
                        'Navigation: Icons for Profile, All Movies, and Logout.'
                    ]
                },
                pca: {
                    title: "(Principal Component Analysis [PCA])",   
                    description: "Hier bei geht es darum den Einsatz der Hauptkomponentenanalyse am Beispiel eines Datensatzes über Wein zu demonstrieren.",
                    features: ['Welcome Screen: Allows users to log in or register a new account.',
                        'Movie List View: Shows a complete list of movies for logged-in users.',
                        'Movie Cards: Each movie card in the list includes buttons to view detailed information about the movie, explore its genre, or learn about the director. Users can add or remove movies from their favorites list here.',
                        'Profile View: Enables users to view and update their personal information with an option to deregister. Users can also view their favorite movies here.',
                        'Navigation: Icons for Profile, All Movies, and Logout.'
                    ]
                },
                cluster: {
                    title: "Clustering",   
                    description: "This project deals with the clustering of the iris data set. A classification is carried out using the K-Means, K-Medoids and the GMM.",
                    features: ['Welcome Screen: Allows users to log in or register a new account.',
                        'Movie List View: Shows a complete list of movies for logged-in users.',
                        'Movie Cards: Each movie card in the list includes buttons to view detailed information about the movie, explore its genre, or learn about the director. Users can add or remove movies from their favorites list here.',
                        'Profile View: Enables users to view and update their personal information with an option to deregister. Users can also view their favorite movies here.',
                        'Navigation: Icons for Profile, All Movies, and Logout.'
                    ]
 
               },
                aktien: {
                    title: "Stocks prediction",   
                    description: "In this project, different deep learning models (LSTM, GRU, CNN-LSTM) were tested for the prediction of stock prices. The models were evaluated with **K-Fold Cross-Validation** to ensure a robust assessment of the prediction accuracy. The **Mean Squared Error (MSE)** was used to evaluate model performance. An **ANOVA test** was performed to test for significant differences in model performance.",
                    features: ['Welcome Screen: Allows users to log in or register a new account.',
                        'Movie List View: Shows a complete list of movies for logged-in users.',
                        'Movie Cards: Each movie card in the list includes buttons to view detailed information about the movie, explore its genre, or learn about the director. Users can add or remove movies from their favorites list here.',
                        'Profile View: Enables users to view and update their personal information with an option to deregister. Users can also view their favorite movies here.',
                        'Navigation: Icons for Profile, All Movies, and Logout.'
                    ]
 
                },
            }
        },
        project_details: "Technologies",
        about: {
            title: "About me",
            welcomeText: "Welcome to my website. My name is Sergej Leinweber.",
            description: "As a data scientist, statistician and physicist with degrees in the USA and Germany and several years of professional experience, my focus is on the analysis of complex multidimensional data sets using Python and machine learning.",
            skillsTitle: "Skills & Technologies",
        },
        contact: {
            formTitle: "Contact Form",
            getInTouchTitle: "Get in touch",
            namePlaceholder: "Full Name",
            emailPlaceholder: "Email Address",
            messagePlaceholder: "Your Message",
            sendMessageButton: "SEND MESSAGE",
            successMessage: "You successfully sent your message",
            formMessage: "My mail adress:  ",
            errorMessage: "Unfortunately, your message could not be sent. Please try again.",
        }
    },
    de: {
        navigation: {
            ABOUT: 'Über mich',
            WORK: 'Projekte',
            CONTACT: 'Kontakt',
            DE: 'DE',
        },
        greeting: "Hallo, ich bin Sergej",
        work: {
            title: "Projekte",
            projects: {
                chi: {
                    title: "Gamma Analyse/ Residuen Analyse",
                    description: "Residuena Analyse am Beispiel einer durch einen Sateliten aufgezeichneten Gamma-Strahlung.",
                    features: ['Welcome Screen: Allows users to log in or register a new account.',
                        'Movie List View: Shows a complete list of movies for logged-in users.',
                        'Movie Cards: Each movie card in the list includes buttons to view detailed information about the movie, explore its genre, or learn about the director. Users can add or remove movies from their favorites list here.',
                        'Profile View: Enables users to view and update their personal information with an option to deregister. Users can also view their favorite movies here.',
                        'Navigation: Icons for Profile, All Movies, and Logout.'
                    ]
                    
 
                },
                pca: {
                    title: "Hauptkomponentenanalyse Principal Component Analysis (PCA)/ Dimensionsreduzierung",   
                    description: "The aim here is to demonstrate the use of principal component analysis using the example of a data set on wine.",
                    features: ['Welcome Screen: Allows users to log in or register a new account.',
                        'Movie List View: Shows a complete list of movies for logged-in users.',
                        'Movie Cards: Each movie card in the list includes buttons to view detailed information about the movie, explore its genre, or learn about the director. Users can add or remove movies from their favorites list here.',
                        'Profile View: Enables users to view and update their personal information with an option to deregister. Users can also view their favorite movies here.',
                        'Navigation: Icons for Profile, All Movies, and Logout.'
                    ]
 
                },
                cluster: {
                    title: "Clustering/ Unsupervised Learning",   
                    description: "Diese Projekt befasst sich mit dem Clustern vom Datensatz des iris Datensatzes. Es wird eine Klassifikation durchgeführt mittel des K-Means, K-Medoids und des GMM.",
                    features: ['Welcome Screen: Allows users to log in or register a new account.',
                        'Movie List View: Shows a complete list of movies for logged-in users.',
                        'Movie Cards: Each movie card in the list includes buttons to view detailed information about the movie, explore its genre, or learn about the director. Users can add or remove movies from their favorites list here.',
                        'Profile View: Enables users to view and update their personal information with an option to deregister. Users can also view their favorite movies here.',
                        'Navigation: Icons for Profile, All Movies, and Logout.'
                    ]
 
                },
                aktien: {
                    title: "Aktienvorhersage",   
                    description: "In diesem Projekt wurden verschiedene Deep-Learning-Modelle (LSTM, GRU, CNN-LSTM) zur Vorhersage von Aktienkursen getestet. Die Modelle wurden mit **K-Fold Cross-Validation** evaluiert, um eine robuste Bewertung der Vorhersagegenauigkeit zu gewährleisten. Zur Bewertung der Modellleistung wurde der **Mean Squared Error (MSE)** verwendet. Ein **ANOVA-Test** wurde durchgeführt, um signifikante Unterschiede in der Performance der Modelle zu prüfen.",
                    features: ['Welcome Screen: Allows users to log in or register a new account.',
                        'Movie List View: Shows a complete list of movies for logged-in users.',
                        'Movie Cards: Each movie card in the list includes buttons to view detailed information about the movie, explore its genre, or learn about the director. Users can add or remove movies from their favorites list here.',
                        'Profile View: Enables users to view and update their personal information with an option to deregister. Users can also view their favorite movies here.',
                        'Navigation: Icons for Profile, All Movies, and Logout.'
                    ]
 
                },
            }
        },
        project_details: "Technologien",
        about: {
            title: "Über mich",
            welcomeText: "Willkommen auf meiner Webseite. Mein Name ist Sergej Leinweber.",
            description: "Als Data Scientist, Statistiker und Physiker mit Studienabschlüssen in den USA und Deutschland \
                         sowie mehrjähriger Berufserfahrung liegt mein Fokus auf der Auswertung komplexer multidimensionaler \
                         Datensätze mittels Python sowie Maschinellem Lernen.",
            skillsTitle: "Fähigkeiten & Technologien",
        },
        contact: {
            formTitle: "Kontaktformular",
            getInTouchTitle: "In Kontakt treten",
            namePlaceholder: "Vollständiger Name",
            emailPlaceholder: "E-Mail-Adresse",
            messagePlaceholder: "Ihre Nachricht",
            sendMessageButton: "NACHRICHT SENDEN",
            successMessage: "Ihre Nachricht wurde erfolgreich gesendet",
            formMessage: "Meine E-Mail Adresse:  ",
            errorMessage: "Leider konnte Ihre Nachricht nicht gesendet werden. Bitte versuchen Sie es erneut.",
        }
    }
};

export default Texts;
