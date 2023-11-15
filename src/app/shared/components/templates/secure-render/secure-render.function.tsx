import React from "react";

/**
 * Valdate if the dependencies are null and show the error page
 * @param render funtion with the code to render component
 * @param deps dependencies to validate
 * @returns Component
 */
export function secureRender<T>(
  render: (deps: T) => JSX.Element,
  deps: T | null,
) {
  if (!deps) {
    return <></>;
  }
  return render(deps);
}
