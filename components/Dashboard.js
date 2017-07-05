import React from 'react';

import SimpleComponent1 from './SimpleComponent1.js';
import SimpleComponent2 from './SimpleComponent2.js';
import SimpleComponent3 from './SimpleComponent3.js';


function Dashboard () {
  return (
    <article>
     <div>
            <SimpleComponent1 />
			<SimpleComponent2 />
			<SimpleComponent3 />
         </div>
    </article>
  )
}


export default Dashboard