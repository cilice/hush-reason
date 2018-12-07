let component = ReasonReact.statelessComponent("SelectCourses");

let make = _children => {
  ...component,
  render: self => {
    <div>
      <h1> {ReasonReact.string("Ready to breathe?")} </h1>
      <p>
        {ReasonReact.string(
           "Stressed? Tired? Anxious? Try any of our breathing exercises to help"
           ++ "you relax and achieve a clear state of mind.",
         )}
      </p>
      {Courses.exercises
       |> Js.Array.map((exercise: Courses.exercise) =>
            <div key={exercise.id}>
              <h2> {ReasonReact.string(exercise.title)} </h2>
              <p> {ReasonReact.string(exercise.description)} </p>
              <button
                onClick={
                  self.handle((_event, _self) => {
                    let url = "/" ++ exercise.id ++ "/";
                    ReasonReact.Router.push(url);
                  })
                }>
                {ReasonReact.string("Start")}
              </button>
            </div>
          )
       |> ReasonReact.array}
    </div>;
  },
};
