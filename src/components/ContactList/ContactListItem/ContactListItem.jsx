import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const { item, text, span, button } = css;

  const deleteHandle = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li id={id} className={item}>
      <p className={text}>
        {name}:<span className={span}>{number}</span>
      </p>
      <button className={button} onClick={deleteHandle}>
        Delete
      </button>
    </li>
  );
};
