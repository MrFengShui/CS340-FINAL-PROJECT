-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 01, 2017 at 04:30 AM
-- Server version: 5.7.16-log
-- PHP Version: 7.1.1

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
-- Table structure for table `book_info_tb`
--

CREATE TABLE `book_info_tb` (
  `BOOK_ID` varchar(8) CHARACTER SET latin1 NOT NULL,
  `BOOK_NAME` varchar(255) CHARACTER SET latin1 NOT NULL,
  `BOOK_TYPE` tinyint(1) NOT NULL DEFAULT '0',
  `BOOK_AUTHOR_FIRST_NAME` varchar(255) CHARACTER SET latin1 NOT NULL,
  `BOOK_AUTHOR_LAST_NAME` varchar(255) NOT NULL,
  `BOOK_EDITION` tinyint(1) NOT NULL DEFAULT '1',
  `BOOK_PUBLISH_YEAR` smallint(4) NOT NULL,
  `BOOK_PUBLISH_MONTH` tinyint(2) NOT NULL,
  `BOOK_PUBLISH_DATE` tinyint(2) DEFAULT NULL,
  `BOOK_PUBLISH_PRESS` varchar(255) CHARACTER SET latin1 NOT NULL,
  `BOOK_ISBN` bigint(13) NOT NULL,
  `BOOK_PRICE` float(6,2) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `book_info_tb`
--

INSERT INTO `book_info_tb` (`BOOK_ID`, `BOOK_NAME`, `BOOK_TYPE`, `BOOK_AUTHOR_FIRST_NAME`, `BOOK_AUTHOR_LAST_NAME`, `BOOK_EDITION`, `BOOK_PUBLISH_YEAR`, `BOOK_PUBLISH_MONTH`, `BOOK_PUBLISH_DATE`, `BOOK_PUBLISH_PRESS`, `BOOK_ISBN`, `BOOK_PRICE`) VALUES
('ENGR-001', 'Learn JavaFX 8: Building User Experience and Interfaces with Java 8', 2, 'Kishori', 'Sharan', 1, 2015, 3, 18, 'Apress', 9781484211434, 59.99),
('ENGR-002', 'Absolute C++', 2, 'Walter', 'Savitch', 6, 2015, 3, 14, 'Pearson', 9780133970784, 148.52),
('ENGR-003', 'MongoDB: The Definitive Guide: Powerful and Scalable Data Storage', 2, 'Kristina', 'Chodorow', 2, 2013, 5, 26, 'O\'Reilly Media', 9781449344689, 34.02),
('ENGR-004', 'Advanced Programming in the UNIX Environment', 2, 'Richard', 'Stevens', 3, 2013, 5, 24, 'Addison-Wesley Professional', 9780321637734, 49.54),
('ENGR-005', 'The Linux Programming Interface: A Linux and UNIX System Programming Handbook', 2, 'Michael', 'Kerrisk', 1, 2010, 10, 28, 'No Starch Press', 9781593272203, 65.02),
('ENGR-006', 'Learning Python', 2, 'Mark', 'Lutz', 5, 2013, 7, 6, 'O\'Reilly Media', 9781449355739, 41.75),
('LIT-001', 'Harry Potter and the Sorcerer\'s Stone', 4, 'J.K.', 'Rowling', 1, 1999, 9, 8, 'Scholastic', 9780439708180, 6.91),
('LIT-002', 'The Scarlet Letter', 4, 'Nathaniel', 'Hawthorne', 1, 2015, 5, 7, 'CreateSpace Independent Publishing Platform', 9781512090567, 7.99),
('LIT-003', 'The Old Man and The Sea', 4, 'Ernest', 'Hemingway', 1, 1995, 5, 5, 'Scribner', 9780684801223, 5.64),
('LIT-004', 'Hamlet', 4, 'William', 'Shakespeare', 1, 2016, 10, 8, 'CreateSpace Independent Publishing Platform', 9781539404002, 4.59),
('LIT-005', 'Pride and Prejudice', 4, 'Jane', 'Austen', 1, 2014, 11, 29, 'CreateSpace Independent Publishing Platform', 9781503290563, 9.99),
('LIT-006', 'A Tale of Two Cities', 4, 'Charles', 'Dickens', 1, 2011, 6, 21, 'Dover Publications', 9780486475684, 6.92),
('HIS-001', 'The Red Army and the Second World War', 3, 'Alexander', 'Hill', 1, 2017, 1, 31, 'Cambridge University Press', 9781107688155, 34.99),
('SCI-001', '2010 Encyclopaedia Britannica Set', 5, 'Encyclopedia Britannica Editorial', '', 15, 2009, 6, 1, 'Encyclopaedia Britannica', 9781593398378, 5192.89),
('SCI-002', 'Campbell Biology', 5, 'Jane', 'Reece', 10, 2013, 11, 10, 'Pearson', 9780321775658, 229.61),
('SCI-003', 'General, Organic, and Biological Chemistry', 5, 'Laura', 'Frost', 3, 2016, 1, 17, 'Pearson', 9780134042428, 193.37),
('SCI-004', 'Calculus', 5, 'Ron', 'Larson', 10, 2013, 1, 1, 'Brooks Cole', 9781285057095, 306.80),
('SCI-005', 'College Geometry: A Problem Solving Approach with Applications', 5, 'Gary', 'Musser', 2, 2007, 3, 11, 'Pearson', 9780131879690, 148.75);

-- --------------------------------------------------------

--
-- Table structure for table `consumer_info_tb`
--

CREATE TABLE `consumer_info_tb` (
  `CONSUMER_USERNAME` varchar(16) NOT NULL,
  `CONSUMER_PASSWORD` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `CONSUMER_ID` int(9) NOT NULL,
  `CONSUMER_FIRST_NAME` varchar(255) NOT NULL,
  `CONSUMER_LAST_NAME` varchar(255) NOT NULL,
  `COMSUMER_TYPE` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `consumer_info_tb`
--

INSERT INTO `consumer_info_tb` (`CONSUMER_USERNAME`, `CONSUMER_PASSWORD`, `CONSUMER_ID`, `CONSUMER_FIRST_NAME`, `CONSUMER_LAST_NAME`, `COMSUMER_TYPE`) VALUES
('MrFengShui', 'Who&LSJ2017', 932223500, 'Songjian', 'Luan', 5),
('genius', 'Slam1993Dunk', 199304010, 'Hanamichi', 'Sakuragi', 3);

-- --------------------------------------------------------

--
-- Table structure for table `repository_info_tb`
--

CREATE TABLE `repository_info_tb` (
  `REPOSITORY_ID` varchar(8) NOT NULL,
  `REPOSITORY_ADDRESS` varchar(255) NOT NULL,
  `REPOSITORY_FLOOR` tinyint(1) NOT NULL,
  `REPOSITORY_GUARD` varchar(255) NOT NULL,
  `REPOSITORY_BOOK_ID` varchar(8) NOT NULL,
  `REPOSITORY_BOOK_QUANTITY` smallint(4) NOT NULL,
  `REPOSITORY_VENDOR_ID` varchar(12) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `vender_info_tb`
--

CREATE TABLE `vender_info_tb` (
  `VENDOR_ID` varchar(12) NOT NULL,
  `VENDOR_NAME` varchar(255) NOT NULL,
  `VENDOR_ADDRESS` varchar(255) NOT NULL,
  `VENDOR_PHONE` int(11) NOT NULL,
  `VENDOR_EMAIL` varchar(255) NOT NULL,
  `VENDOR_BOOK_TYPE` tinyint(1) NOT NULL,
  `VENDOR_REPOSITORY_ID` varchar(8) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book_info_tb`
--
ALTER TABLE `book_info_tb`
  ADD PRIMARY KEY (`BOOK_ID`),
  ADD UNIQUE KEY `BOOK_ID` (`BOOK_ID`),
  ADD KEY `BOOK_TYPE` (`BOOK_TYPE`);

--
-- Indexes for table `consumer_info_tb`
--
ALTER TABLE `consumer_info_tb`
  ADD PRIMARY KEY (`CONSUMER_ID`),
  ADD UNIQUE KEY `CONSUMER_ID` (`CONSUMER_ID`);

--
-- Indexes for table `repository_info_tb`
--
ALTER TABLE `repository_info_tb`
  ADD PRIMARY KEY (`REPOSITORY_ID`),
  ADD UNIQUE KEY `REPO_ID` (`REPOSITORY_ID`),
  ADD KEY `REPO_BOOK_ID` (`REPOSITORY_BOOK_ID`);

--
-- Indexes for table `vender_info_tb`
--
ALTER TABLE `vender_info_tb`
  ADD PRIMARY KEY (`VENDOR_ID`),
  ADD UNIQUE KEY `VENDOR_ID` (`VENDOR_ID`),
  ADD KEY `VENDOR_BOOK_TYPE` (`VENDOR_BOOK_TYPE`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `consumer_info_tb`
--
ALTER TABLE `consumer_info_tb`
  MODIFY `CONSUMER_ID` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=932223501;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
