# Frontend Coding Challenge

## Hacker News Client

You will be building a newsreader app that displays the latest [Hacker News](https://news.ycombinator.com/) stories. Your app will leverage the [Hacker News API](https://github.com/HackerNews/API) to fetch the data it requires.

## Requirements

The app will be a single page web application with the following features:

- The app will display a list of the **latest Hacker News stories** in descending order from newest to oldest. Please follow the design specification in [this Figma file](https://www.figma.com/file/VvLQLlOXoBuknTA8oSOrTr/Frontend-Engineering-Challenge-%E2%80%93-Hacker-News-Client?node-id=0%3A1&t=cmUbLDIFoRlBGQxJ-1).
- The targeted users for this app are quite impatient, so the app needs to display each story list item as soon as it has been fetched. The resulting list should look like it’s growing gradually as new stories come in.
- You can assume that the app will only be run on modern browsers, hence, feel free to use the latest web specs.

The test project should be submitted in **React**. We’re mostly interested in your frontend development skills regardless of the framework. However, we’d rather **not** receive submissions written in vanilla JS or another framework, as it does not allow us to fairly evaluate your skills in building UIs or managing state in a declarative way. The usage of React meta-frameworks like _Remix_ or _Next.js_ is allowed (even encouraged).

If you have no prior React experience make sure to mention this in your application or as a response to the test project email so we can take it into consideration when we assess your submission.

### Bonus points

- The app supports _infinite scroll_ (like a social media feed). Specifically, when the user reaches the bottom of the page, the app should fetch earlier items and display them.
- The app supports _offline capability_. Specifically, the user should be able to use the app offline to check out the list.

## Evaluation Criteria

- App **performance**. We will be looking at the wait times for readers to see the content — the shorter, the better.
- We will evaluate your code’s **quality**. Does your code have good modular design and testability? Is it easy to read?
- **Tests**. We don’t expect you to reach 100% code coverage (or any other arbitrary number), but we expect at least some tests. Show us that you know what matters and have the skills to automatically test your work.
- We prefer the project to be **lightweight**, all dependencies should be well justified. For example, please interact with the Hacker News API directly instead of using the official Firebase client library.

## Deliverable

- Your solution should be **submitted as a Pull Request to the repository**. Please make sure to include the instructions on how to run your app in the description of the Pull Request.
- Make sure your project is easy to set up. Your app should be ready to run after `npm install`.
- Please spend no more than 6 hours on this task.

If you have any questions about this test project or want to cross-check your assumptions feel free to reach out to us at any time.
