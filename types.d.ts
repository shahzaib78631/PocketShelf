interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  availableCopies: number;
  description: string;
  cover: string;
  color: string;
}

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  universityId: number;
  universityCard: string;
}

interface BookParams {
  title: string;
  author: string;
  genre: string;
  rating: number;
  coverUrl: string;
  coverColor: string;
  description: string;
  totalCopies: number;
  videoUrl: string;
  summary: string;
}

type BookCoverVariants = "small" | "regular" | "wide";

interface BookCover {
  coverUrl: string;
  coverColor: string;
  variant: BookCoverVariants;
}

interface BorrowBookParams {
  bookId: string;
  userId: string;
}
