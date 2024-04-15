
import './user_button_styles.css'

interface UserButtonProps {
    fullName: string,
    dateOfPayment: string,
    hasPaid: boolean
}


export default function UserButton({fullName, dateOfPayment, hasPaid}: UserButtonProps) {
    return (
        <div className="user-container">
            <div className="user-name-container">
                <p class="user-name">{fullName}</p>
            </div>
            <div className="user-content">
                <p>{dateOfPayment}</p>
            </div>
        </div>
    )
}