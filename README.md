Welcome to my Ticket Tracker!

In this project I was asked to create a ticket tracker that will keep a record of the amount of tickets an employee has completed. Each employee is on the data file and should be able to increment/decrement their ticket count.

Requirements: 
1. Should be built in React + Typescript
2. Each component should manage its own state
3. The components should be generated using a map()

Extension:
1. Add a search by name box
2. Add a select by role dropdown box
3. Refactor your codebase to work with new a new data file provided.
4. Update your project to include Routing to 3 different pages with navigation between them.
- The Home page will display all of the team member's names.
- The Tickets page will display the ticket tracker with all the team members.
- The Profile page will be accessible by clicking on a team members ticket on the Tickets page or on there name on the Home page.
   -This will display more information about the team member.
- You will need navigation between your pages.

Challenges: 
- During this project, I had a few challenges as mentioned below:

1. Getting the incrementing and decrementing of the counter to be done correctly.
- I had to go through the content videos to have a look at how we implement useState feature from React in order to get the click events to be heard.

2. Due to the second part of the extension being given to us afterwards, I had a few issues with creating new pages and implementing them into the live site. There were a few issues with the naming of the files and then the functions. This lead me down a path where I needed to go through my whole code and correct what I could and re code certain parts due to the amount of error that I ended up having along the way. 

3. useParam was another of the features that gave me a slight challenge due to not having prior experience using the feature.

const { id } = useParams();
  const employee = team.find((member) => member.id === Number(id));

  if (employee === undefined) {
    return <p>Employee not found</p>;
  }

-- (const { id } = useParams();) -- This line uses the useParams hook from React Router. It extracts the value of the id parameter from the current route's URL and assigns it to the constant id. This allows you to access the id parameter that is part of the URL route.

-- (const employee = team.find((member) => member.id === Number(id));) -- Here, the find method is used on the team array to search for an employee whose id matches the id extracted from the URL. The find method iterates over each element in the team array and executes the provided callback function. The callback function then checks if the id of the current member object matches the id extracted from the URL after converting it to a number using Number(id).

-- (if (employee === undefined) { return <p>Employee not found</p>; }) -- Lastly, after attempting to find an employee in the team array, this if statement checks if the employee variable is undefined. If it is, it means that no employee with the provided id was found in the team array. In this case, I used a p tag to display <p>Employee not found</p> which will be rendered on the screen to indicate that the requested employee was not found.

Overall this challenge was definitely challenging to say the least but it also helped me to leave a lot more new skills and get stuck in with React. 