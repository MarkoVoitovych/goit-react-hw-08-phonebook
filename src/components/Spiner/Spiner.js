import { Oval } from 'react-loader-spinner';
const Spiner = () => {
  return (
    <Oval
      height={25}
      width={25}
      color="#4fa94d"
      visible={true}
      ariaLabel="oval-loading"
      strokeWidth={7}
    />
  );
};
export default Spiner;
