import { useState } from "react";
import { Container, VStack, Input, Textarea, Button, Heading } from "@chakra-ui/react";

const CreatePlaylist = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreatePlaylist = () => {
    const playlists = JSON.parse(localStorage.getItem("playlists")) || [];
    const newPlaylist = { name, description };
    playlists.push(newPlaylist);
    localStorage.setItem("playlists", JSON.stringify(playlists));
    setName("");
    setDescription("");
    alert("Playlist created successfully!");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%">
        <Heading>Create a New Playlist</Heading>
        <Input
          placeholder="Playlist Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Textarea
          placeholder="Playlist Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleCreatePlaylist}>
          Create Playlist
        </Button>
      </VStack>
    </Container>
  );
};

export default CreatePlaylist;