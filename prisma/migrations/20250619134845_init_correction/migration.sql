/*
  Warnings:

  - You are about to drop the column `numReviewa` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "numReviewa",
ADD COLUMN     "numReviews" INTEGER NOT NULL DEFAULT 0;
