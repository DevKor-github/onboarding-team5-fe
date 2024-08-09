type TagType = 'genre' | 'keyword';

interface Props {
  type: TagType;
  value: string;
}

const Tag = ({ type, value }: Props) => {
  const parsedValue = type === 'keyword' ? '#' + value : value;

  return (
    <div
      className={`text-12  ${type === 'keyword' ? 'text-gray-400' : 'text-gray-300'}`}
    >
      {parsedValue}
    </div>
  );
};

export default Tag;
