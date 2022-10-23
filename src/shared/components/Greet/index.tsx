type GreetProp = {
  name: string;
  location: string;
  children?: string;
};

const Greet = ({ children, location }: GreetProp) => {
  const users = [
    {
      name: "Gia Bao",
      age: 19,
    },
    {
      name: "Bao Nhi",
      age: 20,
    },
    {
      name: "Thanh Phuc",
      age: 21,
    },
  ];
  return (
    <div>
      {users.map((user) => (
        <>
          <div>Tên: {user.name}</div>
          <div>Tên: {user.age}</div>
        </>
      ))}
    </div>
  );
};

export default Greet;
