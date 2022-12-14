-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2022 at 09:08 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gamingdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `AddressID` int(11) NOT NULL,
  `StreetNumber` int(11) NOT NULL,
  `StreetName` varchar(180) NOT NULL,
  `AddState` varchar(90) NOT NULL,
  `Country` varchar(60) NOT NULL,
  `Code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`AddressID`, `StreetNumber`, `StreetName`, `AddState`, `Country`, `Code`) VALUES
(1, 1, 'DEV Street 1', 'State 1', 'Country 1', 1111),
(2, 2, 'MAN Street 2', 'State 2', 'Country 2', 2222),
(3, 3, 'DEV Street 3', 'State 3', 'Country 3', 3333),
(4, 4, 'PUB Street 4', 'State 4', 'Country 4', 4444);

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `CompanyID` int(11) NOT NULL,
  `AddressID` int(11) NOT NULL,
  `CompanyName` varchar(50) NOT NULL,
  `CompanyProfile` text NOT NULL,
  `Founded` int(11) NOT NULL,
  `CurrentLogo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`CompanyID`, `AddressID`, `CompanyName`, `CompanyProfile`, `Founded`, `CurrentLogo`) VALUES
(1, 1, 'Sony', 'Sony Group Corporation (ソニーグループ株式会社, Sonī Gurūpu kabushiki gaisha, /ˈsoʊni/ SOH-nee), commonly stylized as SONY, is a Japanese multinational conglomerate corporation headquartered in Minato, Tokyo, Japan.[7] As a major technology company, it operates as one of the world\'s largest manufacturers of consumer and professional electronic products, the largest video game console company and the largest video game publisher. Through Sony Entertainment Inc, it is one of the largest music companies (largest music publisher and second largest record label) and the third largest film studio, making it one of the most comprehensive media companies. It is the largest technology and media conglomerate in Japan. It is also recognized as the most cash-rich Japanese company, with net cash reserves of ¥2 trillion.[8][9][10][11]\n\nSony, with its 55 percent market share in the image sensor market, is the largest manufacturer of image sensors, the second largest camera manufacturer, and is among the semiconductor sales leaders.[12][11][13] It is the world\'s largest player in the premium TV market for a television of at least 55 inches (140 centimeters) with a price higher than $2,500 as well as second largest TV brand by market share and, as of 2020, the third largest television manufacturer in the world by annual sales figures.[14][15][16][17]\n\nSony Group Corporation is the holding company of the Sony Group (ソニー・グループ, Sonī Gurūpu), which comprises Sony Corporation, Sony Semiconductor Solutions, Sony Entertainment (Sony Pictures, Sony Music), Sony Interactive Entertainment, Sony Financial Group, Sony Creative Products, and others.\n\nThe company\'s slogan is We are Sony.[18] Their former slogans were The One and Only (1979–1982), It\'s a Sony (1981–2005), like.no.other (2005–2009),[19] make.believe (2009–2013),[20] and Be Moved (2013–2021).\n\nSony has a weak tie to the Sumitomo Mitsui Financial Group (SMFG) corporate group, the successor to the Mitsui keiretsu.[21] Sony is listed on the Tokyo Stock Exchange (in which it is a constituent of the Nikkei 225 and TOPIX Core30 indexes) with an additional listing in the form of American depositary receipts listed in the New York Stock Exchange (traded since 1970, making it the oldest Japanese company to be listed in an American exchange), and was ranked 88th on the 2021 Fortune Global 500 list.[22]', 1946, 'https://logos-download.com/wp-content/uploads/2016/02/Sony_logo_current.png'),
(2, 2, 'Foxconn', 'Hon Hai Precision Industry Co., Ltd., trading as Hon Hai Technology Group in China and Taiwan and Foxconn internationally, is a Taiwanese multinational electronics contract manufacturer established in 1974 with headquarters in Tucheng, New Taipei City, Taiwan. In 2021, the company\'s annual revenue reached 5.99 trillion New Taiwan dollars (US$175 billion) and was ranked 20th in the 2022 Fortune Global 500. It is the world\'s largest technology manufacturer and service provider. While headquartered in Taiwan, the company is the largest private employer in the People\'s Republic of China and one of the largest employers worldwide.[3][4] Terry Gou is the company founder and former chairman.\r\n\r\nFoxconn manufactures electronic products for major American, Canadian, Chinese, Finnish, and Japanese companies. Notable products manufactured by Foxconn include the BlackBerry,[5] iPad,[6] iPhone, iPod,[7] Kindle,[8] all Nintendo gaming systems since the GameCube (except subsequent Nintendo DS models), Nokia devices, Sony devices (including the PlayStation 3 and PlayStation 4 gaming consoles), Google Pixel devices, Xiaomi devices, every successor to Microsoft\'s first Xbox console,[9] and several CPU sockets, including the TR4 CPU socket on some motherboards. As of 2012, Foxconn factories manufactured an estimated 40% of all consumer electronics sold worldwide.[10]\r\n\r\nFoxconn named Young Liu its new chairman after the retirement of founder Terry Gou, effective on 1 July 2019. Young Liu was the special assistant to former chairman Terry Gou and the head of business group S (semiconductor). Analysts said the handover signals the company\'s future direction, underscoring the importance of semiconductors, together with technologies like artificial intelligence, robotics, and autonomous driving, after Foxconn\'s traditional major business of smartphone assembly has matured.[11]', 1974, 'https://bit.ly/3UzEOjI'),
(3, 3, 'Santa Monica Studio', 'Santa Monica Studio is an American video game developer based in Los Angeles. A first-party studio for Sony Interactive Entertainment, it is best known for developing the God of War series. The studio was founded in 1999 by Allan Becker and was located in Santa Monica, California, until relocating to Playa Vista in 2014.', 1999, 'https://bit.ly/3F0vrno'),
(4, 4, 'Publishing Publisher', 'This is the main publisher', 4444, 'link to image'),
(5, 1, 'NewPublisher', 'This is the newpublisher', 5555, 'link to image'),
(6, 4, 'What The Pub!?!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 4444, 'link to image'),
(7, 4, 'Nintendo', 'Nintendo Co., Ltd.[b] is a Japanese multinational video game company headquartered in Kyoto, Japan. It develops video games and video game consoles.\r\n\r\nNintendo was founded in 1889 as Nintendo Karuta[c] by craftsman Fusajiro Yamauchi and originally produced handmade hanafuda playing cards. After venturing into various lines of business during the 1960s and acquiring a legal status as a public company, Nintendo distributed its first console, the Color TV-Game, in 1977. It gained international recognition with the release of Donkey Kong in 1981 and the Nintendo Entertainment System and Super Mario Bros. in 1985.\r\n\r\nSince then, Nintendo has produced some of the most successful consoles in the video game industry, such as the Game Boy, the Super Nintendo Entertainment System, the Nintendo DS, the Wii, and the Switch. It has created numerous major franchises, including Mario, Donkey Kong, The Legend of Zelda, Pokémon, Kirby, Metroid, Fire Emblem, Animal Crossing, Splatoon, Star Fox, Xenoblade Chronicles, and Super Smash Bros. Nintendo\'s mascot, Mario, is internationally recognized. The company has sold more than 5.4 billion video games and over 800 million hardware units globally as of 2022.\r\n\r\nNintendo has multiple subsidiaries in Japan and abroad, in addition to business partners such as the Pokémon Company and HAL Laboratory. Nintendo and its staff have received awards including Emmy Awards for Technology & Engineering, Game Awards, Game Developers Choice Awards, and British Academy Games Awards. It is one of the wealthiest and most valuable companies in the Japanese market.', 1889, 'https://bit.ly/3iEMnIK'),
(8, 4, 'Sega', 'Sega Corporation[a] is a Japanese multinational video game and entertainment company headquartered in Shinagawa, Tokyo. Its international branches, Sega of America and Sega Europe, are headquartered in Irvine, California and London, respectively. Its division for the development of both arcade games and home video games, Sega Games, has existed in its current state since 2020; from 2015 to that point, the two had made up separate entities known as Sega Games and Sega Interactive Co., Ltd. Sega is a subsidiary of Sega Sammy Holdings. From 1983 until 2001, Sega also developed video game consoles.\r\n\r\nSega was founded by American businessmen Martin Bromley and Richard Stewart as Nihon Goraku Bussan[b] on June 3, 1960; shortly after, the company acquired the assets of its predecessor, Service Games of Japan. Five years later, the company became known as Sega Enterprises, Ltd., after acquiring Rosen Enterprises, an importer of coin-operated games. Sega developed its first coin-operated game, Periscope, in 1966. Sega was sold to Gulf and Western Industries in 1969. Following a downturn in the arcade business in the early 1980s, Sega began to develop video game consoles, starting with the SG-1000 and Master System, but struggled against competitors such as the Nintendo Entertainment System. In 1984, Sega executives David Rosen and Hayao Nakayama led a management buyout, with backing from CSK Corporation.\r\n\r\nSega released its next console, the Sega Genesis (known as the Mega Drive outside North America), in 1988. The Genesis struggled against the competition in Japan, but found success overseas after the release of Sonic the Hedgehog in 1991 and briefly outsold its main competitor, the Super Nintendo Entertainment System, in the U.S. Later in the decade, Sega suffered several commercial failures such as the 32X, Saturn and Dreamcast consoles. In 2001, Sega stopped manufacturing consoles to become a third-party developer and publisher, and was acquired by Sammy Corporation in 2004. In the years since, Sega has been more profitable. Sega Holdings Co. Ltd. was established in 2015; Sega Corporation was renamed Sega Games Co., Ltd., and its arcade, entertainment and toy divisions separated into other companies. In 2020, Sega Games and Sega Interactive merged and were renamed Sega Corporation.\r\n\r\nSega has produced several multi-million-selling game franchises, including Sonic the Hedgehog, Total War and Yakuza. Sonic, Sega\'s mascot, is internationally recognized. Sega is one of the world\'s most prolific arcade game producers, with long-running series such as Virtua Fighter and Initial D Arcade Stage. Its name and branding are used for affiliated companies that operate amusement arcades and produce other entertainment products, including Sega Toys; however, these are largely separate ventures. Sega is recognized for its video game consoles, creativity and innovations. In more recent years, it has been criticized for its business decisions and the quality of its creative output.', 1960, 'https://upload.wikimedia.org/wikipedia/commons/1/13/SEGA_logo.svg');

-- --------------------------------------------------------

--
-- Table structure for table `game`
--

CREATE TABLE `game` (
  `GameID` int(11) NOT NULL,
  `PlatformID` int(11) NOT NULL,
  `DeveloperID` int(11) NOT NULL,
  `GamePublisherID` int(11) NOT NULL,
  `GameName` varchar(150) NOT NULL,
  `GameGenre` varchar(150) NOT NULL,
  `GameProfile` text NOT NULL,
  `NumberShipped` int(11) NOT NULL,
  `FirstReleased` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `game`
--

INSERT INTO `game` (`GameID`, `PlatformID`, `DeveloperID`, `GamePublisherID`, `GameName`, `GameGenre`, `GameProfile`, `NumberShipped`, `FirstReleased`) VALUES
(1, 1, 2, 3, 'GameName', 'Genre', 'This is the profile for a game', 111, '1111-01-11');

-- --------------------------------------------------------

--
-- Table structure for table `peripheral`
--

CREATE TABLE `peripheral` (
  `PeripheralID` int(11) NOT NULL,
  `ManufacturerID` int(11) NOT NULL,
  `PlatformID` int(11) NOT NULL,
  `GameID` int(11) NOT NULL,
  `PeripheralName` varchar(150) NOT NULL,
  `PeripheralType` varchar(150) NOT NULL,
  `PeripheralProfile` text NOT NULL,
  `NumberShipped` int(11) NOT NULL,
  `FirstReleased` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `peripheral`
--

INSERT INTO `peripheral` (`PeripheralID`, `ManufacturerID`, `PlatformID`, `GameID`, `PeripheralName`, `PeripheralType`, `PeripheralProfile`, `NumberShipped`, `FirstReleased`) VALUES
(1, 1, 1, 1, 'Keyboard', 'Keyboard', 'This is the profile for the keyboard', 1, '1111-01-11');

-- --------------------------------------------------------

--
-- Table structure for table `platform`
--

CREATE TABLE `platform` (
  `PlatformID` int(11) NOT NULL,
  `CompanyID` int(11) NOT NULL,
  `ManufacturerID` int(11) NOT NULL,
  `PlatformName` varchar(150) NOT NULL,
  `PlatformModel` varchar(150) NOT NULL,
  `PlatformFamily` varchar(150) NOT NULL,
  `PlatformLogo` text NOT NULL,
  `NumberShipped` int(11) NOT NULL,
  `FirstReleased` date NOT NULL,
  `PlatformProfile` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `platform`
--

INSERT INTO `platform` (`PlatformID`, `CompanyID`, `ManufacturerID`, `PlatformName`, `PlatformModel`, `PlatformFamily`, `PlatformLogo`, `NumberShipped`, `FirstReleased`, `PlatformProfile`) VALUES
(1, 1, 1, 'Playstation 3', 'Model 3.2', 'Playstation', 'https://bit.ly/3VC3Vnc', 1, '1111-01-11', 'This is the profile for a playstation.'),
(2, 2, 3, 'NewConole', 'Model A', 'Nintendo', 'NintendoLogo', 123, '1111-01-11', 'This is the profile for a nintendo.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`AddressID`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`CompanyID`),
  ADD KEY `FK_Address` (`AddressID`);

--
-- Indexes for table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`GameID`),
  ADD KEY `FK_PlatformID` (`PlatformID`),
  ADD KEY `FK_Developer` (`DeveloperID`),
  ADD KEY `FK_GamePublisher` (`GamePublisherID`);

--
-- Indexes for table `peripheral`
--
ALTER TABLE `peripheral`
  ADD PRIMARY KEY (`PeripheralID`),
  ADD KEY `FK_Manufacter` (`ManufacturerID`),
  ADD KEY `FK_Platform` (`PlatformID`);

--
-- Indexes for table `platform`
--
ALTER TABLE `platform`
  ADD PRIMARY KEY (`PlatformID`),
  ADD KEY `FK_Company` (`CompanyID`),
  ADD KEY `FK_Manufacturer` (`ManufacturerID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `AddressID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `CompanyID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `game`
--
ALTER TABLE `game`
  MODIFY `GameID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `peripheral`
--
ALTER TABLE `peripheral`
  MODIFY `PeripheralID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `platform`
--
ALTER TABLE `platform`
  MODIFY `PlatformID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `company`
--
ALTER TABLE `company`
  ADD CONSTRAINT `FK_Address` FOREIGN KEY (`AddressID`) REFERENCES `address` (`AddressID`) ON DELETE CASCADE;

--
-- Constraints for table `game`
--
ALTER TABLE `game`
  ADD CONSTRAINT `FK_Developer` FOREIGN KEY (`DeveloperID`) REFERENCES `company` (`CompanyID`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_GamePublisher` FOREIGN KEY (`GamePublisherID`) REFERENCES `company` (`CompanyID`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_PlatformID` FOREIGN KEY (`PlatformID`) REFERENCES `platform` (`PlatformID`) ON DELETE CASCADE;

--
-- Constraints for table `peripheral`
--
ALTER TABLE `peripheral`
  ADD CONSTRAINT `FK_Manufacter` FOREIGN KEY (`ManufacturerID`) REFERENCES `company` (`CompanyID`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_Platform` FOREIGN KEY (`PlatformID`) REFERENCES `company` (`CompanyID`) ON DELETE CASCADE;

--
-- Constraints for table `platform`
--
ALTER TABLE `platform`
  ADD CONSTRAINT `FK_Company` FOREIGN KEY (`CompanyID`) REFERENCES `company` (`CompanyID`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_Manufacturer` FOREIGN KEY (`ManufacturerID`) REFERENCES `company` (`CompanyID`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
