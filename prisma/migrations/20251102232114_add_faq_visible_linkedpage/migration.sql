-- AlterTable
ALTER TABLE `faqs` ADD COLUMN `linkedPage` VARCHAR(50) NOT NULL DEFAULT 'principal',
    ADD COLUMN `visible` BOOLEAN NOT NULL DEFAULT true;
