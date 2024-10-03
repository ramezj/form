-- CreateTable
CREATE TABLE "Form" (
    "id" BIGSERIAL NOT NULL,
    "fields" JSON,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Form2" (
    "id" SERIAL NOT NULL,
    "fields" JSONB,

    CONSTRAINT "Form2_pkey" PRIMARY KEY ("id")
);
