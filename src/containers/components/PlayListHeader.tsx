import playListCover from '../../assets/images/cover/playlist.png'

type HeaderProps = {
    title: string;
    subtitle: string;
}

const PlayListHeader = ({ title, subtitle}:HeaderProps) => {
    return (

        <div className="header-container">
            <div className="header-background" />
            <div className="header-content">
                <img
                    src={playListCover}
                    alt="Capa da PlayList"
                    className="header-cover"
                />
                <div className="info">
                    <h3>{title}</h3>
                    <h6>{subtitle}</h6>
                </div>
            </div>
        </div>
    )
}

export default PlayListHeader;