import React from "react";
import { Select, Button, Heading, HStack, filter } from "@chakra-ui/react";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import {
  SimpleGrid,
  // Box,
  Card,
  Stack,
  Divider,
  Image,
  // Heading,
  ButtonGroup,
  Text,
  CardFooter,
  CardBody,
} from "@chakra-ui/react";
import properties from "../properties";

function FilterProperties() {
  const [state, setState] = React.useState({
    Price: 400,
    filters: [],
    Location: "",
    When: "",
    Type: "",
  });
  React.useEffect(() => {
    setState({ filters: properties.filter((ele) => ele.Price > state.Price) });
    console.log(state.filters);
  }, [state.Price, state.Location, state.Type]);

  return (
    <div className="p-8 md:p-16 xl:px-[150px]">
      {/* <div className="w-[100%] xl:px-[150px]">
        <h1 className="text-xl md:text-3xl font-bold">
          Search properties to rent
        </h1>
      </div> */}

      <div className=" overflow-x-scroll after:-> xl:overflow-hidden flex items-center  xl:justify-center">
        <Stack
          direction={["row", "row", "row", "row", "row"]}
          alignItems="center"
          spacing="50px"
          marginTop="30px"
          backgroundColor="#fff"
          padding="20px"
          borderRadius="10px"
          justifyContent="center"
        >
          <div className="w-[200px] p-2 border-r-2">
            <strong className=" text-slate-400 ">Location</strong>
            <Select
              placeholder="Select Location"
              className="font-bold"
              variant="unstyled"
              fontSize="1.1em"
              onChange={(e) => {
                setState({ Location: e.target.value });
              }}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </div>
          <div className="w-[200px] p-2 border-r-2">
            <strong className=" text-slate-400">When</strong>
            <Select
              placeholder="Select Move in Date"
              className="font-bold"
              variant="unstyled"
              fontSize="1.1em"
              onChange={(e) => {
                setState({ When: e.target.value });
              }}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </div>
          <div className="w-[200px] p-2 border-r-2">
            <strong className=" text-slate-400">Price</strong>
            <Select
              placeholder="Select Price"
              className="font-bold"
              variant="unstyled"
              fontSize="1.1em"
              onChange={(e) => {
                setState({ Price: e.target.value });
              }}
            >
              <option value="option1">$500-1000</option>
              <option value="option2">$1000-2000</option>
              <option value="option3">$2000-4000</option>
            </Select>
          </div>
          <div className="w-[200px] p-2 border-r-2">
            <strong className=" text-slate-400">Property type</strong>
            <Select
              placeholder="Select Property Type"
              className="font-bold"
              variant="unstyled"
              fontSize="1.1em"
              onChange={(e) => {
                setState({ Type: e.target.value });
                console.log(state.Type);
              }}
            >
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Mansion">Mansion</option>
            </Select>
          </div>
          <Button colorScheme="purple" size="lg">
            Search
          </Button>
        </Stack>
      </div>
      <div className="w-[100%] h-auto mt-[40px] flex items-center justify-center">
        <SimpleGrid columns={[1, null, 2, 3]} spacing="40px">
          {properties.length > 0 ? (
            properties.map(function (ele) {
              return (
                <Card key={ele.Price} maxW="320px" backgroundColor="#fff">
                  <CardBody>
                    <Image
                      src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Text className=" tracking-normal space-x-1">
                        <strong className="text-2xl font-bold text-purple-500">
                          ${ele.Price}
                        </strong>
                        <span className=" text-slate-400 font-semibold text-[0.9em]">
                          /month
                        </span>
                      </Text>
                      <Text className="text-xl font-bold">{ele.Name}</Text>
                      <Text className=" overflow-hidden text-[0.9em] text-slate-400 font-[500]">
                        {ele.Address}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <HStack className="w-[100%] items-center " spacing="25px">
                      <div className="flex items-center">
                        <BedIcon
                          fontSize="0.9em"
                          style={{ color: "purple", marginRight: "5px" }}
                        />
                        <Text className="text-[0.7em] text-slate-400">
                          3 Beds
                        </Text>
                      </div>
                      <div className="flex items-center">
                        <BathtubIcon
                          fontSize="0.9em"
                          style={{ color: "purple", marginRight: "5px" }}
                        />
                        <Text className="text-[0.7em] text-slate-400">
                          2 Bathrooms
                        </Text>
                      </div>
                      <div className="flex items-center">
                        <SquareFootIcon
                          fontSize="0.9em"
                          style={{ color: "purple", marginRight: "5px" }}
                        />
                        <Text className="text-[0.7em] text-slate-400">
                          5*7m
                        </Text>
                      </div>
                    </HStack>
                  </CardFooter>
                </Card>
              );
            })
          ) : (
            <> </>
          )}
        </SimpleGrid>
      </div>
    </div>
  );
}

export default FilterProperties;
