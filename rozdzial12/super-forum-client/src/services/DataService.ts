import Category from "../models/Category";
import CategoryThread from "../models/CategoryThread";
import Thread from "../models/Thread";

export async function getCategories(): Promise<Array<Category>> {
  const promise = new Promise<Array<Category>>((res, rej) => {
    setTimeout(() => {
      const categories = [];
      const programming = new Category("1", "Programowanie");
      categories.push(programming);
      const cooking = new Category("2", "Gotowanie");
      categories.push(cooking);
      const sports = new Category("3", "Sporty");
      categories.push(sports);
      const entertainment = new Category("4", "Rozrywka");
      categories.push(entertainment);
      const travel = new Category("5", "Podróże");
      categories.push(travel);

      res(categories);
    }, 2000);
  });
  return promise;
}

export async function getThreadsByCategory(
  catId: string
): Promise<Array<Thread>> {
  const promise = new Promise<Array<Thread>>((res, rej) => {
    setTimeout(() => {
      const threads: Array<Thread> = [];
      threads.push({
        id: "1",
        views: 22,
        title: "Wątek 1",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "dave",
        userId: "1",
        points: 11,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        threadItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "ThreadItem 1",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            threadId: "1",
          },
        ],
        category: new Category("1", "Programowanie"),
      });
      threads.push({
        id: "2",
        views: 2,
        title: "Wątek 2",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "tim",
        userId: "2",
        points: 55,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        threadItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "ThreadItem 1",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            threadId: "2",
          },
        ],
        category: new Category("1", "Programowanie"),
      });

      res(threads);
    }, 2000);
  });
  return promise;
}

export async function getTopCategories(): Promise<Array<CategoryThread>> {
  const promise = new Promise<Array<CategoryThread>>((res, rej) => {
    setTimeout(() => {
      const topCategories = [];
      const js = new CategoryThread(
        "1",
        "Programowanie",
        "Jak należy uczyć się JavaScriptu?"
      );
      topCategories.push(js);
      const node = new CategoryThread(
        "2",
        "Programowanie",
        "Jak należy uczyć się Node?"
      );
      topCategories.push(node);
      const react = new CategoryThread(
        "3",
        "Programowanie",
        "Jak nauczyć się Reacta?"
      );
      topCategories.push(react);
      const french = new CategoryThread(
        "4",
        "Gotowanie",
        "Jak uczyć się kuchni francuskiej?"
      );
      topCategories.push(french);
      const italian = new CategoryThread(
        "5",
        "Gotowanie",
        "Jak uczyć się kuchni włoskiej?"
      );
      topCategories.push(italian);
      const soccer = new CategoryThread(
        "6",
        "Sporty",
        "Jak uczyć się grać w piłkę nożną?"
      );
      topCategories.push(soccer);
      const basketball = new CategoryThread(
        "7",
        "Sporty",
        "Jak uczyć się grać w koszykówkę?"
      );
      topCategories.push(basketball);
      const baseball = new CategoryThread(
        "8",
        "Sporty",
        "Jak uczyć się grać w siatkówkę?"
      );
      topCategories.push(baseball);

      res(topCategories);
    }, 2000);
  });
  return promise;
}

export async function getThreadById(Id: string): Promise<Thread> {
  const promise = new Promise<Thread>((res, rej) => {
    setTimeout(() => {
      const thread = {
        id: "1",
        views: 22,
        title: "Wątek 1",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "dave",
        userId: "1",
        points: 11,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        threadItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "Odpowiedź 1 (ThreadItem)",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            threadId: "1",
          },
          {
            id: "2",
            views: 11,
            points: 14,
            body: "Odpowiedź 2 (ThreadItem)",
            userName: "linda",
            userId: "4",
            createdOn: new Date(),
            threadId: "1",
          },
        ],
        category: new Category("1", "Programowanie"),
      };

      res(thread);
    }, 2000);
  });
  return promise;
}

export async function getUserThreads(id: string): Promise<Array<Thread>> {
  const result = new Promise<Array<Thread>>((res) => {
    setTimeout(() => {
      const threads: Array<Thread> = [];
      threads.push({
        id: "1",
        views: 22,
        title: "Wątek 1",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "dave",
        userId: "1",
        points: 11,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        threadItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "Odpowiedź 1 (ThreadItem)",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            threadId: "1",
          },
        ],
        category: new Category("1", "Programowanie"),
      });
      threads.push({
        id: "2",
        views: 2,
        title: "Wątek 2",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "tim",
        userId: "2",
        points: 55,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        threadItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "Odpowiedź 1 (ThreadItem)",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            threadId: "2",
          },
        ],
        category: new Category("1", "Programowanie"),
      });

      res(threads);
    }, 2000);
  });
  return result;
}
