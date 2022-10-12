-- CreateTable
CREATE TABLE "books" (
    "ID" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "book_loans" (
    "ID" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "bookID" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "due" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "book_loans_pkey" PRIMARY KEY ("ID")
);

-- AddForeignKey
ALTER TABLE "book_loans" ADD CONSTRAINT "book_loans_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_loans" ADD CONSTRAINT "book_loans_bookID_fkey" FOREIGN KEY ("bookID") REFERENCES "books"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
