import { Container } from "@chakra-ui/react";
import { FC } from "react";

const Layout: FC = ({ children }) => {
	return (
		<Container maxW="3xl" centerContent padding="8">
			{children}
		</Container>
	);
};

export default Layout;
