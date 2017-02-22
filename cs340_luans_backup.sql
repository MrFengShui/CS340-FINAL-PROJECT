-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: mysql.eecs.oregonstate.edu
-- Generation Time: Feb 22, 2017 at 11:50 AM
-- Server version: 5.5.37-MariaDB-wsrep
-- PHP Version: 7.0.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cs340_luans`
--

-- --------------------------------------------------------

--
-- Table structure for table `BOOK_INFO_TB`
--

DROP TABLE IF EXISTS `BOOK_INFO_TB`;
CREATE TABLE `BOOK_INFO_TB` (
  `BOOK_ID` varchar(16) NOT NULL,
  `BOOK_NAME` varchar(255) NOT NULL,
  `BOOK_TYPE` tinyint(1) NOT NULL DEFAULT '0',
  `BOOK_AUTHOR_FIRST_NAME` varchar(255) NOT NULL,
  `BOOK_AUTHOR_LAST_NAME` varchar(255) NOT NULL,
  `BOOK_EDITION` tinyint(1) NOT NULL DEFAULT '1',
  `BOOK_PUBLISH_YEAR` smallint(4) NOT NULL,
  `BOOK_PUBLISH_MONTH` tinyint(2) NOT NULL,
  `BOOK_PUBLISH_DATE` tinyint(2) DEFAULT NULL,
  `BOOK_PUBLISH_PRESS` varchar(255) NOT NULL,
  `BOOK_ISBN` bigint(13) NOT NULL,
  `BOOK_PRICE` float(6,2) NOT NULL,
  `BOOK_QUANTITY` smallint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `BOOK_INFO_TB`
--

INSERT INTO `BOOK_INFO_TB` (`BOOK_ID`, `BOOK_NAME`, `BOOK_TYPE`, `BOOK_AUTHOR_FIRST_NAME`, `BOOK_AUTHOR_LAST_NAME`, `BOOK_EDITION`, `BOOK_PUBLISH_YEAR`, `BOOK_PUBLISH_MONTH`, `BOOK_PUBLISH_DATE`, `BOOK_PUBLISH_PRESS`, `BOOK_ISBN`, `BOOK_PRICE`, `BOOK_QUANTITY`) VALUES
('BOOK-ENGR-001', 'Learn JavaFX 8: Building User Experience and Interfaces with Java 8', 2, 'Kishori', 'Sharan', 1, 2015, 3, 18, 'Apress', 9781484211434, 59.99, 59),
('BOOK-ENGR-002', 'Absolute C++', 2, 'Walter', 'Savitch', 6, 2015, 3, 14, 'Pearson', 9780133970784, 148.52, 12),
('BOOK-ENGR-003', 'MongoDB: The Definitive Guide: Powerful and Scalable Data Storage', 2, 'Kristina', 'Chodorow', 2, 2013, 5, 26, 'O\'Reilly Media', 9781449344689, 34.02, 50),
('BOOK-ENGR-004', 'Advanced Programming in the UNIX Environment', 2, 'Richard', 'Stevens', 3, 2013, 5, 24, 'Addison-Wesley Professional', 9780321637734, 49.54, 33),
('BOOK-ENGR-005', 'The Linux Programming Interface: A Linux and UNIX System Programming Handbook', 2, 'Michael', 'Kerrisk', 1, 2010, 10, 28, 'No Starch Press', 9781593272203, 65.02, 22),
('BOOK-ENGR-006', 'Learning Python', 2, 'Mark', 'Lutz', 5, 2013, 7, 6, 'O\'Reilly Media', 9781449355739, 41.75, 39),
('BOOK-HIS-001', 'The Red Army and the Second World War', 3, 'Alexander', 'Hill', 1, 2017, 1, 31, 'Cambridge University Press', 9781107688155, 34.99, 25),
('BOOK-LIT-001', 'Harry Potter and the Sorcerer\'s Stone', 4, 'J.K.', 'Rowling', 1, 1999, 9, 8, 'Scholastic', 9780439708180, 6.91, 88),
('BOOK-LIT-002', 'The Scarlet Letter', 4, 'Nathaniel', 'Hawthorne', 1, 2015, 5, 7, 'CreateSpace Independent Publishing Platform', 9781512090567, 7.99, 5),
('BOOK-LIT-003', 'The Old Man and The Sea', 4, 'Ernest', 'Hemingway', 1, 1995, 5, 5, 'Scribner', 9780684801223, 5.64, 17),
('BOOK-LIT-004', 'Hamlet', 4, 'William', 'Shakespeare', 1, 2016, 10, 8, 'CreateSpace Independent Publishing Platform', 9781539404002, 4.59, 4),
('BOOK-LIT-005', 'Pride and Prejudice', 4, 'Jane', 'Austen', 1, 2014, 11, 29, 'CreateSpace Independent Publishing Platform', 9781503290563, 9.99, 76),
('BOOK-LIT-006', 'A Tale of Two Cities', 4, 'Charles', 'Dickens', 1, 2011, 6, 21, 'Dover Publications', 9780486475684, 6.92, 98),
('BOOK-SCI-001', '2010 Encyclopaedia Britannica Set', 5, 'Encyclopedia Britannica Editorial', '', 15, 2009, 6, 1, 'Encyclopaedia Britannica', 9781593398378, 5192.89, 69),
('BOOK-SCI-002', 'Campbell Biology', 5, 'Jane', 'Reece', 10, 2013, 11, 10, 'Pearson', 9780321775658, 229.61, 27),
('BOOK-SCI-003', 'General, Organic, and Biological Chemistry', 5, 'Laura', 'Frost', 3, 2016, 1, 17, 'Pearson', 9780134042428, 193.37, 15),
('BOOK-SCI-004', 'Calculus', 5, 'Ron', 'Larson', 10, 2013, 1, 1, 'Brooks Cole', 9781285057095, 306.80, 40),
('BOOK-SCI-005', 'College Geometry: A Problem Solving Approach with Applications', 5, 'Gary', 'Musser', 2, 2007, 3, 11, 'Pearson', 9780131879690, 148.75, 98);

-- --------------------------------------------------------

--
-- Table structure for table `BOOK_REPOSITORY_TB`
--

DROP TABLE IF EXISTS `BOOK_REPOSITORY_TB`;
CREATE TABLE `BOOK_REPOSITORY_TB` (
  `BOOK_ID` varchar(16) NOT NULL,
  `REPOSITORY_ID` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `BOOK_REPOSITORY_TB`
--

INSERT INTO `BOOK_REPOSITORY_TB` (`BOOK_ID`, `REPOSITORY_ID`) VALUES
('BOOK-ENGR-001', 'REPO-TYPE-002'),
('BOOK-ENGR-002', 'REPO-TYPE-003'),
('BOOK-ENGR-003', 'REPO-TYPE-001'),
('BOOK-ENGR-004', 'REPO-TYPE-002'),
('BOOK-ENGR-005', 'REPO-TYPE-003'),
('BOOK-ENGR-006', 'REPO-TYPE-001'),
('BOOK-HIS-001', 'REPO-TYPE-003'),
('BOOK-LIT-001', 'REPO-TYPE-004'),
('BOOK-LIT-002', 'REPO-TYPE-001'),
('BOOK-LIT-003', 'REPO-TYPE-004'),
('BOOK-LIT-004', 'REPO-TYPE-001'),
('BOOK-LIT-005', 'REPO-TYPE-004'),
('BOOK-LIT-006', 'REPO-TYPE-001'),
('BOOK-SCI-001', 'REPO-TYPE-003'),
('BOOK-SCI-002', 'REPO-TYPE-001'),
('BOOK-SCI-003', 'REPO-TYPE-005'),
('BOOK-SCI-004', 'REPO-TYPE-003'),
('BOOK-SCI-005', 'REPO-TYPE-001');

-- --------------------------------------------------------

--
-- Table structure for table `CONSUMER_BOOK_TB`
--

DROP TABLE IF EXISTS `CONSUMER_BOOK_TB`;
CREATE TABLE `CONSUMER_BOOK_TB` (
  `CONSUMER_ID` varchar(16) NOT NULL,
  `BOOK_ID` varchar(16) NOT NULL,
  `DATE_OF_BUY` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `CONSUMER_BOOK_TB`
--

INSERT INTO `CONSUMER_BOOK_TB` (`CONSUMER_ID`, `BOOK_ID`, `DATE_OF_BUY`) VALUES
('CHN-CONSUMER-001', 'BOOK-LIT-001', '2017-02-01'),
('CHN-CONSUMER-001', 'BOOK-HIS-001', '2017-01-15'),
('CHN-CONSUMER-001', 'BOOK-LIT-001', '2017-02-01'),
('CHN-CONSUMER-001', 'BOOK-LIT-005', '2017-02-01'),
('CHN-CONSUMER-001', 'BOOK-SCI-002', '2017-02-15'),
('CHN-CONSUMER-001', 'BOOK-SCI-003', '2017-02-15'),
('CHN-CONSUMER-001', 'BOOK-ENGR-004', '2017-01-27'),
('CHN-CONSUMER-001', 'BOOK-ENGR-001', '2017-01-27'),
('CHN-CONSUMER-001', 'BOOK-ENGR-002', '2017-01-27'),
('CHN-CONSUMER-001', 'BOOK-ENGR-005', '2017-01-27');

-- --------------------------------------------------------

--
-- Table structure for table `CONSUMER_INFO_TB`
--

DROP TABLE IF EXISTS `CONSUMER_INFO_TB`;
CREATE TABLE `CONSUMER_INFO_TB` (
  `CONSUMER_USERNAME` varchar(32) NOT NULL,
  `CONSUMER_PASSWORD` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `CONSUMER_ID` varchar(16) NOT NULL,
  `CONSUMER_FIRST_NAME` varchar(255) NOT NULL,
  `CONSUMER_LAST_NAME` varchar(255) NOT NULL,
  `CONSUMER_TYPE` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `CONSUMER_INFO_TB`
--

INSERT INTO `CONSUMER_INFO_TB` (`CONSUMER_USERNAME`, `CONSUMER_PASSWORD`, `CONSUMER_ID`, `CONSUMER_FIRST_NAME`, `CONSUMER_LAST_NAME`, `CONSUMER_TYPE`) VALUES
('MrFengShui', 'Who&LSJ2017', 'CHN-CONSUMER-001', 'Songjian', 'Luan', 5),
('genius', 'Slam1993Dunk', 'JP-CONSUMER-001', 'Hanamichi', 'Sakuragi', 3),
('KobeBryant', 'Passw0rd', 'US-CONSUMER-001', 'Kobe', 'Bryant', 4);

-- --------------------------------------------------------

--
-- Table structure for table `REPOSITORY_INFO_TB`
--

DROP TABLE IF EXISTS `REPOSITORY_INFO_TB`;
CREATE TABLE `REPOSITORY_INFO_TB` (
  `REPOSITORY_ID` varchar(16) NOT NULL,
  `REPOSITORY_ADDRESS_STREET` varchar(255) NOT NULL,
  `REPOSITORY_ADDRESS_NUMBER` smallint(4) NOT NULL,
  `REPOSITORY_PURPOSE` tinyint(1) NOT NULL,
  `REPOSITORY_GUARD_ID` varchar(16) NOT NULL,
  `REPOSITORY_VENDOR_ID` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `REPOSITORY_INFO_TB`
--

INSERT INTO `REPOSITORY_INFO_TB` (`REPOSITORY_ID`, `REPOSITORY_ADDRESS_STREET`, `REPOSITORY_ADDRESS_NUMBER`, `REPOSITORY_PURPOSE`, `REPOSITORY_GUARD_ID`, `REPOSITORY_VENDOR_ID`) VALUES
('REPO-TYPE-001', 'Jaffson Way', 2100, 4, 'REPO-STAFF-001', 'VEND-TYPE-004'),
('REPO-TYPE-002', 'King Blvd', 2200, 2, 'REPO-STAFF-002', 'VEND-TYPE-002'),
('REPO-TYPE-003', 'Washington Way', 2300, 3, 'REPO-STAFF-003', 'VEND-TYPE-001'),
('REPO-TYPE-004', 'Walnut Blvd', 2400, 1, 'REPO-STAFF-002', 'VEND-TYPE-003'),
('REPO-TYPE-005', 'Highland Dr', 2500, 5, 'REPO-STAFF-005', 'VEND-TYPE-005');

-- --------------------------------------------------------

--
-- Table structure for table `VENDOR_INFO_TB`
--

DROP TABLE IF EXISTS `VENDOR_INFO_TB`;
CREATE TABLE `VENDOR_INFO_TB` (
  `VENDOR_ID` varchar(16) NOT NULL,
  `VENDOR_NAME` varchar(255) NOT NULL,
  `VENDOR_ADDRESS_CITY` varchar(255) NOT NULL,
  `VENDOR_ADDRESS_STATE` varchar(255) NOT NULL,
  `VENDOR_ADDRESS_COUNTRY` varchar(255) NOT NULL,
  `VENDOR_PHONE` bigint(11) NOT NULL,
  `VENDOR_EMAIL` varchar(255) NOT NULL,
  `VENDOR_REPOSITORY_ID` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `VENDOR_INFO_TB`
--

INSERT INTO `VENDOR_INFO_TB` (`VENDOR_ID`, `VENDOR_NAME`, `VENDOR_ADDRESS_CITY`, `VENDOR_ADDRESS_STATE`, `VENDOR_ADDRESS_COUNTRY`, `VENDOR_PHONE`, `VENDOR_EMAIL`, `VENDOR_REPOSITORY_ID`) VALUES
('VEND-TYPE-001', 'The World Almanac', 'New York', 'New York', 'United States', 8003228755, 'CustServ@InfobaseLearning.com', 'REPO-TYPE-003'),
('VEND-TYPE-002', 'Mackin', 'Burnsville', 'Minnesota', 'United States', 9528959540, 'mackin@mackin.com', 'REPO-TYPE-002'),
('VEND-TYPE-003', 'Amazon', 'Seattle', 'Washington', 'United States', 8882804331, 'service@amazon.com', 'REPO-TYPE-004'),
('VEND-TYPE-004', 'MCGraw-Hill Education', 'Columbus', 'Ohio', 'United States', 8003383987, 'hep_customer-service@mheducation.com', 'REPO-TYPE-001'),
('VEND-TYPE-005', 'Capstone', 'Edina', 'Minnesota', 'United States', 8882620705, 'c.vogel@capstonepub.com', 'REPO-TYPE-005');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `BOOK_INFO_TB`
--
ALTER TABLE `BOOK_INFO_TB`
  ADD PRIMARY KEY (`BOOK_ID`),
  ADD UNIQUE KEY `BOOK_ID` (`BOOK_ID`),
  ADD KEY `BOOK_TYPE` (`BOOK_TYPE`);

--
-- Indexes for table `BOOK_REPOSITORY_TB`
--
ALTER TABLE `BOOK_REPOSITORY_TB`
  ADD KEY `BOOK_REPOSITORY_TB_ibfk_1` (`BOOK_ID`),
  ADD KEY `BOOK_REPOSITORY_TB_ibfk_2` (`REPOSITORY_ID`);

--
-- Indexes for table `CONSUMER_BOOK_TB`
--
ALTER TABLE `CONSUMER_BOOK_TB`
  ADD KEY `CONSUMER_ID` (`CONSUMER_ID`),
  ADD KEY `BOOK_ID` (`BOOK_ID`);

--
-- Indexes for table `CONSUMER_INFO_TB`
--
ALTER TABLE `CONSUMER_INFO_TB`
  ADD PRIMARY KEY (`CONSUMER_ID`),
  ADD UNIQUE KEY `CONSUMER_ID` (`CONSUMER_ID`);

--
-- Indexes for table `REPOSITORY_INFO_TB`
--
ALTER TABLE `REPOSITORY_INFO_TB`
  ADD PRIMARY KEY (`REPOSITORY_ID`),
  ADD UNIQUE KEY `REPO_ID` (`REPOSITORY_ID`),
  ADD UNIQUE KEY `REPOSITORY_ID` (`REPOSITORY_ID`);

--
-- Indexes for table `VENDOR_INFO_TB`
--
ALTER TABLE `VENDOR_INFO_TB`
  ADD PRIMARY KEY (`VENDOR_ID`),
  ADD UNIQUE KEY `VENDOR_ID` (`VENDOR_ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `BOOK_REPOSITORY_TB`
--
ALTER TABLE `BOOK_REPOSITORY_TB`
  ADD CONSTRAINT `BOOK_REPOSITORY_TB_ibfk_2` FOREIGN KEY (`REPOSITORY_ID`) REFERENCES `REPOSITORY_INFO_TB` (`REPOSITORY_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `BOOK_REPOSITORY_TB_ibfk_1` FOREIGN KEY (`BOOK_ID`) REFERENCES `BOOK_INFO_TB` (`BOOK_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `CONSUMER_BOOK_TB`
--
ALTER TABLE `CONSUMER_BOOK_TB`
  ADD CONSTRAINT `CONSUMER_BOOK_TB_ibfk_1` FOREIGN KEY (`CONSUMER_ID`) REFERENCES `CONSUMER_INFO_TB` (`CONSUMER_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `CONSUMER_BOOK_TB_ibfk_2` FOREIGN KEY (`BOOK_ID`) REFERENCES `BOOK_INFO_TB` (`BOOK_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
