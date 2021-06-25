const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div>
          <Header name={course.name} />
          <Content parts={course.parts} />
        </div>
      ))}
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.id} name={part.name} exercise={part.exercises} />
      ))}
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {" "}
      {props.name} {props.exercise}{" "}
    </p>
  );
};

export default Course;
