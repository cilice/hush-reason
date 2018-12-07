

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

var component = ReasonReact.reducerComponent("CourseDetail");

function make(exercise, _children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */(function (self) {
              var intervalId = setInterval((function (param) {
                      return Curry._1(self[/* send */3], /* Tick */0);
                    }), 1000);
              return Curry._1(self[/* onUnmount */4], (function (param) {
                            clearInterval(intervalId);
                            return /* () */0;
                          }));
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              return React.createElement("div", undefined, React.createElement("h1", undefined, exercise[/* title */1]), React.createElement("p", undefined, exercise[/* description */2]), React.createElement("div", undefined, String(param[/* state */1][/* count */0])));
            }),
          /* initialState */(function (param) {
              return /* record */[/* count */0];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              return /* Update */Block.__(0, [/* record */[/* count */state[/* count */0] + 1 | 0]]);
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
