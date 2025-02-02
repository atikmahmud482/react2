import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDb";
const ListedBooks = () => {
  const allBooks = useLoaderData();

  useEffect(() => {
    const storReadList = getStoredReadList();
    const storReadListInt = storReadList.map((id) => parseInt(id));
    console.log(storReadList, storReadListInt, allBooks);
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
          <h2 className="text-2xl">Read Books</h2>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">Wish Books</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
