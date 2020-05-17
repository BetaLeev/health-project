/*
 Navicat Premium Data Transfer

 Source Server         : healthServer
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : health

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 17/05/2020 19:58:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for info
-- ----------------------------
DROP TABLE IF EXISTS `info`;
CREATE TABLE `info` (
  `healthid` int NOT NULL AUTO_INCREMENT,
  `touyun` varchar(255) DEFAULT NULL,
  `fare` varchar(255) DEFAULT NULL,
  `ganmao` varchar(255) DEFAULT NULL,
  `date` datetime(6) NOT NULL,
  PRIMARY KEY (`healthid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of info
-- ----------------------------
BEGIN;
INSERT INTO `info` VALUES (1, '不头晕', '不发热', '不感冒', '2020-05-16 00:00:00.000000');
INSERT INTO `info` VALUES (2, '不头晕', '不发热', '不感冒', '2020-05-14 00:00:00.000000');
INSERT INTO `info` VALUES (3, '不头晕', '不发热', '不感冒', '2020-05-16 23:08:04.035000');
INSERT INTO `info` VALUES (4, '不头晕', '不发热', '不感冒', '2020-05-16 23:11:26.050000');
COMMIT;

-- ----------------------------
-- Table structure for sport
-- ----------------------------
DROP TABLE IF EXISTS `sport`;
CREATE TABLE `sport` (
  `run` varchar(255) DEFAULT NULL,
  `walk` varchar(255) DEFAULT NULL,
  `other` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sport
-- ----------------------------
BEGIN;
INSERT INTO `sport` VALUES ('30分钟', '20分钟', '跳绳10分钟', 1, '2020-05-16 00:00:00');
INSERT INTO `sport` VALUES ('跑步2小时', '走路13分钟', '打球3小时', 7, '2020-05-17 09:10:11');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
