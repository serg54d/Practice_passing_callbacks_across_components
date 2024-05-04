import { UpdateItem } from "./components/UpdateItem";
import styles from './Styles.module.css';
import { CheckBox } from "./components/CheckBox";
import { Button } from "./components/Button";
import { RouteType } from "./App";
import { MouseEventHandler } from "react";


type RouteProps = {
	route: RouteType
	toggleFTIsBooked: (flightTableID: string, routeID: string, isBooked: boolean) => void;
	flightTableID: string;
	updateFTRoutesFrom: (flightID: string, routeID: string, newFrom: string) => void;
	updateFTRoutesTo: (flightID: string, routeID: string, newTo: string) => void;
	removeFTRoute: (flightTableID: string, routeID: string) => void

};

export const Route = ({
	route,
	toggleFTIsBooked,
	flightTableID,
	updateFTRoutesFrom,
	updateFTRoutesTo,
	removeFTRoute
}: RouteProps) => {
	const handleRemoveFTRoute = () => {
		// alert('Почини меня, чтобы я могла удалять рейс. Сделай это через универсальную кнопку.')
		removeFTRoute(flightTableID, route.id)


	};

	const handleUpdateRouteFrom = (newFrom: string) => {
		updateFTRoutesFrom(flightTableID, route.id, newFrom)
	};

	const handleUpdateRouteTo = (newTo: string) => {
		updateFTRoutesTo(flightTableID, route.id, newTo);
	}

	const handleToggleFTIsBooked = (isDone: boolean) => {
		// alert('Во мне куча ошибок!')
		toggleFTIsBooked(flightTableID, route.id, isDone)
	}

	return (
		<>
			<table className={styles.ftTable}>
				<tbody>
					<tr className={styles.ftRow}>
						<td className={styles.ftCell}>
							{/* <button onClick={handleRemoveFTRoute}>X</button> */}
							<Button title="X" onClick={handleRemoveFTRoute} />
						</td>
						<td className={`${styles.ftCell} ${styles.pointerCursor}`}>
							<UpdateItem oldTitle={route.from} callBack={handleUpdateRouteFrom} />
						</td>
						<td className={`${styles.ftCell} ${styles.pointerCursor}`}>
							➔
						</td>
						<td className={`${styles.ftCell} ${styles.pointerCursor}`}>
							<UpdateItem oldTitle={route.to} callBack={handleUpdateRouteTo} />
						</td>
						<td className={styles.checkboxContainer}>
							<label>
								<CheckBox isDone={route.isBooked} updateCheckBox={handleToggleFTIsBooked} />
								{route.isBooked ? ' Booked' : ' Available'}
							</label>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

