'use client'

import * as React from 'react';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';



export default function GradientCircularProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress sx={{ position: 'absolute', top: '50vh', left: '50vw', 'svg circle': { stroke: 'url(#my_gradient)' } }} />
      {/* <div style={{position: 'absolute', top: '55.5vh', left: '48vw', fontSize: '1rem', color:'#6CB4EE'}}>Loading...</div> */}
    </React.Fragment>
  );
}

