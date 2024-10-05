import PageRouter from "@utils/routerUtils";
import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <MantineProvider>
      <PageRouter />
    </MantineProvider>
  );
};

export default App;
