import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Card,
  Input,
  Checkbox,
  Typography,
  Select,
  Option,
} from '@material-tailwind/react';
import React from 'react'

const AddBookModal = ({ open, handleOpen }) => {


  return (
    <div>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className=''>
          <Card className='' color="transparent" shadow={false}>
            <Typography className='text-center' variant="h4" color="blue-gray">
              Add New Book
            </Typography>
            {/* <Typography  color="gray" className="mt-1 font-normal text-center">
              Nice to meet you! Enter your details to register.
            </Typography> */}
            <form className="mt-8 mb-2 w-80 mx-auto max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Book Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="Enter Book Name"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Author Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="Enter Author full name"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Description
                </Typography>
                <Input
                  size="lg"
                  placeholder="Write a brief description of the book"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Category
                </Typography>
                <div>
                  <Select label="Select Version">
                    <Option>Fiction</Option>
                    <Option>Non-Fiction</Option>
                    <Option>Science Fiction</Option>
                    <Option>Biography</Option>
                    <Option>Children's Books</Option>
                  </Select>
                </div>
              </div>
            </form>
          </Card>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}

export default AddBookModal