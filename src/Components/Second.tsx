import React, { useState, useEffect, useRef } from "react";
import img from "../assets/test.png";

export default function Second(props) {
  const LinkRef = useRef(null);
  const goTo = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const [getPacarSaya, setPacarSaya] = useState(0);
  const [getNamaPacar, setNamaPacar] = useState("");

  useEffect(() => {
    if (getPacarSaya > 1) {
      setNamaPacar("Nindy");
    }
  }, [getPacarSaya]);

  return (
    <>
      <div className="bg-hero bg-no-repeat bg-center h-screen bg-[length:1920px_1080px]">
        <div className="flex items-center justify-center h-screen">
          <div className="container max-w-6xl absolute top-24 flex flex-col items-center md:relative md:top-0 md:relative md:top-0 md:flex-row md:items-center">
            <img src={img} className="rounded-full w-52 md:w-80 sm:w-64 border-4 border-sky-950 mb-4 md:mb-0 mr-5" />
            <div>
              <h1> {getNamaPacar}</h1>
              <h1>{getPacarSaya} saya</h1>
              <h1 className="text-xl font-poppins md:text-5xl sm:text-3xl m-4">{props.title}</h1>
              <p className="text-white text-md sm:text-xl md:text-xl m-4">{props.text}</p>
              <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt itaque voluptates quam esse repudiandae corporis laudantium, excepturi fugiat non perspiciatis reprehenderit veniam, sapiente debitis eius qui rerum eveniet
                voluptatum fugit vitae ad reiciendis sequi molestias placeat alias! Sequi iste eaque expedita pariatur voluptatem quaerat fugiat repellendus harum, libero tenetur ea illo omnis eligendi voluptatibus quas. Ad at, fugit
                provident obcaecati eligendi dolor voluptates facere qui, deserunt magni aliquid cupiditate quis reiciendis veniam sit veritatis explicabo adipisci? Quo repellendus optio magnam neque possimus nulla, consectetur nam
                voluptatibus sint ratione facilis nemo suscipit nostrum ipsa provident nisi quam dignissimos accusantium corrupti maiores?
              </h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt itaque voluptates quam esse repudiandae corporis laudantium, excepturi fugiat non perspiciatis reprehenderit veniam, sapiente debitis eius qui rerum eveniet
                voluptatum fugit vitae ad reiciendis sequi molestias placeat alias! Sequi iste eaque expedita pariatur voluptatem quaerat fugiat repellendus harum, libero tenetur ea illo omnis eligendi voluptatibus quas. Ad at, fugit
                provident obcaecati eligendi dolor voluptates facere qui, deserunt magni aliquid cupiditate quis reiciendis veniam sit veritatis explicabo adipisci? Quo repellendus optio magnam neque possimus nulla, consectetur nam
                voluptatibus sint ratione facilis nemo suscipit nostrum ipsa provident nisi quam dignissimos accusantium corrupti maiores?
              </h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt itaque voluptates quam esse repudiandae corporis laudantium, excepturi fugiat non perspiciatis reprehenderit veniam, sapiente debitis eius qui rerum eveniet
                voluptatum fugit vitae ad reiciendis sequi molestias placeat alias! Sequi iste eaque expedita pariatur voluptatem quaerat fugiat repellendus harum, libero tenetur ea illo omnis eligendi voluptatibus quas. Ad at, fugit
                provident obcaecati eligendi dolor voluptates facere qui, deserunt magni aliquid cupiditate quis reiciendis veniam sit veritatis explicabo adipisci? Quo repellendus optio magnam neque possimus nulla, consectetur nam
                voluptatibus sint ratione facilis nemo suscipit nostrum ipsa provident nisi quam dignissimos accusantium corrupti maiores?
              </h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt itaque voluptates quam esse repudiandae corporis laudantium, excepturi fugiat non perspiciatis reprehenderit veniam, sapiente debitis eius qui rerum eveniet
                voluptatum fugit vitae ad reiciendis sequi molestias placeat alias! Sequi iste eaque expedita pariatur voluptatem quaerat fugiat repellendus harum, libero tenetur ea illo omnis eligendi voluptatibus quas. Ad at, fugit
                provident obcaecati eligendi dolor voluptates facere qui, deserunt magni aliquid cupiditate quis reiciendis veniam sit veritatis explicabo adipisci? Quo repellendus optio magnam neque possimus nulla, consectetur nam
                voluptatibus sint ratione facilis nemo suscipit nostrum ipsa provident nisi quam dignissimos accusantium corrupti maiores?
              </h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt itaque voluptates quam esse repudiandae corporis laudantium, excepturi fugiat non perspiciatis reprehenderit veniam, sapiente debitis eius qui rerum eveniet
                voluptatum fugit vitae ad reiciendis sequi molestias placeat alias! Sequi iste eaque expedita pariatur voluptatem quaerat fugiat repellendus harum, libero tenetur ea illo omnis eligendi voluptatibus quas. Ad at, fugit
                provident obcaecati eligendi dolor voluptates facere qui, deserunt magni aliquid cupiditate quis reiciendis veniam sit veritatis explicabo adipisci? Quo repellendus optio magnam neque possimus nulla, consectetur nam
                voluptatibus sint ratione facilis nemo suscipit nostrum ipsa provident nisi quam dignissimos accusantium corrupti maiores?
              </h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt itaque voluptates quam esse repudiandae corporis laudantium, excepturi fugiat non perspiciatis reprehenderit veniam, sapiente debitis eius qui rerum eveniet
                voluptatum fugit vitae ad reiciendis sequi molestias placeat alias! Sequi iste eaque expedita pariatur voluptatem quaerat fugiat repellendus harum, libero tenetur ea illo omnis eligendi voluptatibus quas. Ad at, fugit
                provident obcaecati eligendi dolor voluptates facere qui, deserunt magni aliquid cupiditate quis reiciendis veniam sit veritatis explicabo adipisci? Quo repellendus optio magnam neque possimus nulla, consectetur nam
                voluptatibus sint ratione facilis nemo suscipit nostrum ipsa provident nisi quam dignissimos accusantium corrupti maiores?
              </h1>
              <br />
              <br />
              <br />
              <br />
              <h1 ref={LinkRef}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt itaque voluptates quam esse repudiandae corporis laudantium, excepturi fugiat non perspiciatis reprehenderit veniam, sapiente debitis eius qui rerum eveniet
                voluptatum fugit vitae ad reiciendis sequi molestias placeat alias! Sequi iste eaque expedita pariatur voluptatem quaerat fugiat repellendus harum, libero tenetur ea illo omnis eligendi voluptatibus quas. Ad at, fugit
                provident obcaecati eligendi dolor voluptates facere qui, deserunt magni aliquid cupiditate quis reiciendis veniam sit veritatis explicabo adipisci? Quo repellendus optio magnam neque possimus nulla, consectetur nam
                voluptatibus sint ratione facilis nemo suscipit nostrum ipsa provident nisi quam dignissimos accusantium corrupti maiores?
              </h1>
            </div>
          </div>
          <button className="bg-sky-800" onClick={() => goTo(LinkRef.current)}>
            ok
          </button>
        </div>
      </div>
    </>
  );
}
