import { BooksCard } from "@/component/BooksCard";
import {
  books,
} from "@/data";


export function AllBooks() {
  return (
    <div className="">
      <div className="text-end mt-12 border-black">
        <input type="" className=""/>
      </div>
      <div className="mb-4 mt-24 grid justify-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {
          books.map((book, index) => (
            <BooksCard
              key={index}
              props={book}
            />
          ))
        }

      </div>
    </div>
  );
}