/*
  Warnings:

  - You are about to alter the column `nama` on the `kelulusan` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `nim` on the `kelulusan` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.
  - You are about to alter the column `kursus` on the `kelulusan` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(15)`.
  - You are about to alter the column `status` on the `kelulusan` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(30)`.

*/
-- AlterTable
ALTER TABLE `kelulusan` MODIFY `nama` VARCHAR(100) NOT NULL,
    MODIFY `nim` VARCHAR(20) NOT NULL,
    MODIFY `kursus` VARCHAR(15) NOT NULL,
    MODIFY `status` VARCHAR(30) NOT NULL;
