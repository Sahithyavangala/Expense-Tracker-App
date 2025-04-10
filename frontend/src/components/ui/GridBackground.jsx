const GridBackground = ({ children }) => {
	return (
		<div className='w-full bg-black text-white '>
			<div className='absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
			{children}
		</div>
	);
};
export default GridBackground;
