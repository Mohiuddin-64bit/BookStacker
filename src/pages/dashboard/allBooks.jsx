import AddBookModal from "@/component/AddBookModal";
import { BooksCard } from "@/component/BooksCard";
import {
  books,
} from "@/data";
import {
  Tabs,
  TabsHeader,
  Tab,
  Input,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";



export function AllBooks() {
  // State to manage modal visibility
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div className="">
      <div className="flex flex-col-reverse md:flex-row justify-between gap-3 mt-12">
        <div className="visible lg:hidden">
          <Select label="Select Category">
            <Option defaultChecked>All</Option>
            <Option>Fiction</Option>
            <Option>Non-Fiction</Option>
            <Option>Science Fiction</Option>
            <Option>Biography</Option>
            <Option>Children's Books</Option>
          </Select>
        </div>
        <div className="w-2/3 lg:block hidden">
          <Tabs value="All">
            <TabsHeader>
              <Tab value="All">
                All
              </Tab>
              <Tab value="Fiction">
                Fiction
              </Tab>
              <Tab value="Non-Fiction">
                Non-Fiction
              </Tab>
              <Tab value="Science Fiction">
                Si-Fi
              </Tab>
              <Tab value="Biography">
                Biography
              </Tab>
              <Tab value=" Children's Books">
                Children's
              </Tab>
            </TabsHeader>
          </Tabs>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleOpen} variant="gradient">
            Open Dialog
          </Button>
          <AddBookModal open={open} handleOpen={handleOpen} />
        </div>
        <div>
          <Input label="Search" />
        </div>
      </div>
      <div className="mb-4 mt-16 grid justify-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {
          books.map((book, index) => (
            <BooksCard
              id={index}
              key={index}
              props={book}
            />
          ))
        }
      </div>

    </div>
  );
}