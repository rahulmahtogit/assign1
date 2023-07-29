import { IconButton} from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogout } from '../redux/userPreferencesSlice';
import axios from 'axios';


const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.token);
  const handleClickLogoutMenu = async (event) => {
    const resp = await axios.post("http://localhost:3400" + "/logout",
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      }
    })
    if(resp?.data?.success){
      dispatch(setLogout());
       navigate("/")
    }
  };

  return (
    <IconButton
    onClick={handleClickLogoutMenu}
    size="small"
    sx={{ ml: 2 , marginInlineStart: 'auto'}}
    aria-haspopup="true"
  >
    <Logout sx={{ width: 32, height: 32 }}>M</Logout>
  </IconButton>
  );
};



export default LogoutButton;