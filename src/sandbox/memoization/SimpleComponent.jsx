import React, { memo } from "react";

export default memo(function SimpleComponent({ user, printSomething }) {
  return (
    <div>
      <h3>
        The user name is {user.firstName} and age is {user.age}
      </h3>
      <button onClick={printSomething}>print</button>
    </div>
  );
});
