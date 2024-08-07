import ChattingRoom from 'components/ChattingRoom';
import Header from 'components/Header';
import Layout from 'components/Layout';

const ListPage = () => {
  return (
    <Layout>
      <Header />
      <div className='flex w-full flex-col gap-12 overflow-scroll p-12'></div>
    </Layout>
  );
};

export default ListPage;
