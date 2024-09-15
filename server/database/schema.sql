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

-- Create Chapter table
CREATE TABLE Chapter (
    id_chapter INT PRIMARY KEY AUTO_INCREMENT,
    content LONGTEXT NOT NULL,
    chapter_number INT NOT NULL,
    id_book INT,
    FOREIGN KEY (id_book) REFERENCES Book(id_book)
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
