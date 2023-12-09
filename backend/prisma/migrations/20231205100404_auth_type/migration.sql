/*
  Warnings:

  - The values [Telegram,Oauth,EcDsa,BasicAuth] on the enum `Auth` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `password` on the `usertable` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `usertable` table. All the data in the column will be lost.
  - Added the required column `accountAddress` to the `usertable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authslug` to the `usertable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Auth_new" AS ENUM ('custodial', 'defaultWallet', 'ecdsaWallet', 'zkEllasticWallet');
ALTER TABLE "usertable" ALTER COLUMN "authType" TYPE "Auth_new" USING ("authType"::text::"Auth_new");
ALTER TYPE "Auth" RENAME TO "Auth_old";
ALTER TYPE "Auth_new" RENAME TO "Auth";
DROP TYPE "Auth_old";
COMMIT;

-- AlterTable
ALTER TABLE "usertable" DROP COLUMN "password",
DROP COLUMN "username",
ADD COLUMN     "accountAddress" TEXT NOT NULL,
ADD COLUMN     "authslug" TEXT NOT NULL;
