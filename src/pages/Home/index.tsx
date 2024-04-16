import UserButton from '../../components/UserButton';
import AddButton from '../../components/AddButton';
import { User } from '../../types/User';

import './style.css';
import { useState, useEffect } from "preact/hooks"

const TestUsers: User[] = [
	{id: 1, fullName: "Mark Reid", dateOfPayment: "10/06/2024", hasPaid: true}
]

export function Home() {

	const [users, setUsers] = useState<User[]>(TestUsers);
	const handleAddClick = () => {
		console.log('Add button clicked');
	};

	setUsers(TestUsers)
	useEffect(() => {
		
		console.log("Set Users: ", TestUsers)
	})

	return (
		<main>
			<h1>Members</h1>
			<section className="user-section">
			{users.map(user => (
        		<a href={`/user/${user.id}`}>
					<UserButton user={user} />
				</a>
      		))}
			</section>
			<section className="button-section">
				<AddButton onClick={handleAddClick} />
			</section>
		</main>
	);
}
