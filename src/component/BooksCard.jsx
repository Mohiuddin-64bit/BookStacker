import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddBookModal from "./AddBookModal";



export function BooksCard({ props }) {
  const { image, title, author, page, date, category, id } = props;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Card className="w-full flex flex-col justify-between max-w-[26rem] shadow-lg">
      <div>
        <CardHeader floated={false} color="blue-gray">
          <img
            className="w-full h-full object-cover object-center rounded-t-lg"
            src="/img/book1.jpg"
            alt="ui/ux review check"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          <IconButton
            size="sm"
            color="red"
            variant="text"
            className="!absolute top-4 right-4 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </IconButton>
        </CardHeader>
        <CardBody>
          <Link to={`singleBooks/${id}`}>
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="blue-gray" className="font-medium">
                {title}
              </Typography>
              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-0.5 h-5 w-5 text-yellow-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                5.0
              </Typography>
            </div>
            <div className="mb-3">
              <p className="font-bold  bg-gray-300 inline-block px-4 py-1 rounded-lg ">{category}</p>
            </div>
            <Typography className="flex justify-between" color="gray">
              <div>
                {author}
              </div>
              <div>
                Page No: {page}
              </div>
            </Typography>
          </Link>
        </CardBody>
      </div>
      <div>
        <CardFooter className="px-4 pb-4 pt-0">
          <div className="flex justify-between">
            <Button title="Delete this Book" className="bg-red-400  text-black" size="md">
              <MdDelete className="text-lg" />
            </Button>
            <Button onClick={handleOpen} title="Edit this Book" size="md">
              <FaEdit className="text-lg" />
            </Button>
          </div>
          <AddBookModal open={open} handleOpen={handleOpen} />
        </CardFooter>
      </div>
    </Card>
  );
}