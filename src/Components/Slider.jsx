import { Carousel } from "flowbite-react";

const Slider = () => {
  return (
    <div className='aspect-[3/1]'>
      <Carousel>
        <img
          className='aspect-[3/1]'
          src='https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          alt=''
        />
        <img
          className='aspect-[3/1]'
          src='https://images.unsplash.com/photo-1627931539006-d5c4677e05ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          alt=''
        />
      </Carousel>
    </div>
  );
};

export default Slider;
