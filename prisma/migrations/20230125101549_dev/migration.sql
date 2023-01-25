-- CreateTable
CREATE TABLE `file` (
    `id` INTEGER NOT NULL,
    `user_id` INTEGER NULL,
    `agreement` TEXT NULL,
    `card` TEXT NULL,
    `student_certificate` TEXT NULL,
    `gpax_paper` TEXT NULL,
    `parent_card` TEXT NULL,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question` (
    `id` INTEGER NOT NULL,
    `user_id` INTEGER NULL,
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

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `register_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `google_token` VARCHAR(255) NULL,
    `pname` VARCHAR(50) NULL,
    `fname` VARCHAR(50) NULL,
    `mname` VARCHAR(50) NULL,
    `sname` VARCHAR(50) NULL,
    `nickname` VARCHAR(50) NULL,
    `dob` DATE NULL,
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
    `parent_pname` VARCHAR(50) NULL,
    `parent_fname` VARCHAR(50) NULL,
    `parent_mname` VARCHAR(50) NULL,
    `parent_sname` VARCHAR(50) NULL,
    `parent_mobile` VARCHAR(20) NULL,
    `parent_email` VARCHAR(48) NULL,
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

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `file` ADD CONSTRAINT `file_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `register_data`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `register_data`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;