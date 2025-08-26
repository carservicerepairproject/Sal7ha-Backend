/*
  Warnings:

  - You are about to drop the column `shopName` on the `Shop` table. All the data in the column will be lost.
  - Added the required column `name` to the `Shop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Shop" DROP COLUMN "shopName",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."Item" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "amount" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_id_key" ON "public"."Item"("id");
