import { Box, Heading } from '@chakra-ui/react';
import { Button } from './components/cogs';

function App() {
  return (
    <>
      <Heading as="h1" size="2xl">
        Hello world!
      </Heading>
      <Box>
        <Button>Example</Button>
      </Box>
    </>
  );
}

export default App;
