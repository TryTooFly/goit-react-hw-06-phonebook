import PropTypes from 'prop-types';
import { ListGroup, Button, Stack } from 'react-bootstrap';


const ContactItem = ({name, number, onDeleteContacts }) => {
  return (
    <ListGroup.Item>
      <Stack direction="horizontal" gap={2}>
        <p>
          {name} : {number}
        </p>
        <Button
          variant="outline-info"
          type="button"
          className="ms-auto"
          onClick={onDeleteContacts}
        >
          Delete
        </Button>
      </Stack>
    </ListGroup.Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};

export default ContactItem;
