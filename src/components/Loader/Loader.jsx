import s from './Loader.module.css';
import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={s.loader}>
      <BallTriangle
        height="80"
        width="80"
        color="#4d92ec"
        ariaLabel="loading"
      />
    </div>
  );
};
