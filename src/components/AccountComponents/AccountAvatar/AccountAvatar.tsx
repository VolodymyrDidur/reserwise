import "./AccountAvatar.scss"

interface ImageProps {
    image: string
}

export const AccountAvatar: React.FC<ImageProps> = ({ image }) => {
    return (
        <div className="avatar">
            <img className="avatar__image" src={ image } alt="Avatar" />
        </div>
    )
}