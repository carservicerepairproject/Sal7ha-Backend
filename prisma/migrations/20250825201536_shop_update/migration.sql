-- AlterTable
ALTER TABLE "public"."Shop" ALTER COLUMN "phoneNumber" DROP NOT NULL,
ALTER COLUMN "country" DROP NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "commercialRegistraionNumber" DROP NOT NULL,
ALTER COLUMN "taxIdentificationNumber" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL;
