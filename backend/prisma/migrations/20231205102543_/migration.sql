/*
  Warnings:

  - A unique constraint covering the columns `[authslug]` on the table `usertable` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[accountAddress]` on the table `usertable` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[systemKey]` on the table `usertable` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "usertable_authslug_key" ON "usertable"("authslug");

-- CreateIndex
CREATE UNIQUE INDEX "usertable_accountAddress_key" ON "usertable"("accountAddress");

-- CreateIndex
CREATE UNIQUE INDEX "usertable_systemKey_key" ON "usertable"("systemKey");
