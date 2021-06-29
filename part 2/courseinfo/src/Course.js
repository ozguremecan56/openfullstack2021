const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
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
  const sumExercise = props.parts.reduce(
    (acc, part) => acc + part.exercises,
    0
  );

  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.id} name={part.name} exercise={part.exercises} />
      ))}
      <p>
        <strong>Total of {sumExercise} exercises.</strong>
      </p>
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
