"use strict";

//ADD NEW ITEMS COMPONENT
var Add = function Add(props) {
  return React.createElement(
    "form",
    null,
    React.createElement(
      "label",
      null,
      "Add New Task:",
      React.createElement("input", { type: "text", id: "task" })
    ),
    React.createElement(
      "button",
      { onClick: props.onClick },
      "Submit"
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FkZC5qcyJdLCJuYW1lcyI6WyJBZGQiLCJwcm9wcyIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxJQUFNQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRDtBQUFBLFNBQ1Q7QUFBQTtBQUFBO0FBQ0c7QUFBQTtBQUFBO0FBQUE7QUFDRSxxQ0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxNQUF0QjtBQURGLEtBREg7QUFJSztBQUFBO0FBQUEsUUFBUSxTQUFTQSxNQUFNQyxPQUF2QjtBQUFBO0FBQUE7QUFKTCxHQURTO0FBQUEsQ0FBWiIsImZpbGUiOiJhZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0FERCBORVcgSVRFTVMgQ09NUE9ORU5UXG5jb25zdCBBZGQgPSAocHJvcHMpID0+IChcbiAgIDxmb3JtPlxuICAgICAgPGxhYmVsPkFkZCBOZXcgVGFzazpcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrXCI+PC9pbnB1dD5cbiAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMub25DbGlja30+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuKTsiXX0=