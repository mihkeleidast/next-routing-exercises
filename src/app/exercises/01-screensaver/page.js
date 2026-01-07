import React from 'react';
import Link from 'next/link';


function ScreenSaverExercise() {
  return (
    <>
      <p>
        Pick a color:
      </p>
      <ol>
        <li>
          <Link href="/exercises/01-screensaver/red">
            Red
          </Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/blue">
            Blue
          </Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/hotpink">
            Hotpink
          </Link>
        </li>
      </ol>
    </>
  );
}

export default ScreenSaverExercise;
