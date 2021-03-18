import { Box, Container } from "@chakra-ui/react";
import { FC } from "react";

const Layout: FC = ({ children }) => {
	return (
		<Container maxW="max" centerContent>
			<Box padding="4">{children}</Box>
		</Container>
	);
};

export default Layout;
