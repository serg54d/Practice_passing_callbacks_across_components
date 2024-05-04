import { Route } from "./Route";
import { Button } from "./components/Button";
import { AddNewItem } from "./components/AddNewItem";
import { UpdateItem } from "./components/UpdateItem";
import styles from './Styles.module.css'
import { RouteType } from "./App";

export type FlightProps = {
	date: string;
	flightTableID: string;
	routes: RouteType[];
	toggleFTIsBooked: (flightID: string, routeID: string, isBooked: boolean) => void;
	removeFT: (flightID: string) => void;
	updateFTDate: (flightID: string, newDate: string) => void;
	updateFTRoutesFrom: (flightID: string, routeID: string, newFrom: string) => void;
	updateFTRoutesTo: (flightID: string, routeID: string, newTo: string) => void;
	removeFTRoute: (flightTableID: string, routeID: string) => void
	addNewFTRoute: (flightTableID: string, from: string, to: string) => void
}

export const FlightTable = ({
	date,
	flightTableID,
	routes,
	toggleFTIsBooked,
	removeFT,
	updateFTDate,
	updateFTRoutesFrom,
	updateFTRoutesTo,
	removeFTRoute,
	addNewFTRoute,
}: FlightProps) => {


	const mappedRoutes = routes.map((route) => (
		<Route
			key={route.id}
			route={route}
			toggleFTIsBooked={toggleFTIsBooked}
			flightTableID={flightTableID}
			updateFTRoutesFrom={updateFTRoutesFrom}
			updateFTRoutesTo={updateFTRoutesTo}
			removeFTRoute={removeFTRoute}
		/>
	));

	const addNewFTRouteHandler = (from: string, to: string) => {
		addNewFTRoute(flightTableID, from, to)
	}

	const removeFlightTableHandler = () => removeFT(flightTableID);

	const updateFTDateHandler = (newDate: string) => {
		updateFTDate(flightTableID, newDate);
	};


	return (
		<div className={styles.ftContainer}>
			<Button title="Remove FlightTable" onClick={removeFlightTableHandler} />
			<h2 className={styles.headerFT}>FlightTable ID: </h2>
			<h2 className={styles.dateHeader}>
				Date: <UpdateItem oldTitle={date} callBack={updateFTDateHandler} />
			</h2>
			<div className={styles.addNewRouteContainer}>
				<AddNewItem
					onClick={addNewFTRouteHandler}
					flightTableID={flightTableID}
					title={"Add New Route"}
				/>
			</div>
			{mappedRoutes}
		</div>
	);
};


