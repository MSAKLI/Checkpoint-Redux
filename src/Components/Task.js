const task = ({ name, done }) => {
  console.log('name',name)
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};

export default task
