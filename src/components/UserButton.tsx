
import './user_button_styles.css'
import { User } from '../types/User'

interface UserButtonProps {
    user: User
}


export default function UserButton({user}: UserButtonProps) {
    return (
        <div className="user-container">
            <div className="user-name-container">
                <p class="user-name">{user.fullName}</p>
            </div>
            <div className="user-content">
                <p>{user.dateOfPayment}</p>
            </div>
        </div>
    )
}