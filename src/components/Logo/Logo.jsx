import SvgIcon from '@mui/material/SvgIcon';
import css from './Logo.module.css';
import Image from '../../../public/icons/favicon-32x32.png';

const Logo = () => {
  return (
    <div
      className={css.logoWrapper}
      sx={{
        display: 'flex',
        justifyContent: 'left',
      }}
    >
      <img height={25} width={25} src={Image}/>
      <h2 className={css.logo}>Card2Hold</h2>
    </div>
  );
};

export default Logo;
