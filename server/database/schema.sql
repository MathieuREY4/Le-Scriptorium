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
