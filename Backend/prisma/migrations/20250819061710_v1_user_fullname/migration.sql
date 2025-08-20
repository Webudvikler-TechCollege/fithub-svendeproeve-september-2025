/*
  Warnings:

  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `name`,
    ADD COLUMN `firstname` VARCHAR(191) NOT NULL DEFAULT 'Ikke navngivet',
    ADD COLUMN `lastname` VARCHAR(191) NOT NULL DEFAULT 'Ikke navngivet';
