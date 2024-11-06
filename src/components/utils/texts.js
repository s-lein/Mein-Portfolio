   // project pictures imports from public folder
const de_Chi_Quadrat_Verteilung = `${process.env.PUBLIC_URL}/img/de_Chi_Quadrat_Verteilung.svg`;
const en_Chi_square_Distribution = `${process.env.PUBLIC_URL}/img/en_Chi_square_Distribution.svg`;

const de_PCA = `${process.env.PUBLIC_URL}/img/de_PCA.svg`;
const en_PCA = `${process.env.PUBLIC_URL}/img/en_PCA.svg`;
const de_Paarplot = `${process.env.PUBLIC_URL}/img/de_Paarplot.svg`;
const en_PairPlot = `${process.env.PUBLIC_URL}/img/en_Pairplot.svg`;
const de_Korrelationsmatrix = `${process.env.PUBLIC_URL}/img/de_Korrelationsmatrix.svg`;
const en_Correlation_Matrix = `${process.env.PUBLIC_URL}/img/en_Correlation_Matrix.svg`;

const de_Kluster = `${process.env.PUBLIC_URL}/img/de_Kluster.svg`;
const en_Clustering = `${process.env.PUBLIC_URL}/img/en_Clustering.svg`;

const de_Aktienkursvorhersage = `${process.env.PUBLIC_URL}/img/de_Vergleich_der_Aktienkursvorhersage.svg`;
const en_Stock_Price_Prediction = `${process.env.PUBLIC_URL}/img/en_Comparison_of_Stock_Price_Prediction.svg`;

const de_Multinomialverteilung = `${process.env.PUBLIC_URL}/img/de_Multinomialverteilung.svg`; 
const en_Multinomial_Distribution = `${process.env.PUBLIC_URL}/img/en_Multinomial_Distribution.svg`;
const de_Wuerfel_Verteilung = `${process.env.PUBLIC_URL}/img/de_Wuerfel_Verteilung.svg`; 
const en_Dice_Distribution = `${process.env.PUBLIC_URL}/img/en_Dice_Distribution.svg`; 

const de_Beispiel_1 = `${process.env.PUBLIC_URL}/img/de_Beispiel_1.png`; 
const en_Example_1 = `${process.env.PUBLIC_URL}/img/en_Example_1.png`; 
const de_Beispiel_2 = `${process.env.PUBLIC_URL}/img/de_Beispiel_2.png`; 
const en_Example_2 = `${process.env.PUBLIC_URL}/img/en_Example_2.png`; 


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
                    title: "Chi-square Distribution",
                    description: "Chi-square distribution using the example of gamma radiation recorded by a satellite.",
                    features: ['Poisson distribution',
                               'Maximum likelihood method',
                               'Likelihood ratio test',
                    ],
                    linkGit: "https://github.com/s-lein/Portfolio/blob/main/English/Chi-Square%20Distribution/Chi-Square%20Distribution.ipynb", 
                    imageSrc: [en_Chi_square_Distribution],
                    phonePic: [en_Chi_square_Distribution],      
                },
                pca: {
                    title: "Principal Component Analysis (PCA)",   
                    description: "The aim here is to demonstrate the use of principal component analysis using the example of a data set on wine.",
                    features: [ 'Dimension reduction',
                                'Correlation matrix, covariance matrix, eigenvectors and eigenvalues',
                                'Scree test, factor analysis, cumulative explainable variance',
                                'Dimensionality reduction for machine learning, random forest classifier',
                    ],
                    linkGit: "https://github.com/s-lein/Portfolio/blob/main/English/PCA/Principal%20Component%20Analysis%20(PCA).ipynb", 
                    imageSrc: [en_PCA],
                    phonePic: [en_PairPlot, en_Correlation_Matrix],  
                },
                cluster: {
                    title: "Clustering",   
                    description: "The example of the Iris data set shows how different methods can be used for cluster analysis.",
                    features: ['K-Nearest Neighbors',
                                'K-Medoids, Gaussian', 
                                'Mixture Models',
                                'Manhattan Distance, Minkowski Distance',
                    ],
                    linkGit:  ["https://github.com/s-lein/Portfolio/blob/main/English/Cluster/Cluster.ipynb"], 
                    imageSrc: [en_Clustering],
                    phonePic: [en_Clustering],   
               },
                aktien: {
                    title: "Stocks prediction",   
                    description: "In this project, various deep learning models were tested to predict Appel's share price.",
                    features: [ 'Long-Short-Term Memory (LSTM), Gate Recurrent Unit (GRU), Convolutional Neural Network (CNN) with LSTM',
                                'K-Fold Cross-Validation',
                                'Mean Square Error (MSE), Red Mean Square Error (RMSE), Mean Absolute Error (MAE), Mean Absolute Percentage Error (MAPE), ANOVA test',
                                'Residual analysis, Q-Q diagram',
                                'Bland-Altman analysis, Shapiro-Wilk test, ANOVA',  
                    ],
                    linkGit: "https://github.com/s-lein/Portfolio/blob/main/English/Stock%20price%20prediction%20with%20TensorFlow%20and%20Yahoo%20Finance/Stock%20price%20prediction%20with%20TensorFlow%20and%20Yahoo%20Finance.ipynb", 
                    imageSrc: [en_Stock_Price_Prediction],
                    phonePic: [en_Stock_Price_Prediction],   
                },
                statistics_R: {
                    title: "Statistics R",   
                    description: "A few examples will show how to use R to analyze statistical data.",
                    features: [ 'Discrete uniform distribution',
                                'Multinomial distribution',
                                'Cumulative probability',
                                '3d scatterplot',
                    ],
                    linkGit: "https://github.com/s-lein/Portfolio/blob/main/English/Statistics/Statistics_R.ipynb", 
                    imageSrc: [en_Multinomial_Distribution],
                    phonePic: [en_Multinomial_Distribution, en_Dice_Distribution],   
                },
                statistics_Tasks: {
                    title: "Statistics Tasks",   
                    description: "A few sample tasks from statistics.",
                    features: [ 'Monte Carlo',
                                'Maximum likelihood estimation',
                    ],
                    linkGit: "https://github.com/s-lein/Portfolio/blob/main/English/Statistics/Statistics_Tasks.ipynb", 
                    imageSrc: [en_Example_1],
                    phonePic: [en_Example_1, en_Example_2],  
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
                    title: "Chi-Quadrat-Verteilung",
                    description: "Chi-Quadrat-Verteilung am Beispiel einer durch einen Sateliten aufgezeichneten Gamma-Strahlung.",
                    features: [ 'Poisson-Verteilung',
                                'Maximum-Likelihood-Methode',
                                'Likelikhood-Ratio-Test',
                    ],
                    linkGit: "https://github.com/s-lein/Portfolio/blob/main/Deutsch/Chi-Quadrat-Verteilung/Chi-Quadrat-Verteilung.ipynb",  // Link to Git repository
                    imageSrc: [de_Chi_Quadrat_Verteilung],
                    phonePic: [de_Chi_Quadrat_Verteilung],           
                },
                pca: {
                    title: "Hauptkomponentenanalyse (PCA)",   
                    description: "Hier bei geht es darum den Einsatz der Hauptkomponentenanalyse am Beispiel eines Datensatzes über Wein zu demonstrieren.",
                    features: [ 'Dimensionsreduzierung',
                                'Korrelationsmatrix, Kovarianzmatrix, Eigenvektoren und Eigenwerte',
                                'Scree-Test, Faktorenanalyse, Kumulativ erklärbare Varianz',
                                'Dimensionalitätsreduktion für maschinelles Lernen, Random Forest Classifier',
                    ],
                    linkGit: "https://github.com/s-lein/Portfolio/blob/main/Deutsch/PCA/Hauptkomponentenanalyse%20(PCA).ipynb", 
                    imageSrc: [de_PCA],
                    phonePic: [de_Paarplot, de_Korrelationsmatrix],  
                },
                cluster: {
                    title: "Clustering",   
                    description: "Am Beispiel des Iris-Datensatzes wird dargestellt, wie man unterschiedliche Methoden zur Clusteruntersuchung nutzen kann.",
                    features: [ 'K-Nearest Neighbors',
                                'K-Medoids, Gaussian', 
                                'Mixture Models',
                                'Manhattan Distance, Minkowski Distance',
                    ],
                    linkGit: "https://github.com/s-lein/Portfolio/blob/main/Deutsch/Cluster/Cluster.ipynb", 
                    imageSrc: [de_Kluster],
                    phonePic: [de_Kluster],  
                },
                aktien: {
                    title: "Aktienvorhersage",   
                    description: "In diesem Projekt wurden verschiedene Deep-Learning-Modelle zur Vorhersage von Appel Aktienkurs getestet.",
                    features: [ 'Long-Short-Term Memory (LSTM), Gate Recurrent Unit (GRU), Convolutional Neural Network (CNN) mit LSTM ',
                                'K-Fold Cross-Validation',
                                'Mean Squared Error (MSE), Root Mean Squared Error (RMSE), Mean Absolute Error (MAE), Mean Absolute Percentage Error (MAPE), ANOVA-Test',
                                'Residualanalyse, Q-Q Plot',
                                'Bland-Altman-Analyse,  Shapiro-Wilk-Test, ANOVA', 
                    ],
                    linkGit: "https://github.com/s-lein/Portfolio/blob/main/Deutsch/Aktienkursvorhersage%20mit%20TensorFlow%20und%20Yahoo%20Finance/Aktienkursvorhersage%20mit%20TensorFlow%20und%20Yahoo%20Finance.ipynb", 
                    imageSrc: [de_Aktienkursvorhersage],
                    phonePic: [de_Aktienkursvorhersage],  
                },
                statistics_R: {
                    title: "Statistik R",   
                    description: "Anhand ein Paar Beispiele wird gezeigt wie man R verwendet um statistische Daten zu analysieren.", 
                    features: [ 'Diskrete Gleichverteilung ',
                                'Multinomialverteilung',
                                'Kumulative Wahrscheinlichkeit',
                                '3d Scatterplot',
                        
                    ],
                    linkGit: "https://github.com/s-lein/Portfolio/blob/main/Deutsch/Statistik/Statistik_R.ipynb", 
                    imageSrc: [de_Multinomialverteilung],
                    phonePic: [de_Multinomialverteilung, de_Wuerfel_Verteilung],  
 
                },
                statistics_Tasks: {
                    title: "Statistik Aufgaben",   
                    description: "Ein paar Beispielaufgaben aus der Statistik.",
                    features: [ 'Monte-Carlo',
                                'Maximum-Likelihood-Schätzung',
                    ],
                    linkGit: "https://github.com/s-lein/Portfolio/blob/main/Deutsch/Statistik/Statistik_Aufgaben.ipynb", 
                    imageSrc: [de_Beispiel_1],
                    phonePic: [de_Beispiel_1, de_Beispiel_2],  
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
