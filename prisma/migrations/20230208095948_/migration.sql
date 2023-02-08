-- CreateTable
CREATE TABLE `file` (
    `uid` VARCHAR(255) NOT NULL,
    `agreement` TEXT NULL,
    `card` TEXT NULL,
    `student_certificate` TEXT NULL,
    `gpax_paper` TEXT NULL,
    `parent_card` TEXT NULL,

    UNIQUE INDEX `file_uid_key`(`uid`),
    INDEX `uid`(`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question` (
    `uid` VARCHAR(255) NOT NULL,
    `q1` TEXT NULL,
    `q2` TEXT NULL,
    `q3` TEXT NULL,
    `q4` TEXT NULL,
    `q5` TEXT NULL,
    `q6` TEXT NULL,
    `q7` TEXT NULL,
    `q8` TEXT NULL,
    `q9` TEXT NULL,
    `q10` TEXT NULL,
    `q11` TEXT NULL,

    UNIQUE INDEX `question_uid_key`(`uid`),
    INDEX `uid`(`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `register_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uid` VARCHAR(255) NULL,
    `prefix` VARCHAR(50) NULL,
    `firstname` VARCHAR(50) NULL,
    `middlename` VARCHAR(50) NULL,
    `surname` VARCHAR(50) NULL,
    `nickname` VARCHAR(50) NULL,
    `birth_date` DATE NULL,
    `mobile` VARCHAR(20) NULL,
    `email` VARCHAR(50) NULL,
    `province` VARCHAR(255) NULL,
    `travelby` VARCHAR(255) NULL,
    `shirt_size` VARCHAR(10) NULL,
    `notebook` TINYINT NULL,
    `allergic_food` VARCHAR(255) NULL,
    `special` VARCHAR(255) NULL,
    `underlying` VARCHAR(255) NULL,
    `medicine` VARCHAR(255) NULL,
    `allergic_medicine` VARCHAR(255) NULL,
    `parent_prefix` VARCHAR(50) NULL,
    `parent_firstname` VARCHAR(50) NULL,
    `parent_middlename` VARCHAR(50) NULL,
    `parent_surname` VARCHAR(50) NULL,
    `parent_relation` VARCHAR(50) NULL,
    `parent_mobile` VARCHAR(20) NULL,
    `parent_email` VARCHAR(48) NULL,
    `emergency_prefix` VARCHAR(50) NULL,
    `emergency_firstname` VARCHAR(50) NULL,
    `emergency_middlename` VARCHAR(50) NULL,
    `emergency_surname` VARCHAR(50) NULL,
    `emergency_relation` VARCHAR(50) NULL,
    `emergency_mobile` VARCHAR(20) NULL,
    `emergency_email` VARCHAR(48) NULL,
    `school_name` VARCHAR(255) NULL,
    `school_province` VARCHAR(255) NULL,
    `study_plan` VARCHAR(255) NULL,
    `student_level` VARCHAR(255) NULL,
    `gpax` FLOAT NULL,
    `university_1` VARCHAR(255) NULL,
    `university_2` VARCHAR(255) NULL,
    `university_3` VARCHAR(255) NULL,
    `faculty_1` VARCHAR(255) NULL,
    `faculty_2` VARCHAR(255) NULL,
    `faculty_3` VARCHAR(255) NULL,
    `department_1` VARCHAR(255) NULL,
    `department_2` VARCHAR(255) NULL,
    `department_3` VARCHAR(255) NULL,
    `department_interest` VARCHAR(255) NULL,
    `comcamp_pass` TINYINT NULL,
    `camp_1` VARCHAR(255) NULL,
    `camp_2` VARCHAR(255) NULL,
    `university_made_1` VARCHAR(255) NULL,
    `university_made_2` VARCHAR(255) NULL,
    `is_completed` BOOLEAN NULL DEFAULT false,
    `submited_at` DATETIME(3) NULL,

    UNIQUE INDEX `register_data_uid_key`(`uid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `file` ADD CONSTRAINT `file_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `register_data`(`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `register_data`(`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT;
