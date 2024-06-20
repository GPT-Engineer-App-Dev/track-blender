import { useState, useRef } from "react";
import { Container, VStack, Text, Box, Image, Button, HStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    // Logic for next song
    console.log("Next song");
  };

  const handlePrevious = () => {
    // Logic for previous song
    console.log("Previous song");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box boxSize="sm">
          <Image src="/images/album-cover.jpg" alt="Album Cover" borderRadius="md" />
        </Box>
        <Text fontSize="2xl" fontWeight="bold">Song Title</Text>
        <Text fontSize="lg">Artist Name</Text>
        <audio ref={audioRef} src="/path/to/song.mp3" />
        <HStack spacing={4}>
          <Button leftIcon={<FaBackward />} colorScheme="teal" variant="outline" onClick={handlePrevious}>Previous</Button>
          <Button leftIcon={isPlaying ? <FaPause /> : <FaPlay />} colorScheme="teal" variant="solid" onClick={handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </Button>
          <Button leftIcon={<FaForward />} colorScheme="teal" variant="outline" onClick={handleNext}>Next</Button>
        </HStack>
        <HStack spacing={4}>
          <Button as={Link} to="/create-playlist" colorScheme="teal" variant="outline">Create Playlist</Button>
          <Button as={Link} to="/view-playlists" colorScheme="teal" variant="outline">View Playlists</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;