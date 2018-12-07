

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Courses$HushReason from "./Courses.bs.js";
import * as CourseDetail$HushReason from "./CourseDetail.bs.js";
import * as SelectCourses$HushReason from "./SelectCourses.bs.js";

var component = ReasonReact.reducerComponent("App");

function make(_children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */(function (self) {
              var initialUrl = ReasonReact.Router[/* dangerouslyGetInitialUrl */3](/* () */0);
              var match = initialUrl[/* path */0];
              if (match && !match[1]) {
                Curry._1(self[/* send */3], /* Select */[match[0]]);
              } else {
                Curry._1(self[/* send */3], /* ShowAll */0);
              }
              var watcherID = ReasonReact.Router[/* watchUrl */1]((function (url) {
                      var match = url[/* path */0];
                      if (match && !match[1]) {
                        return Curry._1(self[/* send */3], /* Select */[match[0]]);
                      } else {
                        return Curry._1(self[/* send */3], /* ShowAll */0);
                      }
                    }));
              return Curry._1(self[/* onUnmount */4], (function (param) {
                            return ReasonReact.Router[/* unwatchUrl */2](watcherID);
                          }));
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              var match = self[/* state */1][/* course */0];
              if (match !== undefined) {
                return ReasonReact.element(undefined, undefined, CourseDetail$HushReason.make(match, /* array */[]));
              } else {
                return ReasonReact.element(undefined, undefined, SelectCourses$HushReason.make(/* array */[]));
              }
            }),
          /* initialState */(function (param) {
              return /* record */[/* course */undefined];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, _state) {
              if (action) {
                var name = action[0];
                var exercise = Courses$HushReason.exercises.find((function (param) {
                        return param[/* id */0] === name;
                      }));
                if (exercise !== undefined) {
                  return /* Update */Block.__(0, [/* record */[/* course */exercise]]);
                } else {
                  return /* UpdateWithSideEffects */Block.__(2, [
                            /* record */[/* course */undefined],
                            (function (param) {
                                return ReasonReact.Router[/* push */0]("/");
                              })
                          ]);
                }
              } else {
                return /* Update */Block.__(0, [/* record */[/* course */undefined]]);
              }
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
