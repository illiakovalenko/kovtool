import React from 'react';
import { PieLabel } from 'recharts';

const RADIAN = Math.PI / 180;

const Label: PieLabel = (props) => {
  const {
    cx,
    cy,
    midAngle,
    endAngle,
    startAngle,
    innerRadius,
    outerRadius,
    name,
    tooltipPosition,
  } = props;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

  const isLeftPart = midAngle < 290 && midAngle > 90;

  const rotate = `rotate(${isLeftPart ? -midAngle - 180 : -midAngle})`;

  const commonProps = {
    fill: 'black',
    className: 'spectrum-label',
    textAnchor: 'middle',
    dominantBaseline: 'central',
  };

  // If name is an array, we need to render multiple labels
  // By default label is render in the middle of the arc
  // We need to render all labels evenly spaced along the arc
  if (Array.isArray(name)) {
    return (
      <>
        {name.map((title, index) => {
          // 0.5 - to add some padding after the start of the arc
          // calculate angle for each label
          const angle = startAngle + (index + 0.5) * ((endAngle - startAngle) / name.length);

          const tooltipX = cx + radius * Math.cos(-angle * RADIAN);
          const tooltipY = cy + radius * Math.sin(-angle * RADIAN);
          const rotate = `rotate(${isLeftPart ? -angle - 180 : -angle})`;

          return (
            <text
              x={tooltipX}
              y={tooltipY}
              key={title + index}
              transform={rotate}
              style={{ transformOrigin: `${tooltipX}px ${tooltipY}px` }}
              {...commonProps}
            >
              {title}
            </text>
          );
        })}
      </>
    );
  }

  // Render single label at the middle of the arc
  return (
    <text
      x={tooltipPosition.x}
      y={tooltipPosition.y}
      transform={rotate}
      style={{ transformOrigin: `${tooltipPosition.x}px ${tooltipPosition.y}px` }}
      {...commonProps}
    >
      {name}
    </text>
  );
};

export default Label;
