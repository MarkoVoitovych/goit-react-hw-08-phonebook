import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelectors';
import { Label, Input, Span } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

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
