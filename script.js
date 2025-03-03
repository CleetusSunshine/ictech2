:root {
    --primary-color: hsl(0, 100%, 85%);
    --secondary-color: hsl(348, 43%, 51%);
    --background-color: hsl(0, 100%, 98%);
    --text-color: hsl(348, 43%, 51%);
    --accent-pink: hsl(350, 100%, 88%);
    --soft-pink: hsl(350, 100%, 94%);
    --transition: all 0.3s ease;
    --overlay-color: rgba(255, 240, 240, 0.85);
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
    transition: var(--transition);
}

/* Navigation */
nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    padding: 1rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-bottom: 4px solid var(--secondary-color);
    height: 80px; /* Fixed height for nav */
}

.logo {
    width: 60px;
    aspect-ratio: 1;
    border-radius: 50%;
    overflow: hidden;
}

.logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-links a {
    color: var(--text-color);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: var(--transition);
    position: relative;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--secondary-color);
    transition: var(--transition);
}

.nav-links a:hover::after {
    width: 100%;
}

.nav-links a:hover {
    color: var(--accent-pink);
}

.nav-links a.active {
    color: var(--secondary-color);
}

/* Mobile-First Media Queries */
@media (max-width: 768px) {
    /* Navigation */
    nav {
        padding: 0.8rem 4%;
        height: 70px;
    }

    .nav-links {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.8rem;
        padding: 0.5rem;
    }

    .nav-links a {
        font-size: 0.75rem;
        padding: 0.3rem 0.6rem;
    }

    /* Hero Section */
    .hero h1 {
        font-size: 2.2rem;
        padding: 0 1rem;
    }

    .hero p {
        font-size: 1.1rem;
    }

    .hero span {
        font-size: 1.5rem;
    }

    /* About Section */
    .about-container {
        flex-direction: column;
        gap: 2rem;
        padding: 0 1rem;
    }

    .about-content h2 {
        font-size: 2rem;
    }

    .logo-circle {
        width: 200px;
        height: 200px;
    }

    /* Mission Section */
    .mission-title {
        font-size: 2rem;
        text-align: center;
        padding: 0 1rem;
    }

    .mission-container {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 0 1rem;
    }

    .mission-box {
        padding: 1.5rem;
    }

    .mission-box h3 {
        font-size: 1.8rem;
    }

    .mission-box p {
        font-size: 1rem;
    }

    /* Goals Section */
    .goals-container {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        padding: 1.5rem;
    }

    .goal-card {
        padding: 2rem 1.5rem;
    }

    .goal-card h3 {
        font-size: 1.4rem;
    }

    /* Team Section */
    #team h2 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }

    #team .script-text {
        font-size: 3rem;
    }

    .team-intro {
        font-size: 1.1rem;
        padding: 0 1rem;
        margin-bottom: 2rem;
    }

    .team-grid {
        padding: 2rem 1rem;
    }

    .team-members {
        gap: 1.5rem;
    }

    .team-row {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .team-row-1 .member img,
    .team-row-2 .member img,
    .team-row-3 .member img,
    .team-row-4 .member img {
        width: 160px;
        height: 160px;
    }

    .member {
        padding: 1rem;
    }

    .member h3 {
        font-size: 0.85rem;
    }

    .member p {
        font-size: 1rem;
    }

    /* Projects Section */
    #projects h2 {
        font-size: 2.5rem;
    }

    #projects .script-text {
        font-size: 3rem;
    }

    .projects-grid {
        width: 100%;
        padding: 1rem;
    }

    .project-card {
        margin: 0 1rem;
    }

    .project-card img {
        height: 200px;
    }

    .project-card h3 {
        font-size: 1.3rem;
        margin: 1rem;
    }

    /* Contact Section */
    .contact-container {
        flex-direction: column;
        gap: 2rem;
        padding: 0 1rem;
    }

    .contact-info h3 {
        font-size: 1.5rem;
    }

    .contact-info p {
        font-size: 0.9rem;
    }

    /* General Section Headers */
    .section h2 {
        font-size: 2.5rem !important;
        margin-bottom: 2rem;
        padding: 0 1rem;
    }

    .script-text {
        font-size: 3rem !important;
    }

    /* Section Spacing */
    .section {
        padding: 4rem 0;
        margin-top: 70px;
    }

    #home.section {
        padding-top: 70px;
    }
}

/* Small Mobile Devices */
@media (max-width: 480px) {
    .nav-links {
        gap: 0.5rem;
    }

    .nav-links a {
        font-size: 0.7rem;
        padding: 0.2rem 0.4rem;
    }

    .hero h1 {
        font-size: 1.8rem;
    }

    .hero p {
        font-size: 1rem;
    }

    .team-row-1 .member img,
    .team-row-2 .member img,
    .team-row-3 .member img,
    .team-row-4 .member img {
        width: 140px;
        height: 140px;
    }

    .member h3 {
        font-size: 0.8rem;
    }

    .member p {
        font-size: 0.9rem;
    }
}

/* Tablet Devices */
@media (min-width: 769px) and (max-width: 1024px) {
    .nav-links {
        gap: 1.5rem;
    }

    .nav-links a {
        font-size: 0.85rem;
    }

    .team-row-1 .member img {
        width: 200px;
        height: 200px;
    }

    .team-row-2 .member img,
    .team-row-3 .member img {
        width: 180px;
        height: 180px;
    }

    .team-row-4 .member img {
        width: 160px;
        height: 160px;
    }
}

/* Sections */
.section {
    padding: 5rem 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--background-color);
    animation: fadeIn 1s ease-out;
    margin-top: 80px; /* Add margin to account for fixed nav */
}

.section h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 3rem;
}

/* About Section */
.section#about {
    position: relative;
    background-color: var(--soft-pink);
    padding: 6rem 0;
}

.about-container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 4rem;
}

.about-content {
    flex: 1;
}

.about-content h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: var(--secondary-color);
}

.script-text {
    font-family: 'Dancing Script', cursive;
    color: var(--secondary-color);
}

.about-lines {
    width: 100px;
    height: 4px;
    background-color: var(--accent-pink);
    margin: 1.5rem 0;
}

.about-content p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-color);
}

.about-logo {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.logo-circle {
    border-radius: 50%;
    width: 300px;
    height: 300px;
    overflow: hidden;
    border: 8px solid var(--accent-pink);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.logo-circle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.triangle-decoration {
    position: absolute;
    bottom: -40px;
    right: -40px;
    z-index: 1;
}

.triangle-decoration::before,
.triangle-decoration::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
}

.triangle-decoration::before {
    border-width: 60px 0 0 60px;
    border-color: transparent transparent transparent var(--accent-pink);
    bottom: 0;
    right: 0;
}

.triangle-decoration::after {
    border-width: 40px 0 0 40px;
    border-color: transparent transparent transparent var(--secondary-color);
    bottom: -20px;
    right: -20px;
}

/* Hero Section */
#home {
    background: url('images/city.jpg') no-repeat center center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

#home.section {
    margin-top: 0; /* Remove margin for hero section */
    padding-top: 80px; /* Add padding instead for hero section */
}

#home::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 240, 240, 0.40);
    z-index: 1;
}

.hero {
    text-align: center;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
}

.hero h1 {
    font-size: 3.5rem;
    color: hsl(348, 43%, 45%);
    margin-bottom: 1rem;
    font-weight: 800;
}

.hero p {
    font-size: 1.5rem;
    color: hsl(348, 43%, 55%);
}

.hero span {
    color: hsl(350, 100%, 75%);
    font-family: 'Dancing Script', cursive;
    font-size: 2rem;
}

/* Mission & Vision Section */
#mission {
    background-color: var(--background-color);
    padding: 100px 5%;
    position: relative;
}

.mission-title {
    font-size: 3.5rem;
    color: var(--primary-color);
    text-align: left;
    margin-bottom: 3rem;
    font-family: 'Playfair Display', serif;
}

.mission-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    position: relative;
}

.mission-container::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: var(--secondary-color);
    transform: translateX(-50%);
}

.mission-box {
    background: transparent;
    padding: 2rem;
}

.mission-box h2 {
    color: var(--primary-color);
    font-size: 3rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
}

.mission-box > p {
    color: var(--secondary-color);
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.6;
}

.mission-points {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.point {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
}

.star {
    color: var(--secondary-color);
    font-size: 1.2rem;
    margin-top: 0.2rem;
}

.point h3 {
    color: var(--primary-color);
    font-size: 1.8rem;
    margin-bottom: 1rem;
}

.point p {
    color: var(--secondary-color);
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.6;
}

@media (max-width: 768px) {
    .mission-container {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .mission-container::before {
        display: none;
    }

    .mission-title {
        font-size: 2.5rem;
        text-align: center;
    }

    .mission-box h2 {
        font-size: 2rem;
    }
}

/* Goals Section */
.goals-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2.5rem;
    padding: 2.5rem 0;
    background-color: var(--background-color);
    max-width: 1200px;
    margin: 0 auto;
}

.goals-container h2 {
    color: var(--primary-color);
    font-size: 2.8rem;
    text-align: center;
    margin-bottom: 2.5rem;
}

.goal-card {
    background: var(--background-color);
    padding: 2.5rem 1.8rem;
    text-align: center;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    border: 2px solid var(--primary-color);
    position: relative;
    overflow: hidden;
}

.goal-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--soft-pink), var(--accent-pink));
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 0;
}

.goal-card:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
    border-color: var(--accent-pink);
}

.goal-card:hover::before {
    opacity: 0.1;
}

.goal-card i {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1.8rem;
    position: relative;
    z-index: 1;
    transition: transform 0.4s ease;
}

.goal-card:hover i {
    transform: scale(1.15);
    color: var(--secondary-color);
}

.goal-card h3 {
    color: var(--primary-color);
    font-size: 1.6rem;
    margin: 0.8rem 0;
    position: relative;
    z-index: 1;
    transition: color 0.4s ease;
}

.goal-card p {
    color: var(--secondary-color);
    line-height: 1.7;
    font-size: 1rem;
    position: relative;
    z-index: 1;
}

/* Team Section */
.team-grid {
    max-width: 1600px;
    margin: 0 auto;
    padding: 4rem 2rem;
}

#team h2 {
    font-size: 4.5rem;
    color: var(--secondary-color);
    text-align: center;
    margin-bottom: 3.5rem;
    position: relative;
}

#team .script-text {
    font-size: 5rem;
    color: var(--secondary-color);
    display: inline-block;
    transform: translateY(5px);
}

.team-intro {
    font-size: 1.4rem;
    color: var(--text-color);
    text-align: center;
    margin-bottom: 4rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
}

.team-members {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    justify-items: center;
}

/* Pyramid Layout */
.team-row {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 4rem;
}

.team-row-1 { /* CEO - Top of pyramid */
    grid-column: span 4;
    transform: translateY(20px);
}

.team-row-1 .member img {
    width: 250px;
    height: 250px;
}

.team-row-2 { /* Second row - 2 members */
    grid-column: 2 / span 2;
    display: flex;
    justify-content: center;
    gap: 4rem;
}

.team-row-2 .member img {
    width: 220px;
    height: 220px;
}

.team-row-3 { /* Third row - 3 members */
    grid-column: span 4;
    display: flex;
    justify-content: center;
    gap: 3rem;
}

.team-row-3 .member img {
    width: 200px;
    height: 200px;
}

.team-row-4 { /* Fourth row - 4 members */
    grid-column: span 4;
    display: flex;
    justify-content: center;
    gap: 3rem;
}

.member {
    text-align: center;
    padding: 2rem;
    max-width: 300px;
    transition: all 0.4s ease;
}

.member img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
    border: 4px solid var(--accent-pink);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
}

.member:hover {
    transform: translateY(-10px);
}

.member:hover img {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    border-width: 6px;
}

.member h3 {
    color: var(--secondary-color);
    margin-bottom: 0.8rem;
    font-size: 1rem;
    transition: color 0.3s ease;
}

.member p {
    color: var(--text-color);
    font-size: 1.2rem;
    font-weight: 600;
    transition: color 0.3s ease;
}

.member:hover h3 {
    color: var(--accent-pink);
}

.member:hover p {
    color: var(--secondary-color);
}

@media (max-width: 1400px) {
    .team-grid {
        max-width: 1200px;
    }
    
    .team-row-1 .member img {
        width: 220px;
        height: 220px;
    }
    
    .team-row-2 .member img {
        width: 200px;
        height: 200px;
    }
    
    .team-row-3 .member img {
        width: 180px;
        height: 180px;
    }
}

@media (max-width: 1200px) {
    .team-members {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
    
    .team-row {
        gap: 2rem;
        margin-bottom: 3rem;
    }
    
    .member img {
        width: 160px;
        height: 160px;
    }
}

@media (max-width: 768px) {
    .team-members {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    
    .team-row {
        gap: 1.5rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    }
    
    .member img {
        width: 140px;
        height: 140px;
    }
    
    .member h3 {
        font-size: 0.9rem;
    }
    
    .member p {
        font-size: 1rem;
    }
}

/* Projects Section */
#projects {
    background-color: var(--background-color);
    padding: 100px 5%;
}

.projects-grid {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 2rem 0;
}

.project-card {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 100%;
    max-width: 500px;
    transition: var(--transition);
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.project-card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.project-card h3 {
    color: var(--secondary-color);
    font-size: 1.5rem;
    margin: 1.5rem;
    font-weight: 600;
}

.project-card p {
    color: var(--text-color);
    font-size: 1rem;
    line-height: 1.6;
    margin: 0 1.5rem 1.5rem;
}

.project-details {
    padding: 0 1.5rem 1.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.project-tag {
    background-color: var(--soft-pink);
    color: var(--secondary-color);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
}

.projects-section h2 {
    color: var(--primary-color);
    font-size: 3rem;
    text-align: center;
    margin-bottom: 3rem;
}

#projects h2 {
    font-size: 4rem;
    color: var(--secondary-color);
    text-align: center;
    margin-bottom: 3rem;
}

#projects .script-text {
    font-size: 4.5rem;
}

@media (max-width: 768px) {
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .project-card img {
        height: 200px;
    }
}

/* Contact Section */
.section#contact {
    padding: 100px 5%;
    min-height: auto;
}

.contact-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 4rem;
}

.contact-info {
    flex: 1;
    padding: 2rem;
}

.contact-info h3 {
    color: var(--secondary-color);
    margin-bottom: 2rem;
    font-size: 1.8rem;
}

.contact-info p {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.contact-info i {
    color: var(--secondary-color);
    font-size: 1.2rem;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form input, .contact-form textarea {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: inherit;
    background-color: var(--background-color);
    border: 2px solid var(--primary-color);
    color: var(--secondary-color);
}

.submit-btn {
    background: var(--primary-color);
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: var(--transition);
}

.submit-btn:hover {
    background: var(--secondary-color);
}

/* Footer */
footer {
    background: var(--background-color);
    color: var(--secondary-color);
    padding: 3rem 5%;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h3 {
    margin-bottom: 1rem;
}

.footer-section a {
    color: var(--secondary-color);
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;
}

.footer-section a:hover {
    color: var(--primary-color);
}

.social-links a {
    display: inline-block;
    margin-right: 1rem;
    font-size: 1.5rem;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}

/* Animations */
@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Section Headers */
h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--secondary-color);
    position: relative;
    padding-bottom: 1rem;
}

h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: var(--primary-color);
}

.section#goals h2,
.section#projects h2 {
    font-size: 4rem;
    color: var(--secondary-color);
    text-align: center;
    margin-bottom: 3rem;
}

.section#goals .script-text,
.section#projects .script-text {
    font-family: 'Dancing Script', cursive;
    font-size: 4.5rem;
    color: var(--secondary-color);
}

/* Mobile-First Media Queries */
@media (max-width: 768px) {
    /* Goals Section */
    #goals {
        padding: 3rem 0;
    }

    #goals h2 {
        font-size: 2.2rem !important;
        margin-bottom: 1.5rem;
    }

    #goals .script-text {
        font-size: 2.5rem !important;
    }

    .goals-container {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 0.5rem;
        width: 90%;
    }

    .goal-card {
        padding: 1.5rem 1rem;
        max-width: 100%;
        display: flex;
        align-items: center;
        text-align: left;
        gap: 1rem;
    }

    .goal-card i {
        font-size: 1.8rem;
        margin-bottom: 0;
        min-width: 40px;
    }

    .goal-card h3 {
        font-size: 1.2rem;
        margin: 0 0 0.3rem 0;
    }

    .goal-card p {
        font-size: 0.9rem;
        line-height: 1.4;
        margin: 0;
    }

    .goal-card:hover {
        transform: translateY(-5px) scale(1.01);
    }
}

/* Small Mobile Devices */
@media (max-width: 480px) {
    #goals h2 {
        font-size: 2rem !important;
    }

    #goals .script-text {
        font-size: 2.2rem !important;
    }

    .goals-container {
        width: 95%;
        padding: 0.3rem;
    }

    .goal-card {
        padding: 1.2rem 0.8rem;
    }

    .goal-card i {
        font-size: 1.5rem;
        min-width: 35px;
    }

    .goal-card h3 {
        font-size: 1.1rem;
    }

    .goal-card p {
        font-size: 0.85rem;
    }
}

