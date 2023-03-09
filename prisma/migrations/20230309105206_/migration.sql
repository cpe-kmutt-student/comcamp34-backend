/*
  Warnings:

  - You are about to drop the `Confirmation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Examination` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Whitelist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Confirmation` DROP FOREIGN KEY `Confirmation_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Examination` DROP FOREIGN KEY `Examination_ibfk_1`;

-- DropTable
DROP TABLE `Confirmation`;

-- DropTable
DROP TABLE `Examination`;

-- DropTable
DROP TABLE `Whitelist`;

-- CreateTable
CREATE TABLE `whitelist` (
    `uid` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `whitelist_uid_key`(`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `confirmation` (
    `uid` VARCHAR(255) NOT NULL,
    `isConfirm` BOOLEAN NOT NULL DEFAULT true,
    `shirt_size` VARCHAR(16) NULL,
    `describeTravel` TEXT NULL,
    `describeBackhome` TEXT NULL,
    `transaction_Name` TEXT NULL,
    `transaction_URL` TEXT NULL,
    `transaction_date` VARCHAR(20) NULL,
    `transaction_hours` VARCHAR(4) NULL,
    `transaction_minutes` VARCHAR(4) NULL,
    `is_completed` BOOLEAN NULL DEFAULT false,
    `submited_at` DATETIME(3) NULL,

    UNIQUE INDEX `confirmation_uid_key`(`uid`),
    INDEX `uid`(`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `examination` (
    `uid` VARCHAR(255) NOT NULL,
    `q1_1` VARCHAR(4) NULL,
    `reason_q1_1` TEXT NULL,
    `q1_2` VARCHAR(4) NULL,
    `reason_q1_2` TEXT NULL,
    `q1_3` VARCHAR(4) NULL,
    `reason_q1_3` TEXT NULL,
    `q2_1` VARCHAR(4) NULL,
    `q2_2` VARCHAR(4) NULL,
    `q2_3` VARCHAR(4) NULL,
    `q3_1` VARCHAR(255) NULL,
    `q3_2` VARCHAR(255) NULL,
    `q4_1` VARCHAR(255) NULL,
    `q4_2` VARCHAR(255) NULL,
    `q5_1` VARCHAR(4) NULL,
    `q5_2` VARCHAR(4) NULL,
    `q5_3` VARCHAR(4) NULL,

    UNIQUE INDEX `examination_uid_key`(`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `confirmation` ADD CONSTRAINT `Confirmation_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `whitelist`(`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `examination` ADD CONSTRAINT `Examination_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `whitelist`(`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT;
