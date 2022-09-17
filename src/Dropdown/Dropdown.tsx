import { Props } from '../Interfaces';
import { useHistory } from "react-router-dom";
import './Dropdown.scss'

const Dropdown = ({ genres }: Props) => {
  let history = useHistory();

  const onChange = (e: string) => {
    history.push(`${e}`);
  }

  const generateDropdownOptions = () => {
    return genres.map(list => {
      return (
        <option tabIndex="0" key={list.list_id} style={{ textDecoration: 'none' }} value={`/${list.list_name}`}>{list.display_name}</option>
      )
    })
  }

  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {generateDropdownOptions()}
    </select>
  )
}

export default Dropdown;