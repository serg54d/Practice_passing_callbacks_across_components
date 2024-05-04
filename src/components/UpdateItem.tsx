import React, { ChangeEvent, useState } from 'react';
import { Input } from "./Input";
import styles from './../Styles.module.css';

type UpdateRouteProps = {
	oldTitle: string;
	callBack: (newDate: string) => void;
};

export const UpdateItem = ({ oldTitle, callBack }: UpdateRouteProps) => {
	const [edit, setEdit] = useState(false);
	const [newTitle, setNewTitle] = useState(oldTitle);

	const editHandler = () => {
		// alert('Двоечники подсказали, что и в локальном стейте сойдет!')
		callBack(newTitle)
		setEdit(false);
	};

	// const editTitleHandler = () => {
	// 	callBack(setNewTitle)
	// }
	return (
		edit
			? <Input newTitle={newTitle} setNewTitle={setNewTitle} editHandler={editHandler} />
			: <span className={styles.hoverEffect} onDoubleClick={() => setEdit(true)}>{oldTitle}</span>
	);
};


