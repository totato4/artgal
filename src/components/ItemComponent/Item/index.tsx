import { FC, useState } from 'react';
import style from './Item.module.scss';
// import logoBlack from '../shared/assets/art.jpg';
type props = {
  name?: string | number;
  author?: string | number;
  created?: string | number;
  location?: string | number;
};

const Item: FC<props> = ({ author, created, location, name }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.container}>
      <div
      // className="_ibg"
      >
        <img
          src="./src/components/shared/assets/picture.jpg"
          alt="Picture"
          className={style.img}
        />
      </div>
      <div className={style.info}>
        <div className={style.bg} />
        <h3 className={style.title}>{name}</h3>
        <h4 className={style.subtitle}>
          <span className={style.name}>Author:</span>{' '}
          <span className={style.text}>{author}</span>
        </h4>
        <h4 className={style.subtitle}>
          <span className={style.name}>Created:</span>{' '}
          <span className={style.text}>{created}</span>
        </h4>
        <h4 className={style.subtitle}>
          <span className={style.name}>Location:</span>{' '}
          <span className={style.text}>{location}</span>
        </h4>
      </div>
    </div>
  );
};

export default Item;
