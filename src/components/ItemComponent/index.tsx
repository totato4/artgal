import ItemList from './ItemList';
import Item from './Item';
import { useAppSelector } from '../../RTK/store';
import NoItems from './NoItems/NoItems';

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
      {/* {status == 'error' && (
        <NoItems>
          Не удалось загрузить картины, проверьте соединение с интернетом или
          перезагрузите страницу
        </NoItems>
      )} */}
    </>
  );
};

export default ItemComponent;
