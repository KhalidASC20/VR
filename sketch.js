// variable to hold a reference to our A-Frame world
let world;

function setup() {

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	world.setFlying(true);

	let building = new Box({
		x: 5,
		y: 2,
		z: -2,
		width: 5,
		height: 5,
		depth: 5,
		red: 148,
		green: 148,
		blue: 146,
		asset:"building"
		// repeatX: 100,
		// repeatY: 100
	});
	world.add(building);

	let building2 = new Box({
		x: 0,
		y: 2,
		z: -2,
		width: 5,
		height: 5,
		depth: 5,
		red: 255,
		green: 0,
		blue: 0,
		asset:"building"
		// repeatX: 100,
		// repeatY: 100
	});
	world.add(building2);

	let floor = new Plane({
		x: 5,
		y:-0.5,
		z: 2,
		width: 3,
		height: 15,
		red: 194,
		green: 193,
		blue: 190,
		rotationX: -90,
		rotationY: 90,
		asset: "road"
		// repeatX: 100,
		// repeatY: 100
	  });
	  world.add(floor);

	  let building3 = new Box({
		x: 5,
		y: 2,
		z: 6,
		width: 5,
		height: 5,
		depth: 5,
		red: 148,
		green: 148,
		blue: 146,
		asset:"building"
		// repeatX: 100,
		// repeatY: 100
	});
	world.add(building3);

	let building4 = new Box({
		x: 0,
		y: 2,
		z: 6,
		width: 5,
		height: 5,
		depth: 5,
		red: 255,
		green: 0,
		blue: 0,
		asset:"building"
		// repeatX: 100,
		// repeatY: 100
	});
	world.add(building4);

	let car = new Box({
		x: 0,
		y: 0,
		z: 1.25,
		width: 2,
		hieght: .25,
		depth: .75,
		red: 255,
		green: 0,
		blue: 0,
		asset: "bus"
	});
	world.add(car);


}