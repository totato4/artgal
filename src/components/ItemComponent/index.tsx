import { useAppSelector } from 'hooks/useRedux';

import ItemList from './ItemList';
import Item from './Item';
import NoItems from './NoItems/NoItems';
import { ThreeDots } from './ItemLoader/index';

const ItemComponent = () => {
  const { items, status } = useAppSelector((state) => state.itemsSlice);

  return (
    <>
      {status === 'success' && (
        <>
          {items.length !== 0 ? (
            <ItemList>
              {items.map((o: any) => (
                <Item
                  name={o.name}
                  author={o.author}
                  created={o.created}
                  location={o.location}
                  imageUrl={o.imageUrl}
                  key={o.name + o.created}
                />
              ))}
            </ItemList>
          ) : (
            <NoItems>
              По заданным параметрам фильтра картин не найдено...
            </NoItems>
          )}
        </>
      )}
      {status === 'loading' && (
        <div style={{ margin: '150px auto' }}>
          <ThreeDots />
        </div>
      )}
    </>
  );
};

export default ItemComponent;
