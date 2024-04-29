import { Box, Flex, Text, Image, VStack, HStack, Button, Link } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebookF, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" minH="100vh" bg="gray.800" color="white">
        <VStack spacing={10}>
          <Image borderRadius="full" boxSize="150px" src="/venus-williams.jpg" alt="Venus Williams" />
          <Text fontSize="3xl" fontWeight="bold">Venus Williams</Text>
          <Text fontSize="xl">Professional Tennis Player</Text>
          <HStack spacing={5}>
            <Link href="https://instagram.com" isExternal><FaInstagram size="28px" /></Link>
            <Link href="https://twitter.com" isExternal><FaTwitter size="28px" /></Link>
            <Link href="https://facebook.com" isExternal><FaFacebookF size="28px" /></Link>
            <Link href="mailto:contact@venuswilliams.com"><FaEnvelope size="28px" /></Link>
          </HStack>
        </VStack>
      </Flex>
      <Flex direction="column" p={10}>
        <Text fontSize="2xl" fontWeight="bold" mb={5}>Biography</Text>
        <Text>
          Venus Ebony Starr Williams is an American professional tennis player. A former world No. 1
          in both singles and doubles, Williams has won seven Grand Slam singles titles and fourteen
          Grand Slam doubles titles, all with her sister Serena Williams.
        </Text>
        <Text fontSize="2xl" fontWeight="bold" mt={10} mb={5}>Achievements</Text>
        <Text>
          - 5 Wimbledon singles titles<br/>
          - 2 US Open singles titles<br/>
          - 4 Olympic gold medals<br/>
          - 1 Olympic silver medal
        </Text>
        <Text fontSize="2xl" fontWeight="bold" mt={10} mb={5}>Gallery</Text>
        <HStack spacing={5}>
          <Image src="/gallery1.jpg" boxSize="200px" alt="Tournament Win" />
          <Image src="/gallery2.jpg" boxSize="200px" alt="Celebrating Victory" />
          <Image src="/gallery3.jpg" boxSize="200px" alt="Action Shot" />
        </HStack>
        <Text fontSize="2xl" fontWeight="bold" mt={10} mb={5}>Contact Information</Text>
        <Text>Email: contact@venuswilliams.com</Text>
      </Flex>
    </Box>
  );
};

export default Index;