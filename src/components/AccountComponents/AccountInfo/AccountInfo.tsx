import { useTranslation } from "react-i18next";
import { EmailIcon, UserIcon } from "../../../assets/icons";
import "./AccountInfo.scss"

interface UserInfoProps {
    given_name: string,
    family_name: string,
    email: string
}

export const AccountInfo: React.FC<UserInfoProps> = ({ given_name, family_name, email }) => {
    const { t } = useTranslation();
    return (
        <div className="personalData">
            <div className="personalData__block">
                <h3 className="personalData__title">{t('personalData')}</h3>
                <ul className="personalData__list">
                    <li className="list__item">
                        <div className="list__item__icon">
                            <UserIcon />
                        </div>
                        <div className="item__data">
                            <p className="underText">{t('fullName')}</p>
                            <p>{`${given_name} ${family_name}`}</p>
                        </div></li>
                    <li className="list__item">
                        <div className="list__item__icon blue-bg">
                            <EmailIcon />
                        </div>
                        <div className="item__data">
                            <p className="underText">{t('email')}</p>
                            <p>{ email }</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}