import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Button,
  Image,
} from "@chakra-ui/react";
import { StudentTableType } from "./StudentTable.type";

const StudentTable = ({
  data,
  onOpen,
  setIdStudent,
  handleDeleteStudent,
}: StudentTableType) => {
  return (
    <TableContainer maxWidth="700px" m="40px auto">
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Avatar</Th>
            <Th isNumeric>Action</Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td>{item.name}</Td>
              <Td>
                <Image
                  src={`http://127.0.0.1:8000/img/${item.avatar}`}
                  borderRadius="full"
                  boxSize="100px"
                  objectFit="cover"
                />
              </Td>
              <Td>
                <Button
                  onClick={() => {
                    onOpen();
                    setIdStudent(item.id);
                  }}
                >
                  Edit
                </Button>
              </Td>
              <Td>
                <Button onClick={() => handleDeleteStudent(item.id)}>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default StudentTable;
