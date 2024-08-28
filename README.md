# React Exercise

This exercise is to help us better understand your experience in react and typescript, how you would go about structuring your work, code quality, styles, etc...

## Setup

To get started, install the dependencies with `npm install`.

Run the application with `npm start`.

Launch application in browser at [http://localhost:5173](http://localhost:5173).

## Task

We would like you to build a simple data explorer as shown in the image below. This is a wireframe to demonstrate how the app should look once complete. Do not add any additional dependencies and you do not need to amend the data service to complete this task.

![React Exercise wireframe](/react-exercise.png)

The data is a list of application records and is fetchable at [http://localhost:8080/data](http://localhost:8080/data). Each application has 3 levels of business capabilities. Business capabilities are hierarchical as shown in the image (Business capability 1 -> Business capability 2 -> Business capability 3)

The app should -

- Requests the dataset.
- Build a hierarchical navigation tree displaying the different levels of business capabilities. Bonus points if we can expand/collapse the navigation tree.
- Have a range slider to be able to further filter the dataset based on the total spending value
- Present a list of applications from the data set, showing name and total spend. The list depends on the navigation tree and the range filter

Additional notes

- Please spend as much time as you feel necessary to complete the task and show off your skills.
- We will be looking at code/file structure, code quality & best practices & design.
- Add comments where necessary or to document any assumptions/considerations you may have.
- You shouldn't need to use any external libraries

Personal Development Thoughts
- So far, I would say the data structure isn't perfect for this sort of application, but I guess that is part of the task to make sure I understand recursion.
- I would personally make the API return the nested structure in one endpoint, and have another endpoint responsible for the filtering where I can pass in a capability name and the spend.
- I installed tailwind instead of using typical CSS as i find it quicker and much more intutitive when needing to style something very quickly
- I could sort spend the application cards by spend amounts as a future improvement
- I could also have all applications display by default before filtering and sorted, however, i would have to create some horrible flatten map to get that to work for the structure i have gone with :()
- Nevermind, i just passed in the initial state, its late xD