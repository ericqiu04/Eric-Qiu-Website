import { Component } from "react";

import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Icon,
  Textarea,
  Button
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { BiUser} from "react-icons/bi";
import {GrSend} from "react-icons/gr"
import "../CSS-Files/contact-me.styles.css";

class ContactMe extends Component {
  render() {
    return (
      <div>
        <Stack spacing={3} w={500} id="contactform">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="red.300"
              fontSize="1.2em"
              children={<Icon as={BiUser} />}
            />
            <Input variant="flushed" placeholder="First Name" />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="red.300"
              fontSize="1.2em"
              children={<Icon as={BiUser} />}
            />
            <Input variant="flushed" placeholder="Last Name" />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="red.300"
              fontSize="1.2em"
              children={<EmailIcon />}
            />

            <Input type="email" variant="flushed" placeholder="Email" />
          </InputGroup>
          <Textarea
            htmlSize={15}
            width="auto"
            height={250}
            placeholder="Enter Message Here"
            resize="none"
          />
          <Button leftIcon={<Icon as = {GrSend}/>} bg = "red.300" variant="solid">
            Send
          </Button>
        </Stack>
      </div>
    );
  }
}

export default ContactMe;
