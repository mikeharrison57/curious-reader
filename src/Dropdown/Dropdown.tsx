import { listenerCount } from 'process';
import { Props } from '../Interfaces';
import { useHistory } from "react-router-dom";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavLink, NavItem } from 'reactstrap';

// const Dropdown = ({ genres }: Props) => {
//   const generateDropdownOptions = () => {
//     return genres.bookLists.map(list => {
//       return (
//         <DropdownItem as={Link} to={`/${list.list_name}`} key={list.list_id} style={{ textDecoration: 'none' }}>{list.display_name}</DropdownItem>
//       )
//     })
//   }

//   return (
//     <ButtonDropdown>
//       <DropdownToggle caret>
//         Portafolio
//       </DropdownToggle>
//       <DropdownMenu>
//         {generateDropdownOptions()}
//       </DropdownMenu>
//     </ButtonDropdown>
//   )
// }

// export default Dropdown;
// const [value, setValue] = useState('')

const Dropdown = ({ genres }: Props) => {
  let history = useHistory();

  const onChange = (e: string) => {
    history.push(`${e}`);
  }

  const generateDropdownOptions = () => {
    return genres.bookLists.map(list => {
      return (
        <option key={list.list_id} style={{ textDecoration: 'none' }} value={`/${list.list_name}`}>{list.display_name}</option>
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