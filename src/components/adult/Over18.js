import React, { useRef, useEffect } from 'react'
import Rellax from 'rellax'

const Over18 = () => {
	const rellaxRef = useRef()

	useEffect(() => {
		new Rellax('.animate', {
			// <---- Via class name
			speed: -10,
			center: false,
			wrapper: null,
			round: true,
			vertical: true,
			horizontal: false,
		})

		new Rellax(rellaxRef.current, {
			// <---- Via useRef element
			speed: -10,
			center: false,
			wrapper: null,
			round: true,
			vertical: true,
			horizontal: false,
		})
	}, [])

	return (
		<>
			<div class="rellax" data-rellax-speed="-3">
				<img
					src="https://images.pexels.com/photos/8536200/pexels-photo-8536200.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
					alt=""
				/>
			</div>

			<div class="rellax" data-rellax-speed="7">
				I’m super fast!!
				<img
					src="https://images.pexels.com/photos/8536200/pexels-photo-8536200.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
					alt=""
				/>
			</div>
		</>
	)
}

export default Over18
