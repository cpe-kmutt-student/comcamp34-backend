/*
 Navicat Premium Data Transfer

 Source Server         : localhost_mysql
 Source Server Type    : MySQL
 Source Server Version : 100421 (10.4.21-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : comcamp

 Target Server Type    : MySQL
 Target Server Version : 100421 (10.4.21-MariaDB)
 File Encoding         : 65001

 Date: 25/01/2023 00:00:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for file
-- ----------------------------
DROP TABLE IF EXISTS `file`;
CREATE TABLE `file`  (
  `id` int NOT NULL,
  `user_id` int NULL DEFAULT NULL,
  `agreement` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'หนังสือขออนุญาตผู้ปกครอง',
  `card` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'สำเนาบัตรประจำตัวประชาชนหรือสำเนาบัตรนักเรียนของผู้สมัคร',
  `student_certificate` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'เอกสารรับรองความเป็นนักเรียนหรือเอกสารรับรองผลการศึกษา (ปพ.7)',
  `gpax_paper` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'ระเบียนแสดงผลการศึกษาของระดับชั้นมัธยมศึกษาตอนปลาย (ปพ.1) หรือหนังสือแสดงผลการเรียนภาคการศึกษาล่าสุด',
  `parent_card` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'สำเนาบัตรประจำตัวประชาชนของผู้ปกครองที่ให้การรับรองในหนังสือขออนุญาตผู้ปกครอง',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `file_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `register_data` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for question
-- ----------------------------
DROP TABLE IF EXISTS `question`;
CREATE TABLE `question`  (
  `id` int NOT NULL,
  `user_id` int NULL DEFAULT NULL,
  `q1` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `q2` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `q3` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `q4` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `q5` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `q6` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `q7` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `q8` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `q9` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `q10` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `q11` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `question_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `register_data` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for register_data
-- ----------------------------
DROP TABLE IF EXISTS `register_data`;
CREATE TABLE `register_data`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `google_token` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'google_token json_token',
  `pname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'คำนำหน้าชื่อ',
  `fname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'ชื่อ',
  `mname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'ชื่อกลาง',
  `sname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'นามสกุล',
  `nickname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'ชื่อเล่น',
  `dob` date NULL DEFAULT NULL COMMENT 'วันเดือนปีเกิด',
  `mobile` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'เบอร์โทร',
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'อีเมล',
  `province` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'จังหวัด ??? ต้องทำ relation มั้ย',
  `travelby` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'หากได้รับการคัดเลือก เดินทางมาโดย',
  `shirt_size` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'ขนาดเสื้อ (ไม่มั่นใจว่าจะเก็บเป็นตัวอักษร หรือ เบอร์เสื้อ',
  `notebook` tinyint NULL DEFAULT NULL COMMENT 'สะดวกนำโน๊ตบุ๊คมามั้ย',
  `allergic_food` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'อาหารที่แพ้',
  `special` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'อาหารที่ต้องการพิเศษ เช่น ฮาลาล',
  `underlying` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'โรคประจำตัว',
  `medicine` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'ยาประจำตัว',
  `allergic_medicine` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'ยาที่แพ้',
  `parent_pname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'คำนำหน้าชื่อ ผปค',
  `parent_fname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'ชิ้อ ผปค',
  `parent_mname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'ชื่อกลาง ผปค',
  `parent_sname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'นามสกุล ผปค',
  `parent_mobile` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'เบอร์โทร ผปค',
  `parent_email` varchar(48) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'อีเมล ผปค',
  `school_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'ชื่อสถานศึกษาปัจจุบัน',
  `school_province` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'จังหวัด',
  `study_plan` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'แผนการเรียน',
  `student_level` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'ระดับการศึกษา (ปีการศึกษา 2565)',
  `gpax` float NULL DEFAULT NULL COMMENT 'เกรดเฉลี่ย',
  `university_1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'มหาวิทยาลัย ',
  `university_2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `university_3` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `faculty_1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'คณะ ',
  `faculty_2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `faculty_3` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `department_1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'ภาควิชา/สาขา',
  `department_2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `department_3` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `department_interest` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'หากน้อง ๆ มีความสนใจที่จะเข้าศึกษาต่อในภาควิชาวิศวกรรมคอมพิวเตอร์มจธ. น้อง ๆ จะเลือกเรียนหลักสูตรใด เพราะเหตุใด\r\n',
  `comcamp_pass` tinyint NULL DEFAULT NULL COMMENT 'เคยเข้าร่วมค่ายคอมแคมป์มาก่อนหรือไม่ (ติ๊กเลือก)',
  `camp_1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'ชื่อค่าย | ไม่มี \"-\"',
  `camp_2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `university_made_1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'จัดโดยมหาลัยไหน | ไม่มี \"-\"',
  `university_made_2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

SET FOREIGN_KEY_CHECKS = 1;
