type state = {course: option(Courses.exercise)};

type action =
  | ShowAll
  | Select(string);

let component = ReasonReact.reducerComponent("App");

let make = _children => {
  ...component,
  initialState: () => {course: None},
  reducer: (action, _state) =>
    switch (action) {
    | ShowAll => ReasonReact.Update({course: None})
    | Select(name) =>
      let exercise =
        Js.Array.find(
          ({id}: Courses.exercise) => id == name,
          Courses.exercises,
        );

      switch (exercise) {
      | Some(exercise) => ReasonReact.Update({course: Some(exercise)})
      | None =>
        ReasonReact.UpdateWithSideEffects(
          {course: None},
          _ => ReasonReact.Router.push("/"),
        )
      };
    },
  didMount: self => {
    let initialUrl = ReasonReact.Router.dangerouslyGetInitialUrl();
    switch (initialUrl.path) {
    | [id] => self.send(Select(id))
    | [] => self.send(ShowAll)
    | _ => self.send(ShowAll)
    };

    let watcherID =
      ReasonReact.Router.watchUrl(url =>
        switch (url.path) {
        | [id] => self.send(Select(id))
        | [] => self.send(ShowAll)
        | _ => self.send(ShowAll)
        }
      );
    self.onUnmount(() => ReasonReact.Router.unwatchUrl(watcherID));
  },
  render: self => {
    switch (self.state.course) {
    | None => <SelectCourses />
    | Some(exercise) => <div> {ReasonReact.string(exercise.title)} </div>
    };
  },
};
