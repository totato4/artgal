import { FC } from 'react';
import style from './Item.module.scss';

type Props = {
  name?: string | number;
  author?: string | number;
  created?: string | number;
  location?: string | number;
};

const Item: FC<Props> = ({ author, created, location, name }) => {
  return (
    <div className={style.container}>
      <div>
        <img
          src="./src/components/shared/assets/picture.jpg"
          alt="artPicture"
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
