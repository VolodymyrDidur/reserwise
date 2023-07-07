import { useTranslation } from "react-i18next"
import { SignOutButton } from "../../../views/SignOutButton/SignOutButton"
import "./AccountSignOut.scss"

export const AccountSignOut: React.FC<{}> = ({ }) => {
    const { t } = useTranslation();
    return (
        <div className="signOut">
            <div className="signOut__block">
                <h3 className="signOut__title">{t('account')}</h3>
                <SignOutButton className="no" />
            </div>
        </div>
    )
}