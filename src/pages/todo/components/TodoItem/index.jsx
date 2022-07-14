import { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Checkbox from 'common/components/UI/Checkbox';

import styles from './TodoItem.module.scss';

const cx = classNames.bind(styles);

const TodoItem = ({
  list, text, isChecked, onCheck, onDelete, id,
}) => {
  const [checked, setCheck] = useState(isChecked);

  const className = cx({
    TodoItem, TodoItem_checked: checked,
  });

  const onChange = () => {
    setCheck((prevChecked) => !prevChecked);
    onCheck(checked);
  };

  return (
    <div className={className}>
      <Checkbox className={styles.checkbox} id={id} onChange={onChange} checked={checked} />
      <div className={styles.main}>
        <div className={styles.main__text}>{text}</div>
        <div className={list && styles.main__list}>{list}</div>
      </div>
      <button className={styles['delete-btn']} type="button" onClick={onDelete}>delete</button>
    </div>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  list: PropTypes.string,
  text: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  list: '',
};
