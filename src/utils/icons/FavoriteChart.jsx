import * as React from "react";

export function FavoriteChart(props) {
  return (
    <svg height={39} width={39} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M35.75 12.691v11.944a5.774 5.774 0 00-1.576-.487l-.5-.081-.424-.878a4.566 4.566 0 00-4-2.876 4.566 4.566 0 00-4 2.876l-.439.878-.487.081a4.58 4.58 0 00-3.835 2.925 4.589 4.589 0 001.4 4.631l.5.5-.049.195a5.72 5.72 0 00.114 3.348h-9.763c-5.915.003-9.441-3.523-9.441-9.438V12.691c0-5.915 3.526-9.441 9.441-9.441h13.618c5.915 0 9.441 3.526 9.441 9.441z"
        opacity={0.4}
      />
      <path d="M31.07 24.277l.52 1.057a2.308 2.308 0 001.479 1.105l.7.114c2.129.358 2.616 1.917 1.1 3.445l-.65.65a2.294 2.294 0 00-.536 1.9l.081.39c.585 2.567-.78 3.559-3.006 2.21l-.468-.294a2.241 2.241 0 00-2.08 0l-.471.293c-2.243 1.349-3.591.357-3.006-2.21l.081-.39a2.31 2.31 0 00-.536-1.9l-.65-.65c-1.512-1.543-1.024-3.087 1.104-3.443l.7-.114a2.269 2.269 0 001.478-1.106l.52-1.056c1.007-2.032 2.632-2.032 3.64-.001zM26.21 12.866a1.219 1.219 0 01.217 1.71l-3.76 4.851a2.862 2.862 0 01-3.994.483h-.006l-2.971-2.34a.413.413 0 00-.578.075l-3.867 5.02a1.219 1.219 0 01-1.931-1.487l3.869-5.023a2.85 2.85 0 014-.512l.008.007 2.97 2.335a.425.425 0 00.585-.067l3.748-4.836a1.219 1.219 0 011.71-.216z" />
    </svg>
  );
}