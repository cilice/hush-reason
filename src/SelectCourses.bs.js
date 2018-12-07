

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Courses$HushReason from "./Courses.bs.js";

var component = ReasonReact.statelessComponent("SelectCourses");

function make(_children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              return React.createElement("div", undefined, React.createElement("h1", undefined, "Ready to breathe?"), React.createElement("p", undefined, "Stressed? Tired? Anxious? Try any of our breathing exercises to helpyou relax and achieve a clear state of mind."), Courses$HushReason.exercises.map((function (exercise) {
                                return React.createElement("div", {
                                            key: exercise[/* id */0]
                                          }, React.createElement("h2", undefined, exercise[/* title */1]), React.createElement("p", undefined, exercise[/* description */2]), React.createElement("button", {
                                                onClick: Curry._1(self[/* handle */0], (function (_event, _self) {
                                                        return ReasonReact.Router[/* push */0]("/" + (exercise[/* id */0] + "/"));
                                                      }))
                                              }, "Start"));
                              })));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
