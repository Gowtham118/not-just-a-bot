-- CreateEnum
CREATE TYPE "Auth" AS ENUM ('Telegram', 'Oauth', 'EcDsa', 'BasicAuth');

-- CreateTable
CREATE TABLE "usertable" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "authType" "Auth" NOT NULL,
    "systemKey" TEXT NOT NULL,

    CONSTRAINT "usertable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "strategy" (
    "id" SERIAL NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "strategy" TEXT NOT NULL,

    CONSTRAINT "strategy_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "strategy" ADD CONSTRAINT "strategy_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "usertable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
