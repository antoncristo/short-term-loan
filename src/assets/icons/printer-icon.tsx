import { type SVGProps } from 'react';

export const PrinterIcon = ({
	width = 18,
	height = 18
}: SVGProps<SVGSVGElement>): JSX.Element => (
	<div style={{ height: `${height}px` }}>
		<svg height={width} width={height} viewBox='0 -960 960 960'>
			<path d='M640-640v-120H320v120h-80v-160q0-17 11.5-28.5T280-840h400q17 0 28.5 11.5T720-800v160h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460ZM320-200h320v-160H320v160Zm0 80q-33 0-56.5-23.5T240-200v-80H120q-17 0-28.5-11.5T80-320v-200q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v200q0 17-11.5 28.5T840-280H720v80q0 33-23.5 56.5T640-120H320Zm480-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z' />
		</svg>
	</div>
);
