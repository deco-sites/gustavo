import Item, { Props as ItemProps } from "../components/gallery/Item.tsx";
import Title, { Props as TitleProps } from "../components/ui/Title.tsx";

interface Props {
  title: TitleProps;
  items: ItemProps[];
}

const Gallery = ({ title, items }: Props) => {
  return (
    <div className="px-5 lg:px-8 bg-base-200">
      <Title {...title} />
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map((item, index) => <Item key={index} {...item} />)}
      </div>
    </div>
  );
};

export default Gallery;
