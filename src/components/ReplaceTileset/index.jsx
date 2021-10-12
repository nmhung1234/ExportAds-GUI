import React from "react";
import { ReplaceTilesetContainer } from "./style";
import {
	Button,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableCaption,
	Input,
	Image,
} from "@chakra-ui/react";
const ReplaceTileset = () => {
	const [showTable, setShowTable] = React.useState(false);
	const handleShowTable = () => {
		setShowTable(!showTable);
	};
	return (
		<ReplaceTilesetContainer>
            {!showTable ? <Button onClick={handleShowTable} colorScheme="teal">Replace Tileset</Button> : ""}
			
			{showTable ? (
				<>
					{" "}
					<Table variant="striped" colorScheme="gray">
						<TableCaption>
							* Click to DETAIL and edit base64 link
						</TableCaption>
						<Thead>
							<Tr>
								<Th>Name tileset</Th>
								<Th>Detail</Th>
								<Th>Preview</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>inches</Td>
								<Td>
									{" "}
									<Input
										variant="flushed"
										placeholder="Flushed"
										value="data:base64//"
									/>
								</Td>
								<Td>
									<Image
										boxSize="100px"
										objectFit="cover"
										src="https://bit.ly/sage-adebayo"
										alt="Segun Adebayo"
									/>
								</Td>
							</Tr>
							<Tr>
								<Td>inches</Td>
								<Td>
									{" "}
									<Input
										variant="flushed"
										placeholder="Flushed"
										value="data:base64//"
									/>
								</Td>
								<Td>
									<Image
										boxSize="100px"
										objectFit="cover"
										src="https://bit.ly/sage-adebayo"
										alt="Segun Adebayo"
									/>
								</Td>
							</Tr>
							<Tr>
								<Td>inches</Td>
								<Td>
									{" "}
									<Input
										variant="flushed"
										placeholder="Flushed"
										value="data:base64//"
									/>
								</Td>
								<Td>
									<Image
										boxSize="100px"
										objectFit="cover"
										src="https://bit.ly/sage-adebayo"
										alt="Segun Adebayo"
									/>
								</Td>
							</Tr>
						</Tbody>
					</Table>
					<Button colorScheme="messenger">Replace</Button>
					<Button ml={4} colorScheme="orange" onClick={handleShowTable}>
						Cancel
					</Button>{" "}
				</>
			) : (
				""
			)}
		</ReplaceTilesetContainer>
	);
};

export default ReplaceTileset;
