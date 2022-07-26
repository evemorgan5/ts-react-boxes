
/** Colored box presentation
 *
 * State: None
 *
 * Props:
 * - id (unique)
 * - width
 * - height
 * - backgroundColor
 * - remove (function to call)
 *
 * BoxList -> Box
 */

import { JsxAttribute } from "typescript";

 interface BoxPropsI {
  id: string;
  height: number;
  width: number;
  backgroundColor: string;
  remove: Function;
}

function Box({ 
    id, 
    width = 5, 
    height = 5, 
    backgroundColor, 
    remove 
}: BoxPropsI ) {

  /** Remove a box. */
  function handleRemove() {
    remove(id);
  }

  return (
    <div className="Box">
      <div className="Box-box"
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: backgroundColor
        }}
      />
      <button
        className="Box-removeBtn"
        onClick={handleRemove}>
        Remove The Box!
      </button>
    </div>
  );
}

export default Box;
