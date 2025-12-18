import { TodoProvider } from "./contexts/TodoContext";
import { FilterProvider } from "./contexts/FilterContext";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import ThemeToggle from "./components/ThemeToggle";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle />
      <h1>Todo App</h1>
      <TodoInput />
      <FilterButtons />
      <TodoList />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <FilterProvider>
          <AppContent />
        </FilterProvider>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
