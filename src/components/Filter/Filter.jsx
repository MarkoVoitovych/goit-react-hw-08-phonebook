import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { Label, Input, Span } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Label>
      <Span>Find contacts by name</Span>
      <Input
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </Label>
  );
};

export default Filter;
