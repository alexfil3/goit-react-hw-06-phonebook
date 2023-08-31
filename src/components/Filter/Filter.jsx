import { changeFilterValue } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.filter);
  const { label, input } = css;

  const onChange = e => {
    const filter = e.currentTarget.value;
    dispatch(changeFilterValue(filter));
  };

  return (
    <label className={label}>
      Find contacts by name
      <input
        className={input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};
