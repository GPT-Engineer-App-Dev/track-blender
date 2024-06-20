import { useEffect, useState } from "react";
import { Container, VStack, Box, Heading, Text } from "@chakra-ui/react";

const ViewPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const storedPlaylists = JSON.parse(localStorage.getItem("playlists")) || [];
    setPlaylists(storedPlaylists);
  }, []);

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%">
        <Heading>View Playlists</Heading>
        {playlists.length === 0 ? (
          <Text>No playlists available.</Text>
        ) : (
          playlists.map((playlist, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" width="100%">
              <Text fontSize="xl" fontWeight="bold">{playlist.name}</Text>
              <Text>{playlist.description}</Text>
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default ViewPlaylists;