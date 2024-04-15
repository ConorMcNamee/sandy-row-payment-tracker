import UserButton from '../../components/UserButton';
import AddButton from '../../components/AddButton';
import './style.css';


export function Home() {

	const handleAddClick = () => {
		console.log('Add button clicked');
	  };
	return (
		<main>
			<h1>Members</h1>
			<section className="user-section">
				<UserButton fullName='Mark Reid' dateOfPayment='01/06/2002' hasPaid={true} />
				<UserButton fullName='Mark Reid' dateOfPayment='01/06/2002' hasPaid={true} />
				<UserButton fullName='Mark Reid' dateOfPayment='01/06/2002' hasPaid={true} />
				<UserButton fullName='Mark Reid' dateOfPayment='01/06/2002' hasPaid={true} />
				<UserButton fullName='Mark Reid' dateOfPayment='01/06/2002' hasPaid={true} />
				<UserButton fullName='Mark Reid' dateOfPayment='01/06/2002' hasPaid={true} />
				<UserButton fullName='Mark Reid' dateOfPayment='01/06/2002' hasPaid={true} />
				<UserButton fullName='Mark Reid' dateOfPayment='01/06/2002' hasPaid={true} />
				<UserButton fullName='Mark Reid' dateOfPayment='01/06/2002' hasPaid={true} />
				<UserButton fullName='Mark Reid' dateOfPayment='01/06/2002' hasPaid={true} />
				<UserButton fullName='Mark Reid' dateOfPayment='01/06/2002' hasPaid={true} />
				<UserButton fullName='Mark Reid' dateOfPayment='01/06/2002' hasPaid={true} />
			</section>
			<section className="button-section">
				<AddButton onClick={handleAddClick} />
			</section>
		</main>
	);
}
