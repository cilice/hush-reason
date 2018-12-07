type action =
  | Tick;

/* The component's state type. It can be anything, including, commonly, being a record type */
type state = {count: int};

let component = ReasonReact.reducerComponent("CourseDetail");

let make = (~exercise: Courses.exercise, _children) => {
  ...component,
  initialState: () => {count: 0},
  reducer: (action, state) =>
    switch (action) {
    | Tick => ReasonReact.Update({count: state.count + 1})
    },
  didMount: self => {
    let intervalId = Js.Global.setInterval(() => self.send(Tick), 1000);
    self.onUnmount(() => Js.Global.clearInterval(intervalId));
  },
  render: ({state}) =>
    <div>
      <h1> {ReasonReact.string(exercise.title)} </h1>
      <p> {ReasonReact.string(exercise.description)} </p>
      <div> {ReasonReact.string(string_of_int(state.count))} </div>
    </div>,
};
