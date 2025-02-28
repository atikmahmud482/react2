import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDb";
import Book from "../Book/Book";
const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storReadList = getStoredReadList();
    const storReadListInt = storReadList.map((id) => parseInt(id));
    console.log(storReadList, storReadListInt, allBooks);
    const readBookList = allBooks.filter((book) =>
      storReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  return (
    <div>
      <h3 className="text-3xl my-8">Listed Books</h3>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Read Books: {readList.length}</h2>
          {readList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">Wish Books</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
