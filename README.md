#### Video Demo: [Watch Here](https://youtu.be/0sY3qWhgAsU)

#### Description:
The Task Manager App is a simple yet powerful tool designed to help users organize and manage their tasks efficiently. Built with React, this application allows users to add, edit, delete, and filter tasks based on their completion status. The app also features a dark mode toggle, enhancing usability in different lighting conditions.

### Features:
- **Add Tasks**: Users can create new tasks by providing a title and an optional description.
- **Edit Tasks**: Existing tasks can be modified, allowing users to update the title and description as needed.
- **Delete Tasks**: Users can remove tasks they no longer need.
- **Toggle Completion**: Each task can be marked as completed or active, helping users track their progress.
- **Filter Tasks**: Users can filter tasks to view all, active, or completed tasks.
- **Dark Mode**: A dark mode feature is included for better visibility in low-light environments.

### File Structure:
- **App.js**: This is the main component of the application. It contains the core logic for managing tasks, including adding, editing, deleting, and filtering tasks. It also handles the dark mode functionality and renders the UI components.
- **Heroicons**: The app utilizes Heroicons for visual representation of actions such as completing and deleting tasks. Icons like Check, Trash, Sun, and Moon are used to enhance the user interface.

### Design Choices:
During the development of the Task Manager App, several design choices were made to enhance user experience and functionality:

1. **State Management**: The app uses React's `useState` and `useEffect` hooks for managing state and side effects. This approach allows for a clean and efficient way to handle task data and UI updates.

2. **Dark Mode**: The decision to include a dark mode was made to improve accessibility and user comfort, especially for users who prefer a darker interface during nighttime or in low-light environments.

3. **Responsive Design**: The layout is designed to be responsive, ensuring that the app is usable on various screen sizes. Flexbox is utilized for layout management, providing a clean and organized structure.

4. **User  Feedback**: Alerts are used to provide immediate feedback to users when they attempt to add a task without a title or when they save an edited task. This helps prevent errors and improves the overall user experience.

5. **Task Filtering**: The filtering functionality allows users to focus on specific tasks, making it easier to manage their workload. This feature was included to enhance usability and task organization.

### Conclusion:
The Task Manager App is a comprehensive tool for task management, combining essential features with a user-friendly interface. The design choices made during development prioritize usability, accessibility, and responsiveness, making it a valuable resource for anyone looking to organize their tasks effectively.