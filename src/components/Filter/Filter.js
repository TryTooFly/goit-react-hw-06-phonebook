import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/contacts/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Find contacts by name</Form.Label>
          <Form.Control
            type="text"
            name="filter"
            placeholder="Search..."
            onChange={event=> dispatch(addFilter(event.target.value.trim()))}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default Filter;
