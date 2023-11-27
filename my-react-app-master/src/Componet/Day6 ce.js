const list = [
    {
      id: 1,
      name: "pic1",
      imageUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcloudinary-marketing-res.cloudinary.com%2Fimages%2Fw_1000%2Cc_scale%2Fv1679921049%2FImage_URL_header%2FImage_URL_header-png%3F_i%3DAA&tbnid=QkpExfz1uKND2M&vet=12ahUKEwiamb-x_M-CAxVx3DgGHckJCQAQMygDegQIARB1..i&imgrefurl=https%3A%2F%2Fcloudinary.com%2Fglossary%2Fimage-url&docid=rMaOTvGX6E86UM&w=1000&h=523&q=image%20url&ved=2ahUKEwiamb-x_M-CAxVx3DgGHckJCQAQMygDegQIARB1",
    },
    {
      id: 2,
      name: "pic2",
      imageUrl: "..pexels-arina-krasnikova-7002678.jpg/",
    },
  ];
  function Images({ lists }) {
    return (
      <>
        <h1>The List of images</h1>
        <ul style={{ listStylePosition: "none" }}>
          {lists.map((ite) => (
            <li key={ite.id} type="none">
              <h5>{ite.id}</h5>
              <div style={{ width: 100, height: 100 }}>
                <img src={ite.imageUrl}></img>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
  function Wrap(Component) {
    return (props) => {
      return <Component lists={list} {...props} />;
    };
  }
  const Value1 = Wrap(Images);
  export default function Hoc() {
    return <Value1 />;
  }