const ChangeName = ({ userName, setUserName }) => {
  const handlePropChange = () => {
    // function to change name
    // props.changeName("there");
    setUserName("there");
  };

  return (
    <>
      <button onClick={handlePropChange}>Hide my name.</button>
      <p>{userName}, What do you have planned for today.</p>
    </>
  );
};

export default ChangeName;
