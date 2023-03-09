-- CreateTable
CREATE TABLE `Whitelist` (
    `uid` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Whitelist_uid_key`(`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Confirmation` (
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

    UNIQUE INDEX `Confirmation_uid_key`(`uid`),
    INDEX `uid`(`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Examination` (
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

    UNIQUE INDEX `Examination_uid_key`(`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Confirmation` ADD CONSTRAINT `Confirmation_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `Whitelist`(`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Examination` ADD CONSTRAINT `Examination_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `Whitelist`(`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT;
