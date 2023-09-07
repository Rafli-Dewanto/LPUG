/*
  Warnings:

  - Added the required column `kursus` to the `kelulusan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `kelulusan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `kelulusan` ADD COLUMN `kursus` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL;
