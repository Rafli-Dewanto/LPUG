/*
  Warnings:

  - A unique constraint covering the columns `[nim]` on the table `kelulusan` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `kelulusan_nim_key` ON `kelulusan`(`nim`);
